import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { IAuthResponseModel } from 'src/app/shared/model/auth-response.model';
import { Router } from '@angular/router';



@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).then(res => {
      let getRes = res.data;

      if(!getRes.errorMessage){
        alert(getRes.errorMessage);
        this.router.navigateByUrl('/auth');
        return;
      }
      alert('1 ' + getRes.errorMessage);
    });

  }

  get f() { return this.registerForm.controls; }
}
