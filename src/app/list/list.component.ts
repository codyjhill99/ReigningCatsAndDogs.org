import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('zipcode27515/Cat').valueChanges();
    console.log(this.items);
  }
  ngOnInit() {
  }
}
