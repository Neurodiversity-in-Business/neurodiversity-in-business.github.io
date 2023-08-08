import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Resource } from '../resource';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css'],
})
export class HubComponent implements OnInit {
  resourcesList:Array<Resource> = [];

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit(): void {
    const $this= this;
    this._firebaseService.getStaticData().filter((item)=>$this.testFilters(item)).forEach((data:Resource) => {
      this.resourcesList.push(data);
    });

  }

  private testFilters(item: Resource): boolean {

    return true;
  }
}
