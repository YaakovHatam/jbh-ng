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
        switch (e.key) {
            case 'Down': // IE/Edge specific value
            case 'ArrowDown':
                this.makeMove(0, -SHIFT_SIZE); // left arrow
                break;
            case 'Up': // IE/Edge specific value
            case 'ArrowUp':
                this.makeMove(-SHIFT_SIZE, 0); // up arrow
                break;
            case 'Left': // IE/Edge specific value
            case 'ArrowLeft':
                this.makeMove(SHIFT_SIZE, 0); // down arrow
                break;
            case 'Right': // IE/Edge specific value
            case 'ArrowRight':
                this.makeMove(0, SHIFT_SIZE); // right arrow
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
