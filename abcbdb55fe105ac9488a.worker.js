/*! For license information please see abcbdb55fe105ac9488a.worker.js.LICENSE.txt */
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/SeeBnB_io/",e(e.s="pJep")}({cDf5:function(t,n){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},fsL8:function(t,n,e){var r=e("cDf5").default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},e=Object.prototype,u=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",f=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(x){l=function(t,n,e){return t[n]=e}}function p(t,n,e,r){var o=n&&n.prototype instanceof v?n:v,u=Object.create(o.prototype),a=new b(r||[]);return i(u,"_invoke",{value:P(t,e,a)}),u}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(x){return{type:"throw",arg:x}}}n.wrap=p;var E={};function v(){}function T(){}function y(){}var h={};l(h,c,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(I([])));g&&g!==e&&u.call(g,c)&&(h=g);var S=y.prototype=v.prototype=Object.create(h);function m(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function O(t,n){var e;i(this,"_invoke",{value:function(o,i){function a(){return new n((function(e,a){!function e(o,i,a,c){var f=d(t[o],t,i);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==r(l)&&u.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(f.arg)}(o,i,e,a)}))}return e=e?e.then(a,a):a()}})}function P(t,n,e){var r="suspendedStart";return function(o,u){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw u;return w()}for(e.method=o,e.arg=u;;){var i=e.delegate;if(i){var a=L(i,e);if(a){if(a===E)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===E)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function L(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),E;var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,E;var u=o.arg;return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,E):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,E)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function A(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(u.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:w}}function w(){return{value:void 0,done:!0}}return T.prototype=y,i(S,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:T,configurable:!0}),T.displayName=l(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===T||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},m(O.prototype),l(O.prototype,f,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,u){void 0===u&&(u=Promise);var i=new O(p(t,e,r,o),u);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(S),l(S,s,"Generator"),l(S,c,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&u.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,E):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),E},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),E}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;A(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:I(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),E}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},o0o1:function(t,n,e){var r=e("fsL8")();t.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},pJep:function(t,n,e){"use strict";e.r(n);var r={};function o(t,n,e,r,o,u,i){try{var a=t[u](i),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var i=t.apply(n,e);function a(t){o(i,r,u,a,c,"next",t)}function c(t){o(i,r,u,a,c,"throw",t)}a(void 0)}))}}e.r(r),e.d(r,"SET_VIEWPORT_STATE",(function(){return f})),e.d(r,"UPDATE_TREE",(function(){return s})),e.d(r,"UPDATE_NUM_NODES",(function(){return l})),e.d(r,"UPDATE_RUN_TABLE",(function(){return p})),e.d(r,"RESET_RUN_TABLE",(function(){return d})),e.d(r,"RESET_EVALUATING_STATE",(function(){return E})),e.d(r,"RESET_BEST_PATH_STATE",(function(){return v})),e.d(r,"SET_INITIAL_SOLUTION",(function(){return T})),e.d(r,"SET_SEARCH_STRATEGY",(function(){return y})),e.d(r,"SET_BOUNDING_STRATEGY",(function(){return h})),e.d(r,"SET_ALGORITHM",(function(){return _})),e.d(r,"SET_ALGORITHM_TYPE",(function(){return g})),e.d(r,"SET_ALGORITHM_STAGE",(function(){return S})),e.d(r,"SET_DELAY",(function(){return m})),e.d(r,"SET_EVALUATING_DETAIL_LEVEL",(function(){return O})),e.d(r,"SET_SHOW_BEST_PATH",(function(){return P})),e.d(r,"START_SOLVING",(function(){return L})),e.d(r,"GO_FULL_SPEED",(function(){return N})),e.d(r,"GO_STEP_BY_STEP",(function(){return A})),e.d(r,"STOP_STEPPING",(function(){return b})),e.d(r,"PAUSE",(function(){return I})),e.d(r,"UNPAUSE",(function(){return w})),e.d(r,"STOP_SOLVING",(function(){return x})),e.d(r,"SET_BEST_PATH",(function(){return G})),e.d(r,"SET_EVALUATING_PATHS",(function(){return D})),e.d(r,"START_DEFINING_POINTS",(function(){return C})),e.d(r,"ADD_DEFINED_POINT",(function(){return R})),e.d(r,"STOP_DEFINING_POINTS",(function(){return U})),e.d(r,"SET_POINT_COUNT",(function(){return M})),e.d(r,"SET_POINTS",(function(){return F})),e.d(r,"SET_TABLE_INSTANCE",(function(){return B})),e.d(r,"SET_DEFAULT_MAP",(function(){return k})),e.d(r,"SET_DROPDOWN_MAP",(function(){return H})),e.d(r,"TOGGLE_SITE_INFO_OPEN",(function(){return j})),e.d(r,"TOGGLE_ALG_INFO_OPEN",(function(){return V})),e.d(r,"TOGGLE_INSTANCE_INFO_OPEN",(function(){return Y})),e.d(r,"TOGGLE_EXPANDED_TREE_OPEN",(function(){return W})),e.d(r,"toggleSiteInfoOpen",(function(){return X})),e.d(r,"toggleAlgInfoOpen",(function(){return z})),e.d(r,"toggleInstanceInfoOpen",(function(){return q})),e.d(r,"toggleExpandedTreeOpen",(function(){return K})),e.d(r,"setViewportState",(function(){return Q})),e.d(r,"updateTree",(function(){return Z})),e.d(r,"updateNumNodes",(function(){return $})),e.d(r,"updateRunTable",(function(){return tt})),e.d(r,"resetRunTable",(function(){return nt})),e.d(r,"setAlgorithmStage",(function(){return rt})),e.d(r,"startSolvingAction",(function(){return ot})),e.d(r,"stopSolvingAction",(function(){return ut})),e.d(r,"setAlgorithm",(function(){return it})),e.d(r,"setAlgorithmType",(function(){return at})),e.d(r,"setInitialSolution",(function(){return ct})),e.d(r,"setSearchStrategy",(function(){return ft})),e.d(r,"setBoundingStrategy",(function(){return st})),e.d(r,"setDelay",(function(){return lt})),e.d(r,"setEvaluatingDetailLevel",(function(){return pt})),e.d(r,"setShowBestPath",(function(){return dt})),e.d(r,"resetSolverState",(function(){return Et})),e.d(r,"startSolving",(function(){return vt})),e.d(r,"goFullSpeed",(function(){return Tt})),e.d(r,"goStepByStep",(function(){return yt})),e.d(r,"stopStepping",(function(){return ht})),e.d(r,"pause",(function(){return _t})),e.d(r,"unpause",(function(){return gt})),e.d(r,"stopSolving",(function(){return St})),e.d(r,"setEvaluatingPath",(function(){return mt})),e.d(r,"setEvaluatingPaths",(function(){return Ot})),e.d(r,"setBestPath",(function(){return Pt})),e.d(r,"setTableInstance",(function(){return Lt})),e.d(r,"startDefiningPoints",(function(){return Nt})),e.d(r,"addDefinedPoint",(function(){return At})),e.d(r,"stopDefiningPoints",(function(){return bt})),e.d(r,"setPointCount",(function(){return It})),e.d(r,"randomizePoints",(function(){return wt})),e.d(r,"setDefaultMap",(function(){return xt})),e.d(r,"setDropdownMap",(function(){return Gt}));var i=e("o0o1"),a=e.n(i),c=function(t){"undefined"!=typeof window&&window.dataLayer?window.dataLayer.push(t):console.log(t)},f="SET_VIEWPORT_STATE",s="UPDATE_TREE",l="UPDATE_NUM_NODES",p="UPDATE_RUN_TABLE",d="RESET_RUN_TABLE",E="RESET_EVALUATING_STATE",v="RESET_BEST_PATH_STATE",T="SET_INITIAL_SOLUTION",y="SET_SEARCH_STRATEGY",h="SET_BOUNDING_STRATEGY",_="SET_ALGORITHM",g="SET_ALGORITHM_TYPE",S="SET_ALGORITHM_STAGE",m="SET_DELAY",O="SET_EVALUATING_DETAIL_LEVEL",P="SET_SHOW_BEST_PATH",L="START_SOLVING",N="GO_FULL_SPEED",A="GO_STEP_BY_STEP",b="STOP_STEPPING",I="PAUSE",w="UNPAUSE",x="STOP_SOLVING",G="SET_BEST_PATH",D="SET_EVALUATING_PATHS",C="START_DEFINING_POINTS",R="ADD_DEFINED_POINT",U="STOP_DEFINING_POINTS",M="SET_POINT_COUNT",F="SET_POINTS",B="SET_TABLE_INSTANCE",k="SET_DEFAULT_MAP",H="SET_DROPDOWN_MAP",j="TOGGLE_SITE_INFO_OPEN",V="TOGGLE_ALG_INFO_OPEN",Y="TOGGLE_INSTANCE_INFO_OPEN",W="TOGGLE_EXPANDED_TREE_OPEN",J=function(t,n){return Math.random()*(t-n)+n},X=function(){return{type:j}},z=function(){return{type:V}},q=function(){return{type:Y}},K=function(){return{type:W}},Q=function(t){return{type:f,viewport:t}},Z=function(t,n){return{type:s,tree:t,numNodes:n}},$=function(t){return{type:l,numNodes:t}},tt=function(t){return{type:p,row:t}},nt=function(){return{type:d}},et=function(){return{type:E}},rt=function(t){return{type:S,isRunningBnB:t}},ot=function(t,n,e,r,o,u,i,a,c,f){return{type:L,points:t,delay:n,fullSpeed:!1,evaluatingDetailLevel:e,stepping:r,bestCostFromHeuristic:o,searchStrategy:u,boundingStrategy:i,initialSolution:a,instance:c,runID:f}},ut=function(){return{type:x}},it=function(t,n){return void 0===n&&(n={}),function(e){e(et()),e(function(t,n){return{type:_,algorithm:t,defaults:n}}(t,n))}},at=function(t){return function(n){n(et()),n(function(t,n){return{type:g,algorithmType:t,defaults:n}}(t))}},ct=function(t,n){return void 0===n&&(n={}),function(e){e(et()),e(function(t,n){return{type:T,initialSolution:t,defaults:n}}(t,n))}},ft=function(t,n){return void 0===n&&(n={}),function(e){e(et()),e(function(t,n){return{type:y,searchStrategy:t,defaults:n}}(t,n))}},st=function(t,n){return void 0===n&&(n={}),function(e){e(et()),e(function(t,n){return{type:h,boundingStrategy:t,defaults:n}}(t,n))}},lt=function(t){return{type:m,delay:t}},pt=function(t){return{type:O,level:t}},dt=function(t){return{type:P,show:t}},Et=function(){return function(t){t(St()),t(et()),t({type:v}),t(rt(!1))}},vt=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t,e){var r=e(),o=r.initialSolution,u=r.pointCount,i=r.algorithm,a=r.evaluatingDetailLevel,f=r.bestCost;c({event:"start-solving",initialSolution:o,algorithm:i,pointCount:u,evaluatingDetailLevel:a,bestCost:f}),t(ot.apply(void 0,n))}},Tt=function(){return{type:N}},yt=function(){return{type:A}},ht=function(){return{type:b}},_t=function(){return{type:I}},gt=function(){return{type:w}},St=function(){return function(t){t(et()),t(ut())}},mt=function(t,n){return{type:D,paths:[t],cost:n}},Ot=function(t,n,e){return{type:D,paths:t,cost:n,lowerBound:e}},Pt=function(t,n){return{type:G,path:t,cost:n}},Lt=function(t){return{type:B,instance:t}},Nt=function(){return function(t){t(Et()),t({type:C})}},At=function(t){return{type:R,point:t}},bt=function(){return{type:U}},It=function(t){return function(n){n(Et()),n(function(t){return{type:M,count:t}}(t))}},wt=function(t){return function(n,e){var r=e().pointCount,o=t.top,u=t.bottom,i=t.left,a=t.right,c=Array.from({length:r}).map((function(t){return[J(a,i),J(o,u)]})),f=r+"nodes_"+Date.now().toString().slice(8);n(Et()),n(function(t){return{type:F,points:t}}(c)),n(Lt(f))}},xt=function(){return function(t){t(Et()),t({type:k})}},Gt=function(t){return function(n){n(Et()),n(function(t){return{type:H,instance:t}}(t)),n(Lt(t))}};(function(t){var n=function(t){return u(a.a.mark((function n(){var e=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.apply(void 0,e);case 2:self.postMessage(ut()),self.postMessage(rt("toggle"));case 4:case"end":return n.stop()}}),n)})))}(t);self.solverConfig={detailLevel:0,delay:10,fullSpeed:!1,stepping:!0,bestCostFromHeuristic:Number.POSITIVE_INFINITY,paused:!1},self.setBestPath=function(){self.postMessage(Pt.apply(r,arguments))},self.setEvaluatingPaths=function(t,n,e){if(void 0===n&&(n=null),void 0===e&&(e=1),null!==n&&(n=Math.round(100*n)/100),self.solverConfig.detailLevel>=e){var r=t(),o=r.paths,u=r.cost;self.postMessage(Ot(o,u,n))}},self.updateTree=function(){self.postMessage(Z.apply(r,arguments))},self.setEvaluatingPath=function(t,n){if(void 0===n&&(n=1),self.solverConfig.detailLevel>=n){var e=t(),r=e.path,o=e.cost;self.postMessage(mt(r,o))}},self.waitPause=u(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!self.solverConfig.paused){t.next=5;break}return t.next=3,new Promise((function(t){return setTimeout(t,500)}));case 3:t.next=0;break;case 5:case"end":return t.stop()}}),t)}))),self.sleep=u(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(self.solverConfig.stepping&&(self.postMessage(_t()),self.solverConfig.paused=!0),!self.solverConfig.paused){t.next=5;break}return t.next=4,self.waitPause();case 4:return t.abrupt("return",t.sent);case 5:return n=self.solverConfig.fullSpeed?0:self.solverConfig.delay||10,t.abrupt("return",new Promise((function(t){setTimeout(t,n)})));case 7:case"end":return t.stop()}}),t)}))),self.saveRunDetails=function(t){self.postMessage(tt(t))},self.onmessage=function(){var t=u(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.data,t.t0=r.type,t.next=t.t0===L?4:t.t0===m?12:t.t0===O?14:t.t0===N?16:t.t0===A?19:t.t0===b?21:t.t0===I?22:t.t0===w?24:26;break;case 4:return self.solverConfig.delay=r.delay,self.solverConfig.detailLevel=r.evaluatingDetailLevel,self.solverConfig.fullSpeed=r.fullSpeed,self.solverConfig.stepping=r.stepping,self.solverConfig.bestCostFromHeuristic=r.bestCostFromHeuristic,self.solverConfig.paused=!1,n(r.points,r.bestCostFromHeuristic,r.searchStrategy,r.boundingStrategy,r.initialSolution,r.instance,r.runID),t.abrupt("break",27);case 12:return self.solverConfig.delay=r.delay,t.abrupt("break",27);case 14:return self.solverConfig.detailLevel=r.level,t.abrupt("break",27);case 16:return self.solverConfig.evaluatingDetailLevel=0,self.solverConfig.fullSpeed=!0,t.abrupt("break",27);case 19:return self.solverConfig.stepping=!0,t.abrupt("break",27);case 21:self.solverConfig.stepping=!1;case 22:return self.solverConfig.paused=!0,t.abrupt("break",27);case 24:return self.solverConfig.paused=!1,t.abrupt("break",27);case 26:throw new Error("invalid action sent to solver "+r.type);case 27:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()})(async()=>{})}});
//# sourceMappingURL=abcbdb55fe105ac9488a.worker.js.map