export class students {
    id:number;
    Nombre:string;
    Apellido: string;
    fechaCreado:Date;
    aprobado:boolean;

    constructor(
        id:number,
        Nombre:string,
        Apellido: string,
        fechaCreado:Date,
        aprobado:boolean,){
            this.id = id;
            this.Nombre = Nombre;
            this.Apellido =Apellido;
            this.fechaCreado = fechaCreado;
            this.aprobado = aprobado;
        }
}