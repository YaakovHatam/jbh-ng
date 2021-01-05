import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    @Input() book: BookModel;

    constructor() {
        console.log(this.book.author);
    }

    ngOnInit(): void {
    }

    onUserClick(): void {

    }

}
