import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookService } from './book.service';
import { BookCardComponent } from './book-card/book-card.component';
import { TruncatePipe } from './shared/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookCardComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
