prediction_1 = "";
Webcam.set({
    width:325,
    height:350,
    image_format:"png",
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wJZoHlp4U/model.json', modelisloadedithink);
function modelisloadedithink(){
    console.log("model is loaded")
}

function check(){
    img = document.getElementById("result");
    classifier.classify(img,gotResults)
}

function gotResults(error,results){
    if(error){
        console.log("badbab")
        console.error(error)
    }
    else{
        console.log("AHAHHAHAHAHAHHA WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML = results[0].label ;
        document.getElementById("update_emoji").innerHTML = results[1].label;
        prediction_1 = results[0].label+" - "+ results[1].label;
        console.log("is it working1")
        say();
        console.log("is it working2")
        if(results[0].label=="Peace"){
            document.getElementById("result_emotion_name").innerHTML = "Peace"
        }
        if(results[0].label=="Thumb up"){
            document.getElementById("result_emotion_name").innerHTML = "Thumbs Up"
        }
        if(results[0].label=="Thumb Down"){
            document.getElementById("result_emotion_name").innerHTML = "Thumbs Down"
        }
        if(results[1].label=="PALM"){
            document.getElementById("result_emotion_name").innerHTML = "Palm"
        }
        if(results[1].label=="Peace"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }
        if(results[1].label=="Thumb Up"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }
        if(results[1].label=="Thumb Down"){
            document.getElementById("update_emoji").innerHTML = "&#128078;"
        }
        if(results[1].label=="PALM"){
            document.getElementById("update_emoji").innerHTML = "&#128400;"
        }
    }
}
function say(){
    var synth = window.speechSynthesis;
    input_box = results[0].label+" - "+ results[1].label;
    var utterthis = new SpeechSynthesisUtterance(input_box);
   synth.speak(utterthis)
}

