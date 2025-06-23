import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista';
import { map } from 'rxjs';
import { iPersona } from '../persona';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit{
  lista: iPersona[] = [];
  constructor(public service: ListaService){

  }

  ngOnInit(): void {
      this.service.getLista().subscribe({
        next:(res: iPersona[]) => {
          this.lista = res;
        }
      });
  }
}
