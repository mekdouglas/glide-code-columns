(()=>{var w=Object.defineProperty,M=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))x.call(t,n)&&g(e,n,t[n]);return e},f=(e,t)=>M(e,V(t));var p=(e,t,n)=>new Promise((a,r)=>{var l=i=>{try{o(n.next(i))}catch(u){r(u)}},s=i=>{try{o(n.throw(i))}catch(u){r(u)}},o=i=>i.done?a(i.value):Promise.resolve(i.value).then(l,s);o((n=n.apply(e,t)).next())});function C(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(C):e}function H(e,t){return p(this,null,function*(){var o;let{data:{key:n,params:a}}=e,r,l;try{r=yield t(...a)}catch(i){r=void 0;try{l=i.toString()}catch(u){l="Exception can't be stringified."}}let s={key:n};r!==void 0&&(r=C(r),s.result={type:"string",value:r}),l!==void 0&&(s.error=l),((o=e.source)==null?void 0:o.postMessage).call(o,s,"*")})}function y(e){return typeof window!="undefined"&&window.addEventListener("message",t=>H(t,e.run)),f(m({},e),{json:JSON.stringify(Z(e),null,2)})}var b=`
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
    `,P=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Z(e){let{name:t,description:n,author:a,result:r,params:l,about:s,video:o}=e,{icon:i=P}=e;return i==="glide"&&(i=b),{name:t,description:n,author:a,result:r,about:s,icon:i,video:o,params:Object.entries(l).map(([u,v])=>m({name:u},v))}}function h(e,t){let n="?"+Object.entries(t).map(([a,r])=>`${encodeURIComponent(a)}=${encodeURIComponent(r)}`).join("&");return e+n}var d;(function(t){t.UPC_A="UPC_A"})(d||(d={}));var T=(e,t)=>p(void 0,null,function*(){let{value:n}=e,{value:a=500}=t;if(n!==void 0)return h("https://mobiledemand-barcode.azurewebsites.net/barcode/image",{content:n,size:a,symbology:d.UPC_A,format:"png",text:!0})}),A=y({name:"Barcode",description:"Generates barcode images",about:`
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:12345678910,size:250},result:{type:"image-uri"},run:T,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`});})();
//# sourceMappingURL=index.js.map
