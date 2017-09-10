import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

//import { EventdetailPage } from '../eventdetail/eventdetail';
import { ImageslidePage } from '../imageslide/imageslide';
import { ImagegalleryPage } from '../imagegallery/imagegallery';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public people: any;
  public allUser: any;

  public user = { ImageURL: '', Name: '', isAdmin: false, Status: 0, sts: '', Id: '' };
  events: any;
  value = 0;
  constructor(public navCtrl: NavController, public apiService: ApiServiceProvider, public network: Network,
    public nativeStorage: NativeStorage, private loadingCtrl: LoadingController, public toast: ToastController) {

    let env = this;
    let loading = env.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    env.nativeStorage.getItem('user')
      .then(function (userData) {
        env.user.ImageURL = userData.picture;
        env.user.Name = userData.name;
        env.user.isAdmin = userData.isAdmin;
        env.user.Status = userData.Status;
        env.user.Id = userData.Id;
        if (env.user.Status == 10) {
          if (env.network.type !== 'none') {
            env.apiService.load("null")
              .then(data => {
                env.allUser = data;
                env.allUser.forEach(element => {
                  if (element.Id == env.user.Id) {
                    env.user.Status = element.Status;
                  }

                  if (env.user.Status == 10) {
                    env.user.sts = "Pending";
                  }
                  else if (env.user.Status == 30) {
                    env.user.sts = "Rejected";
                  }
                  else {
                    env.user.sts = "Approved";
                    env.getEvents();
                  }
                });
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
        else if (env.user.Status == 30) {
          env.user.sts = "Rejected";
        }
        else {
          env.user.sts = "Approved";
          env.getEvents();
        }
        // user is previously logged and we have his data
        // we will let him access the app
        //env.navCtrl.push(HomePage);        
        loading.dismiss();
      }, function (error) {
        loading.dismiss();
        console.log(error);
        //we don't have the user data so we will ask him to log in
        //env.navCtrl.push(LoginPage);
      });
  }

  getEvents() {
    let env = this;
    let loading = env.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (env.network.type !== 'none') {
      loading.present();
      env.apiService.getEvents(false).then(data => {
        env.events = data;
        env.events.forEach(element => {
          // let desc = element.Description.length > 35 ? element.Description.substring(0, 35).concat("...") : element.Description;
          // element.Description = desc;
          element.imageCount = element.ImageUrl.length - 1;
          if (element.Description !== null && element.Description !== "") {
            element.value = 0;
          }
          else
            element.value = 1;
        });
        loading.dismiss();
      }, function (err) {
        console.log(err);
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

  showImage(index, ImageURL) {
    this.navCtrl.push(ImageslidePage,
      {
        slideIndex: index + 1,
        ImageUrl: ImageURL
      });
  }

  showGallery(ImageURL) {
    this.navCtrl.push(ImagegalleryPage, {
      ImageUrl: ImageURL
    })
  }

  doRefresh(refresher) {
    if (this.network.type !== 'none') {
      let env = this;
      let loading = env.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      env.apiService.getEvents(false).then(data => {
        env.events = data;
        env.events.forEach(element => {
          // let desc = element.Description.length > 35 ? element.Description.substring(0, 35).concat("...") : element.Description;
          // element.Description = desc;
          element.imageCount = element.ImageUrl.length - 1;
          if (element.Description !== null && element.Description !== "") {
            element.value = 0;
          }
          else
            element.value = 1;
        });
        if (refresher != 0)
          refresher.complete();
        loading.dismiss();
      }, function (err) {
        console.log(err);
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
      refresher.complete();
    }

    // getEventDetail(data) {
    //   let env = this;
    //   let loading = env.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //   if (env.network.type !== 'none') {
    //     loading.present();
    //     env.apiService.getEventDetail(data.Id).then(result => {
    //       env.navCtrl.push(EventdetailPage, {
    //         EventData: result
    //       });
    //       loading.dismiss();
    //     }, function (error) {
    //       console.log(error);
    //       loading.dismiss();
    //     });
    //   }
    //   else {
    //     let toast = this.toast.create({
    //       message: "Please check the internet connection.",
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //   }
    // }
  }
}
