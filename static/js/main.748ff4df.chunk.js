(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(22),i=c.n(s),l=c(7),o=c(16),d=c(39),j=c(40),b=c(17),u=c(10),h="SHOW_ALERT",m="HIDE_ALERT",p=c(5),x="ADD_CITY_WEATHER",O="REMOVE_CITY_WEATHER",f={cities:JSON.parse(localStorage.getItem("cities"))||[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{cities:[].concat(Object(p.a)(e.cities),[t.payload])});case O:return Object(u.a)(Object(u.a)({},e),{},{cities:e.cities.filter((function(e){return e!==t.payload}))});default:return e}},w=Object(b.combineReducers)({cities:v,alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{visible:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},t.payload),{},{visible:!0});case m:return{visible:!1};default:return e}}}),g=Object(b.createStore)(w,Object(j.composeWithDevTools)(Object(b.applyMiddleware)(d.a))),N=function(e){var t=e.children;return Object(n.jsx)(l.a,{store:g,children:Object(n.jsx)(o.a,{children:t})})},y=c(4),k=c(2),C=c.n(k),S=c(6),E=c(14),D=function(e,t){return{type:h,payload:{text:e,type:t}}},T=function(){return{type:m}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";return function(c){c(D(e,t)),setTimeout((function(){return c(T())}),5e3)}},F=c(41),I={baseUrl:"http://api.openweathermap.org/data/2.5"},H=c.n(F).a.create({baseURL:I.baseUrl}),R="8a998b07d89e5ba53ce3e3bd8259c2fd";H.interceptors.request.use((function(e){return e.headers=Object(u.a)({},e.headers),e}),(function(e){return Promise.reject(e)})),H.interceptors.response.use((function(e){return e}),(function(e){return g.dispatch(A(e.response.data.message)),Promise.reject(e)}));var W=function(){var e=Object(S.a)(C.a.mark((function e(t){var c,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/weather?q=".concat(t,"&units=metric&appid=").concat(R));case 2:return c=e.sent,n=c.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(C.a.mark((function e(t){var c,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/weather?id=".concat(t,"&units=metric&appid=").concat(R));case 2:return c=e.sent,n=c.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(S.a)(C.a.mark((function e(t,c){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/onecall?lat=".concat(t,"&lon=").concat(c,"&exclude=current,minutely,daily&units=metric&appid=").concat(R));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),L=function(e){var t=e.cityID,c=Object(l.b)(),a=Object(r.useState)([]),s=Object(E.a)(a,2),i=s[0],d=s[1],j=function(){var e=Object(S.a)(C.a.mark((function e(){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:c=e.sent,d(c),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j(t)}),[t]);var b=i.weather&&"http://openweathermap.org/img/w/"+i.weather[0].icon+".png";return Object(n.jsx)("div",{className:"col mb-3",children:Object(n.jsxs)("div",{className:"card h-100 border-dark text-center",children:[Object(n.jsx)("div",{className:"card-header",children:Object(n.jsx)("h4",{children:i.name})}),Object(n.jsxs)("div",{className:"card-body bg-dark text-white",children:[Object(n.jsx)("div",{className:"card-text",children:i.weather&&Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:i.weather[0].main}),Object(n.jsx)("img",{src:b,alt:i.weather[0].description,title:i.weather[0].description})]})}),i.main&&Object(n.jsxs)("h3",{className:"card-text",children:[i.main.temp.toFixed()," \xb0C"]}),i.wind&&Object(n.jsxs)("p",{className:"card-text",children:["Wind Speed: ",i.wind.speed," m/s"]}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsxs)("small",{children:["Time of data calculation:",Object(n.jsx)("br",{}),new Date(1e3*i.dt).toLocaleString()]})})]}),Object(n.jsxs)("div",{className:"card-footer",children:[Object(n.jsx)("button",{className:"btn btn-warning btn-sm w-50",onClick:function(){return j(i.id),void c(A("Data updated","success"))},children:"Update"}),Object(n.jsx)("button",{className:"btn btn-danger btn-sm w-50",onClick:function(){return c(function(e){return{type:O,payload:e}}(t))},children:"Delete"}),Object(n.jsx)(o.b,{to:"/"+i.name,children:Object(n.jsx)("button",{className:"btn btn-outline-dark btn-sm w-100",children:"More information"})})]})]})})},P=function(e){return e.cities},U=function(){var e=Object(l.c)(P).cities;return e.length?Object(n.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4",children:e.map((function(e,t){return Object(n.jsx)(L,{cityID:e},e+""+t)})).reverse()}):Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h4",{children:"No cities."}),Object(n.jsx)("p",{children:"Please, add city."})]})},J=(c(73),function(){var e=Object(l.b)(),t=Object(y.h)().city,c=Object(r.useState)({}),a=Object(E.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)({}),d=Object(E.a)(o,2),j=d[0],b=d[1],u=function(){var e=Object(S.a)(C.a.mark((function e(){var c,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return c=e.sent,i(c),e.next=6,M(c.coord.lat,c.coord.lon);case 6:n=e.sent,b(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u()}),[t]);var h=function(e){return"-0"===e.toFixed()?0:e.toFixed()},m=s.weather&&"http://openweathermap.org/img/w/"+s.weather[0].icon+".png";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"row no-gutters mb-3",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("h4",{className:"text-center mb-3",children:["Weather in ",s.name]})}),Object(n.jsxs)("div",{className:"col-12 bg-dark text-center text-white",children:[s.main&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"display-4",children:s.main.temp.toFixed()+" \xb0C"}),Object(n.jsx)("p",{className:"badge badge-secondary",children:"Feel like: "+s.main.feels_like.toFixed()+" \xb0C"})]}),s.weather&&Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:s.weather[0].main}),Object(n.jsx)("img",{src:m,alt:s.weather[0].description,title:s.weather[0].description})]}),Object(n.jsxs)("ul",{className:"list-inline",children:[s.main&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("li",{className:"list-inline-item mr-4",children:["Humidity ",Object(n.jsx)("br",{})," ",s.main.humidity+" %"]}),Object(n.jsxs)("li",{className:"list-inline-item mr-4",children:["Pressure ",Object(n.jsx)("br",{})," ",s.main.pressure+" hPa"]})]}),s.wind&&Object(n.jsxs)("li",{className:"list-inline-item",children:["Wind Speed ",Object(n.jsx)("br",{})," ",s.wind.speed+" m/s"]})]})]})]}),Object(n.jsxs)("div",{className:"row no-gutters",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h4",{className:"text-center",children:"Hourly temperature"})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("ul",{className:"temp mb-5",children:j.hourly&&j.hourly.map((function(e,t){return t<20&&Object(n.jsxs)("li",{className:"temp-item",style:{width:"5%"},children:[Object(n.jsx)("span",{className:"temp-item-value",style:{top:50-e.temp+"%",backgroundColor:(c=e.temp,1===Math.sign(h(c))?"orange":-1===Math.sign(h(c))?"skyblue":"grey")},children:h(e.temp)}),Object(n.jsx)("span",{className:"temp-item-time",children:new Date(1e3*e.dt).getHours()+":00"})]},t);var c}))})})]}),Object(n.jsx)("div",{className:"row no-gutters",children:Object(n.jsxs)("div",{className:"col-12 text-center",children:[Object(n.jsxs)("p",{className:"bg-dark text-white",children:["Time of data calculation:"," ",new Date(1e3*s.dt).toLocaleString()]}),Object(n.jsx)("button",{className:"btn btn-secondary",onClick:function(){return u(t),void e(A("Data updated","success"))},children:"Update weather"})]})})]})}),q=function(){return Object(n.jsxs)(y.d,{children:[Object(n.jsx)(y.b,{exact:!0,path:"/",children:Object(n.jsx)(U,{})}),Object(n.jsx)(y.b,{exact:!0,path:"/:city",children:Object(n.jsx)(J,{})}),Object(n.jsx)(y.a,{to:"/"})]})},V=function(e){return e.alert},Y=function(){var e=Object(l.b)(),t=Object(l.c)(V);return t.visible&&Object(n.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible mt-3"),children:[Object(n.jsx)("strong",{children:"Attention!"})," ",t.text,Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e(T())},children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},B=c(42),z=c(43),G=a.a.forwardRef((function(e,t){var c=e.onChange,r=Object(z.a)(e,["onChange"]);return Object(n.jsx)("input",Object(u.a)(Object(u.a)({},r),{},{ref:t,onChange:c}))})),K=function(){var e=Object(l.b)(),t=Object(l.c)(P).cities,c=Object(y.g)(),r=Object(B.a)(),a=r.register,s=r.handleSubmit,i=r.setValue;localStorage.setItem("cities",JSON.stringify(t));var d=function(){var c=Object(S.a)(C.a.mark((function c(n){var r,a;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r=n.city){c.next=4;break}return e(A("Enter city")),c.abrupt("return");case 4:return c.prev=4,c.next=7,W(r);case 7:a=c.sent,t.some((function(e){return e===a.id}))?e(A("City exists")):(e((s=a.id,{type:x,payload:s})),i("city","")),c.next=14;break;case 12:c.prev=12,c.t0=c.catch(4);case 14:case"end":return c.stop()}var s}),c,null,[[4,12]])})));return function(e){return c.apply(this,arguments)}}();return Object(n.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark mb-3",children:[Object(n.jsx)(o.c,{to:"/",exact:!0,className:"navbar-brand",children:"Weather App"}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:[Object(n.jsx)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{to:"/",exact:!0,className:"nav-link",activeClassName:"active",children:"Home"})})}),"/"===c.pathname&&Object(n.jsx)("form",{onSubmit:s(d),children:Object(n.jsxs)("div",{className:"form-inline",children:[Object(n.jsx)(G,{className:"form-control",type:"text",name:"city",placeholder:"Add new city",ref:a()}),Object(n.jsx)("button",{className:"btn btn-warning",type:"submit",children:"Add"})]})})]})]})},Q=function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(K,{}),Object(n.jsx)(Y,{}),Object(n.jsx)(q,{})]})};var X=function(){return Object(n.jsx)(N,{children:Object(n.jsx)(Q,{})})};c(74);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.748ff4df.chunk.js.map