import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from '../service/book.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BookDetailsComponent,
    BookListComponent,
    MatToolbarModule,
  MatIcon,
CommonModule],
  providers: [BookService,AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  currentPage : string = '';
  constructor(private router: Router,
    private bookService: BookService,
    private _snackBar: MatSnackBar){}


  isLoginPage(): boolean{
    this.currentPage =  window.location.href
    return this.currentPage.indexOf('login')>-1
  }


navigateToStatistics() {
  this.router.navigate(['/statistics']);
}

logout() {
  localStorage.removeItem("token");
  this.router.navigate(['/login']);
  this._snackBar.open('Logout Succesful!','', {
    duration: 1500
  });
}

navigateToHome() {
  this.router.navigate(['/app-home']);
  }
}
