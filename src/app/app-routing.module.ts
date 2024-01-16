import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'post',component:PostListComponent},
{path:'login',component:LoginComponent},
{path:'**',redirectTo:'post'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
