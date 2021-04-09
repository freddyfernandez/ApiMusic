import { Component,ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-objeto-cancion',
  templateUrl: './objeto-cancion.component.html',
  styleUrls: ['./objeto-cancion.component.scss']
})
export class ObjetoCancionComponent implements OnInit {

  @Input() music: any;
  player = new Audio;
  
  constructor( ) { }

  ngOnInit(): void {}

  playSong(audio: any) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio: any) {
    this.player.pause();
  }

}
