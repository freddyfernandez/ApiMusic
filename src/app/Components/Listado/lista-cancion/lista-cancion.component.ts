import { Component, OnInit,OnChanges, OnDestroy } from '@angular/core';
import { Coleccion } from 'src/app/Model/cancion.model';
import { ApiDeezerService } from 'src/app/Services/api-deezer.service';




@Component({
  selector: 'app-lista-cancion',
  templateUrl: './lista-cancion.component.html',
  styleUrls: ['./lista-cancion.component.scss']
})
export class ListaCancionComponent implements OnInit {
  music: Coleccion[] = [];
  constructor(private apiservice: ApiDeezerService) { }

  ngOnInit(): void {
  }

  searchSong(event: string){
 
      this.apiservice.getMusicList(event).subscribe((music:Coleccion[])=> {
        this.music=music; 
      })
    console.log(this.music);
  }

}
