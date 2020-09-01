import { Component, OnInit } from '@angular/core';

declare const uploadImage :any;
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    uploadImage();
  }
  

  
}
