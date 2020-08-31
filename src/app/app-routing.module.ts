import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { ContactUsComponent } from './components/sections/contact-us/contact-us.component';
import { ForumComponent } from './components/sections/forum/forum.component';



const routes: Routes = [ 
  { path: '', component: LandingPageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'sign-up', component: SignUpComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'forum', component: ForumComponent},
  {
    path:'home', component:HomeComponent,
    children: [

      { path: '', loadChildren: () => import('./layout/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: 'create-post', loadChildren: () => import('./components/post/create-post/create-post.module').then(m => m.CreatePostModule)},
      { path: 'post-list', loadChildren: () => import('./components/post/post-list/post-list.module').then(m => m.PostListModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
