import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {AppVersion} from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})

export class SobrePage {
  
  AppName:string;
  PackageName:string;
  VersionCode:string|number;
  VersionNumber:string;

  constructor(private appVersion: AppVersion , private alertController:AlertController) {
    this.appVersion.getAppName().then(value => {
      this.AppName = value;
    })
    this.appVersion.getPackageName().then(value => {
      this.PackageName = value;
    })
    this.appVersion.getVersionCode().then(value => {
      this.VersionCode = value;
    })
    this.appVersion.getVersionNumber().then(value => {
      this.VersionNumber = value;
    })
   }

   async presentAlert(){
    const alert = await this.alertController.create({
       header: ' Feito por  ',
       subHeader: 'Alunos do 3º ano :',
       message: 'Alex Borsetto, Bruno Quintiliano, Daniel Sacomano, Felipe Lorusso',
       buttons: ['Ok']
       });
    
       await alert.present();
      }

}


  
   
 
