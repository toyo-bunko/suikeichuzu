(window.webpackJsonp=window.webpackJsonp||[]).push([[25,10,16,20],{525:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("dc0628f2",content,!0,{sourceMap:!1})},526:function(t,e,n){var o=n(15)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},528:function(t,e,n){"use strict";n.r(e);n(69);var o=n(20),r=n(33),c=n(37),l=n(32),f=n(19),h=n(10),v=(n(8),n(40));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://static.toyobunko-lab.jp/suikeichuzu",t}return Object(r.a)(n,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(n){n.clipboardData.setData("text/plain",t),n.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),n}(v.Vue);m([Object(v.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(v.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=m([v.Component],y),O=n(54),j=n(59),k=n.n(j),x=n(253),w=n(234),R=n(190),C=n(538),component=Object(O.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},o),[n("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Twitter"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},o),[n("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Facebook"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},o),[n("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),n("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:x.a,VCard:w.a,VIcon:R.a,VTooltip:C.a})},529:function(t,e,n){"use strict";n.r(e);n(69);var o=n(20),r=n(33),c=n(37),l=n(32),f=n(19),h=n(10),v=(n(8),n(40)),d=n(528);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),n}(v.Vue);y([Object(v.Prop)()],_.prototype,"item",void 0);var O=_=y([Object(v.Component)({components:{ShareButtons:d.default}})],_),j=n(54),k=n(59),x=n.n(k),w=n(253),R=n(190),C=n(238),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},o),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),n("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VIcon:R.a,VMenu:C.a})},538:function(t,e,n){"use strict";var o=n(1),r=(n(21),n(525),n(103)),c=n(22),l=n(146),f=n(93),h=n(147),v=n(199),d=n(50),m=n(0),y=n(12),_=n(3);e.a=Object(_.a)(c.a,l.a,f.a,h.a,v.a,d.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.g)(this.maxWidth),minWidth:Object(m.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.s)(this,"activator",!0)&&Object(y.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===m.w.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},658:function(t,e,n){"use strict";n.r(e);n(69);var o=n(20),r=n(37),c=n(32),l=n(19),f=n(10),h=(n(8),n(40)),v=n(529);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(r.a)(n,t);var e=d(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).metadataList=["冊","図"],t}return n}(h.Vue);m([Object(h.Prop)({})],y.prototype,"items",void 0),m([Object(h.Prop)({})],y.prototype,"q",void 0);var _=y=m([Object(h.Component)({components:{ResultOption:v.default}})],y),O=n(54),j=n(59),k=n.n(j),x=n(515),w=n(190),R=n(195),C=n(516),component=Object(O.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},t._l(t.items.hits,(function(e,o){return n("v-row",{key:o},[n("v-col",{attrs:{cols:"12",sm:"3"}},[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{contain:"","max-height":"150",width:"100%",src:e._source.thumbnail}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"9"}},[n("h3",[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})},domProps:{innerHTML:t._s(t.$utils.highlightRelation(e._source.label,t.q))}})],1),t._v(" "),n("div",{staticClass:"my-2"},[t._l(t.metadataList,(function(o,r){return[n("span",{key:r},[n("b",[t._v(t._s(o)+": ")]),t._v(t._s(t.$utils.formatArrayValue(e._source[o]))+"\n\n            "),r!=t.metadataList.length-1?n("span",{staticClass:"mr-2"},[t._v(",")]):t._e()])]})),t._v(" "),e._source.description?n("p",[t._l(e._source.description,(function(o,r){return[o.length<50?n("small",{key:r},[n("span",{domProps:{innerHTML:t._s(t.$utils.highlightRelation(o,t.q))}}),t._v(" "),r!==e._source.description.length?n("span",[t._v(" / ")]):t._e()]):t._e()]}))],2):t._e(),t._v(" "),t._e()],2),t._v(" "),t._e()])],1)})),1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VCol:x.a,VIcon:w.a,VImg:R.a,VRow:C.a})}}]);