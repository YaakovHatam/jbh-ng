import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
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
