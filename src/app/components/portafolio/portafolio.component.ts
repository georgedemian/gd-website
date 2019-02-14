import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operators';
import { FlickrService } from '../../services/flickr.service';
import {Albums} from '../models';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  navBar:boolean;
  id:string;
  title: string;
  albums: Albums;
  // albumIds: any = {};
  constructor(private router: ActivatedRoute, private flickr: FlickrService ) {
    this.navBar = true;

    this.router.params.subscribe( params =>{
      this.id = params['id']
    });
    this.albums= this.flickr.getAlbumsFormat(this.id)
    // const albumsResponse = .pipe( map(
    //   data => data
    // ));
    //return  this.albums =
    console.log(this.albums);

   }

   getCollection(id: string){
      //return this.flickr.getAlbumsFormat(id);
   }

  ngOnInit() {
  }

}
