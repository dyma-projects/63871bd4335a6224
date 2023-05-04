import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
@Input()public number: number;
@Output() private addN:EventEmitter<number>=new EventEmitter();
@Output() private deleteN:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.addN.emit(this.number);
  }
  delete(){
    this.deleteN.emit(this.number);
  }
}
