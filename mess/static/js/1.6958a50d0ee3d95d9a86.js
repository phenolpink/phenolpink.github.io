webpackJsonp([1],{"/o79":function(t,e){},"2i4/":function(t,e,o){"use strict";var r=o("TIfe"),s={props:{isShow:!1},data:function(){return{baseUrl:"http://47.97.192.85:5207/api/",title:"还是偶尔想要伟大"}},methods:{goBack:function(){"/publish"===this.$route.path?this.$router.push({path:this.redirect||"/admin"}):this.$router.push({path:this.redirect||"/"})},logout:function(){Object(r.c)(),this.$router.push({path:this.redirect||"/"})}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(e){return t.logout()}}},[o("i",{staticClass:"el-icon-thumb"}),t._v("\n    logout")]),t._v(" "),o("el-page-header",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{back:t.goBack}}),t._v(" "),o("h1",[t._v(t._s(t.title))]),t._v(" "),o("el-divider",[o("i",{staticClass:"el-icon-ship"})])],1)},staticRenderFns:[]};var n=o("VU/8")(s,i,!1,function(t){o("fZtB")},null,null);e.a=n.exports},fZtB:function(t,e){},k8oq:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("2i4/"),s=o("qG1x"),i={components:{headOh:r.a,footerOh:s.a},data:function(){var t=this;return{baseUrl:"http://47.97.192.85:5207/api/",ossUrl:"https://snkae-1301702299.cos.ap-nanjing.myqcloud.com/",picUrl:"",content:"",form:{content:"",pic:""},rules:{content:[{validator:function(e,o,r){""===o&&""===t.picUrl&&r(new Error("请输入内容")),r()},trigger:"blur"}]}}},methods:{handleAvatarSuccess:function(t,e){console.log(t),this.picUrl=this.ossUrl+t.key,this.form.pic=t.key},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),e},publish:function(){var t=this;this.$refs.form.validate(function(e){if(e){if(t.content===t.form.content&&""!=t.form.content)return t.$message({message:"内容没有改变",type:"error"}),!1;t.content=t.form.content,t.axios.post(t.baseUrl+"insert",t.form).then(function(e){t.picUrl="",t.form.pic="",t.form.content="",t.$message({message:"创建成功",type:"success"})})}else t.$notify({title:"提示",message:"请输入内容",type:"success"})})}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("headOh",{attrs:{isShow:"true"}}),t._v(" "),o("el-form",{ref:"form",attrs:{"label-position":"left",model:t.form,rules:t.rules}},[o("el-form-item",[o("el-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{circle:"",size:"small",plain:"",type:"success",icon:"el-icon-s-promotion"},on:{click:function(e){return t.publish()}}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"content"}},[o("el-input",{attrs:{placeholder:"Listen to me, world!",type:"textarea",autosize:{minRows:2}},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),o("el-upload",{staticClass:"avatar-uploader",staticStyle:{"margin-top":"20px","margin-left":"10px"},attrs:{action:t.baseUrl+"pic","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.picUrl?o("img",{staticClass:"avatar",attrs:{src:t.picUrl,fit:"cover"}}):o("i",{staticClass:"avatar-uploader-icon el-icon-camera-solid",staticStyle:{"line-height":"120px"}})])],1)],1),t._v(" "),o("footerOh")],1)},staticRenderFns:[]};var a=o("VU/8")(i,n,!1,function(t){o("/o79")},null,null);e.default=a.exports}});
//# sourceMappingURL=1.6958a50d0ee3d95d9a86.js.map