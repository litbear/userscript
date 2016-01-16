// ==UserScript==
// @name         Weibo.com(新浪微博) Thumbnail-InNewWindow Auto Larger
// @description  新浪微博-缩略图-在新窗口打开时-自动跳转大图
// @version      0.4.1411130505
// @author       DanoR
// @namespace    http://weibo.com/zheung
// @grant        none
// @include      *.sinaimg.cn/*
// ==/UserScript==

var regex = /square|thumbnail|mw690|bmiddle|thumb150|sq480|small/;

if (regex.test(location.href))
//不用一一列举所有缩略图，其实分段处理就可以了
    location.href = location.href.replace(regex, "large");