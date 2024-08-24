import { Component, Input, OnInit } from '@angular/core';
import { CalOptionsComponent } from '../cal-options/cal-options.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalOptionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {


  public valor1: number = 0;
  public valor2: number= 0;
  public result: string = '';


  onValor1(event: any){
      this.valor1 = +event.target.value
  }
  onValor2(event: any){
    this.valor2 = +event.target.value
  }


  generateResult(event: string){

    if(event === 'reset'){
      this.valor1 = 0;
      this.valor2 = 0;
      this.result = '';
      return
    }
    this.result = event
    console.log(this.result);
  }

}
