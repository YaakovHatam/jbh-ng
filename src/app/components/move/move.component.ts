import { Component, HostListener, OnInit } from '@angular/core';

const SHIFT_SIZE = 15;

@Component({
    selector: 'app-move',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

    top = 200;
    left = 200;

    @HostListener('document:keyup', ['$event'])
    onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case 37:
                this.makeMove(0, -SHIFT_SIZE); // left arrow
                break;
            case 38:
                this.makeMove(-SHIFT_SIZE, 0); // up arrow
                break;
            case 39:
                this.makeMove(0, SHIFT_SIZE); // right arrow
                break;
            case 40:
                this.makeMove(SHIFT_SIZE, 0); // down arrow
                break;
            default:
                break;
        }
    }

    constructor() { }

    ngOnInit(): void {
    }

    makeMove(topShift: number, leftShift: number): void {
        this.top += topShift;
        this.left += leftShift;
    }

}
