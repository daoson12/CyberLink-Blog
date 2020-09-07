import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [PostListComponent],
  imports: [

    CommonModule,
    PostListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class PostListModule { }
