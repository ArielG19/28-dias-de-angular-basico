import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contactForm.model';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
//creamos nuestra propiedad para trabajar nuestro formulario reactivo
  contactForm!:FormGroup;
  saveForm : Contact [] = [];

  constructor(private readonly formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //igualamos la propiedad de contactForm con el metodo de las  validaciones
    this.contactForm = this.initForm();
    this.onPatchValue();
  }
  
  onSubmit(){
    //console.log(this.contactForm.value);
    this.saveForm.push(this.contactForm.value);
    this.clearForm();
  }
  //metodo para asignar o cargar datos en el formulario
  onPatchValue(){
    this.contactForm.patchValue({
     age:false
    })
  }
  //metodo para devolver formGroup, declaramos las propiedades del formulario
  initForm(){
    //aqui pasamos nuestros campos del formulario y los retornamos
    return this.formBuilder.group({
      //validamos los campos desde aqui
      name:['',[Validators.required,Validators.minLength(5)]],
      age:'',
      departament:[''],
      comments:['',[Validators.required]],
    })
  }
  //limpiando el formulario
  clearForm() {
    this.contactForm.reset({
          'name': '',
          'age':false,
          'departament': '',
          'comments': '',
         });
    }


}
