import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { App } from './app';

export const routes: Routes = [
    {path:'register', component:Register},
    {path:'login', component:Login},
    {path:'profile', component:Profile},
    {path:'resume-gen', component:App},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
