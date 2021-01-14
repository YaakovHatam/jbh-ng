import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

    book: BookModel = {
        author: null,
        cover: null,
        desc: null,
        isbn: null,
        price: null,
        publishDate: null,
        quantity: null,
        title: null
    };


    constructor(private bookService: BookService) { }

    ngOnInit(): void {
    }

    createBook(book?: BookModel): void {
        if (!book) {
            this.bookService.books.push({ ...this.book });
        } else {
            book.price = +book.price;
            book.quantity = +book.quantity;
            this.bookService.books.push(book);
        }
    }

}
