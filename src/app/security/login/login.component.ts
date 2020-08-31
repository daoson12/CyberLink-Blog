import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoSignup() {
    this.router.navigate(["sign-up"]);
  }
//   onSubmit(){
//     this.submitted = true;


//   this.router.navigate(['home']);
// }
onSubmit(){
  this.submitted = true;
  this.router.navigate(['home'])
}

}
