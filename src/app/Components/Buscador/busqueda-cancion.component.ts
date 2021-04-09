import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiDeezerService } from 'src/app/Services/api-deezer.service';


@Component({
  selector: 'app-busqueda-cancion',
  templateUrl: './busqueda-cancion.component.html',
  styleUrls: ['./busqueda-cancion.component.scss']
})
export class BusquedaCancionComponent implements OnInit {

  @Output() searchQuery: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiDeezerService) { }

  ngOnInit(): void {}

  passQueryString(value:any) {
    this.searchQuery.emit(value);
    this.apiService.clearCache();
  }

  

}
