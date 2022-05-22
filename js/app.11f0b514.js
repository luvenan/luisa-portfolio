(function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/luisa-portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var b=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02d7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,i,a){var c=Object(n["w"])("Nav"),s=Object(n["w"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(c),Object(n["h"])(s)],64)}var i={id:"nav"},a=Object(n["f"])("a",{class:"nav-link",href:"#home"},"Home",-1),c=Object(n["f"])("a",{class:"nav-link",href:"#projects"},"Projects",-1),s=Object(n["f"])("a",{class:"nav-link",href:"#contact"},"Contact",-1),l=[a,c,s];function b(e,t,r,o,a,c){return Object(n["r"])(),Object(n["e"])("div",i,l)}var u={},d=r("6b0d"),p=r.n(d);const h=p()(u,[["render",b]]);var f=h,g={components:{Nav:f}};const j=p()(g,[["render",o]]);var O=j,m=r("6c02"),v=(r("a4d3"),r("e01a"),r("f2fb")),k=r.n(v),y=Object(n["g"])('<div id="home"><div class="photo-area"><img class="profile-photo" src="'+k.a+'" alt=""></div><div class="profile-container"><h1>Luisa Venancio</h1><h2>Front-end Developer</h2><p class="profile-description"> Stack: JavaScript, HTML, CSS, Vue.Js, Firebase; </p><p class="profile-description"> Software: Figma, Adobe Suite (InDesign, Illustrator, Photoshop); </p><p class="profile-description"> Drafting and 3d modeling: AutoCAD, Sketchup, TinkerCAD, UltimateCura; </p><p class="profile-description"> Languages: English, French, Brazilian Portuguese (native); </p></div></div>',1),w={id:"projects",class:"main-container"},S={id:"contact"},U=Object(n["f"])("a",{href:"mailto:luisa.carvalho.venancio@gmail.com",class:"contact-info"},"luisa.carvalho.venancio@gmail.com",-1),N={class:"social-media-container"},P={href:"https://github.com/luvenan",target:"_blank"},T={href:"https://www.linkedin.com/in/luisa-venancio-5b110088/",target:"_blank"},_={href:"https://twitter.com/LuisaVenancio",target:"_blank"};function C(e,t,r,o,i,a){var c=Object(n["w"])("ProjectCard"),s=Object(n["w"])("Icon");return Object(n["r"])(),Object(n["e"])(n["a"],null,[y,Object(n["f"])("div",w,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(o.projects,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{class:"cards-loop",key:e.id},[Object(n["h"])(c,{projectName:e.title,subtitle:e.subtitle,description:e.description,imageName:e.imageName,githubUrl:e.githubUrl,githubUrl2:e.githubUrl2,liveUrl:e.liveUrl,tags:e.tags,id:e.id,color:o.determineColor(t)},null,8,["projectName","subtitle","description","imageName","githubUrl","githubUrl2","liveUrl","tags","id","color"])])})),128))]),Object(n["f"])("div",S,[U,Object(n["f"])("div",N,[Object(n["f"])("a",P,[Object(n["h"])(s,{class:"social-media-icons",icon:"akar-icons:github-fill",style:{color:"#232221"}})]),Object(n["f"])("a",T,[Object(n["h"])(s,{class:"social-media-icons",icon:"akar-icons:linkedin-fill",style:{color:"#232221"}})]),Object(n["f"])("a",_,[Object(n["h"])(s,{class:"social-media-icons",icon:"akar-icons:twitter-fill",style:{color:"#232221"}})])])])],64)}var H={class:"grid-container"},I=["href"],J=["src","alt"],A={class:"project-description"},x=["href"],V=["href"],M=["href"],D=["href"],L=["href"];function F(e,t,r,o,i,a){return Object(n["r"])(),Object(n["e"])("div",{class:Object(n["n"])(["project-card",r.color])},[Object(n["f"])("div",H,[Object(n["f"])("div",{class:Object(n["n"])(["project-images-container",r.color])},[Object(n["f"])("a",{href:r.liveUrl,target:"_blank"},[Object(n["f"])("img",{class:"project-main-image",src:i.imagePath,alt:i.imageAlt},null,8,J)],8,I)],2),Object(n["f"])("div",{class:Object(n["n"])(["project-info-container",r.color])},[Object(n["f"])("h2",null,Object(n["y"])(r.projectName),1),Object(n["f"])("h3",null,Object(n["y"])(r.subtitle),1),Object(n["f"])("p",A,Object(n["y"])(r.description),1),Object(n["f"])("ul",{class:Object(n["n"])(["tags-container",r.color])},[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(r.tags,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{class:"tags",key:t},[Object(n["f"])("li",{class:Object(n["n"])(["tag",r.color])},"#"+Object(n["y"])(e),3)])})),128))],2),r.githubUrl2?Object(n["d"])("",!0):(Object(n["r"])(),Object(n["e"])("div",{key:0,class:Object(n["n"])(["links-container",r.color])},[Object(n["f"])("a",{href:r.githubUrl,class:Object(n["n"])(["proj-links",r.color]),target:"_blank"},"GitHub",10,x),Object(n["f"])("a",{href:r.liveUrl,class:Object(n["n"])(["proj-links",r.color]),target:"_blank"},"Live Website",10,V)],2)),r.githubUrl2?(Object(n["r"])(),Object(n["e"])("div",{key:1,class:Object(n["n"])(["links-container",r.color])},[Object(n["f"])("a",{href:r.githubUrl,class:Object(n["n"])(["proj-links",r.color]),target:"_blank"},"GitHub - Frontend",10,M),Object(n["f"])("a",{href:r.githubUrl2,class:Object(n["n"])(["proj-links",r.color]),target:"_blank"},"GitHub - Backend",10,D),Object(n["f"])("a",{href:r.liveUrl,class:Object(n["n"])(["proj-links",r.color]),target:"_blank"},"Live Website",10,L)],2)):Object(n["d"])("",!0)],2)])],2)}var B={props:["color","projectName","subtitle","description","imageName","tags","githubUrl","githubUrl2","liveUrl","id"],data:function(){return{imageAlt:"Screenshot of "+this.projectName,imagePath:r("7584")("./"+this.imageName)}}};r("9e59");const G=p()(B,[["render",F]]);var E=G,W=r("5779"),R={name:"Home",components:{Nav:f,ProjectCard:E,Icon:W["a"]},setup:function(){var e=[{title:"Reading Nook",subtitle:"SPA in Vue.Js",description:"A Web App built with Vue.Js using the Google Books API, where I can find a new book series to read. The backend is with Express.js and MongoDB. The left contains a search boxes and filters by author, genre, and number of books.  New series can be added and removed. I am currently working on this project and adding more features as I go. ",imageName:"reading-nook.png",tags:["Vue.Js","Google Books API","HTML","CSS","ExpressJS","MongoDB","NodeJS","Heroku"],githubUrl:"https://github.com/luvenan/reading-nook",githubUrl2:"https://github.com/luvenan/reading-nook-backend",liveUrl:"https://reading-nook.herokuapp.com/",id:0},{title:"Get-it-done App",subtitle:"To Do Web App in Vue.Js",description:'I wrote this project in Vue.Js and Firebase 9, at the request of family members who wanted a simple to-do app with a "standby" category. I used Firebase Auth for registering, login, and making sure to show only your own tasks. Tasks can be added to either the "to do" or "standby" categories, moved from one category to another, or checked off as done. They can also be edited in place, in any of the categories. The "done" items can be "undone" and are sent back to their original category.',imageName:"get-it-done.png",tags:["Vue.Js","Firebase","Vue-Router","HTML","CSS"],githubUrl:"https://github.com/luvenan/get-it-done",liveUrl:"https://get-it-done-fb970.web.app/",id:1},{title:"HYH Diet Check",subtitle:"Web App in Vanilla JavaScript",description:"I wrote this project in partnership with the blog Migraine Strong. It is a web app for people who follow the Heal Your Headache Diet where the most common migraine triggers are avoided. This was my first real-world project, so I used the tools and knowledge I had at the time. It is written in HTML, CSS, and Vanilla JavaScript. The database is in a CSV file and parsed into JavaScript using a plugin.",imageName:"hyhcheck.png",tags:["HTML","CSS","Vanilla JavaScript"],githubUrl:"https://github.com/luvenan/hyhcheck",liveUrl:"https://luvenan.github.io/hyhcheck/",id:2}],t=function(e){return 0===e||e%2===0?"dark-card":"light-card"};return{projects:e,determineColor:t}}};const Y=p()(R,[["render",C]]);var q=Y,z=[{path:"/",name:"Home",component:q}],K=Object(m["a"])({history:Object(m["b"])("/luisa-portfolio/"),routes:z}),Q=K;r("845f");Object(n["c"])(O).use(Q).mount("#app")},7584:function(e,t,r){var n={"./get-it-done.png":"b701","./hyhcheck.png":"7fd7","./reading-nook.png":"cddc"};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="7584"},"7fd7":function(e,t,r){e.exports=r.p+"img/hyhcheck.c6866ab4.png"},"845f":function(e,t,r){},"9e59":function(e,t,r){"use strict";r("02d7")},b701:function(e,t,r){e.exports=r.p+"img/get-it-done.0bdb800d.png"},cddc:function(e,t,r){e.exports=r.p+"img/reading-nook.51120fd5.png"},f2fb:function(e,t,r){e.exports=r.p+"img/Photo2.34f1b3d5.png"}});
//# sourceMappingURL=app.11f0b514.js.map