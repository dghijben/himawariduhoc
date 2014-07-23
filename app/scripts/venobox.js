/* 
 * VenoBox - jQuery Plugin
 * version: 1.3.2
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: Creative Commons Attribution 3.0 License
 * License URI: http://creativecommons.org/licenses/by/3.0/
 * Copyright 2013-2014 Nicola Franchini - @nicolafranchini
 *
 */
(function(e){function P(){e.ajax({url:u,cache:false}).done(function(e){s.html('<div class="vbox-inline">'+e+"</div>");q(true)}).fail(function(){s.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');q(true)})}function H(){s.html('<iframe class="venoframe" src="'+u+'"></iframe>');q()}function B(){var e=u.split("/");var t=e[e.length-1];s.html('<iframe class="venoframe" src="http://player.vimeo.com/video/'+t+'"></iframe>');q()}function j(){var e=u.split("/");var t=e[e.length-1];s.html('<iframe class="venoframe" src="http://www.youtube.com/embed/'+t+'"></iframe>');q()}function F(){s.html('<div class="vbox-inline">'+e(u).html()+"</div>");q()}function I(){h=e(".vbox-content").find("img");h.one("load",function(){q()}).each(function(){if(this.complete)e(this).load()})}function q(t){t=t||false;if(t!=true){e(window).scrollTop(0)}C.html(S);s.find(">:first-child").addClass("figlio");e(".figlio").css("width",p).css("height",d).css("padding",v).css("background",m);f=s.outerHeight();l=e(window).height();if(f+80<l){c=(l-f)/2;s.css("margin-top",c);s.css("margin-bottom",c)}else{s.css("margin-top","40px");s.css("margin-bottom","40px")}s.animate({opacity:"1"},"slow")}function R(){if(e(".vbox-content").length){f=s.height();l=e(window).height();if(f+80<l){c=(l-f)/2;s.css("margin-top",c);s.css("margin-bottom",c)}else{s.css("margin-top","40px");s.css("margin-bottom","40px")}}}var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;e.fn.extend({venobox:function(f){var l={framewidth:"",frameheight:"",border:"0",bgcolor:"#fff",numeratio:false,infinigall:false};var f=e.extend(l,f);return this.each(function(){var l=e(this);l.addClass("vbox-item");l.data("framewidth",f.framewidth);l.data("frameheight",f.frameheight);l.data("border",f.border);l.data("bgcolor",f.bgcolor);l.data("numeratio",f.numeratio);l.data("infinigall",f.infinigall);l.click(function(f){function c(){y=l.data("gall");L=l.data("numeratio");D=l.data("infinigall");b=e('.vbox-item[data-gall="'+y+'"]');if(b.length>0&&L===true){k.html(b.index(l)+1+" / "+b.length);k.fadeIn()}else{k.fadeOut()}w=b.eq(b.index(l)+1);E=b.eq(b.index(l)-1);if(l.attr("title")){S=l.attr("title");C.fadeIn()}else{S="";C.fadeOut()}if(D===true){x=true;T=true;if(w.length<1){w=b.eq(0)}if(b.index(l)<1){E=b.eq(b.index(b.length))}}else{if(w.length>0){e(".vbox-next").css("display","block");x=true}else{e(".vbox-next").css("display","none");x=false}if(b.index(l)>0){e(".vbox-prev").css("display","block");T=true}else{e(".vbox-prev").css("display","none");T=false}}}f.stopPropagation();f.preventDefault();l=e(this);t=l.data("overlay");p=l.data("framewidth");d=l.data("frameheight");v=l.data("border");m=l.data("bgcolor");x=false;T=false;N=false;u=l.attr("href");a=e(window).scrollTop();a=-a;e("body").wrapInner('<div class="vwrap"></div>');r=e(".vwrap");o='<div class="vbox-overlay" style="background:'+t+'"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>';e("body").append(o);n=e(".vbox-overlay");i=e(".vbox-container");s=e(".vbox-content");k=e(".vbox-num");C=e(".vbox-title");s.html("");s.css("opacity","0");c();n.css({opacity:"1","min-height":e(window).outerHeight()+130});if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){r.css({position:"fixed",top:a,opacity:"0"}).data("top",a)}else{r.css({position:"fixed",top:a}).data("top",a);e(window).scrollTop(0)}n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.css({"min-height":e(window).outerHeight(),height:"auto"});if(l.data("type")=="iframe"){H()}else if(l.data("type")=="inline"){F()}else if(l.data("type")=="ajax"){P()}else if(l.data("type")=="vimeo"){B()}else if(l.data("type")=="youtube"){j()}else{s.html('<img src="'+u+'">');I()}});e("body").keydown(function(r){if(N)return;if(r.keyCode==37&&T==true){N=true;t=E.data("overlay");p=E.data("framewidth");d=E.data("frameheight");v=E.data("border");m=E.data("bgcolor");u=E.attr("href");if(E.attr("title")){S=E.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(E.data("type")=="iframe"){H()}else if(E.data("type")=="inline"){F()}else if(E.data("type")=="ajax"){P()}else if(E.data("type")=="youtube"){j()}else if(E.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=E;c();N=false})}if(r.keyCode==39&&x==true){N=true;t=w.data("overlay");p=w.data("framewidth");d=w.data("frameheight");v=w.data("border");m=w.data("bgcolor");u=w.attr("href");if(w.attr("title")){S=w.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(w.data("type")=="iframe"){H()}else if(w.data("type")=="inline"){F()}else if(w.data("type")=="ajax"){P()}else if(w.data("type")=="youtube"){j()}else if(w.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=w;c();N=false})}});e(".vbox-next").click(function(){t=w.data("overlay");p=w.data("framewidth");d=w.data("frameheight");v=w.data("border");m=w.data("bgcolor");u=w.attr("href");if(w.attr("title")){S=w.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(w.data("type")=="iframe"){H()}else if(w.data("type")=="inline"){F()}else if(w.data("type")=="ajax"){P()}else if(w.data("type")=="youtube"){j()}else if(w.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=w;c()})});e(".vbox-prev").click(function(){t=E.data("overlay");p=E.data("framewidth");d=E.data("frameheight");v=E.data("border");m=E.data("bgcolor");u=E.attr("href");if(E.attr("title")){S=E.attr("title")}else{S=""}if(t===undefined){t=""}n.css("min-height",e(window).outerHeight()+130);s.animate({opacity:0},500,function(){n.css("min-height",e(window).outerHeight()).css("background",t);if(E.data("type")=="iframe"){H()}else if(E.data("type")=="inline"){F()}else if(E.data("type")=="ajax"){P()}else if(E.data("type")=="youtube"){j()}else if(E.data("type")=="vimeo"){B()}else{s.html('<img src="'+u+'">');I()}l=E;c()})});e(".vbox-close, .vbox-overlay").click(function(t){M=".figlio";O=".vbox-prev";A=".vbox-next";_=".figlio *";if(!e(t.target).is(M)&&!e(t.target).is(A)&&!e(t.target).is(O)&&!e(t.target).is(_)){n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.remove();if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){e(".vwrap").css("opacity","1");e(".vwrap").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e(".vwrap").children().unwrap();e(window).scrollTop(-a)})}else{e(".vwrap").children().unwrap();e(window).scrollTop(-a)}N=false});n.css("opacity","0")}});return false})})}});e(window).resize(function(){R()})})(jQuery)