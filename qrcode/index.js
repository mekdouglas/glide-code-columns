(()=>{var h=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))w.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>y(e,v(t));var H=(e,t,n)=>new Promise((i,r)=>{var l=o=>{try{a(n.next(o))}catch(u){r(u)}},s=o=>{try{a(n.throw(o))}catch(u){r(u)}},a=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,s);a((n=n.apply(e,t)).next())});function d(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(d):e}function Z(e,t){return H(this,null,function*(){var a;let{data:{key:n,params:i}}=e,r,l;try{r=yield t(...i)}catch(o){r=void 0;try{l=o.toString()}catch(u){l="Exception can't be stringified."}}let s={key:n};r!==void 0&&(r=d(r),s.result={type:"string",value:r}),l!==void 0&&(s.error=l),((a=e.source)==null?void 0:a.postMessage).call(a,s,"*")})}function f(e){return typeof window!="undefined"&&window.addEventListener("message",t=>Z(t,e.run)),c(V({},e),{json:JSON.stringify(T(e),null,2)})}var L=`
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
    `,x=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function T(e){let{name:t,description:n,author:i,result:r,params:l,about:s,video:a}=e,{icon:o=x}=e;return o==="glide"&&(o=L),{name:t,description:n,author:i,result:r,about:s,icon:o,video:a,params:Object.entries(l).map(([u,C])=>V({name:u},C))}}function g(e,t){let n="?"+Object.entries(t).map(([i,r])=>`${encodeURIComponent(i)}=${encodeURIComponent(r)}`).join("&");return e+n}var P=(e,t)=>H(void 0,null,function*(){let{value:n}=e,{value:i=500}=t;if(n!==void 0)return g("https://api.qrserver.com/v1/create-qr-code/",{data:n,size:`${i}x${i}`,margin:0})}),j=f({name:"QR Code",description:"Generate QR codes",about:`
      Uses [goQR.me](https://goqr.me/api/)'s QR code generation API.
    `,video:"https://www.youtube.com/watch?v=142TGhaTMtI",author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:"https://glideapps.com",size:250},result:{type:"image-uri"},run:P,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `});})();
//# sourceMappingURL=index.js.map
