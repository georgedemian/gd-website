import { AlbumItem } from './album-item.model';
export class Albums {

    //albumgrupote : any[];
    id : number;
    title: string;
    primary: string;
    prueba: string;
    albums: AlbumItem[];

    constructor( albumsID: number, title: string, albumIMG: string ) {

        //this.albumgrupote = albumGroup;
        this.id = albumsID;
        this.title = title;
        this.primary = albumIMG;
        this.prueba= " ";
        // this.terminada = false;
        // this.creadaEn = new Date();
        this.albums = [];

        // this.id = new Date().getTime();
    }

}
