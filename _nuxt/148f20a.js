(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{586:function(t,e,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},587:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},599:function(t,e,r){"use strict";r(11),r(9),r(10),r(14),r(12),r(16);var n=r(3),c=(r(76),r(586),r(85)),o=r(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(1),v=Object(h.h)("v-breadcrumbs__divider","li"),f=r(21);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(m,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},704:function(t,e,r){"use strict";r.r(e);r(124);var n={components:{},data:function(){return{title:this.$t("冊子画像"),bh:[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("冊子画像")}],items:[[{value:"https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/sjzt.json",label:"IIIFコレクション（現在はBasic認証をかけているため、当該認証をパスできない場合、画像は閲覧できません。）"}],[{value:"https://static.toyobunko-lab.jp/suikeichuzu_data/mirador/?manifest=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/main/manifest_anno.json",label:"本図"},{value:"https://static.toyobunko-lab.jp/suikeichuzu_data/mirador/?manifest=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/etsunan/manifest_anno.json",label:"越南"},{value:"https://static.toyobunko-lab.jp/suikeichuzu_data/mirador/?manifest=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/saiiki/manifest_anno.json",label:"西域"}]]}},head:function(){return{title:this.$t("冊子画像")}}},c=r(97),o=r(111),l=r.n(o),d=r(599),m=r(575),h=r(226),v=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",{staticClass:"mb-10"},[t._v(t._s(t.title))]),t._v(" "),r("h3",{staticClass:"mb-5"},[t._v("冊子画像一覧")]),t._v(" "),r("ul",{staticClass:"mb-10"},t._l(t.items[0],(function(e,n){return r("li",{key:n,staticClass:"mb-2"},[r("a",{attrs:{href:e.value}},[t._v(t._s(e.label))])])})),0),t._v(" "),r("h3",{staticClass:"mb-2"},[t._v(t._s("画像からみる"))]),t._v(" "),r("p",{staticClass:"mb-5"},[t._v("ビューア左部の「Layers」タブを利用することにより、グリッド画像を重ねて表示できます。")]),t._v(" "),r("ul",{staticClass:"mb-5"},t._l(t.items[1],(function(e,n){return r("li",{key:n,staticClass:"mb-2"},[r("a",{attrs:{href:e.value}},[t._v(t._s(e.label))])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBreadcrumbs:d.a,VContainer:m.a,VIcon:h.a,VSheet:v.a})}}]);