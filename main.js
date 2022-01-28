var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (e) {
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        speak()
    } else {
        console.log("The App Works Only If You Say Take My Selfie.")
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking You Selfie In 5 Seconds";
    var utterance = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterance);
    Webcam.attach(camera)
    setTimeout(function () {
        takesnapshot()
        save()
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 100
});

camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("img1").innerHTML = '<img id="selfieimg" src="' + data_uri + '">';
    });
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfieimg").src;
    link.href = img;
    link.click();
}