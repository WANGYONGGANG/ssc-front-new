(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userinfo-userinfo"],{"0cc8":function(t,e,i){"use strict";i.r(e);var a=i("a7df"),n=i("dde4");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7c15");var o,r=i("f0c5"),h=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a574e54a",null,!1,a["a"],o);e["default"]=h.exports},"1e63":function(t,e,i){var a=i("76f5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cf86757e",a,!0,{sourceMap:!1,shadowMode:!1})},"3faf":function(t,e,i){"use strict";i.r(e);var a=i("b38c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"701a":function(t,e,i){var a=i("ae68");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("684848de",a,!0,{sourceMap:!1,shadowMode:!1})},"76f5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".my-canvas[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-1a2a4e9c]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-1a2a4e9c]{height:50px;position:fixed!important;box-sizing:border-box;border:1px solid #f1f1f1;background:#fff;width:100%;left:0;bottom:0;z-index:100009;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.oper[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?10?% %?20?%;width:100%;height:100%;box-sizing:border-box;-webkit-align-self:center;align-self:center}.btn-wrapper[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n\r\n\r\nheight:50px;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn-wrapper uni-view[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.hover[data-v-1a2a4e9c]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.clr-wrapper uni-view[data-v-1a2a4e9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-1a2a4e9c]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}",""]),t.exports=e},"7c15":function(t,e,i){"use strict";var a=i("701a"),n=i.n(a);n.a},"802d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.memberUpdate=e.memberInfo=void 0;var a="/member/member/index";e.memberInfo=a;var n="/member/member/update";e.memberUpdate=n},a7df:function(t,e,i){"use strict";var a={rfLoadProgress:i("5cad").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"user-section",class:"bg-"+t.themeColor.name},[i("v-uni-image",{staticClass:"bg",attrs:{src:t.userBg}}),i("v-uni-view",{staticClass:"portrait-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImage.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"portrait",attrs:{src:t.profileInfo.head_portrait||t.headImg}})],1)],1),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),i("v-uni-input",{attrs:{type:"number",disabled:!0,placeholder:"请输入手机号码"},model:{value:t.profileInfo.mobile,callback:function(e){t.$set(t.profileInfo,"mobile",e)},expression:"profileInfo.mobile"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("昵　称")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的昵称"},model:{value:t.profileInfo.nickname,callback:function(e){t.$set(t.profileInfo,"nickname",e)},expression:"profileInfo.nickname"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("姓　名")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的姓名"},model:{value:t.profileInfo.realname,callback:function(e){t.$set(t.profileInfo,"realname",e)},expression:"profileInfo.realname"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("性　别")]),i("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGenderChange.apply(void 0,arguments)}}},t._l(t.genders,(function(e,a){return i("v-uni-label",{key:a,staticClass:"gender-item"},[i("v-uni-radio",{staticClass:"gender-item-radio",attrs:{color:t.themeColor.color,value:e.value,checked:e.value===t.profileInfo.gender}}),i("v-uni-text",{staticClass:"gender-item-text"},[t._v(t._s(e.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("生　日")]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[i("v-uni-view",{staticClass:"date",staticStyle:{background:"none"}},[t._v(t._s(t.date||"请选择日期"))])],1)],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("Q　Q")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入您的QQ"},model:{value:t.profileInfo.qq,callback:function(e){t.$set(t.profileInfo,"qq",e)},expression:"profileInfo.qq"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("邮　箱")]),i("v-uni-input",{attrs:{placeholder:"请输入您的邮箱"},model:{value:t.profileInfo.email,callback:function(e){t.$set(t.profileInfo,"email",e)},expression:"profileInfo.email"}})],1),i("v-uni-button",{staticClass:"confirm-btn",class:"bg-"+t.themeColor.name,attrs:{disabled:t.btnLoading,loading:t.btnLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUpdateInfo.apply(void 0,arguments)}}},[t._v("修改资料")])],1),i("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}}),i("rf-load-progress",{attrs:{height:t.CustomBar,progress:t.loadProgress}})],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},ae68:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-a574e54a]{background-color:#fff}.userinfo .user-section[data-v-a574e54a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?320?%;padding:%?40?% %?30?% 0;overflow:hidden;position:relative}.userinfo .user-section .bg[data-v-a574e54a]{position:absolute;left:0;top:0;width:100vw;opacity:.84}.userinfo .user-section .portrait-box[data-v-a574e54a]{clear:both;z-index:2}.userinfo .user-section .portrait[data-v-a574e54a]{position:relative;width:%?200?%;height:%?200?%;border-radius:50%;border:%?6?% solid #fff}.userinfo .user-section .yticon[data-v-a574e54a]{position:absolute;line-height:1;z-index:5;font-size:%?48?%;color:#fff;padding:%?4?% %?6?%;border-radius:%?6?%;background:rgba(0,0,0,.4)}.userinfo .user-section .pt-upload-btn[data-v-a574e54a]{right:0;bottom:%?10?%}.userinfo .user-section .bg-upload-btn[data-v-a574e54a]{right:%?20?%;bottom:%?16?%}.userinfo .input-content[data-v-a574e54a]{padding:%?40?% %?60?%}.userinfo .input-content .input-item[data-v-a574e54a]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?30?%;background:#f8f6fc;height:%?80?%;line-height:%?80?%;border-radius:4px;margin-bottom:%?30?%}.userinfo .input-content .input-item[data-v-a574e54a]:last-child{margin-bottom:0}.userinfo .input-content .input-item .tit[data-v-a574e54a]{width:%?100?%;font-size:%?26?%;color:#606266}.userinfo .input-content .input-item uni-input[data-v-a574e54a]{width:calc(100% - %?100?%);height:%?80?%;line-height:%?80?%;font-size:%?30?%;color:#303133}.userinfo .input-content .input-item .date[data-v-a574e54a]{height:%?80?%;line-height:%?80?%;font-size:%?30?%;color:#303133}.userinfo .input-content .input-item .gender-item[data-v-a574e54a]{margin-right:%?20?%}.userinfo .input-content .input-item .gender-item .gender-item-text[data-v-a574e54a]{padding-left:%?10?%}.userinfo .input-content .input-item .gender-item uni-radio .wx-radio-input.wx-radio-input-checked[data-v-a574e54a]{background:#fa436a;border-color:#fa436a}body.?%PAGE?%[data-v-a574e54a]{background-color:#fff}",""]),t.exports=e},b38c:function(t,e,i){"use strict";var a=i("4ea4");i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("6b54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("34ef"),i("4917"),i("6aa2"),i("96cf");var n=a(i("1da1"));function s(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=o(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,h=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){h=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(h)throw s}}}}function o(t,e){if(t){if("string"===typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}i("28a5");var h=50,l={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var t=this;this.ctxCanvas=uni.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=uni.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=uni.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):uni.showTabBar({complete:function(e){t.moreHeight="showTabBar:ok"===e.errMsg?50:0,t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.pixelRatio=t.pixelRatio,this.windowWidth=t.windowWidth,this.drawTop=t.windowTop,this.windowHeight=t.windowHeight+t.windowBottom,this.cvsStyleHeight=this.windowHeight-h+"px",this.pxRatio=this.windowWidth/750;var e=this.avatarStyle;if(e&&!0!==e&&(e=e.trim())){e=e.split(";");var i,a={},n=s(e);try{for(n.s();!(i=n.n()).done;){var o=i.value;if(o){if(o=o.trim().split(":"),o[1].indexOf("upx")>=0){var r=o[1].trim().split(" ");for(var l in r)r[l]&&r[l].indexOf("upx")>=0&&(r[l]=parseFloat(r[l])*this.pxRatio+"px");o[1]=r.join(" ")}a[o[0].trim()]=o[1].trim()}}}catch(c){n.e(c)}finally{n.f()}this.imgStyle=a}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){uni.showLoading({mask:!0});var i=t.imgPath=e.tempFilePaths[0];uni.getImageInfo({src:i,success:function(e){if(t.imgWidth=e.width,t.imgHeight=e.height,t.path=i,!t.hasSel){var a=t.selStyle||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var n=t.selWidth.indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),s=t.selHeight.indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);a.width=n+"px",a.height=s+"px",a.top=(t.windowHeight-s-h)/2+"px",a.left=(t.windowWidth-n)/2+"px",t.selStyle=a}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){t.$mHelper.toast("error3")},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var e=this.selStyle,i=parseInt(e.left),a=parseInt(e.top),n=parseInt(e.width),s=parseInt(e.height),o=this.exportWidth||n,r=this.exportHeight||s;i*=this.pixelRatio,a*=this.pixelRatio,o=n,r=s,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:i,y:a,width:n,height:s,destWidth:o,destHeight:r,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){if(t.exportWidth&&t.exportHeight){var i=t.ctxCanvas;o=t.exportWidth,r=t.exportHeight,i.drawImage(e,0,0,o,r),i.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:o,height:r,destWidth:o,destHeight:r,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){t.$mHelper.toast("error0")}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(e){t.$mHelper.toast("error1")},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var e=this.selStyle,i=(parseInt(e.width),parseInt(e.height),this.prvX),a=this.prvY,n=this.prvWidth,s=this.prvHeight,o=this.exportWidth||n,r=this.exportHeight||s;i*=this.pixelRatio,a*=this.pixelRatio,o=n,r=s,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:i,y:a,width:n,height:s,destWidth:o,destHeight:r,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){if(t.exportWidth&&t.exportHeight){var i=t.ctxCanvas;o=t.exportWidth,r=t.exportHeight,i.drawImage(e,0,0,o,r),i.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:o,height:r,destWidth:o,destHeight:r,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fDrawInit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.windowWidth,a=this.windowHeight,n=this.imgWidth,s=this.imgHeight,o=n/s,r=i-40,l=a-h-80,c=(this.pixelRatio,parseInt(this.selStyle.width)),d=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":o>1?this.fixWidth=1:this.fixHeight=1;break;case"short":o>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":c>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":c>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":o>1?this.lckWidth=1:this.lckHeight=1;break;case"short":o>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":c>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":c>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(r=c,l=r/o):this.fixHeight?(l=d,r=l*o):o<1?s<l?(r=n,l=s):(l=l,r=l*o):n<r?(r=n,l=s):(r=r,l=r/o),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,r<c&&(r=c,l=r/o,this.lckHeight=0),l<d&&(l=d,r=l*o,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(i-r)/2,this.posHeight=(a-l-h)/2,this.useWidth=r,this.useHeight=l;var u=this.selStyle,p=parseInt(u.left),f=parseInt(u.top),v=parseInt(u.width),g=parseInt(u.height),x=(this.canvas,this.canvasOper,this.ctxCanvas),m=this.ctxCanvasOper;m.setLineWidth(3),m.setStrokeStyle("grey"),m.setGlobalAlpha(.4),m.setFillStyle("black"),m.strokeRect(p,f,v,g),m.fillRect(0,0,this.windowWidth,f),m.fillRect(0,f,p,g),m.fillRect(0,f+g,this.windowWidth,this.windowHeight-g-f-h),m.fillRect(p+v,f,this.windowWidth-v-p,g),m.setStrokeStyle("red"),m.moveTo(p+20,f),m.lineTo(p,f),m.lineTo(p,f+20),m.moveTo(p+v-20,f),m.lineTo(p+v,f),m.lineTo(p+v,f+20),m.moveTo(p+20,f+g),m.lineTo(p,f+g),m.lineTo(p,f+g-20),m.moveTo(p+v-20,f+g),m.lineTo(p+v,f+g),m.lineTo(p+v,f+g-20),m.stroke(),m.draw(!1,(function(){e&&(t.styleDisplay="flex",t.styleTop=t.drawTop+"px",x.setFillStyle("black"),t.fDrawImage())})),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var e=this.ctxCanvas;e.fillRect(0,0,this.windowWidth,this.windowHeight-h),e.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),e.scale(this.scaleSize,this.scaleSize),e.rotate(this.rotateDeg*Math.PI/180),e.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),e.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar()},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var e=this.selStyle,i=parseInt(e.left),a=parseInt(e.top),n=parseInt(e.width),s=parseInt(e.height);i*=this.pixelRatio,a*=this.pixelRatio,uni.showLoading({mask:!0}),uni.canvasToTempFilePath({x:i,y:a,width:n,height:s,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(e){t.prvImgTmp=e=e.tempFilePath;var i=t.ctxCanvasPrv,a=t.windowWidth,n=parseInt(t.cvsStyleHeight),s=parseInt(t.selStyle.width),o=parseInt(t.selStyle.height),r=a-40,h=n-80,l=r/s,c=o*l;c<h?(s=r,o=c):(l=h/o,s*=l,o=h),i.setFillStyle("black"),i.fillRect(0,0,a,n),t.prvX=a=(a-s)/2,t.prvY=n=(n-o)/2,t.prvWidth=s,t.prvHeight=o,i.drawImage(e,a,n,s,o),i.draw(!1),t.btop(e).then((function(e){t.showOper=!1,t.prvTop=t.drawTop+"px"}))},fail:function(){},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e){var a=e.selWidth,n=e.selHeight,s=e.expWidth,o=e.expHeight,r=e.quality,l=e.canRotate,c=e.canScale,d=e.minScale,u=e.maxScale,p=e.stretch,f=e.inner,v=e.lock;s&&(this.exportWidth=s.indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s)),o&&(this.exportHeight=o.indexOf("upx")>=0?parseInt(o)*this.pxRatio:parseInt(o)),this.letRotate="false"===l?0:1,this.letScale="false"===c?0:1,this.qlty=parseInt(r)||.9,this.mnScale=d||.3,this.mxScale=u||4,this.stc=p,this.isin="true"===f?1:0,this.lck=v,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),a&&n&&(a=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),n=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n),this.selStyle.width=a+"px",this.selStyle.height=n+"px",this.selStyle.top=(this.windowHeight-n-h)/2+"px",this.selStyle.left=(this.windowWidth-a)/2+"px",this.hasSel=!0)}this.rtn=i,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var e=t.touches,i=e[0],a=e[1];if(this.touch0=i,this.touch1=a,a){var n=a.x-i.x,s=a.y-i.y;this.fgDistance=Math.sqrt(n*n+s*s)}},fMove:function(t){var e=t.touches,i=e[0],a=e[1];if(a){var n=a.x-i.x,s=a.y-i.y,o=Math.sqrt(n*n+s*s),r=.005*(o-this.fgDistance),h=this.scaleSize+r;do{if(!this.letScale)break;if(h<this.mnScale)break;if(h>this.mxScale)break;if(this.isin){var l=this.useWidth*h,c=this.useHeight*h,d=this.posWidth+this.useWidth/2,u=this.posHeight+this.useHeight/2,p=d-l/2,f=u-c/2,v=p+l,g=f+c,x=parseInt(this.selStyle.left),m=parseInt(this.selStyle.top),b=parseInt(this.selStyle.width),w=parseInt(this.selStyle.height);if(x<p||x+b>v||m<f||m+w>g)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=h}while(0);this.fgDistance=o,a.x!==i.x&&this.letRotate&&(n=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),s=(a.y-i.y)/(a.x-i.x),this.rotateDeg+=180*Math.atan((s-n)/(1+n*s))/Math.PI,this.touch0=i,this.touch1=a),this.fDrawImage()}else if(this.touch0){var y=i.x-this.touch0.x,k=i.y-this.touch0.y,I=this.posWidth+y,S=this.posHeight+k;if(this.isin){var H=this.useWidth*this.scaleSize,W=this.useHeight*this.scaleSize,C=I+this.useWidth/2,T=S+this.useHeight/2,R=C-H/2,P=T-W/2,D=R+H,O=P+W,$=parseInt(this.selStyle.left),j=parseInt(this.selStyle.top),M=parseInt(this.selStyle.width),_=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(y)<100&&($>=R&&$+M<=D?this.posWidth=I:$<R?this.posWidth=$-this.scaleWidth:$+M>D&&(this.posWidth=$-(H-M)-this.scaleWidth)),!this.lckHeight&&Math.abs(k)<100&&(j>=P&&j+_<=O?this.posHeight=S:j<P?this.posHeight=j-this.scaleHeight:j+_>O&&(this.posHeight=j-(W-_)-this.scaleHeight))}else Math.abs(y)<100&&!this.lckWidth&&(this.posWidth=I),Math.abs(k)<100&&!this.lckHeight&&(this.posHeight=S);this.touch0=i,this.fDrawImage()}},fEnd:function(t){var e=t.touches,i=e&&e[0];e&&e[1];i?this.touch0=i:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var t=this;return new Promise((function(e,i){var a=t.prvX,n=t.prvY,s=t.prvWidth,o=t.prvHeight;a*=t.pixelRatio,n*=t.pixelRatio,s*=t.pixelRatio,o*=t.pixelRatio,uni.canvasGetImageData({canvasId:"prv-canvas",x:a,y:n,width:s,height:o,success:function(t){e(t.data)},fail:function(t){i(t)}},t)}))},fColorChange:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var i,a,n,s,o,r,h,l,c,d,u,p,f,v,g,x,m,b,w,y,k,I,S,H,W,C,T;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=Date.now(),!(i-this.prvTm<100)){t.next=3;break}return t.abrupt("return");case 3:if(this.prvTm=i,uni.showLoading({mask:!0}),this.prvImgData){t.next=11;break}return t.next=8,this.fGetImgData().catch((function(t){}));case 8:if(this.prvImgData=t.sent){t.next=10;break}return t.abrupt("return");case 10:this.target=new Uint8ClampedArray(this.prvImgData.length);case 11:if(a=this.prvImgData,n=this.target,s=e.detail.value,0===s)n=a;else for(s=(s+100)/200,s<.005&&(s=0),s>.995&&(s=1),k=a.length-1;k>=0;k-=4)o=a[k-3]/255,r=a[k-2]/255,h=a[k-1]/255,x=Math.max(o,r,h),g=Math.min(o,r,h),p=x-g,x===g?c=0:x===o&&r>=h?c=(r-h)/p*60:x===o&&r<h?c=(r-h)/p*60+360:x===r?c=(h-o)/p*60+120:x===h&&(c=(o-r)/p*60+240),u=(x+g)/2,0===u||x===g?d=0:0<u&&u<=.5?d=p/(2*u):u>.5&&(d=p/(2-2*u)),a[k]&&(l=a[k]),s<.5?d=d*s/.5:s>.5&&(d=2*d+2*s-d*s/.5-1),0===d?o=r=h=Math.round(255*u):(u<.5?v=u*(1+d):u>=.5&&(v=u+d-u*d),f=2*u-v,m=c/360,b=m+1/3,w=m,y=m-1/3,I=function(t){return t<0?t+1:t>1?t-1:t},S=function(t){return t<1/6?f+6*(v-f)*t:t>=1/6&&t<.5?v:t>=.5&&t<2/3?f+6*(v-f)*(2/3-t):f},o=b=Math.round(255*S(I(b))),r=w=Math.round(255*S(I(w))),h=y=Math.round(255*S(I(y)))),l&&(n[k]=l),n[k-3]=o,n[k-2]=r,n[k-1]=h;H=this.prvX,W=this.prvY,C=this.prvWidth,T=this.prvHeight,this.ctxCanvasPrv.setFillStyle("black"),this.ctxCanvasPrv.fillRect(H,W,C,T),this.ctxCanvasPrv.draw(!0),H*=this.pixelRatio,W*=this.pixelRatio,C*=this.pixelRatio,T*=this.pixelRatio,uni.canvasPutImageData({canvasId:"prv-canvas",x:H,y:W,width:C,height:T,data:n,fail:function(){},complete:function(){uni.hideLoading()}},this);case 22:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),btop:function(t){return new Promise((function(e,i){var a=t.split(","),n=a[0].match(/:(.*?);/)[1],s=atob(a[1]),o=s.length,r=new Uint8Array(o);while(o--)r[o]=s.charCodeAt(o);return e((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:n})))}))}}};e.default=l},d3cf:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-image",{staticClass:"my-avatar",style:[t.imgStyle],attrs:{src:t.imgSrc.imgSrc},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fSelect.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),i("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.fStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.fMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.fEnd.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.cvsStyleHeight,top:t.prvTop},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.fHideImg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.styleDisplay}},[i("v-uni-view",{staticClass:"oper"},[t.showOper?i("v-uni-view",{staticClass:"btn-wrapper"},[i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fSelect.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("重选")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fClose.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("关闭")])],1),i("v-uni-view",{style:{width:t.btnWidth,display:t.btnDsp},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fRotate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("旋转")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fPreview.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("预览")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fUpload.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("上传")])],1)],1):i("v-uni-view",{staticClass:"clr-wrapper"},[i("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.fColorChange.apply(void 0,arguments)}}}),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fPrvUpload.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},db78:function(t,e,i){"use strict";i.r(e);var a=i("d3cf"),n=i("3faf");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f257");var o,r=i("f0c5"),h=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1a2a4e9c",null,!1,a["a"],o);e["default"]=h.exports},dde4:function(t,e,i){"use strict";i.r(e);var a=i("ecff"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},ecff:function(t,e,i){"use strict";var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3"));i("96cf");var s=a(i("1da1")),o=i("802d"),r=a(i("db78")),h=a(i("5028"));function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={components:{avatar:r.default},data:function(){return{loadProgress:0,CustomBar:this.CustomBar,profileInfo:{},genders:[{value:"0",name:"未知"},{value:"1",name:"男"},{value:"2",name:"女"}],date:(0,h.default)().format("YYYY-MM-DD"),token:null,loading:!0,headImg:this.$mAssetsPath.headImg,userBg:this.$mAssetsPath.userBg,btnLoading:!1}},onLoad:function(){this.initData()},methods:{uploadImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.handleUploadFile(e.tempFilePaths)}})},handleUploadFile:function(t){var e=this,i=t.path||t[0];e.$http.upload(o.uploadImage,{filePath:i,name:"file"}).then((function(t){e.profileInfo.head_portrait=t.data.url,e.handleUpdateInfo(e.profileInfo)}))},bindDateChange:function(t){this.date=t.target.value},handleGenderChange:function(t){this.profileInfo.gender=t.detail.value},initData:function(){this.token=uni.getStorageSync("accessToken")||void 0,this.getMemberInfo()},getMemberInfo:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get(o.memberInfo).then((function(t){e.loading=!1,e.profileInfo=t.data,e.date=e.profileInfo.birthday})).catch((function(){e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toUpdateInfo:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.handleUpdateInfo();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleUpdateInfo:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,this.loadProgress=this.loadProgress+6,e=setInterval((function(){i.loadProgress=i.loadProgress+6}),50),t.next=5,this.$http.put("".concat(o.memberUpdate,"?id=").concat(this.profileInfo.id),c(c({},this.profileInfo),{},{birthday:this.date})).then((function(){clearInterval(e),i.loadProgress=0,i.$mHelper.toast("恭喜您, 资料修改成功!"),setTimeout((function(){i.$mRouter.back()}),1e3)})).catch((function(){i.btnLoading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=d},f257:function(t,e,i){"use strict";var a=i("1e63"),n=i.n(a);n.a}}]);