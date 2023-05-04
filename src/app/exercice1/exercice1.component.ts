import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public result: number = 0;

  constructor() {}

  ngOnInit() {}

  addNumber(result:number){
    this.result = result+1;
  }
  deleteNumber(result:number){
    this.result = result-1;
  }
}
