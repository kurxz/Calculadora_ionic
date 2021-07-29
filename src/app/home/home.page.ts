import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  value = '0';

  numeros = [
    [7, 8, 9, 'c'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '/', 'X', '=']

  ];

  aux = '';

  apertou(props) {

    switch (props) {

      case '=':

        var resultado = '';
     
        if(this.value.includes("X")) {
        resultado = eval(this.value.replace('X','*'));
        this.value = resultado;

        } else {

          resultado = eval(this.value);
          this.value = resultado;
          this.aux = resultado;
        }
    
      break;

      case 'c':

        this.value = '';
        this.aux = '';

      break;

      default:
        
        this.aux += props;

        this.value = this.aux;
       
      break;

    }

  }

}
