var video1;
var video2;

var video1Green=0;
var video1Blue=0;
var video1Red=0;
var video1Opacity=0;
var video1Volumne;

var video2Green=0;
var video2Blue=0;
var video2Red=0;
var video2Opacity=0;
var video2Volumne;

var bufferCanvas;
var bufferCanvasContext;

var bufferCanvasHeight;
var bufferCanvasWidth;

var drawCanvas;
var drawCanvasContext;

var drawCanvasHeight;
var drawCanvasWidth;

var audio1;
var audio2;
var audio3;
var audio4;
var audio5;

var negativeFilter1=false;
var greyFilter1=false;
var negativeFilter2=false;
var greyFilter2=false;

var bilddaten;
var bilddaten2;

/*Wartet bis das DOM geladen ist , initialisiert dann globale Variablen*/
$(document).ready(function() {
  //Laden der thumbnails
  jQuery('.nailthumb-container').nailthumb();

 //Sounds von Audio-Element im HTML auffinden und in Variablen speichern 
 audio1=document.getElementById("sound1");
 audio2=document.getElementById("sound2");
 audio3=document.getElementById("sound3");
 audio4=document.getElementById("sound4");
 audio5=document.getElementById("sound5");

 //Videos von Video-Elementen im HTML auffinden und in Variablen speichern 
 video1=document.getElementById("video1");
 video2=document.getElementById("video2");

 //Breite und Höhe der Videos speichern (zur Abstimmung mit Canvas Element)
 video1Height=video1.height;
 video1Width=video1.width;
 video2Height=video1.height;
 video2Width=video1.width;

 //Buffer für Video 1 
 bufferCanvas=new Object();
 bufferCanvas=document.getElementById("canvasBuffer");
 bufferCanvasContext=new Object();
 bufferCanvasContext=bufferCanvas.getContext("2d");
 bufferCanvasHeight=bufferCanvas.height;
 bufferCanvasWidth=bufferCanvas.width;
 
 //Sichtbares Canvas für Video1
 drawCanvas=new Object();
 drawCanvas=document.getElementById("canvasDraw");
 drawCanvasContext=new Object();
 drawCanvasContext=drawCanvas.getContext("2d");
 drawCanvasHeight=drawCanvas.height;
 drawCanvasWidth=drawCanvas.width;

 //Buffer für Video2
 bufferCanvas2=new Object();
 bufferCanvas2=document.getElementById("canvasBuffer2");
 bufferCanvas2Context=new Object();
 bufferCanvas2Context=bufferCanvas2.getContext("2d");
 bufferCanvas2Height=bufferCanvas2.height;
 bufferCanvas2Width=bufferCanvas2.width;
 
 //Sichtbares Canvas für Video 2 
 drawCanvas2=new Object();
 drawCanvas2=document.getElementById("canvasDraw2");
 drawCanvas2Context=new Object();
 drawCanvas2Context=drawCanvas2.getContext("2d");
 drawCanvas2Height=drawCanvas2.height;
 drawCanvas2Width=drawCanvas2.width;

/*Slider zum Steuern der Farbwerte, Deckkraft, Lautstärke , Geschwindigkeit 
  min , max und stepwerte sind vom jeweils veränderten Attribut abhängig . 
  Farbwerte liegen zwischen 0-255 
  Geschindigkeit liegt zwischen 0 und 3 ( stop bis 3x Geschindigkeit)
  Lautstärke wird als Prozentwert interpretiert und liegt zwischen 0-1 ( 0% bis 100% )
 */
//Video 1 Geschwindigkeit 
$(function() {
    $( "#sliderVid1" ).slider({ 
      min: 0,
      max: 3,
      step: 0.25,
      orientation: "vertical",  
      slide: function(event, ui){
        video1.playbackRate=ui.value;
      }               
      });
  });

//Video 1 Grünwert
$(function() {
    $( "#sliderVid1Green" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video1Green, 
      slide: function(event, ui){
        video1Green=ui.value;
      }               
      });
  });

//Video 1 Blauwert 
$(function() {
    $( "#sliderVid1Blue" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video1Blue, 
      slide: function(event, ui){
        video1Blue=ui.value;
      }               
      });
  });

//Video 1 Rotwert 
$(function() {
    $( "#sliderVid1Red" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video1Red, 
      slide: function(event, ui){
        video1Red=ui.value;
      }               
      });
  });

//Video 1 Deckkraft 
$(function() {
    $( "#sliderVid1Opacity" ).slider({ 
      min: -255,
      max: 1,
      step: 1,
      orientation: "vertical", 
      value: video1Opacity, 
      slide: function(event, ui){
        video1Opacity=ui.value;
      }               
      });
  });

