import { FormGroup, FormControl } from '@angular/forms';
import { Component,  NgZone, OnInit} from '@angular/core';

import { DataService } from '../data.service'; // pagination
import { Data } from '../Data';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {slideOutAnimation} from '../animation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [slideOutAnimation]
})

export class FormComponent implements OnInit {
  ngZone: any;
  // services
  dataList: Data[] = new Array(0);
  Math = Math;
  // results tab
  resultsTabIsSelected = true;
  // detail button
  selectedItemId = '';
  selectedItem: Data;
  isInSearchResult = true;
  // service
  itemList: object[];
  searchIsClicked = false;
  // wish List
  wishList: Data[] = new Array(0);

  constructor(ngZone: NgZone, private dataService: DataService, private router: Router) {
    this.ngZone = ngZone;

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url + '' === '/') {
          this.isInSearchResult = true;
          this.resultsTabIsSelected = true;
        } else {
          this.dataService.announceClick$.subscribe((data) => {
            // alert('I am in receiver');
            this.modifyWishList(this.selectedItem);
          });
        }
      }
    });
  }

  categoryList: string[] = ['All Categories', 'Art', 'Baby', 'Books', 'Clothing, Shoes & Accessories',
    'Computers/Tablets & Networking', 'Health & Beauty', 'Music', 'Video Games & Consoles' ];

  dict: { [key: string]: number; } = {
    'All Categories': -1, Art : 550, Baby: 2984, Books: 267, 'Clothing, Shoes & Accessories': 11450,
    'Computers/Tablets & Networking': 58058, 'Health & Beauty': 26395,
    Music: 11233, 'Video Games & Consoles': 1249
  };

  searchForm = new FormGroup({
    keyword: new FormControl(''),
    category: new FormControl(this.categoryList[0]),
    conditionOption: new FormControl(''),
    shipOption: new FormControl(''),
    distance: new FormControl('10'),
    zipOption: new FormControl('curLoc'),
    zip: new FormControl({value: '', disabled: true})
  });
  curZip = '';
  keywordError = '';
  zipInputError = '';
  keepOutput = true;
  options: string[] = [];

  nodeUrl = 'http://csci571hw8-236103.appspot.com';

  // nodeUrl = 'http://localhost:8080';
  conditionList: string[] = [];
  shipOptionList: string[] = [];

  // process bar
  dataIsFetching = false;
  // detail button
  noSelectedItemInResults = true;
  noSelectedItemInWishList = true;
  // pagination
  paginationActiveNum = 1;
  // result tab
  resultsJson = '';
  // noProduct = false;
  // wishList tab
  totalAmount = 0;

  ngOnInit(): void {
  }

  goToDetailInfo() {
    this.isInSearchResult = false;
  }

  // search form
  getLoc() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'http://ip-api.com/json', true); // "asynchronous"
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          this.curZip = jsonObj.zip;
        });
      }
    };
  }

  checkForm(keyword, zip, search) {
    search.disabled = false;
    if (this.curZip === '' || keyword.value === '') {
      search.disabled = true;
      return;
    }
    if (!zip.disabled && !zip.value.match(/^[0-9]{5}$/)) {
      search.disabled = true;
    }
  }

  getAutocompleteValue(zip) {
    this.options = [];
    if (this.zipInputError !== '') { return; }
    let len = 0;
    const url = this.nodeUrl + '/autocomplete/' + zip.value;
    // alert(url);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true); // "asynchronous"
    xmlhttp.send();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          const locArray = jsonObj.postalCodes;
          for (let i = 0; i < locArray.length; i++) {
            this.options[len] = locArray[i].postalCode;
            len++;
          }
        });
      }
    };
  }

  resetKeywordError(keyword, zip, search) {
    if (keyword.value === '') {
      this.keywordError = 'Please enter a keyword.';
    } else {
      this.keywordError = '';
    }
    this.checkForm(keyword, zip, search);
  }
  resetZipInputError(keyword, zip, search) {
    if (zip.disabled) { return; }
    if (zip.value === '') {
      this.zipInputError = 'Please enter a zip code.';
    } else {
      this.zipInputError = '';
    }
    this.checkForm(keyword, zip, search);
  }


  onChangeCondition(condition: string, isChecked: boolean) {
    if (isChecked) {
      this.conditionList.push(condition);
    } else {
      const index = this.conditionList.indexOf(condition);
      this.conditionList.splice(index, 1);
    }
  }

  onChangeShipOption(shipOption: string, isChecked: boolean) {
    if (isChecked) {
      this.shipOptionList.push(shipOption);
    } else {
      const index = this.shipOptionList.indexOf(shipOption);
      this.shipOptionList.splice(index, 1);
    }
  }

  clickCurrentZip(keyword, zip, search) {
    zip.disabled = true;
    zip.value = '';
    this.zipInputError = '';
    this.checkForm(keyword, zip, search);
  }

  clickOtherZip(keyword, zip, search) {
    zip.disabled = false;
    this.checkForm(keyword, zip, search);
  }


  clean(keyword, zip, search) {
    this.searchForm.reset();
    this.searchForm.patchValue({
      category: this.categoryList[0],
      distance: '10',
      zipOption: 'curLoc'
    });
    this.keywordError = '';
    this.zipInputError = '';
    zip.disabled = true;
    search.disabled = true;
    this.keepOutput = false;
    this.resultsTabIsSelected = true;
    this.dataList.splice(0, this.dataList.length);
    this.dataIsFetching = false;
  }


  onSubmit(zip) {
    this.keepOutput = true;
    this.searchIsClicked = true;
    this.dataIsFetching = true;
    this.resultsTabIsSelected = true;
    const zipUsing = zip.disabled ? this.curZip : zip.value;
    const dealtKeyword = encodeURI(this.searchForm.get('keyword').value);
    let conditions = '';
    for (let i = 0; i < this.conditionList.length; i++) {
      conditions += this.conditionList[i];
      conditions += i + 1 === this.conditionList.length ? '' : ',';
    }
    if (conditions !== '') {conditions = '&conditionOptions=' + conditions; }

    let shipOptions = '';
    for (let i = 0; i < this.shipOptionList.length; i++) {
      shipOptions += this.shipOptionList[i] + ',';
      conditions += i + 1 === this.shipOptionList.length ? '' : ',';
    }
    if (shipOptions !== '') {shipOptions = '&shipOptions=' + shipOptions; }
    const url = this.nodeUrl + '/productSearchForm?keywords=' + dealtKeyword + '&category=' +
      this.dict[this.searchForm.get('category').value] + '&postalCode=' + zipUsing + '&distance=' +
      this.searchForm.get('distance').value + shipOptions + conditions;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true); // "asynchronous"
    xmlhttp.setRequestHeader('content-type', 'text/html'); /////////////////////
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        this.ngZone.run(() => {
          const jsonObj = JSON.parse(xmlhttp.responseText);
          this.resultsJson = jsonObj;
          this.dataList.splice(0, this.dataList.length);
          let itemList = null;
          if (jsonObj.findItemsAdvancedResponse && jsonObj.findItemsAdvancedResponse[0].searchResult
            && jsonObj.findItemsAdvancedResponse[0].searchResult[0].item) {
            itemList = jsonObj.findItemsAdvancedResponse[0].searchResult[0].item;
            for (let i = 0; i < itemList.length; i++) {
              let newItem = new Data();
              newItem.index = i + 1;
              // add image
              if (itemList[i].galleryURL === undefined) {newItem.image = 'N/A'; }
              else {newItem.image = itemList[i].galleryURL; }

              // add title
              if (itemList[i].title === undefined) {newItem.title = 'N/A'; }
              else {newItem.title = itemList[i].title; }
              if (newItem.title !== 'N/A') {
                const title = newItem.title + '';
                const loc = title.length > 35 ? 35 : title.length;
                const cutTitle = title.substring(0, loc);
                const modifiedLoc = cutTitle.lastIndexOf(' ') > 0 ? cutTitle.lastIndexOf(' ') : loc;

                let modifiedTitle = title.substring(0, modifiedLoc);
                if (loc < title.length) {modifiedTitle += '...'; }
                newItem.modifiedTitle = modifiedTitle;


              }
              // add price
              if (itemList[i].sellingStatus === undefined || itemList[i].sellingStatus[0].currentPrice === undefined
                || itemList[i].sellingStatus[0].currentPrice[0].__value__ === undefined
                || itemList[i].sellingStatus[0].currentPrice[0]['@currencyId'] === undefined) {newItem.price = 'N/A'; }
              else { newItem.price = '$' + itemList[i].sellingStatus[0].currentPrice[0].__value__; }

              // add shipping
              if (itemList[i].shippingInfo === undefined || itemList[i].shippingInfo[0].shippingServiceCost === undefined
                || itemList[i].shippingInfo[0].shippingServiceCost[0].__value__ === undefined
                || itemList[i].shippingInfo[0].shippingServiceCost[0]['@currencyId'] === undefined) {newItem.shipping = 'N/A'; }
              else {
                const shippingCostInfo = itemList[i].shippingInfo[0].shippingServiceCost[0];
                newItem.shipping = shippingCostInfo.__value__ === '0.0' ? 'Free Shipping' : '$' + shippingCostInfo.__value__;
              }

              // add zip
              if (itemList[i].postalCode === undefined) { newItem.zip = 'N/A'; }
              else {newItem.zip = itemList[i].postalCode; }
              // add Seller
              if (itemList[i].sellerInfo === undefined || itemList[i].sellerInfo[0].sellerUserName === undefined) {
                newItem.seller = 'N/A'; }
              else { newItem.seller = itemList[i].sellerInfo[0].sellerUserName; }

              // add itemId
              newItem.itemId = itemList[i].itemId;
              this.dataList.push(newItem);
            }
          }
          this.itemList = itemList;
          this.dataIsFetching = false;
        });
      }
    };
  }

  setResultsState() {
    this.resultsTabIsSelected = true;
  }

  // wish list
  clickWishListButton() {
    this.resultsTabIsSelected = false;

    this.wishList.splice(0, this.dataList.length);
    this.totalAmount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      let newItem = new Data();
      const curItemJsonObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
      newItem.index = curItemJsonObj.index;
      newItem.image = curItemJsonObj.image;
      newItem.title = curItemJsonObj.title;
      newItem.modifiedTitle = curItemJsonObj.modifiedTitle;
      newItem.price = curItemJsonObj.price;
      newItem.shipping = curItemJsonObj.shipping;
      newItem.seller = curItemJsonObj.seller;
      newItem.itemId = curItemJsonObj.itemId;
      this.totalAmount += parseFloat(newItem.price.substring(1));
      this.wishList.push(newItem);
    }
  }

  isInLocalStorage(itemId) {
    return itemId in localStorage;
  }
  getLocalStorageLength() {return localStorage.length; }

  // Results Tab functions:
  modifyWishList(item) {
    if (item.itemId in localStorage) {
      localStorage.removeItem(item.itemId);
      this.totalAmount -= parseFloat(item.price.substring(1));
    } else {
      localStorage.setItem(item.itemId, JSON.stringify(item));
      this.totalAmount += parseFloat(item.price.substring(1));
    }
  }

  showImageInANewTab(target) {
    const url = target.src;
    window.open(url, '_blank');
  }

  getItemIdInResults(item, target) {
    this.noSelectedItemInResults = false;
    target.parentNode.parentNode.style.backgroundColor = '#bfbfbf';
    this.selectedItemId = item.itemId;
    this.selectedItem = item;
    this.dataService.getItemObj(this.itemList[item.index - 1]);
  }


  getItemIdInWishList(item, target) {
    this.noSelectedItemInWishList = false;
    target.parentNode.parentNode.style.backgroundColor = '#bfbfbf';  //////////////////////////////
    this.selectedItemId = item.itemId;
    this.selectedItem = item;
    this.dataService.getItemObj(this.itemList[item.index - 1]);
  }

  // pagination
  clickPaginationTab(content: any) {
    if (content === 'prev' ) { this.paginationActiveNum --; }
    else if (content === 'next') { this.paginationActiveNum ++; }
    else { this.paginationActiveNum = content; }
  }
}















