import { Component, OnInit } from '@angular/core';
import { BookModel } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
    selector: 'app-shop',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    itemsInCart: string[];
    onSaleBooks: string[] = [
        '1',
        '3'
    ];
    books: BookModel[];

    constructor(private bookService: BookService) {
        this.itemsInCart = [];
    }

    ngOnInit(): void {
        this.books = this.bookService.books;
    }

    addToCart(isbn: string): void {
        this.itemsInCart.push(isbn);
    }
}
