import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() size: number;

    gameArray: number[][][] = [];
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        const afterPararms = paramsRes => {
            this.size = +paramsRes.get('size');
            console.log(+paramsRes.get('size'));

            for (let i = 0; i < Math.pow(this.size, 2); i++) {
                this.gameArray.push([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            }
        };

        this.activatedRoute.paramMap.subscribe(afterPararms);

    }

}
