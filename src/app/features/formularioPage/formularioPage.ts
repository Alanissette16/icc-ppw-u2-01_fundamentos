import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../Utils/FormUtils';

@Component({
  selector: 'app-formulario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formularioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {

  FormUtils = FormUtils;

onSubmit() {
  if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
  }
  console.log('Datos del formulario:', this.myForm.value);
  alert('Formulario valido. Datos enviados correctamente.');
  this.myForm.reset();
} 

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    edad: ['',[Validators.required, Validators.min(18)]],
    correo: ['',[Validators.required, Validators.email]],
  });

 /* formulario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
  });
  */

}
  