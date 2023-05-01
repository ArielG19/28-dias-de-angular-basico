import { Pipe, PipeTransform } from "@angular/core";
import { of } from "rxjs";
import { City } from "../model/city.model";
@Pipe({
    name:'pipeFilter',
})
export class FilterPipe implements PipeTransform{

    //value -> el valor que vamos a recibir en este caso un array con las ciudades
    //tambien pasamos un argumento -> ciudad a buscar
    //devolvemos un array de string -> con las ciudades encontradas o los datos encontrados

    
    //transform(value: string[], args: string): string[] {

    transform(value: City[], args: string): City[] {

        //validamos el filtro
        //si el argumento de de busqueda es vacio o no se ha ingresado ningun caracter
        // o mayor a 3 caracteres ingresado
        if(!args || args.length > 3){
            return value;
        }

        //almacenamos el resutado de nuestra busqueda.
        let resultado: City[] = [];

        //recorremos el objeto
        for(const city of value){
            //comprobamos si lo que buscamos existe en nuestro array
            // si encuentra devuelve algo, sino devuelve -1
            //convertimos el texto a minuscula
            if(city.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1 ){
                //resultado va ser igual a resultado + el valor que tengamos en el momento.
                resultado = [...resultado, city];
            }
        }
        //retornamos el resultado
        return resultado;
    }
    
}