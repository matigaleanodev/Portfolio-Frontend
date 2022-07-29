import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarAnimation } from 'src/app/animations/sidebar.animations';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SidebarAnimation],
})
export class LoginComponent {
  @Input() collapsed: boolean = false;
  loginForm!: FormGroup;
  myModal: any = document.getElementById('loginModal');
  @ViewChild('closeModal') closeModal: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      let cred = JSON.stringify(this.loginForm.value);
      this.authService.login(cred).subscribe((data: any) => {
        this.closeModal.nativeElement.click();
        this.router.navigate(['/about']);
      });
    } else {
      alert('Complete todos los campos');
      console.log('Form is not valid');
    }
  }
}
