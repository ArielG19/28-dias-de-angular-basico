import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion-one-way',
  templateUrl: './interpolacion-one-way.component.html',
  styleUrls: ['./interpolacion-one-way.component.css']
})
export class InterpolacionOneWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  propTitle = 'project-example';
  imgProp = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

}
