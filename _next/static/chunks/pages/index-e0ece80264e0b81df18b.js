(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{94184:function(r,e){var n;!function(){"use strict";var a={}.hasOwnProperty;function t(){for(var r=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)r.push(n);else if(Array.isArray(n)){if(n.length){var o=t.apply(null,n);o&&r.push(o)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&r.push(i);else r.push(n.toString())}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):void 0===(n=function(){return t}.apply(e,[]))||(r.exports=n)}()},56839:function(r,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var a=n(94184),t=n.n(a),s=n(67294),o=n(30220),i=n(85893),l=!0;e.default=function(r){var e=r.manifests,n=Object.keys(e).sort((function(r,n){return e[r].name.localeCompare(e[n].name)})),a=(0,s.useState)(),l=a[0],c=a[1];return(0,s.useEffect)((function(){var r=localStorage.column;void 0===e[r]&&(r=n[0]),c(r)})),(0,i.jsxs)("div",{className:"flex flex-col h-screen text-gray-700 dark:text-gray-50",children:[(0,i.jsx)("div",{className:"h-16 bg-[#12CCE5] shadow hidden",children:"Header"}),(0,i.jsxs)("div",{className:"flex flex-grow w-full",children:[(0,i.jsx)("div",{className:"border-r w-72 dark:bg-gray-900 dark:border-transparent",children:n.map((function(r){var n=e[r];return(0,i.jsx)("div",{className:t()("p-4 flex items-center space-x-4 overflow-hidden cursor-pointer border-b dark:border-gray-600",{" dark:bg-gray-900 cursor-pointer hover:bg-white dark:hover:bg-gray-800":r!==l,"bg-blue-500 text-white":r===l}),onClick:function(){localStorage.column=r,c(r)},children:(0,i.jsx)("div",{className:"flex-grow",children:(0,i.jsx)("div",{className:"text-base",children:n.name})})},r)}))}),(0,i.jsx)("div",{className:"flex-grow bg-gray-100 dark:bg-black",children:l&&(0,i.jsx)(o.default,{slug:l})})]})]})}},45301:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(56839)}])}},function(r){r.O(0,[194,662,566,632,797,774,888,179],(function(){return e=45301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);