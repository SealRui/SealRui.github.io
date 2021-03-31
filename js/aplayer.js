$(function () {
    var ap = new APlayer({
        element: document.getElementById('aplayer'),
        narrow: false,
        fixed: true,
        /*自动播放，默认值为false，true为开启自动播放*/
        autoplay: false,
        mutex: true,
        lrcType: 3,
    });
    /*
      id: 歌曲/专辑/歌单对应的id。注意这里需要是歌曲原本的id,不是你自己歌单中点击后显示的。 （必须）
      server: 音乐平台， 大致支持以下几个，我只测了一下网易音乐和虾米音乐。（必须）
        netease(网易云音乐)
        tencent(qq音乐)
        xiami(虾米音乐)
        kugou(酷狗音乐)
        baidu(百度)
      type:请求类型（必须）
        song(单曲)
        album(专辑)
        playlist(歌单)
        search(搜索)
        artist
    */
    $.ajax({
        // 歌单地址
        url: 'https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=2580025592',
        success: function (list) {
            ap.list.add(list);
        }
    });
});