import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { MainPage } from '../pages/main/main';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  
    @ViewChild(Nav) nav;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public nativeStorage: NativeStorage) {
    this.initializeApp();

    // firebase.auth().getRedirectResult().then(function (result) {
    //   if (result.credential) {
    //     var token = result.credential.accessToken;
    //     var user = result.user;
    //     this.rootPage = MenuPage;
    //     console.log(token, user);
    //   }
    // }).catch(function (error) {
    //   // Handle Errors here.
    //   var errorMessage = error.message;
    //   console.log(errorMessage);
    // });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      let env = this;
      this.nativeStorage.getItem('user')
        .then(function (data) {
          // user is previously logged and we have his data
          // we will let him access the app
          env.nav.setRoot(MenuPage);
        }, function (error) {
          //we don't have the user data so we will ask him to log in
          env.nav.setRoot(LoginPage);
        });


    });
  }
}