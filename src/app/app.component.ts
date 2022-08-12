import { Component } from '@angular/core';
import { FcmService } from './service/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fcm-notification';
  message: any;
  constructor( private _fcmService: FcmService){}

  ngOnInit(): void {
    debugger
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._fcmService.requestPermission()
    this._fcmService.receiveMessage()
    this.message = this._fcmService.currentMessage
  }

}
