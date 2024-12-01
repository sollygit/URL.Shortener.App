import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

  @Injectable()
export class ConfigurationService {
  public appVersion = environment.appVersion;
  public appTitle = 'URL Shortener App';
  public restUrl = environment.restUrl;
}
