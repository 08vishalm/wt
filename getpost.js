http=require('http');
url=require('url');
querystring = require('querystring');

function sam(request,response)
{
    console.log('URL '+request.url+' received.');
    
    var path = url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
    //console.log('Request for '+request.url+' received.');
    
    var query =url.parse(request.url).query;
    console.log(query);
    
    qs=querystring.parse(query)
    console.log(qs);

    var name = qs["username"];
    var email=qs["email"];
    
    response.write('Hello vishal, your email id 08vishal.m@gmail.com has been registered successfully');
    response.end();
}
http.createServer(sam).listen(8000);
console.log('Server has Started…….');
var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
        var data1= '';
        
    req.on('data', function(chunk) {   
                    console.log(chunk);
                    data1 += chunk;  
                    console.log("Data in String format: "+data1);
                    });
    req.on('end', function() {
                console.log("Data: "+data1);
                
                qs=querystring.parse(data1);
                console.log(qs);

                name=qs['username'];
                email=qs['email'];
        
                res.write("Hello vishal, your email id 08vishal.m@gmail.com has been registered successfully");
                res.end(); 
                });

    }).listen(7777);

console.log("Server started");