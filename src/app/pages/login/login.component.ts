import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
  ) {
    this.authService.isLoggedIn().subscribe(res => {
    this.onLogin = res;
  }
  );
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required], [Validators.minLength(8)]],
    });
  }

  get Username() {
    return this.loginForm.get('username');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.toastr.success('Iniciando Sesion', 'Login');
      let cred = JSON.stringify(this.loginForm.value);
      this.authService.login(cred).subscribe(() => {
        console.log("session iniciada");
        this.closeModal.nativeElement.click();
        this.router.navigate(['/dashboard']);
        this.toastr.success('Sesion Iniciada', 'Login');
      });
    } else {
      this.toastr.error('Por favor verifique los campos', 'Error');
      console.log('Form is not valid');
    }
  }

  logout() {
    this.router.navigate(['/home']);
    this.authService.logout();
  }
}
