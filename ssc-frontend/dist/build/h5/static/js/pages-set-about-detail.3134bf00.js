(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-about-detail"],{"4b54":function(t,e,i){"use strict";i.r(e);var a=i("b188"),n=i("7e1d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("876c");var r,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"20d9293e",null,!1,a["a"],r);e["default"]=c.exports},"7e1d":function(t,e,i){"use strict";i.r(e);var a=i("b426"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"876c":function(t,e,i){"use strict";var a=i("fd35"),n=i.n(a);n.a},b188:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?t._e():i("v-uni-view",{staticClass:"about"},["注册协议"===t.title?i("v-uni-view",{staticClass:"shop-info "},[t.detail.protocol_register?i("v-uni-view",{staticClass:"about-content"},[i("rf-parser",{attrs:{"lazy-load":!0,html:t.detail.protocol_register}})],1):t._e(),t.detail.protocol_register||t.loading?t._e():i("rf-empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),"隐私协议"===t.title?i("v-uni-view",{staticClass:"shop-info"},[t.detail.protocol_privacy?i("v-uni-view",{staticClass:"about-content"},[i("rf-parser",{attrs:{"lazy-load":!0,html:t.detail.protocol_privacy}})],1):t._e(),t.detail.protocol_privacy||t.loading?t._e():i("rf-empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),"充值协议"===t.title?i("v-uni-view",{staticClass:"shop-info"},[t.detail.protocol_recharge?i("v-uni-view",{staticClass:"about-content"},[i("rf-parser",{attrs:{"lazy-load":!0,html:t.detail.protocol_recharge}})],1):t._e(),t.detail.protocol_recharge||t.loading?t._e():i("rf-empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),t.detail||t.loading?t._e():i("rf-empty",{attrs:{info:"暂无"+t.title}}),i("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},b426:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o=i("2b74"),r={data:function(){return{detail:{},title:null,loading:!0}},onLoad:function(t){this.initData(t)},methods:{initData:function(t){this.title=t.title,uni.setNavigationBarTitle({title:t.title}),this.getConfigList(t.field)},getConfigList:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(-1===e.indexOf("protocol")){t.next=3;break}return t.next=3,this.$http.get("".concat(o.configList),{field:e}).then((function(t){i.loading=!1,i.detail=t.data})).catch((function(){i.loading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=r},f9fe:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-20d9293e]{background-color:#f8f8f8;position:relative}uni-page-body .about .shop-info[data-v-20d9293e]{text-align:center}uni-page-body .about .shop-info .about-content[data-v-20d9293e]{padding:%?30?%}uni-page-body .about .shop-info uni-image[data-v-20d9293e]{margin-top:%?100?%;width:%?240?%;height:%?240?%;border-radius:50%}body.?%PAGE?%[data-v-20d9293e]{background-color:#f8f8f8}",""]),t.exports=e},fd35:function(t,e,i){var a=i("f9fe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2f1cda00",a,!0,{sourceMap:!1,shadowMode:!1})}}]);