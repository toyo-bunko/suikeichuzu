(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{631:function(e,t,n){var content=n(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("29daf1c1",content,!0,{sourceMap:!1})},672:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=672},675:function(e,t,n){"use strict";n(631)},676:function(e,t,n){var r=n(19)(!1);r.push([e.i,".badge-secondary{color:#fff;background-color:#6c757d}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.openseadragon-canvas{outline:none;background-color:#f4f4f4!important}svg.a9s-annotationlayer .a9s-annotation .a9s-inner,svg.a9s-annotationlayer .a9s-selection .a9s-inner{stroke:#1976d2}",""]),e.exports=r},701:function(e,t,n){"use strict";n.r(t);n(43),n(22),n(29),n(48),n(37),n(9),n(51),n(54),n(41);var r=n(24),l=(n(79),n(56),n(67),n(38),n(60),n(33),n(77),n(40),n(25),n(124)),o=n.n(l),c=n(630),d=n.n(c),v=n(671);n(673);function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw l}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=function(e){var t=document.createElement("div");t.className="pa-2";var n=document.createElement("div");n.className="mt-2",t.appendChild(n);var r=document.createElement("div");return r.className="mt-2",t.appendChild(r),e.annotation.body.map((function(body){var e,div,t,button;"tagging"==body.purpose?r.appendChild((t=body.value,(button=document.createElement("span")).className="badge badge-secondary mx-1 pa-2",button.innerHTML=t,button)):n.appendChild((e=body.value,(div=document.createElement("div")).innerHTML=e.trim(),div.firstChild))})),t};var y={components:{},data:function(){return{dialog:!1,detail:{},baseUrl:"https://static.toyobunko-lab.jp/suikeichuzu",search:"",headers:[{text:this.$t("name"),value:"label"},{text:"分類",value:"category"},{text:"記号説明",value:"kigo"},{text:"詳細",value:"detail",sortable:!1}],rows:[],viewer:null,anno:null,tabs:"",items:[],thres:2e3,alert:!1,details:[{label:"冊",value:"冊"},{label:"記号",value:"記号"},{label:"図",value:"図"},{label:"区画南北",value:"区画南北"},{label:"区画東西",value:"区画東西"},{label:"墨朱",value:"墨朱"},{label:"表裏",value:"表裏"},{label:"分類",value:"分類"},{label:"記号説明",value:"記号説明"},{label:"詳細区画",value:"詳細区画"},{label:"水名",value:"水名"},{label:"水経注：巻",value:"水経注：巻"},{label:"備考",value:"備考",type:"text"},{label:"水経注図：冊子画像",value:"水経注図：冊子画像",type:"link"}],hide:["sort"]}},props:{itemsAll:{required:!0},aggs:{required:!0}},mounted:function(){this.init()},methods:{zoom:function(e){this.anno.fitBounds(e)},init:function(){this.alert=!1;var e=this.aggs["図"].value,t={main:{label:"本図"},saiiki:{label:"西域"},etsunan:{label:"越南"},ukou:{label:"禹貢山水澤地所在"},jouzu01_rekijou:{label:"歴城図"},jouzu02_gyoujou:{label:"鄴城図"},jouzu03_rakuyou:{label:"洛陽城図"},jouzu04_chouan:{label:"長安城図"},jouzu05_suiyou:{label:"睢陽城図"},jouzu06_heijou:{label:"平城図"},jouzu07_keijou:{label:"薊城図"},jouzu08_rojou:{label:"魯城図"},jouzu09_rinshi:{label:"臨淄城図"},jouzu10_jouyou:{label:"襄陽城図"},jouzu11_jushun:{label:"寿春城図"},jouzu12_seito:{label:"成都橋図"},jouzu13_sanin:{label:"山陰城図"}},map={};for(var n in t)map[t[n].label]=n;var r,l=[],o={},c=f(e);try{for(c.s();!(r=c.n()).done;){var d=r.value,label=d[0],v=d[1],h=map[label];l.push({id:h,label:label,value:v,annos:[],rows:[]}),o[label]=l.length-1}}catch(e){c.e(e)}finally{c.f()}var m,y=0,_=f(this.itemsAll);try{for(_.s();!(m=_.n()).done;){var w=m.value,x=l[o[w["図"][0]]],k=w.member.split("=")[1];x.image=w.thumbnail.split("/"+k)[0]+"/info.json";var j=x.annos,C=x.rows,body=[{type:"TextualBody",value:'<div><a href="'.concat(this.baseUrl+"/item/"+w.objectID,'">').concat(w.label,"</a></div>")}];for(var V in w){var A=this.$utils.formatArrayValue(w[V]);A&&("".concat(A).startsWith("http")||["objectID","fulltext","label","sort"].includes(V)||body.push({type:"TextualBody",purpose:"tagging",value:V+": "+A}))}var z={"@context":"http://www.w3.org/ns/anno.jsonld",id:w.objectID,type:"Annotation",body:body,target:{selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:w.member.split("#")[1]}}};if(j.push(z),C.push({id:w.objectID,label:w.label,category:this.$utils.formatArrayValue(w["分類"]),kigo:this.$utils.formatArrayValue(w["記号説明"]),index:y}),(y+=1)>=this.thres&&this.thres>0){this.alert=!0;break}}}catch(e){_.e(e)}finally{_.f()}for(var T=[],S=0,D=l;S<D.length;S++){var E=D[S];E.annos.length>0&&(E.value=E.annos.length,T.push(E))}this.items=T},update:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("openseadragon").innerHTML="",n=e.items[Number(e.tabs)],t.next=4,o.a.get(n.image);case 4:r=t.sent,l=r.data,c=d()({id:"openseadragon",prefixUrl:"https://recogito.github.io/js/openseadragon/images/",tileSources:l}),e.viewer=c,f=v(c,{readOnly:!0,locale:"auto",widgets:[m]}),e.anno=f,f.setAnnotations(n.annos),e.rows=n.rows;case 13:case"end":return t.stop()}}),t)})))()},showAll:function(){this.thres=-1,this.init(),this.update()}},watch:{tabs:function(e){this.update()},aggs:function(){this.init(),this.update()}}},_=(n(675),n(97)),w=n(111),x=n.n(w),k=n(712),j=n(246),C=n(224),V=n(181),A=n(597),z=n(697),T=n(658),S=n(562),D=n(226),E=n(598),I=n(603),$=n(576),O=n(665),M=n(686),N=n(566),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-tabs",{staticClass:"my-5",model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},e._l(e.items,(function(t,r){return n("v-tab",{key:r,staticClass:"primary--text",attrs:{href:"#"+r}},[e._v("\n          "+e._s(t.label)+" ("+e._s(t.value.toLocaleString())+" "+e._s(e.$t("results"))+")\n        ")])})),1),e._v(" "),e.alert?n("v-alert",{staticClass:"my-5",attrs:{type:"warning",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[e._v("\n            上位 "+e._s(e.thres.toLocaleString())+" 件の結果のみを表示しています。全件を表示するには、検索結果を絞り込んでください。もしくは、表示に時間がかかる可能性がありますが、右のボタンから全件を表示してください。\n          ")]),e._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.showAll()}}},[e._v("全件表示")])],1)],1)],1):e._e(),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-data-table",{attrs:{headers:e.headers,items:e.rows,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"mx-4 my-5",attrs:{"background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",placeholder:e.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle",label:e.$t("search")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"item.label",fn:function(t){var r=t.item;return[n("a",{on:{click:function(t){return e.zoom(r.id)}}},[e._v(e._s(r.label))])]}},{key:"item.detail",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{target:"_blank",icon:"",color:"primary"},on:{click:function(t){e.detail=e.itemsAll[r.index],e.dialog=!0}}},[n("v-icon",[e._v("mdi-menu")])],1)]}}])})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticStyle:{height:"600px",width:"100%"},attrs:{id:"openseadragon"}})])],1),e._v(" "),n("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[n("span",{staticClass:"text-h5"},[e._v(e._s(e.detail.label))])]),e._v(" "),n("v-card-text",{staticClass:"py-5",staticStyle:{height:"600px","overflow-y":"auto"}},[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("tbody",[e._l(e.details,(function(t,r){return[!e.hide[t.value]&&e.detail[t.value]&&e.detail[t.value].length>0?n("tr",{key:r},[n("td",[e._v(e._s(t.value))]),e._v(" "),n("td",[e._v(e._s(e.$utils.formatArrayValue(e.detail[t.value])))])]):e._e()]}))],2)]},proxy:!0}])})],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n              "+e._s("閉じる")+"\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",to:e.localePath({name:"item-id",params:{id:e.detail.objectID}})}},[e._v("\n              "+e._s("詳細を開く")+"\n            ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VAlert:k.a,VBtn:j.a,VCard:C.a,VCardActions:V.a,VCardText:V.b,VCardTitle:V.c,VCol:A.a,VDataTable:z.a,VDialog:T.a,VDivider:S.a,VIcon:D.a,VRow:E.a,VSimpleTable:I.a,VSpacer:$.a,VTab:O.a,VTabs:M.a,VTextField:N.a})}}]);