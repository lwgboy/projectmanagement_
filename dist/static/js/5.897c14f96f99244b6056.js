webpackJsonp([5],{"7Y/H":function(t,s){},m4ws:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("bOdI"),l=e.n(a),i={name:"project_details",data:function(){var t;return t={userId:this.$store.state.user.userId,loading:!1,proId:"",proName:"",taskId:"",type:"",loginState:!0,project_style:"",drawer1:!1,drawer2:!1,drawer3:!1,drawer4:!1,drawer5:!1,drawer3_task:"",drawer4_task:"",sousuo_show:!1,sousuo_input:"",taskList:[],deptList:[],departmentList:[],projectShowDetail:{},tabs_activity:1,table_show:!0,faTaskList:[],new_task:{faTask:"",new_name:"",department:"",presetTime:"",task_type:"",remark:""},pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},records_list:[{time:"20/04/02 20:46",result:"前端开发时间变动",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""},{time:"20/04/02 20:46",result:"策划方案预计完成时间改动",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""},{time:"20/04/02 20:46",result:"策划方案添加预计完成时间",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""},{time:"20/04/02 20:46",result:"策划方案已审核",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""},{time:"20/04/02 20:46",result:"策划方案已提交",people:"解雨臣",file_name:"文档",file_format:"ppt",file_url:""}],statusList:[{value:"1",label:"执行中"},{value:"2",label:"完成"}],statusListValue:"",style1:"",feedbackContent:"",taskFeedbackId:"",result:"",task_type:[],task_type_value:"",taskData:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,uploadUrl:"",listProFile:[],suggest_list:[],file_list:[],dialogImageUrlResult:"",dialogVisibleResult:!1,disabledResult:!1},l()(t,"uploadUrl",""),l()(t,"listProFileResult",[]),l()(t,"changeDoUserNameShow","true"),l()(t,"nextuserList",[]),l()(t,"nextuserValue",""),l()(t,"changeNameShow",!1),l()(t,"userValue",""),t},watch:{drawer5:function(t,s){0==this.drawer5&&(this.changeNameShow=!1)}},methods:{formatData:function(t){var s=t.getFullYear(),e=t.getMonth()+1,a=t.getDate();return e>=1&&e<=9&&(e="0"+e),a>=0&&a<=9&&(a="0"+a),s+"-"+e+"-"+a},formatData2:function(t){var s=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),l=t.getHours(),i=t.getMinutes(),r=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),a>=0&&a<=9&&(a="0"+a),l>=0&&l<=9&&(l="0"+l),i>=0&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r),s+"-"+e+"-"+a+" "+l+":"+i+":"+r},widthheight:function(){window.innerWidth;var t=window.innerHeight-100;this.style1="height:"+t+"px;"},addtask:function(){this.drawer1=!0,this.getDepTypeList(),this.getDeptList()},table_tab:function(t){1==t?(this.tabs_activity=1,this.table_show=!0):2==t&&(this.tabs_activity=2,this.table_show=!1)},redact:function(t){var s=this;console.log("忽略"+t),this.$alert("是否忽略此任务","提示",{confirmButtonText:"确定",callback:function(e){var a={taskId:t,isIgnore:1,taskfileList:{}};s.taskSave(a)}})},feedback:function(t,s,e){this.drawer3=!0,this.drawer3_task=s+"-"+e,this.taskFeedbackId=t},achieve:function(t,s){if(1==s){var e={taskId:t,status:2};this.taskSave(e)}else if(2==s){var a={taskId:t,status:3,overTime:this.formatData2(new Date)};this.taskSave(a)}else 4==s&&(this.drawer4=!0,this.drawer4_task=task)},gantt:function(t){var s=this.$route.query.id,e=this.$route.query.type;this.$router.push({path:"/gantti",query:{id:s,type:e}})},sousuoShow:function(t){this.sousuo_show=!this.sousuo_show},sousuo:function(){this.getParams(this.sousuo_input)},task_detail:function(t){this.drawer5=!0,this.taskId=t.taskId,this.statusListValue=t.status.toString(),this.getTaskDetail(t.taskId)},getTaskDetail:function(t){var s="?id="+t;this.$axios.post("/pmbs/api/task/show"+s).then(this.getTaskDetailSuss)},getTaskDetailSuss:function(t){200==t.status&&(this.taskData=t.data.data,this.suggest_list=t.data.feedbackList)},upload:function(){this.uploadUrl="\n      /pmbs/file/upload?upType=1&demandType=0\n      "},handleRemove:function(t){for(var s=t.response.data,e=this.listProFile,a=0;a<e.length;a++){e[a].localPath==s.path&&e.splice(a,1)}this.listProFile=e,console.log(this.listProFile)},handleSuccess:function(t,s,e){if(0==t.errcode){var a=t.data,l=this.listProFile,i={fileName:a.fileName,isPro:1,localPath:a.path,suffix:a.fileType};l.push(i),this.listProFile=l}},handleRemoveResult:function(t){for(var s=t.response.data,e=this.listProFileResult,a=0;a<e.length;a++){e[a].localPath==s.path&&e.splice(a,1)}this.listProFileResult=e},handleSuccessResult:function(t,s,e){if(0==t.errcode){var a=t.data,l=this.listProFileResult,i={proId:this.proId,taskId:this.taskId,fileId:"",updateUserId:this.userId,fileName:a.fileName,isPro:1,localPath:a.path,suffix:a.fileType};l.push(i),this.listProFileResult=l}},getParams:function(t){var s=this.$route.query.id,e=this.$route.query.type;this.proId=s,this.type=e,0==e?this.getProjectOfTask(s,t):1==e&&this.getProjectOfUserTask(s,t),this.getProjectShowDetail(s)},getProjectShowDetail:function(t){var s="?proId="+t;this.$axios.post("/pmbs/api/project/showDetail"+s).then(this.getProjectShowDetailSuss)},getProjectShowDetailSuss:function(t){200==t.status&&(this.projectShowDetail=t.data.data,this.proName=t.data.data.proName)},getProjectOfTask:function(t,s){this.loading=!0;var e="",a=this.userId;e=void 0!=s?"?proId="+t+"&taskName="+s+"&userId="+a:"?proId="+t+"&userId="+a,this.$axios.post("/pmbs/api/project/projectOfTask"+e).then(this.getProjectOfTaskSuss)},getProjectOfTaskSuss:function(t){if(this.loading=!1,200==t.status){var s=t.data.data;this.taskList=s}},getProjectOfUserTask:function(t,s){this.loading=!0;var e="",a=this.userId;e=void 0!=s?"?proId="+t+"&taskName="+s+"&userId="+a:"?proId="+t+"&userId="+a,this.$axios.post("/pmbs/api/project/projectOfUserTask"+e).then(this.getProjectOfUserTaskSuss)},getProjectOfUserTaskSuss:function(t){if(this.loading=!1,200==t.status){var s=t.data.data;this.taskList=s}},getDeptList:function(t){if(0==this.deptList.length){this.$axios.post("/pmbs/department/deptList",{pageNum:1}).then(this.getDeptListSuss)}},getDeptListSuss:function(t){if(200==t.status){for(var s=t.data.data,e=[],a=0;a<s.length;a++){var l={},i=s[a];l.id=i.deptId,l.name=i.deptName,e.push(l)}this.deptList=e,this.departmentList=s}},getParentTask:function(){var t="?userId="+this.userId+"&proId="+this.$route.query.id+"&depId="+this.$store.state.user.deptId;this.$axios.post("/pmbs/api/task/findParentTask"+t).then(this.getParentTaskSuss)},getParentTaskSuss:function(t){if(console.log(t),200==t.status){for(var s=t.data,e=[],a=0;a<s.length;a++){var l=s[a],i={};i.value=l.taskId,i.label=l.taskName,e.push(i)}this.faTaskList=e}},putIn:function(){for(var t=this.formatData(this.new_task.presetTime),s=this.formatData2(new Date),e=this.new_task.department,a="",l=this.departmentList,i=0;i<l.length;i++){var r=l[i];e==r.deptId&&(a=r.principalUserId)}var o={createTime:s,deptId:e,doUserId:a,expertTime:t,faTask:this.faTask,initUserId:this.userId,proFileList:this.listProFileResult,proId:this.proId,remark:this.new_task.remark,taskName:this.new_task.new_name,typeId:this.task_type_value};this.taskSave(o)},changeTaskDeil:function(){var t=this.taskData,s=this.listProFileResult,e=[];if(0==s.length)for(var a=0;a<t.taskfileList.length;a++){var l=t.taskfileList[a],i={fileId:l.fileId,fileName:l.fileName,suffix:l.suffix,localPath:l.localPath,proId:l.proId,taskId:l.taskId,updateUserId:this.userId};e.push(i)}else e=s;var r={proId:this.proId,taskId:this.taskId,status:this.statusListValue,overDesc:this.result,doUserId:this.taskData.doUserId,taskfileList:e};0!=t.taskfileList.length&&0!=s.length&&(r.oldFileId=fileId),this.taskSave(r)},taskSave:function(t){this.$axios.post("/pmbs/api/task/save",t).then(this.taskSaveSuss)},taskSaveSuss:function(t){200==t.status&&(this.messageWin(t.data.msg),this.drawer1=!1,this.drawer5=!1,this.result="",this.listProFile=[],this.listProFileResult=[],this.getProjectOfTask(this.proId))},taskFeedback:function(){var t=new Date,s={feedback:this.feedbackContent,initUserId:this.userId,taskId:this.taskFeedbackId,updateTime:t};""==s.feedback?this.messageError("信息不能为空"):this.$axios.post("/pmbs/api/project/taskfeedback",s).then(this.taskFeedbackSuss)},taskFeedbackSuss:function(t){200==t.status&&(this.messageWin("反馈成功"),this.drawer3=!1,this.feedbackContent="",this.taskFeedbackId="",this.getParams())},getDepTypeList:function(){this.$axios.post("/pmbs/api/depType/listAjax",{}).then(this.getDepTypeListSuss)},getDepTypeListSuss:function(t){if(200==t.status){for(var s=t.data.items,e=[],a={},l=0;l<s.length;l++){var i=s[l];a={value:i.typeId,label:i.typeName},e.push(a)}this.task_type=e}},changeDoUserName:function(t,s){this.changeDoUserNameShow=t,this.getNextuserList(s)},getNextuserList:function(t){for(var s=t,e=[],a=0;a<s.length;a++){var l=s[a],i={value:l.userId,label:l.realName};e.push(i)}this.nextuserList=e},changeDoUserNameAffirm:function(t){var s=this.nextuserValue;""==s?this.changeDoUserNameShow="true":(t.doUserId=s,this.$axios.post("/pmbs/api/task/save",t).then(this.changeDoUserNameAffirmSuss))},changeDoUserNameAffirmSuss:function(t){200==t.status&&(this.messageWin("执行人修改成功"),this.getParams(),this.changeDoUserNameShow="true")},changeName:function(){this.changeNameShow=!0},empty:function(){this.drawer3=!1,this.drawer4=!1,this.feedbackContent="",this.result="",this.new_task.faTask="",this.new_task.department="",this.new_task.new_name="",this.new_task.presetTime="",this.task_type_value="",this.new_task.remark="",this.file_list=[],this.listProFileResult=[]},download:function(t){var s=t.localPath,e=document.createElement("a");e.download="",e.setAttribute("href","http://218.106.254.122:8083/pmbs/"+s),e.click()},toProject:function(){this.$router.push({path:"/home/components/project"})},messageWin:function(t){this.$message({message:t,type:"success"})},messageWarning:function(t){this.$message({message:t,type:"warning"})},messageError:function(t){this.$message.error(t)}},mounted:function(){this.getParams(),this.upload(),this.getParentTask()}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"project_details",style:t.project_style},[e("el-row",[e("el-col",{staticClass:"top",attrs:{span:24}},[e("el-col",{attrs:{span:4}},[e("el-link",{on:{click:function(s){return t.toProject()}}},[t._v("项目管理")]),t._v(" "),e("span",{staticClass:"project_name"},[t._v("/ "+t._s(t.proName))])],1)],1),t._v(" "),e("el-col",{staticClass:"tabs",attrs:{span:6}},[e("el-button-group",[e("el-button",{class:["1"==t.tabs_activity?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(s){return t.table_tab(1)}}},[t._v("执行情况")]),t._v(" "),e("el-button",{class:["2"==t.tabs_activity?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(s){return t.table_tab(2)}}},[t._v("项目需求")])],1)],1),t._v(" "),e("el-col",{staticClass:"detail_list",attrs:{span:4,offset:13}},[e("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.sousuo_show,expression:"!sousuo_show"}],attrs:{span:24}},[e("i",{staticClass:"el-icon-circle-plus-outline",on:{click:t.addtask}}),t._v(" "),e("i",{staticClass:"el-icon-tickets",on:{click:function(s){return t.gantt(1)}}}),t._v(" "),e("i",{staticClass:"el-icon-search",on:{click:t.sousuoShow}})]),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.sousuo_show,expression:"sousuo_show"}],staticClass:"sousuo",attrs:{span:24}},[e("el-col",{attrs:{span:20}},[e("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.sousuo_input,callback:function(s){t.sousuo_input=s},expression:"sousuo_input"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.sousuo},slot:"suffix"})])],1),t._v(" "),e("el-col",{attrs:{span:3,offset:1}},[e("i",{staticClass:"el-icon-circle-close",on:{click:t.sousuoShow}})])],1)],1),t._v(" "),t.table_show?e("el-col",{staticClass:"table table1",attrs:{span:24}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.taskList,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"},"row-style":{height:"57px"}}},[e("el-table-column",{attrs:{prop:"deptName",label:"部门"}}),t._v(" "),e("el-table-column",{attrs:{prop:"taskName",label:"任务"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-link",{on:{click:function(e){return t.task_detail(s.row)}}},[t._v(t._s(s.row.taskName))])]}}],null,!1,2956803532)}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(s){return[1==s.row.isIgnore?e("span",{staticClass:"state_color3"},[t._v("忽略")]):1==s.row.status?e("span",{staticClass:"state_color1"},[t._v("执行中")]):2==s.row.status?e("span",{staticClass:"state_color2"},[t._v("审核中")]):3==s.row.status?e("span",{staticClass:"state_color3"},[t._v("完成")]):4==s.row.status?e("span",{staticClass:"state_color4"},[t._v("延期")]):5==s.row.status?e("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()]}}],null,!1,2025884700)}),t._v(" "),e("el-table-column",{attrs:{prop:"doUserName",label:"执行人",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.changeDoUserNameShow!=s.$index,expression:"changeDoUserNameShow != scope.$index"}]},[t._v("\n              "+t._s(s.row.doUserName)+"\n              "),e("el-link",{directives:[{name:"show",rawName:"v-show",value:null!=s.row.listOaUser&&s.row.doUserId==t.userId&&1==s.row.status||4==s.row.status,expression:"scope.row.listOaUser != null && scope.row.doUserId == userId && scope.row.status == 1 || scope.row.status == 4"}],attrs:{type:"primary"},on:{click:function(e){return t.changeDoUserName(s.$index,s.row.listOaUser)}}},[t._v("更换")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.changeDoUserNameShow==s.$index,expression:"changeDoUserNameShow == scope.$index"}]},[e("el-select",{staticStyle:{width:"99px"},attrs:{filterable:"",placeholder:"请选择",size:"mini",clearable:""},model:{value:t.nextuserValue,callback:function(s){t.nextuserValue=s},expression:"nextuserValue"}},t._l(t.nextuserList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),e("el-button",{attrs:{slot:"append",type:"primary",size:"mini"},on:{click:function(e){return t.changeDoUserNameAffirm(s.row)}},slot:"append"},[t._v("确认")])],1)]}}],null,!1,4000727474)}),t._v(" "),e("el-table-column",{attrs:{prop:"expertTime",label:"预计时间",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"overTime",label:"完成时间",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"initUserName",label:"下达人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"overDesc",label:"成果"},scopedSlots:t._u([{key:"default",fn:function(s){return 3==s.row.status&&0!=s.row.taskfileList.length?e("div",{staticClass:"result"},["doc"==s.row.taskfileList[0].suffix||"docx"==s.row.taskfileList[0].suffix?e("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==s.row.taskfileList[0].suffix||"xlsx"==s.row.taskfileList[0].suffix?e("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==s.row.taskfileList[0].suffix||"pptx"==s.row.taskfileList[0].suffix?e("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):e("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),e("div",[t._v(t._s(s.row.taskfileList[0].fileName))])]):t._e()}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"操作",label:"操作","filter-placement":"bottom-end",width:"136"},scopedSlots:t._u([{key:"default",fn:function(s){return[t.userId==s.row.initUserId?e("div",[1!=s.row.isIgnore&&1==s.row.status||4==s.row.status?e("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.feedback(s.row.taskId,s.row.proName,s.row.taskName)}}},[t._v("反馈")]):t._e(),t._v(" "),1!=s.row.isIgnore&&2==s.row.status?e("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},on:{click:function(e){return t.task_detail(s.row)}},slot:"reference"},[t._v("完成")]):t._e()],1):t.userId==s.row.doUserId?e("div",[1!=s.row.isIgnore&&1==s.row.status||4==s.row.status?e("el-button",{attrs:{slot:"reference",size:"small",type:"info"},on:{click:function(e){return t.redact(s.row.taskId)}},slot:"reference"},[t._v("忽略")]):t._e(),t._v(" "),1!=s.row.isIgnore&&1==s.row.status||4==s.row.status?e("el-button",{attrs:{slot:"reference",size:"small",type:"primary"},on:{click:function(e){return t.task_detail(s.row)}},slot:"reference"},[t._v("完成")]):t._e()],1):t._e()]}}],null,!1,370348416)})],1)],1):t._e(),t._v(" "),t.table_show?t._e():e("el-col",{staticClass:"table table2",attrs:{span:24}},[e("el-col",{staticClass:"title",attrs:{span:7}},[e("el-col",{attrs:{span:24}},[t._v("项目名称")]),t._v(" "),e("el-col",{attrs:{span:24}},[t._v(t._s(t.projectShowDetail.proName))])],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:7}},[e("el-col",{attrs:{span:24}},[t._v("预计时间")]),t._v(" "),e("el-col",{attrs:{span:24}},[t._v(t._s(t.projectShowDetail.expertTime))])],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:7}},[e("el-col",{attrs:{span:24}},[t._v("项目类别")]),t._v(" "),e("el-col",{attrs:{span:24}},[t._v("\n          "+t._s(t.projectShowDetail.clientName)+"-\n          "+t._s(t.projectShowDetail.businessName)+"-\n          "+t._s(t.projectShowDetail.projectType)+"\n        ")])],1),t._v(" "),e("el-col",{staticClass:"need",attrs:{span:24}},[e("el-col",{staticClass:"span",attrs:{span:24}},[t._v("需求")]),t._v(" "),e("el-col",{attrs:{span:24}},[t._v(t._s(t.projectShowDetail.remark))]),t._v(" "),e("el-col",{staticClass:"span",attrs:{span:24}},[t._v("附件")]),t._v(" "),e("el-col",{staticClass:"fileList",attrs:{span:24}},[t._l(t.projectShowDetail.listProFile,function(s){return e("div",{key:s.index,staticClass:"fileList_"},[e("div",{staticClass:"shade",on:{click:function(e){return t.download(s)}}},[e("i",{staticClass:"el-icon-download"})]),t._v(" "),"doc"==s.suffix||"docx"==s.suffix?e("img",{attrs:{src:"static/images/document/word.png",alt:"",srcset:""}}):"xls"==s.suffix||"xlsx"==s.suffix?e("img",{attrs:{src:"static/images/document/excle.png",alt:"",srcset:""}}):"ppt"==s.suffix||"pptx"==s.suffix?e("img",{attrs:{src:"static/images/document/ppt.png",alt:"",srcset:""}}):e("img",{attrs:{src:"static/images/document/other.png",alt:"",srcset:""}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(s.fileName))])])}),t._v(" "),e("div"),t._v(" "),e("div")],2)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"创建任务",visible:t.drawer1,"with-header":!1},on:{"update:visible":function(s){t.drawer1=s}}},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("el-row",{staticClass:"add_box"},[e("el-col",{attrs:{span:24}},[e("el-col",{staticClass:"title title1",attrs:{span:6}},[t._v("创建任务")])],1),t._v(" "),t.projectShowDetail.manager!=t.userId?e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("父任务")]):t._e(),t._v(" "),t.projectShowDetail.manager!=t.userId?e("el-col",{attrs:{span:13}},[e("el-select",{staticClass:"parent_task",attrs:{filterable:"",placeholder:"请选择",clearable:""},model:{value:t.new_task.faTask,callback:function(s){t.$set(t.new_task,"faTask",s)},expression:"new_task.faTask"}},t._l(t.faTaskList,function(t){return e("el-option",{key:t.index,attrs:{label:t.label,value:t.value}})}),1)],1):t._e(),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-col",{staticClass:"title title2",attrs:{span:6}},[t._v("执行部门")]),t._v(" "),e("el-col",{staticClass:"department",attrs:{span:15,offset:6}},t._l(t.deptList,function(s){return e("el-radio",{key:s.index,attrs:{label:s.id},model:{value:t.new_task.department,callback:function(s){t.$set(t.new_task,"department",s)},expression:"new_task.department"}},[t._v(t._s(s.name))])}),1)],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("名称")]),t._v(" "),e("el-col",{attrs:{span:13}},[e("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.new_task.new_name,callback:function(s){t.$set(t.new_task,"new_name",s)},expression:"new_task.new_name"}})],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("预计时间")]),t._v(" "),e("el-col",{staticClass:"presetTime",attrs:{span:13}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","picker-options":t.pickerOptions},model:{value:t.new_task.presetTime,callback:function(s){t.$set(t.new_task,"presetTime",s)},expression:"new_task.presetTime"}})],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务类型")]),t._v(" "),e("el-col",{staticClass:"task_type",attrs:{span:13}},[e("el-select",{attrs:{placeholder:"请选择任务类型"},model:{value:t.task_type_value,callback:function(s){t.task_type_value=s},expression:"task_type_value"}},t._l(t.task_type,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("需求")]),t._v(" "),e("el-col",{attrs:{span:13}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:8},placeholder:"请输入内容"},model:{value:t.new_task.remark,callback:function(s){t.$set(t.new_task,"remark",s)},expression:"new_task.remark"}})],1),t._v(" "),e("el-col",{staticClass:"upload",attrs:{span:13,offset:6}},[e("el-upload",{attrs:{action:t.uploadUrl,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.file_list}},[e("i",{staticClass:"el-icon-plus"})]),t._v(" "),e("el-dialog",{staticClass:"upload_list",attrs:{visible:t.dialogVisible},on:{"update:visible":function(s){t.dialogVisible=s}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"text"},[t._v("附件")])],1),t._v(" "),e("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[e("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.putIn}},[t._v("提交")])],1)],1)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"历史记录",visible:t.drawer2,"with-header":!1},on:{"update:visible":function(s){t.drawer2=s}}},[e("el-row",{staticClass:"records"},[e("el-col",{staticClass:"title",attrs:{span:23,offset:1}},[t._v("历史记录")]),t._v(" "),e("el-col",{staticClass:"records_list",style:t.style1,attrs:{span:23,offset:1}},[e("el-scrollbar",[e("el-timeline",t._l(t.records_list,function(s){return e("el-timeline-item",{key:s.index,attrs:{timestamp:s.time,placement:"top"}},[e("el-card",{staticClass:"content"},[e("p",[t._v("变动内容："+t._s(s.result))]),t._v(" "),e("p",[t._v("更新人："+t._s(s.people))])])],1)}),1)],1)],1)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"任务",visible:t.drawer3,"with-header":!1},on:{"update:visible":function(s){t.drawer3=s}}},[e("el-row",{staticClass:"feedback"},[e("el-col",{attrs:{span:24}},[e("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer3_task))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈")]),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.feedbackContent,callback:function(s){t.feedbackContent=s},expression:"feedbackContent"}})],1)],1),t._v(" "),e("el-col",{staticClass:"batton",attrs:{span:14,offset:5}},[e("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){return t.taskFeedback()}}},[t._v("提交")])],1)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"任务",visible:t.drawer4,"with-header":!1},on:{"update:visible":function(s){t.drawer4=s}}},[e("el-row",{staticClass:"feedback"},[e("el-col",{attrs:{span:24}},[e("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer4_task))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("延期原因")]),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.result,callback:function(s){t.result=s},expression:"result"}})],1)],1),t._v(" "),e("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[e("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("提交")])],1)],1)],1),t._v(" "),e("el-drawer",{attrs:{title:"任务",visible:t.drawer5,"with-header":!1},on:{"update:visible":function(s){t.drawer5=s}}},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("el-row",{staticClass:"task_details"},[e("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.taskData.proName)+"-"+t._s(t.taskData.taskName))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行部门：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.deptName))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务类型：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.typeName))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("执行人：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t.changeNameShow?t._e():e("span",[t._v(t._s(t.taskData.doUserName))]),t._v(" "),t.changeNameShow?e("el-select",{staticStyle:{width:"99px"},attrs:{filterable:"",placeholder:"请选择",size:"mini",clearable:""},model:{value:t.taskData.doUserId,callback:function(s){t.$set(t.taskData,"doUserId",s)},expression:"taskData.doUserId"}},t._l(t.taskData.listOaUser,function(t){return e("el-option",{key:t.userId,attrs:{label:t.realName,value:t.userId}})}),1):t._e(),t._v(" "),e("el-link",{directives:[{name:"show",rawName:"v-show",value:null!=t.taskData.listOaUser&&t.taskData.doUserId==t.userId&&1==t.taskData.status||4==t.taskData.status,expression:"taskData.listOaUser != null && taskData.doUserId == userId && taskData.status == 1 || taskData.status == 4"}],attrs:{type:"primary"},on:{click:function(s){return t.changeName()}}},[t._v("更换")])],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("状态：")]),t._v(" "),e("el-col",{attrs:{span:18}},[1==t.taskData.status&&t.taskData.doUserId==t.userId?e("el-select",{class:{state_color1:1==t.taskData.status,state_color2:2==t.taskData.status},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.statusListValue,callback:function(s){t.statusListValue=s},expression:"statusListValue"}},t._l(t.statusList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):2==t.taskData.status?e("span",{staticClass:"state_color2"},[t._v("审核中")]):3==t.taskData.status?e("span",{staticClass:"state_color3"},[t._v("已完成")]):4==t.taskData.status?e("span",{staticClass:"state_color4"},[t._v("延期")]):5==t.taskData.status?e("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("预计时间：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.expertTime))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成时间：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.overTime))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("需求：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.taskData.remark))]),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),e("el-col",{attrs:{span:18}},t._l(t.taskData.proFileList,function(s){return e("div",{key:s.index,staticClass:"smname"},["doc"==s.suffix||"docx"==s.suffix?e("img",{attrs:{src:"static/images/document/word.png",width:"24",alt:"",srcset:""}}):"xls"==s.suffix||"xlsx"==s.suffix?e("img",{attrs:{src:"static/images/document/excle.png",width:"24",alt:"",srcset:""}}):"ppt"==s.suffix||"pptx"==s.suffix?e("img",{attrs:{src:"static/images/document/ppt.png",width:"24",alt:"",srcset:""}}):e("img",{attrs:{src:"static/images/document/other.png",width:"24",alt:"",srcset:""}}),t._v(" "),e("div",[t._v(t._s(s.fileName))])])}),0),t._v(" "),e("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("完成结果：")]),t._v(" "),e("el-col",{attrs:{span:18}},[e("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.result,callback:function(s){t.result=s},expression:"result"}})],1),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("附件：")]),t._v(" "),e("el-col",{attrs:{span:18}},[e("el-upload",{attrs:{action:"/pmbs/file/upload?upType=1&demandType=1","list-type":"picture-card","on-remove":t.handleRemoveResult,"on-success":t.handleSuccessResult}},[e("i",{staticClass:"el-icon-plus"})]),t._v(" "),e("el-dialog",{staticClass:"upload_list",attrs:{visible:t.dialogVisibleResult},on:{"update:visible":function(s){t.dialogVisibleResult=s}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrlResult,alt:""}})])],1),t._v(" "),e("el-divider",{attrs:{"content-position":"right"}}),t._v(" "),e("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈意见：")]),t._v(" "),e("el-col",{staticClass:"suggest",attrs:{span:18}},[e("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.suggest_list,function(s){return e("el-col",{key:s.index,staticClass:"suggest_list",attrs:{span:23}},[e("el-col",{staticClass:"time",attrs:{span:12}},[t._v(t._s(s.updateTime))]),t._v(" "),e("el-col",{staticClass:"pop",attrs:{span:12}},[t._v(t._s(s.deptName)+"-"+t._s(s.feedbackUserName))]),t._v(" "),e("el-col",{staticClass:"content",attrs:{span:24}},[t._v(t._s(s.feedback))])],1)}),1)],1)],1)],1),t._v(" "),e("el-row",{staticClass:"batton_pa"},[e("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[e("el-button",{attrs:{size:"small",type:"info"}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.changeTaskDeil}},[t._v("完成")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=e("VU/8")(i,r,!1,function(t){e("7Y/H")},"data-v-1085a1f2",null);s.default=o.exports}});