import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from '../book-details/book-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookDetailsComponent,MatInputModule, FormsModule ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent implements OnInit {

  books: Book[] = [];
  booksCopy: Book[] = []
  searchTermInput: string = '';



  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log('book list init')
   this.getBookList();
   this.bookService.tabChangeSubject.subscribe(tabValue =>{

    if(tabValue == 'refreshBookList'){
      console.log('refreshhhhhhhhoiiiiinnnnngggg')
      this.getBookList();
    }

})
  }

  getBookList(): void {
    this.bookService.getBooks()
    .subscribe({
      next: (response: any)=>{
        this.books = response
        this.booksCopy = JSON.parse(JSON.stringify(this.books))
      },
      error: (e) =>{
      console.error('Error fetching books', e)
    }
  });
  }

  filterBookList(){
    this.books = this.booksCopy;
    let searchInput = this.searchTermInput.trim().toLowerCase()
    if(searchInput.length != 0){
      let list: Book[] = []
      this.booksCopy.forEach(book => {
        if(book.name.toLowerCase().indexOf(searchInput) > -1)
        {
          list.push(book);
        }
        this.books = list;
      })
    }
  }

  refreshBookList(e: any) {
    console.log('refreshBookList')
    this.getBookList();
    this.bookService.tabChangeSubject.next('refreshReadingList')
    }

}
