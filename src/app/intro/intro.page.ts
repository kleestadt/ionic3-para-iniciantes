import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    
  }

  ngOnInit() {
  }

  goToTabPages(){
    this.navCtrl.navigateRoot;
  }

}
