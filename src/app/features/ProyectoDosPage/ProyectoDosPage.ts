import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddProyecto } from '../ProyectosPage/components/listado-proyecto/add-proyecto/add-proyecto';
import { ListadoProyecto } from '../ProyectosPage/components/listado-proyecto/listado-proyecto';
import { ProyectosService } from './services/proyectos-service';

@Component({
  selector: 'app-proyecto-dos-page',
  imports: [ListadoProyecto,AddProyecto],
  templateUrl: './ProyectoDosPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDosPage { 

  proyectosService = inject(ProyectosService);
}
