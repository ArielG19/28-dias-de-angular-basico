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
  constructor(private readonly service:DataService) { }
//cities: string[] = ['Madrid','Bilbao','Barcelona','Valencia'];

  //cities es un array de tipo City
  cities: City[] = [];

  //selection!: string;
  selection!: City;
  searchCity!: '';
  editItem!:City;

  ngOnInit(): void {
    //hacemos nuestra petecion get, para trear las ciudades
    this.service.getCityService().subscribe(res => {
      //this.cities recibe toda la data del response
      this.cities = [...res];
      //console.log(this.cities)
    });
  }

  
  onCitySelection(city:City){
    //console.log(city._id);
    this.selection = city;
    
  }

  onAddCity(city:string):void{
    this.service.addCityService(city).subscribe(res => {
      //La repuesta sera guardar los datos
      this.cities.push(res)
      //limpiamos la seleccion
      this.onClearSelection();
    })
  }
  getCityId(city:City){
    this.editItem = city
  }

 onKeyUp(event: Event, editItem: City){
  console.log(editItem)
  //con los input hay una pequeña variacion
  const element = event.target as HTMLInputElement;
  this.editItem.name = element.value
  //console.log(this.editItem)
  
  //actualizamos nuestro servicio
   this.service.updateCityService(editItem).subscribe(res => {
      //almacenamos en un array temporal la lista sin la ciudad seleccionada
      //filter incluye todos lo elementos diferentes(!==) a id(seleccionamos)
      const tempoArray = this.cities.filter(city => city._id !== editItem._id);
      //actualizamos el array + la nueva ciudad(actulizacion)
      this.cities = [...tempoArray,this.editItem];

    })
 
}
  deleteCity(id:string){ 
   // console.log(id)
    if(confirm('¿Estas seguro que deseas eliminar esta ciudad?')){
      this.service.deleteCityService(id).subscribe(res => {
        //almacenamos en un array temporal la lista sin la ciudad eliminada
        //filter incluye todos lo elementos diferentes(!==) a id(el que elimninamos)
        const tempoArray = this.cities.filter(city => city._id !== id);
        //actualizamos nuestro array con lo que hay en el array temporal
        this.cities = [...tempoArray];

        //limpiamos la seleccion
        this.onClearSelection();
      })
    }
  }

  onClearSelection(){
    this.selection = {
      _id:'',
      name:''
    }
  }

}
