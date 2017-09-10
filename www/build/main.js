webpackJsonp([0],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageslidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImageslidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageslidePage = (function () {
    function ImageslidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var img = new Image();
        img.src = "../img/blank.png";
        this.ImageUrl = navParams.get('ImageUrl');
        this.slideIndex = navParams.get('slideIndex');
        // if (this.slideIndex) {
        //   this.slides.slideTo(this.slideIndex);
        // }
    }
    ImageslidePage.prototype.ionViewDidEnter = function () {
        if (this.slideIndex) {
            this.slides.slideTo(this.slideIndex);
            //this.slides.initialSlide = this.slideIndex;
        } // The 0 will avoid the transition of the slides to be shown
    };
    ImageslidePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        if (currentIndex == 1) {
            this.slides.lockSwipeToPrev(true);
        }
    };
    ImageslidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageslidePage');
    };
    return ImageslidePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */])
], ImageslidePage.prototype, "slides", void 0);
ImageslidePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imageslide',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\imageslide\imageslide.html"*/'<!--\n  Generated template for the ImageslidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="imageSlidesPage" padding>\n  <!-- <ion-slide *ngFor="let image of ImageUrl">\n    <img [src]="image" />\n  </ion-slide> -->\n  <!-- <ion-slides>\n    <ion-slide *ngFor="let image of ImageUrl">\n      <img [src]="image" />\n    </ion-slide>\n  </ion-slides> -->\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let image of ImageUrl">\n      <img [src]="image.Url" *ngIf="(image.Url.indexOf(\'.jpg\') > -1) && image.Url">\n      <video width="100%" height="35%" *ngIf="(image.Url.indexOf(\'.mp4\') > -1) && image.Url" controls>\n        <source [src]="image.Url" type="video/mp4">\n        <source [src]="image.Url" type="video/wmv">\n        <source src="image.Url" type="video/ogg"> Your browser does not support the video tag.\n      </video>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\imageslide\imageslide.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], ImageslidePage);

//# sourceMappingURL=imageslide.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagegalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageslide_imageslide__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ImagegalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImagegalleryPage = (function () {
    function ImagegalleryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.images = navParams.get('ImageUrl');
        //this.videos = navParams.get('VideoUrl');
        this.imageCount = this.images.length - 1;
        this.grid = Array(Math.ceil(this.imageCount / 3)); //MATHS!
    }
    ImagegalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImagegalleryPage');
        var rowNum = 0; //counter to iterate over the rows in the grid
        //for (let i = 0; i < this.images.length; i += 2) { //iterate images
        for (var i = 1; i <= this.imageCount; i += 3) {
            this.grid[rowNum] = Array(3); //declare two elements per row
            if (this.images[i]) {
                this.grid[rowNum][0] = this.images[i]; //insert image
            }
            if (this.images[i + 1]) {
                this.grid[rowNum][1] = this.images[i + 1];
            }
            if (this.images[i + 2]) {
                this.grid[rowNum][2] = this.images[i + 2];
            }
            rowNum++; //go on to the next row
        }
    };
    ImagegalleryPage.prototype.showImage = function (event, rIndex, cIndex) {
        var index;
        index = (rIndex * 3) + cIndex;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__imageslide_imageslide__["a" /* ImageslidePage */], {
            slideIndex: index + 1,
            ImageUrl: this.images
        });
    };
    return ImagegalleryPage;
}());
ImagegalleryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imagegallery',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\imagegallery\imagegallery.html"*/'<!--\n  Generated template for the ImagegalleryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar transparent>\n    <ion-title>Gallery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="imageSlidesPage" padding>\n  <ion-grid>\n    <ion-row wrap class="ion-row" *ngFor="let row of grid; let rIndex = index;">\n      <ion-col class="ion-col" width-33 *ngFor="let file_uri of row; let cIndex = index;">\n        <img [src]="file_uri.Url" (click)="showImage($event, rIndex, cIndex)" *ngIf="(file_uri.Url.indexOf(\'.jpg\') > -1) && file_uri.Url"\n          class="thumb-img">\n        <img [src]="file_uri.Thumbnail" (click)="showImage($event, rIndex, cIndex)" *ngIf="(file_uri.Url.indexOf(\'.mp4\') > -1) && file_uri.Url"\n          class="thumb-img imageLast">\n        <div class=\'description\' *ngIf="(file_uri.Url.indexOf(\'.mp4\') > -1) && file_uri.Url">\n          <img src="img/play.png" (click)="showImage($event, rIndex, cIndex)" style="height: 50px;width:50px;" class=\'description_content\'>\n        </div>\n        <!-- <video width="100%" height="100%" *ngIf="(file_uri.indexOf(\'.mp4\') > -1) && file_uri" controls>\n          <source [src]="file_uri" type="video/mp4">\n          <source src="file_uri" type="video/ogg"> Your browser does not support the video tag.\n        </video> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-item style="background: transparent;" *ngIf="videos.length > 0">\n    <video width="100%" height="35%" *ngFor="let video of videos" controls>\n      <source [src]="video" type="video/mp4">\n      <source src="video" type="video/ogg"> Your browser does not support the video tag.\n    </video>\n  </ion-item> -->\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\imagegallery\imagegallery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], ImagegalleryPage);

//# sourceMappingURL=imagegallery.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Push, PushToken } from '@ionic/cloud-angular';



