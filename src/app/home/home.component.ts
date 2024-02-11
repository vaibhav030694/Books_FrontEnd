import { Component } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { BookListComponent } from '../book-list/book-list.component';
import { ReadingListComponent } from '../reading-list/reading-list.component';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, BookListComponent, ReadingListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private bookService: BookService) {}

onTabChanged(event: MatTabChangeEvent) {
// console.log(event.index)
// this.bookService.tabChangeSubject.next(event.index)

}

}
