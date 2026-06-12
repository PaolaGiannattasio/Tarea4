import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  constructor(private router: Router) {

    const ultimaRuta = localStorage.getItem('ultimaRuta');

    if (ultimaRuta && window.location.pathname === '/') {
      this.router.navigateByUrl(ultimaRuta);
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        localStorage.setItem('ultimaRuta', event.urlAfterRedirects);
      }
    });
  }

}