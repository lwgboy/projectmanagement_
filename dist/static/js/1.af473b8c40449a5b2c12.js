webpackJsonp([1],{m4ws:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s("bOdI"),l=s.n(i),r={name:"project_details",data:function(){var t;return t={userId:this.$store.state.user.userId,deptId:this.$store.state.user.deptId,manager:"",proInitUserId:"",loading:!1,drawerLoading:!1,proId:"",proName:"",taskId:"",type:"",loginState:!0,project_style:"",drawer1:!1,drawer2:!1,drawer3:!1,drawer4:!1,drawer5:!1,drawer3_task:"",drawer4_task:"",sousuo_show:!1,sousuo_input:"",taskList:[],deptList:[],departmentList:[],projectShowDetail:{},tabs_activity:1,table_show:!0,faTaskList:[],faTaskDisabled:!1,new_task:{faTask:"",new_name:"",department:"",presetTime:"",task_type:"",remark:""},proExpertTime:"",pickerOptions:{},records_list:[{time:"20/04/02 20:46",result:"前端开发时间变动",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""},{time:"20/04/02 20:46",result:"策划方案预计完成时间改动",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""}],statusList:[{value:1,label:"执行中"},{value:2,label:"完成"},{value:4,label:"延期"}],statusListValue:"",style1:"",feedbackContent:"",taskFeedbackId:"",projFeedbackId:"",feedbackFileList:[],task_type:[],task_type_value:"",taskData:{listOaUser:[]},batton_pa:!0,result:"",resultBan:!1,dialogImageUrl:"",dialogVisible:!1,disabled:!1,uploadUrl:"",listProFile:[],suggest_list:[],fileList0:[],updateBan:!1,dialogImageUrlResult:"",dialogVisibleResult:!1,disabledResult:!1},l()(t,"uploadUrl",""),l()(t,"listProFileResult",[]),l()(t,"fileList1",[]),l()(t,"oldFileId",""),l()(t,"changeDoUserNameShow","true"),l()(t,"nextuserList",[]),l()(t,"nextuserValue",""),l()(t,"changeNameShow",!1),l()(t,"userValue",""),t},watch:{drawer5:function(t,e){0==this.drawer5&&(this.changeNameShow=!1)}},methods:(a={pickerOptionsTime:function(){var t=this.proExpertTime;this.pickerOptions={disabledDate:function(e){return e.getTime()<Date.now()-864e5||e.getTime()>new Date(t).getTime()}}},formatData:function(t){var e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate();return s>=1&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),e+"-"+s+"-"+a},formatData2:function(t){var e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),l=t.getMinutes(),r=t.getSeconds();return s>=1&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),i>=0&&i<=9&&(i="0"+i),l>=0&&l<=9&&(l="0"+l),r>=0&&r<=9&&(r="0"+r),e+"-"+s+"-"+a+" "+i+":"+l+":"+r},widthheight:function(){window.innerWidth;var t=window.innerHeight-100;this.style1="height:"+t+"px;"},addtask:function(){this.drawer1=!0,this.taskData={listOaUser:[]},this.getDepTypeList(),this.getDeptList()},table_tab:function(t){1==t?(this.tabs_activity=1,this.table_show=!0):2==t&&(this.tabs_activity=2,this.table_show=!1)},redact:function(t,e){var s=this;this.$confirm("是否忽略此任务","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(){var a={proId:t,taskId:e,isIgnore:1,taskfileList:[],proFileList:[]};a.isIgnore=!0,s.taskSave(a)}).catch(function(t){s.$message({type:"info",message:"放弃"})})},feedback:function(t,e,s,a){this.drawer3=!0,this.drawer3_task=""+a,this.taskFeedbackId=e,this.projFeedbackId=t},achieve:function(t,e){if(1==e){var s={taskId:t,status:2};this.taskSave(s)}else if(2==e){var a={taskId:t,status:3,overTime:this.formatData2(new Date)};this.taskSave(a)}else 4==e&&(this.drawer4=!0,this.drawer4_task=task)},gantt:function(t){var e=this.$route.query.id,s=this.$route.query.type;this.$router.push({path:"/gantti",query:{id:e,type:s}})},sousuoShow:function(t){this.sousuo_show=!this.sousuo_show},sousuo:function(){this.getParams(this.sousuo_input)},task_detail:function(t){var e=this.userId;this.drawer5=!0,this.taskId=t.taskId,this.getDepTypeList();var s="?userId="+e+"&id="+t.taskId;this.getTaskDetail(s)},getTaskDetail:function(t){this.drawerLoading=!0,this.$axios.post("/pmbs/api/task/show"+t).then(this.getTaskDetailSuss)},getTaskDetailSuss:function(t){if(this.drawerLoading=!1,200==t.status){var e=t.data.data;e.expertTime_=this.$date(e.expertTime),e.overTime_=this.$time(e.overTime);for(var s=0;s<e.feedbackList.length;s++){var a=e.feedbackList[s];e.feedbackList[s].updateTime=this.$time(a.updateTime)}this.taskData=e,this.listProFile=e.proFileList,this.listProFileResult=e.taskfileList,this.statusListValue=e.status;for(var i=[],l=0;l<e.proFileList.length;l++){var r=e.proFileList[l],o={fileId:r.fileId,name:r.fileName};i.push(o)}this.fileList0=i;for(var n=[],c=0;c<e.taskfileList.length;c++){var u=e.taskfileList[c],p={fileId:u.fileId,name:u.fileName};n.push(p)}this.fileList1=n}},upload:function(){this.uploadUrl="\n      /pmbs/file/upload?upType=1&demandType=0\n      "},handleSuccess:function(t,e,s){if(0==t.errcode){var a=t.data,i=this.listProFile,l={proId:this.taskData.proId||"",taskId:this.taskData.taskId||"",fileId:"",fileName:a.fileName,isPro:1,deleteFlag:!1,ptId:this.taskData.taskId||"",localPath:a.path,suffix:a.fileType};i.push(l),this.listProFile=i,console.log(this.listProFile)}},handleRemove:function(t){for(var e=t,s=this.listProFile,a=0;a<s.length;a++){s[a].fileId==e.fileId&&(s[a].deleteFlag=!0)}this.listProFile=s},handleSuccessResult:function(t,e,s){if(0==t.errcode){var a=t.data,i=this.listProFileResult,l={proId:this.proId,taskId:this.taskId,fileId:"",updateUserId:this.userId,fileName:a.fileName,localPath:a.path,suffix:a.fileType,oldFileId:this.oldFileId};i.push(l),this.listProFileResult=i}},handleRemoveResult:function(t){var e=this.listProFileResult;e.fileId?this.oldFileId=e.fileId:this.listProFileResult=[]},getParams:function(t){this.userId;var e=this.$route.query.id,s=this.$route.query.type;this.proId=e,this.type=s,0==s?this.getProjectOfTask(e,t):1==s&&this.getProjectOfUserTask(e,t);var a="?proId="+e;this.getProjectShowDetail(a)},getProjectShowDetail:function(t){this.$axios.post("/pmbs/api/project/showDetail"+t).then(this.getProjectShowDetailSuss)},getProjectShowDetailSuss:function(t){if(200==t.status){var e=t.data.data;e.createTime_=this.$date_(e.createTime),e.expertTime_=this.$date_(e.expertTime),this.projectShowDetail=e,this.proName=e.proName,this.proExpertTime=e.expertTime,this.manager=e.manager,this.proInitUserId=e.initUserId,this.pickerOptionsTime()}},getProjectOfTask:function(t,e){this.loading=!0;var s="",a=this.userId;s=void 0!=e?"?proId="+t+"&taskName="+e+"&userId="+a:"?proId="+t+"&userId="+a,this.$axios.post("/pmbs/api/project/projectOfTask"+s).then(this.getProjectOfTaskSuss)},getProjectOfTaskSuss:function(t){if(this.loading=!1,200==t.status){for(var e=t.data.data,s=0;s<e.length;s++){var a=e[s];e[s].expertTime_=this.$date(a.expertTime),e[s].overTime_=this.$time(a.overTime)}this.taskList=e}},getProjectOfUserTask:function(t,e){this.loading=!0;var s="",a=this.userId;s=void 0!=e?"?proId="+t+"&taskName="+e+"&userId="+a:"?proId="+t+"&userId="+a,this.$axios.post("/pmbs/api/project/projectOfUserTask"+s).then(this.getProjectOfUserTaskSuss)},getProjectOfUserTaskSuss:function(t){if(this.loading=!1,200==t.status){for(var e=t.data.data,s=0;s<e.length;s++){var a=e[s];e[s].expertTime_=this.$date(a.expertTime),e[s].overTime_=this.$time(a.overTime)}var i=t.data.data;this.taskList=i}},getDeptList:function(t){if(0==this.deptList.length){this.$axios.post("/pmbs/department/deptList",{pageNum:1}).then(this.getDeptListSuss)}},getDeptListSuss:function(t){if(200==t.status){for(var e=t.data.data,s=this.deptId,a=[],i=0;i<e.length;i++){var l=e[i];if(l.deptId!=s){var r={};r.id=l.deptId,r.name=l.deptName,a.push(r)}}this.deptList=a,this.departmentList=e}},getParentTask:function(){var t="?userId="+this.userId+"&proId="+this.$route.query.id+"&depId="+this.$store.state.user.deptId;this.$axios.post("/pmbs/api/task/findParentTask"+t).then(this.getParentTaskSuss)},getParentTaskSuss:function(t){if(200==t.status){for(var e=t.data,s=[],a=0;a<e.length;a++){var i=e[a],l={};l.value=i.taskId,l.label=i.taskName,s.push(l)}this.faTaskList=s,0==s.length?this.faTaskDisabled=!0:this.faTaskDisabled=!1}},putIn:function(){var t="";this.new_task.presetTime&&(t=this.formatData(this.new_task.presetTime));for(var e=this.formatData2(new Date),s=this.new_task.department,a="",i=this.departmentList,l=0;l<i.length;l++){var r=i[l];s==r.deptId&&(a=r.principalUserId)}var o={createTime:e,deptId:s,doUserId:a,expertTime:t,faTask:this.faTask,initUserId:this.userId,proFileList:this.listProFile,proId:this.proId,remark:this.new_task.remark,taskName:this.new_task.new_name,typeId:this.task_type_value};this.taskSave(o),this.drawer1=!1,this.new_task.presetTime="",this.new_task.faTask="",this.new_task.department="",this.new_task.new_name="",this.new_task.presetTime="",this.task_type_value="",this.new_task.remark="",this.listProFile=[]},changeTaskDeil:function(){this.drawer1=!1,this.drawer5=!1;var t=this.taskData,e=this.listProFile,s=this.listProFileResult,a=this.statusListValue;t.proFileList=e,t.taskfileList=s,t.status=a,delete t.expertTime_,delete t.overTime_,delete t.feedbackList,this.taskSave(t)},taskSave:function(t){this.$axios.post("/pmbs/api/task/save",t).then(this.taskSaveSuss)},taskSaveSuss:function(t){200==t.status&&(this.messageWin(t.data.msg),this.result="",this.listProFile=[],this.listProFileResult=[],this.getParams())},handleRemoveFeedback:function(t){for(var e=this.feedbackFileList,s=t.response.data,a=0;a<e.length;a++){e[a].localPath==s.path&&e.splice(a,1)}this.feedbackFileList=e},handleSuccessFeedback:function(t){var e=t.data,s=this.feedbackFileList,a=new Date,i={createTime:a,deleteFlag:!1,feedbackId:"",fileId:"",fileName:e.fileName,localPath:e.path,suffix:e.fileType,taskId:"",updateTime:a};s.push(i)},taskFeedback:function(){for(var t=new Date,e=this.taskFeedbackId,s=this.feedbackFileList,a=0;a<s.length;a++){s[a];s[a].taskId=e}var i={feedback:this.feedbackContent,feedbackFileList:s,initUserId:this.userId,proId:this.projFeedbackId,taskId:e,updateTime:t};""==i.feedback?this.messageError("信息不能为空"):this.$axios.post("/pmbs/api/project/taskfeedback",i).then(this.taskFeedbackSuss)},taskFeedbackSuss:function(t){200==t.status&&(this.messageWin("反馈成功"),this.drawer3=!1,this.feedbackContent="",this.taskFeedbackId="",this.getParams())},getDepTypeList:function(){this.$axios.post("/pmbs/api/depType/listAjax",{}).then(this.getDepTypeListSuss)},getDepTypeListSuss:function(t){if(200==t.status){for(var e=t.data.items,s=[],a={},i=0;i<e.length;i++){var l=e[i];a={value:l.typeId,label:l.typeName},s.push(a)}this.task_type=s}},changeDoUserName:function(t,e){this.changeDoUserNameShow=t,this.getNextuserList(e)},getNextuserList:function(t){for(var e=t,s=[],a=0;a<e.length;a++){var i=e[a],l={value:i.userId,label:i.realName};s.push(l)}this.nextuserList=s},changeDoUserNameAffirm:function(t){var e=this.nextuserValue;t.proFileList=[],delete t.expertTime_,delete t.overTime_,""==e?this.changeDoUserNameShow="true":(t.doUserId=e,this.$axios.post("/pmbs/api/task/save",t).then(this.changeDoUserNameAffirmSuss))},changeDoUserNameAffirmSuss:function(t){200==t.status&&(this.messageWin("执行人修改成功"),this.getParams(),this.changeDoUserNameShow="true")},changeName:function(){this.changeNameShow=!0},empty:function(){this.drawer3=!1,this.drawer4=!1,this.feedbackContent="",this.result="",this.new_task.faTask="",this.new_task.department="",this.new_task.new_name="",this.new_task.presetTime="",this.task_type_value="",this.new_task.remark="",this.file_list=[],this.listProFileResult=[]},sponsor_achieve:function(t){var e=this;this.$confirm("是否确认此操作？","确认信息",{type:"warning",confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(){var s=new Date(t.expertTime),a=new Date,i={proId:t.proId,taskId:t.taskId,status:3,proFileList:[],taskfileList:[]};s<a&&(i.status=5),e.taskSave(i)}).catch(function(){e.$message({type:"info",message:"已取消"})})}},l()(a,"empty",function(){this.drawer1=!1,this.drawer2=!1,this.drawer3=!1,this.drawer4=!1,this.drawer5=!1,this.feedbackContent="",this.result=""}),l()(a,"download",function(t){var e=t.localPath,s=document.createElement("a");s.download="",s.setAttribute("href","http://218.106.254.122:8084/pmbs/"+e),s.click()}),l()(a,"toProject",function(){this.$router.push({path:"/home/components/project"})}),l()(a,"messageWin",function(t){this.$message({message:t,type:"success"})}),l()(a,"messageWarning",function(t){this.$message({message:t,type:"warning"})}),l()(a,"messageError",function(t){this.$message.error(t)}),a),mounted:function(){this.getParams(),this.upload(),this.getParentTask()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project_details",style:t.project_style},[s("el-row",[s("el-col",{staticClass:"top",attrs:{span:24}},[s("el-link",{on:{click:function(e){return t.toProject()}}},[t._v("项目管理")]),t._v(" "),s("span",{staticClass:"project_name"},[t._v("/ "+t._s(t.proName))])],1),t._v(" "),s("el-col",{staticClass:"tabs",attrs:{span:6}},[s("el-button-group",[s("el-button",{class:["1"==t.tabs_activity?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.table_tab(1)}}},[t._v("执行情况")]),t._v(" "),s("el-button",{class:["2"==t.tabs_activity?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.table_tab(2)}}},[t._v("项目需求")])],1)],1),t._v(" "),s("el-col",{staticClass:"detail_list",attrs:{span:4,offset:13}},[s("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.sousuo_show,expression:"!sousuo_show"}],attrs:{span:24}},[3!=t.projectShowDetail.status?s("i",{staticClass:"el-icon-circle-plus-outline",on:{click:t.addtask}}):t._e(),t._v(" "),s("i",{staticClass:"el-icon-tickets",on:{click:function(e){return t.gantt(1)}}}),t._v(" "),s("i",{staticClass:"el-icon-search",on:{click:t.sousuoShow}})]),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.sousuo_show,expression:"sousuo_show"}],staticClass:"sousuo",attrs:{span:24}},[s("el-col",{attrs:{span:20}},[s("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.sousuo_input,callback:function(e){t.sousuo_input=e},expression:"sousuo_input"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.sousuo},slot:"suffix"})])],1),t._v(" "),s("el-col",{attrs:{span:3,offset:1}},[s("i",{staticClass:"el-icon-circle-close",on:{click:t.sousuoShow}})])],1)],1),t._v(" "),t.table_show?s("el-col",{staticClass:"table table1",attrs:{span:24}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.taskList,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"},"row-style":{height:"57px"}}},[s("el-table-column",{attrs:{prop:"deptName",label:"部门"}}),t._v(" "),s("el-table-column",{attrs:{prop:"taskName",label:"任务"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-link",{attrs:{type:"primary"},on:{click:function(s){return t.task_detail(e.row)}}},[t._v(t._s(e.row.taskName))])]}}],null,!1,203963858)}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.isIgnore?s("span",{staticClass:"state_color3"},[t._v("忽略")]):1==e.row.status?s("span",{staticClass:"state_color1"},[t._v("执行中")]):2==e.row.status?s("span",{staticClass:"state_color2"},[t._v("审核中")]):3==e.row.status?s("span",{staticClass:"state_color3"},[t._v("完成")]):4==e.row.status?s("span",{staticClass:"state_color4"},[t._v("延期")]):5==e.row.status?s("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()]}}],null,!1,2025884700)}),t._v(" "),s("el-table-column",{attrs:{prop:"doUserName",label:"执行人",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{directives:[{name:"show",rawName:"v-show",value:t.changeDoUserNameShow!=e.$index,expression:"changeDoUserNameShow != scope.$index"}]},[t._v("\n              "+t._s(e.row.doUserName)+"\n              "),1!=e.row.isIgnore&&e.row.listOaUser.length>1&&2!=e.row.status&&3!=e.row.status&&5!=e.row.status?s("el-link",{attrs:{type:"primary"},on:{click:function(s){return t.changeDoUserName(e.$index,e.row.listOaUser)}}},[t._v("更换")]):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.changeDoUserNameShow==e.$index,expression:"changeDoUserNameShow == scope.$index"}]},[s("el-select",{staticStyle:{width:"99px"},attrs:{filterable:"",placeholder:"请选择",size:"mini",clearable:""},model:{value:t.nextuserValue,callback:function(e){t.nextuserValue=e},expression:"nextuserValue"}},t._l(t.nextuserList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),s("el-button",{attrs:{slot:"append",type:"primary",size:"mini"},on:{click:function(s){return t.changeDoUserNameAffirm(e.row)}},slot:"append"},[t._v("确认")])],1)]}}],null,!1,272175168)}),t._v(" "),s("el-table-column",{attrs:{prop:"expertTime_",label:"预计时间",sortable:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"overTime_",label:"完成时间",sortable:""}}),t._v(" "),s("el-table-column",{attrs:{prop:"initUserName",label:"下达人"}}),t._v(" "),s("el-table-column",{attrs:{prop:"overDesc",label:"成果"},scopedSlots:t._u([{key:"default",fn:function(e){return 3==e.row.status&&0!=e.row.taskfileList.length?s("div",{staticClass:"taskfile",on:{click:function(s){return t.download(e.row.taskfileList[0])}}},["doc"==e.row.taskfileList[0].suffix||"docx"==e.row.taskfileList[0].suffix?s("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.row.taskfileList[0].suffix||"xlsx"==e.row.taskfileList[0].suffix?s("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.row.taskfileList[0].suffix||"pptx"==e.row.taskfileList[0].suffix?s("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):s("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),s("br"),t._v(" "),s("el-link",{staticClass:"filenametext",attrs:{type:"primary"}},[t._v(t._s(e.row.taskfileList[0].fileName))])],1):t._e()}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"操作",label:"操作","filter-placement":"bottom-end",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.userId==e.row.initUserId?s("div",{staticClass:"linblo"},[1!=e.row.isIgnore&&3!=e.row.status&&5!=e.row.status?s("el-button",{attrs:{size:"small",type:"info"},on:{click:function(s){return t.feedback(e.row.proId,e.row.taskId,e.row.proName,e.row.taskName)}}},[t._v("反馈")]):t._e()],1):t.userId==t.proInitUserId||t.userId==t.manager?s("div",{staticClass:"linblo"},[1!=e.row.isIgnore&&1==e.row.status?s("el-button",{attrs:{size:"small",type:"info"},on:{click:function(s){return t.feedback(e.row.proId,e.row.taskId,e.row.proName,e.row.taskName)}}},[t._v("反馈")]):t._e()],1):t._e(),t._v(" "),t.userId==e.row.initUserId?s("div",{staticClass:"linblo"},[1!=e.row.isIgnore&&2==e.row.status?s("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},on:{click:function(s){return t.sponsor_achieve(e.row)}},slot:"reference"},[t._v("完成")]):t._e()],1):t.userId==e.row.doUserId?s("div",{staticClass:"linblo"},[1!=e.row.isIgnore&&1==e.row.status||4==e.row.status?s("el-button",{attrs:{slot:"reference",size:"small",type:"info"},on:{click:function(s){return t.redact(e.row.proId,e.row.taskId)}},slot:"reference"},[t._v("忽略")]):t._e(),t._v(" "),1!=e.row.isIgnore&&1==e.row.status||4==e.row.status?s("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},on:{click:function(s){return t.task_detail(e.row)}},slot:"reference"},[t._v("完成")]):t._e()],1):t._e()]}}],null,!1,3492075061)})],1)],1):t._e(),t._v(" "),t.table_show?t._e():s("el-col",{staticClass:"table table2",attrs:{span:24}},[s("el-col",{staticClass:"title",attrs:{span:7}},[s("el-col",{attrs:{span:24}},[t._v("项目名称")]),t._v(" "),s("el-col",{attrs:{span:24}},[t._v(t._s(t.projectShowDetail.proName))])],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:7}},[s("el-col",{attrs:{span:24}},[t._v("预计时间")]),t._v(" "),s("el-col",{attrs:{span:24}},[t._v(t._s(t.projectShowDetail.createTime_)+"--"+t._s(t.projectShowDetail.expertTime_))])],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:7}},[s("el-col",{attrs:{span:24}},[t._v("项目类别")]),t._v(" "),s("el-col",{attrs:{span:24}},[t._v("\n          "+t._s(t.projectShowDetail.clientName)+"-\n          "+t._s(t.projectShowDetail.businessName)+"-\n          "+t._s(t.projectShowDetail.projectType)+"\n        ")])],1),t._v(" "),s("el-col",{staticClass:"need",attrs:{span:24}},[s("el-col",{staticClass:"span",attrs:{span:24}},[t._v("需求")]),t._v(" "),s("el-col",{attrs:{span:24}},[s("pre",[t._v("          "+t._s(t.projectShowDetail.remark)+"\n          ")])]),t._v(" "),s("el-col",{staticClass:"span",attrs:{span:24}},[t._v("附件")]),t._v(" "),s("el-col",{staticClass:"fileList",attrs:{span:24}},[t._l(t.projectShowDetail.listProFile,function(e){return s("div",{key:e.index,staticClass:"fileList_"},[s("div",{staticClass:"shade",on:{click:function(s){return t.download(e)}}},[s("i",{staticClass:"el-icon-download"})]),t._v(" "),"doc"==e.suffix||"docx"==e.suffix?s("img",{attrs:{src:"static/images/document/word.png",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?s("img",{attrs:{src:"static/images/document/excle.png",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?s("img",{attrs:{src:"static/images/document/ppt.png",alt:"",srcset:""}}):s("img",{attrs:{src:"static/images/document/other.png",alt:"",srcset:""}}),t._v(" "),s("br"),t._v(" "),s("span",[t._v(t._s(e.fileName))])])}),t._v(" "),s("div"),t._v(" "),s("div")],2)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"创建任务",visible:t.drawer1,"with-header":!1},on:{"update:visible":function(e){t.drawer1=e}}},[s("el-scrollbar",{staticStyle:{height:"100%"}},[s("el-row",{staticClass:"add_box"},[s("el-col",{attrs:{span:24}},[s("el-col",{staticClass:"title title1",attrs:{span:6}},[t._v("创建任务")])],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("父任务")]),t._v(" "),s("el-col",{attrs:{span:13}},[s("el-select",{staticClass:"parent_task",attrs:{filterable:"",placeholder:"请选择",clearable:"",disabled:t.faTaskDisabled},model:{value:t.new_task.faTask,callback:function(e){t.$set(t.new_task,"faTask",e)},expression:"new_task.faTask"}},t._l(t.faTaskList,function(t){return s("el-option",{key:t.index,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-col",{staticClass:"title title2",attrs:{span:6}},[t._v("执行部门")]),t._v(" "),s("el-col",{staticClass:"department",attrs:{span:15,offset:6}},t._l(t.deptList,function(e){return s("el-radio",{key:e.index,attrs:{label:e.id},model:{value:t.new_task.department,callback:function(e){t.$set(t.new_task,"department",e)},expression:"new_task.department"}},[t._v(t._s(e.name))])}),1)],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("名称")]),t._v(" "),s("el-col",{attrs:{span:13}},[s("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.new_task.new_name,callback:function(e){t.$set(t.new_task,"new_name",e)},expression:"new_task.new_name"}})],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("预计时间")]),t._v(" "),s("el-col",{staticClass:"presetTime",attrs:{span:13}},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions},model:{value:t.new_task.presetTime,callback:function(e){t.$set(t.new_task,"presetTime",e)},expression:"new_task.presetTime"}})],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务类型")]),t._v(" "),s("el-col",{staticClass:"task_type",attrs:{span:13}},[s("el-select",{attrs:{placeholder:"请选择任务类型"},model:{value:t.task_type_value,callback:function(e){t.task_type_value=e},expression:"task_type_value"}},t._l(t.task_type,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("需求")]),t._v(" "),s("el-col",{attrs:{span:13}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:8},placeholder:"请输入内容"},model:{value:t.new_task.remark,callback:function(e){t.$set(t.new_task,"remark",e)},expression:"new_task.remark"}})],1),t._v(" "),s("el-col",{staticClass:"upload",attrs:{span:13,offset:6}},[s("el-upload",{attrs:{action:t.uploadUrl,"on-remove":t.handleRemove,"on-success":t.handleSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),s("span",{staticClass:"text"},[t._v("上传附件")])],1)],1),t._v(" "),s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.putIn}},[t._v("提交")])],1)],1)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"历史记录",visible:t.drawer2,"with-header":!1},on:{"update:visible":function(e){t.drawer2=e}}},[s("el-row",{staticClass:"records"},[s("el-col",{staticClass:"title",attrs:{span:23,offset:1}},[t._v("历史记录")]),t._v(" "),s("el-col",{staticClass:"records_list",style:t.style1,attrs:{span:23,offset:1}},[s("el-scrollbar",[s("el-timeline",t._l(t.records_list,function(e){return s("el-timeline-item",{key:e.index,attrs:{timestamp:e.time,placement:"top"}},[s("el-card",{staticClass:"content"},[s("p",[t._v("变动内容："+t._s(e.result))]),t._v(" "),s("p",[t._v("更新人："+t._s(e.people))])])],1)}),1)],1)],1)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"任务",visible:t.drawer3,"with-header":!1},on:{"update:visible":function(e){t.drawer3=e}}},[s("el-row",{staticClass:"feedback"},[s("el-col",{attrs:{span:24}},[s("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer3_task))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈")]),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.feedbackContent,callback:function(e){t.feedbackContent=e},expression:"feedbackContent"}})],1),t._v(" "),s("el-col",{staticClass:"Upload",attrs:{span:24}},[s("el-divider"),t._v(" "),s("el-upload",{staticClass:"elementUpload",attrs:{action:"/pmbs/file/upload?upType=1&demandType=1","on-remove":t.handleRemoveFeedback,"on-success":t.handleSuccessFeedback,limit:1}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传文档")])],1)],1)],1),t._v(" "),s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.taskFeedback}},[t._v("提交")])],1)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"任务",visible:t.drawer4,"with-header":!1},on:{"update:visible":function(e){t.drawer4=e}}},[s("el-row",{staticClass:"feedback"},[s("el-col",{attrs:{span:24}},[s("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer4_task))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("延期原因")]),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1),t._v(" "),s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("提交")])],1)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"任务",visible:t.drawer5,"with-header":!1},on:{"update:visible":function(e){t.drawer5=e}}},[s("el-scrollbar",{directives:[{name:"loading",rawName:"v-loading",value:t.drawerLoading,expression:"drawerLoading"}],staticStyle:{height:"100%"}},[s("el-row",{staticClass:"task_details"},[s("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.taskData.proName)+"-"+t._s(t.taskData.taskName))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行部门：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.deptName))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务类型：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[s("el-select",{attrs:{placeholder:"请选择任务类型",size:"mini"},model:{value:t.taskData.typeId,callback:function(e){t.$set(t.taskData,"typeId",e)},expression:"taskData.typeId"}},t._l(t.task_type,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)]:[t._v(t._s(t.taskData.typeName))]],2),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行人：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t.changeNameShow?t._e():s("span",[t._v(t._s(t.taskData.doUserName))]),t._v(" "),t.changeNameShow?s("el-select",{staticStyle:{width:"99px"},attrs:{filterable:"",placeholder:"请选择",size:"mini",clearable:""},model:{value:t.taskData.doUserId,callback:function(e){t.$set(t.taskData,"doUserId",e)},expression:"taskData.doUserId"}},t._l(t.taskData.listOaUser,function(t){return s("el-option",{key:t.userId,attrs:{label:t.realName,value:t.userId}})}),1):t._e(),t._v(" "),1!=t.taskData.isIgnore&&t.taskData.listOaUser.length>1&&2!=t.taskData.status&&3!=t.taskData.status&&5!=t.taskData.status?s("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.changeName()}}},[t._v("更换")]):t._e()],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("状态：")]),t._v(" "),s("el-col",{attrs:{span:18}},[1==t.taskData.status&&t.taskData.doUserId==t.userId?s("el-select",{class:{state_color1:1==t.taskData.status,state_color2:2==t.taskData.status,state_color4:4==t.taskData.status},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.statusListValue,callback:function(e){t.statusListValue=e},expression:"statusListValue"}},t._l(t.statusList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):1==t.taskData.status&&t.taskData.doUserId!=t.userId?s("span",{staticClass:"state_color1"},[t._v("执行中")]):2==t.taskData.status?s("span",{staticClass:"state_color2"},[t._v("审核中")]):3==t.taskData.status?s("span",{staticClass:"state_color3"},[t._v("已完成")]):t._e(),t._v(" "),4==t.taskData.status?s("el-select",{class:{state_color1:1==t.taskData.status,state_color2:2==t.taskData.status,state_color4:4==t.taskData.status},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.statusListValue,callback:function(e){t.statusListValue=e},expression:"statusListValue"}},t._l(t.statusList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):5==t.taskData.status?s("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("预计时间：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions,size:"mini"},model:{value:t.taskData.expertTime,callback:function(e){t.$set(t.taskData,"expertTime",e)},expression:"taskData.expertTime"}})]:[t._v(t._s(t.taskData.expertTime_))]],2),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成时间：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.overTime_))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("需求：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[s("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:9},placeholder:"请输入内容"},model:{value:t.taskData.remark,callback:function(e){t.$set(t.taskData,"remark",e)},expression:"taskData.remark"}})]:[t._v(t._s(t.taskData.remark))]],2),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),s("el-col",{staticClass:"proFileList",attrs:{span:18}},[t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status?[s("el-upload",{staticClass:"elementUpload",attrs:{action:t.uploadUrl,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList0}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传附件")])],1)]:t._l(t.taskData.proFileList,function(e){return s("div",{key:e.index,staticClass:"smname",on:{click:function(s){return t.download(e)}}},["doc"==e.suffix||"docx"==e.suffix?s("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?s("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?s("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):s("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),s("div",[t._v(t._s(e.fileName))])])})],2),t._v(" "),s("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成结果：")]),t._v(" "),s("el-col",{attrs:{span:18}},[t.taskData.doUserId==t.userId&&3!=t.taskData.status&&5!=t.taskData.status?[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容",disabled:t.resultBan},model:{value:t.taskData.overDesc,callback:function(e){t.$set(t.taskData,"overDesc",e)},expression:"taskData.overDesc"}})]:[t._v(t._s(t.taskData.overDesc))]],2),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),s("el-col",{staticClass:"proFileList",attrs:{span:18}},[t.taskData.doUserId==t.userId&&3!=t.taskData.status&&5!=t.taskData.status?[s("el-upload",{staticClass:"elementUpload",attrs:{action:"/pmbs/file/upload?upType=1&demandType=1","on-remove":t.handleRemoveResult,"on-success":t.handleSuccessResult,disabled:t.updateBan,fileList:t.fileList1,limit:1}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("点击上传文档")])],1)]:t._l(t.taskData.taskfileList,function(e){return s("div",{key:e.index,staticClass:"smname",on:{click:function(s){return t.download(e)}}},["doc"==e.suffix||"docx"==e.suffix?s("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==e.suffix||"xlsx"==e.suffix?s("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==e.suffix||"pptx"==e.suffix?s("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):s("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),s("div",[t._v(t._s(e.fileName))])])})],2),t._v(" "),s("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈意见：")]),t._v(" "),s("el-col",{staticClass:"suggest",attrs:{span:18}},[s("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.taskData.feedbackList,function(e){return s("el-col",{key:e.index,staticClass:"suggest_list",attrs:{span:23}},[s("el-col",{staticClass:"time",attrs:{span:12}},[t._v(t._s(e.updateTime))]),t._v(" "),s("el-col",{staticClass:"pop",attrs:{span:12}},[t._v(t._s(e.deptName)+"-"+t._s(e.feedbackUserName))]),t._v(" "),s("el-col",{staticClass:"content",attrs:{span:24}},[t._v(t._s(e.feedback))]),t._v(" "),s("el-col",{staticClass:"fileListBox",attrs:{span:24}},t._l(e.feedbackFileList,function(a){return s("div",{key:a.index,staticClass:"fileList",on:{click:function(s){return t.download(e)}}},["doc"==a.suffix||"docx"==a.suffix?s("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==a.suffix||"xlsx"==a.suffix?s("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==a.suffix||"pptx"==a.suffix?s("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):s("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),s("div",[t._v(t._s(a.fileName))])])}),0)],1)}),1)],1)],1)],1),t._v(" "),1==t.taskData.status||4==t.taskData.status?s("el-row",{directives:[{name:"show",rawName:"v-show",value:t.batton_pa,expression:"batton_pa"}],staticClass:"batton_pa"},[s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.changeTaskDeil}},[t._v("完成")])],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(r,o,!1,function(t){s("x/T2")},"data-v-9266da98",null);e.default=n.exports},"x/T2":function(t,e){}});