var audio=document.getElementById("sound");
var tapp=document.getElementById("btn");

document.getElementById("btn").addEventListener('click',function()
{
audio.play();
tapp.src="./btn2.png"
});