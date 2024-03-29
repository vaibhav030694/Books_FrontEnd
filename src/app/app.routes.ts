import { BookListComponent } from './book-list/book-list.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { UserGuard } from '../auth/auth-guard.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bookList', component: BookListComponent, canActivate: [UserGuard] },
  { path: 'readingList', component: ReadingListComponent, canActivate: [UserGuard] },
  { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [UserGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home'}
];
