import{s as U,n as k,f as Z}from"../chunks/scheduler.63274e7e.js";import{S as X,i as Y,g as p,h as f,j as v,f as u,k as c,a as G,z as ee,s as $,m as y,c as N,n as b,y as r,r as F,u as J,x as te,v as K,d as L,t as O,w as Q}from"../chunks/index.d0112d41.js";import{N as se}from"../chunks/navbar.bd3e29d8.js";import{e as ae}from"../chunks/each.e59479a4.js";const le=[{img:"/chat.svg",link:"https://github.com/Satish9047/gossip",technology:"Next.js, MongoDB, Node.js, socket.io, express, tailwind, jsonwebtoken",projectName:"Gossip App",description:"Chat application,(Still builing) user can have a live chat "},{img:"/sales.svg",link:"https://github.com/Satish9047/sales-management",technology:"Node.js, express, jsonwebtoken",projectName:"Sales Management API",description:"api for managing sales. features: add, update, report making, delete order"},{img:"/todo.svg",link:"https://github.com/Satish9047/next-tailwind-todo",technology:"Next.js, tailwind css",projectName:"Todo-App",description:" its the todo task manager (no database)"},{img:"/portfolio.svg",link:"https://github.com/Satish9047/personal-website",technology:"html, css",projectName:"Portfolio Website",description:"This is my beginner level portfolio website."},{img:"/portfolio2.svg",link:"",technology:"svelte, tailwind, formsubmit, ",projectName:"Portfolio Website intermediate",description:"intermediate level portfoliowebsite"}];function re(i,e,a){const t=i.slice();return t[0]=e[a],t}function oe(i){let e,a,t,s,d,l,n,_=i[0].projectName+"",o,h,m,I,H=i[0].technology+"",P,A,C,R=i[0].description+"",D,M,V,x,T=i[0].link+"",B,q;return{c(){e=p("div"),a=p("div"),t=p("img"),d=$(),l=p("div"),n=p("h1"),o=y(_),h=$(),m=p("p"),I=y("technology: "),P=y(H),A=p("br"),C=y(`\r
                description: `),D=y(R),M=p("br"),V=y(`\r
                project link: `),x=p("a"),B=y(T),q=$(),this.h()},l(j){e=f(j,"DIV",{class:!0});var w=v(e);a=f(w,"DIV",{class:!0});var E=v(a);t=f(E,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),d=N(E),l=f(E,"DIV",{class:!0});var S=v(l);n=f(S,"H1",{class:!0});var W=v(n);o=b(W,_),W.forEach(u),h=N(S),m=f(S,"P",{class:!0});var g=v(m);I=b(g,"technology: "),P=b(g,H),A=f(g,"BR",{}),C=b(g,`\r
                description: `),D=b(g,R),M=f(g,"BR",{}),V=b(g,`\r
                project link: `),x=f(g,"A",{href:!0,target:!0});var z=v(x);B=b(z,T),z.forEach(u),g.forEach(u),S.forEach(u),E.forEach(u),q=N(w),w.forEach(u),this.h()},h(){Z(t.src,s=i[0].img)||c(t,"src",s),c(t,"height",150),c(t,"width",100),c(t,"alt",i[0].projectName),c(t,"class","px-4 py-1"),c(n,"class","text-2xl"),c(x,"href",i[0].link),c(x,"target","_blank"),c(m,"class","overflow-y-scroll h-20"),c(l,"class","flex flex-col"),c(a,"class","flex flex-col items-center sm:flex-row text-justify w-full"),c(e,"class","mx-2 my-2 px-5 py-2 flex sm:flex-col justify-center items-center bg-gray-300 sm:w-3/4 max-w-screen-md")},m(j,w){G(j,e,w),r(e,a),r(a,t),r(a,d),r(a,l),r(l,n),r(n,o),r(l,h),r(l,m),r(m,I),r(m,P),r(m,A),r(m,C),r(m,D),r(m,M),r(m,V),r(m,x),r(x,B),r(e,q)},p:k,d(j){j&&u(e)}}}function ie(i){let e,a=ae(le),t=[];for(let s=0;s<a.length;s+=1)t[s]=oe(re(i,a,s));return{c(){e=p("main");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=f(s,"MAIN",{class:!0});var d=v(e);for(let l=0;l<t.length;l+=1)t[l].l(d);d.forEach(u),this.h()},h(){c(e,"class","flex flex-col justify-center items-center")},m(s,d){G(s,e,d);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p:k,i:k,o:k,d(s){s&&u(e),ee(t,s)}}}class ne extends X{constructor(e){super(),Y(this,e,null,ie,U,{})}}function ce(i){let e,a,t,s,d="My projects",l,n,_;return a=new se({}),n=new ne({}),{c(){e=p("div"),F(a.$$.fragment),t=$(),s=p("h1"),s.textContent=d,l=$(),F(n.$$.fragment),this.h()},l(o){e=f(o,"DIV",{});var h=v(e);J(a.$$.fragment,h),t=N(h),s=f(h,"H1",{class:!0,"data-svelte-h":!0}),te(s)!=="svelte-13h7w4e"&&(s.textContent=d),l=N(h),J(n.$$.fragment,h),h.forEach(u),this.h()},h(){c(s,"class","text-xl sm:text-2xl md:text-5xl font-thin mx-4 my-1 p-2 flex justify-center")},m(o,h){G(o,e,h),K(a,e,null),r(e,t),r(e,s),r(e,l),K(n,e,null),_=!0},p:k,i(o){_||(L(a.$$.fragment,o),L(n.$$.fragment,o),_=!0)},o(o){O(a.$$.fragment,o),O(n.$$.fragment,o),_=!1},d(o){o&&u(e),Q(a),Q(n)}}}class de extends X{constructor(e){super(),Y(this,e,null,ce,U,{})}}export{de as component};