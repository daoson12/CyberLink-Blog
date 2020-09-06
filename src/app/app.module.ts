import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './components/sections/forum/forum.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { ContactUsComponent } from './components/sections/contact-us/contact-us.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./security/auth/auth.interceptor";
import { CustomValidationService } from "./security/custom-validators";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ReversePipe } from './pipes/reverse.pipe';










@NgModule({
  declarations: [

    AppComponent,
    LandingPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewPostComponent,
    SidebarComponent,
    LoginComponent,
    SignUpComponent,
    ForumComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ReversePipe,




  ],
  imports: [


    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CustomValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
