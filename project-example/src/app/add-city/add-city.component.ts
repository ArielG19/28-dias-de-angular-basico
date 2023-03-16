import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor() { }
  //usando decorador input para pasar data del componente padre
  @Input() inputTitle!:string;

  //usando output para pasar data del componente hijo al padre
  //creamos una nueva instancia del event emmiter
  @Output() outputItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onAddNewItem(item:string){
    //console.log(item);
    this.outputItemEvent.emit(item);
  }

}
