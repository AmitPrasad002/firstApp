import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { productComponent } from './products/product-list.component';
import { FormsModule} from '@angular/forms';
import { customPipes } from './shared/custom-pipe';
import { starRating} from './starRating/starRating';
import { ProductDetailComponent } from './products/product-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    starRating,
    customPipes,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
