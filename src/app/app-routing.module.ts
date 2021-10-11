import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path:'about',component: AboutpageComponent},
  {path: 'signup', component: SignuppageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
