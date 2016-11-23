import { Component } from '@angular/core';

@Component({
  selector: 'tfg-mensajes',
  templateUrl: 'app/components/mensajes/mensajes.component.html'
})
export class MensajesComponent {

  private errores: string [];

  public constructor() {
    this.errores = ['Hola','tres','adios'];
  }

  public borrar(indice: number): void {
    this.errores.splice(indice, 1);
  }

}
