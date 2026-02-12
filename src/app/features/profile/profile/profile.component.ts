import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/services/auth.service';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User | null = null;

  ecoPoints = 120;
  purchases = 6;
  co2Saved = 14;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;

      // если вдруг пользователь null → сразу на главную
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }
getProgress(): number {
  const maxPoints = 300; // максимум для шкалы
  return Math.min((this.ecoPoints / maxPoints) * 100, 100);
}

  getEcoLevel(): string {
    if (this.ecoPoints >= 300) return 'Planet Guardian 🌍';
    if (this.ecoPoints >= 200) return 'Eco Hero 🌳';
    if (this.ecoPoints >= 100) return 'Conscious Buyer 🌿';
    return 'Green Beginner 🌱';
  }

  logout() {
    this.authService.logout();
    this.cartService.clear();
    this.router.navigate(['/']);   // 🔥 ВОТ ЭТО ГЛАВНОЕ
  }
}
