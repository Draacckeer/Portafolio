import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuOpen = false;

  isDarkMode = false;

  ngOnInit(){
    this.verifyDarkMode();
  }

  verifyDarkMode(): void {
    const darkModeValue = localStorage.getItem('darkMode');
    if (darkModeValue !== null) {
      const isDark = darkModeValue === 'true';
      if (isDark) {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
