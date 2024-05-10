import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './public.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
