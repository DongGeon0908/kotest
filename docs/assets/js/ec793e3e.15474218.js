"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[988],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2951:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},l=void 0,s={unversionedId:"framework/integrations/jacoco",id:"version-5.3/framework/integrations/jacoco",title:"Jacoco",description:"Kotest integrates with Jacoco for code coverage in the standard gradle way.",source:"@site/versioned_docs/version-5.3/framework/integrations/jacoco.md",sourceDirName:"framework/integrations",slug:"/framework/integrations/jacoco.html",permalink:"/docs/framework/integrations/jacoco.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/integrations/jacoco.md",tags:[],version:"5.3",frontMatter:{id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},sidebar:"framework",previous:{title:"Mocking",permalink:"/docs/framework/integrations/mocking.html"},next:{title:"Spec Ordering",permalink:"/docs/framework/spec-ordering.html"}},p={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://www.eclemma.org/jacoco/"},"Jacoco")," for code coverage in the standard gradle way.\nYou can read gradle installation instructions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/jacoco_plugin.html"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In gradle, add jacoco to your plugins.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"plugins {\n   ...\n   jacoco\n   ...\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure jacoco")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"jacoco {\n    toolVersion = \"0.8.7\"\n    reportsDirectory = layout.buildDirectory.dir('customJacocoReportDir') // optional\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add the jacoco XML report task.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.jacocoTestReport {\n    dependsOn(tasks.test)\n    reports {\n        xml.isEnabled = true\n    }\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Change tests task to depend on jacoco.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.test {\n  ...\n  finalizedBy(tasks.jacocoTestReport)\n}\n")),(0,a.kt)("p",null,"Now when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", the Jacoco report files should be generated in ",(0,a.kt)("inlineCode",{parentName:"p"},"$buildDir/reports/jacoco"),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may need to apply the jacoco plugin to each submodule if you have a multi module project.")))}m.isMDXComponent=!0}}]);