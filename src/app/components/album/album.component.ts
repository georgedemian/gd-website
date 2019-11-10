import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../services/flickr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumPhotos: any[] = [];
  constructor(private router: ActivatedRoute, private flickr: FlickrService) {

    this.router.params.subscribe(
      params => {
        this.getAlbumPhotos( params['id']);
      }
    )
  }

  getAlbumPhotos(id: string){
    this.flickr.getAlbum(id).subscribe(
      album => {
        this.albumPhotos = album.photo;
        console.log(this.albumPhotos);
      }
    )
  }

  ngOnInit() {
  }

}
