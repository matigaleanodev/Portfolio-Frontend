import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarAnimation } from 'src/app/animations/sidebar-animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SidebarAnimation]
})
export class LoginComponent implements OnInit {

  @Input() collapsed: boolean = false;
  loginForm!: FormGroup; 
  myModal:any = document.getElementById('loginModal')
  myInput:any = document.getElementById('loginInput')

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reminder: [false]
    });
  }

  ngOnInit(): void {
    this.myModal.addEventListener('shown.bs.modal', () => {
    this.myInput.focus()
    })
  }

  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      alert('Complete todos los campos');
      console.log('Form is not valid')
    }
  }

}
