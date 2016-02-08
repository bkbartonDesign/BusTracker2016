var api = {};
var cta = require("./cta_references.js");
var request = require("request");
var parseString = require('xml2js').parseString;
var proxy = require("./proxy.js");


api.gettime = function(req,res,next){	
	var url = cta.gettime(),
		data = {};
	request(url,function(err,res,body){
		parseString(body,function(err,res){
			if(err)
				throw err;

			// building the data model //
			// should prolly be a module to itself? //
			req.gettime = res["bustime-response"].tm;
			next();
		});
	});
}

api.vehicles = function(req,res,next){
	//var url = "http://www.ctabustracker.com/bustime/api/v1/getvehicles"+cta.key+"&rt=65";
	var url = cta.vehicle();
	console.log("API.VEHICLES");
	request(url,function(err,res,body){
		if(err)
			throw err;
		parseString(body,function(err,res){
			if(err)
				throw err;
			
			req.vehicles = res["bustime-response"].vehicle;
			console.log(req.vehicles);
			next();
		});		
	})
}

api.routes = function(req,res,next){
	console.log("API.ROUTES");
	var url = cta.routes();
	request(url,function(err,res,body){
		if(err)
			throw err;
		parseString(body,function(err,res){
			if(err)
				throw err;
			
			req.routes = res["bustime-response"].route;
			console.log(req.routes);
			next();
		});		
	})	
}

api.directions = function(req,res,next){
	console.log("API.DIRECTIONS");
	var url = cta.directions();
	request(url,function(err,res,body){
		if(err)
			throw err;
		parseString(body,function(err,res){
			if(err)
				throw err;
			
			req.directions = res["bustime-response"];
			console.log(req.DIRECTIONS);
			next();
		});		
	})	

}

api.stops = function(req,res,next){
	console.log("API.STOPS");
	var url = cta.stops();
	request(url,function(err,res,body){
		if(err)
			throw err;
		parseString(body,function(err,res){
			if(err)
				throw err;
			
			req.stops = res["bustime-response"].stop;
			console.log(req.stops);
			next();
		});		
	})	

}


module.exports = api;