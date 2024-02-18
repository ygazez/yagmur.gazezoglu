import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      window.document.addEventListener('mousemove', (evt) => {
        const x = evt.clientX / innerWidth;
        const y = evt.clientY / innerHeight;

        root.style.setProperty('--mouse-x', x.toString());
        root.style.setProperty('--mouse-y', y.toString());
      });
      // Your client-side code that uses window goes here
    }
  }
}
