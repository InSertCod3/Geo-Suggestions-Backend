"use strict";

const express = require('express')
const Fuse = require('fuse.js')
const Papa = require('papaparse')
const fs = require('fs');

// Express app init
const app = express()
const port = 5000  // App PORT

// Data Parsing
var data_contents = fs.readFileSync(__dirname  + '/data/cities_canada-usa.tsv', 'utf8');
var datatable = Papa.parse(data_contents, {"delimiter": "", "header": true})

var fuse_options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [{
    name: 'name',
    weight: 1
  }]
};
var fuse = new Fuse(datatable["data"], fuse_options)

// console.log(datatable["data"]);
// console.log(fuse.search('Estevan'));

function api_suggestions(req, res){
  /*
  * Returns Apprepiate Data from a api request :GET.
    ex. -- http://localhost:5000/suggestions?q=Angus&result_limit=10
  */
  var _query = req.query.q != undefined ? req.query.q : undefined;
  var _result_limit = req.query.result_limit != undefined ? req.query.result_limit : 50;
  var _r_ = {status: "ok",
             results: fuse.search(_query).slice(1, _result_limit)};
  if (req.query.q == '' || req.query.q == undefined ){
    _r_.status = "error"
    _r_.results = "Require url argument 'q' is Invaild" ;
  }
  return res.json(_r_);
}

// Api Endpoints Register
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/suggestions', api_suggestions)

// Start Listen with the server
app.listen(port, () => console.log(`Api app listening on port ${port}!`))