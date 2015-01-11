(function()  {
  var canvas=document.getElementById('canvas'),
  context=canvas.getContext('2d'),
  video=document.getElementById('video'),
  vendorurl=window.URL || window.webkit URL;
  navigator.getMedia= navigator.getUserMedia ||
                      navigator.webkitgetUserMedia ||
                      navigator.mozgetUserMedia ||
                      navigator.msgetUserMedia;

    navigator.getmedia( {
      video:true,
      audia:false
    },function(stream) {
      video.src=vendorUrl.createObjectURL(stream);
      video.play();
    },  function(error)
         //an error occured
         //error.code
       });

     }) ();
