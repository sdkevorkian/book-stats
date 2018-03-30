import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-stats',
  templateUrl: './book-stats.component.html',
  styleUrls: ['./book-stats.component.css']
})
export class BookStatsComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id');
  book: Object;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookSVC: BookService
  ) { }

  ngOnInit() {
    this.bookSVC.getBook(this.id).subscribe((book) => {
      this.book = book.volumeInfo;
      console.log(this.book);      
    });
  }

}
