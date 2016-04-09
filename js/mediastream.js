//Media Stream

//determine which Browser we are using

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


//Constrains -- properties eg audio video and resolutions

var constraints ={audio:true, video:{ mandatory:{minWidth: 1280, minHeight:720}}};



//Query selector to grab our video element

var video = document.querySelector("video");


//Create success call back with argument of returned string

function successCallback(stream){
    //This line is not required , we are using this to view the stream object in console .
    window.stream = stream;
    video.src=URL.createObjectURL(stream);
    video.play();
}


//Function To Log Errors in Console

function errorCallback(error){
    console.log("navigator.getUserMedia error :",error);
}

//Exectute getUserMedia Method with constrains and Call Back

navigator.getUserMedia(constraints, successCallback, errorCallback);






