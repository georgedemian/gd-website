import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Albums, AlbumItem } from '../components/models';
@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  primary: string;
  //albums: Albums;
   albums: Albums[] = [];
  constructor(private http: HttpClient) {

  }

  getQuery( query: string ){
    const url = `https://api.flickr.com/services/rest/?method=${ query }`;

    return this.http.get(url);
  }

  getAlbums(){
    return this.getQuery(`flickr.photosets.getList&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05`);
  }

  getPopular(){
    return this.getQuery(`flickr.photos.getPopular&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&per_page=5&nojsoncallback=1`)
    .pipe( map( data => data['photos'].photo));
  }

  getCollections(id:string){
    return this.getQuery(`flickr.collections.getTree&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&nojsoncallback=1&collection_id=${id}`)
    .pipe( map( data => data['collections'].collection));
  }
  getAlbum(id:string){
    return this.getQuery(`flickr.photosets.getPhotos&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&nojsoncallback=1&photoset_id=${id}`)
    .pipe( map( data => data['photoset']));
  }

  getAlbumsFormat(id:string){

    console.log("callin service");
    let imgID : string ;
    let imgsecret :string;
    let imgserver :string;
    let imgfarm: string
    const albumFullResponse = this.getCollections(id).pipe( map( data => data[0]));
    const albumsFullSubscribe = albumFullResponse.subscribe((data:any)=> {
      this.albums['id'] = data.id;
      this.albums['title'] = data.title;
    });
    this.albums['albumsG']= [];
    const albumsResponse = this.getCollections(id).pipe( map( data => data[0].set));
    const albumsSubscribe = albumsResponse.subscribe(
      data => {
        for (let i of data) {

            const imgResponse =  this.getPrimaryAlbum(i.id).subscribe(img=> {
              console.log(img);
                imgID =  img.id;
                imgsecret =  img.secret;
                imgserver =  img.server;
                imgfarm = img.farm;
                let nalbum = new AlbumItem(i.id, i.title, imgID, imgsecret, imgserver, imgfarm);

                this.albums['albumsG'].push(nalbum);
              });
           }
      }
    );
    console.log(this.albums);
    return this.albums;
  }
  getPrimaryAlbum(id: string){
    return this.getAlbum(id)
    .pipe( map(data => data['photo'][0]));
  }
  getPrimaryAlbumURl(id: string){
    this.getAlbum(id).pipe( map(
      data => data['photo'][0]
      //data => data['primary']
    ))
  }
}
