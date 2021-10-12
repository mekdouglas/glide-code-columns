(()=>{var v=Object.defineProperty,L=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))C.call(n,t)&&m(e,t,n[t]);if(g)for(var t of g(n))T.call(n,t)&&m(e,t,n[t]);return e},c=(e,n)=>L(e,w(n));var p=(e,n,t)=>new Promise((l,a)=>{var s=i=>{try{o(t.next(i))}catch(u){a(u)}},r=i=>{try{o(t.throw(i))}catch(u){a(u)}},o=i=>i.done?l(i.value):Promise.resolve(i.value).then(s,r);o((t=t.apply(e,n)).next())});function f(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(f):e}function x(e,n){return p(this,null,function*(){var o;let{data:{key:t,params:l}}=e,a,s;try{a=yield n(...l)}catch(i){a=void 0;try{s=i.toString()}catch(u){s="Exception can't be stringified."}}let r={key:t};a!==void 0&&(a=f(a),r.result={type:"string",value:a}),s!==void 0&&(r.error=s),((o=e.source)==null?void 0:o.postMessage).call(o,r,"*")})}function y(e){return typeof window!="undefined"&&window.addEventListener("message",n=>x(n,e.run)),c(d({},e),{json:JSON.stringify(P(e),null,2)})}var M=`
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
    `,H=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function P(e){let{name:n,description:t,author:l,result:a,params:s,about:r,video:o}=e,{icon:i=H}=e;return i==="glide"&&(i=M),{name:n,description:t,author:l,result:a,about:r,icon:i,video:o,params:Object.entries(s).map(([u,h])=>d({name:u},h))}}var b=(e,n,t)=>p(void 0,null,function*(){let l=e==null?void 0:e.value;if(l===void 0)return;let a=n==null?void 0:n.value;if(a===void 0)return;let s=t==null?void 0:t.value;if(s===void 0)return;let{data:r}=yield fetch(`https://translation.googleapis.com/language/translate/v2?key=${s}`,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({q:[l],target:a})}).then(o=>o.json());if(r!==void 0&&r.translations!==void 0&&r.translations.length>0)return r.translations[0].translatedText}),Z=y({name:"Google Translate",description:"Translate from one language to another",author:"David Siegel <david@glideapps.com>",video:"https://www.youtube.com/watch?v=A3knNbGfXh4",about:`
      Find supported languages at [cloud.google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages).
    `,params:{text:{displayName:"Text",type:"string"},language:{displayName:"Target Language",type:"string"},key:{displayName:"API Key",type:"string"}},result:{type:"string"},run:b,example:{text:"Hello, world!",language:"es"},icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.74 30.15L20.66 25.13L20.72 25.07C24.2 21.19 26.68 16.73 28.14 12.01H34V8H20V4H16V8H2V11.98H24.34C22.99 15.84 20.88 19.5 18 22.7C16.14 20.63 14.6 18.38 13.38 16H9.38C10.84 19.26 12.84 22.34 15.34 25.12L5.17 35.17L8 38L18 28L24.22 34.22L25.74 30.15ZM37 20H33L24 44H28L30.25 38H39.75L42 44H46L37 20ZM31.75 34L35 25.33L38.25 34H31.75Z" fill="currentColor"/>
      </svg>
    `});})();
//# sourceMappingURL=index.js.map
