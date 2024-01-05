(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function o0(){const r=document.querySelector(".scroll-container"),e=document.querySelector(".BG-class");r.addEventListener("wheel",t=>{t.deltaY>0?e.scrollTop=r.scrollTop+window.innerHeight:e.scrollTop=r.scrollTop-window.innerHeight},{passive:!0})}function Ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mo={duration:.5,overwrite:!1,delay:0},Mh,gn,kt,ui=1e8,bt=1/ui,Cu=Math.PI*2,a0=Cu/4,l0=0,vm=Math.sqrt,c0=Math.cos,u0=Math.sin,an=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},bh=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Eh=function(){return typeof window<"u"},za=function(e){return zt(e)||an(e)},xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,Pu=/(?:-?\.?\d|\.)+/gi,ym=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sm=/[+-]=-?[.\d]+/,Mm=/[^,'"\[\]\s]+/gi,h0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,ii,Lu,Th,Qn={},Yl={},bm,Em=function(e){return(Yl=ps(e,Qn))&&Hn},Ah=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ba=function(e,t){return!t&&console.warn(e)},Tm=function(e,t){return e&&(Qn[e]=t)&&Yl&&(Yl[e]=t)||Qn},Ea=function(){return 0},f0={suppressEvents:!0,isStart:!0,kill:!1},Il={suppressEvents:!0,kill:!1},d0={suppressEvents:!0},wh={},Ar=[],Du={},Am,jn={},Rc={},xf=30,Ol=[],Rh="",Ch=function(e){var t=e[0],n,i;if(zi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ol.length;i--&&!Ol[i].targetTest(t););n=Ol[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $m(e[i],n)))||e.splice(i,1);return e},rs=function(e){return e._gsap||Ch(hi(e))[0]._gsap},wm=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():bh(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},rn=function(e){return Math.round(e*1e7)/1e7||0},so=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},p0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ql=function(){var e=Ar.length,t=Ar.slice(0),n,i;for(Du={},Ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rm=function(e,t,n,i){Ar.length&&!gn&&ql(),e.render(t,n,i||gn&&t<0&&(e._initted||e._startAt)),Ar.length&&!gn&&ql()},Cm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mm).length<2?t:an(e)?e.trim():e},Pm=function(e){return e},pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},m0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ps=function(e,t){for(var n in t)e[n]=t[n];return e},yf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},jl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},sa=function(e){var t=e.parent||Ot,n=e.keyframes?m0(vn(e.keyframes)):pi;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Lm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},pc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},g0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Iu=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Il):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},v0=function r(e){return!e||e._ts&&r(e.parent)},Sf=function(e){return e._repeat?_o(e._tTime,e=e.duration()+e._rDelay)*e:0},_o=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mc=function(e){return e._end=rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},_c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),mc(e),n._dirty||ss(n,e)),e},Dm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kl(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Di=function(e,t,n,i){return t.parent&&Dr(t),t._start=rn((sr(n)?n:n||e!==Ot?ni(e,n,t):e._time)+t._delay),t._end=rn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Lm(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),i||Dm(e,t),e._ts<0&&_c(e,e._tTime),e},Im=function(e,t){return(Qn.ScrollTrigger||Ah("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},Om=function(e,t,n,i,s){if(Lh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Am!==Kn.frame)return Ar.push(e),e._lazy=[s,i],1},x0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},y0=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&x0(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Fa(0,e._tDur,t),u=_o(l,a),e._yoyo&&u&1&&(o=1-o),u!==_o(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Om(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Iu(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Dr(e,1),!n&&!gn&&(Zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},S0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},go=function(e,t,n,i){var s=e._repeat,o=rn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:rn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&_c(e,e._tTime=e._tDur*a),e.parent&&mc(e),n||ss(e.parent,e),e},Mf=function(e){return e instanceof Cn?ss(e):go(e,e._dur)},M0={_start:0,endTime:Ea,totalDuration:Ea},ni=function r(e,t,n){var i=e.labels,s=e._recent||M0,o=e.duration()>=ui?s.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},oa=function(e,t,n){var i=sr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Xt(t[0],o,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!an(e)||!(t=h0.exec(e))?"":t[1]},b0=function(e,t,n){return Ur(n,function(i){return Fa(e,t,i)})},Nu=[].slice,Nm=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==ii},E0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||Nm(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):an(e)&&!n&&(Lu||!vo())?Nu.call((t||Th).querySelectorAll(e),0):vn(e)?E0(e,n):Nm(e)?Nu.call(e,0):e?[e]:[]},Uu=function(e){return e=hi(e)[0]||ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?ba("Invalid scope")||Th.createElement("div"):e)}},Um=function(e){return e.sort(function(){return .5-Math.random()})},Fm=function(e){if(zt(e))return e;var t=zi(e)?e:{each:e},n=os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return an(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,y,v,x,w,A,M,I,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,ui])[1],!S){for(M=-ui;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*u-.5:i%S,y=S===ui?0:l?_*h/S-.5:i/S|0,M=0,I=ui,A=0;A<_;A++)v=A%S-m,x=y-(A/S|0),p[A]=w=c?Math.abs(c==="y"?x:v):vm(v*v+x*x),w>M&&(M=w),w<I&&(I=w);i==="random"&&Um(p),p.max=M-I,p.min=I,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=_n(t.amount||t.each)||0,n=n&&_<0?qm(n):n}return _=(p[f]-p.min)/p.max||0,rn(p.b+(n?n(_):_)*p.v)+p.u}},Fu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=rn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:_n(n))}},Bm=function(e,t){var n=vn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||ui,e.values?(e=hi(e.values),(s=!sr(e[0]))&&(i*=i)):e=Fu(e.increment)),Ur(t,n?zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ui,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||sr(o)?u:u+_n(o)}:Fu(e))},km=function(e,t,n,i){return Ur(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},T0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},A0=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},w0=function(e,t,n){return Hm(e,t,0,1,n)},zm=function(e,t,n){return Ur(n,function(i){return e[~~t(i)]})},R0=function r(e,t,n){var i=t-e;return vn(e)?zm(e,r(0,e.length),t):Ur(n,function(s){return(i+(s-e)%i)%i+e})},C0=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?zm(e,r(0,e.length-1),t):Ur(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ta=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Mm:Pu),n+=e.substr(t,i-t)+km(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Hm=function(e,t,n,i,s){var o=t-e,a=i-n;return Ur(s,function(l){return n+((l-e)/o*a||0)})},P0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=an(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ps(vn(e)?[]:{},e));if(!u){for(l in t)Ph.call(a,e,l,"get",t[l]);s=function(g){return Oh(g,a)||(o?e.p:e)}}}return Ur(n,s)},bf=function(e,t,n){var i=e.labels,s=ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],o=kt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ar.length&&ql(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},Qo=function(e){return Dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&Zn(e,"onInterrupt"),e},Qs,Gm=[],Vm=function(e){if(Eh()&&e){e=!e.name&&e.default||e;var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ea,render:Oh,add:Ph,kill:Y0,modifier:X0,rawVars:0},o={targetTest:0,get:0,getSetter:Ih,aliases:{},register:0};if(vo(),e!==i){if(jn[t])return;pi(i,pi(jl(e,s),o)),ps(i.prototype,ps(s,jl(e,o))),jn[i.prop=t]=i,e.targetTest&&(Ol.push(i),wh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tm(t,i),e.register&&e.register(Hn,i,Fn)}else e&&Gm.push(e)},Mt=255,ea={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Cc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Wm=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&Mt,e&Mt]:0:ea.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])i=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Pu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Cc(l+1/3,s,o),i[1]=Cc(l,s,o),i[2]=Cc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ym),n&&i.length<4&&(i[3]=1),i}else i=e.match(Pu)||ea.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Xm=function(e){var t=[],n=[],i=-1;return e.split(wr).forEach(function(s){var o=s.match(Js)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ef=function(e,t,n){var i="",s=(e+i).match(wr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Wm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Xm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wr,"1").split(Js),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(wr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},wr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),L0=/hsl[a]?\(/,Ym=function(e){var t=e.join(" "),n;if(wr.lastIndex=0,wr.test(t))return n=L0.test(t),e[1]=Ef(e[1],n),e[0]=Ef(e[0],n,Xm(e[1])),!0},Aa,Kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,y=p===!0,v,x,w,A;if(m>e&&(n+=m-t),i+=m,w=i-n,v=w-o,(v>0||y)&&(A=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](w,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){bm&&(!Lu&&Eh()&&(ii=Lu=window,Th=ii.document||{},Qn.gsap=Hn,(ii.gsapVersions||(ii.gsapVersions=[])).push(Hn.version),Em(Yl||ii.GreenSockGlobals||!ii.gsap&&ii||{}),u=ii.requestAnimationFrame,Gm.forEach(Vm)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?ii.cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ea},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,y){var v=m?function(x,w,A,M){p(x,w,A,M),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),vo(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),vo=function(){return!Aa&&Kn.wake()},dt={},D0=/^[\d.\-M][\d.\-,\s]/,I0=/["']/g,O0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(I0,"").trim():+c,i=l.substr(a+1).trim();return t},N0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},U0=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[O0(t[1])]:N0(e).split(",").map(Cm)):dt._CE&&D0.test(e)?dt._CE("",e):n},qm=function(e){return function(t){return 1-e(1-t)}},jm=function r(e,t){for(var n=e._first,i;n;)n instanceof Cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},os=function(e,t){return e&&(zt(e)?e:dt[e]||U0(e))||t},bs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Un(e,function(a){dt[a]=Qn[a]=s,dt[o=a.toLowerCase()]=n;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},Km=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Cu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*u0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Km(a);return s=Cu/s,l.config=function(c,u){return r(e,c,u)},l},Lc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Km(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;bs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;bs("Elastic",Pc("in"),Pc("out"),Pc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});bs("Circ",function(r){return-(vm(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-c0(r*a0)+1});bs("Back",Lc("in"),Lc("out"),Lc());dt.SteppedEase=dt.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*Fa(0,o,a)|0)+s)*n}}};mo.ease=dt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rh+=r+","+r+"Params,"});var $m=function(e,t){this.id=l0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wm,this.set=t?t.getSetter:Ih},wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,go(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Aa||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_c(this,n),!s._dp||s.parent||Dm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_o(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this._tDur,s),i!==!1),mc(this),g0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=d0);var i=gn;return gn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=zt(n)?n:Pm,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Qo(this)},r}();pi(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Cn=function(r){gm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Ot&&Di(n.parent||Ot,Ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Im(Ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return oa(0,arguments,this),this},t.from=function(i,s,o){return oa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return oa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,ni(this,o),1),this},t.call=function(i,s,o){return Di(this,Xt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xt(i,o,ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,sa(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,sa(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:rn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,y,v,x,w,A,M;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=rn(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),w=_o(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),A&&_&1&&(f=c-f,M=1),_!==w&&!this._lock){var I=A&&w&1,S=I===(A&&_&1);if(_<w&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(M?0:rn(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;jm(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=S0(this,rn(a),rn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-bt);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||gn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=b?-bt:bt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=x,mc(this),this.render(i,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Dr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(sr(s)||(s=ni(this,s,i)),!(i instanceof wa)){if(vn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(zt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return an(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(pc(this,i),i===this._recent&&(this._recent=this._last),ss(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Xt.delayedCall(0,s||Ea,o);return a.data="isPause",this._hasPause=1,Di(this,a,ni(this,i))},t.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&Dr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hi(i),l=this._first,c=sr(s),u;l;)l instanceof Xt?p0(l._targets,a)&&(c?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Xt.to(o,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&go(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,pi({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bf(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bf(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ui,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;go(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(Rm(Ot,Kl(i,Ot)),Am=Kn.frame),Kn.frame>=xf){xf+=Jn.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Jn.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e}(wa);pi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var F0=function(e,t,n,i,s,o,a){var l=new Fn(this._pt,e,t,0,1,n_,null,s),c=0,u=0,h,f,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ta(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(wc)||[];h=wc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?so(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=wc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Sm.test(i)||m)&&(l.e=0),this._pt=l,l},Ph=function(e,t,n,i,s,o,a,l,c,u){zt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?G0:e_:Dh,g;if(an(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(g=so(f,i)+(_n(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Bu)return!isNaN(f*i)&&i!==""?(g=new Fn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?W0:t_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Ah(t,i),F0.call(this,e,t,f,i,d,l||Jn.stringFilter,c))},B0=function(e,t,n,i,s){if(zt(e)&&(e=aa(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||vn(e)||xm(e))return an(e)?aa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=aa(e[a],s,t,n,i);return o},Zm=function(e,t,n,i,s,o){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:B0(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Qs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xr,Bu,Lh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Mh,x=e.timeline,w,A,M,I,S,b,B,N,J,D,F,H,X;if(x&&(!f||!s)&&(s="none"),e._ease=os(s,mo.ease),e._yEase=h?qm(os(h===!0?s:h,mo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=p[0]?rs(p[0]).harness:0,H=N&&i[N.prop],w=jl(i,wh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Il:f0),_._lazy=0),o){if(Dr(e._startAt=Xt.set(p,pi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Il),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),M=pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Nn(l),immediateRender:a,stagger:0,parent:m},w),H&&(M[N.prop]=H),Dr(e._startAt=Xt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Il):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Nn(l)||l&&!g,A=0;A<p.length;A++){if(S=p[A],B=S._gsap||Ch(p)[A]._gsap,e._ptLookup[A]=D={},Du[B.id]&&Ar.length&&ql(),F=y===p?A:y.indexOf(S),N&&(J=new N).init(S,H||w,e,F,y)!==!1&&(e._pt=I=new Fn(e._pt,S,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(j){D[j]=I}),J.priority&&(b=1)),!N||H)for(M in w)jn[M]&&(J=Zm(M,w,e,F,S,y))?J.priority&&(b=1):D[M]=I=Ph.call(e,S,M,"get",w[M],F,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),v&&e._pt&&(xr=e,Ot.killTweensOf(S,D,e.globalTime(t)),X=!e.parent,xr=0),e._pt&&l&&(Du[B.id]=1)}b&&i_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&x.render(ui,!0,!0)},k0=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Bu=1,e.vars[t]="+=0",Lh(e,a),Bu=0,l?ba(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+_n(h.e)),h.b&&(h.b=u.s+_n(h.b))},z0=function(e,t){var n=e[0]?rs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ps({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},H0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},aa=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Ta(e):e},Jm=Rh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qm={};Un(Jm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qm[r]=1});var Xt=function(r){gm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:sa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Ot,v=(vn(n)||xm(n)?sr(n[0]):"length"in i)?[n]:hi(n),x,w,A,M,I,S,b,B;if(a._targets=v.length?Ch(v):ba("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||za(c)||za(u)){if(i=a.vars,x=a.timeline=new Cn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Ji(a),x._start=0,f||za(c)||za(u)){if(M=v.length,b=f&&Fm(f),zi(f))for(I in f)~Jm.indexOf(I)&&(B||(B={}),B[I]=f[I]);for(w=0;w<M;w++)A=jl(i,Qm),A.stagger=0,m&&(A.yoyoEase=m),B&&ps(A,B),S=v[w],A.duration=+aa(c,Ji(a),w,S,v),A.delay=(+aa(u,Ji(a),w,S,v)||0)-a._delay,!f&&M===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(S,A,b?b(w,S,v):0),x._ease=dt.none;x.duration()?c=u=0:a.timeline=0}else if(g){sa(pi(x.vars.defaults,{ease:"none"})),x._ease=os(g.ease||i.ease||"none");var N=0,J,D,F;if(vn(g))g.forEach(function(H){return x.to(v,H,">")}),x.duration();else{A={};for(I in g)I==="ease"||I==="easeEach"||H0(I,g[I],A,g.easeEach);for(I in A)for(J=A[I].sort(function(H,X){return H.t-X.t}),N=0,w=0;w<J.length;w++)D=J[w],F={ease:D.e,duration:(D.t-(w?J[w-1].t:0))/100*c},F[I]=D.v,x.to(v,F,N),N+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Mh&&(xr=Ji(a),Ot.killTweensOf(v),xr=0),Di(y,Ji(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===rn(y._time)&&Nn(h)&&v0(Ji(a))&&y.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),p&&Im(Ji(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-bt&&!u?l:i<bt?0:i,f,d,g,_,p,m,y,v,x;if(!c)y0(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=rn(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===rn(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(x=this._yEase,f=c-f),p=_o(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(v&&this._yEase&&jm(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==c&&this._initted&&(this._lock=o=1,this.render(rn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Om(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!g&&(Zn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!f&&m?-bt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Iu(this,i,s,o),Zn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Iu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Dr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Aa||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lh(this,c),u=this._ease(c/this._dur),k0(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(_c(this,0),this.parent||Lm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xr&&xr.vars.overwrite!==!0)._first||Qo(this),this.parent&&o!==this.timeline.totalDuration()&&go(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&_0(a,l))return s==="all"&&(this._pt=0),Qo(this);for(h=this._op=this._op||[],s!=="all"&&(an(s)&&(_={},Un(s,function(y){return _[y]=1}),s=_),s=z0(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&pc(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Qo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return oa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e}(wa);pi(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new Cn,t=Nu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Dh=function(e,t,n){return e[t]=n},e_=function(e,t,n){return e[t](n)},G0=function(e,t,n,i){return e[t](i.fp,n)},V0=function(e,t,n){return e.setAttribute(t,n)},Ih=function(e,t){return zt(e[t])?e_:bh(e[t])&&e.setAttribute?V0:Dh},t_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},W0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},n_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Oh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},X0=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Y0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?pc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},q0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},i_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Fn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||t_,this.d=l||this,this.set=c||Dh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=q0,this.m=n,this.mt=s,this.tween=i},r}();Un(Rh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wh[r]=1});Qn.TweenMax=Qn.TweenLite=Xt;Qn.TimelineLite=Qn.TimelineMax=Cn;Ot=new Cn({sortChildren:!1,defaults:mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Ym;var as=[],Nl={},j0=[],Tf=0,K0=0,Dc=function(e){return(Nl[e]||j0).map(function(t){return t()})},ku=function(){var e=Date.now(),t=[];e-Tf>2&&(Dc("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ii.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Dc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Tf=e,Dc("matchMedia"))},r_=function(){function r(t,n){this.selector=n&&Uu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=K0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var o=this,a=function(){var c=kt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Uu(s)),kt=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),kt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),$0=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var o=new r_(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ii.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ku):l.addEventListener("change",ku)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),$l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Vm(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=hi(e)[0]);var s=rs(e||{}).get,o=n?Pm:Cm;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var i=e.map(function(u){return Hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=jn[t],a=rs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Qs._pt=0,h.init(e,n?u+n:u,Qs,0,[e]),h.render(1,h),Qs._pt&&Oh(1,Qs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Hn.to(e,ps((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=os(e.ease,mo.ease)),yf(mo,e||{})},config:function(e){return yf(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!Qn[a]&&ba(t+" effect requires "+a+" plugin.")}),Rc[t]=function(a,l,c){return n(hi(a),pi(l||{},s),c)},o&&(Cn.prototype[t]=function(a,l,c){return this.add(Rc[t](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=os(t)},parseEase:function(e,t){return arguments.length?os(e,t):dt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Ot,n,0),n},context:function(e,t){return e?new r_(e,t):kt},matchMedia:function(e){return new $0(e)},matchMediaRefresh:function(){return as.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ku()},addEventListener:function(e,t){var n=Nl[e]||(Nl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Nl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:R0,wrapYoyo:C0,distribute:Fm,random:km,snap:Bm,normalize:w0,getUnit:_n,clamp:b0,splitColor:Wm,toArray:hi,selector:Uu,mapRange:Hm,pipe:T0,unitize:A0,interpolate:P0,shuffle:Um},install:Em,effects:Rc,ticker:Kn,updateRoot:Cn.updateRoot,plugins:jn,globalTimeline:Ot,core:{PropTween:Fn,globals:Tm,Tween:Xt,Timeline:Cn,Animation:wa,getCache:rs,_removeLinkedListItem:pc,reverting:function(){return gn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return Mh=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $l[r]=Xt[r]});Kn.add(Cn.updateRoot);Qs=$l.to({},{duration:0});var Z0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},J0=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Z0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ic=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}J0(a,s)}}}},Hn=$l.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ic("roundProps",Fu),Ic("modifiers"),Ic("snap",Bm))||$l;Xt.version=Cn.version=Hn.version="3.12.4";bm=1;Eh()&&vo();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Af,yr,oo,Nh,es,wf,Uh,Q0=function(){return typeof window<"u"},or={},jr=180/Math.PI,ao=Math.PI/180,As=Math.atan2,Rf=1e8,Fh=/([A-Z])/g,ev=/(left|right|width|margin|padding|x)/i,tv=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},s_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},o_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sv=function(e,t,n){return e.style[t]=n},ov=function(e,t,n){return e.style.setProperty(t,n)},av=function(e,t,n){return e._gsap[t]=n},lv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},cv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},uv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",Bn=Nt+"Origin",hv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Qi(i,a)}):this.tfm[e]=o.x?o[e]:Qi(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},a_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uh(),(!s||!s.isStart)&&!n[Nt]&&(a_(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},l_=function(e,t){var n={target:e,props:[],revert:fv,save:hv};return e._gsap||Hn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},c_,Hu=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n&&n.style?n:yr.createElement(e)},Fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Fh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,xo(t)||t,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),xo=function(e,t,n){var i=t||es,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Cf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Cf[o]:"")+e},Gu=function(){Q0()&&window.document&&(Af=window,yr=Af.document,oo=yr.documentElement,es=Hu("div")||{style:{}},Hu("div"),Nt=xo(Nt),Bn=Nt+"Origin",es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",c_=!!xo("perspective"),Uh=Hn.core.reverting,Nh=1)},Oc=function r(e){var t=Hu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(oo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),oo.removeChild(t),this.style.cssText=s,o},Pf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},u_=function(e){var t;try{t=e.getBBox()}catch{t=Oc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Oc||(t=Oc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pf(e,["x","cx","x1"])||0,y:+Pf(e,["y","cy","y1"])||0,width:0,height:0}:t},h_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&u_(e))},ms=function(e,t){if(t){var n=e.style,i;t in or&&t!==Bn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Fh,"-$1").toLowerCase())):n.removeAttribute(t)}},Sr=function(e,t,n,i,s,o){var a=new Fn(e._pt,t,n,0,1,o?o_:s_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Lf={deg:1,rad:1,turn:1},dv={grid:1,flex:1},Ir=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=es.style,l=ev.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Lf[i]||Lf[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&h_(e),(d||o==="%")&&(or[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Gt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Kn.time&&!p.uncache)return Gt(s/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,g=e[u],y?e.style[t]=y:ms(e,t)}else(d||o==="%")&&!dv[Fi(_,"display")]&&(a.position=Fi(e,"position")),_===e&&(a.position="static"),_.appendChild(es),g=es[u],_.removeChild(es),a.position="absolute";return l&&d&&(p=rs(_),p.time=Kn.time,p.width=_[u]),Gt(f?g*s/h:g&&s?h/g*s:0)},Qi=function(e,t,n,i){var s;return Nh||Gu(),t in Ni&&t!=="transform"&&(t=Ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Jl(Fi(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zl[t]&&Zl[t](e,t,n)||Fi(e,t)||wm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ir(e,t,s,n)+n:s},pv=function(e,t,n,i){if(!n||n==="none"){var s=xo(t,e,1),o=s&&Fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Fi(e,"borderTopColor"))}var a=new Fn(this._pt,e.style,t,0,1,n_),l=0,c=0,u,h,f,d,g,_,p,m,y,v,x,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Fi(e,t)||i,_?e.style[t]=_:ms(e,t)),u=[n,i],Ym(u),n=u[0],i=u[1],f=n.match(Js)||[],w=i.match(Js)||[],w.length){for(;h=Js.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),p.charAt(1)==="="&&(p=so(d,p)+x),m=parseFloat(p),v=p.substr((m+"").length),l=Js.lastIndex-v.length,v||(v=v||Jn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=Ir(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?o_:s_;return Sm.test(i)&&(a.e=0),this._pt=a,a},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Df[n]||n,t[1]=Df[i]||i,t.join(" ")},_v=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],or[a]&&(l=1,a=a==="transformOrigin"?Bn:Nt),ms(n,a);l&&(ms(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),Ca(n,1),o.uncache=1,a_(i)))}},Zl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Fn(e._pt,t,n,0,0,_v);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ra=[1,0,0,1,0,0],f_={},d_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},If=function(e){var t=Fi(e,Nt);return d_(t)?Ra:t.substr(7).match(ym).map(Gt)},Bh=function(e,t){var n=e._gsap||rs(e),i=e.style,s=If(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ra:s):(s===Ra&&!e.offsetParent&&e!==oo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,oo.appendChild(e)),s=If(e),l?i.display=l:ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):oo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Bh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,M,I,S;n?l!==Ra&&(M=d*p-g*_)&&(I=x*(p/M)+w*(-_/M)+(_*y-p*m)/M,S=x*(-g/M)+w*(d/M)-(d*y-g*m)/M,x=I,w=S):(A=u_(e),x=A.x+(~v[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(m=x-c,y=w-u,a.xOffset=h+(m*d+y*_)-m,a.yOffset=f+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(Sr(o,a,"xOrigin",c,x),Sr(o,a,"yOrigin",u,w),Sr(o,a,"xOffset",h,a.xOffset),Sr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Ca=function(e,t){var n=e._gsap||new $m(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fi(e,Bn)||"0",u,h,f,d,g,_,p,m,y,v,x,w,A,M,I,S,b,B,N,J,D,F,H,X,j,$,C,Q,oe,K,Z,fe;return u=h=f=_=p=m=y=v=x=0,d=g=1,n.svg=!!(e.getCTM&&h_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),M=Bh(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Vu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,M)),w=n.xOrigin||0,A=n.yOrigin||0,M!==Ra&&(B=M[0],N=M[1],J=M[2],D=M[3],u=F=M[4],h=H=M[5],M.length===6?(d=Math.sqrt(B*B+N*N),g=Math.sqrt(D*D+J*J),_=B||N?As(N,B)*jr:0,y=J||D?As(J,D)*jr+_:0,y&&(g*=Math.abs(Math.cos(y*ao))),n.svg&&(u-=w-(w*B+A*J),h-=A-(w*N+A*D))):(fe=M[6],K=M[7],C=M[8],Q=M[9],oe=M[10],Z=M[11],u=M[12],h=M[13],f=M[14],I=As(fe,oe),p=I*jr,I&&(S=Math.cos(-I),b=Math.sin(-I),X=F*S+C*b,j=H*S+Q*b,$=fe*S+oe*b,C=F*-b+C*S,Q=H*-b+Q*S,oe=fe*-b+oe*S,Z=K*-b+Z*S,F=X,H=j,fe=$),I=As(-J,oe),m=I*jr,I&&(S=Math.cos(-I),b=Math.sin(-I),X=B*S-C*b,j=N*S-Q*b,$=J*S-oe*b,Z=D*b+Z*S,B=X,N=j,J=$),I=As(N,B),_=I*jr,I&&(S=Math.cos(I),b=Math.sin(I),X=B*S+N*b,j=F*S+H*b,N=N*S-B*b,H=H*S-F*b,B=X,F=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Gt(Math.sqrt(B*B+N*N+J*J)),g=Gt(Math.sqrt(H*H+fe*fe)),I=As(F,H),y=Math.abs(I)>2e-4?I*jr:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!d_(Fi(e,Nt)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(g),n.rotation=Gt(_)+a,n.rotationX=Gt(p)+a,n.rotationY=Gt(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=Jl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?vv:c_?p_:gv,n.uncache=0,n},Jl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nc=function(e,t,n){var i=_n(t);return Gt(parseFloat(t)+parseFloat(Ir(e,"x",n+"px",i)))+i},gv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,p_(e,t)},Hr="0deg",ko="0px",Gr=") ",p_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,x="",w=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==Hr||u!==Hr)){var A=parseFloat(u)*ao,M=Math.sin(A),I=Math.cos(A),S;A=parseFloat(h)*ao,S=Math.cos(A),o=Nc(y,o,M*S*-v),a=Nc(y,a,-Math.sin(A)*-v),l=Nc(y,l,I*S*-v+v)}p!==ko&&(x+="perspective("+p+Gr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==ko||a!==ko||l!==ko)&&(x+=l!==ko||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gr),c!==Hr&&(x+="rotate("+c+Gr),u!==Hr&&(x+="rotateY("+u+Gr),h!==Hr&&(x+="rotateX("+h+Gr),(f!==Hr||d!==Hr)&&(x+="skew("+f+", "+d+Gr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Gr),y.style[Nt]=x||"translate(0, 0)"},vv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),w,A,M,I,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ao,c*=ao,w=Math.cos(l)*h,A=Math.sin(l)*h,M=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=ao,S=Math.tan(c-u),S=Math.sqrt(1+S*S),M*=S,I*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=Gt(w),A=Gt(A),M=Gt(M),I=Gt(I)):(w=h,I=f,A=M=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ir(d,"x",o,"px"),x=Ir(d,"y",a,"px")),(g||_||p||m)&&(v=Gt(v+g-(g*w+_*M)+p),x=Gt(x+_-(g*A+_*I)+m)),(i||s)&&(S=d.getBBox(),v=Gt(v+i/100*S.width),x=Gt(x+s/100*S.height)),S="matrix("+w+","+A+","+M+","+I+","+v+","+x+")",d.setAttribute("transform",S),y&&(d.style[Nt]=S)},xv=function(e,t,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?jr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Rf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Rf)%o-~~(c/o)*o)),e._pt=f=new Fn(e._pt,t,n,i,c,nv),f.e=u,f.u="deg",e._props.push(n),f},Of=function(e,t){for(var n in t)e[n]=t[n];return e},yv=function(e,t,n){var i=Of({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=Ca(n,1),ms(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=Ca(n,1),o[Nt]=c);for(l in or)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=_n(c),g=_n(u),h=d!==g?Ir(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Fn(e._pt,a,l,h,f-h,zu),e._pt.u=g||0,e._props.push(l));Of(a,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Zl[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Qi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var m_={name:"css",register:Gu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,y,v,x,w,A,M,I;Nh||Gu(),this.styles=this.styles||l_(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&Zm(_,t,n,i,e,s)))){if(d=typeof u,g=Zl[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ta(u)),g)g(this,e,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(p=_n(c),m=_n(u)),m?p!==m&&(c=Ir(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],an(c)&&~c.indexOf("random(")&&(c=Ta(c)),_n(c+"")||c==="auto"||(c+=Jn.units[_]||_n(Qi(e,_))||""),(c+"").charAt(1)==="="&&(c=Qi(e,_))):c=Qi(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Ni&&(_==="autoAlpha"&&(f===1&&Qi(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Sr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in or,v){if(this.styles.save(_),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Fn(this._pt,a,Nt,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new Fn(this._pt,w,"scaleY",w.scaleY,(y?so(w.scaleY,y+h):h)-w.scaleY||0,zu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Bn,0,a[Bn]),u=mv(u),w.svg?Vu(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Sr(this,w,"zOrigin",w.zOrigin,m),Sr(this,a,_,Jl(c),Jl(u)));continue}else if(_==="svgOrigin"){Vu(e,u,1,A,0,this);continue}else if(_ in f_){xv(this,w,_,f,y?so(f,y+u):u);continue}else if(_==="smoothOrigin"){Sr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){yv(this,u,e);continue}}else _ in a||(_=xo(_)||_);if(v||(h||h===0)&&(f||f===0)&&!tv.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=_n(u)||(_ in Jn.units?Jn.units[_]:p),p!==m&&(f=Ir(e,_,c,m)),this._pt=new Fn(this._pt,v?w:a,_,f,(y?so(f,y+h):h)-f,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?rv:zu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=iv);else if(_ in a)pv.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Ah(_,u);continue}v||(_ in a?I.push(_,0,a[_]):I.push(_,1,c||e[_])),o.push(_)}}M&&i_(this)},render:function(e,t){if(t.tween._time||!Uh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qi,aliases:Ni,getSetter:function(e,t,n){var i=Ni[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==Bn&&(e._gsap.x||Qi(e,"x"))?n&&wf===n?t==="scale"?lv:av:(wf=n||{})&&(t==="scale"?cv:uv):e.style&&!bh(e.style[t])?sv:~t.indexOf("-")?ov:Ih(e,t)},core:{_removeProperty:ms,_getMatrix:Bh}};Hn.utils.checkPrefix=xo;Hn.core.getStyleSaver=l_;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){or[s]=1});Un(e,function(s){Jn.units[s]="deg",f_[s]=1}),Ni[i[13]]=r+","+e,Un(n,function(s){var o=s.split(":");Ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Hn.registerPlugin(m_);var et=Hn.registerPlugin(m_)||Hn;et.core.Tween;function __(){const r=document.querySelectorAll(".bubble"),e=document.querySelectorAll(".label"),t=window.innerHeight/(r.length+1);r.forEach((n,i)=>{n.style.top=`${(i+1)*t}px`,e[i].style.top=`${(i+1)*t-e[i].offsetHeight/4}px`})}function Nf(r){var e="bubble-"+String(r);const t=document.querySelectorAll(".bubble");t.forEach((h,f)=>{h.id==e?et.to(h.style,{boxShadow:"0 0 10px 5px rgb(204, 255, 255, 0.7)",opacity:1,duration:.5,ease:"power2.easeInOut"},0):et.to(h.style,{boxShadow:"none",opacity:.5,duration:.5,ease:"power2.easeInOut"},0)});const n=document.querySelector(".scrollBar__track"),i=window.innerHeight/(t.length+1),o=i*r/window.innerHeight*100,a=o-i/window.innerHeight*40,l=o+i/window.innerHeight*40;n.style.background=`linear-gradient(transparent ${a}%, white ${o}%, transparent ${l}%)`;const c=document.querySelector(".tray"),u=.8;document.addEventListener("mousemove",function(h){h.clientX<60?et.to(c,{left:"0px",duration:u,ease:"power2.out"},0):et.to(c,{left:"-10%",duration:u,ease:"power2.in"},0)})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="160",ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sv=0,Uf=1,Mv=2,g_=1,v_=2,$i=3,ar=0,kn=1,Ii=2,Rr=0,lo=1,Ff=2,Bf=3,kf=4,bv=5,Jr=100,Ev=101,Tv=102,zf=103,Hf=104,Av=200,wv=201,Rv=202,Cv=203,Wu=204,Xu=205,Pv=206,Lv=207,Dv=208,Iv=209,Ov=210,Nv=211,Uv=212,Fv=213,Bv=214,kv=0,zv=1,Hv=2,Ql=3,Gv=4,Vv=5,Wv=6,Xv=7,x_=0,Yv=1,qv=2,Cr=0,jv=1,Kv=2,$v=3,Zv=4,Jv=5,Qv=6,Gf="attached",ex="detached",y_=300,yo=301,So=302,Yu=303,qu=304,gc=306,Mo=1e3,ai=1001,ec=1002,nn=1003,ju=1004,Ul=1005,mn=1006,S_=1007,_s=1008,Pr=1009,tx=1010,nx=1011,zh=1012,M_=1013,Mr=1014,tr=1015,Pa=1016,b_=1017,E_=1018,ls=1020,ix=1021,li=1023,rx=1024,sx=1025,cs=1026,bo=1027,ox=1028,T_=1029,ax=1030,A_=1031,w_=1033,Uc=33776,Fc=33777,Bc=33778,kc=33779,Vf=35840,Wf=35841,Xf=35842,Yf=35843,R_=36196,qf=37492,jf=37496,Kf=37808,$f=37809,Zf=37810,Jf=37811,Qf=37812,ed=37813,td=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,zc=36492,cd=36494,ud=36495,lx=36283,hd=36284,fd=36285,dd=36286,La=2300,Eo=2301,Hc=2302,pd=2400,md=2401,_d=2402,cx=2500,ux=0,C_=1,Ku=2,P_=3e3,us=3001,hx=3200,fx=3201,L_=0,dx=1,ci="",Bt="srgb",ln="srgb-linear",Hh="display-p3",vc="display-p3-linear",tc="linear",Rt="srgb",nc="rec709",ic="p3",Cs=7680,gd=519,px=512,mx=513,_x=514,D_=515,gx=516,vx=517,xx=518,yx=519,$u=35044,vd="300 es",Zu=1035,nr=2e3,rc=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xd=1234567;const la=Math.PI/180,To=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function cn(r,e,t){return Math.max(e,Math.min(t,r))}function Gh(r,e){return(r%e+e)%e}function Sx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mx(r,e,t){return r!==e?(t-r)/(e-r):0}function ca(r,e,t){return(1-t)*r+t*e}function bx(r,e,t,n){return ca(r,e,1-Math.exp(-t*n))}function Ex(r,e=1){return e-Math.abs(Gh(r,e*2)-e)}function Tx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ax(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Rx(r,e){return r+Math.random()*(e-r)}function Cx(r){return r*(.5-Math.random())}function Px(r){r!==void 0&&(xd=r);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lx(r){return r*la}function Dx(r){return r*To}function Ju(r){return(r&r-1)===0&&r!==0}function Ix(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ox(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const I_={DEG2RAD:la,RAD2DEG:To,generateUUID:bi,clamp:cn,euclideanModulo:Gh,mapLinear:Sx,inverseLerp:Mx,lerp:ca,damp:bx,pingpong:Ex,smoothstep:Tx,smootherstep:Ax,randInt:wx,randFloat:Rx,randFloatSpread:Cx,seededRandom:Px,degToRad:Lx,radToDeg:Dx,isPowerOfTwo:Ju,ceilPowerOfTwo:Ix,floorPowerOfTwo:sc,setQuaternionFromProperEuler:Ox,normalize:St,denormalize:Oi};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],x=i[7],w=i[2],A=i[5],M=i[8];return s[0]=o*_+a*y+l*w,s[3]=o*p+a*v+l*A,s[6]=o*m+a*x+l*M,s[1]=c*_+u*y+h*w,s[4]=c*p+u*v+h*A,s[7]=c*m+u*x+h*M,s[2]=f*_+d*y+g*w,s[5]=f*p+d*v+g*A,s[8]=f*m+d*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new ot;function O_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nx(){const r=Da("canvas");return r.style.display="block",r}const yd={};function ua(r){r in yd||(yd[r]=!0,console.warn(r))}const Sd=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Md=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[ln]:{transfer:tc,primaries:nc,toReference:r=>r,fromReference:r=>r},[Bt]:{transfer:Rt,primaries:nc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vc]:{transfer:tc,primaries:ic,toReference:r=>r.applyMatrix3(Md),fromReference:r=>r.applyMatrix3(Sd)},[Hh]:{transfer:Rt,primaries:ic,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Md),fromReference:r=>r.applyMatrix3(Sd).convertLinearToSRGB()}},Ux=new Set([ln,vc]),mt={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ux.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ha[e].toReference,i=Ha[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ha[r].primaries},getTransfer:function(r){return r===ci?tc:Ha[r].transfer}};function co(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class N_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Da("canvas")),Ps.width=e.width,Ps.height=e.height;const n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=co(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(co(t[n]/255)*255):t[n]=co(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fx=0;class U_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wc(i[o].image)):s.push(Wc(i[o]))}else s=Wc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?N_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bx=0;class sn extends Es{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=ai,i=ai,s=mn,o=_s,a=li,l=Pr,c=sn.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=bi(),this.name="",this.source=new U_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===us?Bt:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?us:P_}set encoding(e){ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?Bt:ci}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=y_;sn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,w=(m+1)/2,A=(u+f)/4,M=(h+_)/4,I=(g+p)/4;return v>x&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=M/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=M/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends Es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===us?Bt:ci),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new U_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends kx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class F_ extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zx extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,m*y);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const x=a*y;if(l=l*p+f*x,c=c*p+d*x,u=u*p+g*x,h=h*p+_*x,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new O,bd=new Hi;class Gi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Va.subVectors(this.max,zo),Ls.subVectors(e.a,zo),Ds.subVectors(e.b,zo),Is.subVectors(e.c,zo),ur.subVectors(Ds,Ls),hr.subVectors(Is,Ds),Vr.subVectors(Ls,Is);let t=[0,-ur.z,ur.y,0,-hr.z,hr.y,0,-Vr.z,Vr.y,ur.z,0,-ur.x,hr.z,0,-hr.x,Vr.z,0,-Vr.x,-ur.y,ur.x,0,-hr.y,hr.x,0,-Vr.y,Vr.x,0];return!Yc(t,Ls,Ds,Is,Va)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Ls,Ds,Is,Va))?!1:(Wa.crossVectors(ur,hr),t=[Wa.x,Wa.y,Wa.z],Yc(t,Ls,Ds,Is,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new O,new O,new O,new O,new O,new O,new O,new O],_i=new O,Ga=new Gi,Ls=new O,Ds=new O,Is=new O,ur=new O,hr=new O,Vr=new O,zo=new O,Va=new O,Wa=new O,Wr=new O;function Yc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Wr.fromArray(r,s);const a=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=n.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hx=new Gi,Ho=new O,qc=new O;class Ti{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(qc)),this.expandByPoint(Ho.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new O,jc=new O,Xa=new O,fr=new O,Kc=new O,Ya=new O,$c=new O;class Lo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=fr.dot(this.direction),l=-fr.dot(Xa),c=fr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jc).addScaledVector(Xa,f),d}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,s){Kc.subVectors(t,e),Ya.subVectors(n,e),$c.crossVectors(Kc,Ya);let o=this.direction.dot($c),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(fr,Ya));if(l<0)return null;const c=a*this.direction.dot(Kc.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot($c);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gx,e,Vx)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),dr.crossVectors(n,Wn),dr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),dr.crossVectors(n,Wn)),dr.normalize(),qa.crossVectors(Wn,dr),i[0]=dr.x,i[4]=qa.x,i[8]=Wn.x,i[1]=dr.y,i[5]=qa.y,i[9]=Wn.y,i[2]=dr.z,i[6]=qa.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],x=n[11],w=n[15],A=i[0],M=i[4],I=i[8],S=i[12],b=i[1],B=i[5],N=i[9],J=i[13],D=i[2],F=i[6],H=i[10],X=i[14],j=i[3],$=i[7],C=i[11],Q=i[15];return s[0]=o*A+a*b+l*D+c*j,s[4]=o*M+a*B+l*F+c*$,s[8]=o*I+a*N+l*H+c*C,s[12]=o*S+a*J+l*X+c*Q,s[1]=u*A+h*b+f*D+d*j,s[5]=u*M+h*B+f*F+d*$,s[9]=u*I+h*N+f*H+d*C,s[13]=u*S+h*J+f*X+d*Q,s[2]=g*A+_*b+p*D+m*j,s[6]=g*M+_*B+p*F+m*$,s[10]=g*I+_*N+p*H+m*C,s[14]=g*S+_*J+p*X+m*Q,s[3]=y*A+v*b+x*D+w*j,s[7]=y*M+v*B+x*F+w*$,s[11]=y*I+v*N+x*H+w*C,s[15]=y*S+v*J+x*X+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,A=t*y+n*v+i*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=y*M,e[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*M,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*M,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*M,e[4]=v*M,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*m+t*f*m)*M,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*M,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*M,e[8]=x*M,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*m-t*h*m)*M,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*M,e[12]=w*M,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*M,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*M,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,y=l*c,v=l*u,x=l*h,w=n.x,A=n.y,M=n.z;return i[0]=(1-(_+m))*w,i[1]=(d+x)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+v)*M,i[9]=(p-y)*M,i[10]=(1-(f+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],gi.copy(this);const c=1/s,u=1/o,h=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=nr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===nr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=nr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===nr)g=(o+s)*h,_=-2*h;else if(a===rc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new O,gi=new at,Gx=new O(0,0,0),Vx=new O(1,1,1),dr=new O,qa=new O,Wn=new O,Ed=new at,Td=new Hi;class xc{constructor(e=0,t=0,n=0,i=xc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xc.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wx=0;const Ad=new O,Ns=new Hi,Yi=new at,ja=new O,Go=new O,Xx=new O,Yx=new Hi,wd=new O(1,0,0),Rd=new O(0,1,0),Cd=new O(0,0,1),qx={type:"added"},jx={type:"removed"};class Ut extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new O,t=new xc,n=new Hi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Go,ja,this.up):Yi.lookAt(ja,Go,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new O(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new O,qi=new O,Zc=new O,ji=new O,Us=new O,Fs=new O,Pd=new O,Jc=new O,Qc=new O,eu=new O;let Ka=!1;class Si{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),qi.subVectors(n,t),Zc.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(qi),l=vi.dot(Zc),c=qi.dot(qi),u=qi.dot(Zc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,n,i,s,o,a,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),qi.subVectors(e,t),vi.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Us.subVectors(i,n),Fs.subVectors(s,n),Jc.subVectors(e,n);const l=Us.dot(Jc),c=Fs.dot(Jc);if(l<=0&&c<=0)return t.copy(n);Qc.subVectors(e,i);const u=Us.dot(Qc),h=Fs.dot(Qc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Us,o);eu.subVectors(e,s);const d=Us.dot(eu),g=Fs.dot(eu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fs,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Pd.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Pd,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},$a={h:0,s:0,l:0};function tu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Gh(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=tu(o,s,e+1/3),this.g=tu(o,s,e),this.b=tu(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=B_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return mt.fromWorkingColorSpace(dn.copy(this),e),Math.round(cn(dn.r*255,0,255))*65536+Math.round(cn(dn.g*255,0,255))*256+Math.round(cn(dn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Bt){mt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL($a);const n=ca(pr.h,$a.h,t),i=ca(pr.s,$a.s,t),s=ca(pr.l,$a.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const dn=new tt;tt.NAMES=B_;let Kx=0;class Bi extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=lo,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wu&&(n.blendSrc=this.blendSrc),this.blendDst!==Xu&&(n.blendDst=this.blendDst),this.blendEquation!==Jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ts extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new O,Za=new Ke;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$u&&(e.usage=this.usage),e}}class k_ extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class z_ extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ei extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $x=0;const ti=new at,nu=new Ut,Bs=new O,Xn=new Gi,Vo=new Gi,Jt=new O;class Ai extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?z_:k_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Xn.min,Vo.min),Xn.expandByPoint(Jt),Jt.addVectors(Xn.max,Vo.max),Xn.expandByPoint(Jt)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Jt.add(Bs)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new O,u[b]=new O;const h=new O,f=new O,d=new O,g=new Ke,_=new Ke,p=new Ke,m=new O,y=new O;function v(b,B,N){h.fromArray(i,b*3),f.fromArray(i,B*3),d.fromArray(i,N*3),g.fromArray(o,b*2),_.fromArray(o,B*2),p.fromArray(o,N*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(J),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(J),c[b].add(m),c[B].add(m),c[N].add(m),u[b].add(y),u[B].add(y),u[N].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,B=x.length;b<B;++b){const N=x[b],J=N.start,D=N.count;for(let F=J,H=J+D;F<H;F+=3)v(n[F+0],n[F+1],n[F+2])}const w=new O,A=new O,M=new O,I=new O;function S(b){M.fromArray(s,b*3),I.copy(M);const B=c[b];w.copy(B),w.sub(M.multiplyScalar(M.dot(B))).normalize(),A.crossVectors(I,B);const J=A.dot(u[b])<0?-1:1;l[b*4]=w.x,l[b*4+1]=w.y,l[b*4+2]=w.z,l[b*4+3]=J}for(let b=0,B=x.length;b<B;++b){const N=x[b],J=N.start,D=N.count;for(let F=J,H=J+D;F<H;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new at,Xr=new Lo,Ja=new Ti,Dd=new O,ks=new O,zs=new O,Hs=new O,iu=new O,Qa=new O,el=new Ke,tl=new Ke,nl=new Ke,Id=new O,Od=new O,Nd=new O,il=new O,rl=new O;class fi extends Ut{constructor(e=new Ai,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(iu.fromBufferAttribute(h,e),o?Qa.addScaledVector(iu,u):Qa.addScaledVector(iu.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ja,Dd)===null||Xr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ld.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,w=v;x<w;x+=3){const A=a.getX(x),M=a.getX(x+1),I=a.getX(x+2);i=sl(this,m,e,n,c,u,h,A,M,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);i=sl(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,w=v;x<w;x+=3){const A=x,M=x+1,I=x+2;i=sl(this,m,e,n,c,u,h,A,M,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,x=p+2;i=sl(this,o,e,n,c,u,h,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Zx(r,e,t,n,i,s,o,a){let l;if(e.side===kn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ar,a),l===null)return null;rl.copy(a),rl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:r}}function sl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ks),r.getVertexPosition(l,zs),r.getVertexPosition(c,Hs);const u=Zx(r,e,t,n,ks,zs,Hs,il);if(u){i&&(el.fromBufferAttribute(i,a),tl.fromBufferAttribute(i,l),nl.fromBufferAttribute(i,c),u.uv=Si.getInterpolation(il,ks,zs,Hs,el,tl,nl,new Ke)),s&&(el.fromBufferAttribute(s,a),tl.fromBufferAttribute(s,l),nl.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(il,ks,zs,Hs,el,tl,nl,new Ke),u.uv2=u.uv1),o&&(Id.fromBufferAttribute(o,a),Od.fromBufferAttribute(o,l),Nd.fromBufferAttribute(o,c),u.normal=Si.getInterpolation(il,ks,zs,Hs,Id,Od,Nd,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Si.getNormal(ks,zs,Hs,h.normal),u.face=h}return u}class Ba extends Ai{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(h,2));function g(_,p,m,y,v,x,w,A,M,I,S){const b=x/M,B=w/I,N=x/2,J=w/2,D=A/2,F=M+1,H=I+1;let X=0,j=0;const $=new O;for(let C=0;C<H;C++){const Q=C*B-J;for(let oe=0;oe<F;oe++){const K=oe*b-N;$[_]=K*y,$[p]=Q*v,$[m]=D,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(oe/M),h.push(1-C/I),X+=1}}for(let C=0;C<I;C++)for(let Q=0;Q<M;Q++){const oe=f+Q+F*C,K=f+Q+F*(C+1),Z=f+(Q+1)+F*(C+1),fe=f+(Q+1)+F*C;l.push(oe,K,fe),l.push(K,Z,fe),j+=6}a.addGroup(d,j,S),d+=j,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=Ao(r[t]);for(const i in n)e[i]=n[i]}return e}function Jx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function H_(r){return r.getRenderTarget()===null?r.outputColorSpace:mt.workingColorSpace}const Qx={clone:Ao,merge:bn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class G_ extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends G_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Vs=1;class ny extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Gs,Vs,e,t);i.layers=this.layers,this.add(i);const s=new Rn(Gs,Vs,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Gs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Gs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Gs,Vs,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Gs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===nr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class V_ extends sn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iy extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?Bt:ci),this.texture=new V_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ba(5,5,5),s=new vs({name:"CubemapFromEquirect",uniforms:Ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Rr});s.uniforms.tEquirect.value=t;const o=new fi(i,s),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=mn),new ny(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ru=new O,ry=new O,sy=new ot;class gr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ru.subVectors(n,t).cross(ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ru),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sy.getNormalMatrix(e),i=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Ti,ol=new O;class Wh{constructor(e=new gr,t=new gr,n=new gr,i=new gr,s=new gr,o=new gr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,p-d,x-m).normalize(),n[1].setComponents(l+s,f+c,p+d,x+m).normalize(),n[2].setComponents(l+o,f+u,p+g,x+y).normalize(),n[3].setComponents(l-o,f-u,p-g,x-y).normalize(),n[4].setComponents(l-a,f-h,p-_,x-v).normalize(),t===nr)n[5].setComponents(l+a,f+h,p+_,x+v).normalize();else if(t===rc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ol.x=i.normal.x>0?e.max.x:e.min.x,ol.y=i.normal.y>0?e.max.y:e.min.y,ol.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function oy(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Xh extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,x=y+c*(m+1),w=y+1+c*(m+1),A=y+1+c*m;d.push(v,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Ei(g,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.width,e.height,e.widthSegments,e.heightSegments)}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ky=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ES=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:ay,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:uy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:dy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:_y,begin_vertex:gy,beginnormal_vertex:vy,bsdfs:xy,iridescence_fragment:yy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:My,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:Ty,color_fragment:Ay,color_pars_fragment:wy,color_pars_vertex:Ry,color_vertex:Cy,common:Py,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Iy,displacementmap_vertex:Oy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Uy,colorspace_fragment:Fy,colorspace_pars_fragment:By,envmap_fragment:ky,envmap_common_pars_fragment:zy,envmap_pars_fragment:Hy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:eS,envmap_vertex:Vy,fog_vertex:Wy,fog_pars_vertex:Xy,fog_fragment:Yy,fog_pars_fragment:qy,gradientmap_pars_fragment:jy,lightmap_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Jy,lights_pars_begin:Qy,lights_toon_fragment:tS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:rS,lights_physical_fragment:sS,lights_physical_pars_fragment:oS,lights_fragment_begin:aS,lights_fragment_maps:lS,lights_fragment_end:cS,logdepthbuf_fragment:uS,logdepthbuf_pars_fragment:hS,logdepthbuf_pars_vertex:fS,logdepthbuf_vertex:dS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:_S,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:xS,morphcolor_vertex:yS,morphnormal_vertex:SS,morphtarget_pars_vertex:MS,morphtarget_vertex:bS,normal_fragment_begin:ES,normal_fragment_maps:TS,normal_pars_fragment:AS,normal_pars_vertex:wS,normal_vertex:RS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:IS,opaque_fragment:OS,packing:NS,premultiplied_alpha_fragment:US,project_vertex:FS,dithering_fragment:BS,dithering_pars_fragment:kS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:HS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:VS,shadowmap_vertex:WS,shadowmask_pars_fragment:XS,skinbase_vertex:YS,skinning_pars_vertex:qS,skinning_vertex:jS,skinnormal_vertex:KS,specularmap_fragment:$S,specularmap_pars_fragment:ZS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:_M,equirect_frag:gM,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:SM,meshlambert_vert:MM,meshlambert_frag:bM,meshmatcap_vert:EM,meshmatcap_frag:TM,meshnormal_vert:AM,meshnormal_frag:wM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:DM,meshtoon_frag:IM,points_vert:OM,points_frag:NM,shadow_vert:UM,shadow_frag:FM,sprite_vert:BM,sprite_frag:kM},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Li={basic:{uniforms:bn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:bn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:bn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:bn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:bn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:bn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:bn([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:bn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:bn([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:bn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:bn([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:bn([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:bn([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Li.physical={uniforms:bn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const al={r:0,b:0,g:0};function zM(r,e,t,n,i,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gc)?(u===void 0&&(u=new fi(new Ba(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:Ao(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=mt.getTransfer(v.colorSpace)!==Rt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new fi(new Xh(2,2),new vs({name:"BackgroundMaterial",uniforms:Ao(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(al,H_(r)),n.buffers.color.setClear(al.r,al.g,al.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function HM(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(D,F,H,X,j){let $=!1;if(o){const C=_(X,H,F);c!==C&&(c=C,d(c.object)),$=m(D,X,H,j),$&&y(D,X,H,j)}else{const C=F.wireframe===!0;(c.geometry!==X.id||c.program!==H.id||c.wireframe!==C)&&(c.geometry=X.id,c.program=H.id,c.wireframe=C,$=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,I(D,F,H,X),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,F,H){const X=H.wireframe===!0;let j=a[D.id];j===void 0&&(j={},a[D.id]=j);let $=j[F.id];$===void 0&&($={},j[F.id]=$);let C=$[X];return C===void 0&&(C=p(f()),$[X]=C),C}function p(D){const F=[],H=[],X=[];for(let j=0;j<i;j++)F[j]=0,H[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:X,object:D,attributes:{},index:null}}function m(D,F,H,X){const j=c.attributes,$=F.attributes;let C=0;const Q=H.getAttributes();for(const oe in Q)if(Q[oe].location>=0){const Z=j[oe];let fe=$[oe];if(fe===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;C++}return c.attributesNum!==C||c.index!==X}function y(D,F,H,X){const j={},$=F.attributes;let C=0;const Q=H.getAttributes();for(const oe in Q)if(Q[oe].location>=0){let Z=$[oe];Z===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),j[oe]=fe,C++}c.attributes=j,c.attributesNum=C,c.index=X}function v(){const D=c.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function x(D){w(D,0)}function w(D,F){const H=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;H[D]=1,X[D]===0&&(r.enableVertexAttribArray(D),X[D]=1),j[D]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),j[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let H=0,X=F.length;H<X;H++)F[H]!==D[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function M(D,F,H,X,j,$,C){C===!0?r.vertexAttribIPointer(D,F,H,j,$):r.vertexAttribPointer(D,F,H,X,j,$)}function I(D,F,H,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=X.attributes,$=H.getAttributes(),C=F.defaultAttributeValues;for(const Q in $){const oe=$[Q];if(oe.location>=0){let K=j[Q];if(K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Z=K.normalized,fe=K.itemSize,Ee=t.get(K);if(Ee===void 0)continue;const ge=Ee.buffer,De=Ee.type,Ie=Ee.bytesPerElement,Ue=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||K.gpuType===M_);if(K.isInterleavedBufferAttribute){const He=K.data,G=He.stride,Ge=K.offset;if(He.isInstancedInterleavedBuffer){for(let Me=0;Me<oe.locationSize;Me++)w(oe.location+Me,He.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Me=0;Me<oe.locationSize;Me++)x(oe.location+Me);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Me=0;Me<oe.locationSize;Me++)M(oe.location+Me,fe/oe.locationSize,De,Z,G*Ie,(Ge+fe/oe.locationSize*Me)*Ie,Ue)}else{if(K.isInstancedBufferAttribute){for(let He=0;He<oe.locationSize;He++)w(oe.location+He,K.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let He=0;He<oe.locationSize;He++)x(oe.location+He);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let He=0;He<oe.locationSize;He++)M(oe.location+He,fe/oe.locationSize,De,Z,fe*Ie,fe/oe.locationSize*He*Ie,Ue)}}else if(C!==void 0){const Z=C[Q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(oe.location,Z);break;case 3:r.vertexAttrib3fv(oe.location,Z);break;case 4:r.vertexAttrib4fv(oe.location,Z);break;default:r.vertexAttrib1fv(oe.location,Z)}}}}A()}function S(){N();for(const D in a){const F=a[D];for(const H in F){const X=F[H];for(const j in X)g(X[j].object),delete X[j];delete F[H]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const H in F){const X=F[H];for(const j in X)g(X[j].object),delete X[j];delete F[H]}delete a[D.id]}function B(D){for(const F in a){const H=a[F];if(H[D.id]===void 0)continue;const X=H[D.id];for(const j in X)g(X[j].object),delete X[j];delete H[D.id]}}function N(){J(),u=!0,c!==l&&(c=l,d(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function GM(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function VM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),w=v&&x,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:A}}function WM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new gr,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let x=m.clippingState||null;l.value=x,x=u(g,f,v,d);for(let w=0;w!==v;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function XM(r){let e=new WeakMap;function t(o,a){return a===Yu?o.mapping=yo:a===qu&&(o.mapping=So),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yu||a===qu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iy(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yh extends G_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,Ud=[.125,.215,.35,.446,.526,.582],Qr=20,su=new Yh,Fd=new tt;let ou=null,au=0,lu=0;const Kr=(1+Math.sqrt(5))/2,Ws=1/Kr,Bd=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Kr,Ws),new O(0,Kr,-Ws),new O(Ws,0,Kr),new O(-Ws,0,Kr),new O(Kr,Ws,0),new O(-Kr,Ws,0)];class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Pa,format:li,colorSpace:ln,depthBuffer:!1},i=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(s)),this._blurMaterial=qM(s,e,t)}return i}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,su)}_sceneToCubeUV(e,t,n,i){const a=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fd),u.toneMapping=Cr,u.autoClear=!1;const d=new ts({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new fi(new Ba,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Fd),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ll(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yo||e.mapping===So;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,su)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Bd[(i-1)%Bd.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Qr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Qr;p>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qr}`);const m=[];let y=0;for(let M=0;M<Qr;++M){const I=M/_,S=Math.exp(-I*I/2);m.push(S),M===0?y+=S:M<p&&(y+=2*S)}for(let M=0;M<m.length;M++)m[M]=m[M]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[i],w=3*x*(i>v-eo?i-v+eo:0),A=4*(this._cubeSize-x);ll(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(h,su)}}function YM(r){const e=[],t=[],n=[];let i=r;const s=r-eo+1+Ud.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-eo?l=Ud[o-r+eo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),v=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let A=0;A<d;A++){const M=A%3*2/3-1,I=A>2?0:-1,S=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];y.set(S,_*g*A),v.set(f,p*g*A);const b=[A,A,A,A,A,A];x.set(b,m*g*A)}const w=new Ai;w.setAttribute("position",new Dn(y,_)),w.setAttribute("uv",new Dn(v,p)),w.setAttribute("faceIndex",new Dn(x,m)),e.push(w),i>eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(r,e,t){const n=new gs(r,e,t);return n.texture.mapping=gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ll(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qM(r,e,t){const n=new Float32Array(Qr),i=new O(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Hd(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Gd(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yu||l===qu,u=l===yo||l===So;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kd(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new kd(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function KM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $M(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const w=y[v+0],A=y[v+1],M=y[v+2];f.push(w,A,A,M,M,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const w=v+0,A=v+1,M=v+2;f.push(w,A,A,M,M,w)}}else return;const p=new(O_(f)?z_:k_)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ZM(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),t.update(g,s,1)}function h(d,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,d*l,_),t.update(g,s,_)}function f(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function JM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function QM(r,e){return r[0]-e[0]}function eb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function tb(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let F=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var d=F;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),w===!0&&(S=3);let b=u.attributes.position.count*S,B=1;b>e.maxTextureSize&&(B=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const N=new Float32Array(b*B*4*_),J=new F_(N,b,B,_);J.type=tr,J.needsUpdate=!0;const D=S*4;for(let H=0;H<_;H++){const X=A[H],j=M[H],$=I[H],C=b*B*4*H;for(let Q=0;Q<X.count;Q++){const oe=Q*D;v===!0&&(o.fromBufferAttribute(X,Q),N[C+oe+0]=o.x,N[C+oe+1]=o.y,N[C+oe+2]=o.z,N[C+oe+3]=0),x===!0&&(o.fromBufferAttribute(j,Q),N[C+oe+4]=o.x,N[C+oe+5]=o.y,N[C+oe+6]=o.z,N[C+oe+7]=0),w===!0&&(o.fromBufferAttribute($,Q),N[C+oe+8]=o.x,N[C+oe+9]=o.y,N[C+oe+10]=o.z,N[C+oe+11]=$.itemSize===4?o.w:1)}}p={count:_,texture:J,size:new Ke(b,B)},s.set(u,p),u.addEventListener("dispose",F)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const w=_[x];w[0]=x,w[1]=f[x]}_.sort(eb);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(QM);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const w=a[x],A=w[0],M=w[1];A!==Number.MAX_SAFE_INTEGER&&M?(p&&u.getAttribute("morphTarget"+x)!==p[A]&&u.setAttribute("morphTarget"+x,p[A]),m&&u.getAttribute("morphNormal"+x)!==m[A]&&u.setAttribute("morphNormal"+x,m[A]),i[x]=M,y+=M):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function nb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class X_ extends sn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:cs,u!==cs&&u!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=Mr),n===void 0&&u===bo&&(n=ls),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Y_=new sn,q_=new X_(1,1);q_.compareFunction=D_;const j_=new F_,K_=new zx,$_=new V_,Vd=[],Wd=[],Xd=new Float32Array(16),Yd=new Float32Array(9),qd=new Float32Array(4);function Do(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vd[i];if(s===void 0&&(s=new Float32Array(i),Vd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yc(r,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ib(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;qd.set(n),r.uniformMatrix2fv(this.addr,!1,qd),$t(t,n)}}function lb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Yd.set(n),r.uniformMatrix3fv(this.addr,!1,Yd),$t(t,n)}}function cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Xd.set(n),r.uniformMatrix4fv(this.addr,!1,Xd),$t(t,n)}}function ub(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?q_:Y_;t.setTexture2D(e||s,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||K_,i)}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$_,i)}function Sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||j_,i)}function Mb(r){switch(r){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return _b;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Sb}}function bb(r,e){r.uniform1fv(this.addr,e)}function Eb(r,e){const t=Do(e,this.size,2);r.uniform2fv(this.addr,t)}function Tb(r,e){const t=Do(e,this.size,3);r.uniform3fv(this.addr,t)}function Ab(r,e){const t=Do(e,this.size,4);r.uniform4fv(this.addr,t)}function wb(r,e){const t=Do(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rb(r,e){const t=Do(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cb(r,e){const t=Do(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pb(r,e){r.uniform1iv(this.addr,e)}function Lb(r,e){r.uniform2iv(this.addr,e)}function Db(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Ob(r,e){r.uniform1uiv(this.addr,e)}function Nb(r,e){r.uniform2uiv(this.addr,e)}function Ub(r,e){r.uniform3uiv(this.addr,e)}function Fb(r,e){r.uniform4uiv(this.addr,e)}function Bb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Y_,s[o])}function kb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||K_,s[o])}function zb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$_,s[o])}function Hb(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||j_,s[o])}function Gb(r){switch(r){case 5126:return bb;case 35664:return Eb;case 35665:return Tb;case 35666:return Ab;case 35674:return wb;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return Ob;case 36294:return Nb;case 36295:return Ub;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mb(t.type)}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gb(t.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function jd(r,e){r.seq.push(e),r.map[e.id]=e}function Yb(r,e,t){const n=r.name,i=n.length;for(cu.lastIndex=0;;){const s=cu.exec(n),o=cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jd(t,c===void 0?new Vb(a,r,e):new Wb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Xb(a),jd(t,h)),t=h}}}class Fl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Yb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qb=37297;let jb=0;function Kb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $b(r){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(r);let n;switch(e===t?n="":e===ic&&t===nc?n="LinearDisplayP3ToLinearSRGB":e===nc&&t===ic&&(n="LinearSRGBToLinearDisplayP3"),r){case ln:case vc:return[n,"LinearTransferOETF"];case Bt:case Hh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function $d(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Kb(r.getShaderSource(e),o)}else return i}function Zb(r,e){const t=$b(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jb(r,e){let t;switch(e){case jv:t="Linear";break;case Kv:t="Reinhard";break;case $v:t="OptimizedCineon";break;case Zv:t="ACESFilmic";break;case Qv:t="AgX";break;case Jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(to).join(`
`)}function eE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(to).join(`
`)}function tE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function to(r){return r!==""}function Zd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(r){return r.replace(iE,sE)}const rE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sE(r,e){let t=it[e];if(t===void 0){const n=rE.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qu(t)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(r){return r.replace(oE,aE)}function aE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ep(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function cE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yo:case So:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function hE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case qv:e="ENVMAP_BLENDING_ADD";break}return e}function fE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lE(t),c=cE(t),u=uE(t),h=hE(t),f=fE(t),d=t.isWebGL2?"":Qb(t),g=eE(t),_=tE(s),p=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(to).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(to).join(`
`),y.length>0&&(y+=`
`)):(m=[ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),y=[d,ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?it.tonemapping_pars_fragment:"",t.toneMapping!==Cr?Jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),o=Qu(o),o=Zd(o,t),o=Jd(o,t),a=Qu(a),a=Zd(a,t),a=Jd(a,t),o=Qd(o),a=Qd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=v+m+o,w=v+y+a,A=Kd(i,i.VERTEX_SHADER,x),M=Kd(i,i.FRAGMENT_SHADER,w);i.attachShader(p,A),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function I(N){if(r.debug.checkShaderErrors){const J=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(M).trim();let H=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,M);else{const j=$d(i,A,"vertex"),$=$d(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+j+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||F==="")&&(X=!1);X&&(N.diagnostics={runnable:H,programLog:J,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:y}})}i.deleteShader(A),i.deleteShader(M),S=new Fl(i,p),b=nE(i,p)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,qb)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=M,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _E(e),t.set(e,n)),n}}class _E{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function gE(r,e,t,n,i,s,o){const a=new Vh,l=new mE,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,B,N,J){const D=N.fog,F=J.geometry,H=S.isMeshStandardMaterial?N.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),j=X&&X.mapping===gc?X.image.height:null,$=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const C=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Q=C!==void 0?C.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let K,Z,fe,Ee;if($){const qe=Li[$];K=qe.vertexShader,Z=qe.fragmentShader}else K=S.vertexShader,Z=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const ge=r.getRenderTarget(),De=J.isInstancedMesh===!0,Ie=J.isBatchedMesh===!0,Ue=!!S.map,He=!!S.matcap,G=!!X,Ge=!!S.aoMap,Me=!!S.lightMap,Oe=!!S.bumpMap,be=!!S.normalMap,V=!!S.displacementMap,Be=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,k=S.anisotropy>0,re=S.clearcoat>0,ie=S.iridescence>0,se=S.sheen>0,ve=S.transmission>0,ae=k&&!!S.anisotropyMap,xe=re&&!!S.clearcoatMap,Le=re&&!!S.clearcoatNormalMap,We=re&&!!S.clearcoatRoughnessMap,ne=ie&&!!S.iridescenceMap,$e=ie&&!!S.iridescenceThicknessMap,P=se&&!!S.sheenColorMap,te=se&&!!S.sheenRoughnessMap,de=!!S.specularMap,le=!!S.specularColorMap,we=!!S.specularIntensityMap,Ye=ve&&!!S.transmissionMap,Je=ve&&!!S.thicknessMap,ye=!!S.gradientMap,he=!!S.alphaMap,L=S.alphaTest>0,ce=!!S.alphaHash,ue=!!S.extensions,Fe=!!F.attributes.uv1,Ce=!!F.attributes.uv2,nt=!!F.attributes.uv3;let Se=Cr;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Se=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:Z,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ie,instancing:De,instancingColor:De&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ln,map:Ue,matcap:He,envMap:G,envMapMode:G&&X.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:Me,bumpMap:Oe,normalMap:be,displacementMap:f&&V,emissiveMap:Be,normalMapObjectSpace:be&&S.normalMapType===dx,normalMapTangentSpace:be&&S.normalMapType===L_,metalnessMap:R,roughnessMap:E,anisotropy:k,anisotropyMap:ae,clearcoat:re,clearcoatMap:xe,clearcoatNormalMap:Le,clearcoatRoughnessMap:We,iridescence:ie,iridescenceMap:ne,iridescenceThicknessMap:$e,sheen:se,sheenColorMap:P,sheenRoughnessMap:te,specularMap:de,specularColorMap:le,specularIntensityMap:we,transmission:ve,transmissionMap:Ye,thicknessMap:Je,gradientMap:ye,opaque:S.transparent===!1&&S.blending===lo,alphaMap:he,alphaTest:L,alphaHash:ce,combine:S.combine,mapUv:Ue&&_(S.map.channel),aoMapUv:Ge&&_(S.aoMap.channel),lightMapUv:Me&&_(S.lightMap.channel),bumpMapUv:Oe&&_(S.bumpMap.channel),normalMapUv:be&&_(S.normalMap.channel),displacementMapUv:V&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ae&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(S.sheenRoughnessMap.channel),specularMapUv:de&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:we&&_(S.specularIntensityMap.channel),transmissionMapUv:Ye&&_(S.transmissionMap.channel),thicknessMapUv:Je&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(be||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ce,vertexUv3s:nt,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Ue||he),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ii,flipSided:S.side===kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)b.push(B),b.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(y(b,S),v(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const b=g[S.type];let B;if(b){const N=Li[b];B=Qx.clone(N.uniforms)}else B=S.uniforms;return B}function w(S,b){let B;for(let N=0,J=c.length;N<J;N++){const D=c[N];if(D.cacheKey===b){B=D,++B.usedTimes;break}}return B===void 0&&(B=new dE(r,b,S,s),c.push(B)),B}function A(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function M(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:M,programs:c,dispose:I}}function vE(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function tp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function np(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||xE),n.length>1&&n.sort(f||tp),i.length>1&&i.sort(f||tp)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function yE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new np,r.set(n,[o])):i>=s.length?(o=new np,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function SE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new tt};break;case"SpotLight":t={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function ME(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bE=0;function EE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TE(r,e){const t=new SE,n=ME(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,o=new at,a=new at;function l(u,h){let f=0,d=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,x=0,w=0,A=0,M=0,I=0,S=0;u.sort(EE);const b=h===!0?Math.PI:1;for(let N=0,J=u.length;N<J;N++){const D=u[N],F=D.color,H=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*H*b,d+=F.g*H*b,g+=F.b*H*b;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],H);S++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const C=D.shadow,Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.directionalShadow[_]=Q,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=$,_++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(F).multiplyScalar(H*b),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[m]=$;const C=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,C.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[m]=C.matrix,D.castShadow){const Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=j,A++}m++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(F).multiplyScalar(H),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=$,y++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*b),$.distance=D.distance,$.decay=D.decay,D.castShadow){const C=D.shadow,Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=$,p++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(H*b),$.groundColor.copy(D.groundColor).multiplyScalar(H*b),i.hemi[v]=$,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==m||B.rectAreaLength!==y||B.hemiLength!==v||B.numDirectionalShadows!==x||B.numPointShadows!==w||B.numSpotShadows!==A||B.numSpotMaps!==M||B.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+M-I,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=S,B.directionalLength=_,B.pointLength=p,B.spotLength=m,B.rectAreaLength=y,B.hemiLength=v,B.numDirectionalShadows=x,B.numPointShadows=w,B.numSpotShadows=A,B.numSpotMaps=M,B.numLightProbes=S,i.version=bE++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const x=u[y];if(x.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function ip(r,e){const t=new TE(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function AE(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ip(r,e),t.set(s,[l])):o>=a.length?(l=new ip(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class wE extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LE(r,e,t){let n=new Wh;const i=new Ke,s=new Ke,o=new Tt,a=new wE({depthPacking:fx}),l=new RE,c={},u=t.maxTextureSize,h={[ar]:kn,[kn]:ar,[Ii]:Ii},f=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:CE,fragmentShader:PE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let m=this.type;this.render=function(A,M,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),b=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Rr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const J=m!==$i&&this.type===$i,D=m===$i&&this.type!==$i;for(let F=0,H=A.length;F<H;F++){const X=A[F],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const $=j.getFrameExtents();if(i.multiply($),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,j.mapSize.y=s.y)),j.map===null||J===!0||D===!0){const Q=this.type!==$i?{minFilter:nn,magFilter:nn}:{};j.map!==null&&j.map.dispose(),j.map=new gs(i.x,i.y,Q),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const C=j.getViewportCount();for(let Q=0;Q<C;Q++){const oe=j.getViewport(Q);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),N.viewport(o),j.updateMatrices(X,Q),n=j.getFrustum(),x(M,I,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===$i&&y(j,I),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,b,B)};function y(A,M){const I=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gs(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(M,null,I,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(M,null,I,d,_,null)}function v(A,M,I,S){let b=null;const B=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)b=B;else if(b=I.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=b.uuid,J=M.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let F=D[J];F===void 0&&(F=b.clone(),D[J]=F,M.addEventListener("dispose",w)),b=F}if(b.visible=M.visible,b.wireframe=M.wireframe,S===$i?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:h[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=r.properties.get(b);N.light=I}return b}function x(A,M,I,S,b){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===$i)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const J=e.update(A),D=A.material;if(Array.isArray(D)){const F=J.groups;for(let H=0,X=F.length;H<X;H++){const j=F[H],$=D[j.materialIndex];if($&&$.visible){const C=v(A,$,S,b);A.onBeforeShadow(r,A,M,I,J,C,j),r.renderBufferDirect(I,null,J,C,A,j),A.onAfterShadow(r,A,M,I,J,C,j)}}}else if(D.visible){const F=v(A,D,S,b);A.onBeforeShadow(r,A,M,I,J,F,null),r.renderBufferDirect(I,null,J,F,A,null),A.onAfterShadow(r,A,M,I,J,F,null)}}const N=A.children;for(let J=0,D=N.length;J<D;J++)x(N[J],M,I,S,b)}function w(A){A.target.removeEventListener("dispose",w);for(const I in c){const S=c[I],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function DE(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const ce=new Tt;let ue=null;const Fe=new Tt(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!L&&(r.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,nt,Se,Te,qe){qe===!0&&(Ce*=Te,nt*=Te,Se*=Te),ce.set(Ce,nt,Se,Te),Fe.equals(ce)===!1&&(r.clearColor(Ce,nt,Se,Te),Fe.copy(ce))},reset:function(){L=!1,ue=null,Fe.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,ue=null,Fe=null;return{setTest:function(Ce){Ce?Ie(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!L&&(r.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case kv:r.depthFunc(r.NEVER);break;case zv:r.depthFunc(r.ALWAYS);break;case Hv:r.depthFunc(r.LESS);break;case Ql:r.depthFunc(r.LEQUAL);break;case Gv:r.depthFunc(r.EQUAL);break;case Vv:r.depthFunc(r.GEQUAL);break;case Wv:r.depthFunc(r.GREATER);break;case Xv:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){Fe!==Ce&&(r.clearDepth(Ce),Fe=Ce)},reset:function(){L=!1,ce=null,ue=null,Fe=null}}}function o(){let L=!1,ce=null,ue=null,Fe=null,Ce=null,nt=null,Se=null,Te=null,qe=null;return{setTest:function(je){L||(je?Ie(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(je){ce!==je&&!L&&(r.stencilMask(je),ce=je)},setFunc:function(je,me,Xe){(ue!==je||Fe!==me||Ce!==Xe)&&(r.stencilFunc(je,me,Xe),ue=je,Fe=me,Ce=Xe)},setOp:function(je,me,Xe){(nt!==je||Se!==me||Te!==Xe)&&(r.stencilOp(je,me,Xe),nt=je,Se=me,Te=Xe)},setLocked:function(je){L=je},setClear:function(je){qe!==je&&(r.clearStencil(je),qe=je)},reset:function(){L=!1,ce=null,ue=null,Fe=null,Ce=null,nt=null,Se=null,Te=null,qe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,x=null,w=null,A=null,M=null,I=null,S=new tt(0,0,0),b=0,B=!1,N=null,J=null,D=null,F=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),j=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),j=$>=2);let Q=null,oe={};const K=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),fe=new Tt().fromArray(K),Ee=new Tt().fromArray(Z);function ge(L,ce,ue,Fe){const Ce=new Uint8Array(4),nt=r.createTexture();r.bindTexture(L,nt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ue;Se++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ce,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(ce+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return nt}const De={};De[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(r.DEPTH_TEST),l.setFunc(Ql),Be(!1),R(Uf),Ie(r.CULL_FACE),be(Rr);function Ie(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function Ue(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function He(L,ce){return d[L]!==ce?(r.bindFramebuffer(L,ce),d[L]=ce,n&&(L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function G(L,ce){let ue=_,Fe=!1;if(L)if(ue=g.get(ce),ue===void 0&&(ue=[],g.set(ce,ue)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(ue.length!==Ce.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,Se=Ce.length;nt<Se;nt++)ue[nt]=r.COLOR_ATTACHMENT0+nt;ue.length=Ce.length,Fe=!0}}else ue[0]!==r.COLOR_ATTACHMENT0&&(ue[0]=r.COLOR_ATTACHMENT0,Fe=!0);else ue[0]!==r.BACK&&(ue[0]=r.BACK,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ge(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const Me={[Jr]:r.FUNC_ADD,[Ev]:r.FUNC_SUBTRACT,[Tv]:r.FUNC_REVERSE_SUBTRACT};if(n)Me[zf]=r.MIN,Me[Hf]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[zf]=L.MIN_EXT,Me[Hf]=L.MAX_EXT)}const Oe={[Av]:r.ZERO,[wv]:r.ONE,[Rv]:r.SRC_COLOR,[Wu]:r.SRC_ALPHA,[Ov]:r.SRC_ALPHA_SATURATE,[Dv]:r.DST_COLOR,[Pv]:r.DST_ALPHA,[Cv]:r.ONE_MINUS_SRC_COLOR,[Xu]:r.ONE_MINUS_SRC_ALPHA,[Iv]:r.ONE_MINUS_DST_COLOR,[Lv]:r.ONE_MINUS_DST_ALPHA,[Nv]:r.CONSTANT_COLOR,[Uv]:r.ONE_MINUS_CONSTANT_COLOR,[Fv]:r.CONSTANT_ALPHA,[Bv]:r.ONE_MINUS_CONSTANT_ALPHA};function be(L,ce,ue,Fe,Ce,nt,Se,Te,qe,je){if(L===Rr){m===!0&&(Ue(r.BLEND),m=!1);return}if(m===!1&&(Ie(r.BLEND),m=!0),L!==bv){if(L!==y||je!==B){if((v!==Jr||A!==Jr)&&(r.blendEquation(r.FUNC_ADD),v=Jr,A=Jr),je)switch(L){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFunc(r.ONE,r.ONE);break;case Bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,w=null,M=null,I=null,S.set(0,0,0),b=0,y=L,B=je}return}Ce=Ce||ce,nt=nt||ue,Se=Se||Fe,(ce!==v||Ce!==A)&&(r.blendEquationSeparate(Me[ce],Me[Ce]),v=ce,A=Ce),(ue!==x||Fe!==w||nt!==M||Se!==I)&&(r.blendFuncSeparate(Oe[ue],Oe[Fe],Oe[nt],Oe[Se]),x=ue,w=Fe,M=nt,I=Se),(Te.equals(S)===!1||qe!==b)&&(r.blendColor(Te.r,Te.g,Te.b,qe),S.copy(Te),b=qe),y=L,B=!1}function V(L,ce){L.side===Ii?Ue(r.CULL_FACE):Ie(r.CULL_FACE);let ue=L.side===kn;ce&&(ue=!ue),Be(ue),L.blending===lo&&L.transparent===!1?be(Rr):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Fe=L.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function R(L){L!==Sv?(Ie(r.CULL_FACE),L!==J&&(L===Uf?r.cullFace(r.BACK):L===Mv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),J=L}function E(L){L!==D&&(j&&r.lineWidth(L),D=L)}function k(L,ce,ue){L?(Ie(r.POLYGON_OFFSET_FILL),(F!==ce||H!==ue)&&(r.polygonOffset(ce,ue),F=ce,H=ue)):Ue(r.POLYGON_OFFSET_FILL)}function re(L){L?Ie(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function ie(L){L===void 0&&(L=r.TEXTURE0+X-1),Q!==L&&(r.activeTexture(L),Q=L)}function se(L,ce,ue){ue===void 0&&(Q===null?ue=r.TEXTURE0+X-1:ue=Q);let Fe=oe[ue];Fe===void 0&&(Fe={type:void 0,texture:void 0},oe[ue]=Fe),(Fe.type!==L||Fe.texture!==ce)&&(Q!==ue&&(r.activeTexture(ue),Q=ue),r.bindTexture(L,ce||De[L]),Fe.type=L,Fe.texture=ce)}function ve(){const L=oe[Q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){fe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function Ye(L){Ee.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ee.copy(L))}function Je(L,ce){let ue=h.get(ce);ue===void 0&&(ue=new WeakMap,h.set(ce,ue));let Fe=ue.get(L);Fe===void 0&&(Fe=r.getUniformBlockIndex(ce,L.name),ue.set(L,Fe))}function ye(L,ce){const Fe=h.get(ce).get(L);u.get(ce)!==Fe&&(r.uniformBlockBinding(ce,Fe,L.__bindingPointIndex),u.set(ce,Fe))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,oe={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,x=null,w=null,A=null,M=null,I=null,S=new tt(0,0,0),b=0,B=!1,N=null,J=null,D=null,F=null,H=null,fe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ue,bindFramebuffer:He,drawBuffers:G,useProgram:Ge,setBlending:be,setMaterial:V,setFlipSided:Be,setCullFace:R,setLineWidth:E,setPolygonOffset:k,setScissorTest:re,activeTexture:ie,bindTexture:se,unbindTexture:ve,compressedTexImage2D:ae,compressedTexImage3D:xe,texImage2D:de,texImage3D:le,updateUBOMapping:Je,uniformBlockBinding:ye,texStorage2D:P,texStorage3D:te,texSubImage2D:Le,texSubImage3D:We,compressedTexSubImage2D:ne,compressedTexSubImage3D:$e,scissor:we,viewport:Ye,reset:he}}function IE(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Da("canvas")}function _(R,E,k,re){let ie=1;if((R.width>re||R.height>re)&&(ie=re/Math.max(R.width,R.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const se=E?sc:Math.floor,ve=se(ie*R.width),ae=se(ie*R.height);h===void 0&&(h=g(ve,ae));const xe=k?g(ve,ae):h;return xe.width=ve,xe.height=ae,xe.getContext("2d").drawImage(R,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ve+"x"+ae+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Ju(R.width)&&Ju(R.height)}function m(R){return a?!1:R.wrapS!==ai||R.wrapT!==ai||R.minFilter!==nn&&R.minFilter!==mn}function y(R,E){return R.generateMipmaps&&E&&R.minFilter!==nn&&R.minFilter!==mn}function v(R){r.generateMipmap(R)}function x(R,E,k,re,ie=!1){if(a===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=E;if(E===r.RED&&(k===r.FLOAT&&(se=r.R32F),k===r.HALF_FLOAT&&(se=r.R16F),k===r.UNSIGNED_BYTE&&(se=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(se=r.R8UI),k===r.UNSIGNED_SHORT&&(se=r.R16UI),k===r.UNSIGNED_INT&&(se=r.R32UI),k===r.BYTE&&(se=r.R8I),k===r.SHORT&&(se=r.R16I),k===r.INT&&(se=r.R32I)),E===r.RG&&(k===r.FLOAT&&(se=r.RG32F),k===r.HALF_FLOAT&&(se=r.RG16F),k===r.UNSIGNED_BYTE&&(se=r.RG8)),E===r.RGBA){const ve=ie?tc:mt.getTransfer(re);k===r.FLOAT&&(se=r.RGBA32F),k===r.HALF_FLOAT&&(se=r.RGBA16F),k===r.UNSIGNED_BYTE&&(se=ve===Rt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(R,E,k){return y(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===nn||R===ju||R===Ul?r.NEAREST:r.LINEAR}function M(R){const E=R.target;E.removeEventListener("dispose",M),S(E),E.isVideoTexture&&u.delete(E)}function I(R){const E=R.target;E.removeEventListener("dispose",I),B(E)}function S(R){const E=n.get(R);if(E.__webglInit===void 0)return;const k=R.source,re=f.get(k);if(re){const ie=re[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(R),Object.keys(re).length===0&&f.delete(k)}n.remove(R)}function b(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const k=R.source,re=f.get(k);delete re[E.__cacheKey],o.memory.textures--}function B(R){const E=R.texture,k=n.get(R),re=n.get(E);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(k.__webglFramebuffer[ie]))for(let se=0;se<k.__webglFramebuffer[ie].length;se++)r.deleteFramebuffer(k.__webglFramebuffer[ie][se]);else r.deleteFramebuffer(k.__webglFramebuffer[ie]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ie])}else{if(Array.isArray(k.__webglFramebuffer))for(let ie=0;ie<k.__webglFramebuffer.length;ie++)r.deleteFramebuffer(k.__webglFramebuffer[ie]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ie=0;ie<k.__webglColorRenderbuffer.length;ie++)k.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ie]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,se=E.length;ie<se;ie++){const ve=n.get(E[ie]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(E[ie])}n.remove(E),n.remove(R)}let N=0;function J(){N=0}function D(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function F(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const k=n.get(R);if(R.isVideoTexture&&V(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,R,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function X(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){fe(k,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function j(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){fe(k,R,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function $(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ee(k,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const C={[Mo]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[ec]:r.MIRRORED_REPEAT},Q={[nn]:r.NEAREST,[ju]:r.NEAREST_MIPMAP_NEAREST,[Ul]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[S_]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},oe={[px]:r.NEVER,[yx]:r.ALWAYS,[mx]:r.LESS,[D_]:r.LEQUAL,[_x]:r.EQUAL,[xx]:r.GEQUAL,[gx]:r.GREATER,[vx]:r.NOTEQUAL};function K(R,E,k){if(k?(r.texParameteri(R,r.TEXTURE_WRAP_S,C[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,C[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,C[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Q[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Q[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ai||E.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==nn&&E.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===nn||E.minFilter!==Ul&&E.minFilter!==_s||E.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Z(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",M));const re=E.source;let ie=f.get(re);ie===void 0&&(ie={},f.set(re,ie));const se=F(E);if(se!==R.__cacheKey){ie[se]===void 0&&(ie[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[se].usedTimes++;const ve=ie[R.__cacheKey];ve!==void 0&&(ie[R.__cacheKey].usedTimes--,ve.usedTimes===0&&b(E)),R.__cacheKey=se,R.__webglTexture=ie[se].texture}return k}function fe(R,E,k){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const ie=Z(R,E),se=E.source;t.bindTexture(re,R.__webglTexture,r.TEXTURE0+k);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(r.TEXTURE0+k);const ae=mt.getPrimaries(mt.workingColorSpace),xe=E.colorSpace===ci?null:mt.getPrimaries(E.colorSpace),Le=E.colorSpace===ci||ae===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=m(E)&&p(E.image)===!1;let ne=_(E.image,We,!1,i.maxTextureSize);ne=Be(E,ne);const $e=p(ne)||a,P=s.convert(E.format,E.colorSpace);let te=s.convert(E.type),de=x(E.internalFormat,P,te,E.colorSpace,E.isVideoTexture);K(re,E,$e);let le;const we=E.mipmaps,Ye=a&&E.isVideoTexture!==!0&&de!==R_,Je=ve.__version===void 0||ie===!0,ye=w(E,ne,$e);if(E.isDepthTexture)de=r.DEPTH_COMPONENT,a?E.type===tr?de=r.DEPTH_COMPONENT32F:E.type===Mr?de=r.DEPTH_COMPONENT24:E.type===ls?de=r.DEPTH24_STENCIL8:de=r.DEPTH_COMPONENT16:E.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===cs&&de===r.DEPTH_COMPONENT&&E.type!==zh&&E.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Mr,te=s.convert(E.type)),E.format===bo&&de===r.DEPTH_COMPONENT&&(de=r.DEPTH_STENCIL,E.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ls,te=s.convert(E.type))),Je&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,P,te,null));else if(E.isDataTexture)if(we.length>0&&$e){Ye&&Je&&t.texStorage2D(r.TEXTURE_2D,ye,de,we[0].width,we[0].height);for(let he=0,L=we.length;he<L;he++)le=we[he],Ye?t.texSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,P,te,le.data):t.texImage2D(r.TEXTURE_2D,he,de,le.width,le.height,0,P,te,le.data);E.generateMipmaps=!1}else Ye?(Je&&t.texStorage2D(r.TEXTURE_2D,ye,de,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,P,te,ne.data)):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,P,te,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,de,we[0].width,we[0].height,ne.depth);for(let he=0,L=we.length;he<L;he++)le=we[he],E.format!==li?P!==null?Ye?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ne.depth,P,le.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,de,le.width,le.height,ne.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,le.width,le.height,ne.depth,P,te,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,de,le.width,le.height,ne.depth,0,P,te,le.data)}else{Ye&&Je&&t.texStorage2D(r.TEXTURE_2D,ye,de,we[0].width,we[0].height);for(let he=0,L=we.length;he<L;he++)le=we[he],E.format!==li?P!==null?Ye?t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,P,le.data):t.compressedTexImage2D(r.TEXTURE_2D,he,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(r.TEXTURE_2D,he,0,0,le.width,le.height,P,te,le.data):t.texImage2D(r.TEXTURE_2D,he,de,le.width,le.height,0,P,te,le.data)}else if(E.isDataArrayTexture)Ye?(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,de,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,P,te,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,P,te,ne.data);else if(E.isData3DTexture)Ye?(Je&&t.texStorage3D(r.TEXTURE_3D,ye,de,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,P,te,ne.data)):t.texImage3D(r.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,P,te,ne.data);else if(E.isFramebufferTexture){if(Je)if(Ye)t.texStorage2D(r.TEXTURE_2D,ye,de,ne.width,ne.height);else{let he=ne.width,L=ne.height;for(let ce=0;ce<ye;ce++)t.texImage2D(r.TEXTURE_2D,ce,de,he,L,0,P,te,null),he>>=1,L>>=1}}else if(we.length>0&&$e){Ye&&Je&&t.texStorage2D(r.TEXTURE_2D,ye,de,we[0].width,we[0].height);for(let he=0,L=we.length;he<L;he++)le=we[he],Ye?t.texSubImage2D(r.TEXTURE_2D,he,0,0,P,te,le):t.texImage2D(r.TEXTURE_2D,he,de,P,te,le);E.generateMipmaps=!1}else Ye?(Je&&t.texStorage2D(r.TEXTURE_2D,ye,de,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,P,te,ne)):t.texImage2D(r.TEXTURE_2D,0,de,P,te,ne);y(E,$e)&&v(re),ve.__version=se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ee(R,E,k){if(E.image.length!==6)return;const re=Z(R,E),ie=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const se=n.get(ie);if(ie.version!==se.__version||re===!0){t.activeTexture(r.TEXTURE0+k);const ve=mt.getPrimaries(mt.workingColorSpace),ae=E.colorSpace===ci?null:mt.getPrimaries(E.colorSpace),xe=E.colorSpace===ci||ve===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let he=0;he<6;he++)!Le&&!We?ne[he]=_(E.image[he],!1,!0,i.maxCubemapSize):ne[he]=We?E.image[he].image:E.image[he],ne[he]=Be(E,ne[he]);const $e=ne[0],P=p($e)||a,te=s.convert(E.format,E.colorSpace),de=s.convert(E.type),le=x(E.internalFormat,te,de,E.colorSpace),we=a&&E.isVideoTexture!==!0,Ye=se.__version===void 0||re===!0;let Je=w(E,$e,P);K(r.TEXTURE_CUBE_MAP,E,P);let ye;if(Le){we&&Ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Je,le,$e.width,$e.height);for(let he=0;he<6;he++){ye=ne[he].mipmaps;for(let L=0;L<ye.length;L++){const ce=ye[L];E.format!==li?te!==null?we?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,ce.width,ce.height,te,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,ce.width,ce.height,te,de,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,le,ce.width,ce.height,0,te,de,ce.data)}}}else{ye=E.mipmaps,we&&Ye&&(ye.length>0&&Je++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Je,le,ne[0].width,ne[0].height));for(let he=0;he<6;he++)if(We){we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ne[he].width,ne[he].height,te,de,ne[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,ne[he].width,ne[he].height,0,te,de,ne[he].data);for(let L=0;L<ye.length;L++){const ue=ye[L].image[he].image;we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,ue.width,ue.height,te,de,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,ue.width,ue.height,0,te,de,ue.data)}}else{we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,te,de,ne[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,le,te,de,ne[he]);for(let L=0;L<ye.length;L++){const ce=ye[L];we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,te,de,ce.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,le,te,de,ce.image[he])}}}y(E,P)&&v(r.TEXTURE_CUBE_MAP),se.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,k,re,ie,se){const ve=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),xe=x(k.internalFormat,ve,ae,k.colorSpace);if(!n.get(E).__hasExternalTextures){const We=Math.max(1,E.width>>se),ne=Math.max(1,E.height>>se);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,se,xe,We,ne,E.depth,0,ve,ae,null):t.texImage2D(ie,se,xe,We,ne,0,ve,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ie,n.get(k).__webglTexture,0,Oe(E)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ie,n.get(k).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(R,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let re=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||be(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===tr?re=r.DEPTH_COMPONENT32F:ie.type===Mr&&(re=r.DEPTH_COMPONENT24));const se=Oe(E);be(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,re,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,re,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const re=Oe(E);k&&be(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,E.width,E.height):be(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<re.length;ie++){const se=re[ie],ve=s.convert(se.format,se.colorSpace),ae=s.convert(se.type),xe=x(se.internalFormat,ve,ae,se.colorSpace),Le=Oe(E);k&&be(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,xe,E.width,E.height):be(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const re=n.get(E.depthTexture).__webglTexture,ie=Oe(E);if(E.depthTexture.format===cs)be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(E.depthTexture.format===bo)be(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=r.createRenderbuffer(),De(E.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),De(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,E,k){const re=n.get(R);E!==void 0&&ge(re.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ue(R)}function G(R){const E=R.texture,k=n.get(R),re=n.get(E);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,o.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,ve=p(R)||a;if(ie){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let xe=0;xe<E.mipmaps.length;xe++)k.__webglFramebuffer[ae][xe]=r.createFramebuffer()}else k.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)k.__webglFramebuffer[ae]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const ae=R.texture;for(let xe=0,Le=ae.length;xe<Le;xe++){const We=n.get(ae[xe]);We.__webglTexture===void 0&&(We.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&be(R)===!1){const ae=se?E:[E];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<ae.length;xe++){const Le=ae[xe];k.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);const We=s.convert(Le.format,Le.colorSpace),ne=s.convert(Le.type),$e=x(Le.internalFormat,We,ne,Le.colorSpace,R.isXRRenderTarget===!0),P=Oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,P,$e,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),De(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),K(r.TEXTURE_CUBE_MAP,E,ve);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ge(k.__webglFramebuffer[ae][xe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe);else ge(k.__webglFramebuffer[ae],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);y(E,ve)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ae=R.texture;for(let xe=0,Le=ae.length;xe<Le;xe++){const We=ae[xe],ne=n.get(We);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),K(r.TEXTURE_2D,We,ve),ge(k.__webglFramebuffer,R,We,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),y(We,ve)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,re.__webglTexture),K(ae,E,ve),a&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ge(k.__webglFramebuffer[xe],R,E,r.COLOR_ATTACHMENT0,ae,xe);else ge(k.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ae,0);y(E,ve)&&v(ae),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Ge(R){const E=p(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,ie=k.length;re<ie;re++){const se=k[re];if(y(se,E)){const ve=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=n.get(se).__webglTexture;t.bindTexture(ve,ae),v(ve),t.unbindTexture()}}}function Me(R){if(a&&R.samples>0&&be(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,re=R.height;let ie=r.COLOR_BUFFER_BIT;const se=[],ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(R),xe=R.isWebGLMultipleRenderTargets===!0;if(xe)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){se.push(r.COLOR_ATTACHMENT0+Le),R.depthBuffer&&se.push(ve);const We=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(We===!1&&(R.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),xe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Le]),We===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),xe){const ne=n.get(E[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,k,re,0,0,k,re,ie,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Le]);const We=n.get(E[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,We,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Oe(R){return Math.min(i.maxSamples,R.samples)}function be(R){const E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Be(R,E){const k=R.colorSpace,re=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zu||k!==ln&&k!==ci&&(mt.getTransfer(k)===Rt?a===!1?e.has("EXT_sRGB")===!0&&re===li?(R.format=Zu,R.minFilter=mn,R.generateMipmaps=!1):E=N_.sRGBToLinear(E):(re!==li||ie!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=D,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=He,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=be}function OE(r,e,t){const n=t.isWebGL2;function i(s,o=ci){let a;const l=mt.getTransfer(o);if(s===Pr)return r.UNSIGNED_BYTE;if(s===b_)return r.UNSIGNED_SHORT_4_4_4_4;if(s===E_)return r.UNSIGNED_SHORT_5_5_5_1;if(s===tx)return r.BYTE;if(s===nx)return r.SHORT;if(s===zh)return r.UNSIGNED_SHORT;if(s===M_)return r.INT;if(s===Mr)return r.UNSIGNED_INT;if(s===tr)return r.FLOAT;if(s===Pa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ix)return r.ALPHA;if(s===li)return r.RGBA;if(s===rx)return r.LUMINANCE;if(s===sx)return r.LUMINANCE_ALPHA;if(s===cs)return r.DEPTH_COMPONENT;if(s===bo)return r.DEPTH_STENCIL;if(s===Zu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ox)return r.RED;if(s===T_)return r.RED_INTEGER;if(s===ax)return r.RG;if(s===A_)return r.RG_INTEGER;if(s===w_)return r.RGBA_INTEGER;if(s===Uc||s===Fc||s===Bc||s===kc)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vf||s===Wf||s===Xf||s===Yf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===R_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qf||s===jf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qf)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kf||s===$f||s===Zf||s===Jf||s===Qf||s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$f)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ed)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===td)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===id)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sd)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ad)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ld)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===cd||s===ud)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zc)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ud)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lx||s===hd||s===fd||s===dd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class NE extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class FE extends Es{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],v=[],x=new Ke;let w=null;const A=new Rn;A.layers.enable(1),A.viewport=new Tt;const M=new Rn;M.layers.enable(2),M.viewport=new Tt;const I=[A,M],S=new NE;S.layers.enable(1),S.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=y[K];return Z===void 0&&(Z=new uu,y[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=y[K];return Z===void 0&&(Z=new uu,y[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=y[K];return Z===void 0&&(Z=new uu,y[K]=Z),Z.getHandSpace()};function N(K){const Z=v.indexOf(K.inputSource);if(Z===-1)return;const fe=y[Z];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",D);for(let K=0;K<y.length;K++){const Z=v[K];Z!==null&&(v[K]=null,y[K].disconnect(Z))}b=null,B=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",J),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new gs(d.framebufferWidth,d.framebufferHeight,{format:li,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,fe=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?bo:cs,fe=_.stencil?ls:Mr);const ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new gs(f.textureWidth,f.textureHeight,{format:li,type:Pr,depthTexture:new X_(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(m);De.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(K){for(let Z=0;Z<K.removed.length;Z++){const fe=K.removed[Z],Ee=v.indexOf(fe);Ee>=0&&(v[Ee]=null,y[Ee].disconnect(fe))}for(let Z=0;Z<K.added.length;Z++){const fe=K.added[Z];let Ee=v.indexOf(fe);if(Ee===-1){for(let De=0;De<y.length;De++)if(De>=v.length){v.push(fe),Ee=De;break}else if(v[De]===null){v[De]=fe,Ee=De;break}if(Ee===-1)break}const ge=y[Ee];ge&&ge.connect(fe)}}const F=new O,H=new O;function X(K,Z,fe){F.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(fe.matrixWorld);const Ee=F.distanceTo(H),ge=Z.projectionMatrix.elements,De=fe.projectionMatrix.elements,Ie=ge[14]/(ge[10]-1),Ue=ge[14]/(ge[10]+1),He=(ge[9]+1)/ge[5],G=(ge[9]-1)/ge[5],Ge=(ge[8]-1)/ge[0],Me=(De[8]+1)/De[0],Oe=Ie*Ge,be=Ie*Me,V=Ee/(-Ge+Me),Be=V*-Ge;Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Be),K.translateZ(V),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=Ie+V,E=Ue+V,k=Oe-Be,re=be+(Ee-Be),ie=He*Ue/E*R,se=G*Ue/E*R;K.projectionMatrix.makePerspective(k,re,ie,se,R,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function j(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;S.near=M.near=A.near=K.near,S.far=M.far=A.far=K.far,(b!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,B=S.far);const Z=K.parent,fe=S.cameras;j(S,Z);for(let Ee=0;Ee<fe.length;Ee++)j(fe[Ee],Z);fe.length===2?X(S,A,M):S.projectionMatrix.copy(A.projectionMatrix),$(K,S,Z)};function $(K,Z,fe){fe===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=To*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)};let C=null;function Q(K,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ee=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let ge=0;ge<fe.length;ge++){const De=fe[ge];let Ie=null;if(d!==null)Ie=d.getViewport(De);else{const He=h.getViewSubImage(f,De);Ie=He.viewport,ge===0&&(e.setRenderTargetTextures(m,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(m))}let Ue=I[ge];Ue===void 0&&(Ue=new Rn,Ue.layers.enable(ge),Ue.viewport=new Tt,I[ge]=Ue),Ue.matrix.fromArray(De.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(De.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ge===0&&(S.matrix.copy(Ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(Ue)}}for(let fe=0;fe<y.length;fe++){const Ee=v[fe],ge=y[fe];Ee!==null&&ge!==void 0&&ge.update(Ee,Z,c||o)}C&&C(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const oe=new W_;oe.setAnimationLoop(Q),this.setAnimationLoop=function(K){C=K},this.dispose=function(){}}}function BE(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,H_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kE(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(y,w);const A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const x=r.createBuffer(),w=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,M=x.length;A<M;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=I.length;S<b;S++){const B=I[S];if(d(B,A,S,w)===!0){const N=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let D=0;for(let F=0;F<J.length;F++){const H=J[F],X=_(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,N+D,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,x,w){const A=y.value,M=v+"_"+x;if(w[M]===void 0)return typeof A=="number"||typeof A=="boolean"?w[M]=A:w[M]=A.clone(),!0;{const I=w[M];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return w[M]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){const v=y.uniforms;let x=0;const w=16;for(let M=0,I=v.length;M<I;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,B=S.length;b<B;b++){const N=S[b],J=Array.isArray(N.value)?N.value:[N.value];for(let D=0,F=J.length;D<F;D++){const H=J[D],X=_(H),j=x%w;j!==0&&w-j<X.boundary&&(x+=w-j),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const A=x%w;return A>0&&(x+=w-A),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Z_{constructor(e={}){const{canvas:t=Nx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Cr,this.toneMappingExposure=1;const v=this;let x=!1,w=0,A=0,M=null,I=-1,S=null;const b=new Tt,B=new Tt;let N=null;const J=new tt(0);let D=0,F=t.width,H=t.height,X=1,j=null,$=null;const C=new Tt(0,0,F,H),Q=new Tt(0,0,F,H);let oe=!1;const K=new Wh;let Z=!1,fe=!1,Ee=null;const ge=new at,De=new Ke,Ie=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return M===null?X:1}let G=n;function Ge(T,U){for(let W=0;W<T.length;W++){const Y=T[W],z=t.getContext(Y,U);if(z!==null)return z}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),G===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),G=Ge(U,T),G===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Oe,be,V,Be,R,E,k,re,ie,se,ve,ae,xe,Le,We,ne,$e,P,te,de,le,we,Ye;function Je(){Me=new KM(G),Oe=new VM(G,Me,e),Me.init(Oe),le=new OE(G,Me,Oe),be=new DE(G,Me,Oe),V=new JM(G),Be=new vE,R=new IE(G,Me,be,Be,Oe,le,V),E=new XM(v),k=new jM(v),re=new oy(G,Oe),we=new HM(G,Me,re,Oe),ie=new $M(G,re,V,we),se=new nb(G,ie,re,V),P=new tb(G,Oe,R),We=new WM(Be),ve=new gE(v,E,k,Me,Oe,we,We),ae=new BE(v,Be),xe=new yE,Le=new AE(Me,Oe),$e=new zM(v,E,k,be,se,f,l),ne=new LE(v,se,Oe),Ye=new kE(G,V,Oe,be),te=new GM(G,Me,V,Oe),de=new ZM(G,Me,V,Oe),V.programs=ve.programs,v.capabilities=Oe,v.extensions=Me,v.properties=Be,v.renderLists=xe,v.shadowMap=ne,v.state=be,v.info=V}Je();const ye=new FE(v,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(F,H,!1))},this.getSize=function(T){return T.set(F,H)},this.setSize=function(T,U,W=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,H=U,t.width=Math.floor(T*X),t.height=Math.floor(U*X),W===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(F*X,H*X).floor()},this.setDrawingBufferSize=function(T,U,W){F=T,H=U,X=W,t.width=Math.floor(T*W),t.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,U,W,Y){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,U,W,Y),be.viewport(b.copy(C).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,U,W,Y){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,U,W,Y),be.scissor(B.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){be.setScissorTest(oe=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,U=!0,W=!0){let Y=0;if(T){let z=!1;if(M!==null){const pe=M.texture.format;z=pe===w_||pe===A_||pe===T_}if(z){const pe=M.texture.type,Re=pe===Pr||pe===Mr||pe===zh||pe===ls||pe===b_||pe===E_,ke=$e.getClearColor(),Pe=$e.getClearAlpha(),Ne=ke.r,ze=ke.g,Ze=ke.b;Re?(d[0]=Ne,d[1]=ze,d[2]=Ze,d[3]=Pe,G.clearBufferuiv(G.COLOR,0,d)):(g[0]=Ne,g[1]=ze,g[2]=Ze,g[3]=Pe,G.clearBufferiv(G.COLOR,0,g))}else Y|=G.COLOR_BUFFER_BIT}U&&(Y|=G.DEPTH_BUFFER_BIT),W&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),xe.dispose(),Le.dispose(),Be.dispose(),E.dispose(),k.dispose(),se.dispose(),we.dispose(),Ye.dispose(),ve.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",qe),ye.removeEventListener("sessionend",je),Ee&&(Ee.dispose(),Ee=null),me.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=V.autoReset,U=ne.enabled,W=ne.autoUpdate,Y=ne.needsUpdate,z=ne.type;Je(),V.autoReset=T,ne.enabled=U,ne.autoUpdate=W,ne.needsUpdate=Y,ne.type=z}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const U=T.target;U.removeEventListener("dispose",ue),Fe(U)}function Fe(T){Ce(T),Be.remove(T)}function Ce(T){const U=Be.get(T).programs;U!==void 0&&(U.forEach(function(W){ve.releaseProgram(W)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,Y,z,pe){U===null&&(U=Ue);const Re=z.isMesh&&z.matrixWorld.determinant()<0,ke=wt(T,U,W,Y,z);be.setMaterial(Y,Re);let Pe=W.index,Ne=1;if(Y.wireframe===!0){if(Pe=ie.getWireframeAttribute(W),Pe===void 0)return;Ne=2}const ze=W.drawRange,Ze=W.attributes.position;let Lt=ze.start*Ne,qt=(ze.start+ze.count)*Ne;pe!==null&&(Lt=Math.max(Lt,pe.start*Ne),qt=Math.min(qt,(pe.start+pe.count)*Ne)),Pe!==null?(Lt=Math.max(Lt,0),qt=Math.min(qt,Pe.count)):Ze!=null&&(Lt=Math.max(Lt,0),qt=Math.min(qt,Ze.count));const vt=qt-Lt;if(vt<0||vt===1/0)return;we.setup(z,Y,ke,W,Pe);let xn,yt=te;if(Pe!==null&&(xn=re.get(Pe),yt=de,yt.setIndex(xn)),z.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*He()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(z.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),be.setLineWidth(Qe*He()),z.isLineSegments?yt.setMode(G.LINES):z.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else z.isPoints?yt.setMode(G.POINTS):z.isSprite&&yt.setMode(G.TRIANGLES);if(z.isBatchedMesh)yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)yt.renderInstances(Lt,vt,z.count);else if(W.isInstancedBufferGeometry){const Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,bc=Math.min(W.instanceCount,Qe);yt.renderInstances(Lt,vt,bc)}else yt.render(Lt,vt)};function nt(T,U,W){T.transparent===!0&&T.side===Ii&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,At(T,U,W),T.side=ar,T.needsUpdate=!0,At(T,U,W),T.side=Ii):At(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=Le.get(W),p.init(),y.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const Y=new Set;return T.traverse(function(z){const pe=z.material;if(pe)if(Array.isArray(pe))for(let Re=0;Re<pe.length;Re++){const ke=pe[Re];nt(ke,W,z),Y.add(ke)}else nt(pe,W,z),Y.add(pe)}),y.pop(),p=null,Y},this.compileAsync=function(T,U,W=null){const Y=this.compile(T,U,W);return new Promise(z=>{function pe(){if(Y.forEach(function(Re){Be.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){z(T);return}setTimeout(pe,10)}Me.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Se=null;function Te(T){Se&&Se(T)}function qe(){me.stop()}function je(){me.start()}const me=new W_;me.setAnimationLoop(Te),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){Se=T,ye.setAnimationLoop(T),T===null?me.stop():me.start()},ye.addEventListener("sessionstart",qe),ye.addEventListener("sessionend",je),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(U),U=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,M),p=Le.get(T,y.length),p.init(),y.push(p),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,Z=We.init(this.clippingPlanes,fe),_=xe.get(T,m.length),_.init(),m.push(_),Xe(T,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,$),this.info.render.frame++,Z===!0&&We.beginShadows();const W=p.state.shadowsArray;if(ne.render(W,T,U),Z===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,T),p.setupLights(v._useLegacyLights),U.isArrayCamera){const Y=U.cameras;for(let z=0,pe=Y.length;z<pe;z++){const Re=Y[z];Ve(_,T,Re,Re.viewport)}}else Ve(_,T,U);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(v,T,U),we.resetDefaultState(),I=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Xe(T,U,W,Y){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){Y&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const Re=se.update(T),ke=T.material;ke.visible&&_.push(T,Re,ke,W,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Re=se.update(T),ke=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(ke)){const Pe=Re.groups;for(let Ne=0,ze=Pe.length;Ne<ze;Ne++){const Ze=Pe[Ne],Lt=ke[Ze.materialIndex];Lt&&Lt.visible&&_.push(T,Re,Lt,W,Ie.z,Ze)}}else ke.visible&&_.push(T,Re,ke,W,Ie.z,null)}}const pe=T.children;for(let Re=0,ke=pe.length;Re<ke;Re++)Xe(pe[Re],U,W,Y)}function Ve(T,U,W,Y){const z=T.opaque,pe=T.transmissive,Re=T.transparent;p.setupLightsView(W),Z===!0&&We.setGlobalState(v.clippingPlanes,W),pe.length>0&&rt(z,pe,U,W),Y&&be.viewport(b.copy(Y)),z.length>0&&Dt(z,U,W),pe.length>0&&Dt(pe,U,W),Re.length>0&&Dt(Re,U,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function rt(T,U,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=Oe.isWebGL2;Ee===null&&(Ee=new gs(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Pa:Pr,minFilter:_s,samples:pe?4:0})),v.getDrawingBufferSize(De),pe?Ee.setSize(De.x,De.y):Ee.setSize(sc(De.x),sc(De.y));const Re=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(J),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=Cr,Dt(T,W,Y),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee);let Pe=!1;for(let Ne=0,ze=U.length;Ne<ze;Ne++){const Ze=U[Ne],Lt=Ze.object,qt=Ze.geometry,vt=Ze.material,xn=Ze.group;if(vt.side===Ii&&Lt.layers.test(Y.layers)){const yt=vt.side;vt.side=kn,vt.needsUpdate=!0,ut(Lt,W,Y,qt,vt,xn),vt.side=yt,vt.needsUpdate=!0,Pe=!0}}Pe===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee)),v.setRenderTarget(Re),v.setClearColor(J,D),v.toneMapping=ke}function Dt(T,U,W){const Y=U.isScene===!0?U.overrideMaterial:null;for(let z=0,pe=T.length;z<pe;z++){const Re=T[z],ke=Re.object,Pe=Re.geometry,Ne=Y===null?Re.material:Y,ze=Re.group;ke.layers.test(W.layers)&&ut(ke,U,W,Pe,Ne,ze)}}function ut(T,U,W,Y,z,pe){T.onBeforeRender(v,U,W,Y,z,pe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,U,W,Y,T,pe),z.transparent===!0&&z.side===Ii&&z.forceSinglePass===!1?(z.side=kn,z.needsUpdate=!0,v.renderBufferDirect(W,U,Y,z,T,pe),z.side=ar,z.needsUpdate=!0,v.renderBufferDirect(W,U,Y,z,T,pe),z.side=Ii):v.renderBufferDirect(W,U,Y,z,T,pe),T.onAfterRender(v,U,W,Y,z,pe)}function At(T,U,W){U.isScene!==!0&&(U=Ue);const Y=Be.get(T),z=p.state.lights,pe=p.state.shadowsArray,Re=z.state.version,ke=ve.getParameters(T,z.state,pe,U,W),Pe=ve.getProgramCacheKey(ke);let Ne=Y.programs;Y.environment=T.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(T.isMeshStandardMaterial?k:E).get(T.envMap||Y.environment),Ne===void 0&&(T.addEventListener("dispose",ue),Ne=new Map,Y.programs=Ne);let ze=Ne.get(Pe);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Re)return Ht(T,ke),ze}else ke.uniforms=ve.getUniforms(T),T.onBuild(W,ke,v),T.onBeforeCompile(ke,v),ze=ve.acquireProgram(ke,Pe),Ne.set(Pe,ze),Y.uniforms=ke.uniforms;const Ze=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Ht(T,ke),Y.needsLights=Vn(T),Y.lightsStateVersion=Re,Y.needsLights&&(Ze.ambientLightColor.value=z.state.ambient,Ze.lightProbe.value=z.state.probe,Ze.directionalLights.value=z.state.directional,Ze.directionalLightShadows.value=z.state.directionalShadow,Ze.spotLights.value=z.state.spot,Ze.spotLightShadows.value=z.state.spotShadow,Ze.rectAreaLights.value=z.state.rectArea,Ze.ltc_1.value=z.state.rectAreaLTC1,Ze.ltc_2.value=z.state.rectAreaLTC2,Ze.pointLights.value=z.state.point,Ze.pointLightShadows.value=z.state.pointShadow,Ze.hemisphereLights.value=z.state.hemi,Ze.directionalShadowMap.value=z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ze.spotShadowMap.value=z.state.spotShadowMap,Ze.spotLightMatrix.value=z.state.spotLightMatrix,Ze.spotLightMap.value=z.state.spotLightMap,Ze.pointShadowMap.value=z.state.pointShadowMap,Ze.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function Zt(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Fl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ht(T,U){const W=Be.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function wt(T,U,W,Y,z){U.isScene!==!0&&(U=Ue),R.resetTextureUnits();const pe=U.fog,Re=Y.isMeshStandardMaterial?U.environment:null,ke=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ln,Pe=(Y.isMeshStandardMaterial?k:E).get(Y.envMap||Re),Ne=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ze=!!W.morphAttributes.position,Lt=!!W.morphAttributes.normal,qt=!!W.morphAttributes.color;let vt=Cr;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(vt=v.toneMapping);const xn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=xn!==void 0?xn.length:0,Qe=Be.get(Y),bc=p.state.lights;if(Z===!0&&(fe===!0||T!==S)){const ei=T===S&&Y.id===I;We.setState(Y,T,ei)}let Ft=!1;Y.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bc.state.version||Qe.outputColorSpace!==ke||z.isBatchedMesh&&Qe.batching===!1||!z.isBatchedMesh&&Qe.batching===!0||z.isInstancedMesh&&Qe.instancing===!1||!z.isInstancedMesh&&Qe.instancing===!0||z.isSkinnedMesh&&Qe.skinning===!1||!z.isSkinnedMesh&&Qe.skinning===!0||z.isInstancedMesh&&Qe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Qe.instancingColor===!1&&z.instanceColor!==null||Qe.envMap!==Pe||Y.fog===!0&&Qe.fog!==pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==Ne||Qe.vertexTangents!==ze||Qe.morphTargets!==Ze||Qe.morphNormals!==Lt||Qe.morphColors!==qt||Qe.toneMapping!==vt||Oe.isWebGL2===!0&&Qe.morphTargetsCount!==yt)&&(Ft=!0):(Ft=!0,Qe.__version=Y.version);let kr=Qe.currentProgram;Ft===!0&&(kr=At(Y,U,z));let gf=!1,Bo=!1,Ec=!1;const hn=kr.getUniforms(),zr=Qe.uniforms;if(be.useProgram(kr.program)&&(gf=!0,Bo=!0,Ec=!0),Y.id!==I&&(I=Y.id,Bo=!0),gf||S!==T){hn.setValue(G,"projectionMatrix",T.projectionMatrix),hn.setValue(G,"viewMatrix",T.matrixWorldInverse);const ei=hn.map.cameraPosition;ei!==void 0&&ei.setValue(G,Ie.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&hn.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&hn.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Bo=!0,Ec=!0)}if(z.isSkinnedMesh){hn.setOptional(G,z,"bindMatrix"),hn.setOptional(G,z,"bindMatrixInverse");const ei=z.skeleton;ei&&(Oe.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),hn.setValue(G,"boneTexture",ei.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(hn.setOptional(G,z,"batchingTexture"),hn.setValue(G,"batchingTexture",z._matricesTexture,R));const Tc=W.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&Oe.isWebGL2===!0)&&P.update(z,W,kr),(Bo||Qe.receiveShadow!==z.receiveShadow)&&(Qe.receiveShadow=z.receiveShadow,hn.setValue(G,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zr.envMap.value=Pe,zr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Bo&&(hn.setValue(G,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&gt(zr,Ec),pe&&Y.fog===!0&&ae.refreshFogUniforms(zr,pe),ae.refreshMaterialUniforms(zr,Y,X,H,Ee),Fl.upload(G,Zt(Qe),zr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fl.upload(G,Zt(Qe),zr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&hn.setValue(G,"center",z.center),hn.setValue(G,"modelViewMatrix",z.modelViewMatrix),hn.setValue(G,"normalMatrix",z.normalMatrix),hn.setValue(G,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ei=Y.uniformsGroups;for(let Ac=0,s0=ei.length;Ac<s0;Ac++)if(Oe.isWebGL2){const vf=ei[Ac];Ye.update(vf,kr),Ye.bind(vf,kr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kr}function gt(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Vn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,U,W){Be.get(T.texture).__webglTexture=U,Be.get(T.depthTexture).__webglTexture=W;const Y=Be.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const W=Be.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){M=T,w=U,A=W;let Y=!0,z=null,pe=!1,Re=!1;if(T){const Pe=Be.get(T);Pe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Pe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Pe.__hasExternalTextures&&R.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const ze=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?z=ze[U][W]:z=ze[U],pe=!0):Oe.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?z=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[W]:z=ze,b.copy(T.viewport),B.copy(T.scissor),N=T.scissorTest}else b.copy(C).multiplyScalar(X).floor(),B.copy(Q).multiplyScalar(X).floor(),N=oe;if(be.bindFramebuffer(G.FRAMEBUFFER,z)&&Oe.drawBuffers&&Y&&be.drawBuffers(T,z),be.viewport(b),be.scissor(B),be.setScissorTest(N),pe){const Pe=Be.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,W)}else if(Re){const Pe=Be.get(T.texture),Ne=U||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,W||0,Ne)}I=-1},this.readRenderTargetPixels=function(T,U,W,Y,z,pe,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){be.bindFramebuffer(G.FRAMEBUFFER,ke);try{const Pe=T.texture,Ne=Pe.format,ze=Pe.type;if(Ne!==li&&le.convert(Ne)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=ze===Pa&&(Me.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ze!==Pr&&le.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===tr&&(Oe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-Y&&W>=0&&W<=T.height-z&&G.readPixels(U,W,Y,z,le.convert(Ne),le.convert(ze),pe)}finally{const Pe=M!==null?Be.get(M).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,U,W=0){const Y=Math.pow(2,-W),z=Math.floor(U.image.width*Y),pe=Math.floor(U.image.height*Y);R.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,T.x,T.y,z,pe),be.unbindTexture()},this.copyTextureToTexture=function(T,U,W,Y=0){const z=U.image.width,pe=U.image.height,Re=le.convert(W.format),ke=le.convert(W.type);R.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,z,pe,Re,ke,U.image.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Re,U.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,Re,ke,U.image),Y===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W,Y,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,ke=T.max.z-T.min.z+1,Pe=le.convert(Y.format),Ne=le.convert(Y.type);let ze;if(Y.isData3DTexture)R.setTexture3D(Y,0),ze=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),ze=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ze=G.getParameter(G.UNPACK_ROW_LENGTH),Lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),qt=G.getParameter(G.UNPACK_SKIP_PIXELS),vt=G.getParameter(G.UNPACK_SKIP_ROWS),xn=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=W.isCompressedTexture?W.mipmaps[z]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(ze,z,U.x,U.y,U.z,pe,Re,ke,Pe,Ne,yt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,z,U.x,U.y,U.z,pe,Re,ke,Pe,yt.data)):G.texSubImage3D(ze,z,U.x,U.y,U.z,pe,Re,ke,Pe,Ne,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,vt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xn),z===0&&Y.generateMipmaps&&G.generateMipmap(ze),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){w=0,A=0,M=null,be.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?us:P_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?Bt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zE extends Z_{}zE.prototype.isWebGL1Renderer=!0;class J_ extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class HE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$u,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new O;class jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rp=new O,sp=new Tt,op=new Tt,GE=new O,ap=new at,cl=new O,hu=new Ti,lp=new at,fu=new Lo;class VE extends fi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gf,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cl),this.boundingBox.expandByPoint(cl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cl),this.boundingSphere.expandByPoint(cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hu.copy(this.boundingSphere),hu.applyMatrix4(i),e.ray.intersectsSphere(hu)!==!1&&(lp.copy(i).invert(),fu.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&fu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sp.fromBufferAttribute(i.attributes.skinIndex,e),op.fromBufferAttribute(i.attributes.skinWeight,e),rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=op.getComponent(s);if(o!==0){const a=sp.getComponent(s);ap.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(GE.copy(rp).applyMatrix4(ap),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Q_ extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class WE extends sn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=nn,u=nn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cp=new at,XE=new at;class Kh{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:XE;cp.multiplyMatrices(a,t[s]),cp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Kh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new WE(t,e,e,li,tr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Q_),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class eh extends Dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new at,up=new at,ul=[],hp=new Gi,YE=new at,Wo=new fi,Xo=new Ti;class qE extends fi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,YE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),hp.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Xo.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(n),e.ray.intersectsSphere(Xo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xs),up.multiplyMatrices(n,Xs),Wo.matrixWorld=up,Wo.raycast(e,ul);for(let o=0,a=ul.length;o<a;o++){const l=ul[o];l.instanceId=s,l.object=this,t.push(l)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $h extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fp=new O,dp=new O,pp=new at,du=new Lo,hl=new Ti;class Zh extends Ut{constructor(e=new Ai,t=new $h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fp.fromBufferAttribute(t,i-1),dp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fp.distanceTo(dp);e.setAttribute("lineDistance",new Ei(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(i),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;pp.copy(i).invert(),du.copy(e.ray).applyMatrix4(pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){const w=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,A),du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mp=new O,_p=new O;class eg extends Zh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mp.fromBufferAttribute(t,i),_p.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mp.distanceTo(_p);e.setAttribute("lineDistance",new Ei(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jE extends Zh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tg extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new at,th=new Lo,fl=new Ti,dl=new O;class KE extends Ut{constructor(e=new Ai,t=new tg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(i),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;gp.copy(i).invert(),th.copy(e.ray).applyMatrix4(gp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);dl.fromBufferAttribute(h,p),vp(dl,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)dl.fromBufferAttribute(h,g),vp(dl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vp(r,e,t,n,i,s,o){const a=th.distanceSqToPoint(r);if(a<t){const l=new O;th.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class $E extends sn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jh extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L_,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lr extends Jh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function pl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ZE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function JE(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ng(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ka{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class QE extends ka{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case md:s=e,a=2*t-n;break;case _d:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case md:o=e,l=2*n-t;break;case _d:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*_+.5*g,x=d*p-d*_;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+y*o[c+w]+v*o[l+w]+x*o[h+w];return s}}class eT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class tT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case Hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ZE(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Eo;class Io extends Vi{}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=La;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class ig extends Vi{}ig.prototype.ValueTypeName="color";class wo extends Vi{}wo.prototype.ValueTypeName="number";class nT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Hi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class xs extends Vi{InterpolantFactoryMethodLinear(e){return new nT(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.DefaultInterpolation=Eo;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends Vi{}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=La;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Vi{}Ro.prototype.ValueTypeName="vector";class iT{constructor(e,t=-1,n,i=cx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sT(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Vi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=JE(l);l=xp(l,1,u),c=xp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new wo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];ng(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let y=0;y!==f[g].morphTargets.length;++y){const v=f[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new wo(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ro,d+".position",f,"pos",i),n(xs,d+".quaternion",f,"rot",i),n(Ro,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return ig;case"quaternion":return xs;case"bool":case"boolean":return Io;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function sT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rT(r.type);if(r.times===void 0){const t=[],n=[];ng(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class oT{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const aT=new oT;class No{constructor(e){this.manager=e!==void 0?e:aT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class lT extends Error{constructor(e,t){super(e),this.response=t}}class rg extends No{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:i});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ki[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:x})=>{if(v)m.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,M=u.length;A<M;A++){const I=u[A];I.onProgress&&I.onProgress(w)}m.enqueue(x),y()}})}}});return new Response(p)}else throw new lT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{br.add(e,c);const u=Ki[e];delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cT extends No{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Da("img");function l(){u(),br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uT extends No{constructor(e){super(e)}load(e,t,n,i){const s=new sn,o=new cT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sc extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pu=new at,yp=new O,Sp=new O;class Qh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hT extends Qh{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=To*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fT extends Sc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new hT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mp=new at,Yo=new O,mu=new O;class dT extends Qh{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yo),mu.copy(n.position),mu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mu),n.updateMatrixWorld(),i.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Mp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp)}}class sg extends Sc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pT extends Qh{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new pT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mT extends Sc{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ha{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _T extends No{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return br.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),br.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});br.add(e,l),s.manager.itemStart(e)}}const ef="\\[\\]\\.:\\/",gT=new RegExp("["+ef+"]","g"),tf="[^"+ef+"]",vT="[^"+ef.replace("\\.","")+"]",xT=/((?:WC+[\/:])*)/.source.replace("WC",tf),yT=/(WCOD+)?/.source.replace("WCOD",vT),ST=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),MT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),bT=new RegExp("^"+xT+yT+ST+MT+"$"),ET=["material","materials","bones","map"];class TT{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gT,"")}static parseTrackName(e){const t=bT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ET.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=TT;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AT{constructor(e,t,n=0,i=1/0){this.ray=new Lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nh(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)nh(e[i],this,n,t);return n.sort(bp),n}}function bp(r,e){return r.distance-e.distance}function nh(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)nh(i[s],e,t,!0)}}class Ep{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wT extends eg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ai;i.setAttribute("position",new Ei(t,3)),i.setAttribute("color",new Ei(n,3));const s=new $h({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new tt,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);function RT(){const r=document.querySelector(".scroll-container");document.getElementById("btn").checked?r.style.pointerEvents="none":r.style.pointerEvents="auto"}function CT(r){document.getElementById("btn").addEventListener("click",RT)}function PT(r){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".company-name").addEventListener("mouseover",function(n){let i=0;const s=setInterval(()=>{n.target.innerText=n.target.innerText.split("").map((o,a)=>a<i?n.target.dataset.value[a]:e[Math.floor(Math.random()*26)]).join(""),i>=n.target.dataset.value.length&&clearInterval(s),i+=1/5})},20)})}function LT(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function no(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Tp=Array.prototype.forEach,qo=Array.prototype.slice,ee={BREAK:{},extend:function(e){return this.each(qo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(qo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=qo.call(arguments);return function(){for(var t=qo.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Tp&&e.forEach&&e.forEach===Tp)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():qo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},DT=[{litmus:ee.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:no},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:no},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:no},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:no}}},{litmus:ee.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ee.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ee.isObject,conversions:{RGBA_OBJ:{read:function(e){return ee.isNumber(e.r)&&ee.isNumber(e.g)&&ee.isNumber(e.b)&&ee.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ee.isNumber(e.r)&&ee.isNumber(e.g)&&ee.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ee.isNumber(e.h)&&ee.isNumber(e.s)&&ee.isNumber(e.v)&&ee.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ee.isNumber(e.h)&&ee.isNumber(e.s)&&ee.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],jo=void 0,ml=void 0,ih=function(){ml=!1;var e=arguments.length>1?ee.toArray(arguments):arguments[0];return ee.each(DT,function(t){if(t.litmus(e))return ee.each(t.conversions,function(n,i){if(jo=n.read(e),ml===!1&&jo!==!1)return ml=jo,jo.conversionName=i,jo.conversion=n,ee.BREAK}),ee.BREAK}),ml},Ap=void 0,oc={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Ap=t*8)|e&~(255<<Ap)}},IT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},wi=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ri=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Or=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Fr=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Br=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},on=function(){function r(){if(wi(this,r),this.__state=ih.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ri(r,[{key:"toString",value:function(){return no(this)}},{key:"toHexString",value:function(){return no(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function nf(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(on.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(on.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function rf(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(on.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(on.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}on.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=oc.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")ee.extend(r.__state,oc.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};on.recalculateHSV=function(r){var e=oc.rgb_to_hsv(r.r,r.g,r.b);ee.extend(r.__state,{s:e.s,v:e.v}),ee.isNaN(e.h)?ee.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};on.COMPONENTS=["r","g","b","h","s","v","hex","a"];nf(on.prototype,"r",2);nf(on.prototype,"g",1);nf(on.prototype,"b",0);rf(on.prototype,"h");rf(on.prototype,"s");rf(on.prototype,"v");Object.defineProperty(on.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(on.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=oc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ts=function(){function r(e,t){wi(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ri(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),OT={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},og={};ee.each(OT,function(r,e){ee.each(r,function(t){og[t]=e})});var NT=/(\d+(\.\d+)?)px/;function Ci(r){if(r==="0"||ee.isUndefined(r))return 0;var e=r.match(NT);return ee.isNull(e)?0:parseFloat(e[1])}var q={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;ee.isUndefined(s)&&(s=!0),ee.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=og[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;ee.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}ee.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),q},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),q},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return q},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return q},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ci(t["border-left-width"])+Ci(t["border-right-width"])+Ci(t["padding-left"])+Ci(t["padding-right"])+Ci(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ci(t["border-top-width"])+Ci(t["border-bottom-width"])+Ci(t["padding-top"])+Ci(t["padding-bottom"])+Ci(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ag=function(r){Fr(e,r);function e(t,n){wi(this,e);var i=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return q.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ri(e,[{key:"setValue",value:function(n){var i=Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ts),UT=function(r){Fr(e,r);function e(t,n,i){wi(this,e);var s=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),ee.isArray(o)){var l={};ee.each(o,function(c){l[c]=c}),o=l}return ee.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),q.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ri(e,[{key:"setValue",value:function(n){var i=Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return q.isActive(this.__select)?this:(this.__select.value=this.getValue(),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Ts),FT=function(r){Fr(e,r);function e(t,n){wi(this,e);var i=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),q.bind(i.__input,"keyup",o),q.bind(i.__input,"change",o),q.bind(i.__input,"blur",a),q.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ri(e,[{key:"updateDisplay",value:function(){return q.isActive(this.__input)||(this.__input.value=this.getValue()),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ts);function wp(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var lg=function(r){Fr(e,r);function e(t,n,i){wi(this,e);var s=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,ee.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=wp(s.__impliedStep),s}return Ri(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=wp(n),this}}]),e}(Ts);function BT(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var ac=function(r){Fr(e,r);function e(t,n,i){wi(this,e);var s=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);ee.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var _=a-g.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=g.clientY}function f(){q.unbind(window,"mousemove",h),q.unbind(window,"mouseup",f),c()}function d(g){q.bind(window,"mousemove",h),q.bind(window,"mouseup",f),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),q.bind(s.__input,"change",l),q.bind(s.__input,"blur",u),q.bind(s.__input,"mousedown",d),q.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ri(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():BT(this.getValue(),this.__precision),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(lg);function Rp(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var rh=function(r){Fr(e,r);function e(t,n,i,s,o){wi(this,e);var a=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),q.bind(a.__background,"mousedown",c),q.bind(a.__background,"touchstart",f),q.addClass(a.__background,"slider"),q.addClass(a.__foreground,"slider-fg");function c(_){document.activeElement.blur(),q.bind(window,"mousemove",u),q.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(Rp(_.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){q.unbind(window,"mousemove",u),q.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(q.bind(window,"touchmove",d),q.bind(window,"touchend",g),d(_))}function d(_){var p=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Rp(p,m.left,m.right,l.__min,l.__max))}function g(){q.unbind(window,"touchmove",d),q.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ri(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(lg),cg=function(r){Fr(e,r);function e(t,n,i){wi(this,e);var s=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,q.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),q.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ri(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Ts),sh=function(r){Fr(e,r);function e(t,n){wi(this,e);var i=Br(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new on(i.getValue()),i.__temp=new on(0);var s=i;i.domElement=document.createElement("div"),q.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",q.bind(i.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),q.bind(i.__input,"blur",h),q.bind(i.__selector,"mousedown",function(){q.addClass(this,"drag").bind(window,"mouseup",function(){q.removeClass(s.__selector,"drag")})}),q.bind(i.__selector,"touchstart",function(){q.addClass(this,"drag").bind(window,"touchend",function(){q.removeClass(s.__selector,"drag")})});var o=document.createElement("div");ee.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ee.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ee.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ee.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ee.extend(o.style,{width:"100%",height:"100%",background:"none"}),Cp(o,"top","rgba(0,0,0,0)","#000"),ee.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),zT(i.__hue_field),ee.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),q.bind(i.__saturation_field,"mousedown",a),q.bind(i.__saturation_field,"touchstart",a),q.bind(i.__field_knob,"mousedown",a),q.bind(i.__field_knob,"touchstart",a),q.bind(i.__hue_field,"mousedown",l),q.bind(i.__hue_field,"touchstart",l);function a(_){d(_),q.bind(window,"mousemove",d),q.bind(window,"touchmove",d),q.bind(window,"mouseup",c),q.bind(window,"touchend",c)}function l(_){g(_),q.bind(window,"mousemove",g),q.bind(window,"touchmove",g),q.bind(window,"mouseup",u),q.bind(window,"touchend",u)}function c(){q.unbind(window,"mousemove",d),q.unbind(window,"touchmove",d),q.unbind(window,"mouseup",c),q.unbind(window,"touchend",c),f()}function u(){q.unbind(window,"mousemove",g),q.unbind(window,"touchmove",g),q.unbind(window,"mouseup",u),q.unbind(window,"touchend",u),f()}function h(){var _=ih(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function d(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,y=m.clientX,v=m.clientY,x=(y-p.left)/(p.right-p.left),w=1-(v-p.top)/(p.bottom-p.top);return w>1?w=1:w<0&&(w=0),x>1?x=1:x<0&&(x=0),s.__color.v=w,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,y=m.clientY,v=1-(y-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),s.__color.h=v*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ri(e,[{key:"updateDisplay",value:function(){var n=ih(this.getValue());if(n!==!1){var i=!1;ee.each(on.COMPONENTS,function(a){if(!ee.isUndefined(n[a])&&!ee.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&ee.extend(this.__color.__state,n)}ee.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;ee.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Cp(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ee.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Ts),kT=["-moz-","-o-","-webkit-","-ms-",""];function Cp(r,e,t,n){r.style.background="",ee.each(kT,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function zT(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var HT={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},GT=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,VT=function(e,t){var n=e[t];return ee.isArray(arguments[2])||ee.isObject(arguments[2])?new UT(e,t,arguments[2]):ee.isNumber(n)?ee.isNumber(arguments[2])&&ee.isNumber(arguments[3])?ee.isNumber(arguments[4])?new rh(e,t,arguments[2],arguments[3],arguments[4]):new rh(e,t,arguments[2],arguments[3]):ee.isNumber(arguments[4])?new ac(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ac(e,t,{min:arguments[2],max:arguments[3]}):ee.isString(n)?new FT(e,t):ee.isFunction(n)?new cg(e,t,""):ee.isBoolean(n)?new ag(e,t):null};function WT(r){setTimeout(r,1e3/60)}var XT=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||WT,YT=function(){function r(){wi(this,r),this.backgroundElement=document.createElement("div"),ee.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),q.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ee.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;q.bind(this.backgroundElement,"click",function(){e.hide()})}return Ri(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ee.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",q.unbind(t.domElement,"webkitTransitionEnd",i),q.unbind(t.domElement,"transitionend",i),q.unbind(t.domElement,"oTransitionEnd",i)};q.bind(this.domElement,"webkitTransitionEnd",n),q.bind(this.domElement,"transitionend",n),q.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-q.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-q.getHeight(this.domElement)/2+"px"}}]),r}(),qT=LT(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);HT.inject(qT);var Pp="dg",Lp=72,Dp=20,Ia="Default",ta=function(){try{return!!window.localStorage}catch{return!1}}(),fa=void 0,Ip=!0,js=void 0,_u=!1,ug=[],Pt=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),q.addClass(this.domElement,Pp),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ee.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=ee.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ee.isUndefined(n.load)?n.load={preset:Ia}:n.preset&&(n.load.preset=n.preset),ee.isUndefined(n.parent)&&n.hideable&&ug.push(this),n.resizable=ee.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ee.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=ta&&localStorage.getItem(Ks(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,ZT(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,lh(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?q.addClass(t.__ul,r.CLASS_CLOSED):q.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){ta&&(i=f,f?q.bind(window,"unload",s):q.unbind(window,"unload",s),localStorage.setItem(Ks(t,"isLocal"),f))}}}),ee.isUndefined(n.parent)){if(this.closed=n.closed||!1,q.addClass(this.domElement,r.CLASS_MAIN),q.makeSelectable(this.domElement,!1),ta&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Ks(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,q.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(q.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(q.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),q.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);q.addClass(l,"controller-name"),o=sf(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};q.addClass(this.__ul,r.CLASS_CLOSED),q.addClass(o,"title"),q.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(ee.isUndefined(n.parent)&&(Ip&&(js=document.createElement("div"),q.addClass(js,Pp),q.addClass(js,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(js),Ip=!1),js.appendChild(this.domElement),q.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||lh(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},q.bind(window,"resize",this.__resizeHandler),q.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),q.bind(this.__ul,"transitionend",this.__resizeHandler),q.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&$T(this),s=function(){ta&&localStorage.getItem(Ks(t,"isLocal"))==="true"&&localStorage.setItem(Ks(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,ee.defer(function(){h.width-=1})}n.parent||u()};Pt.toggleHide=function(){_u=!_u,ee.each(ug,function(r){r.domElement.style.display=_u?"none":""})};Pt.CLASS_AUTO_PLACE="a";Pt.CLASS_AUTO_PLACE_CONTAINER="ac";Pt.CLASS_MAIN="main";Pt.CLASS_CONTROLLER_ROW="cr";Pt.CLASS_TOO_TALL="taller-than-window";Pt.CLASS_CLOSED="closed";Pt.CLASS_CLOSE_BUTTON="close-button";Pt.CLASS_CLOSE_TOP="close-top";Pt.CLASS_CLOSE_BOTTOM="close-bottom";Pt.CLASS_DRAG="drag";Pt.DEFAULT_WIDTH=245;Pt.TEXT_CLOSED="Close Controls";Pt.TEXT_OPEN="Open Controls";Pt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Lp||r.keyCode===Lp)&&Pt.toggleHide()};q.bind(window,"keydown",Pt._keydownHandler,!1);ee.extend(Pt.prototype,{add:function(e,t){return da(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return da(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ee.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&js.removeChild(this.domElement);var e=this;ee.each(this.__folders,function(t){e.removeFolder(t)}),q.unbind(window,"keydown",Pt._keydownHandler,!1),Op(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Pt(t);this.__folders[e]=n;var i=sf(this,n.domElement);return q.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Op(e);var t=this;ee.each(e.__folders,function(n){e.removeFolder(n)}),ee.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=q.getOffset(e.__ul).top,n=0;ee.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=q.getHeight(i))}),window.innerHeight-t-Dp<n?(q.addClass(e.domElement,Pt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Dp+"px"):(q.removeClass(e.domElement,Pt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ee.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ee.debounce(function(){this.onResize()},50),remember:function(){if(ee.isUndefined(fa)&&(fa=new YT,fa.domElement.innerHTML=GT),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ee.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&KT(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&lh(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_l(this)),e.folders={},ee.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_l(this),oh(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ia]=_l(this,!0)),this.load.remembered[e]=_l(this),this.preset=e,ah(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ee.each(this.__controllers,function(t){this.getRoot().load.remembered?hg(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ee.each(this.__folders,function(t){t.revert(t)}),e||oh(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&fg(this.__listening)},updateDisplay:function(){ee.each(this.__controllers,function(e){e.updateDisplay()}),ee.each(this.__folders,function(e){e.updateDisplay()})}});function sf(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Op(r){q.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&q.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function oh(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function jT(r,e,t){if(t.__li=e,t.__gui=r,ee.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),da(r,t.object,t.property,{before:a,factoryArgs:[ee.toArray(arguments)]})}if(ee.isArray(o)||ee.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),da(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof rh){var n=new ac(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ee.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),q.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof ac){var i=function(o){if(ee.isNumber(t.__min)&&ee.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=da(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=ee.compose(i,t.min),t.max=ee.compose(i,t.max)}else t instanceof ag?(q.bind(e,"click",function(){q.fakeEvent(t.__checkbox,"click")}),q.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof cg?(q.bind(e,"click",function(){q.fakeEvent(t.__button,"click")}),q.bind(e,"mouseover",function(){q.addClass(t.__button,"hover")}),q.bind(e,"mouseout",function(){q.removeClass(t.__button,"hover")})):t instanceof sh&&(q.addClass(e,"color"),t.updateDisplay=ee.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=ee.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&oh(r.getRoot(),!0),s},t.setValue)}function hg(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[Ia])o=s[Ia];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function da(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new sh(e,t);else{var s=[e,t].concat(n.factoryArgs);i=VT.apply(r,s)}n.before instanceof Ts&&(n.before=n.before.__li),hg(r,i),q.addClass(i.domElement,"c");var o=document.createElement("span");q.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=sf(r,a,n.before);return q.addClass(l,Pt.CLASS_CONTROLLER_ROW),i instanceof sh?q.addClass(l,"color"):q.addClass(l,IT(i.getValue())),jT(r,l,i),r.__controllers.push(i),i}function Ks(r,e){return document.location.href+"."+e}function ah(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Np(r,e){e.style.display=r.useLocalStorage?"block":"none"}function KT(r){var e=r.__save_row=document.createElement("li");q.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),q.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",q.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",q.addClass(n,"button"),q.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",q.addClass(i,"button"),q.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",q.addClass(s,"button"),q.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?ee.each(r.load.remembered,function(h,f){ah(r,f,f===r.preset)}):ah(r,Ia,!1),q.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),ta){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ks(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Np(r,a),q.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Np(r,a)})}var u=document.getElementById("dg-new-constructor");q.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&fa.hide()}),q.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),fa.show(),u.focus(),u.select()}),q.bind(n,"click",function(){r.save()}),q.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),q.bind(s,"click",function(){r.revert()})}function $T(r){var e=void 0;r.__resize_handle=document.createElement("div"),ee.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){q.removeClass(r.__closeButton,Pt.CLASS_DRAG),q.unbind(window,"mousemove",t),q.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,q.addClass(r.__closeButton,Pt.CLASS_DRAG),q.bind(window,"mousemove",t),q.bind(window,"mouseup",n),!1}q.bind(r.__resize_handle,"mousedown",i),q.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function lh(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function _l(r,e){var t={};return ee.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];ee.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function ZT(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function fg(r){r.length!==0&&XT.call(window,function(){fg(r)}),ee.each(r,function(e){e.updateDisplay()})}const Up={type:"change"},gu={type:"start"},Fp={type:"end"},gl=new Lo,Bp=new gr,JT=Math.cos(70*I_.DEG2RAD);class QT extends Es{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",se),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Up),n.update(),s=i.NONE},this.update=function(){const P=new O,te=new Hi().setFromUnitVectors(e.up,new O(0,1,0)),de=te.clone().invert(),le=new O,we=new Hi,Ye=new O,Je=2*Math.PI;return function(he=null){const L=n.object.position;P.copy(L).sub(n.target),P.applyQuaternion(te),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&B(S(he)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=n.minAzimuthAngle,ue=n.maxAzimuthAngle;isFinite(ce)&&isFinite(ue)&&(ce<-Math.PI?ce+=Je:ce>Math.PI&&(ce-=Je),ue<-Math.PI?ue+=Je:ue>Math.PI&&(ue-=Je),ce<=ue?a.theta=Math.max(ce,Math.min(ue,a.theta)):a.theta=a.theta>(ce+ue)/2?Math.max(ce,a.theta):Math.min(ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(de),L.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Fe=!1;if(n.zoomToCursor&&A){let Ce=null;if(n.object.isPerspectiveCamera){const nt=P.length();Ce=$(nt*c);const Se=nt-Ce;n.object.position.addScaledVector(x,Se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const nt=new O(w.x,w.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Fe=!0;const Se=new O(w.x,w.y,0);Se.unproject(n.object),n.object.position.sub(Se).add(nt),n.object.updateMatrixWorld(),Ce=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(gl.origin.copy(n.object.position),gl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(gl.direction))<JT?e.lookAt(n.target):(Bp.setFromNormalAndCoplanarPoint(n.object.up,n.target),gl.intersectPlane(Bp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Fe=!0);return c=1,A=!1,Fe||le.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o||Ye.distanceToSquared(n.target)>0?(n.dispatchEvent(Up),le.copy(n.object.position),we.copy(n.object.quaternion),Ye.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",se),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ep,l=new Ep;let c=1;const u=new O,h=new Ke,f=new Ke,d=new Ke,g=new Ke,_=new Ke,p=new Ke,m=new Ke,y=new Ke,v=new Ke,x=new O,w=new Ke;let A=!1;const M=[],I={};function S(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function b(P){const te=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*te)}function B(P){l.theta-=P}function N(P){l.phi-=P}const J=function(){const P=new O;return function(de,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-de),u.add(P)}}(),D=function(){const P=new O;return function(de,le){n.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(de),u.add(P)}}(),F=function(){const P=new O;return function(de,le){const we=n.domElement;if(n.object.isPerspectiveCamera){const Ye=n.object.position;P.copy(Ye).sub(n.target);let Je=P.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),J(2*de*Je/we.clientHeight,n.object.matrix),D(2*le*Je/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(de*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),D(le*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P,te){if(!n.zoomToCursor)return;A=!0;const de=n.domElement.getBoundingClientRect(),le=P-de.left,we=te-de.top,Ye=de.width,Je=de.height;w.x=le/Ye*2-1,w.y=-(we/Je)*2+1,x.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function C(P){h.set(P.clientX,P.clientY)}function Q(P){j(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function oe(P){g.set(P.clientX,P.clientY)}function K(P){f.set(P.clientX,P.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;B(2*Math.PI*d.x/te.clientHeight),N(2*Math.PI*d.y/te.clientHeight),h.copy(f),n.update()}function Z(P){y.set(P.clientX,P.clientY),v.subVectors(y,m),v.y>0?H(b(v.y)):v.y<0&&X(b(v.y)),m.copy(y),n.update()}function fe(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_),n.update()}function Ee(P){j(P.clientX,P.clientY),P.deltaY<0?X(b(P.deltaY)):P.deltaY>0&&H(b(P.deltaY)),n.update()}function ge(P){let te=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),n.update())}function De(P){if(M.length===1)h.set(P.pageX,P.pageY);else{const te=$e(P),de=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);h.set(de,le)}}function Ie(P){if(M.length===1)g.set(P.pageX,P.pageY);else{const te=$e(P),de=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);g.set(de,le)}}function Ue(P){const te=$e(P),de=P.pageX-te.x,le=P.pageY-te.y,we=Math.sqrt(de*de+le*le);m.set(0,we)}function He(P){n.enableZoom&&Ue(P),n.enablePan&&Ie(P)}function G(P){n.enableZoom&&Ue(P),n.enableRotate&&De(P)}function Ge(P){if(M.length==1)f.set(P.pageX,P.pageY);else{const de=$e(P),le=.5*(P.pageX+de.x),we=.5*(P.pageY+de.y);f.set(le,we)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;B(2*Math.PI*d.x/te.clientHeight),N(2*Math.PI*d.y/te.clientHeight),h.copy(f)}function Me(P){if(M.length===1)_.set(P.pageX,P.pageY);else{const te=$e(P),de=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);_.set(de,le)}p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_)}function Oe(P){const te=$e(P),de=P.pageX-te.x,le=P.pageY-te.y,we=Math.sqrt(de*de+le*le);y.set(0,we),v.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),H(v.y),m.copy(y);const Ye=(P.pageX+te.x)*.5,Je=(P.pageY+te.y)*.5;j(Ye,Je)}function be(P){n.enableZoom&&Oe(P),n.enablePan&&Me(P)}function V(P){n.enableZoom&&Oe(P),n.enableRotate&&Ge(P)}function Be(P){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),Le(P),P.pointerType==="touch"?ve(P):k(P))}function R(P){n.enabled!==!1&&(P.pointerType==="touch"?ae(P):re(P))}function E(P){We(P),M.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Fp),s=i.NONE}function k(P){let te;switch(P.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ws.DOLLY:if(n.enableZoom===!1)return;Q(P),s=i.DOLLY;break;case ws.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;oe(P),s=i.PAN}else{if(n.enableRotate===!1)return;C(P),s=i.ROTATE}break;case ws.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;C(P),s=i.ROTATE}else{if(n.enablePan===!1)return;oe(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(gu)}function re(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(P);break;case i.PAN:if(n.enablePan===!1)return;fe(P);break}}function ie(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(gu),Ee(P),n.dispatchEvent(Fp))}function se(P){n.enabled===!1||n.enablePan===!1||ge(P)}function ve(P){switch(ne(P),M.length){case 1:switch(n.touches.ONE){case Rs.ROTATE:if(n.enableRotate===!1)return;De(P),s=i.TOUCH_ROTATE;break;case Rs.PAN:if(n.enablePan===!1)return;Ie(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Rs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(P),s=i.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(gu)}function ae(P){switch(ne(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ge(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Me(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(P),n.update();break;default:s=i.NONE}}function xe(P){n.enabled!==!1&&P.preventDefault()}function Le(P){M.push(P.pointerId)}function We(P){delete I[P.pointerId];for(let te=0;te<M.length;te++)if(M[te]==P.pointerId){M.splice(te,1);return}}function ne(P){let te=I[P.pointerId];te===void 0&&(te=new Ke,I[P.pointerId]=te),te.set(P.pageX,P.pageY)}function $e(P){const te=P.pointerId===M[0]?M[1]:M[0];return I[te]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}function kp(r,e){if(e===ux)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ku||e===C_){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ku)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class eA extends No{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new vA(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ha.extractUrlBase(e);o=ha.resolveURL(c,this.path)}else o=ha.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dg){try{o[ht.KHR_BINARY_GLTF]=new xA(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new DA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new iA;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new yA(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new SA;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new MA;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function tA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nA{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Uo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sg(u),c.distance=h;break;case"spot":c=new fT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,vr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class iA{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,t,n){const i=[];e.color=new tt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Bt))}return Promise.all(i)}}class rA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class sA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(s)}}class oA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class aA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class lA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class cA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(a[0],a[1],a[2],ln),Promise.all(s)}}class uA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class hA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(s)}}class fA{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class dA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class pA{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class mA{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _A{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gA{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class vA{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ri.TRIANGLES&&c.mode!==ri.TRIANGLE_STRIP&&c.mode!==ri.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new at,p=new O,m=new Hi,y=new O(1,1,1),v=new qE(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(p,m,y));for(const x in l)if(x==="_COLOR_0"){const w=l[x];v.instanceColor=new eh(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const dg="glTF",Ko=12,zp={JSON:1313821514,BIN:5130562};class xA{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ko,s=new DataView(e,Ko);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zp.JSON){const c=new Uint8Array(e,Ko+o,a);this.content=n.decode(c)}else if(l===zp.BIN){const c=Ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ch[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ch[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=uo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},a,c,ln,f)})})}}class SA{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class MA{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class pg extends ka{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,y=1-p,v=m-f+h;for(let x=0;x!==a;x++){const w=o[_+x+a],A=o[_+x+l]*u,M=o[g+x+a],I=o[g+x]*u;s[x]=y*w+v*A+p*M+m*I}return s}}const bA=new Hi;class EA extends pg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return bA.fromArray(s).normalize().toArray(s),s}}const ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hp={9728:nn,9729:mn,9984:ju,9985:S_,9986:Ul,9987:_s},Gp={33071:ai,33648:ec,10497:Mo},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TA={CUBICSPLINE:void 0,LINEAR:Eo,STEP:La},xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AA(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Jh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),r.DefaultMaterial}function qr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wA(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function RA(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CA(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yu(t.attributes):e=r.indices+":"+yu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+yu(r.targets[n]);return e}function yu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function uh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PA(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const LA=new at;class DA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new uT(this.options.manager):this.textureLoader=new _T(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return qr(s,a,i),vr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ha.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=vu[i.type],a=uo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Dn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=vu[i.type],c=uo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new c(a,m*d,i.count*d/u),v=new HE(_,d/u),t.cache.add(y,v)),p=new jh(v,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new Dn(_,l,g);if(i.sparse!==void 0){const m=vu.SCALAR,y=uo[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new y(o[1],v,i.sparse.count*m),A=new c(o[2],x,i.sparse.count*l);a!==null&&(p=new Dn(p.array.slice(),p.itemSize,p.normalized));for(let M=0,I=w.length;M<I;M++){const S=w[M];if(p.setX(S,A[M*l]),l>=2&&p.setY(S,A[M*l+1]),l>=3&&p.setZ(S,A[M*l+2]),l>=4&&p.setW(S,A[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Hp[f.magFilter]||mn,u.minFilter=Hp[f.minFilter]||_s,u.wrapS=Gp[f.wrapS]||Mo,u.wrapT=Gp[f.wrapT]||Mo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new sn(_);p.needsUpdate=!0,f(p)}),t.load(ha.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||PA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new tg,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $h,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new tt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ln),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Bt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ii);const u=s.alphaMode||xu.OPAQUE;if(u===xu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ts&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ts&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ts){const h=s.emissiveFactor;a.emissive=new tt().setRGB(h[0],h[1],h[2],ln)}return s.emissiveTexture!==void 0&&o!==ts&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Bt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),vr(h,s),t.associations.set(h,{materials:e}),s.extensions&&qr(i,h,s),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=CA(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Vp(new Ai,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?AA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const y=c[d];if(p.mode===ri.TRIANGLES||p.mode===ri.TRIANGLE_STRIP||p.mode===ri.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new VE(_,y):new fi(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ri.TRIANGLE_STRIP?m.geometry=kp(m.geometry,C_):p.mode===ri.TRIANGLE_FAN&&(m.geometry=kp(m.geometry,Ku));else if(p.mode===ri.LINES)m=new eg(_,y);else if(p.mode===ri.LINE_STRIP)m=new Zh(_,y);else if(p.mode===ri.LINE_LOOP)m=new jE(_,y);else if(p.mode===ri.POINTS)m=new KE(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&RA(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),vr(m,s),p.extensions&&qr(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&qr(i,h[0],s),h[0];const f=new ns;s.extensions&&qr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(I_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new at;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let y=0,v=f.length;y<v;y++){const x=f[y],w=d[y],A=g[y],M=_[y],I=p[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,w,A,M,I);if(S)for(let b=0;b<S.length;b++)m.push(S[b])}return new iT(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,LA)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Q_:c.length>1?u=new ns:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),vr(u,s),s.extensions&&qr(n,u,s),s.matrix!==void 0){const h=new at;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ns;n.name&&(s.name=i.createUniqueName(n.name)),vr(s,n),n.extensions&&qr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Bi||f instanceof sn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];mr[s.path]===mr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(mr[s.path]){case mr.weights:c=wo;break;case mr.rotation:c=xs;break;case mr.position:case mr.scale:c=Ro;break;default:switch(n.itemSize){case 1:c=wo;break;case 2:case 3:default:c=Ro;break}break}const u=i.interpolation!==void 0?TA[i.interpolation]:Eo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+mr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xs?EA:pg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IA(r,e,t){const n=e.attributes,i=new Gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=uh(uo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=uh(uo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Vp(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=ch[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return mt.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),vr(r,e),IA(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wA(r,e.targets,t):r})}function Wp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function OA(r,e,t){return e&&Wp(r.prototype,e),t&&Wp(r,t),r}/*!
 * Observer 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var un,Bl,$n,Er,Tr,ho,mg,$r,pa,_g,ir,xi,gg,vg=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},xg=1,io=[],lt=[],ki=[],ma=Date.now,hh=function(e,t){return t},NA=function(){var e=pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,ki),lt=n,ki=i,hh=function(o,a){return t[o](a)}},Lr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},_a=function(e){return!!~_g.indexOf(e)},Mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},vl="scrollLeft",xl="scrollTop",fh=function(){return ir&&ir.isPressed||lt.cache++},lc=function(e,t){var n=function i(s){if(s||s===0){xg&&($n.history.scrollRestoration="manual");var o=ir&&ir.isPressed;s=i.v=Math.round(s)||(ir&&ir.iOS?1:0),e(s),i.cacheID=lt.cache,o&&hh("ss",s)}else(t||lt.cache!==i.cacheID||hh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lc(function(r){return arguments.length?$n.scrollTo(r,jt.sc()):$n.pageXOffset||Er[vl]||Tr[vl]||ho[vl]||0})},jt={s:xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:lc(function(r){return arguments.length?$n.scrollTo(Pn.sc(),r):$n.pageYOffset||Er[xl]||Tr[xl]||ho[xl]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Nr=function(e,t){var n=t.s,i=t.sc;_a(e)&&(e=Er.scrollingElement||Tr);var s=lt.indexOf(e),o=i===jt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Mn(e,"scroll",fh);var a=lt[s+o],l=a||(lt[s+o]=lc(Lr(e,n),!0)||(_a(e)?i:lc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),l},dh=function(e,t,n){var i=e,s=e,o=ma(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=ma();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,p=s,m=ma();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},$o=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},yg=function(){pa=un.core.globals().ScrollTrigger,pa&&pa.core&&NA()},Sg=function(e){return un=e||vg(),!Bl&&un&&typeof document<"u"&&document.body&&($n=window,Er=document,Tr=Er.documentElement,ho=Er.body,_g=[$n,Er,Tr,ho],un.utils.clamp,gg=un.core.context||function(){},$r="onpointerenter"in ho?"pointer":"mouse",mg=Yt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xi=Yt.eventTypes=("ontouchstart"in Tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xg=0},500),yg(),Bl=1),Bl};Pn.op=jt;lt.cache=0;var Yt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Bl||Sg(un)||console.warn("Please gsap.registerPlugin(Observer)"),pa||yg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,v=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,M=n.onUp,I=n.onDown,S=n.onChangeX,b=n.onChangeY,B=n.onChange,N=n.onToggleX,J=n.onToggleY,D=n.onHover,F=n.onHoverEnd,H=n.onMove,X=n.ignoreCheck,j=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,Q=n.onWheel,oe=n.onEnable,K=n.onDisable,Z=n.onClick,fe=n.scrollSpeed,Ee=n.capture,ge=n.allowClicks,De=n.lockAxis,Ie=n.onLockAxis;this.target=a=On(a)||Tr,this.vars=n,d&&(d=un.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,fe=fe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(ho).lineHeight)||22);var Ue,He,G,Ge,Me,Oe,be,V=this,Be=0,R=0,E=Nr(a,Pn),k=Nr(a,jt),re=E(),ie=k(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&xi[0]==="pointerdown",ve=_a(a),ae=a.ownerDocument||Er,xe=[0,0,0],Le=[0,0,0],We=0,ne=function(){return We=ma()},$e=function(Te,qe){return(V.event=Te)&&d&&~d.indexOf(Te.target)||qe&&se&&Te.pointerType!=="touch"||X&&X(Te,qe)},P=function(){V._vx.reset(),V._vy.reset(),He.pause(),h&&h(V)},te=function(){var Te=V.deltaX=Xp(xe),qe=V.deltaY=Xp(Le),je=Math.abs(Te)>=i,me=Math.abs(qe)>=i;B&&(je||me)&&B(V,Te,qe,xe,Le),je&&(w&&V.deltaX>0&&w(V),A&&V.deltaX<0&&A(V),S&&S(V),N&&V.deltaX<0!=Be<0&&N(V),Be=V.deltaX,xe[0]=xe[1]=xe[2]=0),me&&(I&&V.deltaY>0&&I(V),M&&V.deltaY<0&&M(V),b&&b(V),J&&V.deltaY<0!=R<0&&J(V),R=V.deltaY,Le[0]=Le[1]=Le[2]=0),(Ge||G)&&(H&&H(V),G&&(y(V),G=!1),Ge=!1),Oe&&!(Oe=!1)&&Ie&&Ie(V),Me&&(Q(V),Me=!1),Ue=0},de=function(Te,qe,je){xe[je]+=Te,Le[je]+=qe,V._vx.update(Te),V._vy.update(qe),c?Ue||(Ue=requestAnimationFrame(te)):te()},le=function(Te,qe){De&&!be&&(V.axis=be=Math.abs(Te)>Math.abs(qe)?"x":"y",Oe=!0),be!=="y"&&(xe[2]+=Te,V._vx.update(Te,!0)),be!=="x"&&(Le[2]+=qe,V._vy.update(qe,!0)),c?Ue||(Ue=requestAnimationFrame(te)):te()},we=function(Te){if(!$e(Te,1)){Te=$o(Te,u);var qe=Te.clientX,je=Te.clientY,me=qe-V.x,Xe=je-V.y,Ve=V.isDragging;V.x=qe,V.y=je,(Ve||Math.abs(V.startX-qe)>=s||Math.abs(V.startY-je)>=s)&&(y&&(G=!0),Ve||(V.isDragging=!0),le(me,Xe),Ve||p&&p(V))}},Ye=V.onPress=function(Se){$e(Se,1)||Se&&Se.button||(V.axis=be=null,He.pause(),V.isPressed=!0,Se=$o(Se),Be=R=0,V.startX=V.x=Se.clientX,V.startY=V.y=Se.clientY,V._vx.reset(),V._vy.reset(),Mn(j?a:ae,xi[1],we,u,!0),V.deltaX=V.deltaY=0,v&&v(V))},Je=V.onRelease=function(Se){if(!$e(Se,1)){Sn(j?a:ae,xi[1],we,!0);var Te=!isNaN(V.y-V.startY),qe=V.isDragging,je=qe&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),me=$o(Se);!je&&Te&&(V._vx.reset(),V._vy.reset(),u&&ge&&un.delayedCall(.08,function(){if(ma()-We>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(ae.createEvent){var Xe=ae.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,$n,1,me.screenX,me.screenY,me.clientX,me.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Xe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&qe&&!j&&He.restart(!0),m&&qe&&m(V),x&&x(V,je)}},ye=function(Te){return Te.touches&&Te.touches.length>1&&(V.isGesturing=!0)&&$(Te,V.isDragging)},he=function(){return(V.isGesturing=!1)||C(V)},L=function(Te){if(!$e(Te)){var qe=E(),je=k();de((qe-re)*fe,(je-ie)*fe,1),re=qe,ie=je,h&&He.restart(!0)}},ce=function(Te){if(!$e(Te)){Te=$o(Te,u),Q&&(Me=!0);var qe=(Te.deltaMode===1?l:Te.deltaMode===2?$n.innerHeight:1)*g;de(Te.deltaX*qe,Te.deltaY*qe,0),h&&!j&&He.restart(!0)}},ue=function(Te){if(!$e(Te)){var qe=Te.clientX,je=Te.clientY,me=qe-V.x,Xe=je-V.y;V.x=qe,V.y=je,Ge=!0,h&&He.restart(!0),(me||Xe)&&le(me,Xe)}},Fe=function(Te){V.event=Te,D(V)},Ce=function(Te){V.event=Te,F(V)},nt=function(Te){return $e(Te)||$o(Te,u)&&Z(V)};He=V._dc=un.delayedCall(f||.25,P).pause(),V.deltaX=V.deltaY=0,V._vx=dh(0,50,!0),V._vy=dh(0,50,!0),V.scrollX=E,V.scrollY=k,V.isDragging=V.isGesturing=V.isPressed=!1,gg(this),V.enable=function(Se){return V.isEnabled||(Mn(ve?ae:a,"scroll",fh),o.indexOf("scroll")>=0&&Mn(ve?ae:a,"scroll",L,u,Ee),o.indexOf("wheel")>=0&&Mn(a,"wheel",ce,u,Ee),(o.indexOf("touch")>=0&&mg||o.indexOf("pointer")>=0)&&(Mn(a,xi[0],Ye,u,Ee),Mn(ae,xi[2],Je),Mn(ae,xi[3],Je),ge&&Mn(a,"click",ne,!1,!0),Z&&Mn(a,"click",nt),$&&Mn(ae,"gesturestart",ye),C&&Mn(ae,"gestureend",he),D&&Mn(a,$r+"enter",Fe),F&&Mn(a,$r+"leave",Ce),H&&Mn(a,$r+"move",ue)),V.isEnabled=!0,Se&&Se.type&&Ye(Se),oe&&oe(V)),V},V.disable=function(){V.isEnabled&&(io.filter(function(Se){return Se!==V&&_a(Se.target)}).length||Sn(ve?ae:a,"scroll",fh),V.isPressed&&(V._vx.reset(),V._vy.reset(),Sn(j?a:ae,xi[1],we,!0)),Sn(ve?ae:a,"scroll",L,Ee),Sn(a,"wheel",ce,Ee),Sn(a,xi[0],Ye,Ee),Sn(ae,xi[2],Je),Sn(ae,xi[3],Je),Sn(a,"click",ne,!0),Sn(a,"click",nt),Sn(ae,"gesturestart",ye),Sn(ae,"gestureend",he),Sn(a,$r+"enter",Fe),Sn(a,$r+"leave",Ce),Sn(a,$r+"move",ue),V.isEnabled=V.isPressed=V.isDragging=!1,K&&K(V))},V.kill=V.revert=function(){V.disable();var Se=io.indexOf(V);Se>=0&&io.splice(Se,1),ir===V&&(ir=0)},io.push(V),j&&_a(a)&&(ir=V),V.enable(_)},OA(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Yt.version="3.12.4";Yt.create=function(r){return new Yt(r)};Yt.register=Sg;Yt.getAll=function(){return io.slice()};Yt.getById=function(r){return io.filter(function(e){return e.vars.id===r})[0]};vg()&&un.registerPlugin(Yt);/*!
 * ScrollTrigger 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,$s,ft,It,Mi,Ct,Mg,cc,Oa,ro,kl,yl,pn,Mc,ph,Tn,Yp,qp,Zs,bg,Su,Eg,En,Tg,Ag,wg,_r,mh,of,fo,af,uc,_h,Mu,Sl=1,wn=Date.now,bu=wn(),di=0,na=0,jp=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Kp=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},UA=function r(){return na&&requestAnimationFrame(r)},$p=function(){return Mc=1},Zp=function(){return Mc=0},Pi=function(e){return e},ia=function(e){return Math.round(e*1e5)/1e5||0},Rg=function(){return typeof window<"u"},Cg=function(){return Ae||Rg()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},ys=function(e){return!!~Mg.indexOf(e)},Pg=function(e){return(e==="Height"?af:ft["inner"+e])||Mi["client"+e]||Ct["client"+e]},Lg=function(e){return Lr(e,"getBoundingClientRect")||(ys(e)?function(){return Xl.width=ft.innerWidth,Xl.height=af,Xl}:function(){return er(e)})},FA=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Pg(s):e["client"+s])||0}},BA=function(e,t){return!t||~ki.indexOf(e)?Lg(e):function(){return Xl}},Ui=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-Lg(e)()[s]:ys(e)?(Mi[n]||Ct[n])-Pg(i):e[n]-e["offset"+i])},Ml=function(e,t){for(var n=0;n<Zs.length;n+=3)(!t||~t.indexOf(Zs[n+1]))&&e(Zs[n],Zs[n+1],Zs[n+2])},qn=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},zl=function(e){return typeof e=="number"},Zr=function(e){return typeof e=="object"},Zo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Eu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ys=Math.abs,Dg="left",Ig="top",lf="right",cf="bottom",hs="width",fs="height",ga="Right",va="Left",xa="Top",ya="Bottom",Wt="padding",si="margin",Co="Width",uf="Height",Qt="px",oi=function(e){return ft.getComputedStyle(e)},kA=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Jp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&oi(e)[ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},gh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Og=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},zA=function(e){return function(t){return Ae.utils.snap(Og(e),t)}},hf=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},HA=function(e){return function(t,n){return hf(Og(e))(t,n.direction)}},bl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},El=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Qp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tl={toggleActions:"play",anticipatePin:0},hc={top:0,left:0,center:.5,bottom:1,right:1},Hl=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hc?hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Al=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=It.createElement("div"),_=ys(n)||Lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Ct:n,y=e.indexOf("start")!==-1,v=y?c:u,x="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===jt?lf:cf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Gl(g,0,i,y),g},Gl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Co]=1,s["border"+a+Co]=0,s[n.p]=t+"px",Ae.set(e,s)},st=[],vh={},Na,em=function(){return wn()-di>34&&(Na||(Na=requestAnimationFrame(rr)))},qs=function(){(!En||!En.isPressed||En.startX>Ct.clientWidth)&&(lt.cache++,En?Na||(Na=requestAnimationFrame(rr)):rr(),di||Ms("scrollStart"),di=wn())},Tu=function(){wg=ft.innerWidth,Ag=ft.innerHeight},ra=function(){lt.cache++,!pn&&!Eg&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!Tg||wg!==ft.innerWidth||Math.abs(ft.innerHeight-Ag)>ft.innerHeight*.25)&&cc.restart(!0)},Ss={},GA=[],Ng=function r(){return en(ct,"scrollEnd",r)||is(!0)},Ms=function(e){return Ss[e]&&Ss[e].map(function(t){return t()})||GA},Yn=[],Ug=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},ff=function(e,t){var n;for(Tn=0;Tn<st.length;Tn++)n=st[Tn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uc=!0,t&&Ug(t),t||Ms("revert")},Fg=function(e,t){lt.cache++,(t||!An)&&lt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(ft.history.scrollRestoration=of=e)},An,ds=0,tm,VA=function(){if(tm!==ds){var e=tm=ds;requestAnimationFrame(function(){return e===ds&&is(!0)})}},Bg=function(){Ct.appendChild(fo),af=!En&&fo.offsetHeight||ft.innerHeight,Ct.removeChild(fo)},nm=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},is=function(e,t){if(di&&!e&&!uc){tn(ct,"scrollEnd",Ng);return}Bg(),An=ct.isRefreshing=!0,lt.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var n=Ms("refreshInit");bg&&ct.sort(),t||ff(),lt.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),uc=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),_h=1,nm(!0),st.forEach(function(i){var s=Ui(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),nm(!1),_h=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fg(of,1),cc.pause(),ds++,An=2,rr(2),st.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),An=ct.isRefreshing=!1,Ms("refresh")},xh=0,Vl=1,Sa,rr=function(e){if(e===2||!An&&!uc){ct.isUpdating=!0,Sa&&Sa.update(0);var t=st.length,n=wn(),i=n-bu>=50,s=t&&st[0].scroll();if(Vl=xh>s?-1:1,An||(xh=s),i&&(di&&!Mc&&n-di>200&&(di=0,Ms("scrollEnd")),kl=bu,bu=n),Vl<0){for(Tn=t;Tn-- >0;)st[Tn]&&st[Tn].update(0,i);Vl=1}else for(Tn=0;Tn<t;Tn++)st[Tn]&&st[Tn].update(0,i);ct.isUpdating=!1}Na=0},yh=[Dg,Ig,cf,lf,si+ya,si+ga,si+xa,si+va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wl=yh.concat([hs,fs,"boxSizing","max"+Co,"max"+uf,"position",si,Wt,Wt+xa,Wt+ga,Wt+ya,Wt+va]),WA=function(e,t,n){po(n);var i=e._gsap;if(i.spacerIsNative)po(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Au=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=yh.length,o=t.style,a=e.style,l;s--;)l=yh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[cf]=a[lf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[hs]=gh(e,Pn)+Qt,o[fs]=gh(e,jt)+Qt,o[Wt]=a[si]=a[Ig]=a[Dg]="0",po(i),a[hs]=a["max"+Co]=n[hs],a[fs]=a["max"+uf]=n[fs],a[Wt]=n[Wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},XA=/([A-Z])/g,po=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(XA,"-$1").toLowerCase())}},wl=function(e){for(var t=Wl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Wl[s],n[Wl[s]]);return i.t=e,i},YA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Xl={left:0,top:0},im=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Ln(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Hl("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),zl(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Gl(a,n,i,!0);else{Ln(t)&&(t=t(l));var v=(e||"0").split(" "),x,w,A,M;y=On(t,l)||Ct,x=er(y)||{},(!x||!x.left&&!x.top)&&oi(y).display==="none"&&(M=y.style.display,y.style.display="block",x=er(y),M?y.style.display=M:y.style.removeProperty("display")),w=Hl(v[0],x[i.d]),A=Hl(v[1]||"0",n),e=x[i.p]-c[i.p]-u+w+s-A,a&&Gl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,S=o._isStart;p="scroll"+i.d2,Gl(o,I,i,S&&I>20||!S&&(h?Math.max(Ct[p],Mi[p]):o.parentNode[p])<=I+1),h&&(c=er(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return d&&y&&(p=er(y),d.seek(f),m=er(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},qA=/(webkit|moz|length|cssText|inset)/i,rm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ct){e._stOrig=s.cssText,a=oi(e);for(o in a)!+o&&!qA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},kg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Rl=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},sm=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=kg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&rr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ae.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),ct.isTouch&&tn(e,"touchmove",n.wheelHandler),s},ct=function(){function r(t,n){$s||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!na){this.update=this.refresh=this.kill=Pi;return}n=Jp(qn(n)||zl(n)||n.nodeType?{trigger:n}:n,Tl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,w=s.pinReparent,A=s.pinSpacer,M=s.containerAnimation,I=s.fastScrollEnd,S=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:jt,B=!h&&h!==0,N=On(n.scroller||ft),J=Ae.core.getCache(N),D=ys(N),F=("pinType"in n?n.pinType:Lr(N,"pinType")||D&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=B&&n.toggleActions.split(" "),j="markers"in n?n.markers:Tl.markers,$=D?0:parseFloat(oi(N)["border"+b.p2+Co])||0,C=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(C)},oe=FA(N,D,b),K=BA(N,D),Z=0,fe=0,Ee=0,ge=Nr(N,b),De,Ie,Ue,He,G,Ge,Me,Oe,be,V,Be,R,E,k,re,ie,se,ve,ae,xe,Le,We,ne,$e,P,te,de,le,we,Ye,Je,ye,he,L,ce,ue,Fe,Ce,nt;if(C._startClamp=C._endClamp=!1,C._dir=b,p*=45,C.scroller=N,C.scroll=M?M.time.bind(M):ge,He=ge(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(bg=1,n.refreshPriority===-9999&&(Sa=C)),J.tweenScroll=J.tweenScroll||{top:sm(N,jt),left:sm(N,Pn)},C.tweenTo=De=J.tweenScroll[b.p],C.scrubDuration=function(me){he=zl(me)&&me,he?ye?ye.duration(me):ye=Ae.to(i,{ease:"expo",totalProgress:"+=0",duration:he,paused:!0,onComplete:function(){return m&&m(C)}}):(ye&&ye.progress(1).kill(),ye=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Ye=0,l||(l=i.vars.id)),x&&((!Zr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ct.style&&Ae.set(D?[Ct,Mi]:N,{scrollBehavior:"auto"}),lt.forEach(function(me){return Ln(me)&&me.target===(D?It.scrollingElement||Mi:N)&&(me.smooth=!1)}),Ue=Ln(x.snapTo)?x.snapTo:x.snapTo==="labels"?zA(i):x.snapTo==="labelsDirectional"?HA(i):x.directional!==!1?function(me,Xe){return hf(x.snapTo)(me,wn()-fe<500?0:Xe.direction)}:Ae.utils.snap(x.snapTo),L=x.duration||{min:.1,max:2},L=Zr(L)?ro(L.min,L.max):ro(L,L),ce=Ae.delayedCall(x.delay||he/2||.1,function(){var me=ge(),Xe=wn()-fe<500,Ve=De.tween;if((Xe||Math.abs(C.getVelocity())<10)&&!Ve&&!Mc&&Z!==me){var rt=(me-Ge)/k,Dt=i&&!B?i.totalProgress():rt,ut=Xe?0:(Dt-Je)/(wn()-kl)*1e3||0,At=Ae.utils.clamp(-rt,1-rt,Ys(ut/2)*ut/.185),Zt=rt+(x.inertia===!1?0:At),Ht=ro(0,1,Ue(Zt,C)),wt=Math.round(Ge+Ht*k),gt=x,Vn=gt.onStart,T=gt.onInterrupt,U=gt.onComplete;if(me<=Me&&me>=Ge&&wt!==me){if(Ve&&!Ve._initted&&Ve.data<=Ys(wt-me))return;x.inertia===!1&&(At=Ht-rt),De(wt,{duration:L(Ys(Math.max(Ys(Zt-Dt),Ys(Ht-Dt))*.185/ut/.05||0)),ease:x.ease||"power3",data:Ys(wt-me),onInterrupt:function(){return ce.restart(!0)&&T&&T(C)},onComplete:function(){C.update(),Z=ge(),ye&&i&&i.progress(Ht),Ye=Je=i&&!B?i.totalProgress():C.progress,y&&y(C),U&&U(C)}},me,At*k,wt-me-At*k),Vn&&Vn(C,De.tween)}}else C.isActive&&Z!==me&&ce.restart(!0)}).pause()),l&&(vh[l]=C),f=C.trigger=On(f||d!==!0&&d),nt=f&&f._gsap&&f._gsap.stRevert,nt&&(nt=nt(C)),d=d===!0?f:On(d),qn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===si||(g=!g&&d.parentNode&&d.parentNode.style&&oi(d.parentNode).display==="flex"?!1:Wt),C.pin=d,Ie=Ae.core.getCache(d),Ie.spacer?re=Ie.pinState:(A&&(A=On(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ie.spacerIsNative=!!A,A&&(Ie.spacerState=wl(A))),Ie.spacer=ve=A||It.createElement("div"),ve.classList.add("pin-spacer"),l&&ve.classList.add("pin-spacer-"+l),Ie.pinState=re=wl(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),C.spacer=ve=Ie.spacer,we=oi(d),$e=we[g+b.os2],xe=Ae.getProperty(d),Le=Ae.quickSetter(d,b.a,Qt),Au(d,ve,we),se=wl(d)),j){R=Zr(j)?Jp(j,Qp):Qp,V=Al("scroller-start",l,N,b,R,0),Be=Al("scroller-end",l,N,b,R,0,V),ae=V["offset"+b.op.d2];var Se=On(Lr(N,"content")||N);Oe=this.markerStart=Al("start",l,Se,b,R,ae,0,M),be=this.markerEnd=Al("end",l,Se,b,R,ae,0,M),M&&(Ce=Ae.quickSetter([Oe,be],b.a,Qt)),!F&&!(ki.length&&Lr(N,"fixedMarkers")===!0)&&(kA(D?Ct:N),Ae.set([V,Be],{force3D:!0}),te=Ae.quickSetter(V,b.a,Qt),le=Ae.quickSetter(Be,b.a,Qt))}if(M){var Te=M.vars.onUpdate,qe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){C.update(0,0,1),Te&&Te.apply(M,qe||[])})}if(C.previous=function(){return st[st.indexOf(C)-1]},C.next=function(){return st[st.indexOf(C)+1]},C.revert=function(me,Xe){if(!Xe)return C.kill(!0);var Ve=me!==!1||!C.enabled,rt=pn;Ve!==C.isReverted&&(Ve&&(ue=Math.max(ge(),C.scroll.rec||0),Ee=C.progress,Fe=i&&i.progress()),Oe&&[Oe,be,V,Be].forEach(function(Dt){return Dt.style.display=Ve?"none":"block"}),Ve&&(pn=C,C.update(Ve)),d&&(!w||!C.isActive)&&(Ve?WA(d,ve,re):Au(d,ve,oi(d),P)),Ve||C.update(Ve),pn=rt,C.isReverted=Ve)},C.refresh=function(me,Xe,Ve,rt){if(!((pn||!C.enabled)&&!Xe)){if(d&&me&&di){tn(r,"scrollEnd",Ng);return}!An&&Q&&Q(C),pn=C,De.tween&&!Ve&&(De.tween.kill(),De.tween=0),ye&&ye.pause(),_&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Dt=oe(),ut=K(),At=M?M.duration():Ui(N,b),Zt=k<=.01,Ht=0,wt=rt||0,gt=Zr(Ve)?Ve.end:n.end,Vn=n.endTrigger||f,T=Zr(Ve)?Ve.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),U=C.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,C),W=f&&Math.max(0,st.indexOf(C))||0,Y=W,z,pe,Re,ke,Pe,Ne,ze,Ze,Lt,qt,vt,xn,yt;for(j&&Zr(Ve)&&(xn=Ae.getProperty(V,b.p),yt=Ae.getProperty(Be,b.p));Y--;)Ne=st[Y],Ne.end||Ne.refresh(0,1)||(pn=C),ze=Ne.pin,ze&&(ze===f||ze===d||ze===U)&&!Ne.isReverted&&(qt||(qt=[]),qt.unshift(Ne),Ne.revert(!0,!0)),Ne!==st[Y]&&(W--,Y--);for(Ln(T)&&(T=T(C)),T=jp(T,"start",C),Ge=im(T,f,Dt,b,ge(),Oe,V,C,ut,$,F,At,M,C._startClamp&&"_startClamp")||(d?-.001:0),Ln(gt)&&(gt=gt(C)),qn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(qn(T)?T.split(" ")[0]:"")+gt:(Ht=Hl(gt.substr(2),Dt),gt=qn(T)?T:(M?Ae.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ge):Ge)+Ht,Vn=f)),gt=jp(gt,"end",C),Me=Math.max(Ge,im(gt||(Vn?"100% 0":At),Vn,Dt,b,ge()+Ht,be,Be,C,ut,$,F,At,M,C._endClamp&&"_endClamp"))||-.001,Ht=0,Y=W;Y--;)Ne=st[Y],ze=Ne.pin,ze&&Ne.start-Ne._pinPush<=Ge&&!M&&Ne.end>0&&(z=Ne.end-(C._startClamp?Math.max(0,Ne.start):Ne.start),(ze===f&&Ne.start-Ne._pinPush<Ge||ze===U)&&isNaN(T)&&(Ht+=z*(1-Ne.progress)),ze===d&&(wt+=z));if(Ge+=Ht,Me+=Ht,C._startClamp&&(C._startClamp+=Ht),C._endClamp&&!An&&(C._endClamp=Me||-.001,Me=Math.min(Me,Ui(N,b))),k=Me-Ge||(Ge-=.01)&&.001,Zt&&(Ee=Ae.utils.clamp(0,1,Ae.utils.normalize(Ge,Me,ue))),C._pinPush=wt,Oe&&Ht&&(z={},z[b.a]="+="+Ht,U&&(z[b.p]="-="+ge()),Ae.set([Oe,be],z)),d&&!(_h&&C.end>=Ui(N,b)))z=oi(d),ke=b===jt,Re=ge(),We=parseFloat(xe(b.a))+wt,!At&&Me>1&&(vt=(D?It.scrollingElement||Mi:N).style,vt={style:vt,value:vt["overflow"+b.a.toUpperCase()]},D&&oi(Ct)["overflow"+b.a.toUpperCase()]!=="scroll"&&(vt.style["overflow"+b.a.toUpperCase()]="scroll")),Au(d,ve,z),se=wl(d),pe=er(d,!0),Ze=F&&Nr(N,ke?Pn:jt)(),g&&(P=[g+b.os2,k+wt+Qt],P.t=ve,Y=g===Wt?gh(d,b)+k+wt:0,Y&&(P.push(b.d,Y+Qt),ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=Y+Qt)),po(P),U&&st.forEach(function(Qe){Qe.pin===U&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),F&&ge(ue)),F&&(Pe={top:pe.top+(ke?Re-Ge:Ze)+Qt,left:pe.left+(ke?Ze:Re-Ge)+Qt,boxSizing:"border-box",position:"fixed"},Pe[hs]=Pe["max"+Co]=Math.ceil(pe.width)+Qt,Pe[fs]=Pe["max"+uf]=Math.ceil(pe.height)+Qt,Pe[si]=Pe[si+xa]=Pe[si+ga]=Pe[si+ya]=Pe[si+va]="0",Pe[Wt]=z[Wt],Pe[Wt+xa]=z[Wt+xa],Pe[Wt+ga]=z[Wt+ga],Pe[Wt+ya]=z[Wt+ya],Pe[Wt+va]=z[Wt+va],ie=YA(re,Pe,w),An&&ge(0)),i?(Lt=i._initted,Su(1),i.render(i.duration(),!0,!0),ne=xe(b.a)-We+k+wt,de=Math.abs(k-ne)>1,F&&de&&ie.splice(ie.length-2,2),i.render(0,!0,!0),Lt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Su(0)):ne=k,vt&&(vt.value?vt.style["overflow"+b.a.toUpperCase()]=vt.value:vt.style.removeProperty("overflow-"+b.a));else if(f&&ge()&&!M)for(pe=f.parentNode;pe&&pe!==Ct;)pe._pinOffset&&(Ge-=pe._pinOffset,Me-=pe._pinOffset),pe=pe.parentNode;qt&&qt.forEach(function(Qe){return Qe.revert(!1,!0)}),C.start=Ge,C.end=Me,He=G=An?ue:ge(),!M&&!An&&(He<ue&&ge(ue),C.scroll.rec=0),C.revert(!1,!0),fe=wn(),ce&&(Z=-1,ce.restart(!0)),pn=0,i&&B&&(i._initted||Fe)&&i.progress()!==Fe&&i.progress(Fe||0,!0).render(i.time(),!0,!0),(Zt||Ee!==C.progress||M)&&(i&&!B&&i.totalProgress(M&&Ge<-.001&&!Ee?Ae.utils.normalize(Ge,Me,0):Ee,!0),C.progress=Zt||(He-Ge)/k===Ee?0:Ee),d&&g&&(ve._pinOffset=Math.round(C.progress*ne)),ye&&ye.invalidate(),isNaN(xn)||(xn-=Ae.getProperty(V,b.p),yt-=Ae.getProperty(Be,b.p),Rl(V,b,xn),Rl(Oe,b,xn-(rt||0)),Rl(Be,b,yt),Rl(be,b,yt-(rt||0))),Zt&&!An&&C.update(),u&&!An&&!E&&(E=!0,u(C),E=!1)}},C.getVelocity=function(){return(ge()-G)/(wn()-kl)*1e3||0},C.endAnimation=function(){Zo(C.callbackAnimation),i&&(ye?ye.progress(1):i.paused()?B||Zo(i,C.direction<0,1):Zo(i,i.reversed()))},C.labelToScroll=function(me){return i&&i.labels&&(Ge||C.refresh()||Ge)+i.labels[me]/i.duration()*k||0},C.getTrailing=function(me){var Xe=st.indexOf(C),Ve=C.direction>0?st.slice(0,Xe).reverse():st.slice(Xe+1);return(qn(me)?Ve.filter(function(rt){return rt.vars.preventOverlaps===me}):Ve).filter(function(rt){return C.direction>0?rt.end<=Ge:rt.start>=Me})},C.update=function(me,Xe,Ve){if(!(M&&!Ve&&!me)){var rt=An===!0?ue:C.scroll(),Dt=me?0:(rt-Ge)/k,ut=Dt<0?0:Dt>1?1:Dt||0,At=C.progress,Zt,Ht,wt,gt,Vn,T,U,W;if(Xe&&(G=He,He=M?ge():rt,x&&(Je=Ye,Ye=i&&!B?i.totalProgress():ut)),p&&!ut&&d&&!pn&&!Sl&&di&&Ge<rt+(rt-G)/(wn()-kl)*p&&(ut=1e-4),ut!==At&&C.enabled){if(Zt=C.isActive=!!ut&&ut<1,Ht=!!At&&At<1,T=Zt!==Ht,Vn=T||!!ut!=!!At,C.direction=ut>At?1:-1,C.progress=ut,Vn&&!pn&&(wt=ut&&!At?0:ut===1?1:At===1?2:3,B&&(gt=!T&&X[wt+1]!=="none"&&X[wt+1]||X[wt],W=i&&(gt==="complete"||gt==="reset"||gt in i))),S&&(T||W)&&(W||h||!i)&&(Ln(S)?S(C):C.getTrailing(S).forEach(function(Re){return Re.endAnimation()})),B||(ye&&!pn&&!Sl?(ye._dp._time-ye._start!==ye._time&&ye.render(ye._dp._time-ye._start),ye.resetTo?ye.resetTo("totalProgress",ut,i._tTime/i._tDur):(ye.vars.totalProgress=ut,ye.invalidate().restart())):i&&i.totalProgress(ut,!!(pn&&(fe||me)))),d){if(me&&g&&(ve.style[g+b.os2]=$e),!F)Le(ia(We+ne*ut));else if(Vn){if(U=!me&&ut>At&&Me+1>rt&&rt+1>=Ui(N,b),w)if(!me&&(Zt||U)){var Y=er(d,!0),z=rt-Ge;rm(d,Ct,Y.top+(b===jt?z:0)+Qt,Y.left+(b===jt?0:z)+Qt)}else rm(d,ve);po(Zt||U?ie:se),de&&ut<1&&Zt||Le(We+(ut===1&&!U?ne:0))}}x&&!De.tween&&!pn&&!Sl&&ce.restart(!0),a&&(T||v&&ut&&(ut<1||!Mu))&&Oa(a.targets).forEach(function(Re){return Re.classList[Zt||v?"add":"remove"](a.className)}),o&&!B&&!me&&o(C),Vn&&!pn?(B&&(W&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(C)),(T||!Mu)&&(c&&T&&Eu(C,c),H[wt]&&Eu(C,H[wt]),v&&(ut===1?C.kill(!1,1):H[wt]=0),T||(wt=ut===1?1:3,H[wt]&&Eu(C,H[wt]))),I&&!Zt&&Math.abs(C.getVelocity())>(zl(I)?I:2500)&&(Zo(C.callbackAnimation),ye?ye.progress(1):Zo(i,gt==="reverse"?1:!ut,1))):B&&o&&!pn&&o(C)}if(le){var pe=M?rt/M.duration()*(M._caScrollDist||0):rt;te(pe+(V._isFlipped?1:0)),le(pe)}Ce&&Ce(-rt/M.duration()*(M._caScrollDist||0))}},C.enable=function(me,Xe){C.enabled||(C.enabled=!0,tn(N,"resize",ra),D||tn(N,"scroll",qs),Q&&tn(r,"refreshInit",Q),me!==!1&&(C.progress=Ee=0,He=G=Z=ge()),Xe!==!1&&C.refresh())},C.getTween=function(me){return me&&De?De.tween:ye},C.setPositions=function(me,Xe,Ve,rt){if(M){var Dt=M.scrollTrigger,ut=M.duration(),At=Dt.end-Dt.start;me=Dt.start+At*me/ut,Xe=Dt.start+At*Xe/ut}C.refresh(!1,!1,{start:Kp(me,Ve&&!!C._startClamp),end:Kp(Xe,Ve&&!!C._endClamp)},rt),C.update()},C.adjustPinSpacing=function(me){if(P&&me){var Xe=P.indexOf(b.d)+1;P[Xe]=parseFloat(P[Xe])+me+Qt,P[1]=parseFloat(P[1])+me+Qt,po(P)}},C.disable=function(me,Xe){if(C.enabled&&(me!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Xe||ye&&ye.pause(),ue=0,Ie&&(Ie.uncache=1),Q&&en(r,"refreshInit",Q),ce&&(ce.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!D)){for(var Ve=st.length;Ve--;)if(st[Ve].scroller===N&&st[Ve]!==C)return;en(N,"resize",ra),D||en(N,"scroll",qs)}},C.kill=function(me,Xe){C.disable(me,Xe),ye&&!Xe&&ye.kill(),l&&delete vh[l];var Ve=st.indexOf(C);Ve>=0&&st.splice(Ve,1),Ve===Tn&&Vl>0&&Tn--,Ve=0,st.forEach(function(rt){return rt.scroller===C.scroller&&(Ve=1)}),Ve||An||(C.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Xe||i.kill()),Oe&&[Oe,be,V,Be].forEach(function(rt){return rt.parentNode&&rt.parentNode.removeChild(rt)}),Sa===C&&(Sa=0),d&&(Ie&&(Ie.uncache=1),Ve=0,st.forEach(function(rt){return rt.pin===d&&Ve++}),Ve||(Ie.spacer=0)),n.onKill&&n.onKill(C)},st.push(C),C.enable(!1,!1),nt&&nt(C),i&&i.add&&!k){var je=C.update;C.update=function(){C.update=je,Ge||Me||C.refresh()},Ae.delayedCall(.01,C.update),k=.01,Ge=Me=0}else C.refresh();d&&VA()},r.register=function(n){return $s||(Ae=n||Cg(),Rg()&&window.document&&r.enable(),$s=na),$s},r.defaults=function(n){if(n)for(var i in n)Tl[i]=n[i];return Tl},r.disable=function(n,i){na=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),en(ft,"wheel",qs),en(It,"scroll",qs),clearInterval(yl),en(It,"touchcancel",Pi),en(Ct,"touchstart",Pi),bl(en,It,"pointerdown,touchstart,mousedown",$p),bl(en,It,"pointerup,touchend,mouseup",Zp),cc.kill(),Ml(en);for(var s=0;s<lt.length;s+=3)El(en,lt[s],lt[s+1]),El(en,lt[s],lt[s+2])},r.enable=function(){if(ft=window,It=document,Mi=It.documentElement,Ct=It.body,Ae&&(Oa=Ae.utils.toArray,ro=Ae.utils.clamp,mh=Ae.core.context||Pi,Su=Ae.core.suppressOverwrites||Pi,of=ft.history.scrollRestoration||"auto",xh=ft.pageYOffset,Ae.core.globals("ScrollTrigger",r),Ct)){na=1,fo=document.createElement("div"),fo.style.height="100vh",fo.style.position="absolute",Bg(),UA(),Yt.register(Ae),r.isTouch=Yt.isTouch,_r=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tn(ft,"wheel",qs),Mg=[ft,It,Mi,Ct],Ae.matchMedia?(r.matchMedia=function(l){var c=Ae.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ae.addEventListener("matchMediaInit",function(){return ff()}),Ae.addEventListener("matchMediaRevert",function(){return Ug()}),Ae.addEventListener("matchMedia",function(){is(0,1),Ms("matchMedia")}),Ae.matchMedia("(orientation: portrait)",function(){return Tu(),Tu})):console.warn("Requires GSAP 3.11.0 or later"),Tu(),tn(It,"scroll",qs);var n=Ct.style,i=n.borderTopStyle,s=Ae.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=er(Ct),jt.m=Math.round(o.top+jt.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),yl=setInterval(em,250),Ae.delayedCall(.5,function(){return Sl=0}),tn(It,"touchcancel",Pi),tn(Ct,"touchstart",Pi),bl(tn,It,"pointerdown,touchstart,mousedown",$p),bl(tn,It,"pointerup,touchend,mouseup",Zp),ph=Ae.utils.checkPrefix("transform"),Wl.push(ph),$s=wn(),cc=Ae.delayedCall(.2,is).pause(),Zs=[It,"visibilitychange",function(){var l=ft.innerWidth,c=ft.innerHeight;It.hidden?(Yp=l,qp=c):(Yp!==l||qp!==c)&&ra()},It,"DOMContentLoaded",is,ft,"load",is,ft,"resize",ra],Ml(tn),st.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)El(en,lt[a],lt[a+1]),El(en,lt[a],lt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Mu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(yl)||(yl=i)&&setInterval(em,i),"ignoreMobileResize"in n&&(Tg=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ml(en)||Ml(tn,n.autoRefreshEvents||"none"),Eg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=On(n),o=lt.indexOf(s),a=ys(s);~o&&lt.splice(o,a?6:2),i&&(a?ki.unshift(ft,i,Ct,i,Mi,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?On(n):n).getBoundingClientRect(),a=o[s?hs:fs]*i||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[s?hs:fs],l=i==null?a/2:i in hc?hc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ss.killAll||[];Ss={},i.forEach(function(s){return s()})}},r}();ct.version="3.12.4";ct.saveStyles=function(r){return r?Oa(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),mh())}}):Yn};ct.revert=function(r,e){return ff(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?ra():($s||ct.register())&&is(!0)};ct.update=function(r){return++lt.cache&&rr(r===!0?2:0)};ct.clearScrollMemory=Fg;ct.maxScroll=function(r,e){return Ui(r,e?Pn:jt)};ct.getScrollFunc=function(r,e){return Nr(On(r),e?Pn:jt)};ct.getById=function(r){return vh[r]};ct.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!di};ct.snapDirectional=hf;ct.addEventListener=function(r,e){var t=Ss[r]||(Ss[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=Ss[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ae.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),tn(ct,"refresh",function(){return s=e.batchMax()})),Oa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var om=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},wu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===Mi&&r(Ct,t)},Cl={auto:1,scroll:1},jA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Cl[(l=oi(s)).overflowY]||Cl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ys(s)&&(Cl[(l=oi(s)).overflowY]||Cl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},zg=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&jA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(It,Yt.eventTypes[0],lm,!1,!0)},onDisable:function(){return en(It,Yt.eventTypes[0],lm,!0)}})},KA=/(input|label|select|textarea)/i,am,lm=function(e){var t=KA.test(e.target.tagName);(t||am)&&(e._gsapAllow=!0,am=t)},$A=function(e){Zr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||Mi,u=Ae.core.globals().ScrollSmoother,h=u&&u.get(),f=_r&&(e.content&&On(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Nr(c,jt),g=Nr(c,Pn),_=1,p=(Yt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,y=Ln(i)?function(){return i(a)}:function(){return i||2.8},v,x,w=zg(c,e.type,!0,s),A=function(){return x=!1},M=Pi,I=Pi,S=function(){l=Ui(c,jt),I=ro(_r?1:0,l),n&&(M=ro(0,Ui(c,Pn))),v=ds},b=function(){f._gsap.y=ia(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},B=function(){if(x){requestAnimationFrame(A);var j=ia(a.deltaY/2),$=I(d.v-j);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var C=ia((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=lt.cache,rr()}return!0}d.offset&&b(),x=!0},N,J,D,F,H=function(){S(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return _r&&X.type==="touchmove"&&B()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=_;_=ia((ft.visualViewport&&ft.visualViewport.scale||1)/p),N.pause(),X!==_&&wu(c,_>1.01?!0:n?!1:"x"),J=g(),D=d(),S(),v=ds},e.onRelease=e.onGestureStart=function(X,j){if(d.offset&&b(),!j)F.restart(!0);else{lt.cache++;var $=y(),C,Q;n&&(C=g(),Q=C+$*.05*-X.velocityX/.227,$*=om(g,C,Q,Ui(c,Pn)),N.vars.scrollX=M(Q)),C=d(),Q=C+$*.05*-X.velocityY/.227,$*=om(d,C,Q,Ui(c,jt)),N.vars.scrollY=I(Q),N.invalidate().duration($).play(.01),(_r&&N.vars.scrollY>=l||C>=l-1)&&Ae.to({},{onUpdate:H,duration:$})}o&&o(X)},e.onWheel=function(){N._ts&&N.pause(),wn()-m>1e3&&(v=0,m=wn())},e.onChange=function(X,j,$,C,Q){if(ds!==v&&S(),j&&n&&g(M(C[2]===j?J+(X.startX-X.x):g()+j-C[1])),$){d.offset&&b();var oe=Q[2]===$,K=oe?D+X.startY-X.y:d()+$-Q[1],Z=I(K);oe&&K!==Z&&(D+=Z-K),d(Z)}($||j)&&rr()},e.onEnable=function(){wu(c,n?!1:"x"),ct.addEventListener("refresh",H),tn(ft,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){wu(c,!0),en(ft,"resize",H),ct.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=_r,_r&&!d()&&d(1),_r&&Ae.ticker.add(Pi),F=a._dc,N=Ae.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:kg(d,d(),function(){return N.pause()})},onUpdate:rr,onComplete:F.vars.onComplete}),a};ct.sort=function(r){return st.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new Yt(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var e=r instanceof Yt?r:$A(r);return En&&En.target===e.target&&En.kill(),ys(e.target)&&(En=e),e};ct.core={_getVelocityProp:dh,_inputObserver:zg,_scrollers:lt,_proxies:ki,bridge:{ss:function(){di||Ms("scrollStart"),di=wn()},ref:function(){return pn}}};Cg()&&Ae.registerPlugin(ct);et.registerPlugin(ct);dw();const cm=document.querySelector(".webgl-content"),Po={width:cm.clientWidth*1,height:cm.clientHeight*1},_t=new Rn(75,Po.width/Po.height,.1,1e3),Hg=document.querySelector(".webgl"),Gn=new QT(_t,Hg);Gn.enableDamping=!0;Gn.minDistance=0;Gn.enablePan=!0;const Fo=new Z_({antialias:!0,canvas:Hg,alpha:!0});Fo.shadowMap.enabled=!0;Fo.shadowMap.type=v_;Fo.shadowMap.needsUpdate=!0;Fo.setSize(Po.width,Po.height);new wT;_t.position.set(0,0,.7);const Ma=new J_;new O(0,1,0).normalize();new O(1,0,0).normalize();new O(0,0,1).normalize();window.addEventListener("resize",ZA,!1);function ZA(){_t.aspect=window.innerWidth/window.innerHeight,_t.updateProjectionMatrix(),Fo.setSize(window.innerWidth,window.innerHeight)}let pt=1;var Gg=!1,Et,Ua=[],JA=new O,QA=new O(0,0,0);const um=(r,e)=>{const t=document.querySelector(".drone-ldBar"),n=document.querySelector(".inner");n.style.width=String(r)+"px";var i=r+.35*window.innerWidth-25;t.style.left=String(i)+"px";const s=window.innerHeight-25-window.innerHeight/2;t.style.top=String(s)+"px"};var Vg=!0;let hm=["#0000ff","#3366ff","#6699ff","#99ccff","#cceeff","#ffccff","#ff99ff"];function ew(){if(!Vg)return;const r=document.querySelector(".inner"),e=[...hm];e.unshift(e.pop()),hm=e;const t=e.map((n,i)=>`${n} ${100/e.length*i}%`).join(", ");r.style.background=`linear-gradient(to right, ${t})`}setInterval(ew,100);const tw=new eA;tw.load("models/drone.glb",r=>{Et=r.scene,Et.rotateY(Math.PI),Et.position.set(0,-.2,0),Et.scale.set(10,10,10),Et.traverse(n=>{if(n.isMesh){n.castShadow=!0,n.receiveShadow=!0,n.material.transparent=!0,n.material.needsUpdate=!0,n.name.startsWith("prop")&&Ua.push(n),n.name.startsWith("motor");const i=n.material;if(i.map)if(i.name=="logo"){const s=i.map;s.minFilter=mn,s.magFilter=mn}else{const s=i.map,o=document.createElement("canvas"),a=o.getContext("2d"),l=s.image.width/2,c=s.image.height/2;o.width=l,o.height=c,a.drawImage(s.image,0,0,l,c),a.getImageData(0,0,l,c);const u=new $E(o);u.needsUpdate=!0,i.map=u,i.needsUpdate=!0}}}),console.log(Et.children[14].material),Ma.add(Et),Pl(Wg),Pl(Xg),Pl(Yg),Pl(mi),Gg=!0;const e=document.querySelector(".ldBar");et.timeline().to(e,{opacity:0,duration:.6,delay:0,ease:"power2.easeInOut"}),e.style.zIndex=-10,Vg=!1},r=>{const e=(r.loaded/r.total).toFixed(2),t=e*(.3*window.innerWidth-2);um(t),window.addEventListener("resize",()=>{const n=e*(.3*window.innerWidth-2);um(n)})},r=>{console.log("error",r)});const df=new Promise(r=>{const e=()=>{Gg?r():requestAnimationFrame(e)};e()});new Ti;var Jo;const fm=2048,nw=.5,iw=300;var rw=-1e-5;function Pl(r){if(r instanceof mT)r.lookAt=Et,Ma.add(r);else if(r instanceof Uo||r instanceof sg){Jo=new Gi().setFromObject(Et),r.shadow.camera.updateProjectionMatrix(),r.castShadow=!0,r.shadow.bias=rw,r.shadow.mapSize.width=fm,r.shadow.mapSize.height=fm,r.shadow.camera.near=nw,r.shadow.camera.far=iw;const e=1.25;r.shadow.camera.left=Jo.min.x-e,r.shadow.camera.right=Jo.max.x+e,r.shadow.camera.top=Jo.max.y+e,r.shadow.camera.bottom=Jo.min.y-e,r.target=Et,Ma.add(r)}else Ma.add(r)}const Wg=new Uo(4210752,150);Wg.position.set(-20,20,20);const Xg=new Uo(4210752,120);Xg.position.set(20,20,-20);const Yg=new Uo(4210752,120);Yg.position.set(20,20,20);const mi=new Uo(4210752,150);mi.position.set(0,-30,0);var Ll=!0;const sw=new J_;Ua.forEach(r=>{sw.add(r)});function qg(){df.then(()=>{const r=et.timeline();r.to(Et.position,{x:0,y:.1,z:0,duration:1,ease:"power2.easeInOut",onComplete:ow,onUpdate:()=>{if(pt!=1){r.kill();return}}},.3).to(Et.rotation,{x:-(-Math.PI/6+Math.PI),duration:1,ease:"power2.easeInOut",onComplete:()=>{QA.copy(Et.getWorldDirection(JA))},onUpdate:()=>{if(pt!=1){r.kill();return}}},.3),pt==1&&Ua.forEach(e=>{const t=et.timeline();t.to(e.rotation,{y:.13*Math.PI,duration:.5,ease:"power2.easeIn",onComplete:pf,onUpdate:()=>{if(pt!=1){t.kill();return}}},0),r.add(t,0)})})}new O;var zn=!1;function ow(){if(pt==1){let n=function(){et.to(t,{value:Math.PI*2,duration:5,repeat:-1,ease:"linear",onUpdate:()=>{if(pt!=1){et.killTweensOf(t);return}if(zn)et.killTweensOf(t);else{const i=.7*Math.sin(t.value),s=.7*Math.cos(t.value);_t.position.x=i,_t.position.z=s,t.value==Math.PI*2&&(t.value=0)}}})};var r=n;let t={value:0};zn=!1,et.to(t,{value:Math.PI*2,duration:7,ease:"power1.in",onUpdate:()=>{if(pt!=1){et.killTweensOf(t);return}if(zn)et.killTweensOf(t);else{const i=.7*Math.sin(t.value),s=.7*Math.cos(t.value);_t.position.x=i,_t.position.z=s}},onComplete:()=>{pt==1&&(t.value=0,n())}})}}function cr(r,e){df.then(()=>{if(r[0]=="none"){Et.traverse(n=>{if(n.isMesh){const s=n.material.clone();s.opacity=1,n.material=s,n.receiveShadow=!0,n.castShadow=!0,et.to(s,{opacity:1,duration:.8,ease:"power2.out",onUpdate:()=>{if(pt!=e){et.killTweensOf(n.material);return}}})}});return}let t=[];if(Et.traverse(n=>{try{if(n.isMesh)if(n.name.startsWith(r[0]||n.name.startsWith(r[1]))){const s=n.material.clone();n.material=s,n.receiveShadow=!0,n.castShadow=!0,t.push([s,n.name])}else{const s=n.material.clone();n.material=s,n.receiveShadow=!1,n.castShadow=!1,et.to(s,{opacity:.1,duration:.8,ease:"power2.out",onUpdate:()=>{if(pt!=e){et.killTweensOf(n.material);return}}})}}catch(i){console.log(n.name),console.log(i)}}),console.log(t),t.forEach(n=>{et.to(n[0],{opacity:1,duration:.8,ease:"power2.out",onUpdate:()=>{if(pt!=e){et.killTweensOf(child.material);return}}})}),console.log(r),r[1]=="antenna"){console.log("updating antenna material");const n=et.timeline();n.to(Et.children[14].children[0].material,{opacity:1,duration:.8,ease:"power2.out",onUpdate:()=>{if(pt!=e){et.killTweensOf(child.material);return}}}),n.to(Et.children[14].children[1].material,{opacity:1,duration:.8,ease:"power2.out",onUpdate:()=>{if(pt!=e){et.killTweensOf(child.material);return}}})}})}function jg(){const r=document.getElementById("mouseScroll"),e=et.timeline(),t=document.querySelector(".company-name");e.to(r,{opacity:1,duration:.3,ease:"power2.out"},0).to(t,{opacity:1,duration:.3,delay:0,ease:"power2.out"},0)}function Zi(){const r=document.getElementById("mouseScroll"),e=et.timeline(),t=document.querySelector(".company-name");e.to(r,{opacity:0,duration:.3,ease:"power2.in"},0).to(t,{opacity:0,duration:.3,ease:"power2.in"},0)}let Dl=null,dm=0;const pm=.0085;function Ru(){zn=!0,et.timeline({duration:0}).to(_t.position,{x:0,y:0,z:.5,duration:.6,ease:"power2.out"},0).to(_t.rotation,{x:.2,y:0,z:0,duration:.6,ease:"power2.out"},0).to(Gn.target,{x:0,y:.1,z:0,duration:.6,ease:"power2.out"},0).to(mi,{intensity:150,duration:.6,ease:"power2.out"},.1).to(Et.position,{x:0,y:.1,z:0,duration:.6,ease:"power2.inOut"},.1)}const aw=document.getElementById("btn");aw.addEventListener("click",()=>{Ll=!Ll,console.log(Ll),Ll?pt==1?(i0(),jg()):pt==2?n0():pt==3?t0():pt==4?e0():pt==5?Qg():pt==6?Jg():pt==7?Zg():pt==8?$g():pt==9&&Kg():pt==1?(Ru(),Zi()):pt==2||pt==3||pt==4||(pt==5?Ru():pt==6||pt==7&&Ru())});function pf(r){Dl||(Dl=r);const e=r-Dl;if(zn)Ua.forEach(t=>{et.to(t.rotation,{y:0,duration:2,ease:"power1.out"})});else{if(e/1e3*pm/(2*Math.PI)>=dm+1){const i=r-Dl;console.log(`Time taken for 1 revolution: ${i}ms`),dm++}Ua.forEach(i=>{i.rotateY(pm)}),requestAnimationFrame(pf)}}function Kg(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.55,y:.1,z:.32,duration:1,ease:"power2.inOut"},0),r.to(_t.rotation,{x:-.26,y:-1.1,z:-.23,duration:1,ease:"power2.inOut"},0),r.to(Gn.target,{x:.05,y:.02,z:.02,duration:1,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:1,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["camera","none"],9),0)}function $g(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.28,y:.26,z:-.04,duration:1,ease:"power2.inOut"},0),r.to(_t.rotation,{x:.09,y:.76,z:-.06,duration:1,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:1,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.49,y:.28,z:-.26,duration:1,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1);let e=[];e.push("vtx"),e.push("antenna"),r.add(cr(e,8),0)}function Zg(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.61,y:.21,z:.17,duration:1,ease:"power2.inOut"},0),r.to(_t.rotation,{x:.94,y:-1.3,z:.93,duration:1,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.39,y:.25,z:.13,duration:1,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:1,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["lipo","none"],7),0)}function Jg(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.4,y:.06,z:-.21,duration:1,ease:"power2.inOut"},0),r.to(_t.rotation,{x:1.88,y:.58,z:-2.1,duration:1,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.45,y:.14,z:-.18,duration:1,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:1,ease:"power2.inOut"},0),r.to(mi,{intensity:20,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["reciever","none"],6),0)}function Qg(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.3,y:.15,z:.12,duration:.7,ease:"power2.inOut"},0),r.to(_t.rotation,{x:-.18,y:.55,z:.09,duration:.7,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.47,y:.1,z:-.16,duration:.7,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:.7,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["stk","none"],5),0)}function e0(){zn=!1;const r=et.timeline();r.to(_t.position,{x:-.2,y:.35,z:.07,duration:.7,ease:"power2.inOut"},0),r.to(_t.rotation,{x:-.76,y:-.26,z:-.24,duration:.7,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.12,y:.15,z:-.14,duration:.7,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:.7,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["prop","none"],4),0)}function t0(){zn=!1;const r=et.timeline();r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.to(_t.position,{x:-.16,y:.29,z:.01,duration:1,ease:"power2.inOut"},0),r.to(_t.rotation,{x:-.4,y:.19,z:.45,duration:1,ease:"power2.inOut"},0),r.to(Gn.target,{x:-.2,y:.21,z:-.17,duration:1,ease:"power2.inOut"},0),r.to(Et.position,{x:-.47,y:.1,z:0,duration:1,ease:"power2.inOut"},0),r.add(cr(["motor00","none"],3),0)}function n0(){mf=!0,zn=!0,et.timeline().to(_t.position,{x:-.3,y:.2,z:.45,duration:.6,ease:"power2.inOut",onComplete:cr(["frame","none"],2)},.1).to(Gn.target,{x:.5,y:0,z:0,duration:.6,ease:"power2.inOut"},.1).to(Et.position,{x:0,y:.1,z:0,duration:.6,ease:"power2.inOut"},.1).to(_t.rotation,{x:-.418,y:-1.0189,z:-.3617,duration:.6,ease:"power2.inOut"},.1).to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1)}function i0(){mf=!0,zn=!1;const r=et.timeline();r.to(_t.position,{x:0,y:0,z:.7,duration:.6,ease:"power2.inOut"},0),r.to(_t.rotation,{x:.2,y:0,z:0,duration:.6,ease:"power2.inOut"},0),r.to(Gn.target,{x:0,y:0,z:0,duration:.6,ease:"power2.inOut"},0),r.to(mi,{intensity:150,duration:.6,ease:"power2.inOut"},.1),r.add(cr(["none"],1),.15),r.add(qg(),.15),r.add(pf(),.15)}const fc=document.querySelectorAll(".scroll-area"),lw=new IntersectionObserver(r=>{r.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>=.5){const t=e.target.id;switch(console.log(t),t){case"page-1":i0(),yi(0),jg();break;case"page-2":n0(),yi(1),Zi();break;case"page-3":t0(),yi(2),Zi();break;case"page-4":e0(),yi(3),Zi();break;case"page-5":Qg(),yi(4),Zi();break;case"page-6":Jg(),yi(5),Zi();break;case"page-7":Zg(),yi(6),Zi();break;case"page-8":$g(),yi(7),Zi();break;case"page-9":Kg(),yi(8),Zi();break}}})},{threshold:.5});fc.forEach(r=>{lw.observe(r)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".tray");et.timeline(),document.querySelectorAll(".scroll-area").length>0&&document.querySelector(".scroll-container").addEventListener("scroll",function(i){clearTimeout(dc),Sh||et.to(e,{left:"0px",duration:.1,ease:"power2.out",onComplete:()=>{dc=setTimeout(()=>{et.to(e,{left:"-10%",duration:.1,ease:"power2.in"})},1e3)}}),Sh=!1,Nf(pt)}),Nf(pt)});function cw(r){if(pt!=1)return;var e=new AT,t=new Ke;t.x=r.clientX/Po.width*2-1,t.y=-(r.clientY/Po.height)*2+1,e.setFromCamera(t,_t);const n=e.intersectObjects(Et.children,!0);if(n.length>0){const i=n[0].object;console.log("Clicked on a child:"+i.name)}}df.then(()=>{document.addEventListener("click",cw)});qg();__();window.addEventListener("resize",()=>{__()});CT();o0();PT();const uw=1e3/60;let mm=0,mf=!0;function r0(){mf&&Gn.update();const r=Date.now();r-mm>uw&&(Fo.render(Ma,_t),mm=r),requestAnimationFrame(r0)}r0();let _m=0;const hw=5e3;document.querySelector(".scroll-container").addEventListener("scroll",function(r){const e=new Date().getTime();if(e-_m>hw){_m=e;const t=this.scrollTop,n=this.clientHeight,i=Math.floor((t+n/2)/n);this.scrollTo({top:i*n,behavior:"smooth"})}});const fw=document.getElementById("mouseScroll");fw.addEventListener("click",()=>{_f(1)});let Sh=!1;function _f(r){Sh=!0,fc[r].scrollIntoView({behavior:"instant"})}function dw(){const r=document.querySelector(".scroll-container");et.utils.toArray(".scroll-area").forEach((t,n)=>{ct.create({trigger:t,scroller:r,start:"top center",end:"bottom center",toggleClass:{targets:t,className:"active-section"},onEnter:()=>{t.id,pt=n+1},onLeave:()=>{t.id},onEnterBack:()=>{t.id,pt=n+1,In=n+1},onLeaveBack:()=>{t.id,In=n+1}}),et.timeline({scrollTrigger:{trigger:t,start:"top center",end:"bottom center",scrub:!0}})})}let In=1,dc;const pw=document.querySelector(".tray");pw.addEventListener("wheel",r=>{if(In!=1&&In!=fc.length&&clearTimeout(dc),console.log(In),r.deltaY>0){if(In<fc.length)In++,console.log("active label",In);else return;yi(In-1)}else{if(In>1)In--,console.log("active label",In);else return;yi(In-1)}dc=setTimeout(()=>{_f(In-1)},800)});function yi(r){document.querySelectorAll(".label").forEach((t,n)=>{r===n?et.to(t,{opacity:1,scale:1.35,duration:.05,ease:"power2.inOut"}):et.to(t,{opacity:.45,scale:1,duration:.05,ease:"power2.inOut"})})}const mw=document.querySelectorAll(".label");mw.forEach((r,e)=>{r.addEventListener("click",()=>{_f(e)})});
