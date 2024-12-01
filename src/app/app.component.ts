import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string;
  appVersion: string;

  constructor(private configService: ConfigurationService) {
    this.title = this.configService.appTitle;
    this.appVersion = this.configService.appVersion;
  }

  ngOnInit(): void {
    console.log(this.configService.restUrl);
  }
}
