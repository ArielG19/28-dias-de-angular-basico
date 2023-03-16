import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  citys: string[] = ['Madrid','Bilbao','Barcelona','Valencia'];
  selection!: string;

  onClickCity(city:string){
    //console.log(city);
    this.selection = city;
  }

  onAddCity(){
    
  }

}
