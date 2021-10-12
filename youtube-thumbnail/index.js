(()=>{var v=Object.defineProperty,w=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))L.call(n,t)&&g(e,t,n[t]);if(d)for(var t of d(n))x.call(n,t)&&g(e,t,n[t]);return e},c=(e,n)=>w(e,h(n));var m=(e,n,t)=>new Promise((l,r)=>{var a=i=>{try{o(t.next(i))}catch(u){r(u)}},s=i=>{try{o(t.throw(i))}catch(u){r(u)}},o=i=>i.done?l(i.value):Promise.resolve(i.value).then(a,s);o((t=t.apply(e,n)).next())});function C(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(C):e}function M(e,n){return m(this,null,function*(){var o;let{data:{key:t,params:l}}=e,r,a;try{r=yield n(...l)}catch(i){r=void 0;try{a=i.toString()}catch(u){a="Exception can't be stringified."}}let s={key:t};r!==void 0&&(r=C(r),s.result={type:"string",value:r}),a!==void 0&&(s.error=a),((o=e.source)==null?void 0:o.postMessage).call(o,s,"*")})}function f(e){return typeof window!="undefined"&&window.addEventListener("message",n=>M(n,e.run)),c(p({},e),{json:JSON.stringify(P(e),null,2)})}var b=`
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
    `,T=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function P(e){let{name:n,description:t,author:l,result:r,params:a,about:s,video:o}=e,{icon:i=T}=e;return i==="glide"&&(i=b),{name:n,description:t,author:l,result:r,about:s,icon:i,video:o,params:Object.entries(a).map(([u,y])=>p({name:u},y))}}function V(e){let n=e.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);return n==null?void 0:n[1]}function S(e){let n=V(e);return n===void 0?void 0:`https://i.ytimg.com/vi/${n}/maxresdefault.jpg`}var D=e=>m(void 0,null,function*(){if(e.value!==void 0)return S(e.value)}),I=f({name:"YouTube Thumbnail",description:"Display video thumbnail images",author:"David Siegel <david@glideapps.com>",params:{videoUrl:{displayName:"Video URL",type:"uri"}},result:{type:"image-uri"},example:{videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},run:D,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 14.4C47.5 14.4 47 11.1 45.6 9.59998C43.8 7.69998 41.7 7.69998 40.8 7.59998C34.1 7.09998 24 7.09998 24 7.09998C24 7.09998 13.9 7.09998 7.2 7.59998C6.3 7.69998 4.2 7.69998 2.4 9.59998C1 11.1 0.5 14.4 0.5 14.4C0.5 14.4 0 18.3 0 22.2V25.8C0 29.7 0.5 33.6 0.5 33.6C0.5 33.6 1 36.9 2.4 38.4C4.2 40.3 6.6 40.3 7.7 40.5C11.5 40.9 24 41 24 41C24 41 34.1 41 40.8 40.5C41.7 40.4 43.8 40.4 45.6 38.5C47 37 47.5 33.7 47.5 33.7C47.5 33.7 48 29.8 48 25.9V22.3C48 18.3 47.5 14.4 47.5 14.4ZM19 30.2V16.7L32 23.5L19 30.2Z" fill="currentColor"/>
</svg>
    `});})();
//# sourceMappingURL=index.js.map
