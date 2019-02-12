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
  albums: Albums[] = [];
  // albums: any = [];
  albumIds: any = {};
  formatedAlbums: any = {};
  constructor(private router: ActivatedRoute, private flickr: FlickrService ) {
    this.navBar = true;
    this.router.params.subscribe( params =>{
      this.getCollection(params['id']);
      // console.log( params['id']);
    })
   }

   getCollection(id: string){
     this.flickr.getCollections(id)
     .subscribe(collection =>{
       //console.log(collection);
       //console.log(collection[0].set);
       // this.title = collection[0].title;
       // this.albums = collection[0].set;
       this.albums = collection;
       // for (let i of this.albums[0].set) {
       //     console.log(i.id); // "4", "5", "6"
       //  }
       //
       // console.log(this.albums[0].set.length);
     });
     this.flickr.getAlbumsFormat(id);
     // .subscribe( data => console.log(data));
   }

   newAlbumsFormat(albums:any){
     //console.log(albums);
     let i,j = 0;
     albums.forEach((value: boolean,key: any) => {

        this.formatedAlbums[i] = key.id;
        this.flickr.getAlbum(this.formatedAlbums[i])
        .subscribe(data =>{
          console.log(data);
          i++;
        });
        console.log(this.formatedAlbums);
      });


     // this.albumIds = this.albums.id;
      console.log(this.formatedAlbums);
   }

  ngOnInit() {
  }

}
