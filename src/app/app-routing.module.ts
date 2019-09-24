import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './nav/header/header.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BookingComponent } from './booking/booking.component';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';

import { LogoutComponent } from './admin/logout/logout.component';
import { ViewmenuComponent } from './components/viewmenu/viewmenu.component';

const routes: Routes = [

{path:'', component: HeaderComponent },
{ path: 'about', component: AboutComponent  },
{ path: 'signup', component: SignupComponent  },
{ path: 'signin', component: SigninComponent  },

{ path: 'booking', component: BookingComponent },
{ path: 'user', component: UserComponent  },
{ path: 'admin-home', component: AdminHomeComponent  },
{ path: 'admin-menu', component: AdminMenuComponent  },
{ path: 'logout', component: LogoutComponent },
{ path: 'menu', component: ViewmenuComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
