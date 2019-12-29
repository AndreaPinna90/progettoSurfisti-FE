import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Wind} from '../models/Wind';
import {of} from 'rxjs';


@Injectable()

export class WindService {
  private baseUrl = `${environment.apiUrl}/wind_spd`;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getWind = (city: string) => city ? this.httpClient.get<Wind>(`${this.baseUrl}/${city}`) : of(null);
}


