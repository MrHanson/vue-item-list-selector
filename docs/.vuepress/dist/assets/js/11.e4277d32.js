(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(t,e,n){},248:function(t,e,n){"use strict";var i=n(126);n.n(i).a},271:function(t,e,n){"use strict";n.r(e);n(219),n(220),n(221),n(62);var i=n(76),o=(n(115),n(158)),r=(n(60),n(239),n(247)),a=n(242),l=n(243),s=n.n(l),c=n(244),u=n.n(c),d=n(245),h=n(246);function f(t){return!!t&&("object"===Object(o.a)(t)||"function"==typeof t)&&"function"==typeof t.then}function p(t,e){return e?t[e]:t}var y={name:"ItemListSelector",components:{VirtualList:u.a},model:{prop:"value",event:"change"},props:{value:{default:function(){return[]}},optionsData:{type:[Array,Function,Promise],default:function(){return[]}},multiple:{type:Boolean,default:!0},loadingText:{type:String,default:"Loading..."},notFoundText:{type:String,default:"No results"},searchText:{type:String,default:"Search"},splitKeyword:{type:Boolean,default:!0},matchTemplate:{type:Function,default:function(t){return"<mark>".concat(t,"</mark>")}},labelKey:{type:String,default:"label"},valueKey:{type:String},filterMethod:{type:Function},optionTemplate:{type:Function},optionHeight:{type:Number,default:34},optionsRemain:{type:Number,default:6},optionsBench:{type:Number,default:6}},data:function(){return{internalValue:[],internalOptions:[],loading:!1,keyword:"",debounceKeyword:"",startIndex:0,activeIndex:-1}},computed:{filtedData:function(){var t=this,e=this.debounceKeyword;if(e){var n;if(this.filterMethod)n=this.filterMethod;else{var i=this.splitKeyword?h.hasMatch:h.hasExactMatch;n=function(e,n){var o;try{o=t.optionToString(e).toString()}catch(t){}return o&&i(o,n)}}return this.internalOptions.filter((function(t){return n(t,e)}))}return this.internalOptions},optionToString:function(){var t=this;return this.optionTemplate||function(e){return Object(a.a)(e)&&t.labelKey?e[t.labelKey]:e}}},watch:{keyword:function(){this.throttleKeyword()},debounceKeyword:function(){this.startIndex=0,this.activeIndex=-1},value:"initValue",optionsData:"initOptionsData"},created:function(){this.multiple&&!Array.isArray(this.value)&&console.error("[ItemListSelect error] Expected array with v-model/value in multiple mode, got "+Object(o.a)(this.value)+" with value",this.value),this.initOptionsData()},methods:{initOptionsData:function(){var t,e=this,n=function(t){Array.isArray(t)&&(e.internalOptions=t,e.loading=!1,e.$emit("options-inited"),e.initValue())},i=this.optionsData;if(t=i,Array.isArray(t))n(i);else if(function(t){return"function"==typeof t}(i)){this.loading=!0;var o=i(n);f(o)&&o.then((function(t){return n(t)}))}else f(i)&&(this.loading=!0,i.then((function(t){return n(t)})))},initValue:function(){var t,e=this;if(this.multiple)t=this.internalOptions.filter((function(t){return e.value.indexOf(p(t,e.valueKey))>-1}));else{var n=this.internalOptions.find((function(t){return e.value===p(t,e.valueKey)}));t=n?[n]:[]}this.syncValue(t)},syncValue:function(t){var e,n=this;s()(t,this.internalValue)||(e=this.multiple?this.valueKey?t.map((function(t){return p(t,n.valueKey)})):t:p(t[0],this.valueKey),this.internalValue=t,this.$emit("change",e))},throttleKeyword:Object(r.a)(300,(function(){this.debounceKeyword=this.keyword})),isSelected:function(t){return this.internalValue.indexOf(t)>-1},highlightMatch:function(t){var e=this.splitKeyword?h.markMatch:h.markExactMatch;return this.debounceKeyword?e(t,this.debounceKeyword,this.matchTemplate):t},activePrevOptions:function(){this.activeIndex>0?(this.activeIndex--,this.scrollActiveOptionToView("prev")):(this.activeIndex=this.filtedData.length-1,this.startIndex=this.filtedData.length)},activeNextOptions:function(){this.activeIndex<this.filtedData.length-1?(this.activeIndex++,this.scrollActiveOptionToView("next")):(this.activeIndex=0,this.startIndex=0)},toggleSelection:function(t){var e=this.filtedData[t];if(e){var n=[];if(this.multiple){var o=this.internalValue.indexOf(e);n=o>-1?Object(i.a)(this.internalValue.slice(0,o)).concat(Object(i.a)(this.internalValue.slice(o+1))):Object(i.a)(this.internalValue).concat([e])}else n=[e];this.syncValue(n)}},scrollActiveOptionToView:function(){var t=this;this.$nextTick().then((function(){var e=t.$refs.options.$el.querySelector(".item-selector__option--active");try{Object(d.a)(e,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach((function(t){var e=t.el,n=t.top,i=t.left;e.scrollTop=n,e.scrollLeft=i}))}catch(t){}}))},setValue:function(t){if("function"!=typeof t)throw Error('[ItemListSelect Error] "setValue()" accept a function as argument.');var e=this.internalOptions.filter(t);this.syncValue(e)},addValue:function(t){if(!this.multiple)throw Error('[ItemListSelect Error] "addValue()" only works on multiple mode.');if("function"!=typeof t)throw Error('[ItemListSelect Error] "addValue()" accept a function as argument.');var e=this.internalOptions.filter(t),n=Object(i.a)(new Set(Object(i.a)(this.internalValue).concat(Object(i.a)(e))));this.syncValue(n)},removeValue:function(t){if("function"!=typeof t)throw Error('[ItemListSelect Error] "removeValue()" accept a function as argument.');var e=this.internalValue.filter((function(e){return!t(e)}));this.syncValue(e)},reset:function(){this.keyword="",this.syncValue([])}}},v=(n(248),n(1)),m=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-selector",on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.activePrevOptions(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.activeNextOptions(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.toggleSelection(t.activeIndex))}]}},[n("div",{staticClass:"item-selector__searchbar"},[""!==t.keyword?n("span",{staticClass:"item-selector__searchbar-clean",on:{click:function(e){t.keyword=""}}}):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyword,expression:"keyword",modifiers:{trim:!0}}],attrs:{placeholder:t.searchText,type:"text"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),0===t.filtedData.length?n("div",{staticClass:"item-selector__options--empty"},[t._v("\n    "+t._s(t.loading?t.loadingText:t.notFoundText)+"\n  ")]):n("virtual-list",{key:t.debounceKeyword,ref:"options",staticClass:"item-selector__options-wrap",attrs:{start:t.startIndex,size:t.optionHeight,remain:t.optionsRemain,bench:t.optionsBench,wtag:"ul",wclass:"item-selector__options"}},t._l(t.filtedData,(function(e,i){return n("li",{key:i,class:["item-selector__option",{"item-selector__option--checked":t.isSelected(e),"item-selector__option--active":i===t.activeIndex}],on:{click:function(e){return t.toggleSelection(i)},mouseenter:function(e){t.activeIndex=i}}},[t._t("option-template",[n("span",{domProps:{innerHTML:t._s(t.highlightMatch(t.optionToString(e)))}})],null,{option:e,keyword:t.keyword,selected:t.isSelected(e),markedHtml:t.highlightMatch(t.optionToString(e))})],2)})),0)],1)}),[],!1,null,null,null).exports;m.install=function(t){t.component(m.name,m)},"undefined"!=typeof window&&window.Vue&&m.install(window.Vue);e.default=m}}]);