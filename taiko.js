var audio=document.getElementById("sound");
var tapp=document.getElementById("btn");

tapp.addEventListener('click',function()
{
tapp.src="./btn2.png"
audio.play();
setTimeout(function(){tapp.src="./btn.png"},150)
});