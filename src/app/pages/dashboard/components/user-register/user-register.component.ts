import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  newUser: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.newUser = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.checkPasswords }
    );
  }

  ngOnInit(): void {}

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.newUser.valid) {
      let data = new FormData();
      data.append('username', this.newUser.value.username);
      data.append('password', this.newUser.value.password);
      this.authService.register(this.newUser.value).subscribe((res) => {
        console.log(res);
        alert(res);
        this.newUser.reset();
      });
    }
  }
}
