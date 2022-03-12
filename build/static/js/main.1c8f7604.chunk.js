(this.webpackJsonpart_collector_react=this.webpackJsonpart_collector_react||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),l=a(5),s=a.n(l),u=a(1),i=a.n(u),o=a(2),m="https://api.harvardartmuseums.org",p="apikey=56f683fd-8200-4a12-96d5-dd86050ad36f";function f(e){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(i.a.mark((function e(t){var a,n,r,c,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.century,n=t.classification,r=t.queryString,c="".concat(m,"/object?").concat(p,"&classification=").concat(n,"&century=").concat(a,"&keyword=").concat(r),e.prev=2,e.next=5,fetch(c);case 5:return l=e.sent,e.next=8,l.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("centuries")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("centuries")));case 2:return t="".concat(m,"/century?").concat(p,"&size=100&sort=temporalorder"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("centuries",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("classifications")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("classifications")));case 2:return t="".concat(m,"/classification?").concat(p,"&size=100&sort=name"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("classifications",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}var N=function(e){var t=e.featuredResult;if(!t)return c.a.createElement("main",{id:"feature"});var a=t.title,n=t.dated,l=t.images,s=t.primaryimageurl,u=t.description,i=t.culture,o=t.style,m=t.technique,p=t.medium,f=t.dimensions,E=t.people,d=t.department,h=t.division,v=t.contact,g=t.creditline;return c.a.createElement("main",{id:"feature"},c.a.createElement("div",{className:"object-feature"},c.a.createElement("header",null,c.a.createElement("h3",null,a),c.a.createElement("h4",null,n)),c.a.createElement("section",{className:"facts"},u?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Description: "),c.a.createElement("span",{className:"content"}," ",u," ")):null,i?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Culture: "),c.a.createElement("span",{className:"content"}," ",i," ")):null,o?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Style: "),c.a.createElement("span",{className:"content"}," ",o," ")):null,m?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Technique: "),c.a.createElement("span",{className:"content"}," ",m," ")):null,p?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Medium: "),c.a.createElement("span",{className:"content"}," ",p," ")):null,f?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Dimensions: "),c.a.createElement("span",{className:"content"}," ",f," ")):null,E?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," People: "),c.a.createElement("span",{className:"content"}," ",E," ")):null,d?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Department: "),c.a.createElement("span",{className:"content"}," ",d," ")):null,h?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Division: "),c.a.createElement("span",{className:"content"}," ",h," ")):null,v?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Contact: "),c.a.createElement("span",{className:"content"}," ",v," ")):null,v?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Contact: "),c.a.createElement("span",{className:"content"}," ",v," ")):null,g?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"}," Creditline: "),c.a.createElement("span",{className:"content"}," ",g," ")):null),c.a.createElement("section",{className:"photos"},l&&l.length>0?l.map((function(e){return c.a.createElement("img",{key:e.baseimageurl,src:e.baseimageurl,alt:e.baseimageurl})})):s?c.a.createElement("img",{src:s,alt:s}):null)))},j=function(){return c.a.createElement("div",{id:"loading"},c.a.createElement("h2",{className:"message"},"Searching..."))},x=function(e){var t=e.searchResults,a=t.info,n=t.records,r=e.setSearchResults,l=e.setFeaturedResult,s=e.setIsLoading;function u(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,f(t);case 4:a=e.sent,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}return c.a.createElement("aside",{id:"preview"},c.a.createElement("header",{className:"pagination"},c.a.createElement("button",{disabled:!a.prev,className:"previous",onClick:function(){return u(a.prev)}},"Previous"),c.a.createElement("button",{disabled:!a.next,className:"next",onClick:function(){return u(a.next)}},"Next")),c.a.createElement("section",{className:"results"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"object-preview",onClick:function(t){t.preventDefault(),l(e)}},e.primaryimageurl?c.a.createElement("img",{src:e.primaryimageurl,alt:e.description}):null)}))))},S=function(e){var t=e.setIsLoading,a=e.setSearchResults,l=Object(r.useState)([]),s=Object(n.a)(l,2),u=s[0],m=s[1],p=Object(r.useState)([]),f=Object(n.a)(p,2),E=f[0],h=f[1],g=Object(r.useState)(""),y=Object(n.a)(g,2),N=y[0],j=y[1],x=Object(r.useState)("any"),S=Object(n.a)(x,2),O=S[0],k=S[1],w=Object(r.useState)("any"),F=Object(n.a)(w,2),C=F[0],R=F[1];return Object(r.useEffect)(Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return t=e.sent,e.next=6,b();case 6:a=e.sent,m(t),h(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[]),c.a.createElement("form",{id:"search",onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t(!0),e.prev=2,e.next=5,d({century:O,classification:C,queryString:N});case 5:r=e.sent,a(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,t(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"keywords"},"Query"),c.a.createElement("input",{id:"keywords",type:"text",placeholder:"enter keywords...",value:N,onChange:function(e){return j(e.target.value)}})),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-classification"},"Classification ",c.a.createElement("span",{className:"classification-count"},"(",E.length,")")),c.a.createElement("select",{name:"classification",id:"select-classification",value:C,onChange:function(e){return R(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),E.map((function(e,t){return c.a.createElement("option",{key:t,value:e.name},e.name)})))),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-century"},"Century ",c.a.createElement("span",{className:"century-count"},"(",u.length,")")),c.a.createElement("select",{name:"century",id:"select-century",value:O,onChange:function(e){return k(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),u.map((function(e,t){return c.a.createElement("option",{key:t,value:e.name},e.name)})))),c.a.createElement("button",null,"SEARCH"))},O=function(){return c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"The Art Collector"),c.a.createElement("h5",null,"Search the Harvard Art Museums' Private Collections"))},k=function(){var e=Object(r.useState)({info:{},records:[]}),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(r.useState)(null),u=Object(n.a)(s,2),i=u[0],o=u[1],m=Object(r.useState)(!1),p=Object(n.a)(m,2),f=p[0],E=p[1];return c.a.createElement("div",{className:"app"},c.a.createElement(O,null),c.a.createElement(S,{setIsLoading:E,setSearchResults:l}),c.a.createElement(x,{searchResults:a,setSearchResults:l,setIsLoading:E,setFeaturedResult:o}),c.a.createElement(N,{featuredResult:i,setFeaturedResult:o,setIsLoading:E,setSearchResults:l}),f?c.a.createElement(j,null):null)};s.a.render(c.a.createElement(k,null),document.getElementById("app"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.1c8f7604.chunk.js.map