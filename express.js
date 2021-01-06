var http = require('http');
var express = require('express');

//서버를 생성합니다.
var app = express();

//미들웨어 설정(1)
app.use(function(req, res, next){
	console.log("첫 번째 미들웨어");
    next();
});

//미들웨어 설정(2)
app.use(function(req, res, next){
	console.log("두 번째 미들웨어");
    next();
});

//미들웨어 설정(3)
app.use(function(req, res, next){
	console.log("세 번째 미들웨어");
    
    //응답합니다.
    res.writeHead(200, {'Context-Type': 'text/html'});
    res.end('<h1>Express Basic</h1>');
});
                   
http.createServer(app).listen(1016, function(){
    console.log('1016 로컬 서버 실행');
});