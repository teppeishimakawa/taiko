var cnt=0;
var score=0;
var old_time;
var def;
var def_total=0;
var day;
var defdef;

(function() {
    'use strict';

    var isSP, ctx, xml, data, frequencyRatioTempered, keyboards;

    // コンテキストを生成
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();

    // 音源ファイルをバイナリデータとして取得
    xml = new XMLHttpRequest();
    xml.responseType = 'arraybuffer';
    xml.open('GET', './pon.mp3', true);
    xml.onload = function()
    {
        // 音源ファイルをバイナリデータからデコード
        ctx.decodeAudioData(
            xml.response,
            function(dec_data) {
                data = dec_data;
            },
            function(e) {
                alert(e.err);
            }
        );
    };
    xml.send();

    isSP = typeof window.ontouchstart !== 'undefined';

        document.getElementById("btn").addEventListener(isSP ? 'touchstart' : 'click', function()
        {
            var bufferSource;
            bufferSource = ctx.createBufferSource();
            bufferSource.buffer = data;
            bufferSource.connect(ctx.destination);
            bufferSource.start(0);

            try{navigator.vibrate(5000)}catch(e){return false}

            cnt++;

            day=new Date();

            console.log(defdef);

              var num_ls_time=parseInt(localStorage.getItem('ls_time'));
              var num_ls_def=parseInt(localStorage.getItem('ls_def'));

             if(num_ls_time == null)
                {
                 def=0
                }else
                {
                def=day.getTime() - num_ls_time;
                }

             if(num_ls_def == null)
                {
                 defdef=0
                }else
                {
                defdef=Math.min
                 (
                  Math.abs(def - num_ls_def),
                  Math.abs(def % num_ls_def),Math.abs(num_ls_def % def)
                 );
                }

                console.log(Math.abs(def - num_ls_def));
                console.log(Math.abs(def % num_ls_def));
                console.log(Math.abs(num_ls_def % def));

            if(cnt > 2){
             def_total = def_total + defdef;
            }


            old_time=day.getTime();
            localStorage.setItem('ls_time', old_time);
            localStorage.setItem('ls_def', def);

            console.log(def_total);

        });

    })
();

document.getElementById("clr").onclick=localStorage.clear();

document.getElementById("kekka").onclick=function()
{
document.getElementById("disp").innerHTML=100 - (def_total/cnt/10);
}