var LoginPage = (function () {
    function LoginPage(navCtrl, fb, googlePlus, nativeStorage, loadingCtrl, network, apiService, push, toast) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.apiService = apiService;
        this.push = push;
        this.toast = toast;
        this.regData = { EmailAddress: '', DeviceId: '', UserToken: '', DeviceName: '', UserName: '', UserImageURL: '' };
    }
    LoginPage.prototype.googleLogin = function () {
        var env = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.googlePlus.login({
                'scopes': '',
                'webClientId': '738030326158-nv974th0q7oi4c58dqua7evj4mcqs2du.apps.googleusercontent.com',
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
                };
                env.nativeStorage.setItem('loginPlatform', {
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
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    //   this.push.rx.notification()
    //     .subscribe((msg) => {
    //       console.log('I received awesome push: ' + msg);
    //     });
    // }
    LoginPage.prototype.fbLogin = function () {
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
        var permissions = new Array();
        var env = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            //the permissions your facebook app needs from the user
            permissions = ["public_profile", 'user_friends', 'email'];
            env.fb.login(permissions)
                .then(function (response) {
                var userId = response.authResponse.userID;
                var params = new Array();
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
                    };
                    env.nativeStorage.setItem('loginPlatform', {
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
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        //this.navCtrl.setRoot(MenuPage);
    };
    LoginPage.prototype.registerUser = function () {
        var env = this;
        var userData;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        env.apiService.register(env.regData).then(function (fbResult) {
            if (JSON.parse(fbResult['_body']) != null) {
                userData = JSON.parse(fbResult['_body']);
            }
            env.apiService.load(env.regData.UserToken).then(function (result) {
                if (result[0]) {
                    userData = result[0];
                }
                env.nativeStorage.setItem('user', {
                    name: userData.UserName,
                    picture: userData.UserImageUrl,
                    isAdmin: userData.IsAdmin,
                    Status: userData.Status,
                    Id: userData.Id
                }).then(function () {
                    loading.present();
                    env.apiService.loadContact()
                        .then(function (data) {
                        env.nativeStorage.setItem('ContactDetail', {
                            contactdetail: data
                        }).then(function () {
                            env.nativeStorage.getItem('loginPlatform')
                                .then(function (userData) {
                                if (userData.platform == "2") {
                                    __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().signOut().then(function (response) {
                                        env.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
                                        loading.dismiss();
                                    }).catch(function (error) {
                                        console.log(error);
                                    });
                                }
                                if (userData.platform == "1") {
                                    env.googlePlus.logout()
                                        .then(function (response) {
                                        env.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
                                        loading.dismiss();
                                    }, function (error) {
                                        console.log(error);
                                    });
                                }
                            });
                        }, function (error) {
                            loading.dismiss();
                            console.log(error);
                        });
                    }, function (err) {
                        console.log(err);
                        loading.dismiss();
                    });
                });
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\login\login.html"*/'<ion-content overflow-scroll="true" padding class="getstart">\n\n  <!-- <video autoplay loop src="assets/vid/weddingappbg.mp4"></video> -->\n    <div class="bottomLogin">\n        <ion-label class="lblLogin"><h3>Join us with</h3> </ion-label>\n        <div class="inner">\n            <!-- <button ion-button class="btnSocialLogin" (click)="fbLogin()" color="Default" block icon-left><ion-icon name="logo-facebook" class="fbBtn"></ion-icon></button> -->\n            <img src="img/logo-facebook.png" class="logoBtn" (click)="fbLogin()" >\n        <!-- </div>\n        <div class="inner">  -->\n            <!-- <button ion-button class="btnSocialLogin" block color="danger" (click)="googleLogin()"><ion-icon name="logo-googleplus" class="googleBtn"></ion-icon></button>          \n             -->\n            <img src="img/logo-google.png" class="logoBtn" (click)="googleLogin()" >\n          </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__["b" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageGmapAutocomplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { identifierModuleUrl } from '@angular/compiler/compiler';




var PageGmapAutocomplete = (function () {
    function PageGmapAutocomplete(loadingCtrl, toastCtrl, app, nav, zone, platform, alertCtrl, 
        //  public storage: Storage ,
        actionSheetCtrl, geolocation, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.nav = nav;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.addressElement = null;
        this.listSearch = '';
        this.search = false;
        this.switch = "map";
        this.coords = { eventLatitude: '', eventLongitude: '' };
        this.regionals = [];
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.callback = this.navParams.get('callback');
        this.data = this.navParams.get('data') || [];
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.regionals = [{
                    "title": "Marker 1",
                    "latitude": resp.coords.latitude,
                    "longitude": resp.coords.longitude
                }
                // , {
                //     "title": "Marker 3",
                //     "latitude": 52.50010,
                //     "longitude": 13.29922,
                // }, {
                //     "title": "Marker 2",
                //     "latitude": 49.1028606,
                //     "longitude": 9.8426116
                // }
            ];
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    PageGmapAutocomplete.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    PageGmapAutocomplete.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    PageGmapAutocomplete.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    PageGmapAutocomplete.prototype.mapsSearchBar = function (ev) {
        // set input to the value of the searchbar
        //this.search = ev.target.value;
        console.log(ev);
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                    console.log(place.geometry.location + "mapsSearchBar");
                }
            });
        });
    };
    PageGmapAutocomplete.prototype.initAutocomplete = function () {
        var _this = this;
        // reference : https://github.com/driftyco/ionic/issues/7223
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var options = {
                center: location,
                zoom: 10
            };
            _this.map.setOptions(options);
            _this.addMarker(location, _this.addressElement);
            console.log(location + "initAutocomplete");
        });
    };
    PageGmapAutocomplete.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    _this.coords.eventLatitude = place.geometry.location.lat();
                    _this.coords.eventLongitude = place.geometry.location.lng();
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    PageGmapAutocomplete.prototype.initializeMap = function () {
        var _this = this;
        this.zone.run(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                var mapEle = _this.mapElement.nativeElement;
                _this.map = new google.maps.Map(mapEle, {
                    zoom: 10,
                    center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                    disableDoubleClickZoom: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                    scaleControl: true,
                });
                var markers = [];
                var _loop_1 = function (regional) {
                    regional.distance = 0;
                    regional.visible = false;
                    regional.current = false;
                    var markerData = {
                        position: {
                            lat: regional.latitude,
                            lng: regional.longitude
                        },
                        map: _this.map,
                        title: regional.title,
                    };
                    regional.marker = new google.maps.Marker(markerData);
                    markers.push(regional.marker);
                    regional.marker.addListener('click', function () {
                        for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                            var c = _a[_i];
                            c.current = false;
                            //c.infoWindow.close();
                        }
                        _this.currentregional = regional;
                        regional.current = true;
                        //regional.infoWindow.open(this.map, regional.marker);
                        _this.map.panTo(regional.marker.getPosition());
                    });
                };
                for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                    var regional = _a[_i];
                    _loop_1(regional);
                }
                new MarkerClusterer(_this.map, markers, {
                    styles: [
                        {
                            height: 53,
                            url: "assets/img/cluster/MapMarkerJS.png",
                            width: 53,
                            textColor: '#fff'
                        },
                        {
                            height: 56,
                            url: "assets/img/cluster/MapMarkerJS.png",
                            width: 56,
                            textColor: '#fff'
                        },
                        {
                            height: 66,
                            url: "assets/img/cluster/MapMarkerJS.png",
                            width: 66,
                            textColor: '#fff'
                        },
                        {
                            height: 78,
                            url: "assets/img/cluster/MapMarkerJS.png",
                            width: 78,
                            textColor: '#fff'
                        },
                        {
                            height: 90,
                            url: "assets/img/cluster/MapMarkerJS.png",
                            width: 90,
                            textColor: '#fff'
                        }
                    ]
                });
                google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                    google.maps.event.trigger(_this.map, 'resize');
                    mapEle.classList.add('show-map');
                    _this.bounceMap(markers);
                    _this.getCurrentPositionfromStorage(markers);
                });
                google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                    _this.zone.run(function () {
                        _this.resizeMap();
                    });
                });
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    //Center zoom
    //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
    PageGmapAutocomplete.prototype.bounceMap = function (markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
    };
    PageGmapAutocomplete.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    PageGmapAutocomplete.prototype.getCurrentPositionfromStorage = function (markers) {
        // this.storage.get('lastLocation').then((result) => {
        //   if (result) {
        //     let myPos = new google.maps.LatLng(result.lat, result.long);
        //     this.map.setOptions({
        //       center: myPos,
        //       zoom: 14
        //     });
        //     let marker = this.addMarker(myPos, "My last saved Location: " + result.location);
        //     markers.push(marker);
        //     this.bounceMap(markers);
        //     this.resizeMap();
        //   }
        // });
    };
    PageGmapAutocomplete.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PageGmapAutocomplete.prototype.choosePosition = function () {
        // this.storage.get('lastLocation').then((result) => {
        //   if (result) {
        //     let actionSheet = this.actionSheetCtrl.create({
        //       title: 'Last Location: ' + result.location,
        //       buttons: [
        //         {
        //           text: 'Reload',
        //           handler: () => {
        this.getCurrentPosition();
        //           }
        //         },
        //         {
        //           text: 'Delete',
        //           handler: () => {
        //             this.storage.set('lastLocation', null);
        //             this.showToast('Location deleted!');
        //             this.initializeMap();
        //           }
        //         },
        //         {
        //           text: 'Cancel',
        //           role: 'cancel',
        //           handler: () => {
        //           }
        //         }
        //       ]
        //     });
        //     actionSheet.present();
        //   } else {
        //     this.getCurrentPosition();
        //   }
        // });
    };
    // go show currrent location
    PageGmapAutocomplete.prototype.getCurrentPosition = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Searching Location ...'
        });
        this.loading.present();
        var locationOptions = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            _this.loading.dismiss().then(function () {
                _this.showToast('Location found!');
                console.log(position.coords.latitude, position.coords.longitude);
                var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var options = {
                    center: myPos,
                    zoom: 14
                };
                _this.map.setOptions(options);
                _this.addMarker(myPos, "Mein Standort!");
                var alert = _this.alertCtrl.create({
                    title: 'Location',
                    message: 'Do you want to save the Location?',
                    buttons: [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'Save',
                            handler: function (data) {
                                var lastLocation = { lat: position.coords.latitude, long: position.coords.longitude };
                                console.log(lastLocation);
                                //   this.storage.set('lastLocation', lastLocation).then(() => {
                                //     this.showToast('Location saved');
                                //   });
                            }
                        }
                    ]
                });
                alert.present();
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                _this.showToast('Location not found. Please enable your GPS!');
                console.log(error);
            });
        });
    };
    PageGmapAutocomplete.prototype.toggleSearch = function () {
        if (this.search) {
            this.search = false;
        }
        else {
            this.search = true;
        }
    };
    PageGmapAutocomplete.prototype.addMarker = function (position, content) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    PageGmapAutocomplete.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    PageGmapAutocomplete.prototype.SetLocation = function () {
        var _this = this;
        // this.coords.eventLatitude = this.placedetails.lat;
        // this.coords.eventLongitude = this.placedetails.lng;
        this.callback(this.coords).then(function () { _this.nav.pop(); });
    };
    return PageGmapAutocomplete;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PageGmapAutocomplete.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PageGmapAutocomplete.prototype, "searchbar", void 0);
PageGmapAutocomplete = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-page-gmap-autocomplete',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\page-gmap-autocomplete\page-gmap-autocomplete.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Search Location</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)=\'toggleSearch()\'>\n        <ion-icon name="search"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<div class="currentitem" *ngIf="currentregional">\n  <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n    <h2>{{ currentregional.title }}</h2>\n    <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n  </button>\n</div>\n\n<ion-content>\n    <!-- <ion-searchbar [(ngModel)]="address.place" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"\n        placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n            {{ item.description }}\n        </ion-item>\n    </ion-list>\n    <div id="map"></div> -->\n\n\n    <div class="map">\n        <ion-searchbar #searchbar placeholder="Search" [hidden]="!search"></ion-searchbar>\n        <div id="map" #map></div>\n    </div>\n\n\n    <!-- <ion-list>\n        <ion-item margin>\n            <ion-input type="text" placeholder="Pick an address"\n                (click)="showModal()" \n                [(ngModel)]="address.place">\n            </ion-input>\n        </ion-item>\n        <ion-item *ngIf="address.set==true">\n            <ion-icon name="pin" item-left></ion-icon>\n            <h3>Full text address</h3>\n            <p>{{ placedetails.address }}</p>\n            <h3>Street name</h3>\n            <p>{{ placedetails.components.route.long }}</p>\n            <h3>Street number</h3>\n            <p>{{ placedetails.components.street_number.long }}</p>\n            <h3>Neighbourhood</h3>\n            <p>{{ placedetails.components.sublocality_level_1.long }}</p>\n            <h3>Postal Code</h3>\n            <p>{{ placedetails.components.postal_code.long }}{{ placedetails.components.postal_code_suffix.long }}</p>    \n            <h3>City</h3>\n            <p>{{ placedetails.components.locality.long }}</p>     \n            <h3>Location geometry</h3>\n            <p>{{ placedetails.lat }}, {{ placedetails.lng }}</p>                                           \n        </ion-item>\n    </ion-list> -->\n\n\n    <ion-footer no-padding style="margin:0rem 0rem!Important;">\n        <button ion-button block (click)="SetLocation()">Set Location</button>\n    </ion-footer>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\page-gmap-autocomplete\page-gmap-autocomplete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], PageGmapAutocomplete);

