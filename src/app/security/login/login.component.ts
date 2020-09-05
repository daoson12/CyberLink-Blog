import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
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
}

}
