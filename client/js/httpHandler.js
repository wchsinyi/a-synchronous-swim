
(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  const commandFetchRequest = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {   
        if (data){
          console.log(data);
          SwimTeam.move(data); // 'left', 'right', 'down', 'up 
        } 
      },
      error: ()=> {console.log('error')}
    });
  };

// https://stackoverflow.com/questions/12740659/downloading-images-with-node-js
  const picsFetchRequest = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {   
        if (data){
          console.log(data);
          var fs = require('fs');
          var wstream = fs.createWriteStream('./fetchedBackground.jpg');
          // creates random Buffer of 100 bytes
          var buffer = crypto.randomBytes(100);
          wstream.write(buffer);
          // create another Buffer of 100 bytes and write
          wstream.write(crypto.randomBytes(100));
          wstream.end();
        } 
      },
      error: ()=> {console.log('error')}
    });
  };



  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });


  picsFetchRequest();
  console.log('before')
  function step () {
    setTimeout(step, 1000)
    // console.log('whats upppppp');
    // picsFetchRequest();
  }
  step();
  console.log('after')


})();



// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   // This opens up the writeable stream to `output`
//   var writeStream = fs.createWriteStream('./output');

//   // This pipes the POST data to the file
//   req.pipe(writeStream);

//   // After all the data is saved, respond with a simple html form so they can post more data
//   req.on('end', function () {
//     res.writeHead(200, {"content-type":"text/html"});
//     res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
//   });

//   // This is here incase any errors occur
//   writeStream.on('error', function (err) {
//     console.log(err);
//   });
// }).listen(8080);
