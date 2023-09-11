export class Tarea {
    id: number;
    nombre: String;
    completado: boolean;
    constructor(id: number, nombre: String, completado: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.completado = completado
    }
}