import{_ as C,i as P,g as b,p as w,r as L,o as t,c as o,a as c,t as y,F as i,k as d,l as _,q as m,v as f,w as k,b as A,a3 as D,a4 as S}from"./app.dab8f457.js";String.prototype.fdn=function(){return this.replace(/ /g,"-").replace(/\//g,"%2F").replace(/ü/g,"u").replace(/²/g,"2").replace(/³/g,"3")};const O={data(){return{colCount:3,fm:P(),themeLocaleData:b().value.chart.deviceChart,isDarkMode:w()}},computed:{localePathPrefix(){const r=this.fm.lang;return r=="en_US"?"":`/${r}`},typeArr(){return Array.from(new Set(this.fm.groupList.map(r=>r.type)))},groupObj(){var r=[],l=[{label:"",types:["iPhone","iPad","iPad Air","iPad Pro","iPad mini","iPod touch","Apple TV"]}].map(a=>{a.types=a.types.filter(e=>this.typeArr.includes(e));for(const e of a.types)r.push(e);return a});const p=this.typeArr.filter(a=>!r.includes(a));return p.length>0&&l.push({label:"Other",types:p}),l},imageObj(){var r=[],l={};for(const e of this.fm.groupList)r.includes(e.type)||(r.push(e.type),l[e.type]={key:e.img.key,imageBool:e.img.count>0,dark:e.img.dark});const p={AirPods:"AirPods1,1",iPhone:"iPhone15,3"};for(const e in p)l.hasOwnProperty(e)&&(l[e].key=p[e]);var a={};for(const e in l)a[e]=l[e].imageBool?`https://img.appledb.dev/device@preview/${l[e].key}/0${this.isDarkMode&&l[e].dark?"_dark":""}.webp`:`/assets/images/logo${this.isDarkMode?"_dark":""}.webp`;return a}}},v=r=>(D("data-v-3e70837e"),r=r(),S(),r),x=v(()=>c("br",null,null,-1)),B={key:0},I=["src"],T=v(()=>c("hr",{class:"separator"},null,-1)),j=[T];function M(r,l,p,a,e,h){const g=L("router-link");return t(),o(i,null,[c("h2",null,y(e.themeLocaleData.getStarted.requiredReading.title),1),(t(!0),o(i,null,d(e.themeLocaleData.getStarted.requiredReading.content,s=>(t(),o("p",{key:s},y(s),1))),128)),x,(t(!0),o(i,null,d(h.groupObj,s=>(t(),o(i,{key:s},[s.label?(t(),o("h2",B,y(s.label),1)):_("",!0),(t(!0),o(i,null,d(Math.ceil(s.types.length/e.colCount),u=>(t(),o("table",{key:u},[c("tr",{style:m(`width: ${parseInt(100/e.colCount)}%;`)},[(t(!0),o(i,null,d(e.colCount,n=>(t(),o("th",{key:n,style:m({width:parseInt(100/e.colCount)+"%"})},[s.types[(u-1)*e.colCount+n-1]?(t(),f(g,{key:0,to:`${h.localePathPrefix}/get-started/select-${s.types[(u-1)*e.colCount+n-1].fdn().toLowerCase()}/`},{default:k(()=>[A(y(s.types[(u-1)*e.colCount+n-1]),1)]),_:2},1032,["to"])):_("",!0)],4))),128))],4),c("tr",null,[(t(!0),o(i,null,d(e.colCount,n=>(t(),o("td",{key:n},[s.types[(u-1)*e.colCount+n-1]?(t(),f(g,{key:0,to:`${h.localePathPrefix}/get-started/select-${s.types[(u-1)*e.colCount+n-1].fdn().toLowerCase()}/`},{default:k(()=>[c("img",{src:h.imageObj[s.types[(u-1)*e.colCount+n-1]],style:{"max-height":"11em"}},null,8,I)]),_:2},1032,["to"])):_("",!0)]))),128))]),c("tr",null,[(t(!0),o(i,null,d(e.colCount,n=>(t(),o("td",{key:n},j))),128))])]))),128))],64))),128))],64)}var V=C(O,[["render",M],["__scopeId","data-v-3e70837e"],["__file","deviceGroupList.vue"]]);export{V as default};
