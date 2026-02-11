import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('Register:', this.username, this.email, this.password);

    // временно считаем, что регистрация успешна
    this.router.navigate(['/login']);
  }
}
