var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    
     speak();
}
function speak(){
var synth = window.speechSynthesis;

speakData = document.getElementById("textbox").value;

var utterThis = new SpeechSynthesisUtterance(speakData);

synth.speak(utterThis);
Webcam.attach(camera);
}


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
    }

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
