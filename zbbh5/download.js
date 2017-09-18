var width = screen.width;
// var height = screen.height;
// if(width<639&&width>=375){
// $('.pic1').attr('src','mipmap-xxhdpi/qzzbb2.png');
// $('.pic2').attr('src','mipmap-xxhdpi/download2.png');
// }
// if(width<375){
//     $('.pic1').attr('src','mipmap-xxxhdpi/qzzbb3.png');
//     $('.pic2').attr('src','mipmap-xxxhdpi/download3.png');
// }
function is_WeixinBrowser(){
    var ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua))?true:false;
}
$('.button').on('click',function(){
    if(is_WeixinBrowser()){
        alert('请通过系统浏览器下载');
    }else{
        location.href = "http://www.baidu.com";
    }
});
