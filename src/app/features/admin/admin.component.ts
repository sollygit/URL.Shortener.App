import { Component, OnInit, inject } from '@angular/core';
import { MessageService, ShortenedUrlModel } from '@app/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  messageService = inject(MessageService);
  items: ShortenedUrlModel[] = [];
  displayedColumns: string[] = ['code', 'longUrl', 'shortUrl'];
  shortenerApiUrl: string = env.api.shortenerApiUrl;
  message: string = '';

  ngOnInit(): void {
    this.messageService.getAdminResource().subscribe((response) => {
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
