import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  panels = [
    'Buisness Drivers',
    'Societal Impact Drivers',
    'The Strengths',
    'Other Diversity & Inclusion',
  ];
}