//# sourceMappingURL=page-gmap-autocomplete.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 245;

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 287;

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiServiceProvider = (function () {
    function ApiServiceProvider(http, network) {
        this.http = http;
        this.network = network;
        this.API_URL = "http://ramanwedding-001-site1.itempurl.com/api/";
        this.API_KEY = "AIzaSyDUACJKoehSZnVsrTH_pqnUsVUOL6RhxZY";
        console.log('Hello ApiServiceProvider Provider');
    }
    // checkNetwork() {
    //   this.network.onConnect().subscribe(data => {
    //       this.isConnected = data.type;
    //     }, err => {
    //       console.log(err);
    //     });
    //     this.network.onDisconnect
    // }
    ApiServiceProvider.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            _this.isConnected = data.type;
        }, function (err) {
            console.log(err);
        });
        this.network.onDisconnect().subscribe(function (data) {
            _this.isConnected = data.type;
        }, function (err) {
            console.log(err);
        });
    };
    ApiServiceProvider.prototype.load = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get(_this.API_URL + 'UserInfo/GetUsersInfo/' + data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                _this.allUsers = result;
                resolve(_this.allUsers);
            });
        });
    };
    ApiServiceProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'UserInfo/AddUserInfo/', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.GetApprovalPendingUsersInfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + 'UserInfo/GetApprovalPendingUsersInfo/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.pendingUsers = data;
                resolve(_this.pendingUsers);
            });
        });
    };
    ApiServiceProvider.prototype.acceptUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'UserInfo/ApproveUser/' + data, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.rejectUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'UserInfo/RejectUser/' + data, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.loadContact = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + 'ContactUs/GetContactUsDetails/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.contactDetail = data;
                resolve(_this.contactDetail);
            });
        });
    };
    ApiServiceProvider.prototype.uploadEvent = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'Events/CreateEvent/', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.updateEvent = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.API_URL + 'Events/UpdateEvent/' + data.Id, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.getEvents = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + 'Events/GetEvents/' + data + '/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.events = data;
                resolve(_this.events);
            });
        });
    };
    ApiServiceProvider.prototype.getEventDetail = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get('http://ramanwedding-001-site1.itempurl.com/api/Events/GetEventDetails/' + data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                resolve(result);
            });
        });
    };
    ApiServiceProvider.prototype.uploadImages = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'Events/UploadFiles/1/5', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.acceptAllUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.API_URL + 'UserInfo/ApproveUsers/', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.searchLocation = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + _this.API_KEY, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.loadGallery = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + 'Events/GetAllImages/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.ImageURL = data;
                resolve(_this.ImageURL);
            });
        });
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
], ApiServiceProvider);

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imageslide_imageslide__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagegallery_imagegallery__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { EventdetailPage } from '../eventdetail/eventdetail';



