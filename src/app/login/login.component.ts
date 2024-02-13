import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  selectedTab: string = 'login'
  email: string = '';
  password: string = '';
  user = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {  }

  login() {
      this.authService.login(this.email, this.password)
        .subscribe({
          next: (response) => {
            this.openSnackBar('Login successful');
            localStorage.setItem("token", response.token)
            this.router.navigate(['/app-home'])},
          error: (error) => this.openSnackBar('Login failed')
      });
    }

    register() {
      console.log(this.user)
      this.authService.register(this.user)
        .subscribe({
          next: (response) => {
            this.openSnackBar('Registration successful. Please login to continue');
            this.setTabSelection('login')
            // localStorage.setItem("token", response.token)
            // this.router.navigate(['/login'])
          },
          error: (error) => this.openSnackBar('Registration failed')
      });
    }

    openSnackBar(message: string) {
      this._snackBar.open(message, '', {
        duration: 1500
      });
    }


    setTabSelection(tab: string) {
      this.selectedTab = tab
      }
  }
