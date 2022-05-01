"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6415],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6962:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},d={unversionedId:"advance/model-gen",id:"advance/model-gen",isDocsHomePage:!1,title:"Model Generation",description:"First, after downloading the demo project, we will use the user's model to demonstrate the code generation.",source:"@site/docs/advance/model-gen.md",sourceDirName:"advance",slug:"/advance/model-gen",permalink:"/docs/advance/model-gen",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/model-gen.md",version:"current",lastUpdatedAt:1651391716,formattedLastUpdatedAt:"5/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Directory Structure",permalink:"/docs/advance/service-design"},next:{title:"API Coding",permalink:"/docs/advance/api-coding"}},c=[{value:"Forward",id:"forward",children:[]},{value:"Prepare",id:"prepare",children:[]},{value:"Code generation (with cache)",id:"code-generation-with-cache",children:[{value:"The way one(ddl)",id:"the-way-oneddl",children:[]},{value:"The way two(datasource)",id:"the-way-twodatasource",children:[]},{value:"The way three(intellij plugin)",id:"the-way-threeintellij-plugin",children:[]}]},{value:"Verify the generated model file",id:"verify-the-generated-model-file",children:[]},{value:"More",id:"more",children:[]}],s={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First, after downloading the ",(0,o.kt)("a",{target:"_blank",href:n(4534).Z},"demo project"),", we will use the user's model to demonstrate the code generation."),(0,o.kt)("h2",{id:"forward"},"Forward"),(0,o.kt)("p",null,"Model is a bridge for services to access the persistent data layer. The persistent data of the business often exists in databases such as mysql and mongo. We all know that the operation of a database is nothing more than CURD.\nAnd these tasks will also take up part of the time for development. I once wrote 40 model files when writing a business. According to the complexity of different business requirements, on average, each model file is almost required.\n10 minutes, for 40 files, 400 minutes of working time, almost a day's workload, and the goctl tool can complete the 400 minutes of work in 10 seconds."),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"Enter the demo project ",(0,o.kt)("inlineCode",{parentName:"p"},"book"),", find the",(0,o.kt)("inlineCode",{parentName:"p"}," user.sql")," file under ",(0,o.kt)("inlineCode",{parentName:"p"},"user/model"),", and execute the table creation in your own database."),(0,o.kt)("h2",{id:"code-generation-with-cache"},"Code generation (with cache)"),(0,o.kt)("h3",{id:"the-way-oneddl"},"The way one(ddl)"),(0,o.kt)("p",null,"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"service/user/model")," directory and execute the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/model\n$ goctl model mysql ddl -src user.sql -dir . -c\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Done.\n")),(0,o.kt)("h3",{id:"the-way-twodatasource"},"The way two(datasource)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql datasource -url="$datasource" -table="user" -c -dir .\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Done.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!TIP]","\n",(0,o.kt)("inlineCode",{parentName:"p"},"$datasource")," is the database connection address")),(0,o.kt)("h3",{id:"the-way-threeintellij-plugin"},"The way three(intellij plugin)"),(0,o.kt)("p",null,"In Goland, right-click ",(0,o.kt)("inlineCode",{parentName:"p"},"user.sql"),", enter and click ",(0,o.kt)("inlineCode",{parentName:"p"},"New"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Go Zero"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Model Code")," to generate it, or open the ",(0,o.kt)("inlineCode",{parentName:"p"},"user.sql")," file,\nEnter the editing area, use the shortcut key ",(0,o.kt)("inlineCode",{parentName:"p"},"Command+N")," (for macOS) or ",(0,o.kt)("inlineCode",{parentName:"p"},"alt+insert")," (for windows), select ",(0,o.kt)("inlineCode",{parentName:"p"},"Mode Code"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://zeromicro.github.io/go-zero-pages/resource/intellij-model.png",alt:"model generation"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!TIP]","\nThe intellij plug-in generation needs to install the goctl plug-in, see ",(0,o.kt)("a",{parentName:"p",href:"../eco/intellij"},"intellij plugin")," for details")),(0,o.kt)("h2",{id:"verify-the-generated-model-file"},"Verify the generated model file"),(0,o.kt)("p",null,"view tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 user.sql\n\u251c\u2500\u2500 usermodel.go\n\u251c\u2500\u2500 usermodel_gen.go\n\u2514\u2500\u2500 vars.go\n")),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"For persisting data, if more flexible database capabilities are required, including transactional capabilities, see ",(0,o.kt)("a",{parentName:"p",href:"../blog/showcase/mysql"},"Mysql")),(0,o.kt)("p",null,"For distributed transaction capabilities, see ",(0,o.kt)("a",{parentName:"p",href:"../community/distributed-transaction"},"distributed-transaction.md")))}p.isMDXComponent=!0}}]);