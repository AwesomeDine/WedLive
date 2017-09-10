import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ImageslidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-imageslide',
  templateUrl: 'imageslide.html',
})
export class ImageslidePage {
  @ViewChild(Slides) slides: Slides;
  ImageUrl: any;
  slideIndex: any;
  blankImg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let img = new Image();
    img.src="../img/blank.png";
    this.ImageUrl = navParams.get('ImageUrl');
    this.slideIndex = navParams.get('slideIndex');
    // if (this.slideIndex) {
    //   this.slides.slideTo(this.slideIndex);
    // }
  }

  ionViewDidEnter() {
    if (this.slideIndex) {
      this.slides.slideTo(this.slideIndex);
      //this.slides.initialSlide = this.slideIndex;
    } // The 0 will avoid the transition of the slides to be shown
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(currentIndex == 1){
      this.slides.lockSwipeToPrev(true);      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageslidePage');
  }

}
