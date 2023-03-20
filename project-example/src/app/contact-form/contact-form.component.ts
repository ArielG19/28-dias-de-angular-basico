import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contactForm.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact:Contact[] = [];

  //creamos una variable para usar el ngModel y asignar data al formulario
  // En caso de cargar datos de una api nos facilitaria
  model = {
    name: "",
    age: false,
    departament: "",
    comments: ""
  }
  onSubmit(form: NgForm){
    //console.log(form)
    this.contact.push(form.value);
    form.form.reset();
  }

}
