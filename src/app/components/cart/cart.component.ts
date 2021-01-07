import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    @Input() itemsInCart: string[];
    @Input() books: BookModel[];

    constructor() {
    }

    ngOnInit(): void {
    }

    getBook(isbn: string): BookModel {
        return this.books.find(b => b.isbn === isbn);
        /*for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn === isbn) {
                return this.books[i];
            }
        }
        return null;
        */
    }

}
