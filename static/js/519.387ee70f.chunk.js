/*! For license information please see 519.387ee70f.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{8175:function(e,t,a){"use strict";var r=a(2791),n=function(){return n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var i=function(e){var t=e.animate,a=void 0===t||t,i=e.animateBegin,o=e.backgroundColor,s=void 0===o?"#f5f6f7":o,l=e.backgroundOpacity,c=void 0===l?1:l,p=e.baseUrl,u=void 0===p?"":p,d=e.children,g=e.foregroundColor,f=void 0===g?"#eee":g,v=e.foregroundOpacity,b=void 0===v?1:v,m=e.gradientRatio,h=void 0===m?2:m,y=e.gradientDirection,C=void 0===y?"left-right":y,P=e.uniqueKey,k=e.interval,x=void 0===k?.25:k,L=e.rtl,N=void 0!==L&&L,E=e.speed,O=void 0===E?1.2:E,w=e.style,R=void 0===w?{}:w,A=e.title,j=void 0===A?"Loading...":A,B=e.beforeMask,T=void 0===B?null:B,S=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),_=P||Math.random().toString(36).substring(6),D=_+"-diff",I=_+"-animated-diff",q=_+"-aria",H=N?{transform:"scaleX(-1)"}:null,M="0; "+x+"; 1",J=O+"s",K="top-bottom"===C?"rotate(90)":void 0;return(0,r.createElement)("svg",n({"aria-labelledby":q,role:"img",style:n(n({},R),H)},S),j?(0,r.createElement)("title",{id:q},j):null,T&&(0,r.isValidElement)(T)?T:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+D+")",style:{fill:"url("+u+"#"+I+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:D},d),(0,r.createElement)("linearGradient",{id:I,gradientTransform:K},(0,r.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:c},a&&(0,r.createElement)("animate",{attributeName:"offset",values:-h+"; "+-h+"; 1",keyTimes:M,dur:J,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"50%",stopColor:f,stopOpacity:b},a&&(0,r.createElement)("animate",{attributeName:"offset",values:-h/2+"; "+-h/2+"; "+(1+h/2),keyTimes:M,dur:J,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:c},a&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+h),keyTimes:M,dur:J,repeatCount:"indefinite",begin:i})))))},o=function(e){return e.children?(0,r.createElement)(i,n({},e)):(0,r.createElement)(s,n({},e))},s=function(e){return(0,r.createElement)(o,n({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=o},5763:function(e,t,a){"use strict";a.d(t,{WMq:function(){return n},rBm:function(){return i}});var r=a(9983);function n(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 5l6 6 6-6H0z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 11L6 5l-6 6h12z"}}]})(e)}},6048:function(e,t,a){var r;e.exports=(r=a(2791),function(){var e={703:function(e,t,a){"use strict";var r=a(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=r}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";a.r(n),a.d(n,{default:function(){return k}});var e=a(98),t=a.n(e),r=a(697),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}var s=function(e){var a=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:a},t().createElement("a",o({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:p},c(p)),g(n)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,o=e.breakHandler,s=e.getEventListener,l=n||"break";return t().createElement("li",{className:l},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:o},s(o)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var u=p;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(this,arguments)}function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var a,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return m(this,e)});function s(e){var a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(h(a=o.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(h(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;a.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0})})),C(h(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),C(h(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),C(h(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(h(a),"handleClick",(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,o=void 0!==i&&i,s=n.isNext,l=void 0!==s&&s,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,f=a.props.onClick,v=r;if(f){var b=f({index:t,selected:g,nextSelectedPage:r,event:e,isPrevious:o,isNext:l,isBreak:p,isActive:d});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&a.handlePageChange(v)})),C(h(a),"handleBreakClick",(function(e,t){var r=a.state.selected;a.handleClick(t,e,r<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),C(h(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),C(h(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),C(h(a),"getElementPageRel",(function(e){var t=a.state.selected,r=a.props,n=r.nextPageRel,i=r.prevPageRel,o=r.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?n:void 0})),C(h(a),"pagination",(function(){var e=[],r=a.props,n=r.pageRangeDisplayed,i=r.pageCount,o=r.marginPagesDisplayed,s=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,d=a.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var f=n/2,v=n-f;d>i-n/2?f=n-(v=i-d):d<n/2&&(v=n-(f=d));var b,m,h=function(e){return a.getPageElement(e)},y=[];for(b=0;b<i;b++){var C=b+1;if(C<=o)y.push({type:"page",index:b,display:h(b)});else if(C>i-o)y.push({type:"page",index:b,display:h(b)});else if(b>=d-f&&b<=d+(0===d&&n>1?v-1:v))y.push({type:"page",index:b,display:h(b)});else if(s&&y.length>0&&y[y.length-1].display!==m&&(n>0||o>0)){var P=b<d?p.backward:p.forward;m=t().createElement(u,{key:b,breakAriaLabel:P,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),y.push({type:"break",index:b,display:m})}}y.forEach((function(t,a){var r=t;"break"===t.type&&y[a-1]&&"page"===y[a-1].type&&y[a+1]&&"page"===y[a+1].type&&y[a+1].index-y[a-1].index<=2&&(r={type:"page",index:t.index,display:h(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:r},a}return a=s,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,r=a.disabledClassName,n=a.disabledLinkClassName,i=a.pageCount,o=a.className,s=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,g=a.prevRel,v=a.nextLabel,b=a.nextClassName,m=a.nextLinkClassName,h=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(d(c)).concat(P?" ".concat(d(r)):""),L="".concat(d(b)).concat(k?" ".concat(d(r)):""),N="".concat(d(p)).concat(P?" ".concat(d(n)):""),E="".concat(d(m)).concat(k?" ".concat(d(n)):""),O=P?"true":"false",w=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",f({className:N,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:L},t().createElement("a",f({className:E,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":w,"aria-label":h,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&v(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=P}(),n}())}}]);
//# sourceMappingURL=519.387ee70f.chunk.js.map