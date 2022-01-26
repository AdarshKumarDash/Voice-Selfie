var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(e){
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak()
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value
    var utterance = new SpeechSynthesisUtterance (speak_data);
    synth.speak(utterance);
    Webcam.attach(camera)
    setTimeout(function() {
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 100
});

camera = document.getElementById("camera");