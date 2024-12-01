import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { ShortenedUrl } from '../types/shortened-url.type';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title: string;
  public appVersion: string;
  public items: ShortenedUrl[] = [];

  constructor(private configService: ConfigurationService) {
    this.title = this.configService.appTitle;
    this.appVersion = this.configService.appVersion;
  }

  ngOnInit(): void {
    console.log(this.configService.getAllUrl);
  }
}
