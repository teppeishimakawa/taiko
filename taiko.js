var img=[];
img[0]=new Image();
img[0].src='./btn.png';
img[1]=new Image();
img[1].src='./btn2.png';

var audio=new Audio("./pon.wav");

var tapp=document.getElementById("btn");

tapp.src=img[0].src;
img[0]=new Image();

tapp.onclick=function()
{
tapp.src=img[1].src;
img[1]=new Image();

audio.play();
//連続再生用にキャッシュ用にaudio要素を作成
audio=new Audio("./pon.wav");
setTimeout(function(){tapp.src=img[0].src},150)
};