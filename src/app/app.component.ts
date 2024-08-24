import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcViewComponent } from "./calc-view/calc-view.component";
import { CalOptionsComponent } from "./cal-options/cal-options.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {





}
