import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DialogModule],
  styleUrl: '../home/home.component.css',
  templateUrl: './articles.component.html',
})
export class ArticlesPageComponent {
  constructor(public dialog: Dialog) {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      window.document.addEventListener('mousemove', (evt) => {
        const x = evt.clientX / innerWidth;
        const y = evt.clientY / innerHeight;

        root.style.setProperty('--mouse-x', x.toString());
        root.style.setProperty('--mouse-y', y.toString());
      });
    }
  }
}
