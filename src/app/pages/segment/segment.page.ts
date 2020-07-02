import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.segment.value = 'All';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {

    const value = event.detail.value;
    if (value === 'All') {
      this.publisher = '';
      return;
    }

    this.publisher = value;
  }

}