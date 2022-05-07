"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1854],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6958:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},l={unversionedId:"prepare/prepare-other",id:"prepare/prepare-other",isDocsHomePage:!1,title:"Other",description:"Before, we have prepared the Go environment, Go Module configuration, Goctl, protoc & protoc-gen-go installation, these are the environments that developers must prepare during the development phase, and you can optionally install the next environment,",source:"@site/docs/prepare/prepare-other.md",sourceDirName:"prepare",slug:"/prepare/prepare-other",permalink:"/docs/prepare/prepare-other",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/prepare/prepare-other.md",version:"current",lastUpdatedAt:1651932313,formattedLastUpdatedAt:"5/7/2022",frontMatter:{},sidebar:"docs",previous:{title:"protoc & protoc-gen-go installation",permalink:"/docs/prepare/protoc-install"},next:{title:"Development Rules",permalink:"/docs/develop/dev-specification"}},c=[{value:"Other environment",id:"other-environment",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before, we have prepared the Go environment, Go Module configuration, Goctl, protoc & protoc-gen-go installation, these are the environments that developers must prepare during the development phase, and you can optionally install the next environment,\nBecause these environments generally exist on the server (installation work, operation and maintenance will be completed for you), but in order to complete the follow-up ",(0,a.kt)("strong",{parentName:"p"},"demonstration")," process, I suggest you install it locally, because most of our demo environments will be Locally based.\nThe following only gives the necessary preparatory work, and does not give a detailed introduction in the length of the document."),(0,a.kt)("h2",{id:"other-environment"},"Other environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/current/rfc/v3api/"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/"},"redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"mysql"))))}u.isMDXComponent=!0}}]);