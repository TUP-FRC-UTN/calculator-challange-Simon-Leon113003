import { Component, Output,EventEmitter, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-cal-options',
  standalone: true,
  imports: [],
  templateUrl: './cal-options.component.html',
  styleUrl: './cal-options.component.css'
})
export class CalOptionsComponent {

  public result: number = 0;

  @Input()
  public valor1: number = 0;

  @Input()
  public valor2: number = 0;

  @Input()
  public Onresult: string = '';

  @Output()
   option: EventEmitter<string> = new EventEmitter();

   add(): void{
      this.calculateAndEmit((a, b) => a + b);
   }

   calculateSubtraction(): void {
     this.calculateAndEmit((a, b) => a - b);
   }

   calculateProduct(): void {
     this.calculateAndEmit((a, b) => a * b);
   }

   calculateDivition(): void {
     if (this.valor2 === 0) {
       this.Onresult = 'Error: Division con cero';
     } else {
       this.calculateAndEmit((a, b) => a / b);
     }
     this.option.emit(this.Onresult);
   }

   reset(){
      this.option.emit('reset');
   }

   //*Metodo que realiza las operaciones
   private operation: (a: number, b: number) => number;


   private calculateAndEmit(operation: (a: number, b: number) => number): void {
     this.result = operation(this.valor1, this.valor2);
     this.Onresult = this.result.toString();
     this.option.emit(this.Onresult);
   }

}
