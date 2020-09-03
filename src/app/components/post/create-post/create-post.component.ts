import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from './../post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare const uploadImage: any;


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postFormGroup: FormGroup;
  categoryList: any = [];
  createPostList:any;
  // selectedFile: File;
  constructor(private formBuider: FormBuilder, private router: Router, private service: PostService) { }

  ngOnInit() {
    this.postFormGroup = this.formBuider.group({
      id: [],
      dateCreated: [],
      description: ['', [Validators.required]],
      excerpt:['', [Validators.required]],
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      image: [''],
      categoryId: ['', Validators.required]

    })
    uploadImage();

    this.getAllCategories();
  }

  // Get All Categories
  getAllCategories() {
    this.service.getAllCategories().subscribe(result => {
      this.categoryList = result;
      console.log(result)
    });
  }

  onSelectedFile(e){
    console.log(e.target.value)

    // if(e.target.files.length>0){
    //   const file=(e.target as HTMLInputElement).files[0];
    //   this.postFormGroup.get("image").setValue(file);
    // }

  }

  // get title(){
  //   return this.postFormGroup.get('title');
  // }
  // get slug(){
  //   return this.postFormGroup.get('slug');
  // }

// save post and deplay it to the post list
  savePost():any {
 

  
    var createpost= this.postFormGroup.value
    console.log(createpost)
     this.service.savePostInformation(createpost).subscribe(response => {
       console.log(response);
       this.postFormGroup.reset();
      //  this.router.navigate(["home/post-list"]);
     });
   }

}
