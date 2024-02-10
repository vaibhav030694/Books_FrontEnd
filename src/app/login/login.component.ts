import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatCardModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  form: FormGroup =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });;

  // @Input() error: string | null;

@Output() submitEM = new EventEmitter();


  constructor(private authService: AuthService, private router: Router) {
    // this.form = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    // });
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: () => {this.router.navigate(['/app-book-list'])},
        error: (error) => console.error('Login failed', error)
    });
  }
}




// onsubmit(): void {
//   if (this.form.valid) {
//     this.submitEM.emit(this.form.value);
//   }
// }
