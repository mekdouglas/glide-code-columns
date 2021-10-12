(()=>{var P=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(n,e,t)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,c=(n,e)=>{for(var t in e||(e={}))S.call(e,t)&&d(n,t,e[t]);if(g)for(var t of g(e))x.call(e,t)&&d(n,t,e[t]);return n},h=(n,e)=>L(n,M(e));var u=(n,e,t)=>new Promise((a,r)=>{var o=i=>{try{m(t.next(i))}catch(l){r(l)}},s=i=>{try{m(t.throw(i))}catch(l){r(l)}},m=i=>i.done?a(i.value):Promise.resolve(i.value).then(o,s);m((t=t.apply(n,e)).next())});var f={timeoutSeconds:5*60};function y(n){return(new Date().getTime()-n.getTime())/1e3}var p=class{constructor(e=f){this.cache=new Map;this.props=c(c({},e),f)}get(e){return u(this,null,function*(){var r;let{timestamp:t,item:a}=(r=this.cache.get(e))!=null?r:{timestamp:new Date(0)};if(y(t)<this.props.timeoutSeconds)return a;this.cache.delete(e)})}getWith(e,t){return u(this,null,function*(){var o;let{timestamp:a,item:r}=(o=this.cache.get(e))!=null?o:{timestamp:new Date(0)};if(y(a)<this.props.timeoutSeconds)return r;{let s=yield t(e);return this.set(e,s),s}})}set(e,t){return this.cache.set(e,{timestamp:new Date,item:t})}fetch(a){return u(this,arguments,function*(e,t=e){return yield this.getWith(t,()=>fetch(e).then(r=>r.json()))})}};function C(n){return n instanceof Date?n.toISOString():Array.isArray(n)?n.map(C):n}function b(n,e){return u(this,null,function*(){var m;let{data:{key:t,params:a}}=n,r,o;try{r=yield e(...a)}catch(i){r=void 0;try{o=i.toString()}catch(l){o="Exception can't be stringified."}}let s={key:t};r!==void 0&&(r=C(r),s.result={type:"string",value:r}),o!==void 0&&(s.error=o),((m=n.source)==null?void 0:m.postMessage).call(m,s,"*")})}function v(n){return typeof window!="undefined"&&window.addEventListener("message",e=>b(e,n.run)),h(c({},n),{json:JSON.stringify(N(n),null,2)})}var D=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,I=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function N(n){let{name:e,description:t,author:a,result:r,params:o,about:s,video:m}=n,{icon:i=I}=n;return i==="glide"&&(i=D),{name:e,description:t,author:a,result:r,about:s,icon:i,video:m,params:Object.entries(o).map(([l,T])=>c({name:l},T))}}function V(n){let e=`${n}`,t=0;if(e.length===0)return t;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t=(t<<5)-t+r,t=t&t}return t}var w="3d",E=new p({timeoutSeconds:Number.MAX_SAFE_INTEGER}),j=(n,e)=>u(void 0,null,function*(){var i;let{value:t=w}=n,{value:a}=e;if(a===void 0)return;let r=yield E.fetch("/glide-brand-image/images.json"),o=(i=r[t])!=null?i:r[w],s=Math.abs(V(a));return`https://column.sh${o[s%o.length]}`}),H=v({name:"Glide Brand Image",description:"Glide 3D Data Shapes",author:"David Siegel <david@glideapps.com>",params:{category:{displayName:"Category (3d, avatar, or gradient)",type:"string"},random:{displayName:"Seed Value",type:"string"}},example:{category:"3d",random:"glideapps.com"},result:{type:"image-uri"},run:j,icon:"glide"});})();
//# sourceMappingURL=index.js.map
