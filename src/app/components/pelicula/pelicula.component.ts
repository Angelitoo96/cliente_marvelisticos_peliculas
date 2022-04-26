import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  linkIFrame:any;
  @Input() pelicula:Pelicula = new Pelicula(0,"","","","",true,"",)
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges():void {
    this.linkIFrame=this.sanitizer.bypassSecurityTrustResourceUrl(this.pelicula.trailer);
  }
}
