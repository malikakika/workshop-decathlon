if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>c(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-860c9203"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9a70e6a22154e2a68e97c012688ca519"},{url:"/_next/static/chunks/176-a57ad45d7ecb9e11.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/452-fa0e675275d3e295.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/472-df9079a9d4429536.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/540-0b6f6c4acc6d832f.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/691-9ae2eefcdac2b698.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/77cbbdfc-744107351008b9ed.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/_not-found-976bd7eb9499ed60.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/association/page-b89e23567715e425.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/hopspots/page-d3ac6830af1bf7c5.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/layout-596d90187d1866f4.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/login/page-5364d98a780e709e.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/page-f47336ae5c28bff4.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/profile/page-5113674326646684.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/register/page-c3b65c807528044e.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/trajets/%5Bid%5D/map/page-88970f2b1abe6864.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/trajets/%5Bid%5D/page-2bdb559b06dd507b.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/app/trajets/page-e10d0765e5c235f9.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/fd9d1056-88e36da51761b5c1.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/framework-dace5c5628192eb6.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/main-app-997eb3cc0fc1977e.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/main-f306d951e70ce60e.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-86afc3339da9bd5c.js",revision:"giGAhK7TsSccWI2LKxrzV"},{url:"/_next/static/css/d0dfa06fde3d3ce2.css",revision:"d0dfa06fde3d3ce2"},{url:"/_next/static/css/fc1c9daac70c093b.css",revision:"fc1c9daac70c093b"},{url:"/_next/static/giGAhK7TsSccWI2LKxrzV/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/giGAhK7TsSccWI2LKxrzV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/favicon.ico",revision:"d4d62b2ac4cfa63ade7f1766fb098bc5"},{url:"/manifest.json",revision:"7a464293a05e0332ce6ac5d8d93fdcd0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
