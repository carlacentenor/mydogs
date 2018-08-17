import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs = [];
  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.appService.getDog().subscribe(res => {
      this.dogs = res.petfinder.pets.pet;
    });
  }
}
