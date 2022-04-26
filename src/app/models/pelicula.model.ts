export class Pelicula {
    id: number;
    titulo: string;
    imagen: string;
    fecha_de_estreno: string;
    sinopsis: string;
    estrenada: boolean;
    trailer: string;
    constructor(id: number, titulo: string, imagen: string, fecha_de_estreno: string, sinopsis: string, estrenada: boolean, trailer: string) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.fecha_de_estreno = fecha_de_estreno;
        this.sinopsis = sinopsis;
        this.estrenada = estrenada;
        this.trailer = trailer;
    }
}