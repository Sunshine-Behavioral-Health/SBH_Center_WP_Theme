jQuery(document).ready(function(t){let e,n=0;function o(t){for((n+=t)>e.length?n=1:n<1&&(n=e.length),i=0;i<e.length;i++)e[i].style.display="none";e[n-1].style.display="block"}!function i(){console.log("top of showSlides");let o;e=t(".treatment_step_carousel_element");for(o=0;o<e.length;o++)e[o].style.display="none";n++;n>e.length&&(n=1);e[n-1].style.display="flex";setTimeout(i,6800);console.log("end of show slides")}(),t(".custom_carousel .prev").on("click",o(-1)),t(".custom_carousel .next").on("click",o(1))}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";var t={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t};function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function s(t){return parseInt(t)}function a(t){return"string"==typeof t}function u(t){var e=void 0===t?"undefined":n(t);return"function"===e||"object"===e&&!!t}function l(t){return"function"==typeof t}function c(t){return void 0===t}function d(t){return t.constructor===Array}function f(t,e,n){Object.defineProperty(t,e,n)}function h(t,e){var n=r({},t,e);return e.hasOwnProperty("classes")&&(n.classes=r({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=r({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=r({},t.breakpoints,e.breakpoints)),n}var p=(i(v,[{key:"on",value:function(t,e){if(d(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(d(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),v);function v(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e(this,v),this.events=t,this.hop=t.hasOwnProperty}var m=(i(g,[{key:"mount",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};return this._e.emit("mount.before"),u(e)&&(this._c=function(t,e,n){var i={};for(var o in e)l(e[o])&&(i[o]=e[o](t,i,n));for(var r in i)l(i[r].mount)&&i[r].mount();return i}(this,e,this._e)),this._e.emit("mount.after"),this}},{key:"mutate",value:function(t){var e=0<arguments.length&&void 0!==t?t:[];return d(e)&&(this._t=e),this}},{key:"update",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};return this.settings=h(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(t){var e=0<arguments.length&&void 0!==t&&t;return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){u(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(t){this._i=s(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),g);function g(n){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e(this,g),this._c={},this._t=[],this._e=new p,this.disabled=!1,this.selector=n,this.settings=h(t,i),this.index=this.settings.startAt}function _(){return(new Date).getTime()}function w(t,e,n){var i=void 0,o=void 0,r=void 0,s=void 0,a=0;function u(){a=!1===n.leading?0:_(),i=null,s=t.apply(o,r),i||(o=r=null)}function l(){var l=_();a||!1!==n.leading||(a=l);var c=e-(l-a);return o=this,r=arguments,c<=0||e<c?(i&&(clearTimeout(i),i=null),a=l,s=t.apply(o,r),i||(o=r=null)):i||!1===n.trailing||(i=setTimeout(u,c)),s}return n=n||{},l.cancel=function(){clearTimeout(i),a=0,i=o=r=null},l}var y={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function b(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function k(t){return!!(t&&t instanceof window.HTMLElement)}var C=(i(S,[{key:"on",value:function(t,e,n,i){var o=3<arguments.length&&void 0!==i&&i;a(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],o)}},{key:"off",value:function(t,e,n){var i=2<arguments.length&&void 0!==n&&n;a(t)&&(t=[t]);for(var o=0;o<t.length;o++)e.removeEventListener(t[o],this.listeners[t[o]],i)}},{key:"destroy",value:function(){delete this.listeners}}]),S);function S(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e(this,S),this.listeners=t}var T=["ltr","rtl"],x={">":"<","<":">","=":"="};function H(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}var A=!1;try{var O=Object.defineProperty({},"passive",{get:function(){A=!0}});window.addEventListener("testPassive",null,O),window.removeEventListener("testPassive",null,O)}catch(i){}var L=A,N=["touchstart","mousedown"],M=["touchmove","mousemove"],E=["touchend","touchcancel","mouseup","mouseleave"],D=["mousedown","mousemove","mouseup","mouseleave"];function P(t){return u(t)?(e=t,Object.keys(e).sort().reduce(function(t,n){return t[n]=e[n],t[n],t},{})):{};var e}var j={Html:function(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return f(n,"root",{get:function(){return n._r},set:function(t){a(t)&&(t=document.querySelector(t)),k(t)&&(n._r=t)}}),f(n,"track",{get:function(){return n._t},set:function(t){k(t)&&(n._t=t)}}),f(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[function(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(t,e){return{modify:function(n){if(0<=t.settings.focusAt){var i=e.Peek.value;return u(i)?n-i.before:n-i}return n}}},function(t,e){return{modify:function(n){var i=e.Gaps.value,o=e.Sizes.width,r=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===r?n-(o/2-s/2):n-s*r-i*r}}}].concat(t._t,[H]);return{mutate:function(o){for(var r=0;r<i.length;r++){var s=i[r];l(s)&&l(s().modify)&&(o=s(t,e,n).modify(o))}return o}}}(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(o){var r=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(a*(s-1))}),i.set(-a-r*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(0)}),i.set(a*s+r*s)):i.set(o.movement)}),n.on("destroy",function(){i.remove()}),i},Transition:function(t,e,n){var i=!1,o={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(t){var n=0<arguments.length&&void 0!==t?t:"transform";e.Html.wrapper.style.transition=this.compose(n)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return f(o,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){o.set()}),n.on(["build.before","resize","translate.jump"],function(){o.disable()}),n.on("run",function(){o.enable()}),n.on("destroy",function(){o.remove()}),o},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(x[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return f(i,"value",{get:function(){return i._v},set:function(t){-1<T.indexOf(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return f(i,"value",{get:function(){return i._v},set:function(t){u(t)?(t.before=s(t.before),t.after=s(t.after)):t=s(t),i._v=t}}),f(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return u(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],function(){i.mount()}),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return f(i,"length",{get:function(){return e.Html.slides.length}}),f(i,"width",{get:function(){return e.Html.root.offsetWidth}}),f(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),f(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),n.on("destroy",function(){i.remove()}),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var o=t[n].style,r=e.Direction.value;o[y[r][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?o[y[r][1]]=this.value/2+"px":o[y[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return f(i,"value",{get:function(){return s(t.settings.gap)}}),f(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),f(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],w(function(){i.apply(e.Html.wrapper.children)},30)),n.on("destroy",function(){i.remove(e.Html.wrapper.children)}),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(t){var i=this,o=0<arguments.length&&void 0!==t?t:0;this.offset=o,n.emit("move",{movement:this.value}),e.Transition.after(function(){n.emit("move.after",{movement:i.value})})}};return f(i,"offset",{get:function(){return i._o},set:function(t){i._o=c(t)?0:s(t)}}),f(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),f(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],function(){i.make()}),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(n){for(var i=0<arguments.length&&void 0!==n?n:[],o=e.Html.slides,r=t.settings,s=r.perView,a=r.classes,u=s+ +!!t.settings.peek,l=o.slice(0,u),c=o.slice(-u),d=0;d<Math.max(1,Math.floor(s/o.length));d++){for(var f=0;f<l.length;f++){var h=l[f].cloneNode(!0);h.classList.add(a.cloneSlide),i.push(h)}for(var p=0;p<c.length;p++){var v=c[p].cloneNode(!0);v.classList.add(a.cloneSlide),i.unshift(v)}}return i},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,o=n.slides,r=Math.floor(t.length/2),s=t.slice(0,r).reverse(),a=t.slice(r,t.length),u=e.Sizes.slideWidth+"px",l=0;l<a.length;l++)i.appendChild(a[l]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],o[0]);for(var d=0;d<t.length;d++)t[d].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return f(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",function(){i.remove(),i.mount(),i.append()}),n.on("build.before",function(){t.isType("carousel")&&i.append()}),n.on("destroy",function(){i.remove()}),i},Resize:function(t,e,n){var i=new C,o={mount:function(){this.bind()},bind:function(){i.on("resize",window,w(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),b(i).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){i.removeClasses()}),n.on(["resize","update"],function(){i.mount()}),n.on("move.after",function(){i.activeClass()}),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var o=this;t.disabled||(t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after(function(){o.isStart()&&n.emit("run.start",o.move),o.isEnd()&&n.emit("run.end",o.move),(o.isOffset("<")||o.isOffset(">"))&&(o._o=!1,n.emit("run.offset",o.move)),n.emit("run.after",o.move),t.enable()}))},calculate:function(){var e=this.move,n=this.length,i=e.steps,o=e.direction,r="number"==typeof s(i)&&0!==s(i);switch(o){case">":">"===i?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):r?t.index+=Math.min(n-t.index,-s(i)):t.index++;break;case"<":"<"===i?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):r?t.index-=Math.min(t.index,s(i)):t.index--;break;case"=":t.index=i}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return f(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?s(e)?s(e):e:0}}}),f(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(s(n.perView)-1)+s(n.focusAt):i-1}}),f(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new C,o=0,r=0,a=0,u=!1,l=!!L&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!u&&!t.disabled){this.disable();var i=this.touches(e);o=null,r=s(i.pageX),a=s(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var u=t.settings,l=u.touchAngle,c=u.touchRatio,d=u.classes,f=this.touches(i),h=s(f.pageX)-r,p=s(f.pageY)-a,v=Math.abs(h<<2),m=Math.abs(p<<2),g=Math.sqrt(v+m),_=Math.sqrt(m);if(!(180*(o=Math.asin(_/g))/Math.PI<l))return!1;i.stopPropagation(),e.Move.make(h*parseFloat(c)),e.Html.root.classList.add(d.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var a=t.settings,u=this.touches(i),l=this.threshold(i),c=u.pageX-r,d=180*o/Math.PI,f=Math.round(c/e.Sizes.slideWidth);this.enable(),l<c&&d<a.touchAngle?(a.perTouch&&(f=Math.min(f,s(a.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve("<"+f))):c<-l&&d<a.touchAngle?(a.perTouch&&(f=Math.max(f,-s(a.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve(">"+f))):e.Move.make(),e.Html.root.classList.remove(a.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,o=t.settings;o.swipeThreshold&&i.on(N[0],e.Html.wrapper,function(t){n.start(t)},l),o.dragThreshold&&i.on(N[1],e.Html.wrapper,function(t){n.start(t)},l)},unbindSwipeStart:function(){i.off(N[0],e.Html.wrapper,l),i.off(N[1],e.Html.wrapper,l)},bindSwipeMove:function(){var n=this;i.on(M,e.Html.wrapper,w(function(t){n.move(t)},t.settings.throttle),l)},unbindSwipeMove:function(){i.off(M,e.Html.wrapper,l)},bindSwipeEnd:function(){var t=this;i.on(E,e.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){i.off(E,e.Html.wrapper)},touches:function(t){return-1<D.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return-1<D.indexOf(e.type)?n.dragThreshold:n.swipeThreshold},enable:function(){return u=!1,e.Transition.enable(),this},disable:function(){return u=!0,e.Transition.disable(),this}};return n.on("build.after",function(){e.Html.root.classList.add(t.settings.classes.swipeable)}),n.on("destroy",function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()}),c},Images:function(t,e,n){var i=new C,o={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Anchors:function(t,e,n){var i=new C,o=!1,r=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){r&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(r=!0,!o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");o=!0}return this},attach:function(){if(r=!1,o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));o=!1}return this}};return f(s,"items",{get:function(){return s._a}}),n.on("swipe.move",function(){s.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){s.attach()})}),n.on("destroy",function(){s.attach(),s.unbind(),i.destroy()}),s},Controls:function(t,e,n){var i=new C,o=!!L&&{passive:!0},r={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.activeNav),b(i).forEach(function(t){t.classList.remove(n.classes.activeNav)}))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,o)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return f(r,"items",{get:function(){return r._c}}),n.on(["mount.after","move.after"],function(){r.setActive()}),n.on("destroy",function(){r.removeBindings(),r.removeActive(),i.destroy()}),r},Keyboard:function(t,e,n){var i=new C,o={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){o.unbind()}),n.on("update",function(){o.mount()}),n.on("destroy",function(){i.destroy()}),o},Autoplay:function(t,e,n){var i=new C,o={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&c(this._i)&&(this._i=setInterval(function(){n.stop(),e.Run.make(">"),n.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,function(){t.stop()}),i.on("mouseout",e.Html.root,function(){t.start()})},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return f(o,"time",{get:function(){return s(e.Html.slides[t.index].getAttribute("data-glide-autoplay")||t.settings.autoplay)}}),n.on(["destroy","update"],function(){o.unbind()}),n.on(["run.before","pause","destroy","swipe.start","update"],function(){o.stop()}),n.on(["run.after","play","swipe.end"],function(){o.start()}),n.on("update",function(){o.mount()}),n.on("destroy",function(){i.destroy()}),o},Breakpoints:function(t,e,n){var i=new C,o=t.settings,s=P(o.breakpoints),a=r({},o),u={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return a}};return r(o,u.match(s)),i.on("resize",window,w(function(){t.settings=h(o,u.match(s))},t.settings.throttle)),n.on("update",function(){s=P(s),a=r({},o)}),n.on("destroy",function(){i.off("resize",window)}),u}};function z(){return e(this,z),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(z.__proto__||Object.getPrototypeOf(z)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(z,m),i(z,[{key:"mount",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};return function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0}(z.prototype.__proto__||Object.getPrototypeOf(z.prototype),"mount",this).call(this,r({},j,e))}}]),z}),jQuery(document).ready(function(t){function e(t){var e=new RegExp(t+"=([^;]+)").exec(document.cookie);return null!=e?unescape(e[1]):null}function n(t){var e=RegExp("[?&]"+t+"=([^&]*)").exec(window.location.search);return e&&decodeURIComponent(e[1].replace(/\+/g," "))}let i,o=t(".gform_footer"),r=e("_ga");if(r&&(o.length>0?o.append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${r}" autocomplete="off">`):t("fieldset")?t("fieldset").append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${r}" autocomplete="off">`):t("form").append(`<input type="hidden" class="google_analytics_user_id" id="00N4T0000062HUZ" name="00N4T0000062HUZ" value="${r}" autocomplete="off">`)),console.log("Google Analytics User ID:",r),window.location.href.indexOf("gclid=")?i=n("gclid"):window.location.href.indexOf("GCLD=")&&(i=n("GCLD")),i){var s=n("gclsrc");s&&-1===s.indexOf("aw")||function(t,e,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toUTCString()}document.cookie=t+"="+(e||"")+i+"; path=/"}("gclid",i,90)}let a=e("gclid");i?console.log("gclid:",i):a?console.log("gclid:",a):console.log("No gclid present on page."),a&&(o.length>0?o.append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${a}" autocomplete="off">`):t("fieldset")?t("fieldset").append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${a}" autocomplete="off">`):t("form").append(`<input type="hidden" class="gclid_cookie_value" id="00N4T0000061o2h" name="00N4T0000061o2h" value="${a}" autocomplete="off">`))}),jQuery(document).ready(function(t){t("#primary-menu > li").addClass("top_level_nav_item"),t("#primary-menu .top_level_nav_1 > a").attr("href","#"),t("#primary-menu .top_level_nav_2 > a").attr("href","#"),t("#primary-menu .top_level_nav_3 > a").attr("href","#"),t(".top_level_nav_item").click(function(){t(".top_level_nav_item").not(t(this)).removeClass("active_nav_item"),t(".top_level_nav_item").not(t(this)).find(".sub_menu_wrapper").removeClass("showNav"),t(".top_level_nav_item").not(t(this)).find(".sub-menu").removeClass("showNav"),t(this).find(".sub_menu_wrapper").toggleClass("showNav"),t(this).toggleClass("active_nav_item"),t(this).find(".sub-menu").toggleClass("showNav")}),t(".top_level_nav_item").hover(function(e){window.matchMedia("(min-width: 1024px)").matches&&(t(this).find(".sub_menu_wrapper").addClass("showNav"),t(".top_level_nav_item").not(t(this)).find(".sub_menu_wrapper").removeClass("showNav"))}),t(".sub-menu").wrap('<div class="sub_menu_wrapper"></div>');var e=t(".sub-menu .sub-menu");e.parent().is(".sub_menu_wrapper")&&e.unwrap(),t(".nav_links_column").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_2").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_3").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_4").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_5").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_6").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_7").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_8").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".nav_links_column_9").wrapAll('<div class="nav_link_column_wrapper"></div>'),t(".toc").click(function(e){t(".toc li").toggleClass("showTOC"),t(".toc img").toggleClass("dropdown_active")}),t(".covid19_shortcode_section").click(function(e){t(".covid_sidebar_content_wrapper").toggleClass("show"),t(".covid_dropdown_icon img").toggleClass("dropdown_active")});let n=t(window).width();if(n<768){function i(){t(".search_bar_container .search-field").attr("placeholder","Search...")}t(".search_bar_magnifying_glass_icon").click(function(e){t(".search_bar_wrapper").toggleClass("show_flex")}),t(".top_level_nav_5 a").next().text("Insurance"),i()}else{function i(){t(".search_bar_container .search-field").attr("placeholder","Search Addiction or Treatment")}i()}n>1024&&(t(".toc li").addClass("showTOC"),t(".toc img").addClass("dropdown_active")),t(".top_level_nav_item").hover(),n>1024&&(t(".search_bar_container").hover(function(e){t(".desktop_nav_search_subnav_wrapper").addClass("show_flex")}),t(".desktop_nav_search_subnav_wrapper").mouseleave(function(e){t(".desktop_nav_search_subnav_wrapper").removeClass("show_flex")}),t("main").hover(function(e){t(".desktop_nav_search_subnav_wrapper").removeClass("show_flex")}),t(".top_level_nav_item").hover(function(e){t(".desktop_nav_search_subnav_wrapper").removeClass("show_flex")})),t(document).on("keydown",function(e){"Escape"==e.key&&(t(".sub_menu_wrapper").removeClass("showNav"),console.log("escape key pressed"))}),t("#primary").click(function(){t(".sub_menu_wrapper").removeClass("showNav")}),t("footer").hover(function(){t(".sub_menu_wrapper").removeClass("showNav")}),t("main").hover(function(){t(".sub_menu_wrapper").removeClass("showNav")});let o=t(".search_query_shortcode_button");var r;o.click(function(){console.log("search query button was clicked"),t(".search_query_shortcode_content_container ul .search_query_shortcode_element").toggleClass("showAllQueryResults"),o.toggleClass("active"),o.hasClass("active")?o.text("Show Less"):o.text("Show More")}),setTimeout(function(){t("#primary-menu > li").addClass("top_level_nav_item"),t("#primary-menu .menu-item-has-children > a").attr("target","")},300),r=function(){for(var t=window.location.hostname,e=new RegExp("^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?"+t+")|(localhost:\\d{4})|(\\/.*))(\\/.*)?$",""),n=document.querySelectorAll("a"),i=n.length,o=0;o<i;o++){var r=n[o],s=r.getAttribute("href");e.test(s)||r.setAttribute("target","_blank"),e.test(s)||r.setAttribute("rel","nofollow noopener")}},"loading"!=document.readyState?r():document.addEventListener?document.addEventListener("DOMContentLoaded",r):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&r()}),window.addEventListener("hashchange",function(){0!==location.hash.length&&window.scrollTo(window.scrollX,window.scrollY-100)}),t("footer .gform_footer input[type=submit]").addClass("footerContactForm"),t(".contact_us_container .gform_footer input[type=submit]").addClass("footerContactForm"),t(".short_code_contact_form_cta_form_container .gform_footer input[type=submit]").addClass("contactFormCta")}),jQuery(document).ready(function(t){});