(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,12,13,14,17],{582:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("dc0628f2",content,!0,{sourceMap:!1})},583:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},584:function(t,e,n){"use strict";n.r(e);n(90);var o=n(28),r=n(42),c=n(47),l=n(45),f=n(32),h=n(17),d=(n(14),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://static.toyobunko-lab.jp/suikeichuzu",t}return Object(r.a)(n,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(n){n.clipboardData.setData("text/plain",t),n.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),n}(d.Vue);m([Object(d.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(d.Prop)({required:!0})],y.prototype,"title",void 0);var O=y=m([d.Component],y),j=n(97),_=n(111),x=n.n(_),k=n(246),w=n(224),R=n(226),C=n(593),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},o),[n("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Twitter"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},o),[n("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Facebook"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},o),[n("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),n("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:k.a,VCard:w.a,VIcon:R.a,VTooltip:C.a})},587:function(t,e,n){"use strict";n.r(e);n(90);var o=n(28),r=n(42),c=n(47),l=n(45),f=n(32),h=n(17),d=(n(14),n(91)),v=n(584);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),n}(d.Vue);y([Object(d.Prop)()],O.prototype,"item",void 0);var j=O=y([Object(d.Component)({components:{ShareButtons:v.default}})],O),_=n(97),x=n(111),k=n.n(x),w=n(246),R=n(226),C=n(563),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},o),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),n("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:w.a,VIcon:R.a,VMenu:C.a})},590:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("163b530e",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";var o=n(3),r=(n(25),n(582),n(123)),c=n(34),l=n(147),f=n(146),h=n(240),d=n(183),v=n(61),m=n(1),y=n(13),O=n(6);e.a=Object(O.a)(c.a,l.a,f.a,h.a,d.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.g)(this.maxWidth),minWidth:Object(m.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.s)(this,"activator",!0)&&Object(y.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===m.w.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},596:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cdc2c944",content,!0,{sourceMap:!1})},599:function(t,e,n){"use strict";n(590)},600:function(t,e,n){var o=n(19)(!1);o.push([t.i,"a{text-decoration:none}",""]),t.exports=o},604:function(t,e,n){"use strict";n.r(e);n(90);var o=n(28),r=n(47),c=n(45),l=n(32),f=n(17),h=(n(14),n(91)),d=n(587);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(r.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(h.Vue);m([Object(h.Prop)({required:!0})],y.prototype,"item",void 0),m([Object(h.Prop)({default:300})],y.prototype,"width",void 0),m([Object(h.Prop)({default:300})],y.prototype,"height",void 0),m([Object(h.Prop)({default:!1})],y.prototype,"horizontal",void 0);var O=y=m([Object(h.Component)({components:{ResultOption:d.default}})],y),j=(n(599),n(97)),_=n(111),x=n.n(_),k=n(224),w=n(181),R=n(562),C=n(178),P=n(576),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{class:t.horizontal?"":"mb-4",style:t.horizontal?"width: "+t.width+"px;":"",attrs:{"no-body":"",flat:"",outlined:""}},[t.item.thumbnail?n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:t.item.objectID}})}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.item.thumbnail,contain:"",width:"100%"}})],1):t._e(),t._v(" "),n("div",{staticClass:"pa-4",style:t.horizontal?"width: "+t.width+"px; height: "+t.height+"px; overflow-y: auto;":""},[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:t.item.objectID}})}},[n("h4",{domProps:{innerHTML:t._s(t.item.label)}})]),t._v(" "),[n("div",{staticClass:"mt-2",domProps:{innerHTML:t._s(t.item.attribution)}})]],2),t._v(" "),t.item.share_hide?t._e():[n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("ResultOption",{attrs:{item:{label:t.item.label,url:"aaa"}}})],1)]],2)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCard:k.a,VCardActions:w.a,VDivider:R.a,VImg:C.a,VSpacer:P.a})},606:function(t,e,n){"use strict";n(596)},607:function(t,e,n){var o=n(19)(!1);o.push([t.i,".horizontal-list{overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-left:0!important;padding-right:0}.item{display:inline-block;margin-right:16px;margin-left:16px}",""]),t.exports=o},609:function(t,e,n){"use strict";n.r(e);n(90);var o=n(28),r=n(47),c=n(45),l=n(32),f=n(17),h=(n(14),n(91)),d=n(604);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(r.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(h.Vue);m([Object(h.Prop)({default:240})],y.prototype,"width",void 0),m([Object(h.Prop)({default:300})],y.prototype,"height",void 0),m([Object(h.Prop)({default:[]})],y.prototype,"data",void 0);var O=y=m([Object(h.Component)({components:{CardItem:d.default}})],y),j=(n(606),n(97)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"horizontal-list"},t._l(t.data,(function(e,o){return n("li",{key:o,staticClass:"item"},[n("CardItem",{key:"value_"+o,staticClass:"mt-2 mb-4",attrs:{horizontal:!0,item:e,width:t.width,height:t.height}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},636:function(t,e,n){"use strict";n.r(e);n(90);var o=n(28),r=n(42),c=n(47),l=n(45),f=n(32),h=n(17),d=(n(14),n(91)),v=n(609);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://static.toyobunko-lab.jp/suikeichuzu",t}return Object(r.a)(n,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:function(){this.item.texts&&(this.moreLikeThisData=this.item.texts)}}]),n}(d.Vue);y([Object(d.Prop)({required:!0})],O.prototype,"item",void 0),y([Object(d.Watch)("itemId")],O.prototype,"watchId",null);var j=O=y([Object(d.Component)({components:{HorizontalItems:v.default}})],O),_=n(97),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.moreLikeThisData.length>0?n("div",[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"my-5"},[t._v(t._s(t.$t("タイトルが似ているアイテム")))])]),t._v(" "),n("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);