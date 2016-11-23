import { Component } from '@angular/core';

import { CpuService } from '../../services/cpu.service';

@Component({
  selector: 'tfg-registros',
  templateUrl: 'app/components/registros/registros.component.html'
})
export class RegistrosComponent {

  private registros: number[];

  constructor(
      private cpuService: CpuService) {
    this.registros = [0, 0, 0, 0, 0, 0, 0, 0];
  }

  public actualizar(registro: number): void {
    this.cpuService.registros[registro] = this.registros[registro];
  }

}
