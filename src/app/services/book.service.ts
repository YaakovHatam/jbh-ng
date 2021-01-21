import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    books: BookModel[] = [{
        isbn: '1',
        title: 'יהדות הלכה למעשה',
        author: 'הרב לאו',
        publishDate: new Date(2012, 11, 10),
        price: 76,
        quantity: 1,
        desc: 'הספר \'יהדות הלכה למעשה\' מאת הרב ישראל מאיר לאו עוסק במעגל החיים היהודי בלשון שווה לכל נפש. את הספר כתב הרב לאו יחד עם העיתונאי שאול מייזליש.',
        cover: '/assets/Metro_Transit.png'
    }, {
        isbn: '2',
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        publishDate: new Date(2017, 4, 7),
        price: 89,
        quantity: 1,
        desc: 'הספר \'לקט השבת\' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע\'\'פ מרן השו\'\'ע ונושאי כליו ושו\'\'ת מאחרוני זמננו.',
        cover: '/assets/Metro_Transit.png'
    },
    {
        isbn: '3',
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        publishDate: new Date(2017, 0, 25),
        price: 89,
        quantity: 1,
        desc: 'הספר \'לקט השבת\' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע\'\'פ מרן השו\'\'ע ונושאי כליו ושו\'\'ת מאחרוני זמננו.',
        cover: 'http://www.sefer.org.il/UploadImages/000687/7755829.jpg'
    },
    {
        isbn: '4',
        title: 'ספר לקט השבת ב"כ - שו"ת בענייני שבת',
        author: 'הרב מנשה כהן',
        publishDate: new Date(2017, 2, 15),
        price: 89,
        quantity: 2,
        desc: 'לקט השבת\' מכיל שאלות ותשובות בענייני שבת עם ציוני מקורות, הערות והארות, מפי ראשונים ואחרונים, ופסקי הלכות ע\'\'פ מרן השו\'\'ע ונושאי כליו ושו\'\'ת מאחרוני זמננו.',
        cover: 'http://www.sefer.org.il/UploadImages/000687/7755829.jpg'
    }];

    constructor() { }
}
