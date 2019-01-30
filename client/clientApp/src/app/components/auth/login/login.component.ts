import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { IAuthResponseModel } from 'src/app/shared/model/auth-response.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.authService.login(this.loginForm.value).then(res => {
      let resData = res.data;

      if(!resData.errorMessage){
        this.localStorageService.set<string>('token',resData.token);
        return;
      }
      alert(resData.errorMessage);
    });

  }

  get f() { return this.loginForm.controls; }

}
