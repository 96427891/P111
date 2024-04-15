https://teachablemachine.withgoogle.com/models/eEXJRfo4u/model.json

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function (database) {
        document.getElementById("captured_img").innerHTML = '<img id="saved-img" src="' + database + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eEXJRfo4u/model.json');