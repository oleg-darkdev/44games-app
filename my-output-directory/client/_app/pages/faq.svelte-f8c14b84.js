import{S as R,i as U,s as H,e as q,t as F,c as x,a as L,g as N,d as f,J as Q,b as E,f as h,O as I,h as S,Z as D,a3 as T,j as k,v as y,l as v,w as g,x as _,p as c,n as d,A as w,k as A,ag as V,ah as W,ak as G,m as C,o as P,K as j,a4 as M,a6 as O,_ as se,a1 as ge,a0 as _e,a2 as we,al as be,am as z,$ as ke}from"../chunks/vendor-75a52fb2.js";import{S as ve}from"../chunks/SocialPanel-b3f042c2.js";/* empty css                                                            */import{B as Ie}from"../chunks/BlackFaq-fe1a4032.js";import{C as oe}from"../chunks/ColorFaq-31feac9b.js";import{g as K}from"../chunks/gulagSSSR-7bb563db.js";function qe(i){let e,o,n;return{c(){e=q("section"),o=q("h1"),n=F(i[0]),this.h()},l(s){e=x(s,"SECTION",{class:!0,style:!0});var l=L(e);o=x(l,"H1",{style:!0});var t=L(o);n=N(t,i[0]),t.forEach(f),l.forEach(f),this.h()},h(){Q(o,"font","70px 'grafitty'"),Q(o,"margin","100px 0"),E(e,"class","banner svelte-16w5q7r"),Q(e,"background-image","url("+i[1]+")")},m(s,l){h(s,e,l),I(e,o),I(o,n)},p(s,[l]){l&1&&S(n,s[0]),l&2&&Q(e,"background-image","url("+s[1]+")")},i:D,o:D,d(s){s&&f(e)}}}function xe(i,e,o){let{text:n="",imgUrl:s=""}=e;return i.$$set=l=>{"text"in l&&o(0,n=l.text),"imgUrl"in l&&o(1,s=l.imgUrl)},[n,s]}class Le extends R{constructor(e){super();U(this,e,xe,qe,H,{text:0,imgUrl:1})}}function re(i,e,o){const n=i.slice();return n[3]=e[o],n[4]=e,n[5]=o,n}function Ae(i){let e=i[3].question+"",o;return{c(){o=F(e)},l(n){o=N(n,e)},m(n,s){h(n,o,s)},p(n,s){s&1&&e!==(e=n[3].question+"")&&S(o,e)},d(n){n&&f(o)}}}function Fe(i){let e,o;return e=new O({props:{$$slots:{default:[Ae]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&65&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function ae(i){let e,o,n=i[3].answer+"",s,l,t,r;return{c(){e=q("div"),o=q("p"),s=F(n),l=k(),this.h()},l(a){e=x(a,"DIV",{class:!0});var u=L(e);o=x(u,"P",{class:!0});var m=L(o);s=N(m,n),l=v(m),m.forEach(f),u.forEach(f),this.h()},h(){E(o,"class","mdc-typography--body"),E(e,"class","answer svelte-qdybij")},m(a,u){h(a,e,u),I(e,o),I(o,s),I(o,l),r=!0},p(a,u){(!r||u&1)&&n!==(n=a[3].answer+"")&&S(s,n)},i(a){r||(V(()=>{t||(t=W(e,G,{},!0)),t.run(1)}),r=!0)},o(a){t||(t=W(e,G,{},!1)),t.run(0),r=!1},d(a){a&&f(e),a&&t&&t.end()}}}function ie(i){let e,o,n,s;function l(){return i[2](i[3],i[4],i[5])}e=new M({props:{style:"color: #fff;",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),e.$on("SMUI:action",l);let t=i[3].showAnswer&&ae(i);return{c(){y(e.$$.fragment),o=k(),t&&t.c(),n=A()},l(r){g(e.$$.fragment,r),o=v(r),t&&t.l(r),n=A()},m(r,a){_(e,r,a),h(r,o,a),t&&t.m(r,a),h(r,n,a),s=!0},p(r,a){i=r;const u={};a&65&&(u.$$scope={dirty:a,ctx:i}),e.$set(u),i[3].showAnswer?t?(t.p(i,a),a&1&&c(t,1)):(t=ae(i),t.c(),c(t,1),t.m(n.parentNode,n)):t&&(C(),d(t,1,1,()=>{t=null}),P())},i(r){s||(c(e.$$.fragment,r),c(t),s=!0)},o(r){d(e.$$.fragment,r),d(t),s=!1},d(r){w(e,r),r&&f(o),t&&t.d(r),r&&f(n)}}}function Ne(i){let e,o,n=i[0],s=[];for(let t=0;t<n.length;t+=1)s[t]=ie(re(i,n,t));const l=t=>d(s[t],1,1,()=>{s[t]=null});return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=A()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);e=A()},m(t,r){for(let a=0;a<s.length;a+=1)s[a].m(t,r);h(t,e,r),o=!0},p(t,r){if(r&1){n=t[0];let a;for(a=0;a<n.length;a+=1){const u=re(t,n,a);s[a]?(s[a].p(u,r),c(s[a],1)):(s[a]=ie(u),s[a].c(),c(s[a],1),s[a].m(e.parentNode,e))}for(C(),a=n.length;a<s.length;a+=1)l(a);P()}},i(t){if(!o){for(let r=0;r<n.length;r+=1)c(s[r]);o=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)d(s[r]);o=!1},d(t){j(s,t),t&&f(e)}}}function Qe(i){let e,o,n,s,l,t;return l=new T({props:{style:`max-width: 450px; background-color: #000; border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;`,$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){e=q("div"),o=q("h3"),n=F(i[1]),s=k(),y(l.$$.fragment),this.h()},l(r){e=x(r,"DIV",{style:!0});var a=L(e);o=x(a,"H3",{style:!0});var u=L(o);n=N(u,i[1]),u.forEach(f),s=v(a),g(l.$$.fragment,a),a.forEach(f),this.h()},h(){Q(o,"color","#000"),Q(o,"font","36px 'grafitty'"),Q(e,"display","flex"),Q(e,"flex-direction","column"),Q(e,"max-width","405px")},m(r,a){h(r,e,a),I(e,o),I(o,n),I(e,s),_(l,e,null),t=!0},p(r,[a]){(!t||a&2)&&S(n,r[1]);const u={};a&65&&(u.$$scope={dirty:a,ctx:r}),l.$set(u)},i(r){t||(c(l.$$.fragment,r),t=!0)},o(r){d(l.$$.fragment,r),t=!1},d(r){r&&f(e),w(l)}}}function Ee(i,e,o){let{listQuestions:n=[],title:s=""}=e;const l=(t,r,a)=>o(0,r[a].showAnswer=!t.showAnswer,n);return i.$$set=t=>{"listQuestions"in t&&o(0,n=t.listQuestions),"title"in t&&o(1,s=t.title)},[n,s,l]}class Y extends R{constructor(e){super();U(this,e,Ee,Qe,H,{listQuestions:0,title:1})}}function le(i,e,o){const n=i.slice();return n[5]=e[o],n[6]=e,n[7]=o,n}function ue(i,e,o){const n=i.slice();return n[5]=e[o],n[8]=e,n[9]=o,n}function me(i,e,o){const n=i.slice();return n[5]=e[o],n[10]=e,n[11]=o,n}function Se(i){let e,o=i[0].name+"",n,s;return{c(){e=q("span"),n=F(o),s=F(" FAQ"),this.h()},l(l){e=x(l,"SPAN",{style:!0});var t=L(e);n=N(t,o),s=N(t," FAQ"),t.forEach(f),this.h()},h(){Q(e,"font","35px 'grafitty'"),Q(e,"color","#fff")},m(l,t){h(l,e,t),I(e,n),I(e,s)},p(l,t){t&1&&o!==(o=l[0].name+"")&&S(n,o)},d(l){l&&f(e)}}}function Ce(i){let e,o;return e=new we({props:{style:"display: flex; align-items: center;",padded:!0,$$slots:{default:[Se]},$$scope:{ctx:i}}}),e.$on("click",i[1]),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function fe(i){let e,o;return e=new be({props:{$$slots:{default:[Oe]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function Pe(i){let e;return{c(){e=F("Basic FAQ \u2049\uFE0F")},l(o){e=N(o,"Basic FAQ \u2049\uFE0F")},m(o,n){h(o,e,n)},d(o){o&&f(e)}}}function We(i){let e=i[5].question+"",o;return{c(){o=F(e)},l(n){o=N(n,e)},m(n,s){h(n,o,s)},p(n,s){s&1&&e!==(e=n[5].question+"")&&S(o,e)},d(n){n&&f(o)}}}function Ge(i){let e,o;return e=new O({props:{style:"color: #fff",$$slots:{default:[We]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function pe(i){let e,o,n=i[5].answer+"",s,l,t,r;return{c(){e=q("div"),o=q("p"),s=F(n),l=k(),this.h()},l(a){e=x(a,"DIV",{class:!0});var u=L(e);o=x(u,"P",{class:!0});var m=L(o);s=N(m,n),l=v(m),m.forEach(f),u.forEach(f),this.h()},h(){E(o,"class","mdc-typography--body"),E(e,"class","answer")},m(a,u){h(a,e,u),I(e,o),I(o,s),I(o,l),r=!0},p(a,u){(!r||u&1)&&n!==(n=a[5].answer+"")&&S(s,n)},i(a){r||(V(()=>{t||(t=W(e,G,{},!0)),t.run(1)}),r=!0)},o(a){t||(t=W(e,G,{},!1)),t.run(0),r=!1},d(a){a&&f(e),a&&t&&t.end()}}}function ce(i){let e,o,n,s;function l(){return i[2](i[5],i[10],i[11])}e=new M({props:{style:"color: #fff;",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),e.$on("click",l);let t=i[5].showAnswer&&pe(i);return{c(){y(e.$$.fragment),o=k(),t&&t.c(),n=A()},l(r){g(e.$$.fragment,r),o=v(r),t&&t.l(r),n=A()},m(r,a){_(e,r,a),h(r,o,a),t&&t.m(r,a),h(r,n,a),s=!0},p(r,a){i=r;const u={};a&4097&&(u.$$scope={dirty:a,ctx:i}),e.$set(u),i[5].showAnswer?t?(t.p(i,a),a&1&&c(t,1)):(t=pe(i),t.c(),c(t,1),t.m(n.parentNode,n)):t&&(C(),d(t,1,1,()=>{t=null}),P())},i(r){s||(c(e.$$.fragment,r),c(t),s=!0)},o(r){d(e.$$.fragment,r),d(t),s=!1},d(r){w(e,r),r&&f(o),t&&t.d(r),r&&f(n)}}}function Be(i){let e,o,n=i[0].basic,s=[];for(let t=0;t<n.length;t+=1)s[t]=ce(me(i,n,t));const l=t=>d(s[t],1,1,()=>{s[t]=null});return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=A()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);e=A()},m(t,r){for(let a=0;a<s.length;a+=1)s[a].m(t,r);h(t,e,r),o=!0},p(t,r){if(r&1){n=t[0].basic;let a;for(a=0;a<n.length;a+=1){const u=me(t,n,a);s[a]?(s[a].p(u,r),c(s[a],1)):(s[a]=ce(u),s[a].c(),c(s[a],1),s[a].m(e.parentNode,e))}for(C(),a=n.length;a<s.length;a+=1)l(a);P()}},i(t){if(!o){for(let r=0;r<n.length;r+=1)c(s[r]);o=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)d(s[r]);o=!1},d(t){j(s,t),t&&f(e)}}}function De(i){let e;return{c(){e=F("Popular FAQ \u2049\uFE0F")},l(o){e=N(o,"Popular FAQ \u2049\uFE0F")},m(o,n){h(o,e,n)},d(o){o&&f(e)}}}function Re(i){let e=i[5].question+"",o;return{c(){o=F(e)},l(n){o=N(n,e)},m(n,s){h(n,o,s)},p(n,s){s&1&&e!==(e=n[5].question+"")&&S(o,e)},d(n){n&&f(o)}}}function Ue(i){let e,o;return e=new O({props:{style:"color: #fff",$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function de(i){let e,o,n=i[5].answer+"",s,l,t,r;return{c(){e=q("div"),o=q("p"),s=F(n),l=k(),this.h()},l(a){e=x(a,"DIV",{class:!0});var u=L(e);o=x(u,"P",{class:!0});var m=L(o);s=N(m,n),l=v(m),m.forEach(f),u.forEach(f),this.h()},h(){E(o,"class","mdc-typography--body"),E(e,"class","answer")},m(a,u){h(a,e,u),I(e,o),I(o,s),I(o,l),r=!0},p(a,u){(!r||u&1)&&n!==(n=a[5].answer+"")&&S(s,n)},i(a){r||(V(()=>{t||(t=W(e,G,{},!0)),t.run(1)}),r=!0)},o(a){t||(t=W(e,G,{},!1)),t.run(0),r=!1},d(a){a&&f(e),a&&t&&t.end()}}}function he(i){let e,o,n,s;function l(){return i[3](i[5],i[8],i[9])}e=new M({props:{style:"color: #fff;",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),e.$on("click",l);let t=i[5].showAnswer&&de(i);return{c(){y(e.$$.fragment),o=k(),t&&t.c(),n=A()},l(r){g(e.$$.fragment,r),o=v(r),t&&t.l(r),n=A()},m(r,a){_(e,r,a),h(r,o,a),t&&t.m(r,a),h(r,n,a),s=!0},p(r,a){i=r;const u={};a&4097&&(u.$$scope={dirty:a,ctx:i}),e.$set(u),i[5].showAnswer?t?(t.p(i,a),a&1&&c(t,1)):(t=de(i),t.c(),c(t,1),t.m(n.parentNode,n)):t&&(C(),d(t,1,1,()=>{t=null}),P())},i(r){s||(c(e.$$.fragment,r),c(t),s=!0)},o(r){d(e.$$.fragment,r),d(t),s=!1},d(r){w(e,r),r&&f(o),t&&t.d(r),r&&f(n)}}}function He(i){let e,o,n=i[0].basic,s=[];for(let t=0;t<n.length;t+=1)s[t]=he(ue(i,n,t));const l=t=>d(s[t],1,1,()=>{s[t]=null});return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=A()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);e=A()},m(t,r){for(let a=0;a<s.length;a+=1)s[a].m(t,r);h(t,e,r),o=!0},p(t,r){if(r&1){n=t[0].basic;let a;for(a=0;a<n.length;a+=1){const u=ue(t,n,a);s[a]?(s[a].p(u,r),c(s[a],1)):(s[a]=he(u),s[a].c(),c(s[a],1),s[a].m(e.parentNode,e))}for(C(),a=n.length;a<s.length;a+=1)l(a);P()}},i(t){if(!o){for(let r=0;r<n.length;r+=1)c(s[r]);o=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)d(s[r]);o=!1},d(t){j(s,t),t&&f(e)}}}function Te(i){let e;return{c(){e=F("Other FAQ \u2049\uFE0F")},l(o){e=N(o,"Other FAQ \u2049\uFE0F")},m(o,n){h(o,e,n)},d(o){o&&f(e)}}}function Ve(i){let e=i[5].question+"",o;return{c(){o=F(e)},l(n){o=N(n,e)},m(n,s){h(n,o,s)},p(n,s){s&1&&e!==(e=n[5].question+"")&&S(o,e)},d(n){n&&f(o)}}}function je(i){let e,o;return e=new O({props:{style:"color: #fff",$$slots:{default:[Ve]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,s){const l={};s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function $e(i){let e,o,n=i[5].answer+"",s,l,t,r;return{c(){e=q("div"),o=q("p"),s=F(n),l=k(),this.h()},l(a){e=x(a,"DIV",{class:!0});var u=L(e);o=x(u,"P",{class:!0});var m=L(o);s=N(m,n),l=v(m),m.forEach(f),u.forEach(f),this.h()},h(){E(o,"class","mdc-typography--body"),E(e,"class","answer")},m(a,u){h(a,e,u),I(e,o),I(o,s),I(o,l),r=!0},p(a,u){(!r||u&1)&&n!==(n=a[5].answer+"")&&S(s,n)},i(a){r||(V(()=>{t||(t=W(e,G,{},!0)),t.run(1)}),r=!0)},o(a){t||(t=W(e,G,{},!1)),t.run(0),r=!1},d(a){a&&f(e),a&&t&&t.end()}}}function ye(i){let e,o,n,s;function l(){return i[4](i[5],i[6],i[7])}e=new M({props:{style:"color: #fff;",$$slots:{default:[je]},$$scope:{ctx:i}}}),e.$on("click",l);let t=i[5].showAnswer&&$e(i);return{c(){y(e.$$.fragment),o=k(),t&&t.c(),n=A()},l(r){g(e.$$.fragment,r),o=v(r),t&&t.l(r),n=A()},m(r,a){_(e,r,a),h(r,o,a),t&&t.m(r,a),h(r,n,a),s=!0},p(r,a){i=r;const u={};a&4097&&(u.$$scope={dirty:a,ctx:i}),e.$set(u),i[5].showAnswer?t?(t.p(i,a),a&1&&c(t,1)):(t=$e(i),t.c(),c(t,1),t.m(n.parentNode,n)):t&&(C(),d(t,1,1,()=>{t=null}),P())},i(r){s||(c(e.$$.fragment,r),c(t),s=!0)},o(r){d(e.$$.fragment,r),d(t),s=!1},d(r){w(e,r),r&&f(o),t&&t.d(r),r&&f(n)}}}function Me(i){let e,o,n=i[0].other,s=[];for(let t=0;t<n.length;t+=1)s[t]=ye(le(i,n,t));const l=t=>d(s[t],1,1,()=>{s[t]=null});return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=A()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);e=A()},m(t,r){for(let a=0;a<s.length;a+=1)s[a].m(t,r);h(t,e,r),o=!0},p(t,r){if(r&1){n=t[0].other;let a;for(a=0;a<n.length;a+=1){const u=le(t,n,a);s[a]?(s[a].p(u,r),c(s[a],1)):(s[a]=ye(u),s[a].c(),c(s[a],1),s[a].m(e.parentNode,e))}for(C(),a=n.length;a<s.length;a+=1)l(a);P()}},i(t){if(!o){for(let r=0;r<n.length;r+=1)c(s[r]);o=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)d(s[r]);o=!1},d(t){j(s,t),t&&f(e)}}}function Oe(i){let e,o,n,s,l,t,r,a,u,m,$,B;return e=new z({props:{style:"color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;",$$slots:{default:[Pe]},$$scope:{ctx:i}}}),n=new T({props:{style:"max-width: 450px; width: 100%; height: auto;",$$slots:{default:[Be]},$$scope:{ctx:i}}}),l=new z({props:{style:"color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;",$$slots:{default:[De]},$$scope:{ctx:i}}}),r=new T({props:{style:"max-width: 450px; width: 100%; height: auto;",$$slots:{default:[He]},$$scope:{ctx:i}}}),u=new z({props:{style:"color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;",$$slots:{default:[Te]},$$scope:{ctx:i}}}),$=new T({props:{style:"max-width: 450px; width: 100%; height: auto;",$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment),o=k(),y(n.$$.fragment),s=k(),y(l.$$.fragment),t=k(),y(r.$$.fragment),a=k(),y(u.$$.fragment),m=k(),y($.$$.fragment)},l(p){g(e.$$.fragment,p),o=v(p),g(n.$$.fragment,p),s=v(p),g(l.$$.fragment,p),t=v(p),g(r.$$.fragment,p),a=v(p),g(u.$$.fragment,p),m=v(p),g($.$$.fragment,p)},m(p,b){_(e,p,b),h(p,o,b),_(n,p,b),h(p,s,b),_(l,p,b),h(p,t,b),_(r,p,b),h(p,a,b),_(u,p,b),h(p,m,b),_($,p,b),B=!0},p(p,b){const J={};b&4096&&(J.$$scope={dirty:b,ctx:p}),e.$set(J);const Z={};b&4097&&(Z.$$scope={dirty:b,ctx:p}),n.$set(Z);const X={};b&4096&&(X.$$scope={dirty:b,ctx:p}),l.$set(X);const ee={};b&4097&&(ee.$$scope={dirty:b,ctx:p}),r.$set(ee);const te={};b&4096&&(te.$$scope={dirty:b,ctx:p}),u.$set(te);const ne={};b&4097&&(ne.$$scope={dirty:b,ctx:p}),$.$set(ne)},i(p){B||(c(e.$$.fragment,p),c(n.$$.fragment,p),c(l.$$.fragment,p),c(r.$$.fragment,p),c(u.$$.fragment,p),c($.$$.fragment,p),B=!0)},o(p){d(e.$$.fragment,p),d(n.$$.fragment,p),d(l.$$.fragment,p),d(r.$$.fragment,p),d(u.$$.fragment,p),d($.$$.fragment,p),B=!1},d(p){w(e,p),p&&f(o),w(n,p),p&&f(s),w(l,p),p&&f(t),w(r,p),p&&f(a),w(u,p),p&&f(m),w($,p)}}}function Ke(i){let e,o,n,s;e=new se({props:{style:"width: 300px;  border-color: "+i[0].brandColor+";  height: 80px; margin-bottom: 15px;",$$slots:{default:[Ce]},$$scope:{ctx:i}}});let l=i[0].showFaq&&fe(i);return{c(){y(e.$$.fragment),o=k(),l&&l.c(),n=A()},l(t){g(e.$$.fragment,t),o=v(t),l&&l.l(t),n=A()},m(t,r){_(e,t,r),h(t,o,r),l&&l.m(t,r),h(t,n,r),s=!0},p(t,r){const a={};r&1&&(a.style="width: 300px;  border-color: "+t[0].brandColor+";  height: 80px; margin-bottom: 15px;"),r&4097&&(a.$$scope={dirty:r,ctx:t}),e.$set(a),t[0].showFaq?l?(l.p(t,r),r&1&&c(l,1)):(l=fe(t),l.c(),c(l,1),l.m(n.parentNode,n)):l&&(C(),d(l,1,1,()=>{l=null}),P())},i(t){s||(c(e.$$.fragment,t),c(l),s=!0)},o(t){d(e.$$.fragment,t),d(l),s=!1},d(t){w(e,t),t&&f(o),l&&l.d(t),t&&f(n)}}}function Ye(i){let e,o,n,s,l,t,r;return s=new ge({props:{class:"card-media-16x9",aspectRatio:"16x9",style:"background-image: url("+i[0].logo+"); width: 350px; height: 200"}}),t=new _e({props:{class:"mdc-typography--body2",$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){e=q("a"),n=k(),y(s.$$.fragment),l=k(),y(t.$$.fragment),this.h()},l(a){e=x(a,"A",{id:!0}),L(e).forEach(f),n=v(a),g(s.$$.fragment,a),l=v(a),g(t.$$.fragment,a),this.h()},h(){E(e,"id",o=i[0].id)},m(a,u){h(a,e,u),h(a,n,u),_(s,a,u),h(a,l,u),_(t,a,u),r=!0},p(a,u){(!r||u&1&&o!==(o=a[0].id))&&E(e,"id",o);const m={};u&1&&(m.style="background-image: url("+a[0].logo+"); width: 350px; height: 200"),s.$set(m);const $={};u&4097&&($.$$scope={dirty:u,ctx:a}),t.$set($)},i(a){r||(c(s.$$.fragment,a),c(t.$$.fragment,a),r=!0)},o(a){d(s.$$.fragment,a),d(t.$$.fragment,a),r=!1},d(a){a&&f(e),a&&f(n),w(s,a),a&&f(l),w(t,a)}}}function ze(i){let e,o;return e=new se({props:{style:"max-width: 350px; width: auto;  background-color: "+i[0].brandColor+";",$$slots:{default:[Ye]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){_(e,n,s),o=!0},p(n,[s]){const l={};s&1&&(l.style="max-width: 350px; width: auto;  background-color: "+n[0].brandColor+";"),s&4097&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function Je(i,e,o){let{data:n={}}=e;const s=()=>{location.href=`#${n.id}`,o(0,n.showFaq=!n.showFaq,n)},l=(a,u,m)=>o(0,u[m].showAnswer=!a.showAnswer,n),t=(a,u,m)=>o(0,u[m].showAnswer=!a.showAnswer,n),r=(a,u,m)=>o(0,u[m].showAnswer=!a.showAnswer,n);return i.$$set=a=>{"data"in a&&o(0,n=a.data)},[n,s,l,t,r]}class Ze extends R{constructor(e){super();U(this,e,Je,ze,H,{data:0})}}const Xe=[{question:"How can I get a DIY edition of a game with a unique NFC and autographs of all team members?",answer:"Buy the boardgame, you automatically receive all of the above - you can order the game here: /shop"},{question:" How do I contact you?",answer:`1. Come to us personally for the nearest workshop, we will get to know you personally \u{1F601}
2. Write an email to support@ledergames.com. Our email support team can help with damages, missing components, order requests, and anything else you need help with! `},{question:"Is your studio open for public visits?",answer:"We are all geographically distributed members of one big family DarkDev If you want to communicate personally with one of us, sign up for the workshop"},{question:"Can I get involved as a playtester?",answer:"Definitely! Subscribe to our newsletter! We will contact you if we have opportunities for testing soon \u{1F60A}"},{question:"What does DIY components mean?",answer:"Lorem"},{question:"Who made the boxes and organizers?",answer:"Boxes, organaziners, playing fields, etc. - we make it ourselves, you can see how it looks in the video at the links below:"}],et=[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],tt=[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],nt=[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],st=[{question:" I have a rules question about GameName!",answer:"Please search the Boardgamegeek forums to see if your questions has already been asked or answered. If you are still unclear, please reach out to us at support@darkdev.com"},{question:"When will GameName be available?",answer:`We're currently in the midst of our Kickstarter fulfillment for Oath and currently anticipate a retail release in Summer 2021.

(Last updated: March 25, 2021)`},{question:"Will GameName be translated into different languages?",answer:"Our general rule is to wait for community approval to complete and make first print sales of any of our games in English or Russian before making translated editions. If you want to help or are simply interested in translation, please write to us at support@darkdev.com"},{question:"How do I reset the game back to the original game state?",answer:"If for any reason, you want to reset the order of the cards back to the order of an unplayed game, you can refer to this file (fileLink on cloud) for the specific cards and order."},{question:"How can I find out the version number of an already purchased game?",answer:"To find out which version of the game you own, refer to the back of the box. Your NSF number and edition number will be listed next to the barcode for all of our products, including extensions."},{question:"I missed the Kickstarter / workshop. How do I get the game?",answer:"We are currently accepting orders here to ship Mysterious Manor to USA, Europe, Russia"}],ot=[{question:"I have an idea how to improve the game, how to share it?",answer:`Please send your idea to us support@darkdev.com. We will definitely test it.

If you have already printed your idea on paper, you can try it out with the gaming community at one of the .

If your idea seems interesting to the community, you will receive a cash reward or something from our store of your choice.`},{question:"Are there any changes or new extensions planned in the near future?",answer:"There are currently no official plans for improvement ... Root still has a lot of potential ideas and concepts that we want to implement as add-ons. If you have any suggestions for improvement ..., please write to us at support@darkdev.com. We always consider suggestions from the gaming community. "},{question:"How to use the latest extensions with the early version of the GameName",answer:"If you have an older version of GameName, you can print these PDFs at home and make changes to your playset, or purchase the Root Upgrade Kit from our online store."},{question:"I have a problem with the components of the translated version of Root. Who should I contact about spare parts?",answer:"Unfortunately, we do not have access to components that contain translated text. Please refer to the front or back of your Root box to find the name of the partnered publisher and contact them for a parts request. If you are in need of a component that does not contain text, you can contact us at support@darkdev.com for assistance."},{question:" How can I get the game? Miniatures? Addons?",answer:"The main game Vast: The Crystal Caverns, The Miniatures and The Fearsome Foes expansions are available for order in our store, if you want to play this game for free - come to the "}],rt=[{question:"Where can I see how this game was made?",answer:"Videos of the manufacture of various components are available at the links below:"},{question:"What languages is GameName available in?",answer:"GameName is natively created and developed in Russian. We also have language edition partners that have worked on GameName in the following languages as well:"},{question:"How do I find Root in stock?",answer:`Poland - - GameName core and all of its related products and expansions are currently sold out on our store and on a distributor level.
		Asia, Australia, USA, EU, rest of world - GameName core and all of its related products and expansions are currently available through distribution and on our webstore right now.`},{question:"I'm new to GameName. Where do I start?",answer:"To play any Root content, you need the base Root game. For more information on how Root extensions extend your experience, you can read more here! If you want to play Root with real people, sign up for  is available here \u{1F449}"},{question:"How the GameName developed, the chronology of changes",answer:"\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0432 \u0448\u0435\u0441\u0442\u043E\u0439 \u0440\u0430\u0437 \u043F\u0435\u0447\u0430\u0442\u0430\u0435\u043C \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0438\u0433\u0440\u0443 ..."}],at={basic:st,popular:rt,other:ot,logo:K.promo.logo,name:K.promo.shortName,id:K.promo.id,brandColor:K.promo.brandColor};function it(i){let e,o,n,s,l,t,r,a;return o=new ve({props:{title:"Ask us on social media"}}),l=new Y({props:{title:"General Help \u2049\uFE0F",listQuestions:Xe}}),r=new Y({props:{title:"Shipping \u{1F69A}",listQuestions:nt}}),{c(){e=q("div"),y(o.$$.fragment),n=k(),s=q("div"),y(l.$$.fragment),t=k(),y(r.$$.fragment),this.h()},l(u){e=x(u,"DIV",{style:!0});var m=L(e);g(o.$$.fragment,m),n=v(m),s=x(m,"DIV",{class:!0});var $=L(s);g(l.$$.fragment,$),t=v($),g(r.$$.fragment,$),$.forEach(f),m.forEach(f),this.h()},h(){E(s,"class","questions-wrap svelte-4pymn1"),Q(e,"display","flex"),Q(e,"flex-direction","column"),Q(e,"justify-content","center")},m(u,m){h(u,e,m),_(o,e,null),I(e,n),I(e,s),_(l,s,null),I(s,t),_(r,s,null),a=!0},p:D,i(u){a||(c(o.$$.fragment,u),c(l.$$.fragment,u),c(r.$$.fragment,u),a=!0)},o(u){d(o.$$.fragment,u),d(l.$$.fragment,u),d(r.$$.fragment,u),a=!1},d(u){u&&f(e),w(o),w(l),w(r)}}}function lt(i){let e,o,n,s,l;return o=new Y({props:{title:"Workshops \u{1F9E0}",listQuestions:tt}}),s=new Y({props:{title:"Typography \u{1F4C7}",listQuestions:et}}),{c(){e=q("div"),y(o.$$.fragment),n=k(),y(s.$$.fragment),this.h()},l(t){e=x(t,"DIV",{class:!0});var r=L(e);g(o.$$.fragment,r),n=v(r),g(s.$$.fragment,r),r.forEach(f),this.h()},h(){E(e,"class","questions-wrap svelte-4pymn1")},m(t,r){h(t,e,r),_(o,e,null),I(e,n),_(s,e,null),l=!0},p:D,i(t){l||(c(o.$$.fragment,t),c(s.$$.fragment,t),l=!0)},o(t){d(o.$$.fragment,t),d(s.$$.fragment,t),l=!1},d(t){t&&f(e),w(o),w(s)}}}function ut(i){let e,o,n;return o=new Ze({props:{data:at}}),{c(){e=q("div"),y(o.$$.fragment),this.h()},l(s){e=x(s,"DIV",{class:!0});var l=L(e);g(o.$$.fragment,l),l.forEach(f),this.h()},h(){E(e,"class","questions-wrap svelte-4pymn1")},m(s,l){h(s,e,l),_(o,e,null),n=!0},p:D,i(s){n||(c(o.$$.fragment,s),n=!0)},o(s){d(o.$$.fragment,s),n=!1},d(s){s&&f(e),w(o)}}}function mt(i){let e,o,n,s,l,t,r,a,u;return o=new Le({props:{text:"Frequently Asked Questions",imgUrl:"img/faq/faq_bg.png"}}),s=new oe({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[it]},$$scope:{ctx:i}}}),t=new Ie({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[lt]},$$scope:{ctx:i}}}),a=new oe({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){e=k(),y(o.$$.fragment),n=k(),y(s.$$.fragment),l=k(),y(t.$$.fragment),r=k(),y(a.$$.fragment),this.h()},l(m){ke('[data-svelte="svelte-gmdffn"]',document.head).forEach(f),e=v(m),g(o.$$.fragment,m),n=v(m),g(s.$$.fragment,m),l=v(m),g(t.$$.fragment,m),r=v(m),g(a.$$.fragment,m),this.h()},h(){document.title="FAQ`s"},m(m,$){h(m,e,$),_(o,m,$),h(m,n,$),_(s,m,$),h(m,l,$),_(t,m,$),h(m,r,$),_(a,m,$),u=!0},p(m,[$]){const B={};$&1&&(B.$$scope={dirty:$,ctx:m}),s.$set(B);const p={};$&1&&(p.$$scope={dirty:$,ctx:m}),t.$set(p);const b={};$&1&&(b.$$scope={dirty:$,ctx:m}),a.$set(b)},i(m){u||(c(o.$$.fragment,m),c(s.$$.fragment,m),c(t.$$.fragment,m),c(a.$$.fragment,m),u=!0)},o(m){d(o.$$.fragment,m),d(s.$$.fragment,m),d(t.$$.fragment,m),d(a.$$.fragment,m),u=!1},d(m){m&&f(e),w(o,m),m&&f(n),w(s,m),m&&f(l),w(t,m),m&&f(r),w(a,m)}}}class yt extends R{constructor(e){super();U(this,e,null,mt,H,{})}}export{yt as default};