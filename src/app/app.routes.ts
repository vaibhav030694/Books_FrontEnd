import { BookListComponent } from './book-list/book-list.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from '../auth-guard/auth-guard.service';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app-book-list', component: BookListComponent, canActivate: [UserGuard] },
  { path: 'app-reading-list', component: ReadingListComponent, canActivate: [UserGuard] },
  { path: 'app-home', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [UserGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
