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
  private getUserId(){
    return sessionStorage.getItem('emailId')
  }

  getBooks() {
    return this.http.get<any[]>(this.apiUrl+'/getAllBooks'+`/${this.getUserId()}`, {headers: this.getHeaders()});
  }

  getReadingListBooks() {
    return this.http.get<any[]>(this.apiUrl+'/readingListbooks'+`/${this.getUserId()}`, {headers: this.getHeaders()});
  }

  addBook(bookISBN: any) {
    return this.http.post<any>(this.apiUrl+'/addBookToUserlist'+`/${this.getUserId()}`, {ISBN:bookISBN}, {headers: this.getHeaders()});
  }

  updateBookStatus(isbn: string, status: string) {
        return this.http.patch<any>(`${this.apiUrl}`+'/updateStatus'+`/${isbn}`,
                                  {emailId: this.getUserId(), status },
                                  {headers: this.getHeaders()});
  }

  deleteBook(isbn: string) {
    return this.http.delete<any>(`${this.apiUrl}`+'/removeBookFormUserList'+`/${this.getUserId()}/${isbn}`, {headers: this.getHeaders()});
  }

  getReadingBookListStats() {
    return this.http.get<any[]>(this.apiUrl+'/booksStatusData'+`/${this.getUserId()}`, {headers: this.getHeaders()});
  }
}
