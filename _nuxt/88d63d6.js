(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(363),n(94)),c=n(111),l=n.n(c),f=n(539),v=n(540),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-container",{staticClass:"my-5"},[404===t.error.statusCode?n("h1",[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):n("h1",[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)],1)}),[],!1,null,"66a519aa",null);e.a=component.exports;l()(component,{VApp:f.a,VContainer:v.a})},224:function(t,e,n){"use strict";(function(t){var r=n(28),o=n(39),c=(n(80),function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"formatArrayValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";if(null==t)return"";if(1===t.length)return t[0];var n=t.join(e);return n}},{key:"getProjectFooter",value:function(e){return"ja"===e?t.env.projectFooterJa:t.env.projectFooterEn}},{key:"getProjectName",value:function(e){return"ja"===e?t.env.projectNameJa:t.env.projectNameEn}},{key:"getProjectDescription",value:function(e){return"ja"===e?t.env.projectDescriptionJa:t.env.projectDescriptionEn}},{key:"truncate",value:function(t,e){return t&&t["@id"]?"":(t=String(t)).length<=e?t:t.substring(0,e)+"..."}}]),e}());e.a=function(t,e){e("utils",new c)}}).call(this,n(202))},225:function(t,e,n){"use strict";n(43),n(36),n(51),n(40),n(10),n(53),n(58),n(46);var r=n(28),o=n(39);n(23),n(81),n(11),n(38),n(64),n(74),n(75),n(80),n(45);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"splitKeyword",value:function(t){for(var e=t.replace(/　/g," ").split(" ").filter((function(t){return""!==t})),n=[],i=0;i<e.length;i++){var r=e[i],o=r.split(":");2===o.length?n.push({label:"q-"+o[0].trim(),value:o[1].trim()}):n.push({label:"keyword",value:r})}return n}},{key:"highlightRelation",value:function(t,e){var n=[];if(!e)return t;var r,o=c(e.split("　").join(" ").split(" "));try{for(o.s();!(r=o.n()).done;){var l=r.value;l&&!n.includes(l)&&n.push(l)}}catch(t){o.e(t)}finally{o.f()}t=String(t).replace(/<[^>]*>?/gm,"");var f,map={},v=c(n.sort((function(a,b){return b.length-a.length})));try{for(v.s();!(f=v.n()).done;){var d=f.value,h=(new Date).getTime().toString(16)+Math.floor(1e3*Math.random()).toString(16);map[h]='<span style="font-weight: bold; background-color: #FFF59D;">'+d+"</span>",t=t.split(d).join(h)}}catch(t){v.e(t)}finally{v.f()}for(var y in map)t=t.split(y).join(map[y]);return t}}]),t}();e.a=function(t,e){e("searchUtils",new f)}},226:function(t,e,n){"use strict";var r=n(2),o=n(520),c=n(521),l=n(522),f=n(523),v=n(524),d=(n(463),n(27));r.default.component("LMap",o.a),r.default.component("LTileLayer",c.a),r.default.component("LMarker",l.a),r.default.component("LControlLayers",f.a),r.default.component("LPopup",v.a),delete d.Icon.Default.prototype._getIconUrl,d.Icon.Default.mergeOptions({iconRetinaUrl:n(468),iconUrl:n(295),shadowUrl:n(469)})},227:function(t,e,n){"use strict";var r=n(2),o=n(317);r.default.use(o.a)},275:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7750648c",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("56b15182",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);n(88);var r=n(28),o=n(39),c=n(47),l=n(42),f=n(31),v=n(17),d=(n(15),n(38),n(178),n(95));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).q="",t}return Object(o.a)(n,[{key:"watchRoute",value:function(){var t=this.$route.query;t["main[query]"]&&(this.q=t["main[query]"])}},{key:"trigger",value:function(t){13===t.keyCode&&this.search()}},{key:"created",value:function(){var t=this.$route.query;t["main[query]"]&&(this.q=t["main[query]"])}},{key:"search",value:function(){var t=this.q;t||(t="");for(var e=this.$searchUtils.splitKeyword(t),n=Object.assign({},this.$route.query),r=[],i=0;i<e.length;i++){var o=e[i];"keyword"===o.label&&r.push(o.value)}n["main[query]"]=t,n["main[page]"]=1,this.$router.push(this.localePath({name:"search",query:n}),(function(){}),(function(){}))}}]),n}(d.Vue);y([Object(d.Prop)({default:"white"})],m.prototype,"backgroundColor",void 0),y([Object(d.Watch)("$route")],m.prototype,"watchRoute",null);var j=m=y([Object(d.Component)({})],m),_=n(94),k=n(111),w=n.n(k),O=n(531),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{attrs:{light:"","single-line":"",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("search"),clearable:"","clear-icon":"mdi-close-circle","append-icon":"mdi-magnify","background-color":t.backgroundColor},on:{"click:append":t.search,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})}),[],!1,null,null,null);e.default=component.exports;w()(component,{VTextField:O.a})},318:function(t,e,n){"use strict";n(88);var r=n(28),o=n(39),c=n(47),l=n(42),f=n(31),v=n(17),d=(n(15),n(95)),h=n(301);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).fab=!1,t.drawer=!1,t.baseUrl="https://static.toyobunko-lab.jp/suikeichuzu",t.title=t.$t("水経注図"),t.footer=t.$t("東洋文庫"),t}return Object(o.a)(n,[{key:"onScroll",value:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}}},{key:"toTop",value:function(){this.$vuetify.goTo(0)}}]),n}(d.Vue),_=j=m([Object(d.Component)({components:{FullTextSearch:h.default}})],j),k=(n(400),n(94)),w=n(111),O=n.n(w),x=n(539),V=n(546),R=n(541),C=n(241),S=n(540),$=n(542),P=n(217),L=n(218),F=n(136),E=n(219),N=n(109),T=n(543),A=n(528),D=n(544),I=n(545),M=n(306),U=n(307),B=n.n(U),J=n(171),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{link:"",to:t.localePath({name:"index"}),exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath({name:"search"})}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("search")))])],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{dark:""}},[t._e(),t._v(" "),n("v-toolbar-title",[n("nuxt-link",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{to:t.localePath({name:"index"})}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?[n("div",{staticClass:"ml-10"},[n("FullTextSearch")],1)]:t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:""}},r),[n("v-icon",[t._v("mdi-translate")]),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?n("span",{staticClass:"ml-2"},[n("v-icon",{staticClass:"ml-2"},[t._v("mdi-menu-down")])],1):t._e()],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],2)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[n("v-container",[n("p",{staticClass:"text-center my-5"},[t._v("\n        "+t._s(t.$t(t.footer))+"\n      ")])])],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",large:"",color:"error"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;O()(component,{VApp:x.a,VAppBar:V.a,VAppBarNavIcon:R.a,VBtn:C.a,VContainer:S.a,VFooter:$.a,VIcon:P.a,VList:L.a,VListItem:F.a,VListItemAction:E.a,VListItemContent:N.a,VListItemTitle:N.b,VMain:T.a,VMenu:A.a,VNavigationDrawer:D.a,VSpacer:I.a,VToolbarTitle:M.a}),B()(component,{Scroll:J.b})},340:function(t,e,n){n(341),t.exports=n(342)},363:function(t,e,n){"use strict";n(275)},364:function(t,e,n){var r=n(19)(!1);r.push([t.i,"h1[data-v-66a519aa]{font-size:20px}",""]),t.exports=r},400:function(t,e,n){"use strict";n(284)},401:function(t,e,n){var r=n(19)(!1);r.push([t.i,"tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}*{text-transform:none!important}a{text-decoration:none!important}",""]),t.exports=r},462:function(t,e,n){var map={"./ja":206,"./ja.js":206};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=462}},[[340,28,5,29]]]);