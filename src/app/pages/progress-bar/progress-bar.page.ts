import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  progress: number = 0.01;

  constructor() { }

  ngOnInit() {
  }


  changeRange(event) {
    console.log(event)
    this.progress= event.detail.value/100;
  }

}
