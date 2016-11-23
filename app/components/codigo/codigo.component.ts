import { Component } from '@angular/core';
//import { Filelist } from 'typescript/lib/typescript';

const CODIGO_POR_DEFECTO: string = `; Suma 2 + 3 y deja el resultado en R0
  MOVL R1,2
  MOVH R1,0
  MOVL R2,3
  MOVH R2,0
  ADD  R0, R1, R2
`;

const TIPOS_FICHERO_CODIGO_VALIDOS: string [] = [
  'text/plain'
];

const MAX_TAMANIO_CODIGO: number = 1048576; // 1MB

@Component({
  selector: 'tfg-codigo',
  templateUrl: 'app/components/codigo/codigo.component.html'
})
export class CodigoComponent {

  private codigo: string = '';

  public constructor() {
  }

  public asignarCodigoPorDefecto(): void {
    this.codigo = CODIGO_POR_DEFECTO;
  }

  public asignarCodigoSubido(ficheros: FileList): void {

    if (ficheros.length != 0) {
      let fichero: File = ficheros.item(0);
      let lector: FileReader = new FileReader();

      if (MAX_TAMANIO_CODIGO < fichero.size) {
        console.error('Fichero mayor que ' + MAX_TAMANIO_CODIGO);
        return;
      }

      if (TIPOS_FICHERO_CODIGO_VALIDOS.indexOf(fichero.type) == -1) {
        console.error('Tipo de fichero no soportado: ' + fichero.type);
        return;
      }

      lector.onload = (evento: any) => {
        var codigoLeido = evento.target.result;
        this.codigo = codigoLeido;
      }

      lector.readAsText(fichero);
    }
  }

  public borrarCodigo(): void{
    this.codigo='';
  }

}
