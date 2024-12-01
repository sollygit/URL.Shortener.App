import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../environments/environment';
import { ShortenedUrl } from '../types/shortened-url.type';

@Injectable({providedIn: 'root'})
export class ConfigurationService {
  public appVersion = environment.appVersion;
  public restUrl = environment.restUrl;
  public get getAllUrl() { return `${environment.restUrl}/api/urlshortener`; }

  constructor(private http: HttpClient) {
  }

  public getAll() {
    let result = this.http.get<ShortenedUrl[]>(`${this.getAllUrl}`);
    return result.pipe(map(response => {
      if (response == null)
        throw new Error("Something went wrong");
      return response;
    }));
  }

}
