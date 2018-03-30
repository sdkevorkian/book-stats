import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: any;
  @Input() id: string;
  char: number;
  maxChar: number = 140;
  showMore: boolean;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 769) {
      this.maxChar = 280;
    }
    this.char = this.maxChar;
    if (this.book.description) {
      this.showMore = this.book.description.length > this.char;
    }
    console.log(this.book);
  }
  toggleExpand() {
    if (this.char === this.maxChar) {
      this.char = 0;
      this.showMore = false;
    } else {
      this.char = this.maxChar;
      this.showMore = true;
    }
  }
}
