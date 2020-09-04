import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from './../post.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  createPostList:any=[];
  postFormGroup: FormGroup;
  subscription: Subscription;
  categoryList: any = [];
    constructor(private formBuider: FormBuilder, private router: Router, private service: PostService) { }

  ngOnInit() {
    this.getAllCreatePosts();
  
    // this.postFormGroup = this.formBuider.group({
    //   id: [],
    //   dateCreated: [],
    //   description: ['', [Validators.required]],
    //   excerpt:['', [Validators.required]],
    //   title: ['', [Validators.required]],
    //   slug: ['', [Validators.required]],
    //   image: [''],
    //   categoryId: ['', Validators.required]

    // })

    this.getAllCategories();
  }
 // Get All Categories
 getAllCategories() {
  this.service.getAllCategories().subscribe(result => {
    this.categoryList = result;
    console.log(result)
  });
}

  gotocreatepost(){
    this.router.navigate(["home/create-post"]);

  }
//get All Created Post
  getAllCreatePosts(){
    this.service.getAllPosts().subscribe(result=>{
      this.createPostList=result;
      console.log(result)
    })
  }

  
//delete a post
deletePost(id:any){
  this.service.deletePostById(id).subscribe(response=>{
    this.getAllCreatePosts();
    console.log(response)
    
  })
}
//update post
updatePost(data: any){
  this.postFormGroup.patchValue(data);
}

}
