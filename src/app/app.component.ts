
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }
  valor = '0';
  valorantigo = '0';
  prontoparanovaentrada = true;
  ultimooperador = '';

  grupodenumeros = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'c', '/', '=']
  ]


  onButtonPress(n: any) {
    console.log(n)


    if (typeof n == 'number') {
      console.log('é um numero')
      if (this.prontoparanovaentrada)
        this.valor = '' + n;
      else
        this.valor += '' + n;
      this.prontoparanovaentrada = false;

    }
    else if (n === 'c') {
      this.valor = '0'
      this.prontoparanovaentrada = true;
    }
    else if (n === '='){
      if (this.ultimooperador ==='x')
      this.valor = '' + (parseInt(this.valorantigo) * parseInt(this.valor)) 
      else if (this.ultimooperador ==='-')
      this.valor = '' + (parseInt(this.valorantigo) - parseInt(this.valor)) 
      else if (this.ultimooperador ==='+')
      this.valor = '' + (parseInt(this.valorantigo) + parseInt(this.valor)) 
      else if (this.ultimooperador ==='/')
      this.valor = '' + (parseInt(this.valorantigo) / parseInt(this.valor)) 

    }
else {//  operador
  this.prontoparanovaentrada = true;
  this.valorantigo = this.valor
  this.ultimooperador=n

}
  }
}
