import {Component, NgZone, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../Data';
import { Location } from '@angular/common';

import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SimilarItem} from './SimilarItem';
import {slideOutAnimation} from '../animation';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild, state
} from '@angular/animations';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css'],
  animations: [
    trigger('slideOut', [
      // ...
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', [
        animate('3000ms')
      ])
    ]),
  ]
})
export class DetailInfoComponent implements OnInit {


  leave = false;


  // data get from results tab panel
  selectedItemId = '';
  selectedItemObj: any;
  selectedItem: Data;
  // nav tabs
  selectedTab = 1;
  // api call
  nodeUrl = 'http://csci571hw8-236103.appspot.com';
  // nodeUrl = 'http://localhost:8080';
  ngZone: any;
  // table
  itemObj: any;
  returnPolicy = '';
  imageList: string[];
  price = '';
  // facebook
  facebookUrl = '';
  // google search
  title = '';
  googleImageList: string[] = new Array(0);
  // shipping tab
  shippingCost: any;
  handlingTime: number;
  expeditedShipping: any;
  oneDayShippingAvailable: any;
  // seller tab
  topRatedSeller: any;
  starColor: any;
  popularity: any;
  // similar items
  // similarItemList: any;
  similarItemsList: SimilarItem[] = new Array(0);
  maxNumOfShowedItem = 5;
  orderOptionList: any[] = [
    {key: 'Default', value: ''},
    {key: 'Product Name', value: 'title'},
    {key: 'Days Left', value: 'daysLeft'},
    {key: 'Price', value: 'price'},
    {key: 'Shipping Cost', value: 'shippingCost'},
  ];
  orderTypeList: any[] = [
    {key: 'Ascending', value: false},
    {key: 'Descending', value: true}
  ];
  form = new FormGroup({
    orderOption: new FormControl(this.orderOptionList[0]),
    orderType: new FormControl({value: this.orderTypeList[0], disabled: true})
  });