//Video 1 Lautstärke
$(function() {
    $( "#sliderVid1Volume" ).slider({ 
      min: 0,
      max: 1,
      step: 0.1,
      orientation: "vertical", 
      value: video1Volumne, 
      slide: function(event, ui){
        video1.volume=ui.value;
      }               
      });
  });

//Video 2 Geschwindigkeit 
$(function() {
    $( "#sliderVid2" ).slider({ 
      min: 0,
      max: 3,
      step: 0.25,
      orientation: "vertical", 
      slide: function(event, ui){
        video2.playbackRate=ui.value;
      }               
      });
  });

//Video 2 Grünwert 
$(function() {
    $( "#sliderVid2Green" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video2Green, 
      slide: function(event, ui){
        video2Green=ui.value;
      }               
      });
  });

//Video 2 Blauwert 
$(function() {
    $( "#sliderVid2Blue" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video2Blue, 
      slide: function(event, ui){
        video2Blue=ui.value;
      }               
      });
  });

//Video 2 Rotwert 
$(function() {
    $( "#sliderVid2Red" ).slider({ 
      min: 0,
      max: 255,
      step: 1,
      orientation: "vertical", 
      value: video2Red, 
      slide: function(event, ui){
        video2Red=ui.value;
      }               
      });
  });

//Video 2 Deckkraft
$(function() {
    $( "#sliderVid2Opacity" ).slider({ 
      min: -255,
      max: 1,
      step: 1,
      orientation: "vertical", 
      value: video2Opacity, 
      slide: function(event, ui){
        video2Opacity=ui.value;
      }               
      });
  });

//Video 2 Geschindigkeit 
$(function() {
    $( "#sliderVid2Volume" ).slider({ 
      min: 0,
      max: 1,
      step: 0.1,
      orientation: "vertical", 
      value: video2Volumne, 
      slide: function(event, ui){
        video2.volume=ui.value;
      }               
      });
  });
});

/*Fragt Videodaten aus den Video-Elementen ab , shreibt diese auf ein unsichtbares Buffer-Canvas , ruft funktionen zur Manipulation auf und macht 
die Ergebnise auf einem weiteren Canvas sichtbar*/
function copy(){
    /*Videodaten von Video1 auf Buffer zeichnen und danach abfragen */
    bufferCanvasContext.drawImage(video1, 0, 0, 640, 480);
    bilddaten = bufferCanvasContext.getImageData(0,0,640, 480);
    /*Filterzustände abfragen und Bilddaten entsprechend manipulieren*/
    if(negativeFilter1){
    setNegative(bilddaten,bufferCanvasWidth,bufferCanvasHeight,video1Red,video1Green,video1Blue,video1Opacity);
    }
    else if(greyFilter1){
    setGrey(bilddaten,bufferCanvas2Width,bufferCanvas2Height,video2Red,video2Green,video2Blue,video2Opacity);  
    }
    else{
    setColor(bilddaten,bufferCanvasWidth,bufferCanvasHeight,video1Red,video1Green,video1Blue,video1Opacity);  
    }
    /*Manipulierte Bilddaten auf sichtbares Canvas Rendern*/
    drawCanvasContext.putImageData(bilddaten,0,0);
    

    /* Videodaten von Video 2 auf zweiten Buffer zeichnen und danach abfragen*/
    bufferCanvas2Context.drawImage(video2, 0, 0, 640, 480);
    bilddaten2 = bufferCanvas2Context.getImageData(0,0,640, 480);
    /* Filterzustände für Video 2 abfragen und Bilddaten entsprechend manipulieren*/
    if(negativeFilter2){
    setNegative(bilddaten2,bufferCanvas2Width,bufferCanvas2Height,video2Red,video2Green,video2Blue,video2Opacity);
    }
    else if(greyFilter2){
    setGrey(bilddaten2,bufferCanvas2Width,bufferCanvas2Height,video2Red,video2Green,video2Blue,video2Opacity);  
    }
    else{
    setColor(bilddaten2,bufferCanvas2Width,bufferCanvas2Height,video2Red,video2Green,video2Blue,video2Opacity);  
    }
    /*Manipulierte Bilddaten von Video 2 auf sichtbares Canvas Rendern*/
    drawCanvas2Context.putImageData(bilddaten2,0,0);


    /*Copy nach 25 ms erneut aufrufen, höhere Werte verringen FPS sowie benötigte Rechenleistung */
    setTimeout(copy,25);
}

