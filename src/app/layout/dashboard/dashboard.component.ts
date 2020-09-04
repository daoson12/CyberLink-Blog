import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './../../components/post/post.service';
import { Subscription } from 'rxjs';

// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';

 declare const myChart:any;


 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categoryList: any = [];
  createPostList:any=[];
  subscription: Subscription;

  constructor(private router:Router, private service:PostService) {

   }

  ngOnInit() {
    myChart();

    this.getAllCategories();
    this.getAllCreatePosts();
  

  }
 // Get All Categories
 getAllCategories() {
  this.service.getAllCategories().subscribe(result => {
    this.categoryList = result;
    console.log(result)
  });
}

//get All Created Post
getAllCreatePosts(){
  this.service.getAllPosts().subscribe(result=>{
    this.createPostList=result;
    console.log(result)
  })
}


//counter to display all categories on th dashboard
totalCategory(): number {
  return this.categoryList.length;
}

//Counter to display all posts on the dashboard

totalPost(): number {
  return this. createPostList.length;
}
}