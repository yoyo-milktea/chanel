"use strict";function setCookie(e,t,o){if(o){var i=new Date;i.setTime(i.getTime()-288e5+1e3*o),document.cookie=e+"="+t+";expires="+i}else document.cookie=e+"="+t}function getCookie(e){str="";for(var t=document.cookie.split("; "),o=0;o<t.length;o++){var i=t[o].split("=");i[0]===e&&(str=i[1])}return str}