"use strict";function nav(){var i="",n=new XMLHttpRequest;n.open("GET","../lib/nav.json"),n.send(),n.onload=function(){JSON.parse(n.responseText).forEach(function(n){i+="<li>\n        <span>".concat(n.team,'</span>\n        <div class="ol">\n        '),n.info.forEach(function(n){i+="<div>\n            <em>".concat(n.title,"</em>\n            <ul>"),n.detail.forEach(function(n){i+="<li>".concat(n,"</li>")}),i+="</ul>",i+="</div>"}),i+="</div>\n    </li>"});i+="<li>\n    <span>特别推荐</span>\n</li>",$(".nav > ul").html(i)}}