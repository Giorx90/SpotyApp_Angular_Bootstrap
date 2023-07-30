import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Listo!!');
   }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAKL6J1zc3Q9ETDxcN7JKD2jlYkCrGf2RWZW15YXzSKZlwFtOeASZFEo5YNPR1LB1M9iA_Uit9cknuov4EpD0sjSn7Wa_-68oPfHqGjXNjpbh5U4PY'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });   
  } 


  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAKL6J1zc3Q9ETDxcN7JKD2jlYkCrGf2RWZW15YXzSKZlwFtOeASZFEo5YNPR1LB1M9iA_Uit9cknuov4EpD0sjSn7Wa_-68oPfHqGjXNjpbh5U4PY'
    })
    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8%2Cfr%3Bq%3D0.7&offset=0&limit=10`, { headers });
  }

}
