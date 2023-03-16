import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-waydata-binding',
  templateUrl: './two-waydata-binding.component.html',
  styleUrls: ['./two-waydata-binding.component.css']
})
export class TwoWaydataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name!: string;

}
