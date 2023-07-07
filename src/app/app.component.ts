import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'neurodiversity-main';

  ngOnInit(){
    window.location.href = "https://neurodiversityinbusiness.org/";

  }
}
