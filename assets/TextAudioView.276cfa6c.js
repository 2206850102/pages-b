import{w as N,b as ve,d as me,e as ge,f as ye,C as F,g as be,p as V,h as A,i as ie,L as he,I as ke,j as we,u as Ce,k as Q,l as Se,m as se,n as q,q as M,v as _e,o as v,c as z,a as k,s as T,t as B,x as w,y as ee,z as ne,A as U,B as re,D as Oe,E as c,G as h,H as x,T as Le,J as Ee,K as L,M as Ve,N as Ae,O as Te,P as $e,Q as Ie,R as le,S as ze,_ as Ne,U as Be,V as Ue,W as Fe,X as De,Y as Pe,Z as je,$ as Re,F as R,r as te,a0 as qe,a1 as Me}from"./index.309c98f0.js";import{_ as xe}from"./_plugin-vue_export-helper.cdc0426e.js";function de(){var e=Object.keys(F.locks).length;e<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function $(e){F.locks[e]=1,de()}function I(e){delete F.locks[e],de()}function Ge(e,n){var{uid:t}=be();n&&N(n,o=>{o===!1?I(t):o===!0&&e()===!0&&$(t)}),N(e,o=>{n&&n()===!1||(o===!0?$(t):I(t))}),ve(()=>{n&&n()===!1||e()===!0&&$(t)}),me(()=>{n&&n()===!1||e()===!0&&I(t)}),ge(()=>{n&&n()===!1||e()===!0&&$(t)}),ye(()=>{n&&n()===!1||e()===!0&&I(t)})}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},G.apply(this,arguments)}function He(e){var n=["top","center","bottom"];return n.includes(e)}function Xe(e){return Y.includes(e)}var ce={type:{type:String,validator:Xe},position:{type:String,default:"top",validator:He},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:V(A,"type"),loadingSize:V(A,"size"),loadingRadius:V(A,"radius"),loadingColor:G({},V(A,"color"),{default:"currentColor"}),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}},{n:Ye,classes:Ke}=se("snackbar"),We={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""};function Ze(e,n){var t=q("var-icon"),o=q("var-loading");return M((v(),z("div",{class:T(e.n()),style:ne({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[k("div",{class:T(e.classes(e.n("wrapper"),e.n("wrapper-"+e.position),e.n("$-elevation--4"),[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n("wrapper-"+e.type)])),style:ne({zIndex:e.zIndex})},[k("div",{class:T([e.n("content"),e.contentClass])},[B(e.$slots,"default",{},()=>[U(re(e.content),1)])],2),k("div",{class:T(e.n("action"))},[e.iconName?(v(),w(t,{key:0,name:e.iconName},null,8,["name"])):ee("v-if",!0),e.type==="loading"?(v(),w(o,{key:1,type:e.loadingType,size:e.loadingSize,color:e.loadingColor,radius:e.loadingRadius},null,8,["type","size","color","radius"])):ee("v-if",!0),B(e.$slots,"action")],2)],6)],6)),[[_e,e.show]])}const ue=ie({render:Ze,name:"VarSnackbarCore",components:{VarLoading:he,VarIcon:ke},props:ce,setup(e){var n=we(null),{zIndex:t}=Ce(()=>e.show,1);Ge(()=>e.show,()=>e.lockScroll);var o=Q(()=>e.type==="loading"||e.forbidClick),i=Q(()=>e.type?We[e.type]:""),g=()=>{n.value=setTimeout(()=>{var m;e.type!=="loading"&&((m=e["onUpdate:show"])==null||m.call(e,!1))},e.duration)};return N(()=>e.show,m=>{m?(e.onOpen==null||e.onOpen(),g()):m===!1&&(clearTimeout(n.value),e.onClose==null||e.onClose())}),N(()=>e._update,()=>{clearTimeout(n.value),g()}),Se(()=>{e.show&&(e.onOpen==null||e.onOpen(),g())}),{SNACKBAR_TYPE:Y,n:Ye,classes:Ke,zIndex:t,iconName:i,isForbidClick:o}}});var{n:Je}=se("snackbar");function Qe(e,n){var t=q("var-snackbar-core");return v(),w(Ee,{to:e.teleport,disabled:e.disabled},[c(Le,{name:e.n()+"-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:h(()=>[c(t,x(e.$props,{class:e.n("transition")}),{action:h(()=>[B(e.$slots,"action")]),default:h(()=>[B(e.$slots,"default",{},()=>[U(re(e.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const S=ie({render:Qe,name:"VarSnackbar",components:{VarSnackbarCore:ue},props:ce,setup(){var{disabled:e}=Oe();return{n:Je,disabled:e}}});function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},E.apply(this,arguments)}function en(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ze(e)}var Y=["loading","success","warning","info","error"],oe=0,H=!1,X,_=!1,p=L([]),nn={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},tn={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},on={setup(){return()=>{var e=p.map(t=>{var{id:o,reactiveSnackOptions:i,_update:g}=t,m=document.querySelector(".var-transition-group");i.forbidClick||i.type==="loading"?m.classList.add("var-pointer-auto"):m.classList.remove("var-pointer-auto"),_&&(i.position="top");var O=_?"relative":"absolute",D=E({position:O},dn(i.position));return c(ue,x(i,{key:o,style:D,"data-id":o,_update:g,show:i.show,"onUpdate:show":P=>i.show=P}),null)}),n=F.zIndex;return c(Ie,x(tn,{style:{zIndex:n},onAfterEnter:an,onAfterLeave:sn}),en(e)?e:{default:()=>[e]})}}},C=function(e){var n=Te(e)||$e(e)?{content:String(e)}:e,t=L(E({},nn,n));t.show=!0,H||(H=!0,X=Ve(on).unmountInstance);var{length:o}=p,i={id:oe++,reactiveSnackOptions:t};if(o===0||_)rn(i);else{var g="update-"+oe;ln(t,g)}return{clear(){!_&&p.length?p[0].reactiveSnackOptions.show=!1:t.show=!1}}};Y.forEach(e=>{C[e]=n=>(Ae(n)?n.type=e:n={content:n,type:e},C(n))});C.install=function(e){e.component(S.name,S)};C.allowMultiple=function(e){e===void 0&&(e=!1),e!==_&&(p.forEach(n=>{n.reactiveSnackOptions.show=!1}),_=e)};C.clear=function(){p.forEach(e=>{e.reactiveSnackOptions.show=!1})};C.Component=S;function an(e){var n=e.getAttribute("data-id"),t=p.find(o=>o.id===le(n));t&&(t.reactiveSnackOptions.onOpened==null||t.reactiveSnackOptions.onOpened())}function sn(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");var n=e.getAttribute("data-id"),t=p.find(i=>i.id===le(n));t&&(t.animationEnd=!0,t.reactiveSnackOptions.onClosed==null||t.reactiveSnackOptions.onClosed());var o=p.every(i=>i.animationEnd);o&&(X==null||X(),p=L([]),H=!1)}function rn(e){p.push(e)}function ln(e,n){var[t]=p;t.reactiveSnackOptions=E({},t.reactiveSnackOptions,e),t._update=n}function dn(e){return e===void 0&&(e="top"),e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}S.install=function(e){e.component(S.name,S)};const ae=C;const K=e=>(qe("data-v-9d7e23c7"),e=e(),Me(),e),cn={class:"input-number-wrap"},un=K(()=>k("span",{class:"input-number-label"},"\u97F3\u8C03",-1)),pn={class:"input-number-wrap"},fn=K(()=>k("span",{class:"input-number-label"},"\u8BED\u901F",-1)),vn={class:"input-number-wrap"},mn=K(()=>k("span",{class:"input-number-label"},"\u97F3\u91CF",-1)),gn={__name:"TextAudioView",setup(e){const t=new TextEncoder().encode(`Path:audio\r
`).toString(),o=L({loading:!0,langList:[],voiceLists:{},speaking:!1,downloading:!1}),i=L({lang:"zh-CN",voice:0,pitch:0,rate:0,volume:0,text:"\u8BF7\u8F93\u5165\u8981\u8FDB\u884C\u6D4B\u8BD5\u7684\u5185\u5BB9"});function g(){o.loading=!0;const s={},a=[];fetch("https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4").then(l=>l.json()).then(l=>{l.forEach(u=>{s[u.Locale]||(a.push(u.Locale),s[u.Locale]=[]),s[u.Locale].push(u)}),o.langList=a.sort(),o.voiceLists=s,o.loading=!1})}function m(s=8){let a="";for(let l=0;l<s;l++)a+=((1+Math.random())*65536|0).toString(16).substring(1);return a}function O(s){return s>=0?`+${s}`:`${s}`}const D=(s="webm-24khz-16bit-mono-opus")=>`X-Timestamp:${new Date}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"${s}"}}}}`,P=({requestId:s=m(),lang:a="zh-CN",voiceName:l,pitch:u="+0",rate:y="+0",volume:f="+0",text:d})=>`X-RequestId:${s}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${new Date}\r
Path:ssml\r
\r
<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='https://www.w3.org/2001/mstts' xml:lang='${a}'><voice name='${l}'><prosody pitch='${u}Hz' rate ='${y}%' volume='${f}%'>${d}</prosody></voice></speak>`;function W(s,a){const l=[];return new Promise((u,y)=>{if(!s.text){y("\u8BF7\u8F93\u5165\u6587\u5B57");return}const f=new WebSocket("wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4");f.addEventListener("open",()=>{f.send(D()),f.send(P({lang:s.lang,voiceName:a[s.lang][s.voice].Name,pitch:O(s.pitch),rate:O(s.rate),volume:O(s.volume),text:s.text}))}),f.addEventListener("message",async({data:d})=>{if(d instanceof Blob){const b=new Uint8Array(await d.arrayBuffer());l.push(...b.toString().split(t)[1].split(",").slice(1).map(j=>+j)),b[0]===0&&b[1]===103&&b[2]===88&&f.close(1e3)}}),f.addEventListener("error",d=>{console.log("------\u51FA\u9519\u4E86",d),y(d)}),f.addEventListener("close",d=>{if(d.code!==1e3){console.error("----\u5173\u95ED\u4E86",d),y(d.code);return}const b=new Blob([new Uint8Array(l)],{type:"audio/webm"});u(URL.createObjectURL(b))})})}function pe(){o.speaking=!0,W(i,o.voiceLists).then(s=>{const a=new Audio(s);a.onended=()=>{o.speaking=!1},a.play()}).catch(s=>{ae.error(s),o.speaking=!1})}function fe(){o.downloading=!0,W(i,o.voiceLists).then(s=>{const a=document.createElement("a");a.download=`audio_${Date.now()}.webm`,a.href=s,a.style="display: none",document.body.append(a),a.click(),a.remove()}).catch(s=>{ae.error(s)}).finally(()=>{o.downloading=!1})}return g(),(s,a)=>{const l=Ne,u=Be,y=Ue,f=Fe,d=De,b=Pe,j=je,Z=Re;return v(),z(R,null,[c(b,{direction:"column"},{default:h(()=>[M((v(),w(u,{placeholder:"\u9009\u62E9\u8BED\u8A00",modelValue:i.lang,"onUpdate:modelValue":a[0]||(a[0]=r=>i.lang=r),onChange:a[1]||(a[1]=r=>i.voice=0)},{default:h(()=>[(v(!0),z(R,null,te(o.langList,r=>(v(),w(l,{key:r,label:r},null,8,["label"]))),128))]),_:1},8,["modelValue"])),[[Z]]),M((v(),w(u,{placeholder:"\u9009\u62E9\u58F0\u97F3",modelValue:i.voice,"onUpdate:modelValue":a[2]||(a[2]=r=>i.voice=r)},{default:h(()=>[(v(!0),z(R,null,te(o.voiceLists[i.lang],(r,J)=>(v(),w(l,{key:J,label:r.ShortName,value:J},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])),[[Z]]),k("div",cn,[un,c(y,{modelValue:i.pitch,"onUpdate:modelValue":a[3]||(a[3]=r=>i.pitch=r),step:10},null,8,["modelValue"])]),k("div",pn,[fn,c(y,{modelValue:i.rate,"onUpdate:modelValue":a[4]||(a[4]=r=>i.rate=r),step:10},null,8,["modelValue"])]),k("div",vn,[mn,c(y,{modelValue:i.volume,"onUpdate:modelValue":a[5]||(a[5]=r=>i.volume=r),step:10},null,8,["modelValue"])]),c(f,{placeholder:"\u8F93\u5165\u5185\u5BB9",modelValue:i.text,"onUpdate:modelValue":a[6]||(a[6]=r=>i.text=r)},null,8,["modelValue"]),c(b,null,{default:h(()=>[c(d,{onClick:pe,type:"primary",loading:o.speaking,"loading-type":"rect"},{default:h(()=>[U("\u64AD\u653E")]),_:1},8,["loading"]),c(d,{onClick:fe,loading:o.downloading,"loading-type":"rect"},{default:h(()=>[U("\u4E0B\u8F7D")]),_:1},8,["loading"])]),_:1})]),_:1}),c(j,{fullscreen:"",loading:o.loading},null,8,["loading"])],64)}}},hn=xe(gn,[["__scopeId","data-v-9d7e23c7"]]);export{hn as default};
