import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

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
}
