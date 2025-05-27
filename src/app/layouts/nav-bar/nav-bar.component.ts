import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {
    // Listen for route changes to close the mobile menu
    this.router.events.subscribe(() => {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(route: string): boolean {
    return this.router.url === route ||
           (route !== '/' && this.router.url.startsWith(route));
  }

  // Close the menu when clicking outside of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isMenuButton = target.closest('button') && target.closest('button')?.getAttribute('type') === 'button';
    const isInsideMenu = target.closest('.lg\\:hidden') !== null;

    if (this.isMenuOpen && !isMenuButton && !isInsideMenu) {
      this.isMenuOpen = false;
    }
  }
}
