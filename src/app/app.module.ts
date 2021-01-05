import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        CompTwoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
