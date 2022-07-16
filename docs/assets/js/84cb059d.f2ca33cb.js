"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3019],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,k=u["".concat(o,".").concat(h)]||u[h]||p[h]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],s={id:"lifecycle_hooks",title:"Lifecycle hooks",slug:"lifecycle-hooks.html",sidebar_label:"Lifecycle hooks"},o=void 0,c={unversionedId:"framework/lifecycle_hooks",id:"version-5.3/framework/lifecycle_hooks",title:"Lifecycle hooks",description:"It is extremely common in tests to want to perform some action before and after a test, or before and after all tests in the same file.",source:"@site/versioned_docs/version-5.3/framework/lifecycle_hooks.md",sourceDirName:"framework",slug:"/framework/lifecycle-hooks.html",permalink:"/docs/framework/lifecycle-hooks.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/lifecycle_hooks.md",tags:[],version:"5.3",frontMatter:{id:"lifecycle_hooks",title:"Lifecycle hooks",slug:"lifecycle-hooks.html",sidebar_label:"Lifecycle hooks"},sidebar:"framework",previous:{title:"Isolation Modes",permalink:"/docs/framework/isolation-mode.html"},next:{title:"Introduction",permalink:"/docs/framework/extensions/extensions-introduction.html"}},d={},p=[{value:"DSL Methods",id:"dsl-methods",level:4},{value:"DSL methods with functions",id:"dsl-methods-with-functions",level:4},{value:"Overriding callback functions in a Spec",id:"overriding-callback-functions-in-a-spec",level:4}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It is extremely common in tests to want to perform some action before and after a test, or before and after all tests in the same file.\nIt is in these ",(0,l.kt)("em",{parentName:"p"},"lifecycle hooks")," that you would perform any setup/teardown logic required for a test."),(0,l.kt)("p",null,"Kotest provides a rich assortment of hooks that can be defined directly inside a spec.\nFor more advanced cases, such as writing distributable plugins or re-usable hooks, one can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/framework/extensions/extensions-introduction.html"},"extensions"),"."),(0,l.kt)("p",null,"At the end of this section is a list of the available hooks and when they are executed."),(0,l.kt)("p",null,"There are several ways to use hooks in Kotest:"),(0,l.kt)("h4",{id:"dsl-methods"},"DSL Methods"),(0,l.kt)("p",null,"The first and simplest, is to use the DSL methods available inside a Spec which create and register a ",(0,l.kt)("inlineCode",{parentName:"p"},"TestListener")," for you. For example, we can invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeTest")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"afterTest")," (and others) directly alongside our tests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TestSpec : WordSpec({\n  beforeTest {\n    println("Starting a test $it")\n  }\n  afterTest { (test, result) ->\n    println("Finished spec with result $result")\n  }\n  "this test" should {\n    "be alive" {\n      println("Johnny5 is alive!")\n    }\n  }\n})\n')),(0,l.kt)("p",null,"Behind the scenes, these DSL methods will create an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"TestListener"),", overriding the appropriate functions, and ensuring that this test listener is registered to run."),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"afterProject")," as a DSL method which will create an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"ProjectListener"),", but there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeProject")," because by the time the framework is at this stage of detecting a spec, the project has already started!"),(0,l.kt)("h4",{id:"dsl-methods-with-functions"},"DSL methods with functions"),(0,l.kt)("p",null,"Since these DSL methods accept functions, we can pull out logic to a function and re-use it in several places. The ",(0,l.kt)("inlineCode",{parentName:"p"},"BeforeTest")," type used on the function definition is an alias\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"suspend (TestCase) -> Unit")," to keep things simple. There are aliases for the types of each of the callbacks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val startTest: BeforeTest = {\n   println("Starting a test $it")\n}\n\nclass TestSpec : WordSpec({\n\n   // used once\n   beforeTest(startTest)\n\n   "this test" should {\n      "be alive" {\n         println("Johnny5 is alive!")\n      }\n   }\n})\n\nclass OtherSpec : WordSpec({\n\n   // used twice\n   beforeTest(startTest)\n\n   "this test" should {\n      "fail" {\n         fail("boom")\n      }\n   }\n})\n')),(0,l.kt)("h4",{id:"overriding-callback-functions-in-a-spec"},"Overriding callback functions in a Spec"),(0,l.kt)("p",null,"The second, related, method is to override the callback functions in the Spec. This is essentially just a variation on the first method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TestSpec : WordSpec() {\n    override fun beforeTest(testCase: TestCase) {\n        println("Starting a test $testCase")\n    }\n\n    init {\n        "this test" should {\n            "be alive" {\n                println("Johnny5 is alive!")\n            }\n        }\n    }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Callback"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeContainer"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test with type ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType.Container")," is executed, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," instance as a parameter. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterContainer"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," with type ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType.Container")," has finished, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The callback will execute even if the test fails.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeEach"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test with type ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType.Test")," is executed, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," instance as a parameter. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterEach"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," with type ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType.Test")," has finished, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The callback will execute even if the test fails.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeAny"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test with any ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType")," is executed, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," instance as a parameter. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterAny"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," with any ",(0,l.kt)("inlineCode",{parentName:"td"},"TestType")," has finished, with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The callback will execute even if the test fails.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeTest"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test is executed with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," instance as a parameter. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This callback has the same behavior as ",(0,l.kt)("inlineCode",{parentName:"td"},"beforeAny"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterTest"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase")," has finished with the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The callback will execute even if the test fails.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This callback has the same behavior as ",(0,l.kt)("inlineCode",{parentName:"td"},"afterAny"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked after the Engine instantiates a spec to be used as part of a test execution.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The callback is provided with the ",(0,l.kt)("inlineCode",{parentName:"td"},"Spec")," instance that the test will be executed under.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If a spec is instantiated multiple times - for example, if ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, then this callback will be invoked for each instance created, just before the first test (or only test) is executed for that spec.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This callback should be used if you need to perform setup each time a new spec instance is created.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If you simply need to perform setup once per class file, then use prepareSpec. This callback runs before any ",(0,l.kt)("inlineCode",{parentName:"td"},"beforeTest")," functions are invoked.",(0,l.kt)("br",null),(0,l.kt)("br",null)," When running in the default ",(0,l.kt)("inlineCode",{parentName:"td"},"SingleInstance")," isolation mode, then this callback and ",(0,l.kt)("inlineCode",{parentName:"td"},"prepareSpec")," are functionally the same since all tests will run in the same spec instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Is invoked after the ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase"),"s that are part of a particular spec instance have completed.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If a spec is instantiated multiple times - for example, if ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, then this callback will be invoked for each instantiated spec, after the tests that are applicable to that spec instance have returned.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This callback should be used if you need to perform cleanup after each individual spec instance. If you need to perform cleanup once per class file, then use ",(0,l.kt)("inlineCode",{parentName:"td"},"finalizeSpec."),(0,l.kt)("br",null),(0,l.kt)("br",null),"This callback runs after any ",(0,l.kt)("inlineCode",{parentName:"td"},"afterTest")," callbacks have been invoked.",(0,l.kt)("br",null),(0,l.kt)("br",null),"When running in the default ",(0,l.kt)("inlineCode",{parentName:"td"},"SingleInstance")," isolation mode, then this callback and ",(0,l.kt)("inlineCode",{parentName:"td"},"finalizeSpec")," are functionally the same since all tests will run in the same spec instance.",(0,l.kt)("br",null),"In case there is any exception in ",(0,l.kt)("inlineCode",{parentName:"td"},"beforeSpec"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"afterSpec")," will be skipped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prepareSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Called once per spec, when the engine is preparing to execute the tests for that spec. The ",(0,l.kt)("inlineCode",{parentName:"td"},"KClass")," instance of the spec is provided as a parameter.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Regardless of how many times the spec is instantiated, for example, if ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, this callback will only be invoked once. If there are no active tests in a spec, then this callback will still be invoked.",(0,l.kt)("br",null),(0,l.kt)("br",null),"When running in the default ",(0,l.kt)("inlineCode",{parentName:"td"},"SingleInstance")," isolation mode, then this callback and ",(0,l.kt)("inlineCode",{parentName:"td"},"beforeSpec")," are functionally the same since all tests will run in the same spec instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finalizeSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Called once per ",(0,l.kt)("inlineCode",{parentName:"td"},"Spec"),", after all tests have completed for that spec.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Regardless of how many times the spec is instantiated, for example, if ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, this callback will only be invoked once.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The results parameter contains every ",(0,l.kt)("inlineCode",{parentName:"td"},"TestCase"),", along with the result of that test, including tests that were ignored (which will have a ",(0,l.kt)("inlineCode",{parentName:"td"},"TestResult")," that has ",(0,l.kt)("inlineCode",{parentName:"td"},"TestStatus.Ignored"),").",(0,l.kt)("br",null),(0,l.kt)("br",null),"When running in the default ",(0,l.kt)("inlineCode",{parentName:"td"},"SingleInstance")," isolation mode, then this callback and ",(0,l.kt)("inlineCode",{parentName:"td"},"afterSpec")," are functionally the same since all tests will run in the same spec instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeInvocation"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked before each 'run' of a test, with a flag indicating the iteration number. This callback is useful if you have set a test to have multiple invocations via config and want to do some setup / teardown between runs.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If you are running a test with the default single invocation then this callback is effectively the same as ",(0,l.kt)("inlineCode",{parentName:"td"},"beforeTest"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Note: If you have set multiple invocations _and")," multiple threads, then these callbacks will be invoked concurrently._")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterInvocation"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoked after each 'run' of a test, with a flag indicating the iteration number. This callback is useful if you have set a test to have multiple invocations via config and want to do some setup / teardown between runs.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If you are running a test with the default single invocation then this callback is effectively the same as ",(0,l.kt)("inlineCode",{parentName:"td"},"afterTest"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Note: If you have set multiple invocations _and")," multiple threads, then these callbacks will be invoked concurrently._")))))}h.isMDXComponent=!0}}]);