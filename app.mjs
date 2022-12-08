console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

import http from 'http';

http
  .createServer(function (req, res) {
    console.log(req);
    const { method, url, body } = req;
    
    
      

    if (url == "/") {
              res.statusCode = 200;
              res.write("<h1>Home</h1><br /> <p>This is the Home Page</p>");
              res.end();
           } else if (url == "/about") {
      
              res.statusCode = 200;
               res.write("<h1>About</h1><br /> <p>I'm still bad at backend</p>");
              res.end();
          
      } else if (url == "/echo"){
      const chunks = [];
      req.on("data", (chunk) => {
        chunks.push(chunk);
      }).on("end", () => {
          
              const body = JSON.parse(Buffer.concat(chunks).toString());
              const responseBody = { method, url, body };
  
              res.statusCode = 200;
              res.write(responseBody); 
              res.end();
          
      });
      
    }
   res.end();
  })
  .listen(3000, () => {
    console.log("Listening on port 3000...")
  });

// Finish setting up the server
