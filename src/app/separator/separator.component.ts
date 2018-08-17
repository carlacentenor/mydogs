import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {
  //todas estas variables podemos usarlas en nuestro template.
  description: string = '¿Sabìas que los dueños de los perros son menos propensos a sufrir de depresión';

  constructor() { }

  ngOnInit() {
  }

}
