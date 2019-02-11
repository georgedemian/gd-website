import { FlickrService } from '../../services/flickr.service';

export class albumItem {

    id: number;
    desc: string;
    coverImg: string;

    constructor( desc: string ) {

        this.desc = desc;


    }

}
