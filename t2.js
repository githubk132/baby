function fadeIn() {
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    var fadeInDelay = 0; // Biến này sẽ xác định thời gian chờ trước khi áp dụng hiệu ứng fadeIn

    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + '</span>');

        if (i >= 3 && i <= 10) { // "my baby" bắt đầu từ ký tự thứ 3 trong chuỗi
            fadeInDelay = 6200; // Hiển thị "my baby" sau 5 giây
        } else if (i >= 16 && i <= 39) { // "I love you oh i love so much..." bắt đầu từ ký tự thứ 16 trong chuỗi
            fadeInDelay -= 500; // Hiển thị "I love you oh i love so much..." sớm hơn 1 giây
        } else {
            fadeInDelay += 400; // Nếu không, tăng thời gian chờ thêm 400ms
        }
    }

    $('.content').removeClass('c').html(html.join(''));

    for (i = 0; i < html.length; i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            }, fadeInDelay);
            fadeInDelay += 400; // Tăng thời gian chờ thêm 400ms cho mỗi chữ
        }(i);
    }
}

document.querySelector(".content").onclick = () => {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
    document.querySelector("#heart").hidden = false;
    fadeIn();
}
