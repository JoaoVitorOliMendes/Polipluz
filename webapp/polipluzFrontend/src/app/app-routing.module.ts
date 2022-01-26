import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentRoutes } from './components/componentsRoutes';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {
    path: 'main',
    component: SidenavComponent,
    children: componentRoutes
  },
  {
    path: 'login',
    component: LoginComponent
  },
  /**
   * {
   *  path: 'register',
   *  component: RegisterComponent
   * },
   */
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
