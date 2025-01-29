import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'', redirectTo:"home", pathMatch:'full'},
    {path:"home", component:HomeComponent, title:"home"},
    {path:"contact", component:ContactComponent, title:"contact"},
    {path:"about", component:AboutComponent, title:"about"},
    {path:"portfolio", component:PortifolioComponent, title:"portfolio"},
    {path:"**", component:NotfoundComponent, title:"Error 404"}
];
