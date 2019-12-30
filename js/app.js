//初始化歌曲列表集合
var list;
//初始化当前正在播放歌曲的索引
var currentIndex = 0;
//创建播放器对象（并且转换为js对象）
var player = document.createElement('audio');
//服务器的访问地址
let baseUrl = 'http://hk.softeem.top/mymusic/';
//加载文档
$(function () {
    //发起ajax请求(异步刷新技术：局部刷新)
    $.get(baseUrl + 'list', function (data) {
        //将json字符串转换JS对象
        data = JSON.parse(data);
        //将获取的数据绑定给list
        list = data;
        //调用相应函数渲染数据到界面中
        randerUI(data)
    })
})
let openHtml = '<img class="music-info-img" src="../img/open.png">';
let stopHtml = '<img class="music-info-img" src="../img/stop.png">';
let lastHtml = '<img class="music-info-img-last" src="../img/last.png">';
let nextHtml = '<img class="music-info-img-next" src="../img/next.png">';

function randerUI(data) {
    //遍历集合中数据
    $.each(data, function (i, m) {
        let html = '';
        html += '<div class="item">'
        html += '<div class="item-icon">'
        html += '<img class="music-img" src="../img/icon.png">'
        html += '</div>'
        html += '<div class="item-name">' + m.name + '</div>'
        html += '<div class="item-size">' + fmtSize(m.size) + '</div>'
        html += '</div>'
        //将html代码转换为jquery对象
        let item = $(html);
        //将元素加入到指定位置
        $('.list').append(item);
    })
    // 页面默认显示第一首歌的信息

    $('.music-info-name').html(data[0].name);
    $('.item:eq(' + currentIndex + ')').addClass('active');
    $('.music-info-last').html(lastHtml);
    $('.music-info-stop').html(openHtml);
    $('.music-info-next').html(nextHtml);

    let m = list[currentIndex];
    player.src = baseUrl + m.path;
}
//将字节转换为MB
function fmtSize(size) {
    size = size / (1024 * 1024);
    //保留数值的小数点后一位
    size = size.toFixed(1);
    return size + 'MB';
}

//选中所有的歌曲列表项，并为其绑定点击事件
$('.list').on('click', '.item', function () {
    if (currentIndex == $(this).index()) {
        if (player.paused) {
            player.play()
            $('.music-info-stop').html(stopHtml);
            $('.music-img:eq(' + currentIndex + ')').addClass('play');
        } else {
            player.pause()
            $('.music-info-stop').html(openHtml);
            $('.music-img:eq(' + currentIndex + ')').removeClass('play');
        }
    } else {
        //移除上一首歌曲的播放状态
        $('.music-img:eq(' + currentIndex + ')').removeClass('play');
        $('.item:eq(' + currentIndex + ')').removeClass('active');

        //获取当前被点击歌曲项的索引
        currentIndex = $(this).index();
        $('.music-img:eq(' + currentIndex + ')').addClass('play');
        //获取歌曲对象
        let m = list[currentIndex];

        // 显示歌曲有关信息
        $('.music-info-name').html(m.name)
        // pauseed值为true
        //为播放器设置播放源

        player.src = baseUrl + m.path;

        player.play();

        $('.music-info-stop').html(stopHtml);
        // console.log()

        //为当前正在播放的歌曲列表项设计激活状态
        $(this).addClass('active');
    }

})

var now;
var total;
//监听播放器资源被加载事件
$(player).on('loadeddata', function () {
    now = this.currentTime;
    total = this.duration;
    $('.time-now').text(fmtTime(now));
    $('.time-total').text(fmtTime(total));
})

function fmtTime(time) {
    time = new Date(time * 1000);
    //获取分钟和秒钟
    var m = time.getMinutes();
    var s = time.getSeconds();

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return m + ':' + s;
}

//为播放器设置播放进度改变事件
$(player).on('timeupdate', function () {
    //获取歌曲的当前播放位置
    now = this.currentTime;
    //转换格式并将文本内容填充到指定位置
    $('.time-now').text(fmtTime(now));

    //计算当前播放进度的百分比
    var p = (now / total) * 100 + '%';
    $('.progress').css('width', p);

})

// 播放停止

$('.music-info-stop').on('click', '.music-info-img', function () {

    if (player.paused) {
        player.play();
        $('.music-info-stop').html(stopHtml);
        $('.music-img:eq(' + currentIndex + ')').addClass('play');

    } else {
        player.pause();
        $('.music-info-stop').html(openHtml);
        $('.music-img:eq(' + currentIndex + ')').removeClass('play');

    }
})

// 下一首
$('.music-info-next').on('click', '.music-info-img-next', function () {
    $('.music-info-stop').html(stopHtml);
    $('.item:eq(' + currentIndex + ')').removeClass('active');
    $('.music-img:eq(' + currentIndex + ')').removeClass('play');
    currentIndex++;
    if (currentIndex == list.length) {
        currentIndex = 0;
    }
    let m = list[currentIndex];
    player.src = baseUrl + m.path;
    player.play();
    $('.item:eq(' + currentIndex + ')').addClass('active');
    $('.music-info-name').html(list[currentIndex].name);
    $('.music-img:eq(' + currentIndex + ')').addClass('play');
})

// 上一首
$('.music-info-last').on('click', '.music-info-img-last', function () {
    $('.music-info-stop').html(stopHtml);
    $('.item:eq(' + currentIndex + ')').removeClass('active');
    $('.music-img:eq(' + currentIndex + ')').removeClass('play');
    currentIndex--;
    console.log(currentIndex)
    if (currentIndex < 0) {
        currentIndex = list.length - 1;
    }
    let m = list[currentIndex];
    player.src = baseUrl + m.path;
    player.play();
    $('.item:eq(' + currentIndex + ')').addClass('active');
    $('.music-info-name').html(list[currentIndex].name);
    $('.music-img:eq(' + currentIndex + ')').addClass('play');
})