import { AlbumItem } from './album-item.model';
export class Albums {
  [x: string]: any;
    //albumgrupote : any[];
    id : number;
    title: string;
    primary: string;
    albumsG: AlbumItem[];

    constructor( id: number, title: string) {
        this.id = id;
        this.title = title;

        this.albumsG = [];
    }

}
