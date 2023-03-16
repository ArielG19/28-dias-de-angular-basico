import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-city',
  template: `<button>{{titleBtn}}</button>`,
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor() { }
  //usando decorador input para pasar data del componente padre
  @Input() titleBtn!:string;
  ngOnInit(): void {
  }

}
