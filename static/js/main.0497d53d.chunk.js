(this.webpackJsonpnewrobofriends=this.webpackJsonpnewrobofriends||[]).push([[0],{16:function(e,n,t){e.exports={Card:"card_Card__2tWcJ"}},17:function(e,n,t){e.exports={CardList:"cardlist_CardList__NNF_m"}},18:function(e,n,t){e.exports={search__input:"searchbox_search__input__3b1NG"}},19:function(e,n,t){e.exports={Scroll:"scroll_Scroll__3IYzZ"}},22:function(e,n,t){e.exports=t(34)},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(5),i=t.n(a),c=(t(27),t(6)),s=t(7),l=t(10),u=t(8),h=t(11),d=(t(28),t(16)),f=t.n(d),p=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:f.a.Card},o.a.createElement("img",{alt:"robots",width:"200",height:"200",src:"https://robohash.org/".concat(r,"?size=300x300")}),o.a.createElement("div",null,o.a.createElement("h2",null," ",n," "),o.a.createElement("h3",null," ",t," ")))},b=t(17),m=t.n(b),g=function(e){var n=e.robots;return o.a.createElement("div",{className:m.a.CardList},n.map((function(e){return o.a.createElement(p,{key:e.id,name:e.name,email:e.email,id:e.id})})))},v=t(18),E=t.n(v),w=function(e){var n=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{"aria-label":"Search robots",type:"text",className:E.a.search__input,placeholder:"Search robots",onChange:n}))},y=t(19),R=t.n(y),_=function(e){return o.a.createElement("div",{className:R.a.Scroll},e.children)},C=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={hasError:!1},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Something went wrong! "):this.props.children}}]),n}(r.Component),O="CHANGE_SEARCHFIELD",S="REQUEST_ROBOTS_PENDING",j="REQUEST_ROBOTS_SUCCESS",k="REQUEST_ROBOTS_FAILED",N=t(9),F=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onRobotsChange()}},{key:"render",value:function(){var e=this,n=this.props.robots.filter((function(n){return n.name.toLowerCase().includes(e.props.searchField.toLowerCase())}));return this.props.isPending?o.a.createElement("h1",null," Loading "):o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Robofriends "),o.a.createElement(w,{searchChange:this.props.onSearchChange}),o.a.createElement(_,null,o.a.createElement(C,null,o.a.createElement(g,{robots:n}))))}}]),n}(r.Component),L=Object(N.b)((function(e){return{searchField:e.seRR.searchField,isPending:e.reRR.isPending,robots:e.reRR.robots,err:e.reRR.err}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:O,payload:t}));var t},onRobotsChange:function(){return e((function(e){e({type:S}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:j,payload:n})})).catch((function(n){return e({type:k,payload:n})}))}))}}}))(F),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=t(3),W=t(4),T={searchField:""},U={isPending:!1,robots:[],err:""},B=t(21),D=Object(A.c)({seRR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case O:return Object(W.a)({},e,{searchField:n.payload});default:return e}},reRR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case S:return Object(W.a)({},e,{isPending:!0});case j:return Object(W.a)({},e,{robots:n.payload,isPending:!1});case k:return Object(W.a)({},e,{err:n.payload,isPending:!1});default:return e}}}),I=Object(A.d)(D,Object(A.a)(B.a));i.a.render(o.a.createElement(N.a,{store:I},o.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/newRoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/newRoboFriends","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(n,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.0497d53d.chunk.js.map