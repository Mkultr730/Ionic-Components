import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.presentLoading('Please wait...');
    
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);

    
  }
      
  async presentLoading( message: string ){
    this.loading = await this.loadingCtrl.create({
      message
    });
    return this.loading.present();
  }

}
