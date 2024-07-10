import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { ServicesComponent } from './menu/services/services.component';
import { TestimonialComponent } from './menu/testimonial/testimonial.component';
import { ContactComponent } from './menu/contact/contact.component';
import { GallaryComponent } from './menu/gallary/gallary.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'gallary',
    component:GallaryComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
