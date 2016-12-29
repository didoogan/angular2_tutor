import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule 
],
  declarations: [ 
    AppComponent, 
    ProductListComponent,
    ProductFilterPipe,
    StarComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
