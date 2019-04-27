const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const msgQueue  = require('./messageQueue');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');

// var filePath = path.join('.', 'background.jpg');
// fs.exists(filePath, function(exists){
//   if (exists) {     
//     // Content-type is very interesting part that guarantee that
//     // Web browser will handle response in an appropriate manner.
//     response.writeHead(200, {
//       "Content-Type": "application/octet-stream",
//       "Content-Disposition": "attachment; filename=" + fileName
//     });
//     fs.createReadStream(filePath).pipe(response);
//   } else {
//     response.writeHead(400, {"Content-Type": "text/plain"});
//     response.end("ERROR File does not exist");
//   }
// });

////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // console.log(msgQueue);
  res.writeHead(200, headers);
  if (req.method === 'GET'){
    res.end(msgQueue.dequeue());

  }else if (req.method === 'POST'){
    res.end();
  }
  // res.({keyValue:key.name})
};
