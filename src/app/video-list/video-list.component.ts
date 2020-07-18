import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  constructor() { }
  @Input('video') video: Video;
  ngOnInit() {
  }
  onSelect(selectedVideo: Video){
    this.SelectVideo.emit(selectedVideo);
  }
}
