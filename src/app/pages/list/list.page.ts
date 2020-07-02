import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  users: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    // console.log('favorite', user);
    this.presentToast('Save as favorite');
    this.list.closeSlidingItems();
  }
  share(user) {
    // console.log('share', user);
    this.presentToast('Shared');
    this.list.closeSlidingItems();
  }
  delete(user) {
    // console.log('delete', user);
    this.presentToast('Deleted');
    this.list.closeSlidingItems();
  }

}
