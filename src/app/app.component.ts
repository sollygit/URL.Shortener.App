import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { ShortenedUrl } from '../types/shortened-url.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  appVersion: string;
  restUrl: string;
  loading = false;
  items: ShortenedUrl[] = [];

  constructor(private configService: ConfigurationService) {
    this.appVersion = this.configService.appVersion;
    this.restUrl = this.configService.restUrl;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.toggleLoading(false);
    this.configService.getAll()
      .subscribe({
        next: items => {
          this.items = items.map(m => ({ ...m, code: m.code.toUpperCase() }));
          this.toggleLoading(true);
        },
        error: error => {
          console.error(error);
          this.items = [];
          this.toggleLoading(true);
        }
      });
  }

  toggleLoading(isCompleted: boolean) {
    this.loading = !isCompleted;
  }

}
