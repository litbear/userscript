// ==UserScript==
// @name        tistory网站优化
// @namespace   https://github.com/litbear
// @description tistory 启用邮件，查看高质量图片
// @include     http://*.tistory.com/*
// @include     http://cfile\d+.uf.tistory.com/*
// @include     http://www.marspark.net/*
// @version     1.3
// @grant       none
// @updateURL   https://github.com/litbear/userscript/raw/master/tistory%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96/tistory%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96.user.js
// @downloadURL https://github.com/litbear/userscript/raw/master/tistory%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96/tistory%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96.user.js
// ==/UserScript==

(function() {
    //console.log('initialize');
    // 重新启用右键菜单和鼠标选择
    contextMenu();
    // 优化图片大小
    if (/http:\/\/cfile\d+.uf.tistory.com\/.*/.test(location.href)) {
        zoomPlus();
    }
    //console.log('finish');
})();

function contextMenu() {
    document.oncontextmenu = new Function('return true');
    document.ondragstart = new Function('return true');
    document.onselectstart = new Function('return true');
    document.body.style.MozUserSelect = '-moz-all';
}

function zoomPlus() {
    //console.log('preg');

    var regex = /image/;

    if (regex.test(location.href))
        location.href = location.href.replace(regex, "original");
}