

var audio=new Audio("./pon.mp3");

var tapp=document.getElementById("btn");
var dv=document.getElementById("dvbtn");

tapp.src='./btn.png';



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

//audio.load();


dv.addEventListener("touchstart",function(e)
{
tapp.src='./btn2.png';
},false);

dv.addEventListener("touchmove",function(e)
{
e.preventDefault();
},false);

dv.addEventListener("touchend",function(e)
{
tapp.src='./btn.png';
},false);




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