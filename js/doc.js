!function(t){function e(o){if(i[o])return i[o][n];var r=i[o]={exports:{},id:o,loaded:!1};return t[o].call(r[n],r,r[n],e),r.loaded=!0,r[n]}var n="exports",i={},o={0:0};return e.e=function(t,n){if(0===o[t])return n.call(null,e);if(void 0!==o[t])o[t].push(n);else{o[t]=[n];var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=e.p+"js/"+t+".js",i.appendChild(r)}},e.modules=t,e.cache=i,e.p="",window.webpackJsonp=function(n,i){for(var r,a,s=[];n.length;)a=n.shift(),o[a]&&s.push.apply(s,o[a]),o[a]=0;for(r in i)t[r]=i[r];for(;s.length;)s.shift().call(null,e)},e(0)}([function(t,e,n){n(1),n(3)(function(){n(9)})},function(t){!function(t,e,n,i,o,r,a){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,r=e.createElement(n),a=e.getElementsByTagName(n)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga");var e=window.ga;e("create","UA-46921629-1","webpack.github.io"),e("send","pageview"),t.exports=function(){return window.ga.apply(window.ga,arguments)}},function(t){t.exports=function(t,e){var n=new XMLHttpRequest;n.open("GET","http://github-wiki.herokuapp.com/webpack/docs/"+t,!0),n.onreadystatechange=function(){return 4===n.readyState?200!==n.status?e(new Error("Statuscode is "+n.status)):e(null,n.responseText):void 0},n.send(null)}},function(t){/*!
	 * contentloaded.js
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */
function e(t,e){var n=!1,i=!0,o=t.document,r=o.documentElement,a=o.addEventListener?"addEventListener":"attachEvent",s=o.addEventListener?"removeEventListener":"detachEvent",c=o.addEventListener?"":"on",l=function(i){("readystatechange"!=i.type||"complete"==o.readyState)&&(("load"==i.type?t:o)[s](c+i.type,l,!1),!n&&(n=!0)&&e.call(t,i.type||i))},u=function(){try{r.doScroll("left")}catch(t){return void setTimeout(u,50)}l("poll")};if("complete"==o.readyState)e.call(t,"lazy");else{if(o.createEventObject&&r.doScroll){try{i=!t.frameElement}catch(h){}i&&u()}o[a](c+"DOMContentLoaded",l,!1),o[a](c+"readystatechange",l,!1),t[a](c+"load",l,!1)}}t.exports=function(t){e(window,t)}},function(t){t.exports=function(t){return t?t.toLowerCase().replace(/[^a-z0-9\.]/g," "):t}},,,,,function(t,e,n){function i(){document.body.addEventListener("click",function(t){if("A"===t.target.tagName&&h.test(t.target.getAttribute("href"))){var e=t.target.getAttribute("href");h.lastIndex=0;var n=h.exec(e)[1];document.title=c(n),m=n,history.pushState(null,null,e),s(n,!1),t.preventDefault()}},!1)}function o(){if(document.querySelectorAll)for(var t=document.querySelectorAll('a[href$=".html"]'),e=0;e<t.length;e++){var n=t[e],i=n.getAttribute("href");if(n.classList&&h.test(i)){h.lastIndex=0;var o=h.exec(i)[1];m===o^n.classList.contains("active")&&n.classList.toggle("active")}}}function r(t){var e=/\/([a-z0-9\-]+)\.html$/i.exec(location.pathname);if(e){var n=e[1];(n!==m||t)&&(m=n,s(n,t))}}function a(){var t=n(1),e=window.location.protocol+"//"+window.location.hostname+window.location.pathname+window.location.search;t("set","location",e),t("set","title",document.title),t("send","pageview")}function s(t,e){var r=_.get(t);return r?(p.setAttribute("href",g.replace(/XXX/g,t)),f.innerHTML=c(t),d.innerHTML=r,e||a(),void o()):(!e&&document.body.classList&&document.body.classList.add("loading"),l(t,function(r,s){function l(n){_.set(t,n),document.body.classList&&document.body.classList.remove("loading"),p.setAttribute("href",g.replace(/XXX/g,t)),f.innerHTML=c(t),d.innerHTML=n,window.scrollTo(0,0),e||a(),e&&i(),o()}if(r){if(e)return void(document.body.classList&&document.body.classList.remove("loading"));window.location.reload()}else n.e(1,function(t){var e=[t(7)];(function(t){l(t(s))}).apply(null,e)})}),void n.e(1,function(t){[t(7)]}))}var c=n(4),l=n(2),u=n(17),h=/^([a-z0-9\-\.]+)\.html$/i,d=document.getElementById("wiki"),f=document.getElementById("wikititle"),p=document.getElementById("wikieditlink"),_=u({max:10,maxAge:3e5}),m="";window.addEventListener("popstate",function(){r(!1)}),o(),r(!0);var g="https://github.com/webpack/docs/wiki/XXX/_edit"},,,,,,,,function(t){!function(){function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function n(){return 1}function i(t){return this instanceof i?("number"==typeof t&&(t={max:t}),t||(t={}),this._max=t.max,(!this._max||"number"!=typeof this._max||this._max<=0)&&(this._max=1/0),this._lengthCalculator=t.length||n,"function"!=typeof this._lengthCalculator&&(this._lengthCalculator=n),this._allowStale=t.stale||!1,this._maxAge=t.maxAge||null,this._dispose=t.dispose,void this.reset()):new i(t)}function o(t,e,n){var i=t._cache[e];return i&&(t._maxAge&&Date.now()-i.now>t._maxAge?(c(t,i),t._allowStale||(i=void 0)):n&&r(t,i),i&&(i=i.value)),i}function r(t,e){s(t,e),e.lu=t._mru++,t._lruList[e.lu]=e}function a(t){for(;t._lru<t._mru&&t._length>t._max;)c(t,t._lruList[t._lru])}function s(t,e){for(delete t._lruList[e.lu];t._lru<t._mru&&!t._lruList[t._lru];)t._lru++}function c(t,e){e&&(t._dispose&&t._dispose(e.key,e.value),t._length-=e.length,t._itemCount--,delete t._cache[e.key],s(t,e))}function l(t,e,n,i,o){this.key=t,this.value=e,this.lu=n,this.length=i,this.now=o}"object"==typeof t&&t.exports?t.exports=i:this.LRUCache=i,Object.defineProperty(i.prototype,"max",{set:function(t){(!t||"number"!=typeof t||0>=t)&&(t=1/0),this._max=t,this._length>this._max&&a(this)},get:function(){return this._max},enumerable:!0}),Object.defineProperty(i.prototype,"lengthCalculator",{set:function(t){if("function"!=typeof t){this._lengthCalculator=n,this._length=this._itemCount;for(var e in this._cache)this._cache[e].length=1}else{this._lengthCalculator=t,this._length=0;for(var e in this._cache)this._cache[e].length=this._lengthCalculator(this._cache[e].value),this._length+=this._cache[e].length}this._length>this._max&&a(this)},get:function(){return this._lengthCalculator},enumerable:!0}),Object.defineProperty(i.prototype,"length",{get:function(){return this._length},enumerable:!0}),Object.defineProperty(i.prototype,"itemCount",{get:function(){return this._itemCount},enumerable:!0}),i.prototype.forEach=function(t,e){e=e||this;for(var n=0,i=this._mru-1;i>=0&&n<this._itemCount;i--)if(this._lruList[i]){n++;var o=this._lruList[i];this._maxAge&&Date.now()-o.now>this._maxAge&&(c(this,o),this._allowStale||(o=void 0)),o&&t.call(e,o.value,o.key,this)}},i.prototype.keys=function(){for(var t=new Array(this._itemCount),e=0,n=this._mru-1;n>=0&&e<this._itemCount;n--)if(this._lruList[n]){var i=this._lruList[n];t[e++]=i.key}return t},i.prototype.values=function(){for(var t=new Array(this._itemCount),e=0,n=this._mru-1;n>=0&&e<this._itemCount;n--)if(this._lruList[n]){var i=this._lruList[n];t[e++]=i.value}return t},i.prototype.reset=function(){if(this._dispose&&this._cache)for(var t in this._cache)this._dispose(t,this._cache[t].value);this._cache=Object.create(null),this._lruList=Object.create(null),this._mru=0,this._lru=0,this._length=0,this._itemCount=0},i.prototype.dump=function(){return this._cache},i.prototype.dumpLru=function(){return this._lruList},i.prototype.set=function(t,n){if(e(this._cache,t))return this._dispose&&this._dispose(t,this._cache[t].value),this._maxAge&&(this._cache[t].now=Date.now()),this._cache[t].value=n,this.get(t),!0;var i=this._lengthCalculator(n),o=this._maxAge?Date.now():0,r=new l(t,n,this._mru++,i,o);return r.length>this._max?(this._dispose&&this._dispose(t,n),!1):(this._length+=r.length,this._lruList[r.lu]=this._cache[t]=r,this._itemCount++,this._length>this._max&&a(this),!0)},i.prototype.has=function(t){if(!e(this._cache,t))return!1;var n=this._cache[t];return this._maxAge&&Date.now()-n.now>this._maxAge?!1:!0},i.prototype.get=function(t){return o(this,t,!0)},i.prototype.peek=function(t){return o(this,t,!1)},i.prototype.pop=function(){var t=this._lruList[this._lru];return c(this,t),t||null},i.prototype.del=function(t){c(this,this._cache[t])}}()}]);