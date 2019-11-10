import { FlickrService } from '../../services/flickr.service';

export class AlbumItem {

    id: number;
    title: string;
    primary: string;
    farm: string;
    secret: string;
    server: string;
    url: string;
    desc: string;
    coverImg: string;

    constructor( albumsID: number, title: string, albumIMG: string, albumIMGSecret: string, albumIMGServer:string, farm: string) {
        this.id = albumsID;
        this.title = title;
        this.primary = albumIMG;
        this.secret = albumIMGSecret;
        this.server = albumIMGServer;
        this.farm = farm;
        this.url = "https://farm"+farm+".staticflickr.com/"+albumIMGServer+"/"+albumIMG+"_"+albumIMGSecret+"_m.jpg"

    }

}
