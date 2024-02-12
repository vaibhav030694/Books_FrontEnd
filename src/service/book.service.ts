import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books';
  tabChangeSubject :Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(this.apiUrl+'/getAllBooks');
  }

  getReadingListBooks() {
    // to do create api to fetch reding list books
    return this.http.get<any[]>(this.apiUrl+'/readingListbooks');
  }

  addBook(bookISBN: any) {
    return this.http.post<any>(this.apiUrl+'/addBookToUserlist', {ISBN:bookISBN});
  }

  updateBookStatus(isbn: string, status: string) {
    return this.http.patch<any>(`${this.apiUrl}`+'/updateStatus'+`/${isbn}`, { status });
  }

  deleteBook(isbn: string) {
    return this.http.delete<any>(`${this.apiUrl}`+'/removeBookFormUserList'+`/${isbn}`);
  }

  getReadingBookListStats() {
    // to do create api to fetch reding list books
    return this.http.get<any[]>(this.apiUrl+'/booksStatusData');
  }


  // downloadUserBooks() {
  //   return this.http.get<any[]>(this.apiUrl+'/download');
  // }
}