var HomePage = (function () {
    function HomePage(navCtrl, apiService, network, nativeStorage, loadingCtrl, toast) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.user = { ImageURL: '', Name: '', isAdmin: false, Status: 0, sts: '', Id: '' };
        this.value = 0;
        var env = this;
        var loading = env.loadingCtrl.create({
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
                        .then(function (data) {
                        env.allUser = data;
                        env.allUser.forEach(function (element) {
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
                    var toast_1 = this.toast.create({
                        message: "Please check the internet connection.",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast_1.present();
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
    HomePage.prototype.getEvents = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.apiService.getEvents(false).then(function (data) {
                env.events = data;
                env.events.forEach(function (element) {
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
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    HomePage.prototype.showImage = function (index, ImageURL) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__imageslide_imageslide__["a" /* ImageslidePage */], {
            slideIndex: index + 1,
            ImageUrl: ImageURL
        });
    };
    HomePage.prototype.showGallery = function (ImageURL) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__imagegallery_imagegallery__["a" /* ImagegalleryPage */], {
            ImageUrl: ImageURL
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        if (this.network.type !== 'none') {
            var env_1 = this;
            var loading_1 = env_1.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            env_1.apiService.getEvents(false).then(function (data) {
                env_1.events = data;
                env_1.events.forEach(function (element) {
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
                loading_1.dismiss();
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
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
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card padding *ngIf="user.sts != \'Approved\'">\n    <div>\n      <label>\n    Your Request is {{user.sts}}.\n  </label>\n    </div>\n  </ion-card>\n\n  <ion-list *ngIf="user.sts == \'Approved\'">\n    <ion-card class="cardHome" padding *ngFor="let event of events">\n      <div *ngIf="event.value === 0">\n        <ion-item text-wrap no-lines style="background: transparent; color: white; font-size: 2.4rem;">\n          <p style="background: transparent; color: white; font-size: 2.0rem;">{{event.Description}}</p>\n        </ion-item>\n      </div>\n      <ion-grid *ngIf="event.value === 1">\n        <ion-row class="ion-row" *ngIf="event.imageCount === 1">\n          <ion-col class="ion-col">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img"\n              imageViewer>\n            <!-- <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img"> -->\n            <video width="100%" height="100%" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" controls>\n              <source [src]="event.ImageUrl[1].Url" type="video/mp4">\n              <source src="event.ImageUrl[1].Url" type="video/ogg"> Your browser does not support the video tag.\n            </video>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 2">\n          <ion-col width-50 class="ion-col" (click)="showImage(0, event.ImageUrl)">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[1].Thumbnail" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n              <img src="img/play.png" (click)="showImage(0, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(1, event.ImageUrl)">\n            <img [src]="event.ImageUrl[2].Url" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[2].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[2].Thumbnail" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n              <img src="img/play.png" (click)="showImage(1, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 3">\n          <ion-col class="ion-col" (click)="showImage(0, event.ImageUrl)">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[1].Thumbnail" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n              <img src="img/play.png" (click)="showImage(0, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 3">\n          <ion-col width-50 class="ion-col" (click)="showImage(1, event.ImageUrl)">\n            <img [src]="event.ImageUrl[2].Url" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[2].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[2].Thumbnail" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n              <img src="img/play.png" (click)="showImage(1, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(2, event.ImageUrl)">\n            <img [src]="event.ImageUrl[3].Url" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[3].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[3].Thumbnail" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n              <img src="img/play.png" (click)="showImage(2, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 4">\n          <ion-col width-50 class="ion-col" (click)="showImage(0, event.ImageUrl)">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[1].Thumbnail" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n              <img src="img/play.png" (click)="showImage(0, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(1, event.ImageUrl)">\n            <img [src]="event.ImageUrl[2].Url" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[2].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[2].Thumbnail" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n              <img src="img/play.png" (click)="showImage(1, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 4">\n          <ion-col width-50 class="ion-col" (click)="showImage(2, event.ImageUrl)">\n            <img [src]="event.ImageUrl[3].Url" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[3].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[3].Thumbnail" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n              <img src="img/play.png" (click)="showImage(2, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(3, event.ImageUrl)">\n            <img [src]="event.ImageUrl[4].Url" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[4].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[4].Thumbnail" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n              <img src="img/play.png" (click)="showImage(3, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="ion-row" *ngIf="event.imageCount === 5">\n          <ion-col width-50 class="ion-col" (click)="showImage(0, event.ImageUrl)">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[1].Thumbnail" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n              <img src="img/play.png" (click)="showImage(0, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(1, event.ImageUrl)">\n            <img [src]="event.ImageUrl[2].Url" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[2].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[2].Thumbnail" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n              <img src="img/play.png" (click)="showImage(1, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount === 5">\n          <ion-col width-34 class="ion-col" (click)="showImage(2, event.ImageUrl)">\n            <img [src]="event.ImageUrl[3].Url" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[3].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[3].Thumbnail" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n              <img src="img/play.png" (click)="showImage(2, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-33 class="ion-col" (click)="showImage(3, event.ImageUrl)">\n            <img [src]="event.ImageUrl[4].Url" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[4].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[4].Thumbnail" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n              <img src="img/play.png" (click)="showImage(3, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-33 (click)="showImage(4, event.ImageUrl)" class="ion-col">\n            <img [src]="event.ImageUrl[5].Url" *ngIf="(event.ImageUrl[5].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[5].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[5].Thumbnail" *ngIf="(event.ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[5].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[5].Url">\n              <img src="img/play.png" (click)="showImage(4, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount > 5">\n          <ion-col width-50 class="ion-col" (click)="showImage(0, event.ImageUrl)">\n            <img [src]="event.ImageUrl[1].Url" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[1].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[1].Thumbnail" *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n              <img src="img/play.png" (click)="showImage(0, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-50 class="ion-col" (click)="showImage(1, event.ImageUrl)">\n            <img [src]="event.ImageUrl[2].Url" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[2].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[2].Thumbnail" *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n              <img src="img/play.png" (click)="showImage(1, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="ion-row" *ngIf="event.imageCount > 5">\n          <ion-col width-33 class="ion-col" (click)="showImage(2, event.ImageUrl)">\n            <img [src]="event.ImageUrl[3].Url" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[3].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[3].Thumbnail" *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n              <img src="img/play.png" (click)="showImage(2, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-33 class="ion-col" (click)="showImage(3, event.ImageUrl)">\n            <img [src]="event.ImageUrl[4].Url" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[4].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[4].Thumbnail" *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url" class="thumb-img imageThumbnail">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n              <img src="img/play.png" (click)="showImage(3, event.ImageUrl)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n          </ion-col>\n          <ion-col width-33 (click)="showGallery(event.ImageUrl)" class="ion-col imageLast">\n            <img [src]="event.ImageUrl[5].Url" *ngIf="(event.ImageUrl[5].Url.indexOf(\'.jpg\') > -1) && event.ImageUrl[5].Url" class="thumb-img">\n            <img [src]="event.ImageUrl[5].Thumbnail" *ngIf="(event.ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[5].Url" class="thumb-img">\n            <div class=\'vidDesc\' *ngIf="(event.ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[5].Url">\n              <img src="img/play.png" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n            </div>\n            <div class=\'description\'>\n              <p class=\'description_content\'>See All</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactdetailPage = (function () {
    // public htmlData = { HtmlText: '', ContactNumber: '' };
    function ContactdetailPage(navCtrl, navParams, apiService, callNumber, nativeStorage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.callNumber = callNumber;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.htmlString = [];
        this.loadDetail();
    }
    ContactdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactdetailPage');
    };
    ContactdetailPage.prototype.loadDetail = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        env.nativeStorage.getItem('ContactDetail')
            .then(function (data) {
            //env.htmlString = data.contactdetail;
            data.contactdetail.forEach(function (element) {
                var HtmlTextIndex = element.Description.indexOf("<button");
                var sIndex = element.Description.indexOf("('");
                var lIndex = element.Description.indexOf("')");
                var htmlData = { HtmlText: '', ContactNumber: '' };
                htmlData = {
                    HtmlText: element.Description.substr(0, HtmlTextIndex),
                    ContactNumber: element.Description.substr(sIndex + 2, lIndex - (sIndex + 2))
                };
                env.htmlString.push(htmlData);
            });
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
    };
    ContactdetailPage.prototype.launchDialer = function (n) {
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    return ContactdetailPage;
}());
ContactdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactdetail',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\contactdetail\contactdetail.html"*/'<ion-header>\n\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>RSVP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contactus">\n  <ion-card class="cardHome" padding *ngFor="let data of htmlString">\n    <div [innerHTML]="\'<p>\' + data.HtmlText + \'</p>\'">\n    </div>\n    <button ion-button clear (click)="launchDialer(data.ContactNumber)" clear>{{data.ContactNumber}}</button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\contactdetail\contactdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
], ContactdetailPage);

//# sourceMappingURL=contactdetail.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingRequestsPage = (function () {
    function PendingRequestsPage(navCtrl, navParams, apiService, loadingCtrl, nativeStorage, alertCtrl, network, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toast = toast;
        this.ids = [];
        this.IdContainer = { ids: [] };
        this.checked = true;
        this.loadPeople();
        this.selectDone = false;
        this.selectCancel = false;
    }
    PendingRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingRequestsPage');
    };
    PendingRequestsPage.prototype.loadPeople = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            this.apiService.GetApprovalPendingUsersInfo()
                .then(function (data) {
                env.people = data;
                env.people.forEach(function (element) {
                    var url = element.UserImageUrl;
                    element.ImageUrl = url;
                    element.checked = false;
                });
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    PendingRequestsPage.prototype.EnableSelect = function () {
        this.selectDone = true;
        this.selectCancel = true;
    };
    PendingRequestsPage.prototype.unSelectAll = function () {
        this.selectDone = false;
        this.selectCancel = false;
    };
    PendingRequestsPage.prototype.SelectAll = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Confirm ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.SelectAllPendingRequests();
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    PendingRequestsPage.prototype.SelectAllPendingRequests = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.people.forEach(function (element) {
                if (element.checked == true && env.ids.indexOf(element.Id) == -1) {
                    env.ids.push(element.Id);
                }
            });
            env.people.forEach(function (element) {
                element.checked = false;
            });
            env.IdContainer.ids = env.ids;
            this.apiService.acceptAllUser(env.IdContainer)
                .then(function (result) {
                loading.present();
                env.loadPeople();
                loading.dismiss();
            }, function (err) {
                console.log(err);
                env.ids = [];
                env.IdContainer.ids = [];
                env.selectCancel = false;
                env.selectDone = false;
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    PendingRequestsPage.prototype.accept = function (event, item) {
        var env = this;
        event.stopPropagation();
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            this.apiService.acceptUser(item.Id).then(function (result) {
                loading.present();
                env.loadPeople();
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    PendingRequestsPage.prototype.cancel = function (event, item) {
        var env = this;
        event.stopPropagation();
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            this.apiService.rejectUser(item.Id).then(function (result) {
                env.loadPeople();
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    return PendingRequestsPage;
}());
PendingRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-requests',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\pending-requests\pending-requests.html"*/'<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Pending Request</ion-title>\n\n    <ion-buttons start right *ngIf="people">\n      <button ion-button (click)="EnableSelect()" *ngIf="!selectDone && !selectCancel">\n        <ion-icon name="md-checkbox-outline"></ion-icon>\n      </button>\n      <button ion-button clear (click)="SelectAll()" *ngIf="selectDone && selectCancel">OK</button>\n      <button ion-button clear (click)="unSelectAll()" *ngIf="selectDone && selectCancel">Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pending-requests">\n  <ion-list>\n    <ion-item *ngFor="let person of people" class="item item-button-right">\n      <ion-avatar item-left>\n        <img [src]="person.ImageUrl">\n      </ion-avatar>\n      <h2>{{person.UserName}} </h2>\n      <!-- <button item-right clear (click)=\'clearInputText($event)\'>\n        <ion-icon name="md-checkmark"></ion-icon>\n    </button> -->\n\n      <!-- <button ion-button icon-only clear item-right (click)="clearInputText(person)"><ion-icon name="md-checkmark"></ion-icon></button> -->\n      <div class="divIcons" *ngIf="!(selectDone)">\n        <ion-icon (click)="accept($event, person)" class="ioniconPos" item-right name="md-checkmark"></ion-icon>\n        <ion-icon (click)="cancel($event, person)" class="ioniconPos" item-right name="md-close"></ion-icon>\n      </div>\n      <ion-checkbox start right class="inputClass" *ngIf="selectDone" [(ngModel)]="person.checked" value="person.Id"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\pending-requests\pending-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], PendingRequestsPage);

//# sourceMappingURL=pending-requests.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UsersPage = (function () {
    function UsersPage(navCtrl, apiService, nativeStorage, loadingCtrl, network, toast) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toast = toast;
        this.user = { ImageURL: '', Name: '', isAdmin: false, Status: 0, sts: '' };
        var env = this;
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
        env.loadPeople();
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage.prototype.loadPeople = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            this.apiService.load("null")
                .then(function (data) {
                env.people = data;
                env.people.forEach(function (element) {
                    var url = element.UserImageUrl;
                    element.ImageUrl = url;
                });
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\users\users.html"*/'<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="users">\n  <ion-list>\n    <ion-item *ngFor="let person of people">\n      <ion-avatar item-left>\n        <img [src]="person.ImageUrl">\n      </ion-avatar>\n      <h2>{{person.UserName}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], UsersPage);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_native__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CreateeventPage = (function () {
    function CreateeventPage(navCtrl, navParams, nativeStorage, apiService, loadingCtrl, imagePicker, actionSheetCtrl, camera, transfer, file, filePath, toastCtrl, platform, geolocation, network) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.network = network;
        this.lastImage = [];
        this.evtData = { Name: '', Description: '', EventDate: '', IsDateSaved: true, CreatedById: 0, Lat: 0.0, Long: 0.0 };
        this.getData = function (data) {
            return new Promise(function (resolve, reject) {
                _this.eventLatitude = data.eventLatitude;
                _this.eventLongitude = data.eventLongitude;
                _this.isLocationSet = true;
                resolve();
            });
        };
        this.savetheDate = "false";
        this.showAll = false;
    }
    CreateeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateeventPage');
    };
    CreateeventPage.prototype.optionsFn = function () {
        console.log(this.savetheDate);
        if (this.savetheDate === "true") {
            this.showAll = true;
        }
        else {
            this.showAll = false;
        }
    };
    CreateeventPage.prototype.CreateEvent = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.nativeStorage.getItem('user').then(function (data) {
                env.UserId = data.Id;
                env.evtData = {
                    Name: env.eventName,
                    Description: env.eventDescription,
                    EventDate: env.eventDate,
                    IsDateSaved: env.showAll,
                    CreatedById: data.Id,
                    Lat: env.eventLatitude,
                    Long: env.eventLongitude
                };
                env.apiService.uploadEvent(env.evtData).then(function (data) {
                    console.log(data);
                    if (JSON.parse(data['_body']) != null) {
                        var evtData = JSON.parse(data['_body']);
                        env.uploadImage(evtData);
                    }
                    env.presentToast("Event Created");
                    loading.dismiss();
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                });
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    CreateeventPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Media',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                        console.log('Camera clicked');
                    }
                },
                {
                    text: 'Images',
                    role: 'destructive',
                    handler: function () {
                        //this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.setImage();
                        console.log('Select Images clicked');
                    }
                },
                {
                    text: 'Video',
                    role: 'destructive',
                    handler: function () {
                        //this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.setVideo(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        console.log('Select Video clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateeventPage.prototype.SetLocation = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Location via',
            buttons: [
                {
                    text: 'Current Location',
                    role: 'destructive',
                    handler: function () {
                        if (_this.network.type !== 'none') {
                            var loading_1 = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading_1.present();
                            _this.geolocation.getCurrentPosition().then(function (resp) {
                                _this.eventLatitude = resp.coords.latitude;
                                _this.eventLongitude = resp.coords.longitude;
                                _this.isLocationSet = true;
                                loading_1.dismiss();
                                _this.presentToast("Current Location Set.");
                            }).catch(function (error) {
                                console.log('Error getting location', error);
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Please check the internet connection.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Search Location',
                    role: 'destructive',
                    handler: function () {
                        if (_this.network.type !== 'none') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocomplete */], {
                                data: _this.evtData,
                                callback: _this.getData
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Please check the internet connection.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateeventPage.prototype.setImage = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            width: 500,
            height: 500,
            quality: 75
        };
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_9_ionic_native__["d" /* ImagePicker */].getPictures(options).then(function (imagePath) {
            if (imagePath !== "OK") {
                imagePath.forEach(function (element) {
                    var currentName = element.substr(element.lastIndexOf('/') + 1);
                    var correctPath = element.substr(0, element.lastIndexOf('/') + 1);
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9_ionic_native__["d" /* ImagePicker */].getPictures(options).then(function (imagePath) {
                    imagePath.forEach(function (element) {
                        var currentName = element.substr(element.lastIndexOf('/') + 1);
                        var correctPath = element.substr(0, element.lastIndexOf('/') + 1);
                        _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                    });
                });
            }
        });
        loading.dismiss();
    };
    CreateeventPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imagePath) {
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            if (_this.platform.is('android') && sourceType === 0) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                    loading.dismiss();
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                loading.dismiss();
            }
        });
    };
    //   Since iOS 10 it's mandatory to add a NSCameraUsageDescription and NSPhotoLibraryUsageDescription in the info.plist.
    // NSCameraUsageDescription describes the reason that the app accesses the user’s camera.
    // NSPhotoLibraryUsageDescription describes the reason the app accesses the user's photo library.
    CreateeventPage.prototype.setVideo = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            mediaType: this.camera.MediaType.VIDEO,
            destinationType: this.camera.DestinationType.FILE_URI
        }).then(function (imagePath) {
            imagePath = "file://" + imagePath;
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".mp4"));
            loading.dismiss();
        });
    };
    // Create a new name for the image
    CreateeventPage.prototype.createFileName = function (format) {
        var d = new Date(), n = d.getTime(), newFileName = n + format;
        return newFileName;
    };
    // Copy the image to a local folder
    CreateeventPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage.push(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    CreateeventPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    CreateeventPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    CreateeventPage.prototype.uploadImage = function (evtData) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // Destination URL
        var url = "http://ramanwedding-001-site1.itempurl.com/api/Events/UploadFiles/" + evtData.Id + "/" + this.UserId;
        //"http://ramanwedding-001-site1.itempurl.com/api/Events/PostUserImage";
        this.lastImage.forEach(function (element) {
            var targetPath = _this.pathForImage(element);
            // File name only
            var filename = element;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename }
            };
            var fileTransfer = _this.transfer.create();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                console.log(data);
                // loading.dismiss();
                // this.presentToast('Image succesful uploaded.');
            }, function (err) {
                // loading.dismiss();
                _this.presentToast('Error while uploading file.');
                console.log(err);
            });
        });
        loading.dismiss();
        this.presentToast('Media succesfully uploaded.');
        // File for Upload
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__menu_menu__["a" /* MenuPage */]);
    };
    return CreateeventPage;
}());
CreateeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createevent',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\createevent\createevent.html"*/'<!--\n  Generated template for the CreateeventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Create Event</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="createevent">\n  <ion-item class="itemClass">\n    <ion-label>Event Type</ion-label>\n    <ion-select [(ngModel)]="savetheDate" style="color: white;" (ionChange)="optionsFn();">\n      <ion-option value="false">Home Event</ion-option>\n      <ion-option value="true">Save the Date</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="itemClass" *ngIf="showAll">\n    <ion-label color="primary" floating>Name</ion-label>\n    <ion-input class="inputClass" [(ngModel)]="eventName"></ion-input>\n  </ion-item>\n\n  <ion-item class="itemClass">\n    <ion-label color="primary" floating>Description</ion-label>\n    <ion-textarea class="inputClass" [(ngModel)]="eventDescription"></ion-textarea>\n  </ion-item>\n\n  <ion-item class="itemClass" *ngIf="showAll">\n    <ion-label color="primary" floating>Date</ion-label>\n    <ion-datetime class="inputClass" displayFormat="DD MMMM YYYY, DDDD, hh:mm A" [(ngModel)]="eventDate"></ion-datetime>\n  </ion-item>\n\n  <!-- <ion-item class="itemClass">\n    <ion-label>Save the date</ion-label>\n    <ion-checkbox class="inputClass" [(ngModel)]="isDateSaved"></ion-checkbox>\n  </ion-item> -->\n\n\n  <button ion-button round (click)="presentActionSheet()">Upload Media</button>\n  <ion-label color="primary" *ngIf="imageCount">{{imageCount}} images selected</ion-label>\n  <button ion-button round (click)="SetLocation()" *ngIf="showAll">Set Location</button>\n  <ion-label color="primary" *ngIf="isLocationSet && showAll">Location Done</ion-label>\n\n\n\n  <!-- <div class="postEventBtn">\n    <button ion-button full (click)="CreateEvent()">Create</button>\n  </div> -->\n\n  <ion-footer no-padding style="margin:0rem 0rem!Important;">\n    <button ion-button block color="primary" (click)="CreateEvent()">Create</button>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\createevent\createevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9_ionic_native__["d" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
], CreateeventPage);

//# sourceMappingURL=createevent.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SavedatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SavedatePage = (function () {
    function SavedatePage(navCtrl, apiService, nativeStorage, loadingCtrl, network, toast) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toast = toast;
        this.user = { ImageURL: '', Name: '', isAdmin: false, Status: 0, sts: '' };
        var env = this;
        env.nativeStorage.getItem('user')
            .then(function (userData) {
            env.user.ImageURL = userData.picture;
            env.user.Name = userData.name;
            env.user.isAdmin = userData.isAdmin;
            env.user.Status = userData.Status;
            if (env.user.Status == 10)
                env.user.sts = "Pending";
            else if (env.user.Status == 30) {
                env.user.sts = "Rejected";
            }
            else {
                env.user.sts = "Approved";
            }
            // user is previously logged and we have his data
            // we will let him access the app
            //env.navCtrl.push(HomePage);        
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            //env.navCtrl.push(LoginPage);
        });
        env.getEvents();
    }
    SavedatePage.prototype.getEvents = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.apiService.getEvents(true).then(function (data) {
                env.events = data;
                // env.events.forEach(element => {
                //   let desc = element.Description.length > 35 ? element.Description.substring(0, 35).concat("...") : element.Description;
                //   element.Description = desc;
                // });
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    SavedatePage.prototype.getEventDetail = function (data) {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.apiService.getEventDetail(data.Id).then(function (result) {
                env.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__["a" /* EventdetailPage */], {
                    EventData: result
                });
                loading.dismiss();
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    SavedatePage.prototype.doRefresh = function (refresher) {
        if (this.network.type !== 'none') {
            var env_1 = this;
            var loading_1 = env_1.loadingCtrl.create({
                content: 'Please wait...'
            });
            if (env_1.network.type !== 'none') {
                loading_1.present();
                env_1.apiService.getEvents(true).then(function (data) {
                    env_1.events = data;
                    // env.events.forEach(element => {
                    //   let desc = element.Description.length > 35 ? element.Description.substring(0, 35).concat("...") : element.Description;
                    //   element.Description = desc;
                    // });
                    if (refresher != 0)
                        refresher.complete();
                    loading_1.dismiss();
                }, function (err) {
                    console.log(err);
                    loading_1.dismiss();
                });
            }
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            refresher.complete();
        }
    };
    return SavedatePage;
}());
SavedatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-savedate',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\savedate\savedate.html"*/'<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Save the Date</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="savedate">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list *ngIf="user.sts == \'Approved\'">\n    <ion-card class="cardHome" padding *ngFor="let event of events" (click)="getEventDetail(event)">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding>\n            <h1>{{event.Name}}</h1><br/>\n            <h3>{{event.EventDate | date:\'dd MMMM yyyy, EEEE, hh:mm a\'}}</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-icon name="arrow-forward" class="forwrdIcon"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\savedate\savedate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], SavedatePage);

//# sourceMappingURL=savedate.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editevent_editevent__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__imageslide_imageslide__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__imagegallery_imagegallery__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EventdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventdetailPage = (function () {
    function EventdetailPage(navCtrl, navParams, toast, loadingCtrl, launchNavigator, geolocation, nativeStorage, modalCtrl, network, toastServ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.nativeStorage = nativeStorage;
        this.modalCtrl = modalCtrl;
        this.network = network;
        this.toastServ = toastServ;
        this.ImageUrl = [];
        this.videoArr = [];
        this.EventData = navParams.get('EventData');
        this.ImageUrl = this.EventData.ImageUrl;
        this.imageCount = this.ImageUrl.length - 1;
        this.eventLatitude = this.EventData.Lat;
        this.eventLongitude = this.EventData.Long;
        this.nativeStorage.getItem('user').then(function (data) {
            _this.isAdmin = data.isAdmin;
        });
    }
    EventdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventdetailPage');
    };
    EventdetailPage.prototype.showImage = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__imageslide_imageslide__["a" /* ImageslidePage */], {
            slideIndex: index + 1,
            ImageUrl: this.ImageUrl
        });
    };
    EventdetailPage.prototype.showGallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__imagegallery_imagegallery__["a" /* ImagegalleryPage */], {
            ImageUrl: this.ImageUrl
        });
    };
    EventdetailPage.prototype.Locate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (this.network.type !== 'none') {
            loading.present();
            if (this.eventLatitude && this.eventLongitude) {
                this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.currLat = resp.coords.latitude;
                    _this.currLong = resp.coords.longitude;
                    loading.dismiss();
                    _this.launchNavigator.navigate([_this.eventLatitude, _this.eventLongitude], {
                        start: "" + _this.currLat + "," + _this.currLong + ""
                    });
                }).catch(function (error) {
                    console.log('Error getting location', error);
                });
            }
            else {
                loading.dismiss();
                this.toast.show('Location not provided', '5000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
            }
        }
        else {
            var toast = this.toastServ.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EventdetailPage.prototype.EditEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editevent_editevent__["a" /* EditeventPage */], {
            EventData: this.EventData
        });
    };
    return EventdetailPage;
}());
EventdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eventdetail',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\eventdetail\eventdetail.html"*/'<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>{{EventData.Name}}</ion-title>\n    <ion-buttons start right *ngIf="isAdmin">\n      <button ion-button (click)="EditEvent()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="eventdetail">\n  <ion-label class="headingLbl">Name</ion-label>\n  <ion-item class="itemClass">\n    <ion-label class="lblClass">{{EventData.Name}}</ion-label>\n  </ion-item>\n\n  <ion-label class="headingLbl">Description</ion-label>\n  <ion-item text-wrap no-lines style="background: transparent; color: white; font-size: 2.4rem;">\n    <p style="background: transparent; color: white; font-size: 2.0rem;">{{EventData.Description}}</p>\n  </ion-item>\n\n  <ion-label class="headingLbl">Date</ion-label>\n  <ion-item class="itemClass">\n    <ion-label class="lblClass">{{EventData.EventDate | date:\'dd MMMM yyyy, EEEE, hh:mm a\'}}</ion-label>\n  </ion-item>\n\n  <ion-label class="headingLbl">Created by</ion-label>\n  <ion-item class="itemClass">\n    <ion-label class="lblClass">{{EventData.CreatedByName}}</ion-label>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row class="ion-row" *ngIf="imageCount === 1">\n      <ion-col class="ion-col">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img" imageViewer>\n        <video width="100%" height="100%" *ngIf="(ImageUrl[1].indexOf(\'.mp4\') > -1) && ImageUrl[1]" controls>\n          <source [src]="ImageUrl[1].Url" type="video/mp4">\n          <source [src]="ImageUrl[1].Url" type="video/wmv">\n          <source src="ImageUrl[1].Url" type="video/ogg"> Your browser does not support the video tag.\n        </video>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 2">\n      <ion-col width-50 class="ion-col" (click)="showImage(0)">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img">\n        <img [src]="ImageUrl[1].Thumbnail" *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && ImageUrl[1].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n          <img src="img/play.png" (click)="showImage(0)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(1)">\n        <img [src]="ImageUrl[2].Url" *ngIf="(ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && ImageUrl[2].Url" class="thumb-img">\n        <img [src]="ImageUrl[2].Thumbnail" *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && ImageUrl[2].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n          <img src="img/play.png" (click)="showImage(1)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 3">\n      <ion-col class="ion-col" (click)="showImage(0)">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img">\n        <img [src]="ImageUrl[1].Thumbnail" *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && ImageUrl[1].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n          <img src="img/play.png" (click)="showImage(0)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 3">\n      <ion-col width-50 class="ion-col" (click)="showImage(1)">\n        <img [src]="ImageUrl[2].Url" *ngIf="(ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && ImageUrl[2].Url" class="thumb-img">\n        <img [src]="ImageUrl[2].Thumbnail" *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && ImageUrl[2].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n          <img src="img/play.png" (click)="showImage(1)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(2)">\n        <img [src]="ImageUrl[3].Url" *ngIf="(ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && ImageUrl[3].Url" class="thumb-img">\n        <img [src]="ImageUrl[3].Thumbnail" *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && ImageUrl[3].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n          <img src="img/play.png" (click)="showImage(2)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 4">\n      <ion-col width-50 class="ion-col" (click)="showImage(0)">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img">\n        <img [src]="ImageUrl[1].Thumbnail" *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && ImageUrl[1].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n          <img src="img/play.png" (click)="showImage(0)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(1)">\n        <img [src]="ImageUrl[2].Url" *ngIf="(ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && ImageUrl[2].Url" class="thumb-img">\n        <img [src]="ImageUrl[2].Thumbnail" *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && ImageUrl[2].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n          <img src="img/play.png" (click)="showImage(1)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 4">\n      <ion-col width-50 class="ion-col" (click)="showImage(2)">\n        <img [src]="ImageUrl[3].Url" *ngIf="(ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && ImageUrl[3].Url" class="thumb-img">\n        <img [src]="ImageUrl[3].Thumbnail" *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && ImageUrl[3].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n          <img src="img/play.png" (click)="showImage(2)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(3)">\n        <img [src]="ImageUrl[4].Url" *ngIf="(ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && ImageUrl[4].Url" class="thumb-img">\n        <img [src]="ImageUrl[4].Thumbnail" *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && ImageUrl[4].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n          <img src="img/play.png" (click)="showImage(3)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="ion-row" *ngIf="imageCount === 5">\n      <ion-col width-50 class="ion-col" (click)="showImage(0)">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img">\n        <img [src]="ImageUrl[1].Thumbnail" *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && ImageUrl[1].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n          <img src="img/play.png" (click)="showImage(0)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(1)">\n        <img [src]="ImageUrl[2].Url" *ngIf="(ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && ImageUrl[2].Url" class="thumb-img">\n        <img [src]="ImageUrl[2].Thumbnail" *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && ImageUrl[2].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n          <img src="img/play.png" (click)="showImage(1)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount === 5">\n      <ion-col width-33 class="ion-col" (click)="showImage(2)">\n        <img [src]="ImageUrl[3].Url" *ngIf="(ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && ImageUrl[3].Url" class="thumb-img">\n        <img [src]="ImageUrl[3].Thumbnail" *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && ImageUrl[3].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n          <img src="img/play.png" (click)="showImage(2)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-33 class="ion-col" (click)="showImage(3)">\n        <img [src]="ImageUrl[4].Url" *ngIf="(ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && ImageUrl[4].Url" class="thumb-img">\n        <img [src]="ImageUrl[4].Thumbnail" *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && ImageUrl[4].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n          <img src="img/play.png" (click)="showImage(3)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-33 (click)="showImage(4)" class="ion-col">\n        <img [src]="ImageUrl[5].Url" *ngIf="(ImageUrl[5].Url.indexOf(\'.jpg\') > -1) && ImageUrl[5].Url" class="thumb-img">\n        <img [src]="ImageUrl[5].Thumbnail" *ngIf="(ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && ImageUrl[5].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[5].Url">\n          <img src="img/play.png" (click)="showImage(4)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount > 5">\n      <ion-col width-50 class="ion-col" (click)="showImage(0)">\n        <img [src]="ImageUrl[1].Url" *ngIf="(ImageUrl[1].Url.indexOf(\'.jpg\') > -1) && ImageUrl[1].Url" class="thumb-img">\n        <img [src]="ImageUrl[1].Thumbnail" *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && ImageUrl[1].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[1].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[1].Url">\n          <img src="img/play.png" (click)="showImage(0)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="ion-col" (click)="showImage(1)">\n        <img [src]="ImageUrl[2].Url" *ngIf="(ImageUrl[2].Url.indexOf(\'.jpg\') > -1) && ImageUrl[2].Url" class="thumb-img">\n        <img [src]="ImageUrl[2].Thumbnail" *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && ImageUrl[2].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[2].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[2].Url">\n          <img src="img/play.png" (click)="showImage(1)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="ion-row" *ngIf="imageCount > 5">\n      <ion-col width-33 class="ion-col" (click)="showImage(2)">\n        <img [src]="ImageUrl[3].Url" *ngIf="(ImageUrl[3].Url.indexOf(\'.jpg\') > -1) && ImageUrl[3].Url" class="thumb-img">\n        <img [src]="ImageUrl[3].Thumbnail" *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && ImageUrl[3].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[3].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[3].Url">\n          <img src="img/play.png" (click)="showImage(2)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-33 class="ion-col" (click)="showImage(3)">\n        <img [src]="ImageUrl[4].Url" *ngIf="(ImageUrl[4].Url.indexOf(\'.jpg\') > -1) && ImageUrl[4].Url" class="thumb-img">\n        <img [src]="ImageUrl[4].Thumbnail" *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && ImageUrl[4].Url" class="thumb-img imageThumbnail">\n        <div class=\'vidDesc\' *ngIf="(ImageUrl[4].Url.indexOf(\'.mp4\') > -1) && event.ImageUrl[4].Url">\n          <img src="img/play.png" (click)="showImage(3)" style="height: 50px;width:50px;" class=\'vidDesc_content\'>\n        </div>\n      </ion-col>\n      <ion-col width-33 (click)="showGallery()" class="ion-col imageLast">\n        <img [src]="ImageUrl[5].Url" *ngIf="(ImageUrl[5].Url.indexOf(\'.jpg\') > -1) && ImageUrl[5].Url" class="thumb-img">\n        <img [src]="ImageUrl[5].Thumbnail" *ngIf="(ImageUrl[5].Url.indexOf(\'.mp4\') > -1) && ImageUrl[5].Url" class="thumb-img">\n        <div class=\'description\'>\n          <p class=\'description_content\'>See All</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button round (click)="Locate()">Get Location</button>\n\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\eventdetail\eventdetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], EventdetailPage);

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_native__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EditeventPage = (function () {
    function EditeventPage(navCtrl, navParams, nativeStorage, apiService, platform, loadingCtrl, toastCtrl, geolocation, actionSheetCtrl, network, camera, transfer, file, filePath) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.network = network;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.lastImage = [];
        this.evtData = { Name: '', Description: '', EventDate: '', IsDateSaved: true, CreatedById: 0, Id: 0, Lat: 0.0, Long: 0.0 };
        this.getData = function (data) {
            return new Promise(function (resolve, reject) {
                _this.eventLatitude = data.eventLatitude;
                _this.eventLongitude = data.eventLongitude;
                //   this.isLocationSet = true;
                resolve();
            });
        };
        this.EventData = navParams.get('EventData');
        this.imageCount = this.EventData.ImageUrl.length;
        this.Name = this.EventData.Name;
        this.Description = this.EventData.Description;
        this.EventDate = this.EventData.EventDate;
        this.EventId = this.EventData.Id;
        this.eventLatitude = this.EventData.Lat;
        this.eventLongitude = this.EventData.Long;
        this.evtData = {
            Name: this.Name,
            Description: this.Description,
            EventDate: this.EventDate,
            IsDateSaved: true,
            CreatedById: this.EventId,
            Id: this.EventId,
            Lat: this.eventLatitude,
            Long: this.eventLongitude
        };
    }
    EditeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditeventPage');
    };
    EditeventPage.prototype.EditEvent = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.nativeStorage.getItem('user').then(function (data) {
                env.UserId = data.Id;
                env.evtData = {
                    Name: env.Name,
                    Description: env.Description,
                    EventDate: env.EventDate,
                    IsDateSaved: true,
                    CreatedById: data.Id,
                    Id: env.EventId,
                    Lat: env.eventLatitude,
                    Long: env.eventLongitude
                };
                env.apiService.updateEvent(env.evtData).then(function (data) {
                    console.log(data);
                    if (JSON.parse(data['_body']) != null) {
                        var evtData = JSON.parse(data['_body']);
                        env.uploadImage(evtData);
                    }
                    loading.dismiss();
                    env.presentToast("Event edited successfully");
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                });
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    EditeventPage.prototype.SetLocation = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Location via',
            buttons: [
                {
                    text: 'Current Location',
                    role: 'destructive',
                    handler: function () {
                        if (_this.network.type !== 'none') {
                            var loading_1 = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading_1.present();
                            _this.geolocation.getCurrentPosition().then(function (resp) {
                                _this.eventLatitude = resp.coords.latitude;
                                _this.eventLongitude = resp.coords.longitude;
                                loading_1.dismiss();
                                _this.presentToast("Current Location Set.");
                            }).catch(function (error) {
                                console.log('Error getting location', error);
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Please check the internet connection.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Search Location',
                    role: 'destructive',
                    handler: function () {
                        if (_this.network.type !== 'none') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocomplete */], {
                                data: _this.evtData,
                                callback: _this.getData
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Please check the internet connection.",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditeventPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Media',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                        console.log('Camera clicked');
                    }
                },
                {
                    text: 'Images',
                    role: 'destructive',
                    handler: function () {
                        //this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.setImage();
                        console.log('Select Images clicked');
                    }
                },
                {
                    text: 'Video',
                    role: 'destructive',
                    handler: function () {
                        //this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.setVideo(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        console.log('Select Video clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditeventPage.prototype.setImage = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            width: 500,
            height: 500,
            quality: 75
        };
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_9_ionic_native__["d" /* ImagePicker */].getPictures(options).then(function (imagePath) {
            if (imagePath !== "OK") {
                imagePath.forEach(function (element) {
                    var currentName = element.substr(element.lastIndexOf('/') + 1);
                    var correctPath = element.substr(0, element.lastIndexOf('/') + 1);
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9_ionic_native__["d" /* ImagePicker */].getPictures(options).then(function (imagePath) {
                    imagePath.forEach(function (element) {
                        var currentName = element.substr(element.lastIndexOf('/') + 1);
                        var correctPath = element.substr(0, element.lastIndexOf('/') + 1);
                        _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                    });
                });
            }
        });
        loading.dismiss();
    };
    EditeventPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imagePath) {
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            if (_this.platform.is('android') && sourceType === 0) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                    loading.dismiss();
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".jpg"));
                loading.dismiss();
            }
        });
    };
    EditeventPage.prototype.setVideo = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            mediaType: this.camera.MediaType.VIDEO,
            destinationType: this.camera.DestinationType.FILE_URI
        }).then(function (imagePath) {
            imagePath = "file://" + imagePath;
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(".mp4"));
            loading.dismiss();
        });
    };
    // Create a new name for the image
    EditeventPage.prototype.createFileName = function (format) {
        var d = new Date(), n = d.getTime(), newFileName = n + format;
        return newFileName;
    };
    // Copy the image to a local folder
    EditeventPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage.push(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    EditeventPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    EditeventPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    EditeventPage.prototype.uploadImage = function (evtData) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // Destination URL
        var url = "http://ramanwedding-001-site1.itempurl.com/api/Events/UploadFiles/" + evtData.Id + "/" + this.UserId;
        //"http://ramanwedding-001-site1.itempurl.com/api/Events/PostUserImage";
        // File for Upload
        this.lastImage.forEach(function (element) {
            var targetPath = _this.pathForImage(element);
            // File name only
            var filename = element;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename }
            };
            var fileTransfer = _this.transfer.create();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                console.log(data);
                // loading.dismiss();
                //this.presentToast('Image succesful uploaded.');
            }, function (err) {
                // loading.dismiss();
                _this.presentToast('Error while uploading file.');
                console.log(err);
            });
        });
        loading.dismiss();
        this.presentToast('Media succesfully uploaded.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__menu_menu__["a" /* MenuPage */]);
    };
    return EditeventPage;
}());
EditeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editevent',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\editevent\editevent.html"*/'<!--\n  Generated template for the CreateeventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar transparent color="primary">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Edit Event</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="editevent">\n  <ion-item class="itemClass">\n    <ion-label color="primary" floating>Name</ion-label>\n    <ion-input type="text" class="inputClass" [(ngModel)]="Name"></ion-input>\n  </ion-item>\n\n  <ion-item class="itemClass">\n    <ion-label color="primary" floating>Description</ion-label>\n    <ion-textarea type="text" class="inputClass" [(ngModel)]="Description"></ion-textarea>\n  </ion-item>\n\n  <ion-item class="itemClass">\n    <ion-label color="primary" floating>Date</ion-label>\n    <ion-datetime type="date" class="inputClass" displayFormat="DD MMMM YYYY, DDDD, hh:mm A" [(ngModel)]="EventDate"></ion-datetime>\n  </ion-item>\n\n  <!-- <ion-item class="itemClass">\n    <ion-label>Save the date</ion-label>\n    <ion-checkbox class="inputClass" [(ngModel)]="isDateSaved"></ion-checkbox>\n  </ion-item> -->\n\n  <button ion-button round (click)="presentActionSheet()">Upload Media</button>\n  <ion-label color="primary" *ngIf="imageCount">{{imageCount}} images selected</ion-label>\n  <button ion-button round (click)="SetLocation()">Set Location</button>\n  <ion-label color="primary">Location Done</ion-label>\n\n  <!-- <div class="postEventBtn">\n    <button ion-button full (click)="EditEvent()">Update</button>\n  </div> -->\n\n   <ion-footer no-padding style="margin:0rem 0rem!Important;">\n    <button ion-button block color="primary" (click)="EditEvent()">Update</button>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\editevent\editevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */]])
], EditeventPage);

//# sourceMappingURL=editevent.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeMeToVenuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EventdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TakeMeToVenuePage = (function () {
    function TakeMeToVenuePage(navCtrl, navParams, toast, loadingCtrl, launchNavigator, geolocation, nativeStorage, apiService, network, toastServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.network = network;
        this.toastServ = toastServ;
        this.user = { ImageURL: '', Name: '', isAdmin: false, Status: 0, sts: '' };
        var env = this;
        env.nativeStorage.getItem('user')
            .then(function (userData) {
            env.user.Status = userData.Status;
            if (env.user.Status == 10)
                env.user.sts = "Pending";
            else if (env.user.Status == 30) {
                env.user.sts = "Rejected";
            }
            else {
                env.user.sts = "Approved";
            }
            // user is previously logged and we have his data
            // we will let him access the app
            //env.navCtrl.push(HomePage);        
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            //env.navCtrl.push(LoginPage);
        });
        env.getEvents();
    }
    TakeMeToVenuePage.prototype.getEvents = function () {
        var env = this;
        var loading = env.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.apiService.getEvents(true).then(function (data) {
                env.events = data;
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toastServ.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    TakeMeToVenuePage.prototype.getEventLocation = function (event) {
        var _this = this;
        var env = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (env.network.type !== 'none') {
            loading.present();
            env.apiService.getEventDetail(event.Id).then(function (result) {
                if (result['Lat'] && result['Long']) {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.currLat = resp.coords.latitude;
                        _this.currLong = resp.coords.longitude;
                        loading.dismiss();
                        _this.launchNavigator.navigate([result['Lat'].toString(), result['Long'].toString()], {
                            start: "" + _this.currLat + "," + _this.currLong + ""
                        });
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                    });
                }
                else {
                    loading.dismiss();
                    _this.toast.show('Location not provided', '5000', 'bottom').subscribe(function (toast) {
                        console.log(toast);
                    });
                }
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toastServ.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    TakeMeToVenuePage.prototype.doRefresh = function (refresher) {
        if (this.network.type !== 'none') {
            var env_1 = this;
            env_1.nativeStorage.getItem('user')
                .then(function (userData) {
                env_1.user.Status = userData.Status;
                if (env_1.user.Status == 10)
                    env_1.user.sts = "Pending";
                else if (env_1.user.Status == 30) {
                    env_1.user.sts = "Rejected";
                }
                else {
                    env_1.user.sts = "Approved";
                }
                // user is previously logged and we have his data
                // we will let him access the app
                //env.navCtrl.push(HomePage);        
            }, function (error) {
                //we don't have the user data so we will ask him to log in
                //env.navCtrl.push(LoginPage);
            });
            env_1.getEvents();
            if (refresher != 0)
                refresher.complete();
        }
        else {
            var toast = this.toastServ.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            refresher.complete();
        }
    };
    return TakeMeToVenuePage;
}());
TakeMeToVenuePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-takemetovenue',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\takemetovenue\takemetovenue.html"*/'<ion-header>\n\n  <ion-navbar transparent color="primary">\n\n    <ion-buttons start left>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>Take Me To Venue</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="savedate">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list *ngIf="user.sts == \'Approved\'">\n\n    <ion-card class="cardHome" padding *ngFor="let event of events" (click) = "getEventLocation(event)">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col padding>\n\n            <h1>{{event.Name}}</h1><br/>\n\n            <h3>{{event.EventDate | date:\'dd MMMM yyyy, EEEE, hh:mm a\'}}</h3>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\takemetovenue\takemetovenue.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], TakeMeToVenuePage);

//# sourceMappingURL=takemetovenue.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(598);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contactdetail_contactdetail__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_users_users__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_createevent_createevent__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_eventdetail_eventdetail__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_savedate_savedate__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_editevent_editevent__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_imageslide_imageslide__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_imagegallery_imagegallery__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_takemetovenue_takemetovenue__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_api_service_api_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_cloud_angular__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ionic_native__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_transfer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_base64__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_firebase__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_http__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































//import { GoogleMaps } from '@ionic-native/google-maps'

//import { Storage, IonicStorageModule } from '@ionic/storage';

__WEBPACK_IMPORTED_MODULE_38_firebase___default.a.initializeApp({
    apiKey: "AIzaSyBKpZVRzbFd9C4NawcUXBES8Q3-tFk8cm4",
    authDomain: "wedlive-33ce0.firebaseapp.com",
    databaseURL: "https://wedlive-33ce0.firebaseio.com",
    projectId: "wedlive-33ce0",
    storageBucket: "wedlive-33ce0.appspot.com",
    messagingSenderId: "885563698719"
});
var cloudSettings = {
    'core': {
        'app_id': 'APP_ID',
    },
    'push': {
        'sender_id': '974429559754',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_contactdetail_contactdetail__["a" /* ContactdetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_createevent_createevent__["a" /* CreateeventPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_savedate_savedate__["a" /* SavedatePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_editevent_editevent__["a" /* EditeventPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_imageslide_imageslide__["a" /* ImageslidePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_imagegallery_imagegallery__["a" /* ImagegalleryPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocomplete */],
            __WEBPACK_IMPORTED_MODULE_27__pages_takemetovenue_takemetovenue__["a" /* TakeMeToVenuePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_39__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_31__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["b" /* GalleryModalModule */]
            //  IonicStorageModule.forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_contactdetail_contactdetail__["a" /* ContactdetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_createevent_createevent__["a" /* CreateeventPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_savedate_savedate__["a" /* SavedatePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_editevent_editevent__["a" /* EditeventPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_imageslide_imageslide__["a" /* ImageslidePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_imagegallery_imagegallery__["a" /* ImagegalleryPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocomplete */],
            __WEBPACK_IMPORTED_MODULE_27__pages_takemetovenue_takemetovenue__["a" /* TakeMeToVenuePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_32_ionic_native__["d" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["a" /* GalleryModalHammerConfig */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_30__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_32_ionic_native__["d" /* ImagePicker */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MainPage } from '../pages/main/main';



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, nativeStorage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
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
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var env = _this;
            _this.nativeStorage.getItem('user')
                .then(function (data) {
                // user is previously logged and we have his data
                // we will let him access the app
                env.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]);
            }, function (error) {
                //we don't have the user data so we will ask him to log in
                env.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            });
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
    __metadata("design:type", Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactdetail_contactdetail__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pending_requests_pending_requests__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createevent_createevent__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__savedate_savedate__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__takemetovenue_takemetovenue__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__imagegallery_imagegallery__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_service_api_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { Facebook } from '@ionic-native/facebook';
// import { GooglePlus } from '@ionic-native/google-plus';


/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, nativeStorage, apiService, loadingCtrl, network, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toast = toast;
        this.user = { ImageURL: '', Name: '', isAdmin: false, Status: '' };
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        var env = this;
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
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.Logout = function () {
        var nav = this.navCtrl;
        var env = this;
        env.nativeStorage.remove('user');
        env.nativeStorage.remove('loginPlatform');
        nav.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
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
    };
    MenuPage.prototype.openHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MenuPage.prototype.savetheDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__savedate_savedate__["a" /* SavedatePage */]);
    };
    MenuPage.prototype.showEventPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__createevent_createevent__["a" /* CreateeventPage */]);
    };
    MenuPage.prototype.takemetovenue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__takemetovenue_takemetovenue__["a" /* TakeMeToVenuePage */]);
    };
    MenuPage.prototype.openAllUsers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__users_users__["a" /* UsersPage */]);
    };
    MenuPage.prototype.openPendingRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pending_requests_pending_requests__["a" /* PendingRequestsPage */]);
    };
    MenuPage.prototype.openContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contactdetail_contactdetail__["a" /* ContactdetailPage */]);
    };
    // openSamplePage() {
    //   this.navCtrl.push(SamplePage);
    // }
    MenuPage.prototype.showGallery = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (this.network.type !== 'none') {
            loading.present();
            this.apiService.loadGallery().then(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__imagegallery_imagegallery__["a" /* ImagegalleryPage */], {
                    ImageUrl: data
                });
                loading.dismiss();
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }
        else {
            var toast = this.toast.create({
                message: "Please check the internet connection.",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"D:\Project\WeddingApp New\WeddingApp\src\pages\menu\menu.html"*/'<ion-menu side="left" [content]="content">\n  <ion-content class="menu">\n    <ion-list>\n      <ion-item no-lines menuClose class="item-profile">\n        <div class="item-avatar">\n          <img [src]="user.ImageURL">\n          <div class="item-text-center item-text-wrap">{{user.Name}}</div>\n        </div>\n      </ion-item>\n      <ion-item no-lines menuClose (click)="openHome()">\n        Home\n      </ion-item>\n      <ion-item no-lines menuClose (click)="showEventPage()" *ngIf="user.isAdmin">\n        Create Event\n      </ion-item>\n      <ion-item no-lines menuClose (click)="savetheDate()" *ngIf="user.Status == 20">\n        Save the Date\n      </ion-item>\n      <ion-item no-lines menuClose (click)="showGallery()" *ngIf="user.Status == 20">\n        Gallery\n      </ion-item>\n      <ion-item no-lines menuClose (click)="takemetovenue()" *ngIf="user.Status == 20">\n        Take Me To Venue\n      </ion-item>\n      <ion-item no-lines menuClose (click)="openAllUsers()">\n        Users\n      </ion-item>\n      <ion-item no-lines menuClose (click)="openPendingRequest()" *ngIf="user.isAdmin">\n        Pending Request\n      </ion-item>\n      <ion-item no-lines menuClose (click)="openContactUs()">\n        RSVP\n      </ion-item>\n      <!-- <ion-item no-lines menuClose (click)="openSamplePage()">\n        Map\n      </ion-item> -->\n    </ion-list>\n    <!-- <div class="logoutBtn"><button ion-button full color="secondary" (click)="Logout()" position="bottom">Logout</button></div> -->\n  </ion-content>\n  <ion-footer class="logoutBtn" no-padding style="margin:0rem 0rem!Important;">\n    <button ion-button block color="secondary" (click)="Logout()">Logout</button>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Project\WeddingApp New\WeddingApp\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_11__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

},[593]);
//# sourceMappingURL=main.js.map