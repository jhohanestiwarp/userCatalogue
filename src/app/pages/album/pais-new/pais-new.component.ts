import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pais-new',
  templateUrl: './pais-new.component.html',
  styleUrls: ['./pais-new.component.scss']
})
export class PaisNewComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      countryName: ['', Validators.required],
      population: ['', Validators.required],
      capital: ['', Validators.required],
      continentName: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servicio
      console.log('Datos del formulario:', this.formulario.value);
    } else {
      // El formulario no es válido, puedes mostrar algún mensaje de error o realizar alguna acción adicional
    }
  }
}
