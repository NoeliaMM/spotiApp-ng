import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    console.log('Servicio Spotity listo')
  }


  getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQA6hLWavxggJl2TNPWB9TU09sYF25ql_n3c0llgWv5ua_rwEVwA_iFRQ-7uc4HKzPQNfmc8CirFH18n-Bk'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtist(termino:string){
    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQA6hLWavxggJl2TNPWB9TU09sYF25ql_n3c0llgWv5ua_rwEVwA_iFRQ-7uc4HKzPQNfmc8CirFH18n-Bk'
    })


    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=track%2Cartist&market=US&limit=10&offset=5`,{headers});
 
  }
}
