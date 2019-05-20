var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/autocomplete/:id', function(req, res){
  let url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode_startsWith='
      + req.params.id + '&username=flylikeabird&country=US&maxRows=5';

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(body)
  });
});


router.get('/productSearchForm', function(req, res){
  //get the url
  let categoryInUrl = req.query.category < 0 ? '' : "&categoryId=" + req.query.category;

  let index = 2;
  let shipOptionsInUrl = '';
  if(req.query.shipOptions != undefined && req.query.shipOptions != ""){

    let shipMethodList = req.query.shipOptions.split(',');
    for(let i = 0; i < shipMethodList.length; i++){
      shipOptionsInUrl += '&itemFilter(' + index + ').name='+shipMethodList[i]+'&itemFilter('+index+').value=true';

      console.log("inside: shipOptionsUrl is " + shipOptionsInUrl); /////////////////////////

      index ++;
    }
  }

  let conditionsInUrl = '';
  if(req.query.conditionOptions != undefined && req.query.conditionOptions != ""){
    let conditionList = req.query.conditionOptions.split(',');
    conditionsInUrl += '&itemFilter('+index+').name=Condition';
    for(let i = 0; i < conditionList.length; i++){
      conditionsInUrl += '&itemFilter('+index+').value('+i+')='+conditionList[i];
    }
  }

  let url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0' +
      '&SECURITY-APPNAME=JiayingL-productS-PRD-116e08212-90cdea32&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD' +
      '&paginationInput.entriesPerPage=50&keywords=' + req.query.keywords + categoryInUrl +
      '&buyerPostalCode=' + req.query.postalCode + '&itemFilter(0).name=MaxDistance&itemFilter(0).value=' + req.query.distance +
      '&itemFilter(1).name=HideDuplicateItems&itemFilter(1).value=true'+ shipOptionsInUrl + conditionsInUrl +
      '&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo';
  console.log(url); ///////////////////////////

  //request the url
  request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log(req.headers);
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(body);
    console.log(res.getHeaders());
  });
});


router.get('/shopping/:id', function(req, res){
  let url = 'http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=JiayingL-productS-PRD-116e08212-90cdea32&siteid=0&version=967&ItemID='
      + req.params.id+'&IncludeSelector=Description,Details,ItemSpecifics';
  console.log(url); /////////////////////////

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(body)
  });
});


router.get('/googleSearch/:id', function(req, res){
  const url = 'https://www.googleapis.com/customsearch/v1?q=' + encodeURI(req.params.id)
      + '&cx=006318276690997621730:yjsjqv-70io&imgSize=huge&imgType=news&num=8&searchType=image&key=AIzaSyB4m3-c2GUeWEs-NmFNk5hEprYEV7NC_L8';
  console.log('url of google search is' + url); /////////////////////////

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(body)
  });
});

router.get('/similarItem/:id', function(req, res){
  const url = 'http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService' +
      '&SERVICE-VERSION=1.1.0&CONSUMER-ID=JiayingL-productS-PRD-116e08212-90cdea32&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId='
      + req.params.id + '&maxResults=20';
  console.log(url); /////////////////////////

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(body)
  });
});

module.exports = router;


