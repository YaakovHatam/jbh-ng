import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DescLimitPipe } from './pipes/desc-limit.pipe';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        DescLimitPipe,
        CartComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
