import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  categoryUrl:string='/cyberLink/category/'
  postUrl:string='/cyberLink/post/'

  constructor(private http:HttpClient) { }

//category Api Service
  addCategory(value:any):any{
    this.getAllPosts()
    return this.http.post(this.categoryUrl + 'create',value);
  }

  getAllCategories(): any {
    return this.http.get(this.categoryUrl + 'allCategories');
  }

  deleteCategoryById(id:any){
    return this.http.delete(this.categoryUrl + 'deleteCategory/' +id);
  }


   //Post Api Service
  savePostInformation(value: any): any {
    return this.http.post(this.postUrl + 'create', value);
  }

  getAllPosts(): any {
    return this.http.get(this.postUrl + 'allPosts');
  }

  deletePostById(id:any){
    return this.http.delete(this.postUrl + 'deletePost/' +id);
  }

}