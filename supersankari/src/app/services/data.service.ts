import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
// import { Client, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  public postSupersankari(nimi: string, supersankari: string): Promise<any> {
    return this.http.post( '/supersankari',
      {nimi: nimi, supersankari: supersankari}
    ).toPromise();
  }
  public haeTulokset() {
    return this.http.get('/tulokset').toPromise();
  }
}

