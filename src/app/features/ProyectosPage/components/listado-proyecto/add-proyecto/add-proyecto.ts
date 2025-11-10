import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class AddProyecto {
  

  newProyecto = output<Proyecto>();
  name = signal('');
  description = signal('');
  
  changeName(value: string) {
  this.name.set(value);
  }

  changeDescription(value: string) {
  this.description.set(value);
  }

  addProyecto(){
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description()
    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }


}
