import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes: Routes = [
  { path: 'app-book-list', component: BookListComponent},
  { path: 'app-login', component: LoginComponent},
  { path: 'app-reading-list', component: ReadingListComponent},
  { path: 'app-home', component: HomeComponent},
  { path: 'statistics', component: StatisticsComponent},
  {path:'', redirectTo: '/app-home', pathMatch: "full"}
];
// {path:'', redirectTo: '/app-login', pathMatch: "full"}
