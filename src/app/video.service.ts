import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  // API endpoints for CRUD operations
  private _getUrl = "/api/videos";
  private _postUrl= "/api/videos";
  private _putUrl = "/api/video/";
  private _deleteUrl = "/api/video/";


  constructor( private _http: HttpClient) { }

  getVideos(){
    return this._http.get<Video>(this._getUrl).toPromise();
  }

  addVideos(video: Video){
    let headers = new HttpHeaders( {'content-type': 'application/json' } );
    return this._http.post<Video>(this._postUrl, JSON.stringify(video), {headers}).toPromise();
  }

  updateVideo(video: Video){
    let headers = new HttpHeaders( {'content-type': 'application/json' } );
    return this._http.put<Video>(this._putUrl + video._id, JSON.stringify(video), {headers}).toPromise();
  }
  deleteVideo(video: Video){
    return this._http.delete<Video>(this._deleteUrl + video._id).toPromise();
  }
}
