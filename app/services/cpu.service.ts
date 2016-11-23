import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CpuService {

  private _registros: number[];

  constructor() {
    this._registros = [0,0,0,0,0,0,0,0];
  }

  public get registros(): number[] {
    console.log(this._registros);
      return this._registros;
  }

}
