import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books';
  tabChangeSubject :Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  private getHeaders(){
    const token =  sessionStorage.getItem('token');
    return new HttpHeaders().set('Authorization',  `Bearer ${token}`);
  }

  getBooks() {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/getAllBooks', {headers: this.getHeaders()});
  }

  getReadingListBooks() {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/readingListbooks', {headers: this.getHeaders()});
  }

  addBook(bookISBN: any) {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl+'/addBookToUserlist', {ISBN:bookISBN}, {headers: this.getHeaders()});
  }

  updateBookStatus(isbn: string, status: string) {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.patch<any>(`${this.apiUrl}`+'/updateStatus'+`/${isbn}`, { status }, {headers: this.getHeaders()});
  }

  deleteBook(isbn: string) {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl}`+'/removeBookFormUserList'+`/${isbn}`, {headers: this.getHeaders()});
  }

  getReadingBookListStats() {
    // const token =  sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/booksStatusData', {headers: this.getHeaders()});
  }
}
