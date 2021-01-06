require('http').createServer(function(request, response) {
   if (request.method == 'GET') {
       //GET 요청
       require('fs').readFile('post.html', function(error, data){
           response.writeHead(200, {'Content-Type': 'text/html'});
           response.end(data);
       });
   }else if (request.method == 'POST') {
       //POST 요청
       request.on('data', function(data){
           response.writeHead(200, {'Content-Type': 'text/html'});
           response.end('<h1>' + data + '</h1>');
       });
   }
}).listen(1016, function(){
    console.log('Server Running at localhost:1016');
});