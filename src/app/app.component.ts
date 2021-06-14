import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: any;
  location: string;
  
  answer: any;

  constructor(private http: HttpClient, private httpp: HttpClient) {}

  search() {
    this.http.get('http://api.weatherstack.com/current?access_key=098e907f03c8093afa860f752a04ad99&query=' + this.location)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })

    this.httpp.get('https://api.unsplash.com/photos/random?client_id=KfeHbiF-wbdoRKQwOEFc5J3W5cf1O6MkGbhaPuE-Aoc&query=' + this.location + '&orientation=landscape')
    .subscribe((answer)=>{
      this.answer = answer;
      console.log(this.answer);
    })
  }
}