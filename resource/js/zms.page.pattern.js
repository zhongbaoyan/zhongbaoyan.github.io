// <script src="js/zms.page.pattern.js"></script>
// "  --->  \"

let path = "";
if (directoryDepth != null) {
    switch (directoryDepth) {
        case 1:
            path = "../";
            break;
        case 2:
            path = "../../";
            break;
        case 3:
            path = "../../../";
            break;
        case 0:
        default:
            path = "";
            break;
    }
}

/**
 * 判断字符是否为空的方法
 */
function isEmpty(obj) {
    return (typeof obj == "undefined" || obj == null || obj == "");
}

/**
 * AZ:添加分享按钮
 */
function insertShareButton() {
    let essayTitle = document.title;
    let essaySummary = document.title;
    let essayUrl = window.location.href;
    let essayPic = 'http://www.zhoumushui.com/img/logo/1.jpg'; // This
    document.getElementById("menu").innerHTML = "<li class='mfb-component__wrap'><a class='mfb-component__button--main'><i class='mfb-component__main-icon--resting zmdi zmdi-share'></i><i class='mfb-component__main-icon--active zmdi zmdi-close'></i></a><ul class='mfb-component__list'><li><a data-mfb-label='分享到QQ空间' class='mfb-component__button--child' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url= " + essayUrl + "&title=" + essayTitle + "&pics=" + essayPic + "&summary=" + essaySummary + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-star-circle'></i></a></li><li> <a data-mfb-label='分享到新浪微博' class='mfb-component__button--child' href='http://service.weibo.com/share/share.php?title= " + essayTitle + "&url=" + essayUrl + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-eye'></i></a></li><li><a data-mfb-label='分享到豆瓣' class='mfb-component__button--child' href='https://www.douban.com/share/service?image= " + essayPic + "&href=" + essayUrl + "&name=" + essayTitle + "&text=" + essaySummary + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-flower-alt'></i></a></li><li><a data-mfb-label='剪藏到印象笔记' class='mfb-component__button--child' href='https://app.yinxiang.com/clip.action?url=" + essayUrl + "&title=" + essayTitle + "' target='_blank\"><i class='mfb-component__child-icon zmdi zmdi-evernote'></i></a></li></ul></li>"
}

/**
 * AZ:添加脚部
 */
function insertFooter() {
    document.getElementById("footer").innerHTML = "&copy; <span id='footer-copyright'></span> zhoumushui<ul class='footer__menu'><li><div class='sucaihuo-container'><section class='cd-section toolbox-link'>" +
    "<span id='busuanzi_container_site_pv'>PV: <span id='busuanzi_value_site_pv'></span></span><span id='busuanzi_container_site_uv'> | UV: <span id='busuanzi_value_site_uv'></span></span></ul>"
}

function setCopyRightYear() {
    document.getElementById("footer-copyright").innerHTML = "" + new Date().getFullYear();
    // $("#footer-copyright").html(new Date().getFullYear());
}

function GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

insertFooter();
setCopyRightYear();
//insertShareButton();
//insertIEWarning();