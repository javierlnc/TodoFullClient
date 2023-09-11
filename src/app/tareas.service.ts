import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from './tareas/tarea.model';
@Injectable({
  providedIn: 'root'
})
export class TareasService {


  constructor(private Http: HttpClient) { }
  private _url = "http://localhost:8080/tarea";
  getAll() {
    return this.Http.get(this._url);
  }
  create(tarea: Tarea) {
    return this.Http.post(this._url, tarea);
  }
  update(id: number, tarea: Tarea) {
    return this.Http.put(this._url.concat("/" + id), tarea);
  }
  delete(id: number) {
    return this.Http.delete(this._url.concat("/" + id));
  }
}
