import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.page.html',
  styleUrls: ['./hamburguesa.page.scss'],
})
export class HamburguesaPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      url: ''
    },
    {
      title: 'Unidad',
      url: '/menu/unidad'
    }
  ];

  selectedPath = '';


  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }


}
