import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../../service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [ MatIconModule, MatCardModule, CommonModule, MatSelectModule,MatButtonModule,MatTooltipModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})


export class BookDetailsComponent {
message: any;


  @Input()
  book!: Book;
  @Input() component: string = '';
  status: string = 'unread';
  @Output() refreshReadingList: EventEmitter<any> = new EventEmitter();
  @Output() refreshBookList: EventEmitter<any> = new EventEmitter();


  constructor(private bookService: BookService,
    private _snackBar: MatSnackBar) {
    }


  updateStatus(isbn: any, status: any) {
         this.bookService.updateBookStatus(isbn, status)
         .subscribe({
           next: (response: any)=>{

             // book status updated
             this.openSnackBar('status updated')
             this.refreshReadingList.emit()
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
                this.refreshReadingList.emit()
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
          this.refreshBookList.emit();
        },
        error: (e) =>{
        console.error('Error adding book to reading list books', e)
      }
    });
    }



    openSnackBar(message: string) {
        this._snackBar.open(message, '', {
          duration: 1500
        });
      }

}
