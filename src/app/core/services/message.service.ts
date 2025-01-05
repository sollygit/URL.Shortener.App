import { inject, Injectable } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponseModel, RequestConfigModel, ShortenedUrlModel } from '../models';
import { ExternalApiService } from './external-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private externalApiService = inject(ExternalApiService)
  private httpClient = inject(HttpClient)

  getPublicResource() {
    return this.httpClient.get<any[]>('assets/products.json');
  }

  getProtectedResource = (): Observable<ApiResponseModel> => {
    const config: RequestConfigModel = {
      url: `${env.api.shortenerApiUrl}/api/urlshortener/protected`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as ShortenedUrlModel[]) : null,
          error,
        });
      })
    );
  };

  getAdminResource = (): Observable<ApiResponseModel> => {
    const config: RequestConfigModel = {
      url: `${env.api.shortenerApiUrl}/api/urlshortener/secured`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as ShortenedUrlModel[]) : null,
          error,
        });
      })
    );
  };
}
