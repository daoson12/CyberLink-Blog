import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginButtonClicked() {
    this.router.navigate(['login']);
  };

}
