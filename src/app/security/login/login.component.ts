import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from "../security.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  myloginForm: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.myloginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
     
    });
  }
  gotoSignup() {
   
    this.router.navigate(["sign-up"]);

  loginForm: FormGroup;
  constructor(private router:Router,
    private fb: FormBuilder,
    private service: SecurityService,
    private toastr:ToastrService
    ) { }

  ngOnInit() {
    sessionStorage.clear();
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  gotoSignup() {
    this.router.navigate(["signup"]);

  }
//   onSubmit(){
//     this.submitted = true;


//   this.router.navigate(['home']);
// }

onSubmit(form:FormGroup){
  console.log('email', form.value.email);
  console.log('password', form.value.password);
  this.submitted = true;
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Login Successful',
    showConfirmButton: true,
    
    // timer: 1500
  })
  this.router.navigate(['home'])

onSubmit() {
  this.submitted = true;

  if (this.loginForm.invalid) {
    const invalid = [];
    const controls = this.loginForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    this.submitted = false;
    this.toastr.error(
      "The Following fields are Invalid: " + invalid,
      "Invalid Fields"
    );
    return;
  }


  this.service.login(this.loginForm.value).subscribe(
    (res) => {


      if (res.access_token) {
        sessionStorage.setItem("token", res.access_token);
        this.authenticateAndGetUserRoles(this.loginForm.value);

      }


    },
    (error) => {
      this.submitted = false;
      if (error.status === 401) {
        this.toastr.error("Invalid Credentials");
      }

      if (error.status ===504 ) {
        this.toastr.warning("Check your Internet Connection");
      }
    }
  );
}

authenticateAndGetUserRoles(value: any) {
  this.service.authenticateAndGetUserRoles(value).subscribe(res => {
    if (res.response == 'Success') {

      this.submitted = false;
      sessionStorage.setItem('loggedInUser', JSON.stringify(res.data));
      this.toastr.success('Login Successful!');
      this.router.navigate(['home']);

    }

  },
    error => {
      this.toastr.error("ERROR GETTING USER ROLES");
    }
  )

}

}
