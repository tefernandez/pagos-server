import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const base_url = environment.base_cec_url;
@Injectable({
  providedIn: 'root'
})

export class ElectronicDebitService {

  constructor(
    private http: HttpClient
  ) { }

    getCec(){
      return this.http.get(`${base_url}/cee/00000000000001`)
    }
}
