import { FlickrService } from '../../services/flickr.service';

export class AlbumItem {

    id: number;
    title: string;
    primary: string;
    desc: string;
    coverImg: string;

    constructor( albumsID: number, title: string, albumIMG: string ) {
        this.id = albumsID;
        this.title = title;
        this.primary = albumIMG;


    }

}
