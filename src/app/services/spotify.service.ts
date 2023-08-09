import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Listo!!');
   }

  getQuery ( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCF3o59e41xrEjw0POJPoIcOR01hgm4CX4K98zXGNeYoktvGt8eUH5m96Q5B8XiObIiNkJOt8-DXRtFXBuNzpRpazvcEcEA6PPt7x6kjZhchc6IpQA'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));  
  } 


  getArtistas(termino: string) {
    
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8%2Cfr%3Bq%3D0.7&offset=0&limit=10`)
      .pipe( map( (data:any) => {
        return data.artists.items;
      }));
  }

  getArtista(id: string) {
    
    return this.getQuery(`artists/${id}`);
  
  }

  getTopTracks(id: string) {
    
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map( (data: any) => data['tracks']));
  
  }


}
