import { Component, OnInit } from '@angular/core';
import { MessageService, ShortenedUrlModel } from '@app/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {
    items: ShortenedUrlModel[] = [];
    displayedColumns: string[] = ['code', 'longUrl', 'shortUrl'];
    shortenerApiUrl: string = env.api.shortenerApiUrl;
    message: string = '';

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getProtectedResource().subscribe((response) => {
      const { data, error } = response;
      if (data) {
        this.items = data as ShortenedUrlModel[];
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }

}
