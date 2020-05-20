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
  error:boolean;
  mensajeError:string;

  constructor(private spotyfyService: SpotifyService ) { 
    this.loading=true;
    this.error=false

 this.spotyfyService.getNewReleases()
    .subscribe((resp:any)=>{
      this.nuevosLanzamientos=resp;  
      this.loading=false;
      }, (err)=>{
        this.loading=false;
        this.error=true;
        this.mensajeError=err.error.error.message;
      });
    }

  ngOnInit(): void {
  }

}
