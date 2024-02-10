import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../../service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [ MatIconModule, MatCardModule, CommonModule, MatSelectModule,MatButtonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})


export class BookDetailsComponent {
message: any;


  @Input()
  book!: Book;
  @Input() component: string = '';
  // @Input() filterStatus!: string;
  status: string = 'unread';


  constructor(private bookService: BookService,
    private _snackBar: MatSnackBar) {
      // this.bookService.filterSubject.subscribe(v   => {
      //   this.filterBookList(v)
      // });
    }


  updateStatus(isbn: any, status: any) {
         this.bookService.updateBookStatus(isbn, status)
         .subscribe({
           next: (response: any)=>{

             // book status updated
             this.openSnackBar('status updated')
           },
           error: (e) =>{
           console.error('Error adding book to reading list books', e)
         }
       });
    }
    delete(isbn: any) {
            this.bookService.deleteBook(isbn)
            .subscribe({
              next: (response: any)=>{

                // book is removed to reading list
                this.openSnackBar('book is removed to reading list')

                // update reading list
                //api call
              },
              error: (e) =>{
              console.error('Error adding book to reading list books', e)
            }
          });
    }
    addToReadingList(book: any) {
      this.openSnackBar('book is addded to reading list');
      // addBook
      this.bookService.addBook(book.ISBN)
      .subscribe({
        next: (response: any)=>{
          // book is addded to reading list
          this.openSnackBar('book is addded to reading list')
        },
        error: (e) =>{
        console.error('Error adding book to reading list books', e)
      }
    });
    }



    openSnackBar(message: string) {
        // this._snackBar.open(message);
        this._snackBar.open(message, '', {
          duration: 1500
        });
      }

      // filterBookList(status: string){
      //   console.log('filter reading list')
      //   //implement ui filter

      // }
}
