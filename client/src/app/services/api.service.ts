import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { tap } from "rxjs/operators"

import { BASE_API_URL } from './api-url.service';


@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _api: string
  ) { }

  getInitialData() {
    return this._http.get(
      this._api + "\initial_data", { observe: 'response' }
    )
  }

  postCalculate(data: any) {
    return this._http.post(
        this._api + "\calculate", data
      ).pipe(
        tap((data) => {
          console.log("DATA", data);
        })
      );
  }

  
}