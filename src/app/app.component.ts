import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $("#test").css("color", "red");
  }
  title = 'app';
  constructor(private http: Http) {
this.http.get("/api/values").subscribe(x=>console.log(x));
  }
}
