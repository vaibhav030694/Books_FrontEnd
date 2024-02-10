import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';
import { BookStatus } from '../../models/book-status-enum';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Subject } from 'rxjs/internal/Subject';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [MatListModule, MatIconModule,BookDetailsComponent, CommonModule, MatButtonToggleModule, MatCardModule],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.css'
})
export class ReadingListComponent {

  readingListbooks: Book[] = []
  readingListbooksCopy: Book[] = []
  filterStatus: any;
  @ViewChild('BookDetailsComponent',{static: false})
  bookDetailsComponent: BookDetailsComponent | undefined;



  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getReadingList();
   }

   getReadingList(): void {
    this.bookService.getReadingListBooks()
     .subscribe({
       next: (response: any)=>{
         this.readingListbooks = response
          this.readingListbooksCopy = JSON.parse(JSON.stringify(this.readingListbooks))
              },
              error: (e) =>{
              console.error('Error fetching books', e)
            }
          });
    }


   onChange(status: any){
    this.readingListbooks = this.readingListbooksCopy

    if(status != 'all'){
      let list: Book[] = []
      this.readingListbooksCopy.forEach(book => {
        if(book.status == status)
        {
          list.push(book);

        }
        this.readingListbooks = list;

      })
    }


   }
}
