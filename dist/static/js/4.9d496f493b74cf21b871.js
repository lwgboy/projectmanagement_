webpackJsonp([4],{C16p:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("bOdI"),a={name:"task",data:function(){return{loading:!0,loginState:!0,project_style:"",drawer:!1,client_list:[{value:"广汽本田",label:"广汽本田"},{value:"吉利",label:"吉利"},{value:"沃尔沃",label:"沃尔沃"}],client:"广汽本田",businessList:[],clientList:[],tabs_activity:1,table_show:!0,operation:1,transferId:"",new_name:"",businessListCheck:[],businessPage:{},clientPage:{}}},methods:e.n(i)()({widthheight:function(){window.innerWidth,window.innerHeight},test:function(t,s){},drawer_show:function(){this.drawer=!0},table_tab:function(t){1==t?(this.tabs_activity=1,this.table_show=!0):2==t&&(this.tabs_activity=2,this.table_show=!1)},getBusinessListAjax:function(t){this.loading=!0,void 0==t&&(t={}),this.$axios.post("/pmbs/api/business/listAjax",t).then(this.getBusinessListAjaxSuss)},getBusinessListAjaxSuss:function(t){this.loading=!1,200==t.status&&(this.businessList=t.data.data.items,this.businessPage=t.data.data)},getClientListAjax:function(t){this.loading=!0,void 0==t&&(t={}),this.$axios.post("/pmbs/client/list",t).then(this.getClientListAjaxSuss)},getClientListAjaxSuss:function(t){this.loading=!1,200==t.status&&(this.clientList=t.data.data.items,this.clientPage=t.data.data)},add_drawer:function(){this.drawer=!0,this.operation=1,this.transferId="",this.new_name=name},business_change:function(t,s){this.drawer=!0,this.operation=2,this.transferId=t,this.new_name=s},client_change:function(t){this.drawer=!0,this.operation=2,this.transferId=t.clientId,this.new_name=t.clientName;for(var s=[],e=0;e<t.businessList.length;e++){var i=t.businessList[e];s.push(i.businessId)}this.businessListCheck=s},putIn:function(){var t=this.tabs_activity,s={};if(1==t)""==(s={businessId:this.transferId,businessName:this.new_name}).businessName?this.messageError("信息不能为空"):this.businessSave(s);else if(2==t){for(var e=[],i=this.businessList,a=this.businessListCheck,n=[],l=0;l<a.length;l++){for(var o=a[l],r={},c=0;c<i.length;c++){i[c];o==i[c].businessId&&(n.push(i[c].businessName),r.businessId=o,r.businessName=i[c].businessName)}r.businessId&&e.push(r)}""==(s={clientId:this.transferId,clientName:this.new_name,businessList:e}).clientName||0==s.businessList.length?this.messageError("信息不能为空"):this.clientSave(s)}},businessSave:function(t){var s=t;this.loading=!0,this.$axios.post("/pmbs/api/business/save",s).then(this.businessSaveSuss)},businessSaveSuss:function(t){200==t.status&&(this.getBusinessListAjax(),this.messageWin(t.data.msg),this.transferId="",this.new_name="",this.drawer=!1,this.loading=!1)},clientSave:function(t){var s=t;this.loading=!0,this.$axios.post("/pmbs/client/save",s).then(this.clientSaveSuss)},clientSaveSuss:function(t){200==t.status&&(this.getClientListAjax(),this.messageWin(t.data.msg),this.transferId="",this.new_name="",this.businessListCheck=[],this.drawer=!1,this.loading=!1)},delete_but:function(t){var s=this.tabs_activity,e={};1==s?(e=t,this.businessDelete(e)):2==s&&(e=t,this.clientDelete(e))},businessDelete:function(t){var s="?id="+t;this.$axios.post("/pmbs/api/business/delete"+s).then(this.businessDeleteSuss)},businessDeleteSuss:function(t){200==t.status&&(this.getBusinessListAjax(),this.messageWin(t.data.msg))},clientDelete:function(t){var s={clientId:t};this.$axios.post("/pmbs/client/delete",s).then(this.clientDeleteSuss)},clientDeleteSuss:function(t){200==t.status&&(this.messageWin(t.data.msg),this.getClientListAjax())},businessListPage:function(t){var s={pageNum:t};this.getBusinessListAjax(s)},clientListPage:function(t){var s={pageNum:t};this.getClientListAjax(s)},messageWin:function(t){this.$message({message:t,type:"success"})},messageError:function(t){this.$message.error(t)}},"test",function(){}),mounted:function(){this.getBusinessListAjax(),this.getClientListAjax()}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"set",style:t.project_style},[e("el-row",[e("el-col",{staticClass:"tabs",attrs:{span:24}},[e("div",{class:["1"==t.tabs_activity?"act":""],on:{click:function(s){return t.table_tab(1)}}},[t._v("业务类型")]),t._v(" "),e("div",{class:["2"==t.tabs_activity?"act":""],on:{click:function(s){return t.table_tab(2)}}},[t._v("客户")])]),t._v(" "),e("el-col",{staticClass:"add",attrs:{span:24}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){return t.add_drawer()}}},[t._v("新增")])],1),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.table_show,expression:"table_show"}],staticClass:"table table1",attrs:{span:24}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.businessList,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"},"row-style":{height:"57px"}}},[e("el-table-column",{attrs:{prop:"businessName",label:"名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"tag",label:"操作",width:"180","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.business_change(s.row.businessId,s.row.businessName)}}},[t._v("修改")]),t._v(" "),e("el-popconfirm",{attrs:{title:"确认执行此操作吗？"},on:{onConfirm:function(e){return t.delete_but(s.row.businessId)}}},[e("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),e("el-col",{staticClass:"page",attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.businessPage.totalRows},on:{"current-change":t.businessListPage}})],1)],1),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.table_show,expression:"!table_show"}],staticClass:"table table2",attrs:{span:24}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.clientList,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"},"row-style":{height:"57px"}}},[e("el-table-column",{attrs:{prop:"clientName",label:"客户"}}),t._v(" "),e("el-table-column",{attrs:{prop:"businessList",label:"业务"},scopedSlots:t._u([{key:"default",fn:function(s){return t._l(s.row.businessList,function(s,i){return e("span",{key:i},[0!=i?e("span",[t._v("、")]):t._e(),t._v("\n              "+t._s(s.businessName)+"\n            ")])})}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"tag",label:"操作",width:"180","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.client_change(s.row)}}},[t._v("修改")]),t._v(" "),e("el-popconfirm",{attrs:{title:"确认执行此操作吗？"},on:{onConfirm:function(e){return t.delete_but(s.row.clientId)}}},[e("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),e("el-col",{staticClass:"page",attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:t.clientPage.totalRows},on:{"current-change":t.clientListPage}})],1)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"新增",visible:t.drawer,"with-header":!1},on:{"update:visible":function(s){t.drawer=s}}},[e("el-row",{staticClass:"add_box"},[e("el-col",{staticClass:"new_name",attrs:{span:24}},[e("el-col",{staticClass:"title title1",attrs:{span:6}},[t._v("名称")]),t._v(" "),e("el-col",{attrs:{span:13}},[e("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.new_name,callback:function(s){t.new_name=s},expression:"new_name"}})],1),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:2==t.tabs_activity,expression:"tabs_activity == 2"}],staticClass:"title title2",attrs:{span:6}},[t._v("业务")]),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:2==t.tabs_activity,expression:"tabs_activity == 2"}],staticClass:"check_box",attrs:{span:13,offset:6}},[e("el-checkbox-group",{on:{change:t.test},model:{value:t.businessListCheck,callback:function(s){t.businessListCheck=s},expression:"businessListCheck"}},t._l(t.businessList,function(s){return e("el-checkbox",{key:s.index,attrs:{label:s.businessId}},[t._v(t._s(s.businessName))])}),1)],1)],1),t._v(" "),e("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[e("el-button",{attrs:{size:"small",type:"info"}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.putIn}},[t._v("提交")])],1)],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(a,n,!1,function(t){e("jc1J")},"data-v-1b4771c1",null);s.default=l.exports},jc1J:function(t,s){}});