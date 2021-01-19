import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

    @Input() board: number[][];
    userBoard: number[][];

    constructor() { }

    ngOnInit(): void {
        console.log(this.board);
        this.userBoard = [];
        for (let i = 0; i < this.board.length; i++) {
            this.userBoard[i] = [];
        }
    }


    setUserChoice(row, col, val): void {
        console.log(row, col, val);
    }

}
