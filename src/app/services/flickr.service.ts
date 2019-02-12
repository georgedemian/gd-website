import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Albums, AlbumItem } from '../components/models';
@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  primary: string;
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
    return this.getQuery(`flickr.photos.getPopular&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&per_page=5&nojsoncallback=true`)
    .pipe( map( data => data['photos'].photo));
  }

  getCollections(id:string){
    return this.getQuery(`flickr.collections.getTree&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&nojsoncallback=true&collection_id=${id}`)
    .pipe( map( data => data['collections'].collection));
  }
  getAlbum(id:string){
    return this.getQuery(`flickr.photosets.getPhotos&api_key=59c7bf51d98b2c8235980c0e90ec626b&format=json&user_id=60915215@N05&nojsoncallback=1&photoset_id=${id}`)
    .pipe( map( data => data['photoset']));
  }

  getAlbumsFormat(id:string){
    console.log("callin service");
    let imgID : number;
    const albumsResponse = this.getCollections(id).pipe( map( data => data[0].set));
    const albumFullResponse = this.getCollections(id).pipe( map( data => data[0]));
    const albumsFullSubscribe = albumFullResponse.subscribe(data=> {
      console.log(data);
      let albumGroup = new Albums(data.id, data.title);
      this.albums.push(albumGroup);
    });
    const albumsSubscribe = albumsResponse.subscribe(
      data => {
        console.log(data);
        //this.albums.push(new Albums(data))
        for (let i of data) {
            let imgP: string;
            const imgResponse =  this.getPrimaryAlbum(i.id).subscribe(img=> {
                //console.log(img);
                imgP = img;
                let nalbum = new AlbumItem(
                  i.id, i.title, imgP
                );
                console.log(nalbum);
                this.albums[0].albumsG.push(nalbum);
                //console.log(this.albums[0]);

              });
           }
      }
    );
    console.log(this.albums);
    return this.albums;
  }
  getPrimaryAlbum(id: string){
    return this.getAlbum(id)
    .pipe( map(data => data.primary));
  }
  //   const albumIMGResponse = this.getAlbum(id).pipe( map(data => data.primary));
  //   // const albumIMG = albumIMGResponse.subscribe(data => console.log(data.primary));
  //   const albumIMG = albumIMGResponse.subscribe(data => {
  //     console.log(data)
  //     this.primary = data;
  //   });
   }
