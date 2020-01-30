import { Component } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  urls : any;
  constructor(private http: HttpClient) {
    this.http.get('https://picsum.photos/v2/list').subscribe((response) => {
      console.log(response);
      this.urls = response;
      // console.log(this.urls[2].url);
    });
  }
}
