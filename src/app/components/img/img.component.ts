import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  constructor() {
    //Before render
    //Nunca correr cosas async en un contructor
    //Solo corre una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    //Before render
    //Actualizar los cambios en los inputs
    //Corre muchas veces
    console.log('ngOnChanges', 'imgValue =>', this.img);

  }

  ngOnInit(): void {
    //Before & After render
    // Si se puede usar Async (Fetch, Promises)
    //Corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //After render
    // Handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    //Delete component
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
