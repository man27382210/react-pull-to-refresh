!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(2);n(3);var o=n(4),l=o.WithPullToRefreshHoc(function(){return r.createElement("div",{style:{height:1e3}},"test")});s.render(r.createElement(l,{spinnerStyle:"IOS",refresh:function(){return new Promise(function(e){setTimeout(e,2e3)})}}),document.getElementById("app"))},function(e,t){e.exports=ReactDOM},function(e,t,n){},function(e,t,n){"use strict";var r,s=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=n(5),i=n(8),c=n(6),u=n(7);t.WithPullToRefreshHoc=function(e){var t;return(t=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.containerRef=l.createRef(),e.controlRef=l.createRef(),e.mainRef=l.createRef(),e}return s(n,t),n.prototype.componentDidMount=function(){var e=this.props,t=e.spinnerStyle,n=e.scrollable,r=e.threshold,s=e.refresh,l={container:this.containerRef.current,elControl:this.controlRef.current,elMain:this.mainRef.current,threshold:r||150,animates:"MATERIAL"===t?c.default:u.default,refresh:s||function(){return Promise.resolve()}};i.default(o({scrollable:n},l))},n.prototype.render=function(){var t=this.props,n=t.customClass,r="",s=null;return"MATERIAL"===t.spinnerStyle?(r="pull-to-refresh__control",s=function(){return l.createElement(l.Fragment,null,l.createElement(a.RefreshIconComponent,null),l.createElement(a.RefreshSpinnerComponent,null))}):(r="pull-to-refresh__spinner",s=function(){return l.createElement(a.IOSSpinnerComponent,null)}),l.createElement("div",{className:"pull-to-refresh "+(n||""),ref:this.containerRef},l.createElement("div",{className:r,ref:this.controlRef},s()),l.createElement("main",{ref:this.mainRef},l.createElement(e,o({},this.props))))},n}(l.Component)).defaultProps={spinnerStyle:"MATERIAL"},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.RefreshIconComponent=function(){return r.createElement("svg",{className:"pull-to-refresh__icon",fill:"#4285f4",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},t.RefreshSpinnerComponent=function(){return r.createElement("svg",{className:"pull-to-refresh__spinner",width:"24",height:"24",viewBox:"25 25 50 50"},r.createElement("circle",{className:"pull-to-refresh__path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#4285f4",strokeWidth:"4",strokeMiterlimit:"10"}))},t.IOSSpinnerComponent=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}),r.createElement("div",{className:"pull-to-refresh__blade"}))}},function(e,t,n){"use strict";n.r(t);const r={pulling(e,t){const{container:n,threshold:r,elControl:s}=t;let o=e/r;o>1?o=1:o*=o*o;const l=e/2.5;n.style.transform=l?`translate3d(0, ${l}px, 0)`:"",s.style.opacity=o,s.style.transform=`translate3d(-50%, 0, 0) rotate(${360*o}deg)`},refreshing({container:e,threshold:t}){e.style.transition="transform 0.2s",e.style.transform=`translate3d(0, ${t/2.5}px, 0)`},restoring:({container:e})=>new Promise(t=>{e.style.transform?(e.style.transition="transform 0.3s",e.style.transform="translate3d(0, 0, 0)",e.addEventListener("transitionend",()=>{e.style.transition="",t()})):t()})};r.aborting=r.restoring,t.default=r},function(e,t,n){"use strict";n.r(t);const r={pulling(e,t){const{threshold:n,elMain:r,elControl:s,theme:o}=t;let l=e/n;l>1?l=1:l*=l*l;const a=Math.floor(12*l);if(t.spinnerCls!==a){const e=`pull-to-refresh__spinner--s${t.spinnerCls}`,n=`pull-to-refresh__spinner--s${a}`;t.spinnerCls&&s.classList.remove(e),a&&s.classList.add(n),t.spinnerCls=a}const i=e/2.5;r.style.transform=i?`translate3d(0, ${i}px, 0)`:""},refreshing({elMain:e,threshold:t}){e.style.transition="transform 0.2s",e.style.transform=`translate3d(0, ${t/2.5}px, 0)`},aborting:e=>new Promise(t=>{const{elMain:n,elControl:r,theme:s}=e;let o=e.spinnerCls;if(e.spinnerCls=null,o){const e=setInterval(()=>{const t=`pull-to-refresh__spinner--s${o}`;r.classList.remove(t),0==--o?clearInterval(e):r.classList.add(t)},300/o)}n.style.transform?(n.style.transition="transform 0.3s",n.style.transform="translate3d(0, 0, 0)",n.addEventListener("transitionend",()=>{n.style.transition="",t()})):t()}),restoring:e=>new Promise(t=>{const{elMain:n,elControl:r,spinnerCls:s,theme:o}=e,l=`pull-to-refresh__spinner--s${s}`;s&&r.classList.remove(l),e.spinnerCls=null,n.style.transition="transform 0.3s",n.style.transform="translate3d(0, 0, 0)",n.addEventListener("transitionend",()=>{n.style.transition="",t()})})};t.default=r},function(e,t,n){"use strict";n.r(t);t.default=function(e){e=Object.assign({scrollable:document.body,threshold:150,onStateChange:()=>{}},e);const{container:t,theme:n,scrollable:r,threshold:s,refresh:o,onStateChange:l,animates:a}=e;let i,c,u;function f(e){const n=`pull-to-refresh--${e}`;t.classList.add(n)}function d(e){const n=`pull-to-refresh--${e}`;t.classList.remove(n)}return function({element:e,onpanstart:t,onpanmove:n,onpanend:r}){let s,o,l,a;function i(e){const t=Array.prototype.slice.call(e.changedTouches).filter(e=>e.identifier===s)[0];return!!t&&(e.deltaX=t.screenX-o,e.deltaY=t.screenY-l,!0)}function c(e){const t=e.changedTouches[0];s=t.identifier,o=t.screenX,l=t.screenY}function u(e){i(e)&&(t&&!a&&(t(e),a=!0),n(e))}function f(e){i(e)&&r(e)}return e.addEventListener("touchstart",c),n&&e.addEventListener("touchmove",u),r&&e.addEventListener("touchend",f),function(){e.removeEventListener("touchstart",c),n&&e.removeEventListener("touchmove",u),r&&e.removeEventListener("touchend",f)}}({element:t,onpanmove(t){let n=t.deltaY;((!r||[window,document,document.body,document.documentElement].includes(r)?document.documentElement.scrollTop||document.body.scrollTop:r.scrollTop)>0||n<0)&&(!u||u in{aborting:1,refreshing:1,restoring:1})||(t.preventDefault(),null==i&&(c=n,f(u="pulling"),l(u,e)),(n-=c)<0&&(n=0),i=n,(n>=s&&"reached"!==u||n<s&&"pulling"!==u)&&(d(u),f(u="reached"===u?"pulling":"reached"),l(u,e)),a.pulling(n,e))},onpanend(){null!=u&&("pulling"===u?(d(u),l(u="aborting"),f(u),a.aborting(e).then(()=>{d(u),i=u=c=null,l(u)})):"reached"===u&&(d(u),f(u="refreshing"),l(u,e),a.refreshing(e),o().then(()=>{d(u),f(u="restoring"),l(u),a.restoring(e).then(()=>{d(u),i=u=c=null,l(u)})})))}})}}]);