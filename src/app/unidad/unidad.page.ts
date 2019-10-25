import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.page.html',
  styleUrls: ['./unidad.page.scss'],
})
export class UnidadPage implements OnInit {

  public unidad1:boolean=false;
  public unidad2:boolean=false;
  public unidad3:boolean=false;
  public unidad4:boolean=false;
  public unidad5:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  public onUnidadUno(){
    this.unidad1=true;
    this.unidad2=false;
    this.unidad3=false;
    this.unidad4=false;
    this.unidad5=false;
  }
  public onUnidadDos(){
    this.unidad1=false;
    this.unidad2=true;
    this.unidad3=false;
    this.unidad4=false;
    this.unidad5=false;
  }
  public onUnidadTres(){
    this.unidad1=false;
    this.unidad2=false;
    this.unidad3=true;
    this.unidad4=false;
    this.unidad5=false;
  }
  public onUnidadCuatro(){
    this.unidad1=false;
    this.unidad2=false;
    this.unidad3=false;
    this.unidad4=true;
    this.unidad5=false;
  }
  public onUnidadCinco(){
    this.unidad1=false;
    this.unidad2=false;
    this.unidad3=false;
    this.unidad4=false;
    this.unidad5=true;
  }
}
