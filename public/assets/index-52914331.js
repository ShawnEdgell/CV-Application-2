var Fe=Object.defineProperty;var Be=(t,e,n)=>e in t?Fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>(Be(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function z(){}function Me(t){return t()}function De(){return Object.create(null)}function Q(t){t.forEach(Me)}function Ve(t){return typeof t=="function"}function re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function He(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function g(){return T(" ")}function he(){return T("")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ke(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){t.value=e??""}let ke;function pe(t){ke=t}const le=[],$e=[];let ue=[];const we=[],ze=Promise.resolve();let ve=!1;function Ge(){ve||(ve=!0,ze.then(je))}function be(t){ue.push(t)}const ge=new Set;let ne=0;function je(){if(ne!==0)return;const t=ke;do{try{for(;ne<le.length;){const e=le[ne];ne++,pe(e),Je(e.$$)}}catch(e){throw le.length=0,ne=0,e}for(pe(null),le.length=0,ne=0;$e.length;)$e.pop()();for(let e=0;e<ue.length;e+=1){const n=ue[e];ge.has(n)||(ge.add(n),n())}ue.length=0}while(le.length);for(;we.length;)we.pop()();ve=!1,ge.clear(),pe(t)}function Je(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function Qe(t){const e=[],n=[];ue.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),ue=e}const _e=new Set;let We;function te(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(_e.has(t))return;_e.add(t),We.c.push(()=>{_e.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Xe(t,e){t.d(1),e.delete(t.key)}function Ye(t,e,n,i,l,r,o,f,p,s,a,d){let m=t.length,y=r.length,v=m;const E={};for(;v--;)E[t[v].key]=v;const C=[],q=new Map,N=new Map,L=[];for(v=y;v--;){const h=d(l,r,v),b=n(h);let k=o.get(b);k?i&&L.push(()=>k.p(h,e)):(k=s(b,h),k.c()),q.set(b,C[v]=k),b in E&&N.set(b,Math.abs(v-E[b]))}const P=new Set,$=new Set;function D(h){te(h,1),h.m(f,a),o.set(h.key,h),a=h.first,y--}for(;m&&y;){const h=C[y-1],b=t[m-1],k=h.key,O=b.key;h===b?(a=h.first,m--,y--):q.has(O)?!o.has(k)||P.has(k)?D(h):$.has(O)?m--:N.get(k)>N.get(O)?($.add(k),D(h)):(P.add(O),m--):(p(b,o),m--)}for(;m--;){const h=t[m];q.has(h.key)||p(h,o)}for(;y;)D(C[y-1]);return Q(L),C}function fe(t){t&&t.c()}function ie(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),be(()=>{const r=t.$$.on_mount.map(Me).filter(Ve);t.$$.on_destroy?t.$$.on_destroy.push(...r):Q(r),t.$$.on_mount=[]}),l.forEach(be)}function oe(t,e){const n=t.$$;n.fragment!==null&&(Qe(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(le.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,l,r,o=null,f=[-1]){const p=ke;pe(t);const s=t.$$={fragment:null,ctx:[],props:r,update:z,not_equal:l,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:De(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};o&&o(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(d,m,...y)=>{const v=y.length?y[0]:m;return s.ctx&&l(s.ctx[d],s.ctx[d]=v)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](v),a&&Ze(t,d)),m}):[],s.update(),a=!0,Q(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const d=Ke(e.target);s.fragment&&s.fragment.l(d),d.forEach(A)}else s.fragment&&s.fragment.c();e.intro&&te(t.$$.fragment),ie(t,e.target,e.anchor),je()}pe(p)}class ce{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){oe(this,1),this.$destroy=z}$on(e,n){if(!Ve(n))return z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!He(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);function et(t){let e,n,i,l,r,o,f,p,s,a;return{c(){e=_("form"),n=_("input"),i=g(),l=_("input"),r=g(),o=_("input"),f=g(),p=_("input"),c(n,"placeholder","Name"),c(n,"type","text"),c(n,"id","name"),c(n,"autocomplete","off"),c(l,"placeholder","Address"),c(l,"type","text"),c(l,"id","address"),c(l,"autocomplete","off"),c(o,"placeholder","Email"),c(o,"type","email"),c(o,"id","email"),c(o,"autocomplete","off"),c(p,"placeholder","Phone Number"),c(p,"type","tel"),c(p,"id","phoneNumber"),c(p,"autocomplete","off")},m(d,m){U(d,e,m),u(e,n),w(n,t[0].name),u(e,i),u(e,l),w(l,t[0].address),u(e,r),u(e,o),w(o,t[0].email),u(e,f),u(e,p),w(p,t[0].phoneNumber),s||(a=[S(n,"input",t[1]),S(l,"input",t[2]),S(o,"input",t[3]),S(p,"input",t[4])],s=!0)},p(d,[m]){m&1&&n.value!==d[0].name&&w(n,d[0].name),m&1&&l.value!==d[0].address&&w(l,d[0].address),m&1&&o.value!==d[0].email&&w(o,d[0].email),m&1&&w(p,d[0].phoneNumber)},i:z,o:z,d(d){d&&A(e),s=!1,Q(a)}}}function tt(t,e,n){let i={name:"",address:"",email:"",phoneNumber:""};function l(){i.name=this.value,n(0,i)}function r(){i.address=this.value,n(0,i)}function o(){i.email=this.value,n(0,i)}function f(){i.phoneNumber=this.value,n(0,i)}return[i,l,r,o,f]}class nt extends ce{constructor(e){super(),se(this,e,tt,et,re,{})}}let de;const lt=new Uint8Array(16);function it(){if(!de&&(de=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!de))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return de(lt)}const M=[];for(let t=0;t<256;++t)M.push((t+256).toString(16).slice(1));function ot(t,e=0){return M[t[e+0]]+M[t[e+1]]+M[t[e+2]]+M[t[e+3]]+"-"+M[t[e+4]]+M[t[e+5]]+"-"+M[t[e+6]]+M[t[e+7]]+"-"+M[t[e+8]]+M[t[e+9]]+"-"+M[t[e+10]]+M[t[e+11]]+M[t[e+12]]+M[t[e+13]]+M[t[e+14]]+M[t[e+15]]}const ut=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ce={randomUUID:ut};function rt(t,e,n){if(Ce.randomUUID&&!e&&!t)return Ce.randomUUID();t=t||{};const i=t.random||(t.rng||it)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let l=0;l<16;++l)e[n+l]=i[l];return e}return ot(i)}function Ne(t,e,n){const i=t.slice();return i[15]=e[n],i[17]=n,i}function Ee(t){let e,n=[],i=new Map,l=ee(t[5]);const r=o=>o[15].id;for(let o=0;o<l.length;o+=1){let f=Ne(t,l,o),p=r(f);i.set(p,n[o]=Se(p,f))}return{c(){e=_("div");for(let o=0;o<n.length;o+=1)n[o].c();c(e,"class","education-entries")},m(o,f){U(o,e,f);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(e,null)},p(o,f){f&160&&(l=ee(o[5]),n=Ye(n,f,r,1,o,l,i,e,Xe,Se,null,Ne))},d(o){o&&A(e);for(let f=0;f<n.length;f+=1)n[f].d()}}}function Se(t,e){let n,i,l,r=e[17]+1+"",o,f,p,s,a=e[15].school+"",d,m,y,v,E=e[15].degree+"",C,q,N,L,P=e[15].location+"",$,D,h,b,k=e[15].startDate+"",O,J,W,H,X=e[15].endDate+"",j,K,G,R,Y,Z;function I(){return e[13](e[15])}return{key:t,first:null,c(){n=_("div"),i=_("h3"),l=T("Entry "),o=T(r),f=g(),p=_("p"),s=T("School: "),d=T(a),m=g(),y=_("p"),v=T("Degree: "),C=T(E),q=g(),N=_("p"),L=T("Location: "),$=T(P),D=g(),h=_("p"),b=T("Start Date: "),O=T(k),J=g(),W=_("p"),H=T("End Date: "),j=T(X),K=g(),G=_("button"),G.textContent="Remove",R=g(),c(n,"class","education-entry"),this.first=n},m(V,F){U(V,n,F),u(n,i),u(i,l),u(i,o),u(n,f),u(n,p),u(p,s),u(p,d),u(n,m),u(n,y),u(y,v),u(y,C),u(n,q),u(n,N),u(N,L),u(N,$),u(n,D),u(n,h),u(h,b),u(h,O),u(n,J),u(n,W),u(W,H),u(W,j),u(n,K),u(n,G),u(n,R),Y||(Z=S(G,"click",I),Y=!0)},p(V,F){e=V,F&32&&r!==(r=e[17]+1+"")&&B(o,r),F&32&&a!==(a=e[15].school+"")&&B(d,a),F&32&&E!==(E=e[15].degree+"")&&B(C,E),F&32&&P!==(P=e[15].location+"")&&B($,P),F&32&&k!==(k=e[15].startDate+"")&&B(O,k),F&32&&X!==(X=e[15].endDate+"")&&B(j,X)},d(V){V&&A(n),Y=!1,Z()}}}function st(t){let e,n,i,l,r,o,f,p,s,a,d,m,y,v,E,C,q,N,L,P,$=t[5].length>0&&Ee(t);return{c(){e=_("form"),n=_("input"),i=g(),l=_("input"),r=g(),o=_("input"),f=g(),p=_("label"),p.textContent="Start Date:",s=g(),a=_("input"),d=g(),m=_("label"),m.textContent="End Date:",y=g(),v=_("input"),E=g(),C=_("button"),C.textContent="Add Education",q=g(),$&&$.c(),N=he(),c(n,"placeholder","School"),c(n,"type","text"),c(n,"id","school"),n.required=!0,c(n,"autocomplete","off"),c(l,"placeholder","Degree"),c(l,"type","text"),c(l,"id","degree"),l.required=!0,c(l,"autocomplete","off"),c(o,"placeholder","Location"),c(o,"type","text"),c(o,"id","location"),o.required=!0,c(o,"autocomplete","off"),c(p,"for","startDate"),c(a,"type","date"),c(a,"id","startDate"),a.required=!0,c(a,"autocomplete","off"),c(m,"for","endDate"),c(v,"type","date"),c(v,"id","endDate"),v.required=!0,c(v,"autocomplete","off"),c(C,"type","submit")},m(D,h){U(D,e,h),u(e,n),w(n,t[0]),u(e,i),u(e,l),w(l,t[1]),u(e,r),u(e,o),w(o,t[4]),u(e,f),u(e,p),u(e,s),u(e,a),w(a,t[2]),u(e,d),u(e,m),u(e,y),u(e,v),w(v,t[3]),u(e,E),u(e,C),U(D,q,h),$&&$.m(D,h),U(D,N,h),L||(P=[S(n,"input",t[8]),S(l,"input",t[9]),S(o,"input",t[10]),S(a,"input",t[11]),S(v,"input",t[12]),S(e,"submit",t[6])],L=!0)},p(D,[h]){h&1&&n.value!==D[0]&&w(n,D[0]),h&2&&l.value!==D[1]&&w(l,D[1]),h&16&&o.value!==D[4]&&w(o,D[4]),h&4&&w(a,D[2]),h&8&&w(v,D[3]),D[5].length>0?$?$.p(D,h):($=Ee(D),$.c(),$.m(N.parentNode,N)):$&&($.d(1),$=null)},i:z,o:z,d(D){D&&(A(e),A(q),A(N)),$&&$.d(D),L=!1,Q(P)}}}function ct(t,e,n){let i="",l="",r="",o="",f="",p=[];function s(N){if(N.preventDefault(),!i||!l||!r||!o||!f){alert("Please fill in all fields.");return}const L={id:rt(),school:i,degree:l,startDate:r,endDate:o,location:f};n(5,p=[...p,L]),a()}function a(){n(0,i=""),n(1,l=""),n(2,r=""),n(3,o=""),n(4,f="")}function d(N){n(5,p=p.filter(L=>L.id!==N))}function m(){i=this.value,n(0,i)}function y(){l=this.value,n(1,l)}function v(){f=this.value,n(4,f)}function E(){r=this.value,n(2,r)}function C(){o=this.value,n(3,o)}return[i,l,r,o,f,p,s,d,m,y,v,E,C,N=>d(N.id)]}class at extends ce{constructor(e){super(),se(this,e,ct,st,re,{})}}function Te(t,e,n){const i=t.slice();return i[12]=e[n],i[14]=n,i}function Le(t){let e,n=ee(t[1]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Pe(Te(t,n,l));return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","experience-entries")},m(l,r){U(l,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(l,r){if(r&10){n=ee(l[1]);let o;for(o=0;o<n.length;o+=1){const f=Te(l,n,o);i[o]?i[o].p(f,r):(i[o]=Pe(f),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(l){l&&A(e),ye(i,l)}}}function Pe(t){let e,n,i,l,r,o=t[12].companyName+"",f,p,s,a,d=t[12].positionTitle+"",m,y,v,E,C=t[12].location+"",q,N,L,P,$=t[12].startDate+"",D,h,b,k,O=t[12].endDate+"",J,W,H,X,j=t[12].description+"",K,G,R,Y,Z,I;function V(){return t[10](t[14])}return{c(){e=_("div"),n=_("h3"),n.textContent=`Entry ${t[14]+1}`,i=g(),l=_("p"),r=T("Company Name: "),f=T(o),p=g(),s=_("p"),a=T("Position Title: "),m=T(d),y=g(),v=_("p"),E=T("Location: "),q=T(C),N=g(),L=_("p"),P=T("Start Date: "),D=T($),h=g(),b=_("p"),k=T("End Date: "),J=T(O),W=g(),H=_("p"),X=T("Description: "),K=T(j),G=g(),R=_("button"),R.textContent="Remove",Y=g(),c(e,"class","experience-entry")},m(F,x){U(F,e,x),u(e,n),u(e,i),u(e,l),u(l,r),u(l,f),u(e,p),u(e,s),u(s,a),u(s,m),u(e,y),u(e,v),u(v,E),u(v,q),u(e,N),u(e,L),u(L,P),u(L,D),u(e,h),u(e,b),u(b,k),u(b,J),u(e,W),u(e,H),u(H,X),u(H,K),u(e,G),u(e,R),u(e,Y),Z||(I=S(R,"click",V),Z=!0)},p(F,x){t=F,x&2&&o!==(o=t[12].companyName+"")&&B(f,o),x&2&&d!==(d=t[12].positionTitle+"")&&B(m,d),x&2&&C!==(C=t[12].location+"")&&B(q,C),x&2&&$!==($=t[12].startDate+"")&&B(D,$),x&2&&O!==(O=t[12].endDate+"")&&B(J,O),x&2&&j!==(j=t[12].description+"")&&B(K,j)},d(F){F&&A(e),Z=!1,I()}}}function ft(t){let e,n,i,l,r,o,f,p,s,a,d,m,y,v,E,C,q,N,L,P,$,D,h=t[1].length>0&&Le(t);return{c(){e=_("form"),n=_("input"),i=g(),l=_("input"),r=g(),o=_("input"),f=g(),p=_("label"),p.textContent="Start Date:",s=g(),a=_("input"),d=g(),m=_("label"),m.textContent="End Date:",y=g(),v=_("input"),E=g(),C=_("textarea"),q=g(),N=_("button"),N.textContent="Add Experience",L=g(),h&&h.c(),P=he(),c(n,"placeholder","Company Name"),c(n,"type","text"),c(n,"id","companyName"),n.required=!0,c(l,"placeholder","Position Title"),c(l,"type","text"),c(l,"id","positionTitle"),l.required=!0,c(o,"placeholder","Location"),c(o,"type","text"),c(o,"id","location"),o.required=!0,c(p,"for","startDate"),c(a,"type","date"),c(a,"id","startDate"),a.required=!0,c(m,"for","endDate"),c(v,"type","date"),c(v,"id","endDate"),v.required=!0,c(C,"placeholder","Description (optional)"),c(C,"id","description"),c(N,"type","submit")},m(b,k){U(b,e,k),u(e,n),w(n,t[0].companyName),u(e,i),u(e,l),w(l,t[0].positionTitle),u(e,r),u(e,o),w(o,t[0].location),u(e,f),u(e,p),u(e,s),u(e,a),w(a,t[0].startDate),u(e,d),u(e,m),u(e,y),u(e,v),w(v,t[0].endDate),u(e,E),u(e,C),w(C,t[0].description),u(e,q),u(e,N),U(b,L,k),h&&h.m(b,k),U(b,P,k),$||(D=[S(n,"input",t[4]),S(l,"input",t[5]),S(o,"input",t[6]),S(a,"input",t[7]),S(v,"input",t[8]),S(C,"input",t[9]),S(e,"submit",t[2])],$=!0)},p(b,[k]){k&1&&n.value!==b[0].companyName&&w(n,b[0].companyName),k&1&&l.value!==b[0].positionTitle&&w(l,b[0].positionTitle),k&1&&o.value!==b[0].location&&w(o,b[0].location),k&1&&w(a,b[0].startDate),k&1&&w(v,b[0].endDate),k&1&&w(C,b[0].description),b[1].length>0?h?h.p(b,k):(h=Le(b),h.c(),h.m(P.parentNode,P)):h&&(h.d(1),h=null)},i:z,o:z,d(b){b&&(A(e),A(L),A(P)),h&&h.d(b),$=!1,Q(D)}}}function pt(t,e,n){let i={companyName:"",positionTitle:"",startDate:"",endDate:"",location:"",description:""},l=[];function r(E){if(E.preventDefault(),!i.companyName||!i.positionTitle||!i.startDate||!i.endDate||!i.location||!i.description){alert("Please fill in all fields.");return}const C={companyName:i.companyName,positionTitle:i.positionTitle,startDate:i.startDate,endDate:i.endDate,location:i.location,description:i.description};n(1,l=[...l,C]),o()}function o(){n(0,i={companyName:"",positionTitle:"",startDate:"",endDate:"",location:"",description:""})}function f(E){l.splice(E,1),n(1,l=[...l])}function p(){i.companyName=this.value,n(0,i)}function s(){i.positionTitle=this.value,n(0,i)}function a(){i.location=this.value,n(0,i)}function d(){i.startDate=this.value,n(0,i)}function m(){i.endDate=this.value,n(0,i)}function y(){i.description=this.value,n(0,i)}return[i,l,r,f,p,s,a,d,m,y,E=>f(E)]}class dt extends ce{constructor(e){super(),se(this,e,pt,ft,re,{})}}function Ie(t,e,n){const i=t.slice();return i[7]=e[n],i[9]=n,i}function qe(t){let e,n=ee(t[1]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Ae(Ie(t,n,l));return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","skills-list")},m(l,r){U(l,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(l,r){if(r&10){n=ee(l[1]);let o;for(o=0;o<n.length;o+=1){const f=Ie(l,n,o);i[o]?i[o].p(f,r):(i[o]=Ae(f),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(l){l&&A(e),ye(i,l)}}}function Ae(t){let e,n,i=t[7]+"",l,r,o,f,p,s;function a(){return t[5](t[9])}return{c(){e=_("div"),n=_("p"),l=T(i),r=g(),o=_("button"),o.textContent="Remove",f=g(),c(e,"class","skill-entry")},m(d,m){U(d,e,m),u(e,n),u(n,l),u(e,r),u(e,o),u(e,f),p||(s=S(o,"click",a),p=!0)},p(d,m){t=d,m&2&&i!==(i=t[7]+"")&&B(l,i)},d(d){d&&A(e),p=!1,s()}}}function _t(t){let e,n,i,l,r,o,f,p,s=t[1].length>0&&qe(t);return{c(){e=_("form"),n=_("input"),i=g(),l=_("button"),l.textContent="Add Skill",r=g(),s&&s.c(),o=he(),c(n,"placeholder","Skill"),c(n,"type","text"),c(n,"id","skill"),n.required=!0,c(l,"type","submit")},m(a,d){U(a,e,d),u(e,n),w(n,t[0]),u(e,i),u(e,l),U(a,r,d),s&&s.m(a,d),U(a,o,d),f||(p=[S(n,"input",t[4]),S(e,"submit",t[2])],f=!0)},p(a,[d]){d&1&&n.value!==a[0]&&w(n,a[0]),a[1].length>0?s?s.p(a,d):(s=qe(a),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:z,o:z,d(a){a&&(A(e),A(r),A(o)),s&&s.d(a),f=!1,Q(p)}}}function ht(t,e,n){let i="",l=[];function r(a){if(a.preventDefault(),!i){alert("Please enter a skill.");return}n(1,l=[...l,i]),o()}function o(){n(0,i="")}function f(a){l.splice(a,1),n(1,l=[...l])}function p(){i=this.value,n(0,i)}return[i,l,r,f,p,a=>f(a)]}class mt extends ce{constructor(e){super(),se(this,e,ht,_t,re,{})}}function Ue(t,e,n){const i=t.slice();return i[6]=e[n],i[8]=n,i}function Oe(t){let e,n=ee(t[1]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Re(Ue(t,n,l));return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","certificate-entries")},m(l,r){U(l,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(l,r){if(r&10){n=ee(l[1]);let o;for(o=0;o<n.length;o+=1){const f=Ue(l,n,o);i[o]?i[o].p(f,r):(i[o]=Re(f),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(l){l&&A(e),ye(i,l)}}}function Re(t){let e,n,i,l=t[6]+"",r,o,f,p,s,a;function d(){return t[5](t[8])}return{c(){e=_("div"),n=_("p"),i=T("Certificate Title: "),r=T(l),o=g(),f=_("button"),f.textContent="Remove",p=g(),c(e,"class","certificate-entry")},m(m,y){U(m,e,y),u(e,n),u(n,i),u(n,r),u(e,o),u(e,f),u(e,p),s||(a=S(f,"click",d),s=!0)},p(m,y){t=m,y&2&&l!==(l=t[6]+"")&&B(r,l)},d(m){m&&A(e),s=!1,a()}}}function gt(t){let e,n,i,l,r,o,f,p,s=t[1].length>0&&Oe(t);return{c(){e=_("form"),n=_("input"),i=g(),l=_("button"),l.textContent="Add Certificate",r=g(),s&&s.c(),o=he(),c(n,"placeholder","Certificate"),c(n,"type","text"),c(n,"id","certificateTitle"),n.required=!0,c(l,"type","submit")},m(a,d){U(a,e,d),u(e,n),w(n,t[0]),u(e,i),u(e,l),U(a,r,d),s&&s.m(a,d),U(a,o,d),f||(p=[S(n,"input",t[4]),S(e,"submit",t[2])],f=!0)},p(a,[d]){d&1&&n.value!==a[0]&&w(n,a[0]),a[1].length>0?s?s.p(a,d):(s=Oe(a),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:z,o:z,d(a){a&&(A(e),A(r),A(o)),s&&s.d(a),f=!1,Q(p)}}}function vt(t,e,n){let i="",l=[];function r(s){if(s.preventDefault(),!i){alert("Please enter a certificate title.");return}n(1,l=[...l,i]),n(0,i="")}function o(s){l.splice(s,1),n(1,l=[...l])}function f(){i=this.value,n(0,i)}return[i,l,r,o,f,s=>o(s)]}class bt extends ce{constructor(e){super(),se(this,e,vt,gt,re,{})}}function yt(t){let e,n,i,l,r,o,f,p,s,a,d,m,y,v,E,C,q,N,L,P,$,D,h,b,k,O,J,W,H,X,j,K,G,R,Y,Z;return p=new nt({}),v=new at({}),P=new dt({}),O=new mt({}),K=new bt({}),{c(){e=_("main"),n=_("h1"),n.textContent="CV Creator",i=g(),l=_("div"),r=_("button"),r.textContent="Personal Info",o=g(),f=_("div"),fe(p.$$.fragment),a=g(),d=_("button"),d.textContent="Education",m=g(),y=_("div"),fe(v.$$.fragment),C=g(),q=_("button"),q.textContent="Experience",N=g(),L=_("div"),fe(P.$$.fragment),D=g(),h=_("button"),h.textContent="Skills",b=g(),k=_("div"),fe(O.$$.fragment),W=g(),H=_("button"),H.textContent="Certificates",X=g(),j=_("div"),fe(K.$$.fragment),c(r,"class","main-buttons"),c(f,"class",s="section "+(t[0]==="personalInfo"&&"open")),c(d,"class","main-buttons"),c(y,"class",E="section "+(t[0]==="education"&&"open")),c(q,"class","main-buttons"),c(L,"class",$="section "+(t[0]==="experience"&&"open")),c(h,"class","main-buttons"),c(k,"class",J="section "+(t[0]==="skills"&&"open")),c(H,"class","main-buttons"),c(j,"class",G="section "+(t[0]==="certificates"&&"open")),c(l,"class","left-container")},m(I,V){U(I,e,V),u(e,n),u(e,i),u(e,l),u(l,r),u(l,o),u(l,f),ie(p,f,null),u(l,a),u(l,d),u(l,m),u(l,y),ie(v,y,null),u(l,C),u(l,q),u(l,N),u(l,L),ie(P,L,null),u(l,D),u(l,h),u(l,b),u(l,k),ie(O,k,null),u(l,W),u(l,H),u(l,X),u(l,j),ie(K,j,null),R=!0,Y||(Z=[S(r,"click",t[2]),S(d,"click",t[3]),S(q,"click",t[4]),S(h,"click",t[5]),S(H,"click",t[6])],Y=!0)},p(I,[V]){(!R||V&1&&s!==(s="section "+(I[0]==="personalInfo"&&"open")))&&c(f,"class",s),(!R||V&1&&E!==(E="section "+(I[0]==="education"&&"open")))&&c(y,"class",E),(!R||V&1&&$!==($="section "+(I[0]==="experience"&&"open")))&&c(L,"class",$),(!R||V&1&&J!==(J="section "+(I[0]==="skills"&&"open")))&&c(k,"class",J),(!R||V&1&&G!==(G="section "+(I[0]==="certificates"&&"open")))&&c(j,"class",G)},i(I){R||(te(p.$$.fragment,I),te(v.$$.fragment,I),te(P.$$.fragment,I),te(O.$$.fragment,I),te(K.$$.fragment,I),R=!0)},o(I){ae(p.$$.fragment,I),ae(v.$$.fragment,I),ae(P.$$.fragment,I),ae(O.$$.fragment,I),ae(K.$$.fragment,I),R=!1},d(I){I&&A(e),oe(p),oe(v),oe(P),oe(O),oe(K),Y=!1,Q(Z)}}}function kt(t,e,n){let i="";function l(a){i===a?n(0,i=""):n(0,i=a)}return[i,l,()=>l("personalInfo"),()=>l("education"),()=>l("experience"),()=>l("skills"),()=>l("certificates")]}class Dt extends ce{constructor(e){super(),se(this,e,kt,yt,re,{})}}new Dt({target:document.body});