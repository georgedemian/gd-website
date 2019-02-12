import { AlbumItem } from './album-item.model';
export class Albums {

    //albumgrupote : any[];
    id : number;
    title: string;
    primary: string;
    albumsG: AlbumItem[];

    // constructor( albumsID: number, title: string, albumIMG: string ) {
    constructor( id: number, title: string) {

        //this.albumgrupote = albumGroup;
        // this.id = albumsID;
        this.id = id;
        this.title = title;
        // this.primary = albumIMG;

        this.albumsG = [];
    }

}
