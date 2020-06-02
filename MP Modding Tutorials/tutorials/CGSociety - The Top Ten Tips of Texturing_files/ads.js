/*
 * DFP - Small Business
 * Google Publisher Tag (GPT)
 * http://support.google.com/dfp_sb/bin/topic.py?hl=en&topic=1651546
 * 
 * created: 13th Jan 2012
 * 
 */

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();


/*
 * AdRoll
 * https://www.adroll.com
 * 
 * created: 26th Feb 2013
 * 
 */

adroll_adv_id = "H5UZ6XPSO5FFLAYVN5FLMU";
adroll_pix_id = "77BDG4ZPIVBLVO2HMYC57B";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload){oldonload()}};
}());