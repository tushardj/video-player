import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  // inputs: ['video: Video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailsComponent implements OnInit {
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  @Input('video') video: Video;
  constructor() { }
  ngOnInit() {
  }
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }
}
