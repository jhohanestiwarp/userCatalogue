import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = `${environment.API_URL}`

  constructor(private http: HttpClient) { }

  getAlbumAll(){
    return this.http.get(`${this.apiUrl}/photos`)
  }

  getAlbumById(id: number){
    return this.http.get(`${this.apiUrl}/photos/${id}`)
  }
}
