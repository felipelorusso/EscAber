import { Component } from '@angular/core';

import { Platform, ActionSheetController, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  
  
  public appPages = [

    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cursos',
      url: '/list',
      icon: 'list'
    },
    {
    title: 'Contato',
      url: '/contato',
      icon: 'Call'
    },
    {
      title: 'Projetos',
        url: '/projetos',
        icon: 'Construct'
      },
    {
      title: 'Ultimos posts',
      url: '/teste',
      icon: 'compass' ,
    },
  ];

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController    )
    {

    this.initializeApp();

  }

  
 
  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(true);
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#33000000");
      }

      timer(2000).subscribe(() => this.showSplash = false);
    });
  }

}