/*Manipuliert das Pixelarray (rgba-Werte ) entsprechend der von den Slidern vorgegebenen Values*/
function setColor(bilddaten,canvasWidth,canvasHeight,redValue,greenValue,blueValue,opacity){
  var data=bilddaten.data;
  for (var y = 0; y < canvasHeight; y++) {
    for (var x = 0; x < canvasWidth; x++) {
          var index = (y * canvasWidth + x) * 4;
          /*rotwert*/
          data[index]=redValue+data[index];
          /*gruenwert*/
          data[index+1]=greenValue+data[index+1];
          /*blauwert*/
          data[index+2]=blueValue+data[index+2];
          /*deckkraft*/
          data[index+3]=data[index+3]+opacity;
    }
  }
}

/*Berechnet für jedes Pixel einen negativwert , die Werte der Slider werden weiterhin berücksichtigt*/
function setNegative(bilddaten,canvasWidth,canvasHeight,redValue,greenValue,blueValue,opacity){
  var data=bilddaten.data;
  for (var y = 0; y < canvasHeight; y++) {
    for (var x = 0; x < canvasWidth; x++) {
          var index = (y * canvasWidth + x) * 4;
          /*255-Farbwert bildet das komplement*/
          /*rotwert*/
          data[index]=255-data[index]+redValue;
          /*gruenwert*/
          data[index+1]=255-data[index+1]+greenValue;
          /*blauwert*/
          data[index+2]=255-data[index+2]+blueValue;
          /*deckkraft*/
          data[index+3]=data[index+3]+opacity;
    }
  }
}

/*Manipuliert die Pixel , indem für jedes Pixel ein dazugehöriger Grauwert (alle Farbwerte addiert / 3 ) berechnet wird */
function setGrey(bilddaten,canvasWidth,canvasHeight,redValue,greenValue,blueValue,opacity){
  var data=bilddaten.data;
  for (var y = 0; y < canvasHeight; y++) {
    for (var x = 0; x < canvasWidth; x++) {
          var index = (y * canvasWidth + x) * 4;
          var gray= (data[index]+data[index+1]+data[index+2]) / 3 ; 
          /*rotwert*/
          data[index]=gray+redValue;
          /*gruenwert*/
          data[index+1]=gray+greenValue;
          /*blauwert*/
          data[index+2]=gray+blueValue;
          /*deckkraft*/
          data[index+3]=data[index+3]+opacity;
    }
  }
}

/*Playing and Pausing Video*/
function playVideo1(){
var button=document.getElementById("playVideo1Button");

  if(video1.paused){
   video1.play();
  }
  else{
    video1.pause();
  }
}

function playVideo2(){
  if(video2.paused){
   video2.play();
  }
  else{
    video2.pause();
  }
}

/*Vor;- bzw Zurückspulen*/
function fastFwdVideo1(){
  video1.currentTime+=5;
}

function fastFwdVideo2(){
  video2.currentTime+=5;
}

function fastBwdVideo1(){
  video1.currentTime-=5;
}

function fastBwdVideo2(){
  video2.currentTime-=5;
}

/*Ändern der Videosources, aufgerufen von den Thumbnails im Html */
function changeSource_Video1_LotW(){
  $("#video1").attr("src","resources/Videos/LOTW.mp4");
}
function changeSource_Video1_PR(){
  $("#video1").attr("src","resources/Videos/PR.mp4");
}

function changeSource_Video1_3tage(){
  $("#video1").attr("src","resources/Videos/3Tage.mp4");
}

function changeSource_Video1_tvtotal(){
  $("#video1").attr("src","resources/Videos/TVTOTAL.mp4");
}

function changeSource_Video1_schwarzweiss(){
  $("#video1").attr("src","resources/Videos/LSD.mp4");
}

function changeSource_Video1_bunt(){
  $("#video1").attr("src","resources/Videos/VISUAL.mp4");
}
function changeSource_Video1_RH(){
  $("#video1").attr("src","resources/Videos/RH.mp4");
}

function changeSource_Video2_LotW(){
  $("#video2").attr("src","resources/Videos/LOTW.mp4");
}

function changeSource_Video2_3tage(){
  $("#video2").attr("src","resources/Videos/3Tage.mp4");
}

function changeSource_Video2_tvtotal(){
  $("#video2").attr("src","resources/Videos/TVTOTAL.mp4");
}

function changeSource_Video2_schwarzweiss(){
  $("#video2").attr("src","resources/Videos/LSD.mp4");
}

function changeSource_Video2_bunt(){
  $("#video2").attr("src","resources/Videos/VISUAL.mp4");
}
function changeSource_Video2_PR(){
  $("#video2").attr("src","resources/Videos/PR.mp4");
}
function changeSource_Video2_RH(){
  $("#video2").attr("src","resources/Videos/RH.mp4");
}

/*Abspielen der Sounds*/
function playSound1(){
  sound1.play();
}

function playSound2(){
  sound2.play();
}

function playSound3(){
  sound3.play();
}

function playSound4(){
  sound4.play();
}

function playSound5(){
  sound5.play();
}