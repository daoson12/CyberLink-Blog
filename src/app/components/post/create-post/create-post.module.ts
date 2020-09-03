import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreatePostComponent],
  imports: [


  CommonModule,
    CreatePostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatePostModule { }
