import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
      <h2>Contador: {{ counter }}</h2>

      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resetCounter()">Reiniciar</button>
      <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent{

  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }
}
