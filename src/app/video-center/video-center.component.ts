import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  video: any
  selectedVideo : Video
  hideAddVideoButton: boolean = true;

  constructor( private _videoService: VideoService) { }


  ngOnInit() {
    this._videoService.getVideos()
    .then( resVideoData =>  {
      this.video = resVideoData
    });
  }
  onSelectVideo(video: any){
    this.hideAddVideoButton = true;
    this.selectedVideo = video;
  }
  onSubmitAddVideo(video: Video){
    this._videoService.addVideos(video)
    .then((resNewVideo: Video) => {
      this.video.push( resNewVideo);
      this.selectedVideo = resNewVideo;
    });
  }

  newVideo(){
    this.hideAddVideoButton = false;
  }
  onupdateVideoEvent(video: Video){
    this._videoService.updateVideo(video)
    .then((resUpdatedVideo: Video) => {
      // this.video.push( resUpdatedVideo);
      this.selectedVideo = null;
    });
  }
  onDeleteVideoEvent(deleteVideo: Video){
    let videoArray = this.video;
    this._videoService.deleteVideo(deleteVideo).then( (deletedVideo: Video) => {
      for (let i = 0; i < videoArray.length; i++) {
        if( videoArray[i]._id === deleteVideo._id){
          videoArray.splice(i, 1);
        }
      }
      this.selectedVideo = null;
    })
  }
}
