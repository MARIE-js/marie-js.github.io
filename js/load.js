$(document).ready(function(){
  function readCode(address){
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
          if(xhr.readyState === 4){
              if(xhr.status == 200){
                  loadContents(xhr.responseText, xhr);
                  console.log('File Sucessfully Loaded');
              }
              else if(xhr.status == 404){
                  console.log("File not Found");
              }
          }
      };
      xhr.open('GET',address,true);
      xhr.send();
    }

      //loadContents() works in conjunction with readCode(), if the server responds with a Code 200
      function loadContents(response){
          var txt = response.split("\n");
          console.log(txt);
          vID = txt[4];
          newVID = vID.replace(/`/g, '');
          console.log(newVID);
          $('#version').text(newVID);
      }

      var fileAddress = "https://raw.githubusercontent.com/MARIE-js/MARIE.js/master/README.md";
      console.log("Loading from: " + fileAddress);
      readCode(fileAddress);

  });
