(window.webpackJsonp=window.webpackJsonp||[]).push([[37,9],{523:function(t,e,r){var content=r(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("b1bed018",content,!0,{sourceMap:!1})},524:function(t,e,r){var n=r(15)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},527:function(t,e,r){"use strict";r.r(e);r(69);var n=r(20),c=r(37),o=r(32),l=r(19),f=r(10),d=(r(8),r(40));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({required:!0})],m.prototype,"items",void 0);var y=m=v([d.Component],m),O=r(54),j=r(59),_=r.n(j),w=r(533),k=r(513),x=r(190),P=r(74),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBreadcrumbs:w.a,VContainer:k.a,VIcon:x.a,VSheet:P.a})},533:function(t,e,r){"use strict";r(7),r(5),r(6),r(8),r(9),r(13);var n=r(1),c=(r(61),r(523),r(63)),o=r(3);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,f(f({},data),{},{attrs:f(f({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(0),v=Object(h.h)("v-breadcrumbs__divider","li"),m=r(14);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(d,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},652:function(t,e,r){"use strict";r.r(e);r(69);var n=r(20),c=r(33),o=r(37),l=r(32),f=r(19),d=r(10),h=(r(8),r(40)),v=r(527);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(o.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).title=t.$t("data_set"),t.baseUrl="https://static.toyobunko-lab.jp/suikeichuzu",t}return Object(c.a)(r,[{key:"headers",get:function(){return[{text:this.$t("name"),value:"label"},{text:this.$t("format"),value:"type"},{text:this.$t("download"),value:"dwn"},{text:this.$t("viewer"),value:"url"}]}},{key:"items",get:function(){return[{"@id":"https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json",label:this.$t("book_list"),type:this.$t("iiif_collection"),url:"https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json"},{"@id":"https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json",label:this.$t("map_list"),type:this.$t("iiif_collection"),url:"https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json"}]}},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),r}(h.Vue),j=O=y([Object(h.Component)({components:{Breadcrumbs:v.default}})],O),_=r(54),w=r(59),k=r.n(w),x=r(253),P=r(515),$=r(513),R=r(642),C=r(190),D=r(516),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",{staticClass:"mb-5"},[t._v(t._s(t.title))]),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.dwn",fn:function(e){var n=e.item;return[r("v-btn",{attrs:{icon:"",href:n["@id"],color:"primary"}},[r("v-icon",[t._v("mdi-file-download")])],1)]}},{key:"item.url",fn:function(e){var n=e.item;return[r("v-btn",{staticClass:"my-2",attrs:{color:"primary",href:n.url,target:"_blank"}},[t._v("\n          "+t._s(t.$t("view"))+"\n        ")])]}}])}),t._v(" "),t._l(t.items,(function(e,r){return t._e()}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:x.a,VCol:P.a,VContainer:$.a,VDataTable:R.a,VIcon:C.a,VRow:D.a})}}]);