webpackJsonp([3],{"/HC1":function(t,e){},"0E0D":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=a("woOf"),l=a.n(i),n=a("bOdI"),o=a.n(n),r={name:"document",data:function(){var t;return t={userId:this.$store.state.user.userId,deptId:this.$store.state.user.deptId,openHistory:!1,editFileName:"",clientId:"",serviceId:"",isUsual:"",name:"",loading:!1,tab1_act:"",tab2_act:"",clientIdList:[],client:"广汽本田",fileHistoryList:[],fileHistoryLoading:!1,tableData:[],editable:[],pageNum:1,totalnum:0,fileList:[],listProFile:[],uploadUrl:"",dialogFileVisible:!1,editData:"",openTaskVisible:!1,taskData:{},suggest_list:[],statusList:[{value:1,label:"执行中"},{value:2,label:"完成"}],statusList_:[{value:2,label:"完成"},{value:4,label:"延期"}],statusListValue:"",drawer1:!1,listProFileResult:[],result:"",drawerLoading:!1,proExpertTime:"",pickerOptions:{},task_type:[],task_type_value:""},o()(t,"uploadUrl",""),o()(t,"dialogImageUrl",""),o()(t,"dialogVisible",!1),o()(t,"disabled",!1),o()(t,"listProFile_",[]),o()(t,"suggest_list",[]),o()(t,"fileList0",[]),o()(t,"updateBan",!1),o()(t,"dialogImageUrlResult",""),o()(t,"dialogVisibleResult",!1),o()(t,"disabledResult",!1),o()(t,"listProFileResult",[]),o()(t,"fileList1",[]),o()(t,"oldFileId",""),o()(t,"changeDoUserNameShow","true"),o()(t,"nextuserList",[]),o()(t,"nextuserValue",""),o()(t,"changeNameShow",!1),o()(t,"userValue",""),t},methods:(s={pickerOptionsTime:function(){this.proExpertTime;this.pickerOptions={disabledDate:function(t){return t.getTime()<Date.now()-864e5}}},fileClose:function(){this.listProFile=[]},getAllClientAndBusiness:function(){this.$axios.post("http://pms.guoxinad.com.cn/pas/clientapi/allListAjax").then(this.getAllClientAndBusinessSuss)},getAllClientAndBusinessSuss:function(t){if(200==t.status){for(var e=t.data,a=[],s=0;s<e.length;s++){var i=e[s],l={value:i.clientId,label:i.clientName};a.push(l)}this.clientIdList=a}},handleRemoveResult:function(t){for(var e=t.response.data,a=this.listProFileResult,s=0;s<a.length;s++){a[s].localPath==e.path&&(a.splice(s,1),console.log("删除"))}this.listProFileResult=a},handleSuccessResult:function(t,e,a){if(0==t.errcode){var s=t.data,i=this.listProFileResult,l={proId:this.taskData.proId,taskId:this.taskData.taskId,fileId:"",updateUserId:this.userId,fileName:s.fileName,isPro:1,localPath:s.path,suffix:s.fileType};i.push(l),this.listProFileResult=i}},changeTaskDeil:function(){this.drawer1=!1,this.drawer5=!1;var t=this.taskData,e=this.listProFile,a=this.listProFileResult,s=this.statusListValue;delete t.expertTime_,delete t.overTime_,delete t.feedbackList,t.proFileList=e,t.taskfileList=a,t.status=s,this.taskSave(t)},taskSave:function(t){this.$axios.post("/pmbs/api/task/save",t).then(this.taskSaveSuss)},taskSaveSuss:function(t){200==t.status&&(this.$message({message:t.data.msg,type:"success"}),this.drawer1=!1,this.drawer5=!1,this.result="",this.listProFile=[],this.listProFileResult=[],this.getTaskfilePageList())},empty:function(){this.drawer1=!1},handleSizeChange:function(){},handleCurrentChange:function(t){this.pageNum=t,this.getTaskfilePageList()},changeName:function(){this.changeNameShow=!0},enterDetail:function(t){this.drawer1=!0;var e=this.userId;this.drawer1=!0,this.taskId=t.taskId;var a="?userId="+e+"&id="+t.taskId;this.getTaskDetail(a),this.getDepTypeList()},getTaskDetail:function(t){this.drawerLoading=!0,this.$axios.post("/pmbs/api/task/show"+t).then(this.getTaskDetailSuss)},getTaskDetailSuss:function(t){if(this.drawerLoading=!1,console.log(t),200==t.status){var e=t.data.data;e.expertTime_=this.$date(e.expertTime),e.overTime_=this.$time(e.overTime);for(var a=0;a<e.feedbackList.length;a++){var s=e.feedbackList[a];e.feedbackList[a].updateTime=this.$time(s.updateTime)}this.taskData=e,this.listProFile_=e.proFileList,this.listProFileResult=e.taskfileList,this.statusListValue=e.status;for(var i=[],l=0;l<e.proFileList.length;l++){var n=e.proFileList[l],o={fileId:n.fileId,name:n.fileName};i.push(o)}this.fileList0=i;for(var r=[],c=0;c<e.taskfileList.length;c++){var d=e.taskfileList[c],u={fileId:d.fileId,name:d.fileName};r.push(u)}this.fileList1=r}},getDepTypeList:function(){this.$axios.post("/pmbs/api/depType/listAjax",{}).then(this.getDepTypeListSuss)},getDepTypeListSuss:function(t){if(200==t.status){for(var e=t.data.items,a=[],s={},i=0;i<e.length;i++){var l=e[i];s={value:l.typeId,label:l.typeName},a.push(s)}this.task_type=a}},upload:function(){this.uploadUrl="\n      /pmbs/file/upload?upType=1&demandType=0\n      "},handleSuccess:function(t,e,a){if(0==t.errcode){var s=t.data,i=this.listProFile_,l={proId:this.taskData.proId||"",taskId:this.taskData.taskId||"",fileId:"",fileName:s.fileName,isPro:1,deleteFlag:!1,ptId:this.taskData.taskId||"",localPath:s.path,suffix:s.fileType};i.push(l),this.listProFile_=i,console.log(this.listProFile_)}},handleRemove:function(t){for(var e=t,a=this.listProFile_,s=0;s<a.length;s++){a[s].fileId==e.fileId&&(a[s].deleteFlag=!0)}this.listProFile_=a}},o()(s,"handleSuccessResult",function(t,e,a){if(0==t.errcode){var s=t.data,i=this.listProFileResult,l={proId:this.proId,taskId:this.taskId,fileId:"",updateUserId:this.userId,fileName:s.fileName,localPath:s.path,suffix:s.fileType,oldFileId:this.oldFileId};i.push(l),this.listProFileResult=i}}),o()(s,"handleRemoveResult",function(t){var e=this.listProFileResult;e.fileId?this.oldFileId=e.fileId:this.listProFileResult=[]}),o()(s,"fileRemove",function(){this.dialogFileVisible=!1}),o()(s,"fileUpload",function(){var t=this,e={proId:this.editData.proId,taskId:this.editData.taskId,updateUserId:this.editData.updateUserId,clientName:this.editData.clientName,proName:this.editData.proName,realName:this.editData.realName,taskName:this.editData.taskName,oldFileId:this.editData.fileId.toString()};this.$axios.post("/pmbs/api/taskfile/importupdate",l()(e,this.listProFile[0])).then(function(e){t.getTaskfilePageList(),console.log(e),t.dialogFileVisible=!1})}),o()(s,"handleExceed",function(t,e){this.$message({message:"只能重新上传一个文件！",type:"warning"})}),o()(s,"handleRemove",function(t){for(var e=t.response.data,a=this.listProFile,s=0;s<a.length;s++){a[s].localPath==e.path&&a.splice(s,1)}this.listProFile=a}),o()(s,"handleSuccess",function(t,e,a){if(0==t.errcode){var s=t.data,i=this.listProFile,l={fileName:s.fileName,localPath:s.path,suffix:s.fileType};i.push(l),this.listProFile=i}}),o()(s,"tab1_change",function(t,e){this.tab1_act==t?(this.tab1_act="",this.serviceId=""):(this.tab1_act=t,this.serviceId=e)}),o()(s,"tab2_change",function(t,e){this.tab2_act==t?(this.tab2_act="",this.isUsual=""):(this.tab2_act=t,this.isUsual=e)}),o()(s,"searchHandle",function(){this.getTaskfilePageList()}),o()(s,"tableRowClassName",function(t){var e=t.row,a=t.rowIndex;e.index=a}),o()(s,"rowClick",function(t,e,a){this.editable=new Array(this.tableData.length)}),o()(s,"cellSave",function(t,e){var a=this;this.$axios.post("/pmbs/api/taskfile/updataTaskFileByFileId",{fileId:e.fileId,fileName:this.editFileName}).then(function(t){e.fileName=a.editFileName,a.editable=new Array(a.tableData.length)})}),o()(s,"changeNum",function(t,e){this.editable=new Array(this.tableData.length),this.editable[t]=!0,this.saveItem=this.tableData[t],this.$set(this.editable,t,!0),this.$nextTick(function(){document.getElementsByClassName("editRemarkInput")[0].children[0].focus()}),this.editFileName=e.fileName}),o()(s,"upload2",function(t,e){this.fileList=[],this.listProFile=[],this.editData=e,this.dialogFileVisible=!0}),o()(s,"download",function(t){var e=t.localPath,a=document.createElement("a");a.download="",a.setAttribute("href","http://218.106.254.122:8084/pmbs/"+e),a.click()}),o()(s,"lookHistory",function(t,e){var a=this;this.openHistory=!0;var s=e.fileId;this.fileHistoryLoading||(this.fileHistoryLoading=!0,this.$axios.post("/pmbs/api/taskfile/getTaskfileByEdition?fileId="+s,{}).then(function(t){if(a.fileHistoryLoading=!1,t.data&&0!=t.data.length){for(var e=t.data,s=0;s<e.length;s++){var i=e[s];e[s].updateTime=a.$time(i.updateTime)}a.fileHistoryList=e}else console.log("暂无数据")}).catch(function(){a.fileHistoryLoading=!1}))}),o()(s,"getTaskfilePageList",function(t){if(!this.loading){this.loading=!0;var e={userid:this.userId,pageNum:this.pageNum,pageSize:10,clientId:this.clientId,serviceId:this.serviceId,isUsual:this.isUsual,name:this.name};this.$axios.post("/pmbs/api/taskfile/getTaskfilePageList",e).then(this.getTaskfilePageListSuss)}}),o()(s,"getTaskfilePageListSuss",function(t){if(this.loading=!1,200==t.status){for(var e=t.data.items,a=0;a<e.length;a++){var s=e[a];e[a].updateTime=this.$time(s.updateTime)}this.totalnum=t.data.totalRows,this.tableData=e}}),s),watch:{clientId:function(t,e){this.getTaskfilePageList()},serviceId:function(t,e){this.getTaskfilePageList()},isUsual:function(t,e){this.getTaskfilePageList()}},mounted:function(){this.getAllClientAndBusiness(),this.getTaskfilePageList();this.uploadUrl="/pmbs/file/upload?upType=0&demandType=0",this.pickerOptionsTime()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"document task"},[a("div",[a("el-row",[a("el-col",{staticClass:"top",attrs:{span:24}},[a("el-col",{attrs:{span:5}},[a("el-col",{staticClass:"title",attrs:{span:4}},[t._v("客户")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-select",{attrs:{clearable:"",placeholder:"全部",size:"small"},model:{value:t.clientId,callback:function(e){t.clientId=e},expression:"clientId"}},t._l(t.clientIdList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),t._v(" "),a("el-col",{staticClass:"tab tab1",attrs:{span:6}},[a("el-button-group",[a("el-button",{class:["1"==t.tab1_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab1_change(1,22)}}},[t._v("    官网    ")]),t._v(" "),a("el-button",{class:["2"==t.tab1_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab1_change(2,18)}}},[t._v("    口碑    ")]),t._v(" "),a("el-button",{class:["3"==t.tab1_act?"act":""],staticStyle:{"border-left":"0"},attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab1_change(3,17)}}},[t._v("数字营销")])],1)],1),t._v(" "),a("el-col",{staticClass:"tab tab2",attrs:{span:4}},[a("el-button-group",[a("el-button",{class:["1"==t.tab2_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab2_change(1,1)}}},[t._v("    专项    ")]),t._v(" "),a("el-button",{class:["2"==t.tab2_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab2_change(2,0)}}},[t._v("    日常    ")])],1)],1),t._v(" "),a("el-col",{staticClass:"tab tab3",attrs:{span:8}},[a("el-input",{staticClass:"sousuo",attrs:{placeholder:"搜索",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchHandle(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[a("el-button",{attrs:{slot:"append",size:"small",icon:"el-icon-search"},on:{click:t.searchHandle},slot:"append"})],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"table-main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"default-sort":{prop:"date",order:"descending"},"row-class-name":t.tableRowClassName,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"},"row-style":{height:"57px"}},on:{"row-click":t.rowClick}},[a("el-table-column",{attrs:{label:"文档"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{on:{click:function(a){return a.stopPropagation(),t.changeNum(e.$index,e.row)}}},[t.editable[e.$index]?a("div",[a("el-input",{staticClass:"editRemarkInput",attrs:{size:"mini"},model:{value:t.editFileName,callback:function(e){t.editFileName=e},expression:"editFileName"}},[a("el-button",{attrs:{slot:"append",type:"primary",size:"mini"},on:{click:function(a){return a.stopPropagation(),t.cellSave(e.$index,e.row)}},slot:"append"},[t._v("确认")])],1)],1):a("div",["doc"==e.row.suffix||"docx"==e.row.suffix?a("img",{attrs:{src:"static/images/document/word.png",width:"16",alt:"",srcset:""}}):"xls"==e.row.suffix||"xlsx"==e.row.suffix?a("img",{attrs:{src:"static/images/document/excle.png",width:"16",alt:"",srcset:""}}):"ppt"==e.row.suffix||"pptx"==e.row.suffix?a("img",{attrs:{src:"static/images/document/ppt.png",width:"16",alt:"",srcset:""}}):a("img",{attrs:{src:"static/images/document/other.png",width:"16",alt:"",srcset:""}}),t._v(" "),a("span",[t._v(t._s(e.row.fileName))])])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"clientName",label:"客户"}}),t._v(" "),a("el-table-column",{attrs:{prop:"proName",label:"项目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"taskName",label:"任务"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",sortable:"",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realName",label:"更新人",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.doUserId==t.userId&&3!=e.row.status&&5!=e.row.status?a("el-button",{attrs:{size:"mini",icon:"el-icon-upload2"},on:{click:function(a){return t.upload2(e.$index,e.row)}}}):t._e(),t._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-download"},on:{click:function(a){return t.download(e.row)}}}),t._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-share"},on:{click:function(a){return t.enterDetail(e.row)}}}),t._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-time"},on:{click:function(a){return t.lookHistory(e.$index,e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.pageNum,layout:"total, prev, pager, next",total:t.totalnum,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1),t._v(" "),a("el-drawer",{attrs:{title:"历史文档",visible:t.openHistory,"with-header":!1},on:{"update:visible":function(e){t.openHistory=e}}},[a("el-scrollbar",[a("div",{staticClass:"history-main"},[a("div",{staticClass:"title"},[t._v("历史")]),t._v(" "),a("el-timeline",{directives:[{name:"loading",rawName:"v-loading",value:t.fileHistoryLoading,expression:"fileHistoryLoading"}]},t._l(t.fileHistoryList,function(e){return a("el-timeline-item",{key:e.fileId,attrs:{timestamp:e.updateTime,placement:"top"}},[a("el-card",[a("h4",[t._v("更新人："+t._s(e.realName))]),t._v(" "),a("p",{staticClass:"fileName"},["doc"==e.suffix||"docx"==e.suffix?a("img",{attrs:{src:"static/images/document/word.png",width:"16",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?a("img",{attrs:{src:"static/images/document/excle.png",width:"16",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?a("img",{attrs:{src:"static/images/document/ppt.png",width:"16",alt:"",srcset:""}}):a("img",{attrs:{src:"static/images/document/other.png",width:"16",alt:"",srcset:""}}),t._v(" "),a("span",[t._v(t._s(e.fileName))])]),t._v(" "),a("p",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.download(e)}}},[t._v("\n                  下载\n                  "),a("i",{staticClass:"el-icon-download el-icon--right"})])],1)])],1)}),1),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:0==t.fileHistoryList.length,expression:"fileHistoryList.length==0"}]},[t._v("暂无历史数据")])],1)])],1),t._v(" "),a("el-drawer",{attrs:{title:"任务",visible:t.drawer1,"with-header":!1},on:{"update:visible":function(e){t.drawer1=e}}},[a("el-scrollbar",{directives:[{name:"loading",rawName:"v-loading",value:t.drawerLoading,expression:"drawerLoading"}],staticStyle:{height:"100%"}},[a("el-row",{staticClass:"task_details"},[a("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.taskData.proName)+"-"+t._s(t.taskData.taskName))]),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行部门：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.deptName))]),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务类型：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[a("el-select",{attrs:{placeholder:"请选择任务类型",size:"mini"},model:{value:t.taskData.typeId,callback:function(e){t.$set(t.taskData,"typeId",e)},expression:"taskData.typeId"}},t._l(t.task_type,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)]:[t._v(t._s(t.taskData.typeName))]],2),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行人：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t.changeNameShow?t._e():a("span",[t._v(t._s(t.taskData.doUserName))]),t._v(" "),t.changeNameShow?a("el-select",{staticStyle:{width:"99px"},attrs:{filterable:"",placeholder:"请选择",size:"mini",clearable:""},model:{value:t.taskData.doUserId,callback:function(e){t.$set(t.taskData,"doUserId",e)},expression:"taskData.doUserId"}},t._l(t.taskData.listOaUser,function(t){return a("el-option",{key:t.userId,attrs:{label:t.realName,value:t.userId}})}),1):t._e(),t._v(" "),t.taskData.deptId==t.deptId&&1!=t.taskData.isIgnore&&t.taskData.listOaUser.length>1&&2!=t.taskData.status&&3!=t.taskData.status&&5!=t.taskData.status?a("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.changeName()}}},[t._v("更换")]):150==t.deptId&&93==t.taskData.deptId&&1!=t.taskData.isIgnore&&t.taskData.listOaUser.length>1&&2!=t.taskData.status&&3!=t.taskData.status&&5!=t.taskData.status?a("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.changeName()}}},[t._v("更换")]):150==t.deptId&&64==t.taskData.deptId&&1!=t.taskData.isIgnore&&t.taskData.listOaUser.length>1&&2!=t.taskData.status&&3!=t.taskData.status&&5!=t.taskData.status?a("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.changeName()}}},[t._v("更换")]):t._e()],1),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("状态：")]),t._v(" "),a("el-col",{attrs:{span:18}},[1==t.taskData.status&&t.taskData.doUserId==t.userId?a("el-select",{class:{state_color1:1==t.taskData.status,state_color2:2==t.taskData.status},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.statusListValue,callback:function(e){t.statusListValue=e},expression:"statusListValue"}},t._l(t.statusList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):1==t.taskData.status&&t.taskData.doUserId!=t.userId?a("span",{staticClass:"state_color1"},[t._v("执行中")]):2==t.taskData.status?a("span",{staticClass:"state_color2"},[t._v("审核中")]):3==t.taskData.status?a("span",{staticClass:"state_color3"},[t._v("已完成")]):t._e(),t._v(" "),4==t.taskData.status?a("el-select",{class:{state_color1:1==t.taskData.status,state_color2:2==t.taskData.status,state_color4:4==t.taskData.status},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.statusListValue,callback:function(e){t.statusListValue=e},expression:"statusListValue"}},t._l(t.statusList_,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):5==t.taskData.status?a("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()],1),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("预计时间：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions,size:"mini"},model:{value:t.taskData.expertTime,callback:function(e){t.$set(t.taskData,"expertTime",e)},expression:"taskData.expertTime"}})]:[t._v(t._s(t.taskData.expertTime_))]],2),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成时间：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.overTime_))]),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("需求：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[a("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:9},placeholder:"请输入内容"},model:{value:t.taskData.remark,callback:function(e){t.$set(t.taskData,"remark",e)},expression:"taskData.remark"}})]:[t._v(t._s(t.taskData.remark))]],2),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),a("el-col",{staticClass:"proFileList",attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[a("el-upload",{staticClass:"elementUpload",attrs:{action:t.uploadUrl,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList0}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传附件")])],1)]:t._l(t.taskData.proFileList,function(e){return a("div",{key:e.index,staticClass:"smname",on:{click:function(a){return t.download(e)}}},["doc"==e.suffix||"docx"==e.suffix?a("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?a("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?a("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):a("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),a("div",[t._v(t._s(e.fileName))])])})],2),t._v(" "),a("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成结果：")]),t._v(" "),a("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&3!=t.taskData.status&&5!=t.taskData.status?[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.taskData.overDesc,callback:function(e){t.$set(t.taskData,"overDesc",e)},expression:"taskData.overDesc"}})]:[t._v(t._s(t.taskData.overDesc))]],2),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),a("el-col",{staticClass:"proFileList",attrs:{span:18}},[t.taskData.doUserId==t.userId&&3!=t.taskData.status&&5!=t.taskData.status?[a("el-upload",{staticClass:"elementUpload",attrs:{action:"/pmbs/file/upload?upType=1&demandType=1","on-remove":t.handleRemoveResult,"on-success":t.handleSuccessResult,disabled:t.updateBan,fileList:t.fileList1,limit:1}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传文档")])],1)]:t._l(t.taskData.taskfileList,function(e){return a("div",{key:e.index,staticClass:"smname",on:{click:function(a){return t.download(e)}}},["doc"==e.suffix||"docx"==e.suffix?a("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?a("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?a("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):a("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),a("div",[t._v(t._s(e.fileName))])])})],2),t._v(" "),a("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),a("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈意见：")]),t._v(" "),a("el-col",{staticClass:"suggest",attrs:{span:18}},[a("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.taskData.feedbackList,function(e){return a("el-col",{key:e.index,staticClass:"suggest_list",attrs:{span:23}},[a("el-col",{staticClass:"time",attrs:{span:12}},[t._v(t._s(e.updateTime))]),t._v(" "),a("el-col",{staticClass:"pop",attrs:{span:12}},[t._v(t._s(e.deptName)+"-"+t._s(e.feedbackUserName))]),t._v(" "),a("el-col",{staticClass:"content",attrs:{span:24}},[t._v(t._s(e.feedback))]),t._v(" "),a("el-col",{staticClass:"fileListBox",attrs:{span:24}},t._l(e.feedbackFileList,function(s){return a("div",{key:s.index,staticClass:"fileList",on:{click:function(e){return t.download(s)}}},["doc"==e.suffix||"docx"==e.suffix?a("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?a("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?a("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):a("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),a("div",[t._v(t._s(s.fileName))])])}),0)],1)}),1)],1)],1)],1),t._v(" "),a("el-row",{staticClass:"batton_pa"},[a("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[a("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.changeTaskDeil}},[t._v("完成")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{close:t.fileClose,title:"修改附件",visible:t.dialogFileVisible},on:{"update:visible":function(e){t.dialogFileVisible=e}}},[a("div",[a("el-upload",{attrs:{action:t.uploadUrl,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList,limit:1,"on-exceed":t.handleExceed}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传附件")])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.fileRemove}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.fileUpload}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("/HC1")},"data-v-4494ea66",null);e.default=d.exports}});