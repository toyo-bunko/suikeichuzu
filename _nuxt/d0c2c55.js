(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7],{605:function(e,t,r){"use strict";r.r(t);r(90);var n=r(28),o=r(40),l=r(47),c=r(45),v=r(32),f=r(17),h=(r(14),r(91));function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(v.a)(e);if(t){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var y=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},m=r(610).a.Bar,x=function(e){Object(l.a)(r,e);var t=d(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"watchTmp",value:function(){this.main()}},{key:"mounted",value:function(){this.main()}},{key:"main",value:function(){var e={labels:this.labels,datasets:this.datasets};this.renderChart(e,{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1}}]}})}}]),r}(Object(h.mixins)(m));y([Object(h.Prop)({default:[]})],x.prototype,"labels",void 0),y([Object(h.Prop)({default:[]})],x.prototype,"datasets",void 0),y([Object(h.Watch)("datasets",{deep:!0})],x.prototype,"watchTmp",null);var w=x=y([h.Component],x),k=r(97),component=Object(k.a)(w,undefined,undefined,!1,null,null,null);t.default=component.exports},618:function(e,t,r){var content=r(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("49bd23da",content,!0,{sourceMap:!1})},651:function(e,t,r){"use strict";r(618)},652:function(e,t,r){var n=r(19)(!1);n.push([e.i,"mark{background-color:#ffc168}",""]),e.exports=n},692:function(e,t,r){"use strict";r.r(t);r(22),r(29),r(48),r(37),r(9),r(51),r(54),r(42);var n=r(17),o=r(24),l=(r(79),r(33),r(148),r(41),r(59),r(38),r(60),r(10),r(25),r(11),r(76),r(107),r(242),r(84),r(77),r(56),r(244),r(67),r(43),r(124)),c=r.n(l);function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var h=r(616);var d={components:{},data:function(){return{tabs:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",headersAggs:[{text:this.$t("name"),value:"label"},{text:this.$t("results"),value:"value"}],searchAgg:"",page:1,sort:"冊:asc",layout_:"table",size:20,total:0,items:[],ids:[],q:"",limit:5,aggs:{},facets:{},loading:!0,isShowAll:!1,selectedAggValues:[],selectedField:"group",selected:[],facetSearch:"",layouts:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"table",value:"table",icon:"mdi-table",component:"custom-search-layout-table"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"},{label:"map",value:"map",icon:"mdi-map",component:"custom-search-layout-map",hidePagination:!0}],isFacetOpen:!0,isAdvanced:!1,advancedOptions:[{label:"冊",type:"select",key:"冊",value:"",values:["1","2","3","4","5","6","7","8"]},{label:"図",type:"select",key:"図",value:"",values:["本図","越南","西域"]},{label:"区画南北",type:"select",key:"区画南北",value:"",values:["南5","南4","南3","南2","南1","中","北1","北2","北3","北4","北5"]},{label:"区画東西",type:"select",key:"区画東西",value:"",values:["東6","東5","東4","東3","東2","東1","中","西1","西2","西3","西4","西5","西6","西7","西8","西9","西10","西11","西12"]},{label:"表裏",type:"select",key:"表裏",value:"",values:["表","裏"]},{label:"詳細区画",type:"select",key:"詳細区画",value:"",values:["A1","A2","A3","B1","B2","B3","C1","C2","C3","D1","D2","D3"]},{label:"墨朱",type:"select",key:"墨朱",value:"",values:["墨","朱"]},{label:"記号",type:"select",key:"記号",value:"",values:[{value:"0",text:"なし"},{value:"1",text:"地形: 河川"},{value:"2",text:"地形: 故瀆"},{value:"3",text:"地形: 河川(異説)"},{value:"4",text:"地形: 山谷"},{value:"5",text:"地形: 湖"},{value:"6",text:"行政: 州名"},{value:"7",text:"行政: 郡名"},{value:"8",text:"行政: 県名（北魏）"},{value:"9",text:"行政: 州郡跡"},{value:"10",text:"行政: 県跡"},{value:"11",text:"行政: 旧州治の郡県"},{value:"12",text:"行政: 旧郡県の州治"},{value:"13",text:"行政: 旧県の州郡治"},{value:"14",text:"行政: 旧県の郡治"},{value:"15",text:"行政: 旧郡治の県"},{value:"16",text:"地点: 亭台跡"},{value:"17",text:"行政: 省名"},{value:"18",text:"行政: 府名"},{value:"19",text:"行政: 県名（清）"},{value:"20",text:"行政: 直隷庁"},{value:"21",text:"行政: 散庁"},{value:"22",text:"行政: 直隷州"},{value:"23",text:"行政: 散州"},{value:"24",text:"行政: 土州"},{value:"25",text:"行政: 土県・堡鎮"},{value:"26",text:"行政: 軍政長官駐在地(朝鮮の郡)"},{value:"27",text:"行政: 土府"},{value:"28",text:"地点: 長城"},{value:"29",text:"地点: 橋・津"},{value:"30",text:"地点: 井戸"},{value:"31",text:"地点: 圃"},{value:"32",text:"地点: 城壁"},{value:"33",text:"地点: 陵墓"},{value:"34",text:"地点: 長城門"},{value:"35",text:"記述: 別図参照"}]},{label:"地名/記述",type:"text",key:"地名/記述",value:""},{label:"備考",type:"text",key:"備考",value:""}],bh:[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("category"),disabled:!1,to:this.localePath({name:"category"}),exact:!0},{text:this.$route.params.slug}],metadataList:["冊","図"],sortList:[{label:"適合度",value:"_score"},{label:"冊",value:"冊"}]}},computed:{itemsAggs:function(){var e,t=[],r=v(this.aggs[this.$route.params.slug].value);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push({label:n[0],value:n[1]})}}catch(e){r.e(e)}finally{r.f()}return t.sort((function(a,b){return a.value<b.value?1:a.value>b.value?-1:0})),t},labels:function(){var e,t=[],r=v(this.itemsAggs);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push(n.label)}}catch(e){r.e(e)}finally{r.f()}return t},datasets:function(){var e,data=[],t=v(this.itemsAggs);try{for(t.s();!(e=t.n()).done;){var r=e.value;data.push(r.value)}}catch(e){t.e(e)}finally{t.f()}return[{data:data,label:this.$t("item")}]},length:function(){return Math.ceil(this.total/this.size)},filters:function(){var e=this.$route.query,t=[];for(var r in e)r.includes("[refinementList]")&&t.push({label:r.split("[")[2].split("]")[0],value:e[r]});return t},sortItems:function(){var e,t=["asc","desc"],r=[],n=v(this.sortList);try{for(n.s();!(e=n.n()).done;){var o,l=e.value,c=v(t);try{for(c.s();!(o=c.n()).done;){var f=o.value;r.push({text:l.label+" "+this.$t(f),value:l.value+":"+f})}}catch(e){c.e(e)}finally{c.f()}}}catch(e){n.e(e)}finally{n.f()}return r},searchLayout:function(){var e,t=v(this.layouts);try{for(t.s();!(e=t.n()).done;){var option=e.value;if(option.value===this.layout_)return option.component}}catch(e){t.e(e)}finally{t.f()}}},watch:{page:function(e){var t=JSON.parse(JSON.stringify(this.$route.query));1===e?delete t["main[page]"]:t["main[page]"]=e,this.$router.push(this.localePath({name:"search",query:t}))},$route:function(){var e=this.$route.query;e["main[query]"]&&(this.q=e["main[query]"]),this.filter(),this.list()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,l,f,h,d,y,m,option,x,w,k,O,title,$,S,T,A,map,C,j,_,P,J,N,V,L,B,q;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=performance.now(),console.log("start download"),t.next=4,c.a.get("https://static.toyobunko-lab.jp/suikeichuzu/data/index_river.json");case 4:for(d in o=(o=t.sent).data,console.log("end download",performance.now()-r),l={},f={},h={},{"冊":{key:"冊",sort:"name:asc",label:"冊",value:{},more:!1,open:!0},sort:{key:"sort",sort:"",label:"sort",value:{},more:!1,hide:!0},"記号":{key:"記号",sort:"",label:"記号",value:{},more:!1,hide:!0},"図":{key:"図",sort:"",label:"図",value:{},more:!1,open:!0},"区画南北":{key:"区画南北",sort:"",label:"区画南北",value:{},more:!1,open:!0},"区画東西":{key:"区画東西",sort:"",label:"区画東西",value:{},more:!1,open:!0},"墨朱":{key:"墨朱",sort:"",label:"墨朱",value:{},more:!1,open:!0},"表裏":{key:"表裏",sort:"",label:"表裏",value:{},more:!1,open:!0},"分類":{key:"分類",sort:"",label:"分類",value:{},more:!1,open:!0},"記号説明":{key:"記号説明",sort:"",label:"記号説明",value:{},more:!1,open:!0},"詳細区画":{key:"詳細区画",sort:"",label:"詳細区画",value:{},more:!1,open:!0},"水名":{key:"水名",sort:"",label:"水名",value:{},more:!1,open:!0},"水経注：巻":{key:"水経注：巻",sort:"",label:"水経注：巻",value:{},more:!1,open:!0}})h[d]={};y=v(e.advancedOptions);try{for(y.s();!(m=y.n()).done;)option=m.value,h[option.key]={}}catch(e){y.e(e)}finally{y.f()}x=v(o);try{for(x.s();!(w=x.n()).done;)for(k=w.value,O=k.objectID,l[O]=k,title=k.fulltext,f[title]||(f[title]=[]),f[title].push(O),$=Object.keys(h),S=0,T=$;S<T.length;S++){A=T[S],map=h[A],C=k[A],"object"!==Object(n.a)(C)&&(C=[C]),j=v(C);try{for(j.s();!(_=j.n()).done;)P=_.value,map[P]||(map[P]=[]),map[P].push(O)}catch(e){j.e(e)}finally{j.f()}}}catch(e){x.e(e)}finally{x.f()}e.facets=h,e.docs=l,e.index=f,J=e.$route.query,N=Number(J["main[page]"])||e.page,e.page=N,V=Number(J.size)||e.size,e.size=V,L=J.sort||e.sort,e.sort=L,B="",B=J.layout?J.layout:localStorage.getItem("layout")?localStorage.getItem("layout"):e.layout_,e.layout_=B,q=J["main[query]"]||e.q,e.q=q,console.log("filter start"),e.filter(),console.log("end filter",performance.now()-r),e.list(),e.loading=!1,console.log("end loading",performance.now()-r);case 37:case"end":return t.stop()}}),t)})))()},methods:{getQuery:function(e){var t={};return t["main[refinementList]["+this.$route.params.slug+"][0]"]=e,t},init:function(){var e=JSON.parse(JSON.stringify(this.$route.query));for(var t in e)t.includes("[refinementList]")&&delete e[t];delete e["main[page]"],this.$router.push(this.localePath({name:"search",query:e}))},filter:function(){var e=JSON.parse(JSON.stringify(this.$route.query)),q=e["main[query]"]||"",t=this.docs,r=this.index,n=[],o={},l=this.sort.split(":"),c=l[0],f=l[1];if(""===q)n=Object.keys(t);else{var d=q.split("　").join(" ").split(" ");for(var y in r){var m,x=!0,w=0,k=v(d);try{for(k.s();!(m=k.n()).done;){var O=m.value,$=(y.match(new RegExp(O,"g"))||[]).length;if(0==$){x=!1;break}w+=$}}catch(e){k.e(e)}finally{k.f()}if(x){var S=r[y];if("_score"===c){var T,A=v(S);try{for(A.s();!(T=A.n()).done;){var C=T.value;o[C]||(o[C]=0),o[C]+=w}}catch(e){A.e(e)}finally{A.f()}}n=n.concat(S)}}}var j=this.facets,_={};for(var P in e)if(P.includes("[advanced]")){var J=P.split("[")[2].split("]")[0];_[J]||(_[J]={"+":[],"-":[]});var N=e[P];"string"==typeof N&&(N=[N]);var V,L=v(N);try{for(L.s();!(V=L.n()).done;){var B=V.value,I="+",R=B;B.startsWith("-")&&(I="-",R=B.substring(1)),_[J][I].includes(R)||_[J][I].push(R)}}catch(e){L.e(e)}finally{L.f()}}var G,z={},D=v(this.advancedOptions);try{for(D.s();!(G=D.n()).done;){var option=G.value;z[option.key]=option}}catch(e){D.e(e)}finally{D.f()}for(var E in _){var W=_[E],H=W["+"],M=W["-"],F=j[E];if(H.length>0){var Q,U=[],Z=v(H);try{for(Z.s();!(Q=Z.n()).done;){var K=Q.value;if(z[E].select)U=U.concat(F[K]);else for(var X in F)X.includes(K)&&(U=U.concat(F[X]))}}catch(e){Z.e(e)}finally{Z.f()}n=h.intersection(n,U)}if(M.length>0){var Y,ee=v(M);try{for(ee.s();!(Y=ee.n()).done;){var te=Y.value,ae=[];for(var re in F)re!==te&&(ae=ae.concat(F[re]));n=h.intersection(n,ae)}}catch(e){ee.e(e)}finally{ee.f()}}}var ne={};for(var ie in e)if(ie.includes("[refinementList]")){var se=ie.split("[")[2].split("]")[0];ne[se]||(ne[se]={"+":[],"-":[]});var oe=e[ie];"string"==typeof oe&&(oe=[oe]);var le,ue=v(oe);try{for(ue.s();!(le=ue.n()).done;){var ce=le.value,ve="+",fe=ce;ce.startsWith("-")&&(ve="-",fe=ce.substring(1)),ne[se][ve].includes(fe)||ne[se][ve].push(fe)}}catch(e){ue.e(e)}finally{ue.f()}}for(var he in ne){var de=ne[he],pe=de["+"],ye=de["-"],me=j[he];if(pe.length>0){var be,ge=[],xe=v(pe);try{for(xe.s();!(be=xe.n()).done;){var we=be.value;ge=ge.concat(me[we])}}catch(e){xe.e(e)}finally{xe.f()}n=h.intersection(n,ge)}if(ye.length>0){var ke,Oe=v(ye);try{for(Oe.s();!(ke=Oe.n()).done;){var $e=ke.value,Se=[];for(var qe in me)qe!==$e&&(Se=Se.concat(me[qe]));n=h.intersection(n,Se)}}catch(e){Oe.e(e)}finally{Oe.f()}}}if("_score"===c&&""!==q&&Object.keys(o).length>0){var Te=Object.keys(o).map((function(e){return{key:e,value:o[e]}})),Ae=1,Ce=-1;"asc"===f&&(Ae=-1,Ce=1),Te.sort((function(a,b){return a.value<b.value?Ae:a.value>b.value?Ce:0}));var je,_e=[],Pe=v(Te);try{for(Pe.s();!(je=Pe.n()).done;){var Je=je.value;n.includes(Je.key)&&_e.push(Je.key)}}catch(e){Pe.e(e)}finally{Pe.f()}n=_e}else if(j[c]){var Ne=j[c],Ve=Object.keys(Ne);Ve.length,"desc"===f?Ve.reverse():Ve.sort();var Le,Be=[],Ie=v(Ve);try{for(Ie.s();!(Le=Ie.n()).done;){var Re=Ne[Le.value];Be=Be.concat(Re)}}catch(e){Ie.e(e)}finally{Ie.f()}n=h.intersection(Be,n)}else n=n.sort();this.ids=n,this.total=n.length,this.getAggs()},getAggs:function(){var e={"冊":{key:"冊",sort:"name:asc",label:"冊",value:{},more:!1,open:!0},sort:{key:"sort",sort:"",label:"sort",value:{},more:!1,hide:!0},"記号":{key:"記号",sort:"",label:"記号",value:{},more:!1,hide:!0},"図":{key:"図",sort:"",label:"図",value:{},more:!1,open:!0},"区画南北":{key:"区画南北",sort:"",label:"区画南北",value:{},more:!1,open:!0},"区画東西":{key:"区画東西",sort:"",label:"区画東西",value:{},more:!1,open:!0},"墨朱":{key:"墨朱",sort:"",label:"墨朱",value:{},more:!1,open:!0},"表裏":{key:"表裏",sort:"",label:"表裏",value:{},more:!1,open:!0},"分類":{key:"分類",sort:"",label:"分類",value:{},more:!1,open:!0},"記号説明":{key:"記号説明",sort:"",label:"記号説明",value:{},more:!1,open:!0},"詳細区画":{key:"詳細区画",sort:"",label:"詳細区画",value:{},more:!1,open:!0},"水名":{key:"水名",sort:"",label:"水名",value:{},more:!1,open:!0},"水経注：巻":{key:"水経注：巻",sort:"",label:"水経注：巻",value:{},more:!1,open:!0}};for(var t in e)e[t].label=this.$t(e[t].label);var r,n=this.docs,o=v(this.ids);try{for(o.s();!(r=o.n()).done;){var l=n[r.value];for(var c in e){var f=e[c].value,h=l[c];if("string"==typeof h&&(h=[h]),h){var d,y=v(h);try{for(y.s();!(d=y.n()).done;){var m=d.value;f[m]||(f[m]=0),f[m]+=1}}catch(e){y.e(e)}finally{y.f()}}}}}catch(e){o.e(e)}finally{o.f()}for(var x in e){var w=e[x],k=Object.entries(w.value);"name:asc"!==w.sort&&k.sort((function(e,t){return-(e[1]-t[1])}));var O=k;e[x].value=O}this.aggs=e},search:function(){var e=JSON.parse(JSON.stringify(this.$route.query)),q=this.q||"";""===(q=q.trim())?delete e["main[query]"]:e["main[query]"]=q,delete e["main[page]"],this.page=1,this.$router.push(this.localePath({name:"search",query:e}))},list:function(){var e,t=this.$route.query,r=t["main[page]"]||1,n=t.size||20,o=[],l=v(this.ids.slice((r-1)*n,r*n));try{for(l.s();!(e=l.n()).done;){var c=e.value;o.push(this.docs[c])}}catch(e){l.e(e)}finally{l.f()}this.items=o},faceted:function(e,t){var r=JSON.parse(JSON.stringify(this.$route.query)),n=[];for(var o in r)o.includes("[refinementList]["+e+"]")&&(n.push(r[o]),delete r[o]);"string"==typeof t&&(t=[t]);var l,c=v(t);try{var f=function(){var e=l.value;n.includes(e)?n=n.filter((function(t){return t!==e})):n.push(e)};for(c.s();!(l=c.n()).done;)f()}catch(e){c.e(e)}finally{c.f()}for(var i=0;i<n.length;i++)r["main[refinementList]["+e+"]["+i+"]"]=n[i];this.$router.push(this.localePath({name:"search",query:r}))},checked:function(e,t){var r=this.$route.query,n=[];for(var o in r)o.includes("[refinementList]["+e+"]")&&n.push(r[o]);return!!n.includes(t)},changeHitsPerPage:function(){var e=JSON.parse(JSON.stringify(this.$route.query)),t=this.size;20===t?delete e.size:e.size=t,this.$router.push(this.localePath({name:"search",query:e}))},changeSort:function(){var e=JSON.parse(JSON.stringify(this.$route.query));e.sort=this.sort,this.$router.push(this.localePath({name:"search",query:e}))},changeLayout:function(e){var t=JSON.parse(JSON.stringify(this.$route.query)),r=e;this.layout_=r,"grid"===r?delete t.layout:t.layout=r,this.$router.push(this.localePath({name:"search",query:t})),localStorage.setItem("layout",e)},getMinusValues:function(e){var t=JSON.parse(JSON.stringify(this.$route.query)),r=[];for(var n in t)if(n.includes("["+e+"]")){var o=t[n];o.startsWith("-")&&r.push(o)}return r},showAll:function(e){this.selectedField=e.label,this.selected=[],this.isShowAll=!0;var t,r=[],n=v(e.value);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.push({label:o[0],value:o[1]})}}catch(e){n.e(e)}finally{n.f()}this.selectedAggValues=r},getLabels:function(e){var t,r=[],n=v(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.push(o.label)}}catch(e){n.e(e)}finally{n.f()}return r}},head:function(){return{title:this.$t("search")}}},y=(r(651),r(97)),m=r(111),x=r.n(m),w=r(599),k=r(224),O=r(181),$=r(575),S=r(690),T=r(226),A=r(223),C=r(71),j=r(684),_=r(168),P=r(149),J=r(245),N=r(1),V=r(6),L=Object(V.a)(_.a,Object(P.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:J.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(N.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(N.g)(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}}),B=L.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var e=L.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}}),I=r(705),R=r(672),G=r(659),z=r(566),component=Object(y.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.bh},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),e._v(" "),r("v-container",{staticClass:"my-5"},[r("v-tabs",{staticClass:"mb-10",model:{value:e.tabValue,callback:function(t){e.tabValue=t},expression:"tabValue"}},[e._l(e.aggs,(function(t,n){return[t.hide?e._e():r("v-tab",{key:n,staticClass:"ma-1",attrs:{depressed:"",color:"primary",to:e.localePath({name:"category-slug",params:{slug:n}})}},[e._v(e._s(t.label))])]}))],2),e._v(" "),r("h2",{staticClass:"my-5"},[e._v(e._s(e.$route.params.slug))]),e._v(" "),e.loading?[r("div",{staticClass:"text-center"},[r("v-progress-circular",{staticClass:"my-10",attrs:{indeterminate:"",color:"primary"}}),e._v(" "),r("p",[e._v("\n          初回はインデックスファイルのダウンロードに時間を要します。2回目以降はキャッシュにより待ち時間が改善します。\n        ")])],1)]:[r("v-tabs",{attrs:{right:""},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[r("v-tabs-slider"),e._v(" "),r("v-tab",{staticClass:"primary--text",attrs:{href:"#mobile-tabs-5-1"}},[r("v-icon",[e._v("mdi-table")])],1),e._v(" "),r("v-tab",{staticClass:"primary--text",attrs:{href:"#mobile-tabs-5-2"}},[r("v-icon",[e._v("mdi-chart-bar")])],1)],1),e._v(" "),r("v-tabs-items",{staticClass:"mt-10",model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[r("v-tab-item",{attrs:{value:"mobile-tabs-5-1"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",[r("v-text-field",{attrs:{filled:"",rounded:"","append-icon":"mdi-magnify",dense:"","single-line":"","hide-details":""},model:{value:e.searchAgg,callback:function(t){e.searchAgg=t},expression:"searchAgg"}})],1),e._v(" "),r("v-data-table",{attrs:{"items-per-page":20,"footer-props":{"items-per-page-options":[20,50,100,-1]},headers:e.headersAggs,items:e.itemsAggs,search:e.searchAgg},scopedSlots:e._u([{key:"item.label",fn:function(t){var n=t.item;return[r("nuxt-link",{attrs:{to:e.localePath({name:"search",query:e.getQuery(n.label)})}},[e._v("\n      "+e._s(n.label)+"\n      ")])]}}])})],1)],1),e._v(" "),r("v-tab-item",{attrs:{value:"mobile-tabs-5-2"}},[r("BarChart",{staticClass:"mt-10",attrs:{labels:e.labels,datasets:e.datasets}})],1)],1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{BarChart:r(605).default}),x()(component,{VBreadcrumbs:w.a,VCard:k.a,VCardTitle:O.c,VContainer:$.a,VDataTable:S.a,VIcon:T.a,VProgressCircular:A.a,VSheet:C.a,VTab:j.a,VTabItem:B,VTabs:I.a,VTabsItems:R.a,VTabsSlider:G.a,VTextField:z.a})}}]);