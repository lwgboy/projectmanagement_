webpackJsonp([5],{"+r0C":function(t,e){},"58Tz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),n=s("bOdI"),r=s.n(n),o={name:"project",props:{update:Number},data:function(){var t;return t={userId:this.$store.state.user.userId,proId:"",loading:!1,clientIdList:[],clientId:"",serviceId:"",isUsual:"",status:"",drawer1:!1,drawer2:!1,drawer3:!1,drawer1_name:"",drawer3_name:"任务名称",autofocus:!0,loginState:!0,project_style:"",new_project:{new_name:"",business_type:[],radio1:"1",presetTime:"",demand:"",radio2:"1",manager:"",checkList:[],dynamicTags:["标签一","标签二","标签三","标签四"]},add_list:"",checkList:[],business_type_list:[],deptList:[],userList:[],projectData:{},feedbackFileList:[]},r()(t,"business_type_list",[{value:"业务类型1",label:"业务类型1",children:[{value:"客户1",label:"客户1"},{value:"客户1",label:"客户1"}]},{value:"业务类型2",label:"业务类型2",children:[{value:"客户1",label:"客户1"},{value:"客户2",label:"客户2"}]},{value:"业务类型3",label:"业务类型3",children:[{value:"客户1",label:"客户1"},{value:"客户2",label:"客户2"}]}]),r()(t,"client_list",[]),r()(t,"client","广汽本田"),r()(t,"businessList",[]),r()(t,"moreShow",!1),r()(t,"projectListOriginate",[]),r()(t,"initiateProjectListTota",[]),r()(t,"projectListJoin",[]),r()(t,"participateProjectListTota",[]),r()(t,"tabs_activity",1),r()(t,"tab1_act",""),r()(t,"tab2_act",""),r()(t,"feedbackObj",{feedbackId:"",taskId:"",initUserId:""}),r()(t,"feedbackContent",""),r()(t,"disabled0",!0),r()(t,"projectTaskLisInit",[]),r()(t,"deptNameList",[]),r()(t,"taskNameList",[]),r()(t,"taskNameListShow",[]),r()(t,"checkListDept",[]),r()(t,"checkListTask",[]),r()(t,"add_list",""),r()(t,"checkList1",[]),r()(t,"dialogImageUrl",""),r()(t,"dialogVisible",!1),r()(t,"disabled",!1),r()(t,"delayReason",""),r()(t,"pageNum",1),r()(t,"totalnum",0),r()(t,"currentData",[]),r()(t,"pageNum_",1),r()(t,"totalnum_",0),r()(t,"currentData_",[]),t},watch:{checkListDept:function(t,e){for(var s=[],a=this.checkListDept,i=this.taskNameList,n=0;n<a.length;n++){for(var r=a[n],o=[],l=0;l<i.length;l++){var c=i[l],u={};c.deptId==r&&(u=c,o.push(u))}s=s.concat(o)}this.taskNameListShow=s},clientId:function(t,e){this.findProjectList()},serviceId:function(t,e){this.findProjectList()},isUsual:function(t,e){this.findProjectList()},status:function(t,e){this.findProjectList()},update:function(t,e){this.getProjectList()}},methods:{formatData2:function(t){var e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),n=t.getMinutes(),r=t.getSeconds();return s>=1&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),i>=0&&i<=9&&(i="0"+i),n>=0&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r),e+"-"+s+"-"+a+" "+i+":"+n+":"+r},listUniq:function(t,e){for(var s=[t[0]],a=1;a<t.length;a++){for(var i=t[a],n=!1,r=0;r<s.length;r++)if(i[e]==s[r][e]){n=!0;break}n||s.push(i)}return s},projectListNum:function(){this.tabs_activity=this.$store.state.projectListNum},handleChange:function(t){},getAllClientapiList:function(){this.$axios.post("http://pms.guoxinad.com.cn/pas/clientapi/allListAjax").then(this.getAllClientapiListSuss)},getAllClientapiListSuss:function(t){if(200==t.status){var e=t.data,s=[],a="",i=this.$route.query.name;e.forEach(function(t){var e={value:t.clientId,label:t.clientName};s.push(e),i&&t.clientName==i&&(a=t.clientId)}),this.clientIdList=s,this.clientId=a}},showInput:function(){var t=this.new_project.dynamicTags,e=this.add_list,s=this.userList,a=!0;if(""!=e){for(var i="",n=0;n<s.length;n++){var r=s[n];r.value==e&&(i=r.label)}for(var o=0;o<t.length;o++){t[o]==i&&(this.messageWarning("请勿重复添加"),a=!1)}a&&(t.push(i),this.add_list="")}else""==e&&this.messageWarning("信息为空")},handleClose:function(t){this.new_project.dynamicTags.splice(this.new_project.dynamicTags.indexOf(t),1)},handleRemoveFeedback:function(t,e){for(var s=this.feedbackFileList,a=t.response.data,i=0;i<s.length;i++){s[i].localPath==a.path&&s.splice(i,1)}this.feedbackFileList=s,0==e.length?this.disabled0=!0:this.disabled0=!1},handleSuccessFeedback:function(t,e,s){var a=t.data;console.log(a);var i=this.feedbackFileList,n=new Date,r={createTime:n,deleteFlag:!1,feedbackId:"",fileId:"",fileName:a.fileName,localPath:a.path,suffix:a.fileType,taskId:"",updateTime:n};i.push(r),0==s.length?this.disabled0=!0:this.disabled0=!1},widthheight:function(){window.innerWidth,window.innerHeight},getBusinessListAjax:function(){this.$axios.post("/pmbs/api/business/listAjax",{pageNum:1,pageSize:100}).then(this.getBusinessListAjaxSuss)},getBusinessListAjaxSuss:function(t){if(200==t.status){var e=t.data.data.items;e.reverse();for(var s=Math.ceil(e.length/3),a=[],i=0;i<s;i++){var n=e.slice(3*i,3*i+3);a.push(n)}this.businessList=a}},tab1_change:function(t){var e=this.serviceId;this.serviceId=e==t?"":t},tab1_more:function(t){var e=this.moreShow;this.moreShow=!e},tab2_change:function(t,e){this.isUsual===e?(this.tab2_act="",this.isUsual=""):1==t?(this.tab2_act=1,this.isUsual=e):2==t&&(this.tab2_act=2,this.isUsual=e)},tab3_change:function(t){var e=this.status;this.status=e==t?"":t},table_tab:function(t){this.tabs_activity=t,this.$store.commit("projectListShow",t)},feedback:function(t,e){this.drawer1=!0,this.drawer1_name=e,this.proId=t;var s="?proId="+t+"&userId="+this.userId;this.getProjectTaskListInit(s),0!=this.feedbackFileList.length&&(this.$refs.upload.clearFiles(),this.feedbackFileList=[])},aredact:function(t){this.$emit("getData",t)},delayAchieve:function(){this.drawer3=!1;var t=this.proId,e=this.formatData2(new Date),s={proId:t,status:5,delayReason:this.delayReason,overTime:e};this.getProjectSave(s)},achieve:function(t){var e=this;this.proId=t.proId,new Date(new Date(t.expertTime).getTime()+864e5)<new Date?(this.drawer3=!0,this.drawer3_name=t.proName):this.$confirm("是否确认此操作？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(){var s=e.formatData2(new Date),a={proId:t.proId,status:3,overTime:s};e.getProjectSave(a)}).catch(function(t){e.$message({type:"info",message:"已取消"})})},getProjectSave:function(t){this.$axios.post("/pmbs/api/project/save",t).then(this.getProjectSaveSuss)},getProjectSaveSuss:function(t){var e=t.data.data;200==t.status&&(3!=e.status&&5!=e.status||this.messageWin("项目已完成"),this.getProjectList())},expurgate:function(t){this.delProject(t)},getProjectTaskListInit:function(t){this.$axios.post("/pmbs/api/project/projectOfTask"+t).then(this.getProjectTaskListInitSuss)},getProjectTaskListInitSuss:function(t){if(200==t.status){var e=t.data.data;this.projectTaskLisInit=e;for(var s=[],a=[],i=0;i<e.length;i++){var n=e[i],r={deptId:n.deptId,deptName:n.deptName},o={deptId:n.deptId,deptName:n.deptName,taskId:n.taskId,taskName:n.taskName};a.push(o),s.push(r)}s=this.listUniq(s,"deptId"),this.deptNameList=s,this.taskNameList=a}},projectFeedback:function(){for(var t=new Date,e=this.checkListTask.join(","),s=this.feedbackFileList,a=0;a<s.length;a++){s[a];s[a].taskId=e}var i={feedback:this.feedbackContent,feedbackFileList:s,initUserId:this.userId,proId:this.proId,moreTaskId:e,updateTime:t};console.log(i),""==i.feedback||""==i.moreTaskId?this.messageError("信息不能为空"):this.$axios.post("/pmbs/api/project/projectFeedback",i).then(this.projectFeedbackSuss)},projectFeedbackSuss:function(t){200==t.status&&(this.messageWin("反馈成功"),this.drawer1=!1,this.feedbackContent="",this.taskFeedbackId="",this.getProjectList())},delProject:function(t){var e="?projectId="+t;this.$axios.post("/pmbs/api/project/delProject"+e).then(this.delProjectSuss)},delProjectSuss:function(t){200==t.status&&(this.messageWin("项目删除成功"),this.getProjectList())},pathPrpjectDetails:function(t,e){this.$router.push({path:"/home/components/project_details",query:{id:t,type:e}})},findProjectList:function(){var t=this.userId,e=this.clientId,s=this.serviceId,a=this.isUsual,i=this.status,n="&clientId="+e,r="&serviceId="+s,o="&isUsual="+a,l="&status="+i;""==e&&(n=""),""==s&&(r=""),""===a&&(o=""),""==i&&(l="");var c="?inituserid="+t+n+r+o+l;this.getProjectListAjax(c),this.getProjectUserjoinproject(c)},getProjectList:function(){var t=this.userId,e="?inituserid="+t,s="?inituserid="+t;this.getProjectListAjax(e),this.getProjectUserjoinproject(s)},getProjectListAjax:function(t){this.loading=!0,this.$axios.post("/pmbs/api/project/listAjax"+t).then(this.getProjectListAjaxSuss)},getProjectListAjaxSuss:function(t){if(this.loading=!1,200==t.status){for(var e=t.data.data,s=0;s<e.length;s++){for(var a=e[s],n=0,r=0;r<a.listTask.length;r++){var o=a.listTask[r];3!=o.status&&1!=o.isIgnore&&n++}e[s].unfintask=n}this.projectListOriginate=e,this.totalnum=this.projectListOriginate.length;var l=JSON.parse(i()(this.projectListOriginate));this.currentData=l.splice(10*(this.pageNum-1),10*(this.pageNum-1)+10)}},getProjectUserjoinproject:function(t){this.loading=!0,this.$axios.post("/pmbs/api/project/userjoinproject"+t).then(this.getProjectUserjoinprojectSuss)},getProjectUserjoinprojectSuss:function(t){if(this.loading=!1,200==t.status){for(var e=t.data.data,s=0;s<e.length;s++)e[s];this.projectListJoin=e,this.totalnum_=this.projectListJoin.length;var a=JSON.parse(i()(this.projectListJoin));this.currentData_=a.splice(30*(this.pageNum-1),30*(this.pageNum-1)+30)}},handleSizeChange:function(){},handleCurrentChange:function(t){this.pageNum=t,this.totalnum=this.projectListOriginate.length;var e=JSON.parse(i()(this.projectListOriginate));this.currentData=e.splice(30*(this.pageNum-1),30*(this.pageNum-1)+30)},handleSizeChange_:function(){},handleCurrentChange_:function(t){this.pageNum_=t,console.log(t),this.totalnum_=this.projectListJoin.length;var e=JSON.parse(i()(this.projectListJoin));this.currentData_=e.splice(10*(this.pageNum_-1),10*(this.pageNum_-1)+10),console.log(this.currentData_)},empty:function(){this.drawer3=!1,this.drawer2=!1,this.feedbackContent="",this.result=""},messageWin:function(t){this.$message({message:t,type:"success"})},messageWarning:function(t){this.$message({message:t,type:"warning"})},messageError:function(t){this.$message.error(t)}},mounted:function(){this.widthheight(),this.getProjectList(),this.projectListNum(),this.getAllClientapiList(),this.getBusinessListAjax()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project",style:t.project_style},[s("el-row",[s("el-col",{staticClass:"top",attrs:{span:24}},[s("el-col",{attrs:{span:5}},[s("el-col",{staticClass:"title",attrs:{span:4}},[t._v("客户")]),t._v(" "),s("el-col",{attrs:{span:20}},[s("el-select",{staticClass:"filtrateClient",attrs:{filterable:"",clearable:"",placeholder:"全部",size:"small"},model:{value:t.clientId,callback:function(e){t.clientId=e},expression:"clientId"}},t._l(t.clientIdList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),t._v(" "),s("el-col",{staticClass:"tab tab1",attrs:{span:7}},[s("el-button-group",[t._l(t.businessList[0],function(e,a){return s("el-button",{key:a,class:[t.serviceId==e.businessId?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(s){return t.tab1_change(e.businessId)}}},[t._v(t._s(e.businessName))])}),t._v(" "),s("el-button",{class:[1==t.moreShow?"act more":"more"],staticStyle:{"border-left":"0"},attrs:{type:"primary",plain:"",size:"small",icon:"el-icon-more"},on:{click:function(e){return t.tab1_more()}}})],2),t._v(" "),s("el-card",{directives:[{name:"show",rawName:"v-show",value:t.moreShow,expression:"moreShow"}],staticClass:"box-card"},t._l(t.businessList,function(e,a){return s("el-button-group",{directives:[{name:"show",rawName:"v-show",value:0!=a,expression:"index != 0"}],key:a,staticClass:"moreBus"},t._l(e,function(e,a){return s("el-button",{key:a,class:[t.serviceId==e.businessId?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(s){return t.tab1_change(e.businessId)}}},[t._v(t._s(e.businessName))])}),1)}),1)],1),t._v(" "),s("el-col",{staticClass:"tab tab2",attrs:{span:4}},[s("el-button-group",[s("el-button",{class:["1"==t.tab2_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab2_change(1,1)}}},[t._v("专项")]),t._v(" "),s("el-button",{class:["2"==t.tab2_act?"act":""],attrs:{type:"primary",plain:"",size:"small"},on:{click:function(e){return t.tab2_change(2,0)}}},[t._v("日常")])],1)],1),t._v(" "),s("el-col",{staticClass:"tab tab3",attrs:{span:8}},[s("el-button-group",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.tab3_change(1)}}},[t._v("新项目")]),t._v(" "),s("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.tab3_change(4)}}},[t._v("延期")]),t._v(" "),s("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(e){return t.tab3_change(2)}}},[t._v("审核中")]),t._v(" "),s("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.tab3_change(1)}}},[t._v("执行中")])],1)],1)],1),t._v(" "),152!=t.userId?s("el-col",{staticClass:"tabs",attrs:{span:24}},[s("div",{class:[1==t.tabs_activity?"act":""],on:{click:function(e){return t.table_tab(1)}}},[t._v("我发起")]),t._v(" "),s("div",{class:[2==t.tabs_activity?"act":""],on:{click:function(e){return t.table_tab(2)}}},[t._v("我参与")])]):t._e(),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:1==t.tabs_activity,expression:"tabs_activity == 1"}],staticClass:"table table1",attrs:{span:24}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.currentData,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"}}},[s("el-table-column",{attrs:{prop:"proName",label:"名称",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return s("el-link",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.pathPrpjectDetails(e.row.proId,0)}}},[t._v(t._s(e.row.proName))])}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?s("span",{staticClass:"state_color1"},[t._v("执行中")]):2==e.row.status?s("span",{staticClass:"state_color2"},[t._v("审核中")]):3==e.row.status?s("span",{staticClass:"state_color3"},[t._v("完成")]):4==e.row.status?s("span",{staticClass:"state_color4"},[t._v("延期")]):5==e.row.status?s("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"num",label:"总任务数/待完成"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.listTask.length)+"/"+t._s(e.row.unfintask))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"expertTime",label:"预计时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$date(e.row.expertTime)))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"overTime",label:"完成时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$time(e.row.overTime)))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"realName",label:"下达人"}}),t._v(" "),s("el-table-column",{attrs:{prop:"tag",label:"操作",width:"180","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.status?s("el-button",{attrs:{slot:"reference",size:"mini",type:"info"},on:{click:function(s){return t.feedback(e.row.proId,e.row.proName)}},slot:"reference"},[t._v("反馈")]):t._e(),t._v(" "),2==e.row.status?s("el-button",{attrs:{slot:"reference",size:"mini",type:"primary"},on:{click:function(s){return t.achieve(e.row)}},slot:"reference"},[t._v("完成")]):t._e(),t._v(" "),1==e.row.status||4==e.row.status?s("el-button",{attrs:{slot:"reference",size:"mini",type:"info"},on:{click:function(s){return t.aredact(e.row)}},slot:"reference"},[t._v("编辑")]):t._e(),t._v(" "),s("el-popconfirm",{attrs:{title:"确认执行此操作吗？"},on:{onConfirm:function(s){return t.expurgate(e.row.proId)}}},[1==e.row.status||4==e.row.status?s("el-button",{attrs:{slot:"reference",size:"mini",type:"info"},slot:"reference"},[t._v("删除")]):t._e()],1)]}}])})],1),t._v(" "),s("div",{staticClass:"paging"},[s("el-pagination",{attrs:{"current-page":t.pageNum,layout:"total, prev, pager, next","page-size":30,total:t.totalnum,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:2==t.tabs_activity,expression:"tabs_activity == 2"}],staticClass:"table table2",attrs:{span:24}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.currentData_,"header-cell-style":{background:"rgb(236, 235, 235)",color:"#000"}}},[s("el-table-column",{attrs:{prop:"name",label:"名称",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return s("el-link",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.pathPrpjectDetails(e.row.proId,1)}}},[t._v(t._s(e.row.proName))])}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"state_text",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?s("span",{staticClass:"state_color1"},[t._v("执行中")]):2==e.row.status?s("span",{staticClass:"state_color2"},[t._v("审核中")]):3==e.row.status?s("span",{staticClass:"state_color3"},[t._v("完成")]):4==e.row.status?s("span",{staticClass:"state_color4"},[t._v("延期")]):5==e.row.status?s("span",{staticClass:"state_color3"},[t._v("延期完成")]):t._e()]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"expertTime",label:"预计时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$date(e.row.expertTime)))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"overTime",label:"完成时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$time(e.row.overTime)))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"realName",label:"下达人","filter-placement":"bottom-end"}})],1),t._v(" "),s("div",{staticClass:"paging"},[s("el-pagination",{attrs:{"current-page":t.pageNum_,"page-size":30,layout:"total, prev, pager, next",total:t.totalnum_,background:""},on:{"size-change":t.handleSizeChange_,"current-change":t.handleCurrentChange_}})],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"任务",visible:t.drawer1,"with-header":!1},on:{"update:visible":function(e){t.drawer1=e}}},[s("el-row",{staticClass:"feedback"},[s("el-col",{staticClass:"content",attrs:{span:24}},[s("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer1_name))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("反馈")]),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.feedbackContent,callback:function(e){t.feedbackContent=e},expression:"feedbackContent"}})],1),t._v(" "),s("br"),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("接受")]),t._v(" "),s("el-col",{attrs:{span:19}},[s("el-checkbox-group",{model:{value:t.checkListDept,callback:function(e){t.checkListDept=e},expression:"checkListDept"}},t._l(t.deptNameList,function(e){return s("el-checkbox",{key:e.deptId,attrs:{label:e.deptId}},[t._v(t._s(e.deptName))])}),1)],1),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("任务")]),t._v(" "),s("el-col",{attrs:{span:19}},[s("el-checkbox-group",{model:{value:t.checkListTask,callback:function(e){t.checkListTask=e},expression:"checkListTask"}},t._l(t.taskNameListShow,function(e){return s("el-checkbox",{key:e.index,attrs:{label:e.taskId}},[t._v(t._s(e.taskName))])}),1)],1),t._v(" "),s("el-col",{staticClass:"Upload",attrs:{span:24}},[s("el-divider"),t._v(" "),s("el-upload",{ref:"upload",staticClass:"elementUpload",attrs:{action:"/pmbs/file/upload?upType=0&demandType=1","on-remove":t.handleRemoveFeedback,"on-success":t.handleSuccessFeedback,limit:1}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.disabled0,expression:"disabled0"}],attrs:{size:"mini",type:"primary"}},[t._v("点击上传文档")])],1)],1)],1),t._v(" "),s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.projectFeedback}},[t._v("提交")])],1)],1)],1),t._v(" "),s("el-drawer",{attrs:{title:"任务",visible:t.drawer3,"with-header":!1},on:{"update:visible":function(e){t.drawer3=e}}},[s("el-row",{staticClass:"feedback"},[s("el-col",{attrs:{span:24}},[s("el-col",{staticClass:"title",attrs:{span:24}},[t._v(t._s(t.drawer3_name))]),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:6}},[t._v("延期原因")]),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-input",{attrs:{type:"textarea",rows:9,placeholder:"请输入内容"},model:{value:t.delayReason,callback:function(e){t.delayReason=e},expression:"delayReason"}})],1)],1),t._v(" "),s("el-col",{staticClass:"batton",attrs:{span:12,offset:7}},[s("el-button",{attrs:{size:"small",type:"info"},on:{click:t.empty}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.delayAchieve}},[t._v("提交")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(t){s("+r0C")},"data-v-555f2206",null);e.default=c.exports}});