(this.webpackJsonpnewrobofriends=this.webpackJsonpnewrobofriends||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={Card:"card_Card__2tWcJ"}},function(e,t,n){e.exports={CardList:"cardlist_CardList__NNF_m"}},function(e,t,n){e.exports={search__input:"searchbox_search__input__3b1NG"}},function(e,t,n){e.exports={Scroll:"scroll_Scroll__3IYzZ"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(17),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),m=(n(18),n(8)),d=n.n(m),f=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:d.a.Card},r.a.createElement("img",{alt:"robots",width:"200",height:"200",src:"https://robohash.org/".concat(a,"?set=set2")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",t," "),r.a.createElement("h3",null," ",n," ")))},p=n(9),b=n.n(p),v=function(e){var t=e.robots;return r.a.createElement("div",{className:b.a.CardList},t.map((function(e){return r.a.createElement(f,{key:e.id,name:e.name,email:e.email,id:e.id})})))},E=n(10),_=n.n(E),g=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:_.a.search__input,placeholder:"Search robots",onChange:t}))},C=n(11),w=n.n(C),j=function(e){return r.a.createElement("div",{className:w.a.Scroll},e.children)},O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Something went wrong! "):this.props.children}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSearchChange=function(e){n.setState({searchfield:e.target.value})},n.state={robots:[],searchfield:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length<=0?r.a.createElement("h1",null," Loading "):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Robofriends "),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(v,{robots:t}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.759c414a.chunk.js.map