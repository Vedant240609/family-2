Webcam.set({
width: 340,
height: 340,
image_format: "jpg",
jpg_quality: 90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureimage' src='"+data_uri+"'>"
    });
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("#",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}