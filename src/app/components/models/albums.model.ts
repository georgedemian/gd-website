import { albumItem } from './album-item.model';
export class albums {

    collectionId: number;
    albums: albumItem[];

    constructor( collectionId: number ) {

        this.collectionId = collectionId;

        // this.terminada = false;
        // this.creadaEn = new Date();
        this.albums = [];

        // this.id = new Date().getTime();

    }

}
