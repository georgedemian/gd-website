import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
  //lista: Albums[];
  // albumIds: any = {};
  constructor(private router: ActivatedRoute, private flickr: FlickrService ) {
    this.navBar = true;
    this.router.params.subscribe( params =>{
      //this.lista =
      this.getCollection(params['id']);
      //JSON.parse(this.lista);
      //console.log(this.lista);
      //console.log(this.lista);
            //console.log(this.lista);
      // console.log( params['id']);
    })
   }

   getCollection(id: string){
     //console.log(this.flickr.getAlbumsFormat(id));
    //this.albums = this.flickr.getAlbumsFormat(id);

    //this.albums = response[0];
     // .subscribe(collection =>{
      return this.flickr.getAlbumsFormat(id);
       //console.log(this.lista);
       // this.title = collection[0].title;
       // this.albums = collection[0].set;
       // this.albums = collection;
       // for (let i of this.albums[0].set) {
       //     console.log(i.id); // "4", "5", "6"
       //  }
       //
       // console.log(this.albums);
     // });
     // this.flickr.getAlbumsFormat(id);
     // .subscribe( data => console.log(data));
   }

  ngOnInit() {
  }

}
