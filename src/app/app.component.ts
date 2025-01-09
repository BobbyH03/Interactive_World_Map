import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interactive World Map';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);  // Set the page's title
  }
}
