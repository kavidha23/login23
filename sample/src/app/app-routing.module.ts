import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';





const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'detail/:id', component: UserDetailsComponent },
    { path: 'edit/:id', component: UserEditComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }



