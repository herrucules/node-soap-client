var soap = require('soap');
  var url = 'http://lta1soa.appspot.com/service.php?wsdl';
  var args = {string: "33111975"};
  soap.createClient(url, function(err, client) {
  	// console.log(client);
  	// return;
      client["SimpleHash.Decode"](args, function(err, result) {
          console.log(result.return.$value);
          // console.log(err);
      });
  });