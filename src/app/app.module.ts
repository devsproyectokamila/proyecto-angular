import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CartModalComponent } from './components/shopping-cart/cart-modal/cart-modal.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ToolbarComponent,
    CartModalComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
