var proxy = {};
var request = require("request");
var parseString = require('xml2js').parseString;


// proxy.gettime = function(url){
// 	console.log("GET TIME");
// 	var response = {};
// 	request(url,function(err,res,body){
// 		console.log(body);
// 		parseString(body,function(err,res){
// 			if(err)
// 				throw err;
			
// 			return res;
// 		});
// 	});
// }



module.exports = proxy;