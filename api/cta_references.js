var config = require("../config.js");

var cta = (function(){
	
	var base_url = "http://www.ctabustracker.com/bustime/api/v1/",
		key = "?key="+config.bt_key,
		rt = [65], // array of route ids to be set;
		vid = [], // array of vechile ids to be set;
		dir = ["Eastbound"],
		set_params = function(param_name,param_array){
			if(param_array.length == 0){
				console.log("No items set for "+param_name);
				return;
			}

			var params = "&"+param_name+"=",
				num_params = param_array.length;

			param_array.forEach(function(ele,i){
				if(i+1<num_params){
					params += ele+",";
				}
				else
					params += ele;
			});

			return params;
		};

	var gettime = function(){
		var uri = "gettime/";
			url = base_url+uri+key;
		return url;
	};

	var vehicle = function(){
		console.log("IN VECHILE API",cta.key);
		var url = base_url,
			uri = "getvehicles",
			key = cta.key,
			rt_params = set_params("rt",rt[0]);
			url += uri+key+rt_params;
		return url;			
	}

	var routes = function(){
		var uri = "getroutes",
			key = cta.key,
			url = base_url+uri+key;
		return url;
	}

	var directions = function(){
		var uri = "getdirections",
			key = cta.key,
			params  = set_params("rt",rt),
			url = base_url+uri+key+params;
			console.log(url);
		return url;
	}

	var stops = function(){
		var uri = "getstops",
			key = cta.key,
			rt_params  = set_params("rt",rt),
			dir_params = set_params("dir",dir),
			url = base_url+uri+key+rt_params+"&"+dir_params;
			console.log(dir_params);
		return url;
	}	

	return{
		key:key,
		gettime:gettime,
		vehicle:vehicle,
		routes:routes,
		directions:directions,
		stops:stops
	}
})();


// var cta_api = {
// 	base_url:"http://www.ctabustracker.com/bustime/api/v1/",
// 	call:{
// 		get_time:function(){
// 			var uri = "gettime";
// 			return uri;
// 		}
// 	}
// }

module.exports = cta;