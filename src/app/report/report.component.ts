import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';

  commentValue = '';
  locationValue = '';
  conditionValue = '';
  dateValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('zipcode27515').valueChanges();
  }

  onSubmit() {
    this.db.list('/zipcode27515/Cat').push({
      comments:
      this.commentValue,
      condition:
      this.conditionValue,
      location:
      this.locationValue,
      picture:
        '/',
      time:
      this.dateValue


    });
    this.commentValue = '';
    this.locationValue = '';
    this.conditionValue = '';
    this.dateValue = '';
  }
  ngOnInit() {
  }

}
