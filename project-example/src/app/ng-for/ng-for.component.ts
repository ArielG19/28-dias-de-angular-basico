import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { City } from '../model/city.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush solo usar inputs o outputs
})
export class NgForComponent implements OnInit {
  //injectamos nuestro servicio
  constructor(private readonly data:DataService) { }
//cities: string[] = ['Madrid','Bilbao','Barcelona','Valencia'];

  //cities es un array de tipo City
  cities: City[] = [];

  //selection!: string;
  selection!: City;
  searchCity!: '';

  ngOnInit(): void {
    //hacemos nuestra petecion get, para trear las ciudades
    this.data.getCityService().subscribe(res => {
      //this.cities recibe toda la data del response
      this.cities = [...res];
      //console.log(this.cities)
    });
  }

  
  onCitySelection(city:City){
    console.log(city._id);
    this.selection = city;
    //this.selection._id = city._id;
  }

  onAddCity(city:string):void{
    this.data.addCityService(city).subscribe(res => {
      //La repuesta sera guardar los datos
      this.cities.push(res)
    })
  }
  deleteCity(id:string){
   // this.cities.pop(id)
    console.log(id);
  }

}
