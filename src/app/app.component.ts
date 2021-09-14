import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class  AppComponent implements OnInit{ 

  resultSom1: number;
  resultSub1: number;
  resultMult1: number;
  resultDiv1: number;

  som1: number;
  som2: number;
  sub1: number;
  sub2: number;
  mult1: number;
  mult2: number;
  div1: number;
  div2: number;

  a  = 'abelha';

  constructor() {}
  ngOnInit(): void {
    console.log( this.a)
  }
  sum(som1: number, som2: number) {
    this.resultSom1 = Number(som1) + Number(som2);
    console.log(this.resultSom1);
  }

  sub(sub1: number, sub2: number) {
    this.resultSub1 = Number(sub1) - Number(sub2);
    console.log(this.resultSub1);
  }
  mult(mult1: number, mult2: number) {
    this.resultMult1 = Number(mult1) * Number(mult2);
    console.log(this.resultMult1);
  }

  div(div1: number, div2: number) {
    this.resultDiv1 = Number(div1) / Number(div2);
    console.log(this.resultDiv1);
  }
}
