

function makeSound(){
    navigator.mediaDevices.getUserMedia({
        audio : true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sPqGTxzsE/model.json", modelReady);
}

function modelReady(){
    console.log("model loaded");
    classifier.classify(getResults);
    
}

function getResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        random_r = Math.floor(Math.random()*255 + 1);
        random_g = Math.floor(Math.random()*255 + 1);
        random_b = Math.floor(Math.random()*255 + 1);

        document.getElementById("resultLabel").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("rConfidance").innerHTML = "Accuracy: " +(results[0].confidence*100).toFixed(2) + "%";
        
        document.getElementById("resultLabel").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("rConfidance").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

        i1 = document.getElementById("A1");
        i2 = document.getElementById("A2");
        i3 = document.getElementById("A3");
        i4 = document.getElementById("A4");

        if(results[0].label == "Bell"){
        i1.src = "Alien_1.gif";
        i2.src = "Alien_2.jpg";
        i3.src = "Alien_3.png";
        i4.src = "Alien_4.png";
        }
        else if(results[0].label == "Clap"){
            i1.src = "Alien_1.png";
            i2.src = "Alien_2.gif";
            i3.src = "Alien_3.png";
            i4.src = "Alien_4.png";
            }

        else if(results[0].label == "Song"){
            i1.src = "Alien_1.png";
            i2.src = "Alien_2.jpg";
            i3.src = "Alien_3.gif";
            i4.src = "Alien_4.png";
            }

        else if(results[0].label == "Whistle"){
            i1.src = "Alien_1.png";
            i2.src = "Alien_2.jpg";
            i3.src = "Alien_3.png";
            i4.src = "Alien_4.gif";
            }

            else{
                i1.src = "Dog with ducks.gif";
                i2.src = "Dog with ducks.gif";
                i3.src = "Dog with ducks.gif";
                i4.src = "Dog with ducks.gif";
                }
    }
}