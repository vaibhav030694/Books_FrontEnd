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

  getBooks() {
    console.log(localStorage);
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/getAllBooks', {headers});
  }

  getReadingListBooks() {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/readingListbooks', {headers});
  }

  addBook(bookISBN: any) {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl+'/addBookToUserlist', {ISBN:bookISBN}, {headers});
  }

  updateBookStatus(isbn: string, status: string) {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.patch<any>(`${this.apiUrl}`+'/updateStatus'+`/${isbn}`, { status }, {headers});
  }

  deleteBook(isbn: string) {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl}`+'/removeBookFormUserList'+`/${isbn}`, {headers});
  }

  getReadingBookListStats() {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',  `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl+'/booksStatusData', {headers});
  }
}
