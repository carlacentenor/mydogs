import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly API = "https://api.petfinder.com/pet.find?format=json&key=3e81af9eb93099d3849950733a1bed8f&animal=dog&count=12&location=10462";
  constructor(private http: HttpClient) {

  }
  getDog(): Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.API}`);
  }
}
