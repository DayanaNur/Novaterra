import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User } from '@core/services/auth.service';
import { CartService } from '@core/services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User | null = null;
  cartCount = 0;
  isMenuOpen = false;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.cartService.cart$
      .pipe(
        map(items =>
          items.reduce((sum, item) => sum + item.quantity, 0)
        )
      )
      .subscribe(count => this.cartCount = count);
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout(event: Event) {
    event.stopPropagation();
    this.authService.logout();
    this.cartService.clear();
    this.isMenuOpen = false;
  }

  @HostListener('document:click')
  handleClickOutside() {
    this.isMenuOpen = false;
  }
}
