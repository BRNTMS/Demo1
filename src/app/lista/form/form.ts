import {Component, inject} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {ListaService} from '../../lista.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrl: './form.css',
  imports: [ReactiveFormsModule],
})
export class Form {

  private service = inject(ListaService);
  private router = inject(Router);

  personaForm = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(),
    cognome: new FormControl(),
  });


  onSubmit() {
    this.service.salvaPersona(this.personaForm.value).subscribe(response => {
      this.router.navigate(['/persone']);
    });
  }

}
