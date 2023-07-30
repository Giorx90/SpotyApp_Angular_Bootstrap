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
      'Authorization': 'Bearer BQAFjSfd_wx7D3ty-KJLPwWIOkFFAjBRJ7usy5ex7otIMv9QavuQ7jCmEVM79vhk79gIJF4O9EfsfXsQKLEFCl_gSl_C-gbO42Dw8JPLGOSU7MD1bS0'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      

  }

}
