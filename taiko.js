var img=[];
img[0]=new Image();
img[0].src='./btn.png';
img[1]=new Image();
img[1].src='./btn2.png';

var audio=new Audio("./pon.mp3");

var tapp=document.getElementById("btn");

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



tapp.addEventListener("touchstart",function(e)
{
tapp.src=img[1].src;
audio.play();
//連続再生用にキャッシュ用にaudio要素を作成
audio=new Audio("./pon.mp3");
e.preventDefault();
});


tapp.addEventListener("touchend",function(e)
{
tapp.src=img[0].src;
e.preventDefault();
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