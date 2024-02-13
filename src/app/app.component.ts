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
import { CommonModule, PlatformLocation } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BookDetailsComponent,
    BookListComponent,
    MatToolbarModule,
  MatIcon,
CommonModule,
MatTooltipModule],
  providers: [BookService,AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  currentPage : string = '';
  constructor(private router: Router,
    private bookService: BookService,
    private _snackBar: MatSnackBar,
    private pl: PlatformLocation){}


  isLoginPage(): boolean{

    return this.pl.pathname.indexOf('login')>-1
  }


navigateToStatistics() {
  this.router.navigate(['/statistics']);
}

logout() {
  sessionStorage.removeItem("token");
  this.router.navigate(['/login']);
  this._snackBar.open('Logout Succesful!','', {
    duration: 1500
  });
}

navigateToHome() {
  this.router.navigate(['/home']);
  }
}