  constructor(
    ngZone: NgZone,
    private route: ActivatedRoute,
    private dataService: DataService, ///////////////////////
    private location: Location,
    private router: Router
  ) {
    this.ngZone = ngZone;

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url + '' !== '/') {
          // this.getSelectedItemId();
          this.selectedItemId = this.route.snapshot.paramMap.get('itemId');

          this.dataService.readItemObj$.subscribe((data) => {
            this.selectedItemObj = data;
            // shopping tab
            if (this.selectedItemObj.shippingInfo) {
              if (this.selectedItemObj.shippingInfo[0].shippingServiceCost &&
                this.selectedItemObj.shippingInfo[0].shippingServiceCost[0].__value__) {
                this.shippingCost = this.selectedItemObj.shippingInfo[0].shippingServiceCost[0].__value__;
                this.shippingCost = this.shippingCost === 0 ? 'Free SHipping' : '$' + this.shippingCost;
              }
              if (this.selectedItemObj.shippingInfo[0].handlingTime) {
                this.handlingTime = this.selectedItemObj.shippingInfo[0].handlingTime;
              }
              if (this.selectedItemObj.shippingInfo[0].expeditedShipping) {
                this.expeditedShipping = this.selectedItemObj.shippingInfo[0].expeditedShipping;
                // alert('expeditionShipping' + this.expeditedShipping + ' !expeditionShipping ' +  !this.expeditedShipping);
              }
              if (this.selectedItemObj.shippingInfo[0].oneDayShippingAvailable) {
                this.oneDayShippingAvailable = this.selectedItemObj.shippingInfo[0].oneDayShippingAvailable;
                // alert('oneDayShipping' + this.oneDayShippingAvailable);
              }
            }
          });

          this.callShoppingApi();
          // this.callGoogleSearchApi();
        }
      }
    });
  }

  ngOnInit() {}

  clickTab(tab) {
    this.selectedTab = tab;
  }

  // list button
  goBack(): void {
    this.leave = !this.leave;
    // this.delay(10000);
    this.location.back();
  }

  /*async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }*/

  // modal
  showImageInANewTab(target) {
    const url = target.src;
    window.open(url, '_blank');
  }


  // facebook button
  shareToFacebook() {
    this.facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + this.itemObj.ViewItemURLForNaturalSearch
      + '&quote=Buy ' + this.itemObj.Title + ' at ' + this.price + ' from link below';
    // alert('current url is (in click function)' + this.facebookUrl);
  }

  // wish list button
  isInLocalStorage() { return this.selectedItemId in localStorage; }

  modifyWishList() {
    this.dataService.getClickEvent(null);
    // alert('I am in provider');
  }


  // call shopping api
  callShoppingApi() {
    const url = this.nodeUrl + '/shopping/' + this.selectedItemId;
    // alert(url);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true); // "asynchronous"
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          this.itemObj = jsonObj.Item;
          if (this.itemObj.Title) {this.title = this.itemObj.Title; }
          // return policy
          if (this.itemObj.ReturnPolicy !== undefined && this.itemObj.ReturnPolicy.ReturnsAccepted !== undefined){
            let days = '';
            if (this.itemObj.ReturnPolicy.ReturnsWithin !== undefined) {
              days = ' within ' + this.itemObj.ReturnPolicy.ReturnsWithin;
            }
            this.returnPolicy = this.itemObj.ReturnPolicy.ReturnsAccepted + days;
          }
          // price
          if (this.itemObj.CurrentPrice.Value) {this.price =  '$' + this.itemObj.CurrentPrice.Value; }
          // pictures
          if (this.itemObj.PictureURL !== undefined) { this.imageList = this.itemObj.PictureURL; }

          // seller Tab
          if (this.selectedItemObj.sellerInfo[0].topRatedSeller) {
            this.topRatedSeller = this.selectedItemObj.sellerInfo[0].topRatedSeller;
          }

          if (this.itemObj.Seller && this.itemObj.Seller.FeedbackRatingStar) {
            this.starColor = this.itemObj.Seller.FeedbackRatingStar;
            if (this.itemObj.Seller && this.itemObj.Seller.FeedbackScore <= 9) { this.starColor = 'white'; }
          }
          if (this.itemObj.Seller && this.itemObj.Seller.PositiveFeedbackPercent) {
            this.popularity = this.itemObj.Seller.PositiveFeedbackPercent;
          }
        });
        this.callSimilarApi();
      }
    };
  }

  // google search
  callGoogleSearchApi() {
    const url = this.nodeUrl + '/googleSearch/' + encodeURI(this.title);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true); // "asynchronous"
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          const itemObj = jsonObj.items;
          for (let i = 0; i < itemObj.length; i++) {
            this.googleImageList.push(itemObj[i].link);
          }
        });
      }
    };
  }

  // similar item
  callSimilarApi() {
    const url = this.nodeUrl + '/similarItem/' + this.selectedItemId;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true); // "asynchronous"
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          // this.similarItemList = jsonObj.getSimilarItemsResponse.itemRecommendations.item;
          const similarItemListObj = jsonObj.getSimilarItemsResponse.itemRecommendations.item;


          for (let i = 0; i < similarItemListObj.length; i++) {
            const newItem = new SimilarItem();
            newItem.title = similarItemListObj[i].title ? similarItemListObj[i].title : '';
            newItem.viewItemURL = similarItemListObj[i].viewItemURL ? similarItemListObj[i].viewItemURL : '#';
            newItem.imageURL = similarItemListObj[i].imageURL ? similarItemListObj[i].imageURL : '';
            newItem.price = similarItemListObj[i].buyItNowPrice && similarItemListObj[i].buyItNowPrice.__value__ ?
              similarItemListObj[i].buyItNowPrice.__value__ : 0;
            newItem.shippingCost = similarItemListObj[i].shippingCost && similarItemListObj[i].shippingCost.__value__ ?
              similarItemListObj[i].shippingCost.__value__ : 0;
            newItem.itemId = similarItemListObj[i].itemId;
            newItem.daysLeft = 0;
            if (similarItemListObj[i].timeLeft) {
              let locOfP;
              let locOfD;
              const value = similarItemListObj[i].timeLeft;
              for (let j = 0; j < value.length; j++) {
                if (value.charAt(j) === 'P' && !locOfP) { locOfP = j; }
                if (value.charAt(j) === 'D' && !locOfD) { locOfD = j; }
              }
              newItem.daysLeft = parseInt(value.substring(locOfP + 1, locOfD), 10);
            }
            this.similarItemsList.push(newItem);
          }
        });
      }
      this.callGoogleSearchApi();
    };
  }


  clickOrderOption(orderType) {
    orderType.disabled = this.form.get('orderOption').value.key + '' === 'Default';
  }

  changeShowMode() {
    if (this.maxNumOfShowedItem === 5) { this.maxNumOfShowedItem = 20; }
    else {this.maxNumOfShowedItem = 5; }
  }
}
