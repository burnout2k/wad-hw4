(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"11f1":function(e,t,n){},"31e7":function(e,t,n){"use strict";var r=n("7093"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Users",{attrs:{users:e.users,onChange:e.changeSelectedUser}}),n("List",{attrs:{list:e.list}}),n("Footer",{attrs:{add:e.addToList}})],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.sortedList.length?n("div",e._l(e.sortedList,(function(t,r){return n("div",{key:r,staticClass:"list-item",class:{done:t.done}},[n("div",{staticClass:"title"},[e._v(e._s(t.title))]),n("div",[n("span",{on:{click:function(){e.toggle(t)}}})])])})),0):n("div",[n("h3",[e._v("Add your first Todo task")])])])},i=[],u=(n("4e82"),{name:"List",methods:{toggle:function(e){e.done=!e.done}},computed:{sortedList:function(){var e=this.list;return e.sort((function(e,t){return e.done===t.done?0:e.done?1:-1}))}},props:{list:{type:Array,default:function(){return[]}}}}),c=u,l=(n("bf4b"),n("2877")),d=Object(l["a"])(c,o,i,!1,null,"1c94ed40",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"date"},[n("h1",[e._v(e._s(e.day))]),n("div",[n("h4",{staticClass:"strong"},[e._v(e._s(e._f("abbreviate")(e._f("uppercase")(e.month))))]),n("h4",[e._v(e._s(e.year))])])]),n("h4",[e._v(e._s(e._f("uppercase")(e.weekday)))])])},h=[],v=(n("fb6a"),n("0d03"),{name:"Header",data:function(){return{today:new Date}},filters:{uppercase:function(e){return e.toUpperCase()},abbreviate:function(e){return e.slice(0,3)}},computed:{day:function(){var e=this.today.getDate();return e<10?"0".concat(e):e},month:function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[this.today.getMonth()]},year:function(){return this.today.getFullYear()},weekday:function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return e[this.today.getDay()]}}}),y=v,b=(n("31e7"),Object(l["a"])(y,p,h,!1,null,"3ed26e24",null)),m=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.open?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"Please enter a title...",autofocus:""},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)},input:function(t){t.target.composing||(e.title=t.target.value)}}})]):n("div",[n("span",{on:{click:function(t){e.open=!0}}},[e._v("+")])])])},g=[],k={name:"Footer",data:function(){return{title:"",open:!1}},methods:{addItem:function(){this.$props.add(this.title),this.title="",this.open=!1}},props:{add:Function}},w=k,O=(n("92ec"),Object(l["a"])(w,_,g,!1,null,"4c0e1b3c",null)),j=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{on:{change:function(t){return e.onChange(t.target.value)}}},e._l(e.users,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)])},U=[],C={name:"Users",props:{users:Array,onChange:Function}},T=C,S=Object(l["a"])(T,x,U,!1,null,null,null),F=S.exports,P=(n("b0c0"),n("9f12")),L=function e(t,n){Object(P["a"])(this,e),this.id=t,this.name=n},M=n("bc3a"),$=n.n(M),E={name:"app",methods:{addToList:function(e){var t=this;$.a.post("http://localhost:3000/users/"+this.selectedUserId+"/tasks",{title:e}).then((function(e){t.list.push(e.data)}))},fetchTasks:function(){var e=this;$.a.get("http://localhost:3000/users/"+this.selectedUserId+"/tasks").then((function(t){e.list=t.data}))},changeSelectedUser:function(e){this.selectedUserId=e,this.fetchTasks()}},data:function(){return{list:[],users:[new L(1,"First User"),new L(2,"Second User"),new L(3,"Third User"),new L(4,"Forth User")],selectedUserId:1}},components:{List:f,Header:m,Footer:j,Users:F},mounted:function(){this.fetchTasks()}},I=E,A=(n("034f"),Object(l["a"])(I,s,a,!1,null,null,null)),J=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(J)}}).$mount("#app")},7093:function(e,t,n){},"7b87":function(e,t,n){},"85ec":function(e,t,n){},"92ec":function(e,t,n){"use strict";var r=n("7b87"),s=n.n(r);s.a},bf4b:function(e,t,n){"use strict";var r=n("11f1"),s=n.n(r);s.a}});
//# sourceMappingURL=app.3815e9bd.js.map