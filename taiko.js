var num = 0;
//var watchId;

var map;
var ido,keido;

var marker_user;
var marker_p1,marker_p2,marker_p3;

var myCircle;

var latlng0,latlng1,latlng2,latlng3;

var hizuke=new Date().getDate();




//geolocation
navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});


if((localStorage.getItem("sanka") < (hizuke - 1)) || !(localStorage.getItem("sanka"))){localStorage.clear()};
localStorage.setItem("sanka",hizuke);

function initMap()
{
   navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});
 //watchId=navigator.geolocation.watchPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});
}


function success(position)
{
    var geo_text = "緯度:" + position.coords.latitude + "\n";
    geo_text += "経度:" + position.coords.longitude + "\n";
    geo_text += "位置精度:" + position.coords.accuracy + "\n";
    /*geo_text += "高度:" + position.coords.altitude + "\n";
    geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
    geo_text += "移動方向:" + position.coords.heading + "\n";
    geo_text += "速度:" + position.coords.speed + "\n";*/
    var date = new Date(position.timestamp);

    geo_text += "取得時刻:" + date.toLocaleString() + "\n";
    geo_text += "取得回数:" + (++num) + "\n";

    document.getElementById('position_view').innerHTML = geo_text;

//google map



//台場エリアの乱数作成関数
function randRange(min, max){return (Math.floor(Math.random() * (max - min + 1) + min))/1000000};


if(!map)
 {
    map = new google.maps.Map(document.getElementById('map'),
    {
     center: {lat:position.coords.latitude , lng:position.coords.longitude},
     zoom: 15,
     styles:
[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
                //"lightness": 100
            },
            {
                "visibility": "on"
                //"visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
                //"visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 10
                //"lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
    });
 }



//user
if(marker_user)
{
marker_user.setMap(null);
}

  latlng0= new google.maps.LatLng(position.coords.latitude ,position.coords.longitude);
  marker_user = new google.maps.Marker
  ({
  position:latlng0,
  map: map,
       scaledSize: new google.maps.Size(25, 25)  // サイズを指定
  });



//ラフ
if(!marker_p1)
  {

   latlng1 = new google.maps.LatLng(randRange(35626500,35627690) ,randRange(139772903,139775709));
   marker_p1 = new google.maps.Marker
   ({
   position:latlng1,
   map: map,
   icon:{
       url: "./icon/laugh.jpg", // 画像URL
       scaledSize: new google.maps.Size(30, 30)  // サイズを指定
       }
   });

marker_p1.addListener("click",function()
{
  var infoWindow1 = new google.maps.InfoWindow({
  position: latlng1,
  content: "This is laugh!<br>fujitv mascot chara<br><br><a href='https://www.fujitv.co.jp/present/'>フジテレビキャンペーン</a>"
})
infoWindow1.open(map);
})

  }


//はちたま
if(!marker_p2)
  {

   //latlng2 = new google.maps.LatLng(randRange(35626500,35627690) ,randRange(139772903,139775709));
   latlng2 = new google.maps.LatLng(35.627006,139.774624);
   marker_p2 = new google.maps.Marker
   ({
   position:latlng2,
   map: map,
   icon:{
       url: "./icon/hatitama.jpg", // 画像URL
       scaledSize: new google.maps.Size(30, 30),  // サイズを指定
       optimized:false
       }
   });

marker_p2.addListener("click",function()
{
  var infoWindow2 = new google.maps.InfoWindow({
  position: latlng2,
  content: "This is hatitama!<br>you can go inside!!<br><br><a href='https://www.fujitv.co.jp/present/'>フジテレビキャンペーン</a>"
})
infoWindow2.close();
infoWindow2.open(map);
})

  }


//ガンダム
if(!marker_p3)
  {
   //latlng3 = new google.maps.LatLng(randRange(35626500,35627690) ,randRange(139772903,139775709));
   latlng3 = new google.maps.LatLng(35.624393, 139.775478);

   marker_p3 = new google.maps.Marker
   ({
   position:latlng3,
   map: map,
   icon:{
       url: "./icon/gundam.png", // 画像URL
       scaledSize: new google.maps.Size(30, 30)  // サイズを指定
       }
   });

marker_p3.addListener("click",function()
{
  var infoWindow3 = new google.maps.InfoWindow({
  position: latlng3,
  content: "This is gundam!<br>standUp!!gundam!!<br><br><a href='https://www.fujitv.co.jp/present/'>フジテレビキャンペーン</a>",
  maxWidth: 200,
})
infoWindow3.open(map);
})

  }



/*
if(myCircle)
{
myCircle.setMap(null);
}

    myCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.15,
    map: map,
    center:{lat:position.coords.latitude , lng:position.coords.longitude},
    draggable: false,  //円をドラッグできるように
    radius: 10  //半径50メートル
  });
  */


//２点間の距離
function distance(lat1, lng1, lat2, lng2) {
  lat1 *= Math.PI / 180;
  lng1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  lng2 *= Math.PI / 180;
  return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
}

//メートル単位
  var dis1=distance(latlng0.lat(),latlng0.lng(),latlng1.lat(),latlng1.lng())*1000;
  //console.log(dis1);

  var dis2=distance(latlng0.lat(),latlng0.lng(),latlng2.lat(),latlng2.lng())*1000;
  //console.log(dis2);

  var dis3=distance(latlng0.lat(),latlng0.lng(),latlng3.lat(),latlng3.lng())*1000;
  //console.log(dis3);


//ラフ
if((dis1 < 20000) && (localStorage.getItem("lott1a") != 1))
  {
  marker_p1.setAnimation(google.maps.Animation.BOUNCE);
  marker_p1.setIcon(
    {
    url: "./icon/laugh.jpg", // 画像URL
    scaledSize: new google.maps.Size(30, 30),  // サイズを指定
    });
  document.getElementById("lot1").disabled="";
  }else
  {
    document.getElementById("lot1").disabled="true";
    marker_p1.setAnimation(null);
  }


//はちたま
if((dis2 < 50) && (localStorage.getItem("lott1b") != 1))
  {
  marker_p2.setAnimation(google.maps.Animation.BOUNCE);
  marker_p2.setIcon(
    {
    url: "./icon/hatitama.jpg", // 画像URL
    scaledSize: new google.maps.Size(30, 30),  // サイズを指定
    });
  document.getElementById("lot2").disabled="";
  }else
  {
    document.getElementById("lot2").disabled="true";
    marker_p2.setAnimation(null);
  }


//ガンダム
if((dis3 < 50) && (localStorage.getItem("lott1c") != 1))
  {
  marker_p3.setAnimation(google.maps.Animation.BOUNCE);
  marker_p3.setIcon(
    {
    url: "./icon/gundam.png", // 画像URL
    scaledSize: new google.maps.Size(30, 30),  // サイズを指定
    });
  document.getElementById("lot3").disabled="";
  }else
  {
    document.getElementById("lot3").disabled="true";
    marker_p3.setAnimation(null);
  }





document.getElementById("lot1").onclick=function()
 {
localStorage.setItem('lot1', 1);
window.location.href="./lot1.html";
 }

document.getElementById("lot2").onclick=function()
 {
localStorage.setItem('lot2', 1);
window.location.href="./lot2.html";
 }

document.getElementById("lot3").onclick=function()
 {
localStorage.setItem('lot3', 1);
window.location.href="./lot3.html";
 }

document.getElementById("lsClear").onclick=function(){localStorage.clear()};



if(localStorage.getItem("lott1a") == 1)
 {
  document.getElementById("kekka1").disabled="";
  document.getElementById("kekka1").onclick=function(){window.location.href="./lot1.html";};
 }else
 {
  document.getElementById("kekka1").disabled="true";
 }


 if(localStorage.getItem("lott1b") == 1)
 {
  document.getElementById("kekka2").disabled="";
  document.getElementById("kekka2").onclick=function(){window.location.href="./lot2.html";};
 }else
 {
  document.getElementById("kekka2").disabled="true";
 }


 if(localStorage.getItem("lott1c") == 1)
 {
  document.getElementById("kekka3").disabled="";
  document.getElementById("kekka3").onclick=function(){window.location.href="./lot3.html";};
 }else
 {
  document.getElementById("kekka3").disabled="true";
 }


//successのカッコ
}



function error(e)
{
 alert(e.message);
}

function stop()
{
  clearInterval(timer);
 //navigator.geolocation.clearWatch(watchId);
}

var timer=setInterval(initMap,10000);



//var Spos = new google.maps.LatLng(startLatitude, startLongitude);
//var eEpos = new google.maps.LatLng(endLatitude, endLongitude);


//{lat: parseInt(ido) , lng:parseInt(keido) }
//{lat: position.coords.latitude, lng: position.coords.longitude}
//{lat: -34.397, lng: 150.644}


/*台場エリア
左下　35.625803, 139.773316
左上　35.626610, 139.772903
右上　35.627794, 139.775202
右下　35.627090, 139.775709

35.627794 - 35.625803
139.775709 - 139.772903
*/

/*
var randRange = function(min, max){Math.floor(Math.random() * (max - min + 1) + min)}/1000000;
*/
