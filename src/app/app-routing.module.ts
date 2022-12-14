import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DealComponent } from './deal/deal.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{
  path:"home",component:HomeComponent
},
  {
  path:"category",component:CategoryComponent 
},
  {
  path:"product",component:ProductComponent 
},
  {
  path:"deal",component:DealComponent 
},
  {
  path:"contact",component:ContactComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
