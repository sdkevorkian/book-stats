import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { googleAPIKey } from './api-keys';

const googleKey = googleAPIKey;

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(search: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${googleKey}`);
  }
}
