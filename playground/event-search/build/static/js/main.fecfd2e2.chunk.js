(this["webpackJsonpsearch-user"]=this["webpackJsonpsearch-user"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(9),n(1)),i=function(e){var t=e.user;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.description),r.a.createElement("p",null,t.name)))};n(10),n(11);var u=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(s.a)(o,2),l=u[0],d=u[1];return Object(a.useEffect)((function(){fetch("https://gist.githubusercontent.com/chadwithuhc/6240db2f7b415c8bf9ec7eed6bb2d56e/raw/10f6b97e7dd9ea113e63a38e75161b5660b6d248/tweets.json").then((function(e){return e.json()})).then((function(e){c(e.statuses),d(e.statuses)}))}),[]),r.a.createElement("div",{className:"App container"},r.a.createElement("input",{type:"text",onChange:function(e){var t=n.filter((function(t){return t.user.description.includes(e.target.value)}));return""===e.target.value?d(n):d(t)}}),r.a.createElement("div",{className:"card-grid"},l.map((function(e,t){return r.a.createElement(i,{user:e.user})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.fecfd2e2.chunk.js.map