(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{14:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),i=a(4),l=a.n(i),u=a(12),o=a(2),m=a(13),p=a.n(m).a.create({baseURL:"https://en.wikipedia.org/w/api.php",params:{action:"query",list:"search",origin:"*",format:"json"}}),f=function(){var e=Object(n.useState)("programming"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(a),i=Object(o.a)(s,2),m=i[0],f=i[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),v=h[0],g=h[1];Object(n.useEffect)((function(){var e=setTimeout((function(){f(a)}),1e3);return function(){clearTimeout(e)}}),[a]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("",{params:{srsearch:m}});case 2:t=e.sent,a=t.data,g(a.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var E=v.map((function(e){return r.a.createElement("div",{key:e.pageid,className:"item"},r.a.createElement("div",{className:"right floated content"},r.a.createElement("a",{href:"https://en.wikipedia.org?curid=".concat(e.pageid),target:"_blank",rel:"noopener noreferrer",className:"ui button"},"Go")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},e.title),e.snippet.toString().replace(/<span class="searchmatch">/g,"").replace(/<\/span>/g,"")))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Enter Search Term"),r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},className:"input"}))),r.a.createElement("div",{className:"ui celled list"},E))},d=function(){return r.a.createElement("div",null,r.a.createElement(f,null))};a(38);s.a.render(r.a.createElement(d,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aebc17ce.chunk.js.map