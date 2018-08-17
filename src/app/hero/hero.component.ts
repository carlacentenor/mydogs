import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title: string = '¡Adopta a un perrito!';
	description: string = 'Aquí podrás encontrar algunos perritos esperando un hogar. '+
	'No esperes más y conoce a tu próximo mejor amigo';
  constructor() { }

  ngOnInit() {
  }

}
