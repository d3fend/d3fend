function x(){}const Y=t=>t;function yt(t,e){for(const n in e)t[n]=e[n];return t}function gt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Z(t){return t()}function Q(){return Object.create(null)}function $(t){t.forEach(Z)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Wt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function bt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Kt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?yt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const c=tt(e,n,i,l);t.p(c,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t==null?"":t}function Yt(t,e,n){return t.set(n),e}const et=typeof window!="undefined";let nt=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):x;const b=new Set;function it(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&G(it)}function rt(t){let e;return b.size===0&&G(it),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let R=!1;function $t(){R=!0}function vt(){R=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:wt(1,r,_=>e[n[_]].claim_order,u))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[s],f)}}function Et(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=I("style");return Nt(st(t),e),e.sheet}function Nt(t,e){Et(t.head||t,e)}function Tt(t,e){if(R){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){R&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function te(){return W(" ")}function ee(){return W("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function lt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,r=!1){lt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return ut(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function se(t,e,n){return ot(t,e,n,I)}function ce(t,e,n){return ot(t,e,n,ct)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function le(t){return Mt(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ue(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);lt(t);const r=t.splice(n,i-n+1);M(r[0]),M(r[r.length-1]);const l=r.slice(1,r.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e==null?"":e}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function de(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ct(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class V extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}const D=new Map;let H=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:At(e),rules:{}};return D.set(t,n),n}function ft(t,e,n,i,r,l,c,o=0){const s=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=s){const N=e+(n-e)*l(m);u+=m*100+`%{${c(N,1-N)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${o}`,_=st(t),{stylesheet:d,rules:h}=D.get(_)||Lt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,H+=1,a}function O(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Rt())}function Rt(){G(()=>{H||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let E;function y(t){E=t}function v(){if(!E)throw new Error("Function called outside component initialization");return E}function he(t){v().$$.on_mount.push(t)}function me(t){v().$$.after_update.push(t)}function pe(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=at(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function ye(t,e){return v().$$.context.set(t,e),e}function ge(t){return v().$$.context.get(t)}const k=[],X=[],S=[],B=[],_t=Promise.resolve();let z=!1;function dt(){z||(z=!0,_t.then(J))}function be(){return dt(),_t}function A(t){S.push(t)}function xe(t){B.push(t)}const P=new Set;let C=0;function J(){const t=E;do{for(;C<k.length;){const e=k[C];C++,y(e),qt(e.$$)}for(y(null),k.length=0,C=0;X.length;)X.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];P.has(n)||(P.add(n),n())}S.length=0}while(k.length);for(;B.length;)B.pop()();z=!1,P.clear(),y(t)}function qt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function ht(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function Pt(){g={r:0,c:[],p:g}}function Ot(){g.r||$(g.c),g=g.p}function mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const pt={duration:0};function $e(t,e,n){let i=e(t,n),r=!1,l,c,o=0;function s(){l&&O(t,l)}function u(){const{delay:a=0,duration:_=300,easing:d=Y,tick:h=x,css:p}=i||pt;p&&(l=ft(t,0,1,_,a,d,p,o++)),h(0,1);const m=nt()+a,N=m+_;c&&c.abort(),r=!0,A(()=>L(t,!0,"start")),c=rt(q=>{if(r){if(q>=N)return h(1,0),L(t,!0,"end"),s(),r=!1;if(q>=m){const K=d((q-m)/_);h(K,1-K)}}return r})}let f=!1;return{start(){f||(f=!0,O(t),F(i)?(i=i(),ht().then(u)):u())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function ve(t,e,n){let i=e(t,n),r=!0,l;const c=g;c.r+=1;function o(){const{delay:s=0,duration:u=300,easing:f=Y,tick:a=x,css:_}=i||pt;_&&(l=ft(t,1,0,u,s,f,_));const d=nt()+s,h=d+u;A(()=>L(t,!1,"start")),rt(p=>{if(r){if(p>=h)return a(0,1),L(t,!1,"end"),--c.r||$(c.c),!1;if(p>=d){const m=f((p-d)/u);a(1-m,m)}}return r})}return F(i)?ht().then(()=>{i=i(),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),r&&(l&&O(t,l),r=!1)}}}function we(t,e){const n=e.token={};function i(r,l,c,o){if(e.token!==n)return;e.resolved=o;let s=e.ctx;c!==void 0&&(s=s.slice(),s[c]=o);const u=r&&(e.current=r)(s);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==l&&a&&(Pt(),Bt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),Ot())}):e.block.d(1),u.c(),mt(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[l]=u),f&&J()}if(gt(t)){const r=v();if(t.then(l=>{y(r),i(e.then,1,e.value,l),y(null)},l=>{if(y(r),i(e.catch,2,e.error,l),y(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ke(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ee(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=e[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function Ne(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Te(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const s=l.map(Z).filter(F);c?c.push(...s):$(s),t.$$.on_mount=[]}),o.forEach(A)}function Ft(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(k.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,r,l,c,o=[-1]){const s=E;y(t);const u=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Gt(t,a)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const a=jt(e.target);u.fragment&&u.fragment.l(a),a.forEach(M)}else u.fragment&&u.fragment.c();e.intro&&mt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),vt(),J()}y(s)}class je{$destroy(){Ft(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Yt as $,Ae as A,Ft as B,yt as C,be as D,x as E,X as F,Ne as G,Kt as H,Tt as I,xe as J,Ut as K,Vt as L,Qt as M,ne as N,A as O,$e as P,ve as Q,Jt as R,je as S,ct as T,ce as U,_e as V,Wt as W,Zt as X,$ as Y,ge as Z,de as _,jt as a,Xt as a0,ae as a1,ie as a2,F as a3,V as a4,ue as a5,pe as a6,we as a7,ke as a8,re as b,se as c,M as d,I as e,fe as f,St as g,Mt as h,Se as i,oe as j,te as k,ee as l,le as m,Pt as n,Bt as o,Ot as p,mt as q,ye as r,It as s,W as t,me as u,he as v,Te as w,Ce as x,zt as y,Ee as z};