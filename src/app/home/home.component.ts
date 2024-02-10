import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BookListComponent } from '../book-list/book-list.component';
import { ReadingListComponent } from '../reading-list/reading-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, BookListComponent, ReadingListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
