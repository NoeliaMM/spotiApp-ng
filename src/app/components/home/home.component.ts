import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {  
  nuevosLanzamientos:any[]=[];
  loading:boolean;

  constructor(private spotyfyService: SpotifyService ) { 
    this.loading=true;

 this.spotyfyService.getNewReleases()
    .subscribe((resp:any)=>{
      this.nuevosLanzamientos=resp;
      this.loading=false;
      });
    }

  ngOnInit(): void {
  }

}
