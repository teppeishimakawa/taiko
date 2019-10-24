var cnt=0;
var score=0;
var day=new Date();
var old_time;
var def;
var def_total=0;


(function() {
    'use strict';

    var isSP, ctx, xml, data, frequencyRatioTempered, keyboards;

    // コンテキストを生成
    window.AudioContext = window.AudioContext || window.webkitAudioContext;


        document.getElementById("btn").addEventListener(isSP ? 'touchstart' : 'click', function()
        {



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



            
            var bufferSource;
            bufferSource = ctx.createBufferSource();
            bufferSource.buffer = data;
            bufferSource.connect(ctx.destination);
            bufferSource.start(0);

            try{navigator.vibrate( 500 )}catch(e){return false}

            cnt++;

            if(localStorage.getItem('ls_time'))
             {
             def=day.getTime() - localStorage.getItem('ls_time');
             def_total+=def;
             }else{return false}

            old_time=day.getTime();
            localStorage.setItem('ls_time', old_time);

            console.log(def_total);
            console.log(cnt);
        });

    })
();

