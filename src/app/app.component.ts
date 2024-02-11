import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from '../service/book.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../service/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    BookDetailsComponent,
    BookListComponent,
    MatToolbarModule,
  MatIcon],
  providers: [BookService,AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){

  }

navigateToStatistics() {
this.router.navigate(['/statistics'])
}
}
