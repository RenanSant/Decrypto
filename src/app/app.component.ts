import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  numeros: number[];

  ngOnInit() {
    this.gerar();
  }

  gerar(): void {
    this.numeros = [1, 2, 3, 4];
    this.name = '';

    let valor: number;
    let index: number;

    for (let i = 3; i >= 1; i--) {
      console.log('numeros: ' + this.numeros);
      console.log('i: ' + i);
      index = this.between(0, i);
      console.log('index: ' + index);
      valor = this.numeros[index];
      console.log('valor: ' + valor);
      this.numeros.splice(index, 1);
      console.log('numeros: ' + this.numeros);

      this.name += valor + '';
      console.log('this.name: ' + this.name);
    }
  }

  between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
