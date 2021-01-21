import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges {

    @Input() book: BookModel;
    @Input() showImage: boolean;
    @Input() onSale: boolean;

    @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes.osSale);
    }

    ngOnInit(): void {
    }

    addToCart(): void {
        this.addToCartEvent.emit(this.book.isbn);
    }
}
