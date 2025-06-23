import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { iPersona } from '../persona';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit{

  lista: iPersona[] = [];

  constructor(public service: ListaService){

  }

  ngOnInit(): void {
      this.service.getLista().subscribe((res: iPersona[]) => this.lista = res);
  }
}
