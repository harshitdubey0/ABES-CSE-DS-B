const http=require('http');

 const myserver = http.createServer((req,res)=>{
 
if(req.url === '/home'){
    res.end('ABES Engineering College');
  }
else if(req.url == '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Harshit from ABES Engineering College</h1><img src="https://images.pexels.com/photos/30560297/pexels-photo-30560297.jpeg?cs=srgb&dl=pexels-willianjusten-30560297.jpg&fm=jpghttps://example.com/image.jpg" alt="Profile">');
  }
else if(req.url == '/contact'){
    res.end('Delhi NCR, India');
  }
  else {
    (res.end('404 this page not found'));
  }

})

myserver.listen(8000,()=> console.log('server is run ')) 