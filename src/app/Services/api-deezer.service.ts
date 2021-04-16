import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { publishReplay, refCount } from 'rxjs/operators';
import { Coleccion } from 'src/app/Model/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDeezerService {

  //iTunesUrl = 'https://itunes.apple.com/search';
  iTunesUrl = 'http://localhost:4200/api';
  
  music!: Observable<Coleccion[]>;

  constructor(private httpClient: HttpClient) { }

  getMusicList(queryString:any) : Observable<Coleccion[]>{
      //control de data observable
      if(queryString!=''){
        this.music = this.httpClient.get<Coleccion[]>(`${this.iTunesUrl}?q=${queryString}`).pipe(
          publishReplay(1),
          refCount(),
          
        );

      } 
    return this.music;
  
  }

  
  clearCache() {
    this.music = new Observable<Coleccion[]>();
  }
 

}
