var Be=Object.defineProperty;var He=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>(He(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function z(){}function Ve(t){return t()}function $e(){return Object.create(null)}function Y(t){t.forEach(Ve)}function je(t){return typeof t=="function"}function se(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ke(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function I(t,e,n){t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function g(){return T(" ")}function me(){return T("")}function L(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ze(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}function C(t,e){t.value=e??""}let De;function de(t){De=t}const ie=[],we=[];let re=[];const Ce=[],Ge=Promise.resolve();let be=!1;function Je(){be||(be=!0,Ge.then(Fe))}function ye(t){re.push(t)}const ve=new Set;let le=0;function Fe(){if(le!==0)return;const t=De;do{try{for(;le<ie.length;){const e=ie[le];le++,de(e),Qe(e.$$)}}catch(e){throw ie.length=0,le=0,e}for(de(null),ie.length=0,le=0;we.length;)we.pop()();for(let e=0;e<re.length;e+=1){const n=re[e];ve.has(n)||(ve.add(n),n())}re.length=0}while(ie.length);for(;Ce.length;)Ce.pop()();be=!1,ve.clear(),de(t)}function Qe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}function We(t){const e=[],n=[];re.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),re=e}const _e=new Set;let Xe;function te(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function fe(t,e,n,l){if(t&&t.o){if(_e.has(t))return;_e.add(t),Xe.c.push(()=>{_e.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function ee(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ye(t,e){t.d(1),e.delete(t.key)}function Ze(t,e,n,l,i,r,o,f,p,s,a,h){let m=t.length,y=r.length,v=m;const E={};for(;v--;)E[t[v].key]=v;const N=[],P=new Map,w=new Map,q=[];for(v=y;v--;){const _=h(i,r,v),b=n(_);let $=o.get(b);$?l&&q.push(()=>$.p(_,e)):($=s(b,_),$.c()),P.set(b,N[v]=$),b in E&&w.set(b,Math.abs(v-E[b]))}const A=new Set,D=new Set;function k(_){te(_,1),_.m(f,a),o.set(_.key,_),a=_.first,y--}for(;m&&y;){const _=N[y-1],b=t[m-1],$=_.key,M=b.key;_===b?(a=_.first,m--,y--):P.has(M)?!o.has($)||A.has($)?k(_):D.has(M)?m--:w.get($)>w.get(M)?(D.add($),k(_)):(A.add(M),m--):(p(b,o),m--)}for(;m--;){const _=t[m];P.has(_.key)||p(_,o)}for(;y;)k(N[y-1]);return Y(q),N}function pe(t){t&&t.c()}function oe(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),ye(()=>{const r=t.$$.on_mount.map(Ve).filter(je);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),i.forEach(ye)}function ue(t,e){const n=t.$$;n.fragment!==null&&(We(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(ie.push(t),Je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,l,i,r,o=null,f=[-1]){const p=De;de(t);const s=t.$$={fragment:null,ctx:[],props:r,update:z,not_equal:i,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:$e(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};o&&o(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(h,m,...y)=>{const v=y.length?y[0]:m;return s.ctx&&i(s.ctx[h],s.ctx[h]=v)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](v),a&&xe(t,h)),m}):[],s.update(),a=!0,Y(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const h=ze(e.target);s.fragment&&s.fragment.l(h),h.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&te(t.$$.fragment),oe(t,e.target,e.anchor),Fe()}de(p)}class ae{constructor(){ge(this,"$$");ge(this,"$$set")}$destroy(){ue(this,1),this.$destroy=z}$on(e,n){if(!je(n))return z;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const et="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(et);function tt(t){let e,n,l,i,r,o,f,p,s,a;return{c(){e=d("form"),n=d("input"),l=g(),i=d("input"),r=g(),o=d("input"),f=g(),p=d("input"),c(n,"placeholder","Name"),c(n,"type","text"),c(n,"id","name"),c(n,"autocomplete","off"),c(i,"placeholder","Address"),c(i,"type","text"),c(i,"id","address"),c(i,"autocomplete","off"),c(o,"placeholder","Email"),c(o,"type","email"),c(o,"id","email"),c(o,"autocomplete","off"),c(p,"placeholder","Phone Number"),c(p,"type","tel"),c(p,"id","phoneNumber"),c(p,"autocomplete","off")},m(h,m){I(h,e,m),u(e,n),C(n,t[0].name),u(e,l),u(e,i),C(i,t[0].address),u(e,r),u(e,o),C(o,t[0].email),u(e,f),u(e,p),C(p,t[0].phoneNumber),s||(a=[L(n,"input",t[1]),L(i,"input",t[2]),L(o,"input",t[3]),L(p,"input",t[4])],s=!0)},p(h,[m]){m&1&&n.value!==h[0].name&&C(n,h[0].name),m&1&&i.value!==h[0].address&&C(i,h[0].address),m&1&&o.value!==h[0].email&&C(o,h[0].email),m&1&&C(p,h[0].phoneNumber)},i:z,o:z,d(h){h&&U(e),s=!1,Y(a)}}}function nt(t,e,n){let l={name:"",address:"",email:"",phoneNumber:""};function i(){l.name=this.value,n(0,l)}function r(){l.address=this.value,n(0,l)}function o(){l.email=this.value,n(0,l)}function f(){l.phoneNumber=this.value,n(0,l)}return[l,i,r,o,f]}class lt extends ae{constructor(e){super(),ce(this,e,nt,tt,se,{})}}let he;const it=new Uint8Array(16);function ot(){if(!he&&(he=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!he))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return he(it)}const R=[];for(let t=0;t<256;++t)R.push((t+256).toString(16).slice(1));function ut(t,e=0){return R[t[e+0]]+R[t[e+1]]+R[t[e+2]]+R[t[e+3]]+"-"+R[t[e+4]]+R[t[e+5]]+"-"+R[t[e+6]]+R[t[e+7]]+"-"+R[t[e+8]]+R[t[e+9]]+"-"+R[t[e+10]]+R[t[e+11]]+R[t[e+12]]+R[t[e+13]]+R[t[e+14]]+R[t[e+15]]}const rt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ne={randomUUID:rt};function st(t,e,n){if(Ne.randomUUID&&!e&&!t)return Ne.randomUUID();t=t||{};const l=t.random||(t.rng||ot)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=l[i];return e}return ut(l)}function Ee(t,e,n){const l=t.slice();return l[15]=e[n],l[17]=n,l}function Se(t){let e,n=[],l=new Map,i=ee(t[5]);const r=o=>o[15].id;for(let o=0;o<i.length;o+=1){let f=Ee(t,i,o),p=r(f);l.set(p,n[o]=Te(p,f))}return{c(){e=d("div");for(let o=0;o<n.length;o+=1)n[o].c();c(e,"class","education-entries")},m(o,f){I(o,e,f);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(e,null)},p(o,f){f&160&&(i=ee(o[5]),n=Ze(n,f,r,1,o,i,l,e,Ye,Te,null,Ee))},d(o){o&&U(e);for(let f=0;f<n.length;f+=1)n[f].d()}}}function Te(t,e){let n,l,i,r=e[17]+1+"",o,f,p,s,a=e[15].school+"",h,m,y,v,E=e[15].degree+"",N,P,w,q,A=e[15].location+"",D,k,_,b,$=e[15].startDate+"",M,G,j,J,Z=e[15].endDate+"",V,Q,x,B,H,W;function K(){return e[13](e[15])}return{key:t,first:null,c(){n=d("div"),l=d("h3"),i=T("Entry "),o=T(r),f=g(),p=d("p"),s=T("School: "),h=T(a),m=g(),y=d("p"),v=T("Degree: "),N=T(E),P=g(),w=d("p"),q=T("Location: "),D=T(A),k=g(),_=d("p"),b=T("Start Date: "),M=T($),G=g(),j=d("p"),J=T("End Date: "),V=T(Z),Q=g(),x=d("button"),x.textContent="Remove",B=g(),c(n,"class","education-entry"),this.first=n},m(X,O){I(X,n,O),u(n,l),u(l,i),u(l,o),u(n,f),u(n,p),u(p,s),u(p,h),u(n,m),u(n,y),u(y,v),u(y,N),u(n,P),u(n,w),u(w,q),u(w,D),u(n,k),u(n,_),u(_,b),u(_,M),u(n,G),u(n,j),u(j,J),u(j,V),u(n,Q),u(n,x),u(n,B),H||(W=L(x,"click",K),H=!0)},p(X,O){e=X,O&32&&r!==(r=e[17]+1+"")&&F(o,r),O&32&&a!==(a=e[15].school+"")&&F(h,a),O&32&&E!==(E=e[15].degree+"")&&F(N,E),O&32&&A!==(A=e[15].location+"")&&F(D,A),O&32&&$!==($=e[15].startDate+"")&&F(M,$),O&32&&Z!==(Z=e[15].endDate+"")&&F(V,Z)},d(X){X&&U(n),H=!1,W()}}}function ct(t){let e,n,l,i,r,o,f,p,s,a,h,m,y,v,E,N,P,w,q,A,D=t[5].length>0&&Se(t);return{c(){e=d("form"),n=d("input"),l=g(),i=d("input"),r=g(),o=d("input"),f=g(),p=d("label"),p.textContent="Start Date:",s=g(),a=d("input"),h=g(),m=d("label"),m.textContent="End Date:",y=g(),v=d("input"),E=g(),N=d("button"),N.textContent="Add Education",P=g(),D&&D.c(),w=me(),c(n,"placeholder","School"),c(n,"type","text"),c(n,"id","school"),n.required=!0,c(n,"autocomplete","off"),c(i,"placeholder","Degree"),c(i,"type","text"),c(i,"id","degree"),i.required=!0,c(i,"autocomplete","off"),c(o,"placeholder","Location"),c(o,"type","text"),c(o,"id","location"),o.required=!0,c(o,"autocomplete","off"),c(p,"for","startDate"),c(a,"type","date"),c(a,"id","startDate"),a.required=!0,c(a,"autocomplete","off"),c(m,"for","endDate"),c(v,"type","date"),c(v,"id","endDate"),v.required=!0,c(v,"autocomplete","off"),c(N,"type","submit")},m(k,_){I(k,e,_),u(e,n),C(n,t[0]),u(e,l),u(e,i),C(i,t[1]),u(e,r),u(e,o),C(o,t[4]),u(e,f),u(e,p),u(e,s),u(e,a),C(a,t[2]),u(e,h),u(e,m),u(e,y),u(e,v),C(v,t[3]),u(e,E),u(e,N),I(k,P,_),D&&D.m(k,_),I(k,w,_),q||(A=[L(n,"input",t[8]),L(i,"input",t[9]),L(o,"input",t[10]),L(a,"input",t[11]),L(v,"input",t[12]),L(e,"submit",t[6])],q=!0)},p(k,[_]){_&1&&n.value!==k[0]&&C(n,k[0]),_&2&&i.value!==k[1]&&C(i,k[1]),_&16&&o.value!==k[4]&&C(o,k[4]),_&4&&C(a,k[2]),_&8&&C(v,k[3]),k[5].length>0?D?D.p(k,_):(D=Se(k),D.c(),D.m(w.parentNode,w)):D&&(D.d(1),D=null)},i:z,o:z,d(k){k&&(U(e),U(P),U(w)),D&&D.d(k),q=!1,Y(A)}}}function at(t,e,n){let l="",i="",r="",o="",f="",p=[];function s(w){if(w.preventDefault(),!l||!i||!r||!o||!f){alert("Please fill in all fields.");return}const q={id:st(),school:l,degree:i,startDate:r,endDate:o,location:f};n(5,p=[...p,q]),a()}function a(){n(0,l=""),n(1,i=""),n(2,r=""),n(3,o=""),n(4,f="")}function h(w){n(5,p=p.filter(q=>q.id!==w))}function m(){l=this.value,n(0,l)}function y(){i=this.value,n(1,i)}function v(){f=this.value,n(4,f)}function E(){r=this.value,n(2,r)}function N(){o=this.value,n(3,o)}return[l,i,r,o,f,p,s,h,m,y,v,E,N,w=>h(w.id)]}class ft extends ae{constructor(e){super(),ce(this,e,at,ct,se,{})}}function Le(t,e,n){const l=t.slice();return l[12]=e[n],l[14]=n,l}function Pe(t){let e,n=ee(t[1]),l=[];for(let i=0;i<n.length;i+=1)l[i]=qe(Le(t,n,i));return{c(){e=d("div");for(let i=0;i<l.length;i+=1)l[i].c();c(e,"class","experience-entries")},m(i,r){I(i,e,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(i,r){if(r&10){n=ee(i[1]);let o;for(o=0;o<n.length;o+=1){const f=Le(i,n,o);l[o]?l[o].p(f,r):(l[o]=qe(f),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){i&&U(e),ke(l,i)}}}function qe(t){let e,n,l,i,r,o=t[12].companyName+"",f,p,s,a,h=t[12].positionTitle+"",m,y,v,E,N=t[12].location+"",P,w,q,A,D=t[12].startDate+"",k,_,b,$,M=t[12].endDate+"",G,j,J,Z,V=t[12].description+"",Q,x,B,H,W,K;function X(){return t[10](t[14])}return{c(){e=d("div"),n=d("h3"),n.textContent=`Entry ${t[14]+1}`,l=g(),i=d("p"),r=T("Company Name: "),f=T(o),p=g(),s=d("p"),a=T("Position Title: "),m=T(h),y=g(),v=d("p"),E=T("Location: "),P=T(N),w=g(),q=d("p"),A=T("Start Date: "),k=T(D),_=g(),b=d("p"),$=T("End Date: "),G=T(M),j=g(),J=d("p"),Z=T("Description: "),Q=T(V),x=g(),B=d("button"),B.textContent="Remove",H=g(),c(e,"class","experience-entry")},m(O,S){I(O,e,S),u(e,n),u(e,l),u(e,i),u(i,r),u(i,f),u(e,p),u(e,s),u(s,a),u(s,m),u(e,y),u(e,v),u(v,E),u(v,P),u(e,w),u(e,q),u(q,A),u(q,k),u(e,_),u(e,b),u(b,$),u(b,G),u(e,j),u(e,J),u(J,Z),u(J,Q),u(e,x),u(e,B),u(e,H),W||(K=L(B,"click",X),W=!0)},p(O,S){t=O,S&2&&o!==(o=t[12].companyName+"")&&F(f,o),S&2&&h!==(h=t[12].positionTitle+"")&&F(m,h),S&2&&N!==(N=t[12].location+"")&&F(P,N),S&2&&D!==(D=t[12].startDate+"")&&F(k,D),S&2&&M!==(M=t[12].endDate+"")&&F(G,M),S&2&&V!==(V=t[12].description+"")&&F(Q,V)},d(O){O&&U(e),W=!1,K()}}}function pt(t){let e,n,l,i,r,o,f,p,s,a,h,m,y,v,E,N,P,w,q,A,D,k,_=t[1].length>0&&Pe(t);return{c(){e=d("form"),n=d("input"),l=g(),i=d("input"),r=g(),o=d("input"),f=g(),p=d("label"),p.textContent="Start Date:",s=g(),a=d("input"),h=g(),m=d("label"),m.textContent="End Date:",y=g(),v=d("input"),E=g(),N=d("textarea"),P=g(),w=d("button"),w.textContent="Add Experience",q=g(),_&&_.c(),A=me(),c(n,"placeholder","Company Name"),c(n,"type","text"),c(n,"id","companyName"),n.required=!0,c(i,"placeholder","Position Title"),c(i,"type","text"),c(i,"id","positionTitle"),i.required=!0,c(o,"placeholder","Location"),c(o,"type","text"),c(o,"id","location"),o.required=!0,c(p,"for","startDate"),c(a,"type","date"),c(a,"id","startDate"),a.required=!0,c(m,"for","endDate"),c(v,"type","date"),c(v,"id","endDate"),v.required=!0,c(N,"placeholder","Description (optional)"),c(N,"id","description"),c(w,"type","submit")},m(b,$){I(b,e,$),u(e,n),C(n,t[0].companyName),u(e,l),u(e,i),C(i,t[0].positionTitle),u(e,r),u(e,o),C(o,t[0].location),u(e,f),u(e,p),u(e,s),u(e,a),C(a,t[0].startDate),u(e,h),u(e,m),u(e,y),u(e,v),C(v,t[0].endDate),u(e,E),u(e,N),C(N,t[0].description),u(e,P),u(e,w),I(b,q,$),_&&_.m(b,$),I(b,A,$),D||(k=[L(n,"input",t[4]),L(i,"input",t[5]),L(o,"input",t[6]),L(a,"input",t[7]),L(v,"input",t[8]),L(N,"input",t[9]),L(e,"submit",t[2])],D=!0)},p(b,[$]){$&1&&n.value!==b[0].companyName&&C(n,b[0].companyName),$&1&&i.value!==b[0].positionTitle&&C(i,b[0].positionTitle),$&1&&o.value!==b[0].location&&C(o,b[0].location),$&1&&C(a,b[0].startDate),$&1&&C(v,b[0].endDate),$&1&&C(N,b[0].description),b[1].length>0?_?_.p(b,$):(_=Pe(b),_.c(),_.m(A.parentNode,A)):_&&(_.d(1),_=null)},i:z,o:z,d(b){b&&(U(e),U(q),U(A)),_&&_.d(b),D=!1,Y(k)}}}function dt(t,e,n){let l={companyName:"",positionTitle:"",startDate:"",endDate:"",location:"",description:""},i=[];function r(E){if(E.preventDefault(),!l.companyName||!l.positionTitle||!l.startDate||!l.endDate||!l.location||!l.description){alert("Please fill in all fields.");return}const N={companyName:l.companyName,positionTitle:l.positionTitle,startDate:l.startDate,endDate:l.endDate,location:l.location,description:l.description};n(1,i=[...i,N]),o()}function o(){n(0,l={companyName:"",positionTitle:"",startDate:"",endDate:"",location:"",description:""})}function f(E){i.splice(E,1),n(1,i=[...i])}function p(){l.companyName=this.value,n(0,l)}function s(){l.positionTitle=this.value,n(0,l)}function a(){l.location=this.value,n(0,l)}function h(){l.startDate=this.value,n(0,l)}function m(){l.endDate=this.value,n(0,l)}function y(){l.description=this.value,n(0,l)}return[l,i,r,f,p,s,a,h,m,y,E=>f(E)]}class ht extends ae{constructor(e){super(),ce(this,e,dt,pt,se,{})}}function Ae(t,e,n){const l=t.slice();return l[7]=e[n],l[9]=n,l}function Ue(t){let e,n=ee(t[1]),l=[];for(let i=0;i<n.length;i+=1)l[i]=Ie(Ae(t,n,i));return{c(){e=d("div");for(let i=0;i<l.length;i+=1)l[i].c();c(e,"class","skills-list")},m(i,r){I(i,e,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(i,r){if(r&10){n=ee(i[1]);let o;for(o=0;o<n.length;o+=1){const f=Ae(i,n,o);l[o]?l[o].p(f,r):(l[o]=Ie(f),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){i&&U(e),ke(l,i)}}}function Ie(t){let e,n,l=t[7]+"",i,r,o,f,p,s;function a(){return t[5](t[9])}return{c(){e=d("div"),n=d("p"),i=T(l),r=g(),o=d("button"),o.textContent="Remove",f=g(),c(e,"class","skill-entry")},m(h,m){I(h,e,m),u(e,n),u(n,i),u(e,r),u(e,o),u(e,f),p||(s=L(o,"click",a),p=!0)},p(h,m){t=h,m&2&&l!==(l=t[7]+"")&&F(i,l)},d(h){h&&U(e),p=!1,s()}}}function _t(t){let e,n,l,i,r,o,f,p,s=t[1].length>0&&Ue(t);return{c(){e=d("form"),n=d("input"),l=g(),i=d("button"),i.textContent="Add Skill",r=g(),s&&s.c(),o=me(),c(n,"placeholder","Skill"),c(n,"type","text"),c(n,"id","skill"),n.required=!0,c(i,"type","submit")},m(a,h){I(a,e,h),u(e,n),C(n,t[0]),u(e,l),u(e,i),I(a,r,h),s&&s.m(a,h),I(a,o,h),f||(p=[L(n,"input",t[4]),L(e,"submit",t[2])],f=!0)},p(a,[h]){h&1&&n.value!==a[0]&&C(n,a[0]),a[1].length>0?s?s.p(a,h):(s=Ue(a),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:z,o:z,d(a){a&&(U(e),U(r),U(o)),s&&s.d(a),f=!1,Y(p)}}}function mt(t,e,n){let l="",i=[];function r(a){if(a.preventDefault(),!l){alert("Please enter a skill.");return}n(1,i=[...i,l]),o()}function o(){n(0,l="")}function f(a){i.splice(a,1),n(1,i=[...i])}function p(){l=this.value,n(0,l)}return[l,i,r,f,p,a=>f(a)]}class gt extends ae{constructor(e){super(),ce(this,e,mt,_t,se,{})}}function Oe(t,e,n){const l=t.slice();return l[6]=e[n],l[8]=n,l}function Re(t){let e,n=ee(t[1]),l=[];for(let i=0;i<n.length;i+=1)l[i]=Me(Oe(t,n,i));return{c(){e=d("div");for(let i=0;i<l.length;i+=1)l[i].c();c(e,"class","certificate-entries")},m(i,r){I(i,e,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(i,r){if(r&10){n=ee(i[1]);let o;for(o=0;o<n.length;o+=1){const f=Oe(i,n,o);l[o]?l[o].p(f,r):(l[o]=Me(f),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){i&&U(e),ke(l,i)}}}function Me(t){let e,n,l,i=t[6]+"",r,o,f,p,s,a;function h(){return t[5](t[8])}return{c(){e=d("div"),n=d("p"),l=T("Certificate Title: "),r=T(i),o=g(),f=d("button"),f.textContent="Remove",p=g(),c(e,"class","certificate-entry")},m(m,y){I(m,e,y),u(e,n),u(n,l),u(n,r),u(e,o),u(e,f),u(e,p),s||(a=L(f,"click",h),s=!0)},p(m,y){t=m,y&2&&i!==(i=t[6]+"")&&F(r,i)},d(m){m&&U(e),s=!1,a()}}}function vt(t){let e,n,l,i,r,o,f,p,s=t[1].length>0&&Re(t);return{c(){e=d("form"),n=d("input"),l=g(),i=d("button"),i.textContent="Add Certificate",r=g(),s&&s.c(),o=me(),c(n,"placeholder","Certificate"),c(n,"type","text"),c(n,"id","certificateTitle"),n.required=!0,c(i,"type","submit")},m(a,h){I(a,e,h),u(e,n),C(n,t[0]),u(e,l),u(e,i),I(a,r,h),s&&s.m(a,h),I(a,o,h),f||(p=[L(n,"input",t[4]),L(e,"submit",t[2])],f=!0)},p(a,[h]){h&1&&n.value!==a[0]&&C(n,a[0]),a[1].length>0?s?s.p(a,h):(s=Re(a),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:z,o:z,d(a){a&&(U(e),U(r),U(o)),s&&s.d(a),f=!1,Y(p)}}}function bt(t,e,n){let l="",i=[];function r(s){if(s.preventDefault(),!l){alert("Please enter a certificate title.");return}n(1,i=[...i,l]),n(0,l="")}function o(s){i.splice(s,1),n(1,i=[...i])}function f(){l=this.value,n(0,l)}return[l,i,r,o,f,s=>o(s)]}class yt extends ae{constructor(e){super(),ce(this,e,bt,vt,se,{})}}function kt(t){let e,n,l,i,r,o,f,p,s,a,h,m,y,v,E,N,P,w,q,A,D,k,_,b,$,M,G,j,J,Z,V,Q,x,B,H,W,K,X,O;return p=new lt({}),v=new ft({}),D=new ht({}),j=new gt({}),H=new yt({}),{c(){e=d("main"),n=d("h1"),n.textContent="CV Creator",l=g(),i=d("div"),r=d("div"),o=d("h2"),o.textContent="Personal Info",f=g(),pe(p.$$.fragment),s=g(),a=d("div"),h=d("button"),h.textContent="Education",m=g(),y=d("div"),pe(v.$$.fragment),N=g(),P=d("div"),w=d("button"),w.textContent="Experience",q=g(),A=d("div"),pe(D.$$.fragment),_=g(),b=d("div"),$=d("button"),$.textContent="Skills",M=g(),G=d("div"),pe(j.$$.fragment),Z=g(),V=d("div"),Q=d("button"),Q.textContent="Certificates",x=g(),B=d("div"),pe(H.$$.fragment),c(o,"class","main-section"),c(r,"class","section-container open"),c(h,"class","main-buttons"),c(y,"class",E="section "+(t[0]==="education"&&"open")),c(a,"class","section-container"),c(w,"class","main-buttons"),c(A,"class",k="section "+(t[0]==="experience"&&"open")),c(P,"class","section-container"),c($,"class","main-buttons"),c(G,"class",J="section "+(t[0]==="skills"&&"open")),c(b,"class","section-container"),c(Q,"class","main-buttons"),c(B,"class",W="section "+(t[0]==="certificates"&&"open")),c(V,"class","section-container"),c(i,"class","left-container")},m(S,ne){I(S,e,ne),u(e,n),u(e,l),u(e,i),u(i,r),u(r,o),u(r,f),oe(p,r,null),u(i,s),u(i,a),u(a,h),u(a,m),u(a,y),oe(v,y,null),u(i,N),u(i,P),u(P,w),u(P,q),u(P,A),oe(D,A,null),u(i,_),u(i,b),u(b,$),u(b,M),u(b,G),oe(j,G,null),u(i,Z),u(i,V),u(V,Q),u(V,x),u(V,B),oe(H,B,null),K=!0,X||(O=[L(h,"click",t[2]),L(w,"click",t[3]),L($,"click",t[4]),L(Q,"click",t[5])],X=!0)},p(S,[ne]){(!K||ne&1&&E!==(E="section "+(S[0]==="education"&&"open")))&&c(y,"class",E),(!K||ne&1&&k!==(k="section "+(S[0]==="experience"&&"open")))&&c(A,"class",k),(!K||ne&1&&J!==(J="section "+(S[0]==="skills"&&"open")))&&c(G,"class",J),(!K||ne&1&&W!==(W="section "+(S[0]==="certificates"&&"open")))&&c(B,"class",W)},i(S){K||(te(p.$$.fragment,S),te(v.$$.fragment,S),te(D.$$.fragment,S),te(j.$$.fragment,S),te(H.$$.fragment,S),K=!0)},o(S){fe(p.$$.fragment,S),fe(v.$$.fragment,S),fe(D.$$.fragment,S),fe(j.$$.fragment,S),fe(H.$$.fragment,S),K=!1},d(S){S&&U(e),ue(p),ue(v),ue(D),ue(j),ue(H),X=!1,Y(O)}}}function Dt(t,e,n){let l="";function i(s){l===s?n(0,l=""):n(0,l=s)}return[l,i,()=>i("education"),()=>i("experience"),()=>i("skills"),()=>i("certificates")]}class $t extends ae{constructor(e){super(),ce(this,e,Dt,kt,se,{})}}new $t({target:document.body});
