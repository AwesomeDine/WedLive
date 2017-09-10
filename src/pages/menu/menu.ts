import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ContactdetailPage } from '../contactdetail/contactdetail';
import { PendingRequestsPage } from '../pending-requests/pending-requests';
import { UsersPage } from '../users/users';
import { CreateeventPage } from '../createevent/createevent';
import { SavedatePage } from '../savedate/savedate';
import { TakeMeToVenuePage } from '../takemetovenue/takemetovenue';
import { ImagegalleryPage } from '../imagegallery/imagegallery';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Facebook } from '@ionic-native/facebook';
// import { GooglePlus } from '@ionic-native/google-plus';
import { Network } from '@ionic-native/network';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public user = { ImageURL: '', Name: '', isAdmin: false, Status: '' };
  rootPage = HomePage;
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage,
    public apiService: ApiServiceProvider, private loadingCtrl: LoadingController, public network: Network, public toast: ToastController) {
    let env = this;
    env.nativeStorage.getItem('user')
      .then(function (userData) {
        env.user.ImageURL = userData.picture;
        env.user.Name = userData.name;
        env.user.isAdmin = userData.isAdmin;
        env.user.Status = userData.Status;
        // user is previously logged and we have his data
        // we will let him access the app
        //env.navCtrl.push(HomePage);        
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        //env.navCtrl.push(LoginPage);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  Logout() {
    var nav = this.navCtrl;
    let env = this;

    env.nativeStorage.remove('user');
    env.nativeStorage.remove('loginPlatform');
    nav.push(LoginPage);
    // env.nativeStorage.getItem('loginPlatform')
    //   .then(function (userData) {
    //     if (userData.platform == "2") {
    //       env.fb.logout().then(function (response) {
    //         //user logged out so we will remove him from the NativeStorage
    //         env.nativeStorage.remove('user');
    //         env.nativeStorage.remove('loginPlatform');
    //         nav.push(LoginPage);
    //       }, function (error) {
    //         console.log(error);
    //       });
    //     }
    //     if (userData.platform == "1") {
    //       env.googlePlus.logout()
    //         .then(response => {
    //           console.log(response);
    //           env.nativeStorage.remove('user');
    //           env.nativeStorage.remove('loginPlatform');
    //           nav.push(LoginPage);
    //         }, function (error) {
    //           console.log(error);
    //         })
    //     }
    //   });
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

  savetheDate() {
    this.navCtrl.push(SavedatePage);
  }

  showEventPage() {
    this.navCtrl.push(CreateeventPage);
  }

  takemetovenue() {
    this.navCtrl.push(TakeMeToVenuePage);
  }

  openAllUsers() {
    this.navCtrl.push(UsersPage);
  }

  openPendingRequest() {
    this.navCtrl.push(PendingRequestsPage);
  }

  openContactUs() {
    this.navCtrl.push(ContactdetailPage);
  }

  // openSamplePage() {
  //   this.navCtrl.push(SamplePage);
  // }

  showGallery() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (this.network.type !== 'none') {
      loading.present();
      this.apiService.loadGallery().then(data => {
        this.navCtrl.push(ImagegalleryPage, {
          ImageUrl: data
        })
        loading.dismiss();
      }, function (error) {
        console.log(error);
        loading.dismiss();
      });
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

}
