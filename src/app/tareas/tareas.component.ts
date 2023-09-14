import { Component, OnInit } from '@angular/core';

import { TareasService } from '../tareas.service';
import { Tarea } from './tarea.model';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  constructor(private tareaService: TareasService) {

  }
  ngOnInit(): void {
    this.tareaService.getAll()
      .subscribe((tareas: any) => {
        this.tareas = tareas._embedded.tasks;
        console.log('tareas', this.tareas);
      })
  }
}
