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
}