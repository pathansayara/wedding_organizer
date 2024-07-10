import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { ServicesComponent } from './menu/services/services.component';
import { TestimonialComponent } from './menu/testimonial/testimonial.component';
import { ContactComponent } from './menu/contact/contact.component';
import { GallaryComponent } from './menu/gallary/gallary.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    GallaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
