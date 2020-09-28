import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductComponent } from './components/product/product.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';
import { ProductActionComponent } from './components/product-action/product-action.component';

import { HeartIcon } from './icons/heart-icon'
import { CheckIcon } from './icons/check-icon'
import { ShieldCheckIcon } from './icons/shield-check-icon'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ProductComponent,
    SellerInfoComponent,
    ProductActionComponent,

    HeartIcon,
    CheckIcon,
    ShieldCheckIcon
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
