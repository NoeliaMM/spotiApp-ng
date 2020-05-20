import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    console.log('Servicio Spotity listo')
  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`

    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQBb2vPujkkIme2TdE4MN__WlQaS5578gdWbwZ8GiBPDwYp1JdV9EreDWNV-Pqs94PWxgW9HktfiYPgVyjk'
    })

    return this.http.get(url,{headers});
  }


  getNewReleases(){

    return this.getQuery('browse/new-releases?country=es&limit=20&offset=5').pipe(map(data=>data['albums'].items));   
    
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=track%2Cartist&market=US&limit=10&offset=5`)
          .pipe(map(data=>data['artists'].items )); 
  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`)
    // .pipe(map(data=>data['artists'].items )); 
  }

  getTopTracksArtista(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
    .pipe(map(data=>data['tracks'] )); 
  }

  
}
