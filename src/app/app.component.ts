import { Component } from '@angular/core';
import { BookModel } from './models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    books: BookModel[] = [{
        title: 'יהדות הלכה למעשה',
        author: 'הרב לאו',
        price: 76,
        qunatity: 1,
        desc: "הספר 'יהדות הלכה למעשה' מאת הרב ישראל מאיר לאו עוסק במעגל החיים היהודי בלשון שווה לכל נפש. את הספר כתב הרב לאו יחד עם העיתונאי שאול מייזליש.",
        cover: 'http://www.sefer.org.il/UploadImages/000687/9949650.jpg'
    }, {
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        price: 89,
        qunatity: 1,
        desc: "הספר 'לקט השבת' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע''פ מרן השו''ע ונושאי כליו ושו''ת מאחרוני זמננו.",
        cover: 'http://www.sefer.org.il/UploadImages/000687/7755829.jpg'
    },
    {
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        price: 89,
        qunatity: 0,
        desc: "הספר 'לקט השבת' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע''פ מרן השו''ע ונושאי כליו ושו''ת מאחרוני זמננו.",
        cover: 'http://www.sefer.org.il/UploadImages/000687/7755829.jpg'
    },
    {
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        price: 89,
        qunatity: 0,
        desc: "הספר 'לקט השבת' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע''פ מרן השו''ע ונושאי כליו ושו''ת מאחרוני זמננו.",
        cover: 'http://www.sefer.org.il/UploadImages/000687/7755829.jpg'
    }];
}
