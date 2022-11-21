(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(67),i=a.n(o),c=a(10),l=a(178),s=a(179),h=a(171),m=a(165),u=a(173),d=a(164),f=a(100),p=a.n(f);function g(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"meaning"},n.a.createElement(h.a,{sx:{mb:1,fontStyle:"italic"},color:"light"===e.theme?"text.secondary":"#ccc"},e.meaning.partOfSpeech),e.meaning.definitions.map(function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("li",{className:"meaningLi",style:{marginLeft:"1.5rem",fontSize:"1.2rem",color:"dark"===e.theme?"white":"black"}},n.a.createElement(h.a,{sx:{mb:.2,fontSize:"1rem"},variant:"body2",color:"light"===e.theme?"text.primary":"#ddd"},t.definition)),n.a.createElement(h.a,{sx:{mb:1.5,fontSize:".9rem",marginLeft:"2rem"},color:"light"===e.theme?"text.secondary":"#aaa"},void 0===t.example?"":'"'.concat(t.example,'"')))})))}var v=a(91),y=a(172);function b(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{width:"90",margin:"1rem auto"}},["h4","h3","body1","caption","subtitle1","subtitle2","button","overline","srOnly"].map(function(t){return n.a.createElement(h.a,{component:"div",key:t,variant:t},e.isfetching?n.a.createElement(y.a,null):"")})))}var w=a(167);function E(e){var t=Object(r.useState)({searchedWord:"",phonetic:"",audio:"",meanings:[]}),a=Object(c.a)(t,2),o=a[0],i=a[1],f=o.searchedWord,y=o.phonetic,E=o.audio,x=o.meanings,k=Object(r.useState)(!1),S=Object(c.a)(k,2),O=S[0],j=S[1],L=Object(r.useState)(""),N=Object(c.a)(L,2),_=N[0],I=N[1],z=Object(r.useState)(!1),C=Object(c.a)(z,2),M=C[0],T=C[1],P=Object(r.useState)(0),A=Object(c.a)(P,2),W=A[0],D=A[1],F=Object(r.useState)("Listen"),B=Object(c.a)(F,2),G=B[0],J=B[1],R=Object(r.useState)(!1),U=Object(c.a)(R,2),V=U[0],Y=U[1],H=Object(r.useState)(!1),X=Object(c.a)(H,2),K=X[0],q=X[1],Q=function(e){D(30),Y(!0);var t="https://api.dictionaryapi.dev/api/v2/entries/en/".concat(e);fetch(t).then(function(e){return D(50),e.json()}).then(function(e){D(60),i({searchedWord:e[0].word,phonetic:e[0].phonetic,meanings:e[0].meanings,audio:0===e[0].phonetics.length?"":e[0].phonetics[0].audio}),J("Listen"),0!==e[0].phonetics.length&&""!==e[0].phonetics[0].audio||J("No Audio"),D(80),T(!0),j(!1),Y(!1),D(100)}).catch(function(e){j(!0),Y(!1),D(100)})};return n.a.createElement("div",{className:"search_container"},n.a.createElement(v.a,{color:"dodgerblue",style:{zIndex:1e3,position:"fixed",top:0,height:"4px"},height:3,waitingTime:800,progress:W,onLoaderFinished:function(){return D(0)}}),n.a.createElement(w.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:K,onClose:function(){q(!1)},message:"No audio found!"}),n.a.createElement(l.a,{className:"search_card",sx:{padding:1,backgroundColor:"light"===e.theme?"#f8f8f8":"#454545"}},n.a.createElement(s.a,null,n.a.createElement(h.a,{sx:{mb:2.5},variant:"h3",component:"div",color:"light"===e.theme?"text.primary":"#f2f2f2"},"Search Word",n.a.createElement("p",{style:{fontSize:"11px",color:"light"===e.theme?"#222":"#ddd"}},n.a.createElement("b",null,n.a.createElement("i",null,"Source")),": Dictionary API")),n.a.createElement("div",{className:"searchContainer",style:{display:"flex",gap:"2rem",alignItems:"baseline"}},n.a.createElement(m.a,{sx:{mb:1.5,input:{color:"light"===e.theme?"text.primary":"#ccc"}},InputLabelProps:{style:{color:"light"===e.theme?"#1976d2":"#ccc"}},error:O,id:"standard-error-helper-text",label:O?"Word not found":"Search here",value:_,onChange:function(e){I(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&Q(_)},placeholder:"Eg: Hello",helperText:O?"Check your word":"",variant:"standard"}),n.a.createElement(u.a,{disabled:""===_,variant:"outlined",sx:{height:"35px"},onClick:function(){Q(_)}},"Search"))),n.a.createElement(b,{isfetching:V}),n.a.createElement(s.a,{sx:{marginLeft:1.5,display:M?"block":"none"}},n.a.createElement("div",{className:"searchTitle",style:{display:"flex",alignItems:"center"}},n.a.createElement(d.a,{title:G},n.a.createElement(p.a,{sx:{cursor:"pointer",marginRight:3,transition:".1s ease-in",border:"1px solid #ccc",padding:"5px",borderRadius:"50%",color:"dodgerblue",transform:"translateY(-3px)","&:hover":{backgroundColor:"#ddd"}},onClick:function(){""!==E?new Audio(E).play():q(!0)},fontSize:"large"})),n.a.createElement(h.a,{sx:{mb:1},variant:"h6",component:"h1"},f)),n.a.createElement(h.a,{sx:{mb:1,marginLeft:8},color:"light"===e.theme?"text.secondary":"#ccc"},y),n.a.createElement("div",{className:"meanings"},n.a.createElement("ol",{style:{listStyle:"decimal",marginLeft:"2rem"}},x.map(function(t,a){return n.a.createElement(g,{key:a,meaning:t,theme:e.theme})}))))))}var x=a(96);function k(){k=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var o=t&&t.prototype instanceof u?t:u,i=Object.create(o.prototype),c=new j(n||[]);return r(i,"_invoke",{value:E(e,a,c)}),i}function h(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function u(){}function d(){}function f(){}var p={};l(p,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&a.call(v,o)&&(p=v);var y=f.prototype=u.prototype=Object.create(p);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(n,i){!function r(n,o,i,c){var l=h(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,n,i)})}return n=n?n.then(i,i):i()}})}function E(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return N()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=x(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=h(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=h(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=f,r(y,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:d,configurable:!0}),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new w(s(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function S(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],m=Object(r.useState)(!0),d=Object(c.a)(m,2),f=d[0],p=d[1],v=Object(r.useState)(!0),y=Object(c.a)(v,2),b=y[0],w=y[1],E=Object(r.useState)({searchedWord:"",partOfSpeech:"",definition:"",example:"",meaning:[]}),S=Object(c.a)(E,2),O=S[0],j=S[1],L="https://api.dictionaryapi.dev/api/v2/entries/en/".concat(o),N=function(){var e=Object(x.a)(k().mark(function e(){var t,a,r,n,o,c,l,s;return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("savedWord")),a=JSON.parse(localStorage.getItem("savedDate")),null!==t){e.next=15;break}return"https://random-word-api.herokuapp.com/word?number=1",e.next=6,fetch("https://random-word-api.herokuapp.com/word?number=1");case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,i(n[0]),localStorage.setItem("savedWord",JSON.stringify(n[0])),localStorage.setItem("savedDate",JSON.stringify(new Date)),e.next=31;break;case 15:if(o=new Date,c=new Date(a),o.getDate()===c.getDate()){e.next=30;break}return"https://random-word-api.herokuapp.com/word?number=1",e.next=21,fetch("https://random-word-api.herokuapp.com/word?number=1");case 21:return l=e.sent,e.next=24,l.json();case 24:s=e.sent,i(s[0]),localStorage.setItem("savedWord",JSON.stringify(s[0])),localStorage.setItem("savedDate",JSON.stringify(new Date)),e.next=31;break;case 30:i(t);case 31:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function _(){return(_=Object(x.a)(k().mark(function e(t){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch(t);case 3:e.sent.json().then(function(e){j({searchedWord:e[0].word,partOfSpeech:e[0].meanings[0].partOfSpeech,definition:e[0].meanings[0].definitions[0].definition,example:e[0].meanings[0].definitions[0].example,meaning:e[0].meanings}),w(!1)}).catch(function(e){console.log(e),N()});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(r.useEffect)(function(){N()},[]),Object(r.useEffect)(function(){!function(e){_.apply(this,arguments)}(L)},[o]);var I=function(){p(!f)};return n.a.createElement("div",{className:"word-of-the-day_container"},n.a.createElement(l.a,{sx:{padding:0,mb:"auto",backgroundColor:"light"===e.theme?"#f8f8f8":"#454545",height:"100%"}},n.a.createElement(s.a,{className:"desktopView"},n.a.createElement(h.a,{variant:"body1",component:"div",color:"primary.main"},"word of the Day"),n.a.createElement(h.a,{sx:{mb:1.5},variant:"h4",component:"div",color:"light"===e.theme?"text.primary":"#ddd"},O.searchedWord),n.a.createElement("div",{className:"summary",style:{display:f?"block":"none"}},n.a.createElement(h.a,{sx:{mb:1,fontStyle:"italic"},color:"light"===e.theme?"text.secondary":"#ccc"},O.partOfSpeech),n.a.createElement(h.a,{sx:{mb:.2,fontSize:"1rem",marginLeft:"1rem"},variant:"body2",color:"light"===e.theme?"text.primary":"#ddd"},O.definition),n.a.createElement(h.a,{sx:{mb:1.5,fontSize:".9rem",marginLeft:"2.5rem"},color:"light"===e.theme?"text.secondary":"#aaa"},void 0===O.example?"":O.example),n.a.createElement(u.a,{sx:{display:b?"none":"block"},onClick:I,variant:"outlined",color:"primary"},"Show More"))),n.a.createElement(s.a,{className:"fullMeaning",sx:{paddingTop:"0 !important",transform:"translateY(-16px)"}},n.a.createElement("div",{className:"full-meaning",style:{display:f?"none":"block"}},n.a.createElement("ol",{style:{listStyle:"decimal"}},O.meaning.map(function(t,a){return n.a.createElement(g,{key:a,meaning:t,theme:e.theme})})),n.a.createElement(u.a,{sx:{display:b?"none":"block"},onClick:I,variant:"outlined",color:"primary"},"Show Less")))))}var O=a(101),j=a.n(O),L=a(102),N=a.n(L),_=a(103),I=a.n(_);function z(e){return n.a.createElement("div",{className:"about_container"},n.a.createElement(l.a,{sx:{padding:3,mb:"auto",backgroundColor:"light"===e.theme?"#f8f8f8":"#454545"}},n.a.createElement("div",{className:"information"},n.a.createElement("h2",null,"About"),n.a.createElement("span",{className:"social"},n.a.createElement("a",{href:"https://github.com/Prakash-Banjade",style:{color:"#2b2b2b"},target:"_blank",rel:"noopener noreferrer"},n.a.createElement(j.a,{fontSize:"large"})),n.a.createElement("a",{href:"https://www.facebook.com/prakash.banjade.5832/",target:"_blank",rel:"noopener noreferrer",style:{color:"#149ff9",margin:"0 1rem"}},n.a.createElement(N.a,{fontSize:"large"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/prakash-banjade-b673b2247/",target:"_blank",rel:"noopener noreferrer",style:{color:"#0966c4"}},n.a.createElement(I.a,{fontSize:"large"})))),n.a.createElement("article",null,n.a.createElement("h2",{className:"about_h2",style:{color:"light"===e.theme?"#2b2b2b":"#eee"}},"What is this?"),n.a.createElement("p",{className:"about_p"},"This is a dictionary app that uses the"," ",n.a.createElement("a",{style:{color:"dodgerblue"},href:"https://dictionaryapi.dev/"},"dictionaryapi.dev")," API to fetch the data.")),n.a.createElement("article",null,n.a.createElement("h2",{className:"about_h2",style:{color:"light"===e.theme?"#2b2b2b":"#eee"}},"Why did I make this?"),n.a.createElement("p",{className:"about_p"},"I made this to practice my React skills and to learn how to use the Material UI library.")),n.a.createElement("article",null,n.a.createElement("h2",{className:"about_h2",style:{color:"light"===e.theme?"#2b2b2b":"#eee"}},"What did I learn?"),n.a.createElement("p",{className:"about_p"},"I learned how to use Material UI and how to use the dictionaryapi.dev API."))))}var C=a(176),M=a(6),T=a(168),P=a(175);function A(e){var t=Object(M.a)(T.a)(function(t){t.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===e.theme?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===e.theme?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===e.theme?"#8796A5":"#aab4be",borderRadius:10}}}),a={backgroundColor:"dark"===e.theme?"#001e3c":"#ccc",color:"dark"===e.theme?"#fff":"#001e3c",borderBottom:"dark"===e.theme?"1px solid #8796A5":"1px solid #aab4be",boxShadow:"dark"===e.theme?"0px 0px 10px #001e3c":"0px 0px 10px #aab4be"};return n.a.createElement("nav",{style:a},n.a.createElement("div",{className:"logo",style:{color:"dark"===e.theme?"white":"#454545"}},"Dictionary By ",n.a.createElement("span",null,"Prakash Banjade")),n.a.createElement("div",{className:"themeToggler"},n.a.createElement(P.a,null,n.a.createElement(C.a,{control:n.a.createElement(t,{sx:{m:1},defaultChecked:"dark"===e.theme}),label:"Toggle Theme",onChange:function(t){e.setTheme("dark"===e.theme?"light":"dark"),t.target.checked=!t.target.checked}}))))}function W(){var e=Object(r.useState)("dark"),t=Object(c.a)(e,2),a=t[0],o=t[1];return document.body.style.backgroundColor="dark"===a?"#1e1e1e":"white",n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{theme:a,setTheme:o}),n.a.createElement("div",{className:"container"},n.a.createElement(E,{theme:a,changeTheme:o}),n.a.createElement(S,{theme:a}),n.a.createElement(z,{theme:a})))}a(110);i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)))},81:function(e,t,a){e.exports=a(114)}},[[81,2,1]]]);
//# sourceMappingURL=main.d107544b.chunk.js.map