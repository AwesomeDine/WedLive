import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Network } from '@ionic-native/network';

import { NativeStorage } from '@ionic-native/native-storage';
//import { Push, PushToken } from '@ionic/cloud-angular';
import { Push } from '@ionic/cloud-angular';

import firebase from 'firebase';

import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  isConnected: any;
  regData = { EmailAddress: '', DeviceId: '', UserToken: '', DeviceName: '', UserName: '', UserImageURL: '' };

  constructor(public navCtrl: NavController, private fb: Facebook, private googlePlus: GooglePlus,
    public nativeStorage: NativeStorage, private loadingCtrl: LoadingController, public network: Network,
    public apiService: ApiServiceProvider, public push: Push, public toast: ToastController) {
  }

  googleLogin() {
    let env = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (env.network.type !== 'none') {
      loading.present();
      env.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '738030326158-nv974th0q7oi4c58dqua7evj4mcqs2du.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
        .then(function (user) {
          // env.push.register().then((t: PushToken) => {
          //   return env.push.saveToken(t);
          // }).then((t: PushToken) => {
          env.regData = {
            EmailAddress: user.email,
            UserToken: user.userId,
            DeviceId: user.userId,
            DeviceName: '',
            UserName: user.displayName,
            UserImageURL: user.imageUrl
          }
          env.nativeStorage.setItem('loginPlatform',
            {
              platform: '1'
            }).then(function () {
              loading.dismiss();
              env.registerUser();
            }, function (error) {
              loading.dismiss();
              console.log(error);
            });
        });
      // }, function (error) {
      //   console.log(error);
      //   loading.dismiss();
      // });
    }
    else {
      let toast = this.toast.create({
        message: "Please check the internet connection.",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  //   this.push.rx.notification()
  //     .subscribe((msg) => {
  //       console.log('I received awesome push: ' + msg);
  //     });
  // }

  fbLogin() {
    // let env = this;
    // let loading = this.loadingCtrl.create({
    //   content: 'Please wait...'
    // });
    // if (env.network.type !== 'none') {
    //   loading.present();
    //   let provider = new firebase.auth.FacebookAuthProvider();

    //   firebase.auth().signInWithRedirect(provider).then(() => {
    //     firebase.auth().getRedirectResult()
    //       .then((result) => {
    //         var user = result.user.providerData[0];
    //         env.push.register().then((t: PushToken) => {
    //           return env.push.saveToken(t);
    //         }).then((t: PushToken) => {
    //           env.regData = {
    //             EmailAddress: user.email,
    //             UserToken: user.uid,
    //             DeviceId: t.token,
    //             DeviceName: '',
    //             UserName: user.displayName,
    //             UserImageURL: "https://graph.facebook.com/" + user.uid + "/picture?type=large"
    //           }
    //           env.nativeStorage.setItem('loginPlatform',
    //             {
    //               platform: '2'
    //             }).then(function () {
    //               loading.dismiss();
    //               env.registerUser();
    //             }, function (error) {
    //               loading.dismiss();
    //               console.log(error);
    //             });
    //         });
    //       }).catch(function (error) {
    //         loading.dismiss();
    //         console.log(error);
    //       });
    //   });
    //   loading.dismiss();
    // }
    // else {
    //   let toast = this.toast.create({
    //     message: "Please check the internet connection.",
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    //   toast.present();
    // }



    let permissions = new Array<string>();
    let env = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (env.network.type !== 'none') {
      loading.present();
      //the permissions your facebook app needs from the user
      permissions = ["public_profile", 'user_friends', 'email'];
      env.fb.login(permissions)
        .then(function (response) {
          let userId = response.authResponse.userID;
          let params = new Array<string>();
          //Getting name and gender properties
          env.fb.api("/me?fields=name,gender,email", params)
            .then(function (user) {
              // env.push.register().then((t: PushToken) => {
              //   return env.push.saveToken(t);
              // }).then((t: PushToken) => {
              env.regData = {
                EmailAddress: user.email,
                UserToken: user.id,
                DeviceId: user.id,
                DeviceName: '',
                UserName: user.name,
                UserImageURL: "https://graph.facebook.com/" + userId + "/picture?type=large"
              }
              env.nativeStorage.setItem('loginPlatform',
                {
                  platform: '2'
                }).then(function () {
                  loading.dismiss();
                  env.registerUser();
                }, function (error) {
                  loading.dismiss();
                  console.log(error);
                });
            });
        });
      // }, function (error) {
      //   loading.dismiss();
      //   console.log(error);
      // });
    }
    else {
      let toast = this.toast.create({
        message: "Please check the internet connection.",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
    //this.navCtrl.setRoot(MenuPage);
  }

  registerUser() {
    let env = this;
    let userData: any;
    let loading = env.loadingCtrl.create({
      content: 'Please wait...'
    });
    env.apiService.register(env.regData).then(fbResult => {
      if (JSON.parse(fbResult['_body']) != null) {
        userData = JSON.parse(fbResult['_body']);
      }
      env.apiService.load(env.regData.UserToken).then(result => {
        if (result[0]) {
          userData = result[0];
        }
        env.nativeStorage.setItem('user',
          {
            name: userData.UserName,
            picture: userData.UserImageUrl,
            isAdmin: userData.IsAdmin,
            Status: userData.Status,
            Id: userData.Id
          }).then(function () {
            loading.present();

            env.apiService.loadContact()
              .then(data => {
                env.nativeStorage.setItem('ContactDetail', {
                  contactdetail: data
                }).then(function () {
                  env.nativeStorage.getItem('loginPlatform')
                    .then(function (userData) {
                      if (userData.platform == "2") {
                        firebase.auth().signOut().then(function (response) {
                          env.navCtrl.setRoot(MenuPage);
                          loading.dismiss();
                        }).catch(function (error) {
                          console.log(error);
                        });
                      }
                      if (userData.platform == "1") {
                        env.googlePlus.logout()
                          .then(response => {
                            env.navCtrl.setRoot(MenuPage);
                            loading.dismiss();
                          }, function (error) {
                            console.log(error);
                          })
                      }
                    });
                }, function (error) {
                  loading.dismiss();
                  console.log(error);
                });
              }, (err) => {
                console.log(err);
                loading.dismiss();
              });
          });
      })
    });
  }

}