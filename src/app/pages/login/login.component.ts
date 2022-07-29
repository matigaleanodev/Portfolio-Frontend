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
  @ViewChild('loginModal') myModal: any;
  @ViewChild('closeModal') closeModal: any;
  loginForm!: FormGroup;
  onLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.isLoggedIn().subscribe(res => {
    this.onLogin = res;
    console.log(res);
  }
  );
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
        console.log(data);
        this.closeModal.nativeElement.click();
        this.router.navigate(['/dashboard']);
      });
    } else {
      alert('Complete todos los campos');
      console.log('Form is not valid');
    }
  }

  logout() {
    this.router.navigate(['/home']);
    this.authService.logout();
  }
}
