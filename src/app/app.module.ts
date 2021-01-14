import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DescLimitPipe } from './pipes/desc-limit.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CreateBookComponent } from './components/create-book/create-book.component';

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        DescLimitPipe,
        CartComponent,
        CurrencyPipe,
        CreateBookComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
