import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista:any={};
  topTracks:any[]=[];
  loading:boolean;

  constructor(private activatedRoute: ActivatedRoute, 
    private spotifyService:SpotifyService) { 

    this.activatedRoute.params.subscribe(params=>{
      this.getArtistaById(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtistaById(id:string){
    this.loading=true;
    this.spotifyService.getArtista(id).subscribe((artista:any)=>{
      console.log(artista);
      this.artista=artista;
      this.loading=false;
    })
  }

  getTopTracks( id:string ){
    this.spotifyService.getTopTracksArtista(id).subscribe((tracks:any[])=>{
      console.log(tracks)
      this.topTracks=tracks;
     })
    
  
  }
  

}
