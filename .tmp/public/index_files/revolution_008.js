/************************************************
 * REVOLUTION 5.2 EXTENSION - LAYER ANIMATION
 * @version: 2.2.1 (23.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

!function(a){function e(a,e,t,i,n,o,r){var d=a.find(e);d.css("borderWidth",o+"px"),d.css(t,0-o+"px"),d.css(i,"0px solid transparent"),d.css(n,r)}var t=jQuery.fn.revolution;t.is_mobile();jQuery.extend(!0,t,{animcompleted:function(a,e){var i=a.data("videotype"),n=a.data("autoplay"),o=a.data("autoplayonlyfirsttime");void 0!=i&&"none"!=i&&(1==n||"true"==n||"on"==n||"1sttime"==n||o?(t.playVideo(a,e),t.toggleState(a.data("videotoggledby")),(o||"1sttime"==n)&&(a.data("autoplayonlyfirsttime",!1),a.data("autoplay","off"))):("no1sttime"==n&&a.data("autoplay","on"),t.unToggleState(a.data("videotoggledby"))))},handleStaticLayers:function(a,e){var t=parseInt(a.data("startslide"),0),i=parseInt(a.data("endslide"),0);0>t&&(t=0),0>i&&(i=e.slideamount),0===t&&i===e.slideamount-1&&(i=e.slideamount+1),a.data("startslide",t),a.data("endslide",i)},animateTheCaptions:function(a,e,i,n){var o="carousel"===e.sliderType?0:e.width/2-e.gridwidth[e.curWinRange]*e.bw/2,r=0,d=a.data("index");e.layers=e.layers||new Object,e.layers[d]=e.layers[d]||a.find(".tp-caption"),e.layers["static"]=e.layers["static"]||e.c.find(".tp-static-layers").find(".tp-caption");var s=new Array;if(e.conh=e.c.height(),e.conw=e.c.width(),e.ulw=e.ul.width(),e.ulh=e.ul.height(),e.debugMode){a.addClass("indebugmode"),a.find(".helpgrid").remove(),e.c.find(".hglayerinfo").remove(),a.append('<div class="helpgrid" style="width:'+e.gridwidth[e.curWinRange]*e.bw+"px;height:"+e.gridheight[e.curWinRange]*e.bw+'px;"></div>');var l=a.find(".helpgrid");l.append('<div class="hginfo">Zoom:'+Math.round(100*e.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+e.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+e.gridwidth[e.curWinRange]+"x"+e.gridheight[e.curWinRange]+"</div>"),e.c.append('<div class="hglayerinfo"></div>'),l.append('<div class="tlhg"></div>')}s&&jQuery.each(s,function(a){var e=jQuery(this);punchgs.TweenLite.set(e.find(".tp-videoposter"),{autoAlpha:1}),punchgs.TweenLite.set(e.find("iframe"),{autoAlpha:0})}),e.layers[d]&&jQuery.each(e.layers[d],function(a,e){s.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){s.push(e)}),s&&jQuery.each(s,function(a){t.animateSingleCaption(jQuery(this),e,o,r,a,i)});var p=jQuery("body").find("#"+e.c.attr("id")).find(".tp-bannertimer");p.data("opt",e),void 0!=n&&setTimeout(function(){n.resume()},30)},animateSingleCaption:function(a,r,s,f,b,x,T){var L=x,W=g(a,r,"in",!0),j=a.data("_pw")||a.closest(".tp-parallax-wrap"),C=a.data("_lw")||a.closest(".tp-loop-wrap"),R=a.data("_mw")||a.closest(".tp-mask-wrap"),k=a.data("responsive")||"on",I=a.data("responsive_offset")||"on",_=a.data("basealign")||"grid",Q="grid"===_?r.width:r.ulw,S="grid"===_?r.height:r.ulh,z=jQuery("body").hasClass("rtl");if(a.data("_pw")||(a.data("staticlayer")?a.data("_li",a.closest(".tp-static-layers")):a.data("_li",a.closest(".tp-revslider-slidesli")),a.data("slidelink",a.hasClass("slidelink")),a.data("_pw",j),a.data("_lw",C),a.data("_mw",R)),"fullscreen"==r.sliderLayout&&(f=S/2-r.gridheight[r.curWinRange]*r.bh/2),("on"==r.autoHeight||void 0!=r.minHeight&&r.minHeight>0)&&(f=r.conh/2-r.gridheight[r.curWinRange]*r.bh/2),0>f&&(f=0),r.debugMode){a.closest("li").find(".helpgrid").css({top:f+"px",left:s+"px"});var M=r.c.find(".hglayerinfo");a.on("hover, mouseenter",function(){var e="";a.data()&&jQuery.each(a.data(),function(a,t){"object"!=typeof t&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+a+":</span>"+t+"</span>&nbsp; &nbsp; ")}),M.html(e)})}var O=c(a.data("visibility"),r)[r.forcedWinRange]||c(a.data("visibility"),r)||"on";if("off"==O||Q<r.hideCaptionAtLimit&&"on"==a.data("captionhidden")||Q<r.hideAllCaptionAtLimit?a.addClass("tp-hidden-caption"):a.removeClass("tp-hidden-caption"),a.data("layertype","html"),0>s&&(s=0),void 0!=a.data("thumbimage")&&void 0==a.data("videoposter")&&a.data("videoposter",a.data("thumbimage")),a.find("img").length>0){var H=a.find("img");a.data("layertype","image"),0==H.width()&&H.css({width:"auto"}),0==H.height()&&H.css({height:"auto"}),void 0==H.data("ww")&&H.width()>0&&H.data("ww",H.width()),void 0==H.data("hh")&&H.height()>0&&H.data("hh",H.height());var B=H.data("ww"),A=H.data("hh"),D="slide"==_?r.ulw:r.gridwidth[r.curWinRange],F="slide"==_?r.ulh:r.gridheight[r.curWinRange],B=c(H.data("ww"),r)[r.curWinRange]||c(H.data("ww"),r)||"auto",A=c(H.data("hh"),r)[r.curWinRange]||c(H.data("hh"),r)||"auto",P="full"===B||"full-proportional"===B,X="full"===A||"full-proportional"===A;if("full-proportional"===B){var Y=H.data("owidth"),V=H.data("oheight");V/F>Y/D?(B=D,A=V*(D/Y)):(A=F,B=Y*(F/V))}else B=P?D:parseFloat(B),A=X?F:parseFloat(A);void 0==B&&(B=0),void 0==A&&(A=0),"off"!==k?("grid"!=_&&P?H.width(B):H.width(B*r.bw),"grid"!=_&&X?H.height(A):H.height(A*r.bh)):(H.width(B),H.height(A))}"slide"===_&&(s=0,f=0);var N="html5"==a.data("audio")?"audio":"video";if(a.hasClass("tp-videolayer")||a.hasClass("tp-audiolayer")||a.find("iframe").length>0||a.find(N).length>0){if(a.data("layertype","video"),t.manageVideoLayer&&t.manageVideoLayer(a,r,x,L),!x&&!L){a.data("videotype");t.resetVideo&&t.resetVideo(a,r)}var $=a.data("aspectratio");void 0!=$&&$.split(":").length>1&&t.prepareCoveredVideo($,r,a);var H=a.find("iframe")?a.find("iframe"):H=a.find(N),Z=a.find("iframe")?!1:!0,G=a.hasClass("coverscreenvideo");H.css({display:"block"}),void 0==a.data("videowidth")&&(a.data("videowidth",H.width()),a.data("videoheight",H.height()));var U,B=c(a.data("videowidth"),r)[r.curWinRange]||c(a.data("videowidth"),r)||"auto",A=c(a.data("videoheight"),r)[r.curWinRange]||c(a.data("videoheight"),r)||"auto";B=parseFloat(B),A=parseFloat(A),void 0===a.data("cssobj")&&(U=v(a,0),a.data("cssobj",U));var q=u(a.data("cssobj"),r);if("auto"==q.lineHeight&&(q.lineHeight=q.fontSize+4),a.hasClass("fullscreenvideo")||G){s=0,f=0,a.data("x",0),a.data("y",0);var E=S;"on"==r.autoHeight&&(E=r.conh),a.css({width:Q,height:E})}else punchgs.TweenLite.set(a,{paddingTop:Math.round(q.paddingTop*r.bh)+"px",paddingBottom:Math.round(q.paddingBottom*r.bh)+"px",paddingLeft:Math.round(q.paddingLeft*r.bw)+"px",paddingRight:Math.round(q.paddingRight*r.bw)+"px",marginTop:q.marginTop*r.bh+"px",marginBottom:q.marginBottom*r.bh+"px",marginLeft:q.marginLeft*r.bw+"px",marginRight:q.marginRight*r.bw+"px",borderTopWidth:Math.round(q.borderTopWidth*r.bh)+"px",borderBottomWidth:Math.round(q.borderBottomWidth*r.bh)+"px",borderLeftWidth:Math.round(q.borderLeftWidth*r.bw)+"px",borderRightWidth:Math.round(q.borderRightWidth*r.bw)+"px",width:B*r.bw+"px",height:A*r.bh+"px"});(0==Z&&!G||1!=a.data("forcecover")&&!a.hasClass("fullscreenvideo")&&!G)&&(H.width(B*r.bw),H.height(A*r.bh))}var J=a.data("slidelink")||!1;a.find(".tp-resizeme, .tp-resizeme *").each(function(){w(jQuery(this),r,"rekursive",k)}),a.hasClass("tp-resizeme")&&a.find("*").each(function(){w(jQuery(this),r,"rekursive",k)}),w(a,r,0,k);var K=a.outerHeight(),aa=a.css("backgroundColor");e(a,".frontcorner","left","borderRight","borderTopColor",K,aa),e(a,".frontcornertop","left","borderRight","borderBottomColor",K,aa),e(a,".backcorner","right","borderLeft","borderBottomColor",K,aa),e(a,".backcornertop","right","borderLeft","borderTopColor",K,aa),"on"==r.fullScreenAlignForce&&(s=0,f=0);var ea=a.data("arrobj");if(void 0===ea){var ea=new Object;ea.voa=c(a.data("voffset"),r)[r.curWinRange]||c(a.data("voffset"),r)[0],ea.hoa=c(a.data("hoffset"),r)[r.curWinRange]||c(a.data("hoffset"),r)[0],ea.elx=c(a.data("x"),r)[r.curWinRange]||c(a.data("x"),r)[0],ea.ely=c(a.data("y"),r)[r.curWinRange]||c(a.data("y"),r)[0]}var ta=0==ea.voa.length?0:ea.voa,ia=0==ea.hoa.length?0:ea.hoa,na=0==ea.elx.length?0:ea.elx,oa=0==ea.ely.length?0:ea.ely,ra=a.outerWidth(!0),da=a.outerHeight(!0);0==ra&&0==da&&(ra=r.ulw,da=r.ulh);var sa="off"!==I?parseInt(ta,0)*r.bw:parseInt(ta,0),la="off"!==I?parseInt(ia,0)*r.bw:parseInt(ia,0),pa="grid"===_?r.gridwidth[r.curWinRange]*r.bw:Q,ha="grid"===_?r.gridheight[r.curWinRange]*r.bw:S;"on"==r.fullScreenAlignForce&&(pa=r.ulw,ha=r.ulh),na="center"===na||"middle"===na?pa/2-ra/2+la:"left"===na?la:"right"===na?pa-ra-la:"off"!==I?na*r.bw:na,oa="center"==oa||"middle"==oa?ha/2-da/2+sa:"top"==oa?sa:"bottom"==oa?ha-da-sa:"off"!==I?oa*r.bw:oa,z&&!J&&(na+=ra),J&&(na=0);var ca=a.data("lasttriggerstate"),ga=a.data("triggerstate"),ma=void 0!=a.data("start")?a.data("start"):100,va=a.data("end"),ua=T?0:"bytrigger"===ma||"sliderenter"===ma?0:parseFloat(ma)/1e3,fa=na+s,wa=oa+f,ya=a.css("z-Index");T||("reset"==ca&&"bytrigger"!=ma?(a.data("triggerstate","on"),a.data("animdirection","in"),ga="on"):"reset"==ca&&"bytrigger"==ma&&(a.data("triggerstate","off"),a.data("animdirection","out"),ga="off")),punchgs.TweenLite.set(j,{zIndex:ya,top:wa,left:fa,overwrite:"auto"}),0==W&&(L=!0),void 0==a.data("timeline")||L||(2!=W&&a.data("timeline").gotoAndPlay(0),L=!0),!x&&a.data("timeline_out")&&2!=W&&0!=W&&(a.data("timeline_out").kill(),a.data("outstarted",0)),T&&void 0!=a.data("timeline")&&(a.removeData("$anims"),a.data("timeline").pause(0),a.data("timeline").kill(),void 0!=a.data("newhoveranim")&&(a.data("newhoveranim").progress(0),a.data("newhoveranim").kill()),a.removeData("timeline"),punchgs.TweenLite.killTweensOf(a),a.unbind("hover"),a.removeClass("rs-hover-ready"),a.removeData("newhoveranim"));var ba=a.data("timeline")?a.data("timeline").time():0,xa=void 0!==a.data("timeline")?a.data("timeline").progress():0,Ta=a.data("timeline")||new punchgs.TimelineLite({smoothChildTiming:!0});xa=jQuery.isNumeric(xa)?xa:0,Ta.pause();var La={};if(La.svg=void 0!=a.data("svg_src")?a.find("svg"):!1,1>xa&&1!=a.data("outstarted")||2==W||T){var Wa=a;if(void 0!=a.data("mySplitText")&&a.data("mySplitText").revert(),void 0!=a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)||void 0!=a.data("splitout")&&a.data("splitout").match(/chars|words|lines/g)){var ja=a.find("a").length>0?a.find("a"):a;a.data("mySplitText",new punchgs.SplitText(ja,{type:"lines,words,chars",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"})),a.addClass("splitted")}void 0!==a.data("mySplitText")&&a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)&&(Wa=a.data("mySplitText")[a.data("splitin")]);var Ca=new Object;La.svg&&(La.idle=o(a.data("svg_idle"),n()),punchgs.TweenLite.set(La.svg,La.idle.anim));var Ra=void 0!=a.data("transform_in")?a.data("transform_in").match(/\(R\)/gi):!1;if(!a.data("$anims")||T||Ra){var ka=i(),Ia=i(),_a=d(),Qa=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");Ia=p(Ia,a.data("transform_idle")),ka=p(Ia,a.data("transform_in"),1==r.sdir),Qa&&(_a=p(_a,a.data("transform_hover")),_a=m(_a,a.data("style_hover")),La.svg&&($svghover=o(a.data("svg_hover"),n()),void 0!=_a.anim.color&&($svghover.anim.fill=_a.anim.color),a.data("hoversvg",$svghover)),a.data("hover",_a)),ka.elemdelay=void 0==a.data("elementdelay")?0:a.data("elementdelay"),Ia.anim.ease=ka.anim.ease=ka.anim.ease||punchgs.Power1.easeInOut,Qa&&!a.hasClass("rs-hover-ready")&&(a.addClass("rs-hover-ready"),a.hover(function(a){var e=jQuery(a.currentTarget),t=e.data("hover"),i=e.data("timeline");i&&1==i.progress()&&(void 0===e.data("newhoveranim")||"none"===e.data("newhoveranim")?(e.data("newhoveranim",punchgs.TweenLite.to(e,t.speed,t.anim)),La.svg&&e.data("newsvghoveranim",punchgs.TweenLite.to(La.svg,t.speed,e.data("hoversvg").anim))):(e.data("newhoveranim").progress(0),e.data("newhoveranim").play(),La.svg&&e.data("newsvghoveranim").progress(0).play()))},function(a){var e=jQuery(a.currentTarget),t=e.data("timeline");t&&1==t.progress()&&void 0!=e.data("newhoveranim")&&(e.data("newhoveranim").reverse(),La.svg&&e.data("newsvghoveranim").reverse())})),Ca=new Object,Ca.f=ka,Ca.r=Ia,a.data("$anims")}else Ca=a.data("$anims");var Sa=h(a.data("mask_in")),za=new punchgs.TimelineLite;if(Ca.f.anim.x=Ca.f.anim.x*r.bw||l(Ca.f.anim.x,r,ra,da,wa,fa,"horizontal"),Ca.f.anim.y=Ca.f.anim.y*r.bw||l(Ca.f.anim.y,r,ra,da,wa,fa,"vertical"),2!=W||T){if(Wa!=a){var Ma=Ca.r.anim.ease;Ta.add(punchgs.TweenLite.set(a,Ca.r.anim)),Ca.r=i(),Ca.r.anim.ease=Ma}if(Ca.f.anim.visibility="hidden",a.data("eow",ra),a.data("eoh",da),a.data("speed",Ca.f.speed),a.data("ease",Ca.r.anim.ease),za.eventCallback("onStart",function(){punchgs.TweenLite.set(a,{visibility:"visible"}),a.data("iframes")&&a.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:1})}),punchgs.TweenLite.set(j,{visibility:"visible"});var e={};e.layer=a,e.eventtype="enterstage",e.layertype=a.data("layertype"),a.data("active",!0),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e])}),za.eventCallback("onComplete",function(){var e={};e.layer=a,e.eventtype="enteredstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e]),t.animcompleted(a,r)}),"sliderenter"==ma&&r.overcontainer&&(ua=.6),Ta.add(za.staggerFromTo(Wa,Ca.f.speed,Ca.f.anim,Ca.r.anim,Ca.f.elemdelay),ua),Sa){var Oa=new Object;Oa.ease=Ca.r.anim.ease,Oa.overflow=Sa.anim.overflow="hidden",Oa.overwrite="all",Oa.x=Oa.y=0,Sa.anim.x=Sa.anim.x*r.bw||l(Sa.anim.x,r,ra,da,wa,fa,"horizontal"),Sa.anim.y=Sa.anim.y*r.bw||l(Sa.anim.y,r,ra,da,wa,fa,"vertical"),Ta.add(punchgs.TweenLite.fromTo(R,Ca.f.speed,Sa.anim,Oa,ka.elemdelay),ua)}else Ta.add(punchgs.TweenLite.set(R,{overflow:"visible"},ka.elemdelay),0)}if(a.data("timeline",Ta),r.sliderscrope=void 0===r.sliderscrope?Math.round(99999*Math.random()):r.sliderscrope,W=g(a,r,"in"),void 0===r.endtimeouts&&(r.endtimeouts=[]),(0===xa||2==W)&&"bytrigger"!==va&&!T&&"sliderleave"!=va){if(void 0!=va&&(-1==W||2==W)&&"bytriger"!==va)var Ha=setTimeout(function(){t.endMoveCaption(a,R,j,r)},parseInt(a.data("end"),0));r.endtimeouts.push(Ha)}Ta=a.data("timeline"),"on"==a.data("loopanimation")&&y(C,r.bw),("sliderenter"!=ma||"sliderenter"==ma&&r.overcontainer)&&(-1==W||1==W||T||0==W&&1>xa&&a.hasClass("rev-static-visbile"))&&(1>xa&&xa>0||0==xa&&"bytrigger"!=ma&&"keep"!=ca||0==xa&&"bytrigger"!=ma&&"keep"==ca&&"on"==ga||"bytrigger"==ma&&"keep"==ca&&"on"==ga)&&(Ta.resume(ba),t.toggleState(a.data("layertoggledby")))}"on"==a.data("loopanimation")&&punchgs.TweenLite.set(C,{minWidth:ra,minHeight:da}),0==a.data("slidelink")||1!=a.data("slidelink")&&!a.hasClass("slidelink")?(punchgs.TweenLite.set(R,{width:"auto",height:"auto"}),a.data("slidelink",0)):(punchgs.TweenLite.set(R,{width:"100%",height:"100%"}),a.data("slidelink",1))},endMoveCaption:function(a,e,n,o){if(e=void 0!=e?e:a.data("_mw"),n=void 0!=n?n:a.data("_pw"),a.data("outstarted",1),a.data("timeline"))a.data("timeline").pause();else if(void 0===a.data("_pw"))return;var d=new punchgs.TimelineLite,s=new punchgs.TimelineLite,c=new punchgs.TimelineLite,g=p(i(),a.data("transform_in"),1==o.sdir),m=a.data("transform_out")?p(r(),a.data("transform_out"),1==o.sdir):p(r(),a.data("transform_in"),1==o.sdir),v=a.data("splitout")&&a.data("splitout").match(/words|chars|lines/g)?a.data("mySplitText")[a.data("splitout")]:a,u=void 0==a.data("endelementdelay")?0:a.data("endelementdelay"),f=a.innerWidth(),w=a.innerHeight(),y=n.position();a.data("transform_out")&&a.data("transform_out").match(/auto:auto/g)&&(g.speed=m.speed,g.anim.ease=m.anim.ease,m=g);var b=h(a.data("mask_out"));m.anim.x=m.anim.x*o.bw||l(m.anim.x,o,f,w,y.top,y.left,"horizontal"),m.anim.y=m.anim.y*o.bw||l(m.anim.y,o,f,w,y.top,y.left,"vertical"),s.eventCallback("onStart",function(){var e={};e.layer=a,e.eventtype="leavestage",e.layertype=a.data("layertype"),e.layersettings=a.data(),a.data("active",!1),o.c.trigger("revolution.layeraction",[e])}),s.eventCallback("onComplete",function(){punchgs.TweenLite.set(a,{visibility:"hidden"}),punchgs.TweenLite.set(n,{visibility:"hidden"});var e={};e.layer=a,e.eventtype="leftstage",a.data("active",!1),e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",[e]),t.stopVideo&&t.stopVideo(a,o)}),d.add(s.staggerTo(v,m.speed,m.anim,u),0),b?(b.anim.ease=m.anim.ease,b.anim.overflow="hidden",b.anim.x=b.anim.x*o.bw||l(b.anim.x,o,f,w,y.top,y.left,"horizontal"),b.anim.y=b.anim.y*o.bw||l(b.anim.y,o,f,w,y.top,y.left,"vertical"),d.add(c.to(e,m.speed,b.anim,u),0)):d.add(c.set(e,{overflow:"visible",overwrite:"auto"},u),0),a.data("timeline_out",d)},removeTheCaptions:function(a,e){var i=a.data("index"),n=new Array;e.layers[i]&&jQuery.each(e.layers[i],function(a,e){n.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){n.push(e)}),e.endtimeouts&&e.endtimeouts.length>0&&jQuery.each(e.endtimeouts,function(a,e){clearTimeout(e)}),e.endtimeouts=new Array,n&&jQuery.each(n,function(a){var i=jQuery(this),n=g(i,e,"out");0!=n&&(b(i),clearTimeout(i.data("videoplaywait")),t.stopVideo&&t.stopVideo(i,e),t.endMoveCaption(i,null,null,e),t.removeMediaFromList&&t.removeMediaFromList(i,e),e.lastplayedvideos=[])})}});var i=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a.anim.rotationX=0,a.anim.rotationY=0,a.anim.rotationZ=0,a.anim.scaleX=1,a.anim.scaleY=1,a.anim.skewX=0,a.anim.skewY=0,a.anim.opacity=1,a.anim.transformOrigin="50% 50%",a.anim.transformPerspective=600,a.anim.rotation=0,a.anim.ease=punchgs.Power3.easeOut,a.anim.force3D="auto",a.speed=.3,a.anim.autoAlpha=1,a.anim.visibility="visible",a.anim.overwrite="all",a},n=function(){var a=new Object;return a.anim=new Object,a.anim.stroke="none",a.anim.strokeWidth=0,a.anim.strokeDasharray="none",a.anim.strokeDashoffset="0",a},o=function(a,e){var t=a.split(";");return t&&jQuery.each(t,function(a,t){var i=t.split(":"),n=i[0],o=i[1];"sc"==n&&(e.anim.stroke=o),"sw"==n&&(e.anim.strokeWidth=o),"sda"==n&&(e.anim.strokeDasharray=o),"sdo"==n&&(e.anim.strokeDashoffset=o)}),e},r=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a},d=function(){var a=new Object;return a.anim=new Object,a.speed=.2,a},s=function(a,e){if(jQuery.isNumeric(parseFloat(a)))return parseFloat(a);if(void 0===a||"inherit"===a)return e;if(a.split("{").length>1){var t=a.split(","),i=parseFloat(t[1].split("}")[0]);t=parseFloat(t[0].split("{")[1]),a=Math.random()*(i-t)+t}return a},l=function(a,e,t,i,n,o,r){return!jQuery.isNumeric(a)&&a.match(/%]/g)?(a=a.split("[")[1].split("]")[0],"horizontal"==r?a=(t+2)*parseInt(a,0)/100:"vertical"==r&&(a=(i+2)*parseInt(a,0)/100)):(a="layer_left"===a?0-t:"layer_right"===a?t:a,a="layer_top"===a?0-i:"layer_bottom"===a?i:a,a="left"===a||"stage_left"===a?0-t-o:"right"===a||"stage_right"===a?e.conw-o:"center"===a||"stage_center"===a?e.conw/2-t/2-o:a,a="top"===a||"stage_top"===a?0-i-n:"bottom"===a||"stage_bottom"===a?e.conh-n:"middle"===a||"stage_middle"===a?e.conh/2-i/2-n:a),a},p=function(a,e,t){var i=new Object;if(i=jQuery.extend(!0,{},i,a),void 0===e)return i;var n=e.split(";");return n&&jQuery.each(n,function(a,e){var n=e.split(":"),o=n[0],r=n[1];t&&void 0!=r&&r.length>0&&r.match(/\(R\)/)&&(r=r.replace("(R)",""),r="right"===r?"left":"left"===r?"right":"top"===r?"bottom":"bottom"===r?"top":r,"["===r[0]&&"-"===r[1]?r=r.replace("[-","["):"["===r[0]&&"-"!==r[1]?r=r.replace("[","[-"):"-"===r[0]?r=r.replace("-",""):r[0].match(/[1-9]/)&&(r="-"+r)),void 0!=r&&(r=r.replace(/\(R\)/,""),("rotationX"==o||"rX"==o)&&(i.anim.rotationX=s(r,i.anim.rotationX)+"deg"),("rotationY"==o||"rY"==o)&&(i.anim.rotationY=s(r,i.anim.rotationY)+"deg"),("rotationZ"==o||"rZ"==o)&&(i.anim.rotation=s(r,i.anim.rotationZ)+"deg"),("scaleX"==o||"sX"==o)&&(i.anim.scaleX=s(r,i.anim.scaleX)),("scaleY"==o||"sY"==o)&&(i.anim.scaleY=s(r,i.anim.scaleY)),("opacity"==o||"o"==o)&&(i.anim.opacity=s(r,i.anim.opacity)),i.anim.opacity=0==i.anim.opacity?1e-4:i.anim.opacity,("skewX"==o||"skX"==o)&&(i.anim.skewX=s(r,i.anim.skewX)),("skewY"==o||"skY"==o)&&(i.anim.skewY=s(r,i.anim.skewY)),"x"==o&&(i.anim.x=s(r,i.anim.x)),"y"==o&&(i.anim.y=s(r,i.anim.y)),"z"==o&&(i.anim.z=s(r,i.anim.z)),("transformOrigin"==o||"tO"==o)&&(i.anim.transformOrigin=r.toString()),("transformPerspective"==o||"tP"==o)&&(i.anim.transformPerspective=parseInt(r,0)),("speed"==o||"s"==o)&&(i.speed=parseFloat(r)/1e3),("ease"==o||"e"==o)&&(i.anim.ease=r))}),i},h=function(a){if(void 0===a)return!1;var e=new Object;e.anim=new Object;var t=a.split(";");return t&&jQuery.each(t,function(a,t){t=t.split(":");var i=t[0],n=t[1];"x"==i&&(e.anim.x=n),"y"==i&&(e.anim.y=n),"s"==i&&(e.speed=parseFloat(n)/1e3),("e"==i||"ease"==i)&&(e.anim.ease=n)}),e},c=function(a,e,t){if(void 0==a&&(a=0),!jQuery.isArray(a)&&"string"===jQuery.type(a)&&(a.split(",").length>1||a.split("[").length>1)){a=a.replace("[",""),a=a.replace("]","");var i=a.match(/'/g)?a.split("',"):a.split(",");a=new Array,i&&jQuery.each(i,function(e,t){t=t.replace("'",""),t=t.replace("'",""),a.push(t)})}else{var n=a;jQuery.isArray(a)||(a=new Array,a.push(n))}var n=a[a.length-1];if(a.length<e.rle)for(var o=1;o<=e.curWinRange;o++)a.push(n);return a},g=function(a,e,t,i){var n=-1;if(a.hasClass("tp-static-layer")){a.data("staticlayer",!0);var o=parseInt(a.data("startslide"),0),r=parseInt(a.data("endslide"),0),d=e.c.find(".processing-revslide").index(),s=-1!=d?d:e.c.find(".active-revslide").index();s=-1==s?0:s,"in"===t?a.hasClass("rev-static-visbile")?n=r==s||o>s||s>r?2:0:s>=o&&r>=s||o==s||r==s?(i||(a.addClass("rev-static-visbile"),a.removeClass("rev-static-hidden")),n=1):n=0:a.hasClass("rev-static-visbile")?o>s||s>r?(n=2,i||(a.removeClass("rev-static-visbile"),a.addClass("rev-static-hidden"))):n=0:n=2}return n},m=function(a,e){if(void 0===e)return a;e=e.replace("c:","color:"),e=e.replace("bg:","background-color:"),e=e.replace("bw:","border-width:"),e=e.replace("bc:","border-color:"),e=e.replace("br:","borderRadius:"),e=e.replace("bs:","border-style:"),e=e.replace("td:","text-decoration:");var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");i[0].length>0&&(a.anim[i[0]]=i[1])}),a},v=function(a,e){var t,i=new Object,n=!1;if("rekursive"==e&&(t=a.closest(".tp-caption"),t&&a.css("fontSize")===t.css("fontSize")&&(n=!0)),i.basealign=a.data("basealign")||"grid",i.fontSize=n?void 0===t.data("fontsize")?parseInt(t.css("fontSize"),0)||0:t.data("fontsize"):void 0===a.data("fontsize")?parseInt(a.css("fontSize"),0)||0:a.data("fontsize"),i.fontWeight=n?void 0===t.data("fontweight")?parseInt(t.css("fontWeight"),0)||0:t.data("fontweight"):void 0===a.data("fontweight")?parseInt(a.css("fontWeight"),0)||0:a.data("fontweight"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whitespace")||"normal":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whitespace")||"normal":a.data("whitespace"),-1!==jQuery.inArray(a.data("layertype"),["video","image","audio"])||a.is("img")?i.lineHeight=0:i.lineHeight=n?void 0===t.data("lineheight")?parseInt(t.css("lineHeight"),0)||0:t.data("lineheight"):void 0===a.data("lineheight")?parseInt(a.css("lineHeight"),0)||0:a.data("lineheight"),i.letterSpacing=n?void 0===t.data("letterspacing")?parseFloat(t.css("letterSpacing"),0)||0:t.data("letterspacing"):void 0===a.data("letterspacing")?parseFloat(a.css("letterSpacing"))||0:a.data("letterspacing"),i.paddingTop=void 0===a.data("paddingtop")?parseInt(a.css("paddingTop"),0)||0:a.data("paddingtop"),i.paddingBottom=void 0===a.data("paddingbottom")?parseInt(a.css("paddingBottom"),0)||0:a.data("paddingbottom"),i.paddingLeft=void 0===a.data("paddingleft")?parseInt(a.css("paddingLeft"),0)||0:a.data("paddingleft"),i.paddingRight=void 0===a.data("paddingright")?parseInt(a.css("paddingRight"),0)||0:a.data("paddingright"),i.marginTop=void 0===a.data("margintop")?parseInt(a.css("marginTop"),0)||0:a.data("margintop"),i.marginBottom=void 0===a.data("marginbottom")?parseInt(a.css("marginBottom"),0)||0:a.data("marginbottom"),i.marginLeft=void 0===a.data("marginleft")?parseInt(a.css("marginLeft"),0)||0:a.data("marginleft"),i.marginRight=void 0===a.data("marginright")?parseInt(a.css("marginRight"),0)||0:a.data("marginright"),i.borderTopWidth=void 0===a.data("bordertopwidth")?parseInt(a.css("borderTopWidth"),0)||0:a.data("bordertopwidth"),i.borderBottomWidth=void 0===a.data("borderbottomwidth")?parseInt(a.css("borderBottomWidth"),0)||0:a.data("borderbottomwidth"),i.borderLeftWidth=void 0===a.data("borderleftwidth")?parseInt(a.css("borderLeftWidth"),0)||0:a.data("borderleftwidth"),i.borderRightWidth=void 0===a.data("borderrightwidth")?parseInt(a.css("borderRightWidth"),0)||0:a.data("borderrightwidth"),"rekursive"!=e){if(i.color=void 0===a.data("color")?"nopredefinedcolor":a.data("color"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whiteSpace")||"nowrap":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whiteSpace")||"nowrap":a.data("whitespace"),i.minWidth=void 0===a.data("width")?parseInt(a.css("minWidth"),0)||0:a.data("width"),i.minHeight=void 0===a.data("height")?parseInt(a.css("minHeight"),0)||0:a.data("height"),void 0!=a.data("videowidth")&&void 0!=a.data("videoheight")){var o=a.data("videowidth"),r=a.data("videoheight");o="100%"===o?"none":o,r="100%"===r?"none":r,a.data("width",o),a.data("height",r)}i.maxWidth=void 0===a.data("width")?parseInt(a.css("maxWidth"),0)||"none":a.data("width"),i.maxHeight=void 0===a.data("height")?parseInt(a.css("maxHeight"),0)||"none":a.data("height"),i.wan=void 0===a.data("wan")?parseInt(a.css("-webkit-transition"),0)||"none":a.data("wan"),i.moan=void 0===a.data("moan")?parseInt(a.css("-moz-animation-transition"),0)||"none":a.data("moan"),i.man=void 0===a.data("man")?parseInt(a.css("-ms-animation-transition"),0)||"none":a.data("man"),i.ani=void 0===a.data("ani")?parseInt(a.css("transition"),0)||"none":a.data("ani")}return i.styleProps=a.css(["background-color","border-top-color","border-bottom-color","border-right-color","border-left-color","border-top-style","border-bottom-style","border-left-style","border-right-style","border-left-width","border-right-width","border-bottom-width","border-top-width","color","text-decoration","font-style","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]),i},u=function(a,e){var t=new Object;return a&&jQuery.each(a,function(i,n){t[i]=c(n,e)[e.curWinRange]||a[i]}),t},f=function(a,e,t,i){return a=jQuery.isNumeric(a)?a*e+"px":a,a="full"===a?i:"auto"===a||"none"===a?t:a},w=function(a,e,t,i){var n;try{if("BR"==a[0].nodeName||"br"==a[0].tagName)return!1}catch(o){}void 0===a.data("cssobj")?(n=v(a,t),a.data("cssobj",n)):n=a.data("cssobj");var r=u(n,e),d=e.bw,s=e.bh;if("off"===i&&(d=1,s=1),"auto"==r.lineHeight&&(r.lineHeight=r.fontSize+4),!a.hasClass("tp-splitted")){a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none");var l=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");if(l&&punchgs.TweenLite.set(a,r.styleProps),punchgs.TweenLite.set(a,{fontSize:Math.round(r.fontSize*d)+"px",fontWeight:r.fontWeight,letterSpacing:Math.floor(r.letterSpacing*d)+"px",paddingTop:Math.round(r.paddingTop*s)+"px",paddingBottom:Math.round(r.paddingBottom*s)+"px",paddingLeft:Math.round(r.paddingLeft*d)+"px",paddingRight:Math.round(r.paddingRight*d)+"px",marginTop:r.marginTop*s+"px",marginBottom:r.marginBottom*s+"px",marginLeft:r.marginLeft*d+"px",marginRight:r.marginRight*d+"px",borderTopWidth:Math.round(r.borderTopWidth*s)+"px",borderBottomWidth:Math.round(r.borderBottomWidth*s)+"px",borderLeftWidth:Math.round(r.borderLeftWidth*d)+"px",borderRightWidth:Math.round(r.borderRightWidth*d)+"px",lineHeight:Math.round(r.lineHeight*s)+"px",overwrite:"auto"}),"rekursive"!=t){var p="slide"==r.basealign?e.ulw:e.gridwidth[e.curWinRange],h="slide"==r.basealign?e.ulh:e.gridheight[e.curWinRange],c=f(r.maxWidth,d,"none",p),g=f(r.maxHeight,s,"none",h),m=f(r.minWidth,d,"0px",p),w=f(r.minHeight,s,"0px",h);punchgs.TweenLite.set(a,{maxWidth:c,maxHeight:g,minWidth:m,minHeight:w,whiteSpace:r.whiteSpace,overwrite:"auto"}),"nopredefinedcolor"!=r.color&&punchgs.TweenLite.set(a,{color:r.color,overwrite:"auto"}),void 0!=a.data("svg_src")&&("nopredefinedcolor"!=r.color?punchgs.TweenLite.set(a.find("svg"),{fill:r.color,overwrite:"auto"}):punchgs.TweenLite.set(a.find("svg"),{fill:r.styleProps.color,overwrite:"auto"}))}setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30)}},y=function(a,e){if(a.hasClass("rs-pendulum")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?-20:a.data("startdeg"),i=void 0==a.data("enddeg")?20:a.data("enddeg"),n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("ease");t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:i,transformOrigin:o},{rotation:t,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-rotate")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?0:a.data("startdeg"),i=void 0==a.data("enddeg")?360:a.data("enddeg");n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing"),t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-slideloop")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var d=void 0==a.data("xs")?0:a.data("xs"),s=void 0==a.data("ys")?0:a.data("ys"),l=void 0==a.data("xe")?0:a.data("xe"),p=void 0==a.data("ye")?0:a.data("ye"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");d*=e,s*=e,l*=e,p*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:d,y:s},{x:l,y:p,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:l,y:p},{x:d,y:s,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-pulse")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var h=void 0==a.data("zoomstart")?0:a.data("zoomstart"),c=void 0==a.data("zoomend")?0:a.data("zoomend"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:h},{scale:c,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:c},{scale:h,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-wave")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var g=void 0==a.data("angle")?10:parseInt(a.data("angle"),0),m=void 0==a.data("radius")?10:parseInt(a.data("radius"),0),n=void 0==a.data("speed")?-20:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),v=o.split(" "),u=new Object;v.length>=1?(u.x=v[0],u.y=v[1]):(u.x="50%",u.y="50%"),g*=e,m*=e;var f=0-a.height()/2+m*(-1+parseInt(u.y,0)/100),w=a.width()*(-.5+parseInt(u.x,0)/100),y={a:0,ang:g,element:a,unit:m,xoffset:w,yoffset:f};a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y,n,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=y.a*(Math.PI/180);punchgs.TweenLite.to(y.element,.1,{force3D:"auto",x:y.xoffset+Math.cos(a)*y.unit,y:y.yoffset+y.unit*(1-Math.sin(a))})},onComplete:function(){a.data("loop-timeline").restart()}}))}},b=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var a=jQuery(this);void 0!=a.data("loop-timeline")&&(a.data("loop-timeline").pause(),a.data("loop-timeline",null))})}}(jQuery);