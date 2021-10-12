(()=>{var v=Object.defineProperty,h=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&C(e,n,t[n]);if(d)for(var n of d(t))M.call(t,n)&&C(e,n,t[n]);return e},c=(e,t)=>h(e,w(t));var m=(e,t,n)=>new Promise((l,o)=>{var i=r=>{try{a(n.next(r))}catch(u){o(u)}},s=r=>{try{a(n.throw(r))}catch(u){o(u)}},a=r=>r.done?l(r.value):Promise.resolve(r.value).then(i,s);a((n=n.apply(e,t)).next())});function g(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(g):e}function x(e,t){return m(this,null,function*(){var a;let{data:{key:n,params:l}}=e,o,i;try{o=yield t(...l)}catch(r){o=void 0;try{i=r.toString()}catch(u){i="Exception can't be stringified."}}let s={key:n};o!==void 0&&(o=g(o),s.result={type:"string",value:o}),i!==void 0&&(s.error=i),((a=e.source)==null?void 0:a.postMessage).call(a,s,"*")})}function y(e){return typeof window!="undefined"&&window.addEventListener("message",t=>x(t,e.run)),c(p({},e),{json:JSON.stringify(T(e),null,2)})}var b=`
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
</svg>`;function T(e){let{name:t,description:n,author:l,result:o,params:i,about:s,video:a}=e,{icon:r=P}=e;return r==="glide"&&(r=b),{name:t,description:n,author:l,result:o,about:s,icon:r,video:a,params:Object.entries(i).map(([u,f])=>p({name:u},f))}}var S=(e,t,n)=>m(void 0,null,function*(){let{value:l=600}=e,{value:o="1"}=n,{value:i=""}=t;return i==="random"&&(i=""),`https://doodleipsum.com/${l}/${i}?n=${encodeURIComponent(o)}`}),N=y({name:"Doodle Ipsum",description:"Generate random illustrations from data",video:"https://www.youtube.com/watch?v=kvUU1N-B_Ok",about:`
      [Doodle Ipsum](https://doodleipsum.com) is the *lorem ipsum* of illustrations. Learn more at [doodleipsum.com](https://doodleipsum.com).
    `,author:"David Siegel <david@glideapps.com>",params:{size:{displayName:"Size",type:"number"},category:{displayName:"Category (random|flat|hand-drawn|outline|abstract|avatar)",type:"string"},random:{displayName:"Random Seed",type:"primitive"}},example:{size:200,category:"avatar",random:42},result:{type:"image-uri"},run:S,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37 26C42.5228 26 47 21.5228 47 16C47 10.4772 42.5228 6 37 6C31.4772 6 27 10.4772 27 16C27 21.5228 31.4772 26 37 26Z" fill="currentColor"/>
        <path d="M27 27H11C10.4477 27 10 27.4477 10 28V44C10 44.5523 10.4477 45 11 45H27C27.5523 45 28 44.5523 28 44V28C28 27.4477 27.5523 27 27 27Z" fill="currentColor"/>
        <path d="M3.99981 21H21.9998C22.1768 21 22.3506 20.9529 22.5035 20.8638C22.6564 20.7746 22.7829 20.6464 22.87 20.4923C22.9572 20.3383 23.0019 20.1639 22.9995 19.9869C22.9972 19.8099 22.948 19.6367 22.8568 19.485L13.8568 4.48498C13.7612 4.34597 13.6333 4.23229 13.484 4.15375C13.3347 4.07522 13.1685 4.03418 12.9998 4.03418C12.8311 4.03418 12.6649 4.07522 12.5156 4.15375C12.3663 4.23229 12.2384 4.34597 12.1428 4.48498L3.14281 19.485C3.05166 19.6367 3.00241 19.8099 3.00009 19.9869C2.99777 20.1639 3.04246 20.3383 3.12961 20.4923C3.21675 20.6464 3.34323 20.7746 3.49611 20.8638C3.649 20.9529 3.82281 21 3.99981 21Z" fill="currentColor"/>
      </svg>
    `});})();
//# sourceMappingURL=index.js.map
