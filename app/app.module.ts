import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './components/app.component';
import { CodigoComponent } from './components/codigo/codigo.component';
import { MemoriaComponent } from './components/memoria/memoria.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { TrazaComponent } from './components/traza/traza.component';

import {CpuService} from './services/cpu.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CodigoComponent,
    MemoriaComponent,
    RegistrosComponent,
    TrazaComponent
  ],
  providers: [CpuService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
