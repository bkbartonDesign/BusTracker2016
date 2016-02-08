var express = require('express');
var router = express.Router();
var api = require("../api/index.js");


/* GET home page. */
router.get('/', api.gettime ,function(req, res) {
	//var data = api.gettime();
	console.log("data from req",req.gettime);
	res.render('index', { title: 'Express', gettime:req.gettime });
});

router.get('/vehicles', api.vehicles, function(req,res){
	res.render('index', { title: 'Express', vehicles:req.vehicles });
});

router.get('/routes', api.routes, function(req,res){
	res.render('index',{title:"Routes", routes:req.routes});
});

router.get('/directions', api.directions, function(req,res){
	res.render('index',{title:"Directions", directions:req.directions});
});

router.get('/stops', api.stops, function(req,res){
	res.render('index',{title:"Stops", stops:req.stops});
});

module.exports = router;
