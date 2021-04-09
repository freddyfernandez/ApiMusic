import { Component, OnInit,OnChanges, OnDestroy } from '@angular/core';
import { ApiDeezerService } from 'src/app/Services/api-deezer.service';




@Component({
  selector: 'app-lista-cancion',
  templateUrl: './lista-cancion.component.html',
  styleUrls: ['./lista-cancion.component.scss']
})
export class ListaCancionComponent implements OnInit {
  music: any;
  constructor(private apiservice: ApiDeezerService) { }

  ngOnInit(): void {
  }

  searchSong(event: any){
    this.apiservice.getMusicList(event).subscribe(music => {
      this.music= music;
    })
  }

}
