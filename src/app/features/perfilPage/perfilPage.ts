import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {

  name = signal<string>('Juan');
  lastName = signal<string>('Perez');
  age = signal<number>(30);

  getFullName(){
    return this.name() + this.lastName() + " con edad " + this.age() + " años.";
  }

  changeData(){
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  resetData(){
    this.name.set('Juan');
    this.lastName.set('Perez');
    this.age.set(30);
  }

  changeAge(){
    this.age.set(18);
  }

 }
