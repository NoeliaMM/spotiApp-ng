import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {  
  nuevosLanzamientos:any[]=[]

  constructor(private spotyfyService: SpotifyService ) { 

 this.spotyfyService.getNewReleases()
 .subscribe((resp:any)=>{
   console.log(resp)
   this.nuevosLanzamientos=resp.albums.items;
   console.log(resp.albums.items);
 });
    }

  ngOnInit(): void {
  }

}
