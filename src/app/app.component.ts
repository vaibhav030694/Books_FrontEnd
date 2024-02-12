import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from '../service/book.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BookDetailsComponent,
    BookListComponent,
    MatToolbarModule,
  MatIcon],
  providers: [BookService,AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  constructor(private router: Router,
    private bookService: BookService,
    private _snackBar: MatSnackBar){}

navigateToStatistics() {
  this.router.navigate(['/statistics']);
}

logout() {
  localStorage.removeItem("token");
  this.router.navigate(['/app-login']);
  this._snackBar.open('Logout Succesful!','', {
    duration: 1500
  });
}

navigateToHome() {
  this.router.navigate(['/app-home']);
  }
}
