import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DescLimitPipe } from './pipes/desc-limit.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BoardComponent } from './soduko/board/board.component';
import { SquareComponent } from './soduko/square/square.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { MoveComponent } from './components/move/move.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'soduko/:size', component: BoardComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'move', component: MoveComponent },
    { path: 'weather', component: WeatherComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        DescLimitPipe,
        CartComponent,
        CurrencyPipe,
        CreateBookComponent,
        BoardComponent,
        SquareComponent,
        HomeComponent,
        ShopComponent,
        MoveComponent,
        WeatherComponent,
        TesttPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
