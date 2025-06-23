import { Routes } from '@angular/router';
import {Lista} from './lista/lista';
import {Form} from './lista/form/form';

export const routes: Routes = [
  {
    path: 'persone',
    component: Lista
  },
  {
    path: 'persone/new',
    component: Form
  }
];
