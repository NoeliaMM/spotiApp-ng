import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private spotyfyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.spotyfyService.getArtist(termino)
    .subscribe((resp:any)=>{
      console.log(resp)
    })
  }

}
