var img=[];
img[0]=new Image();
img[0].src='./btn.png';
img[1]=new Image();
img[1].src='./btn2.png';

var audio=new Audio("./pon.mp3");

var tapp=document.getElementById("btn");
var dv=document.getElementById("dvbtn");

tapp.src=img[0].src;



/*
tapp.ontouchend=function(e)
{
tapp.src=img[1].src;

audio.play();
//連続再生用にキャッシュ用にaudio要素を作成
audio=new Audio("./pon.mp3");
setTimeout(function(){tapp.src=img[0].src},150)
};
*/



dv.addEventListener("touchstart",function(e)
{
audio.play();
tapp.src=img[1].src;
//連続再生用にキャッシュ用にaudio要素を作成
audio=new Audio("./pon.mp3");
});


dv.addEventListener("touchend",function(e)
{
tapp.src=img[0].src;
});







//拡大縮小ガード
try
{
document.addEventListener('touchstart', function(e)
 {
  if (event.touches.length > 1)
  {
    event.preventDefault();
  }
 }, {passive: false});
}catch(e)
{
 false
}