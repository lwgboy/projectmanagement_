<template>
  <div id="gantti">
    <el-row>
      <el-col :span="24">
        <el-col v-if="taskList && projectShowDetail" :span="22" :offset="2" class="title">
          <i class="el-icon-arrow-left" @click="return_()"></i>
          {{projectShowDetail.proName}}
        </el-col>
        <!-- <div class="change-mode" @click="to_big">+ 放大</div>
        <div class="change-mode" @click="to_small">- 缩小</div> -->
        <el-col v-if="taskList && projectShowDetail" :span="20" :offset="2" class="gantt_time"></el-col>
        <el-col v-if="!taskList || !projectShowDetail" :span="22" :offset="2">
          <el-alert title="暂无数据..." type="success" :closable="false"></el-alert>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import wlGantt from '@/components/gantt.vue'
// import wlGantt from '@/pages/wl-gantt'

export default {
  name: 'gantti',
  components: {
    wlGantt
  },
  data() {
    return {
      userId: this.$store.state.user.userId, // 用户ID
      data: [],
      taskList: [], // 项目下的任务
      projectShowDetail: {}, // 项目详情
      timeshow: ''
    }
  },
  methods: {
    to_big(){
      this.timeshow.to_big()
    },
    to_small(){
      this.timeshow.to_small()
    },
    formatData(date) {
      // var date = new Date();
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()

      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      return year + '-' + month + '-' + strDate
    },
    timeChange(row) {
      // console.log(row)
    },
    // 获取页面传参
    getParams() {
      let id = this.$route.query.id
      // console.log(id)
    },
    // 获取页面传参
    getParams(sousuo) {
      let proId = this.$route.query.id
      let type = this.$route.query.type
      // this.proId = proId
      // this.type = type
      // console.log(id)
      if (type == 0) {
        this.getProjectOfTask(proId)
      } else if (type == 1) {
        this.getProjectOfUserTask(proId)
      }
      this.getProjectShowDetail(proId)
    },
    // 获取项目需求
    getProjectShowDetail(proId) {
      let data = `?proId=${proId}`
      this.$axios
        .post('/pmbs/api/project/showDetail' + data)
        .then(this.getProjectShowDetailSuss)
    },
    // 获取项目需求回调/api/project/projectOfUserTask
    getProjectShowDetailSuss(res) {
      // console.log(res)
      if (res.status == 200) {
        this.projectShowDetail = res.data.data
      }
    },
    // 获取项目详情-我发起
    getProjectOfTask(proId, sousuo) {
      // this.loading = true
      let userId = this.userId
      let data = `?proId=${proId}&userId=${userId}`
      this.$axios
        .post('/pmbs/api/project/projectOfTask' + data)
        .then(this.getProjectOfTaskSuss)
    },
    // 获取项目详情-我发起回调
    getProjectOfTaskSuss(res) {
      // console.log(res)
      if (res.status == 200) {
        let taskList = res.data.data
        this.taskList = taskList
        this.gantt()
      }
    },
    // 获取项目详情-我参与
    getProjectOfUserTask(proId, sousuo) {
      let userId = this.userId
      let data = `?proId=${proId}&userId=${userId}`
      this.$axios
        .post('/pmbs/api/project/projectOfUserTask' + data)
        .then(this.getProjectOfUserTaskSuss)
    },
    // 获取项目详情-我参与回调
    getProjectOfUserTaskSuss(res) {
      if (res.status == 200) {
        let taskList = res.data.data
        this.taskList = taskList
        this.gantt()
      }
    },
    // 甘特图
    gantt() {
      // console.log("gantt")
      let that = this
      let taskList = this.taskList
      // console.log(taskList)
      let ganttList = []

      for (let i = 0; i < taskList.length; i++) {
        let element = taskList[i]
        let ganttListData = {
          gunter_id: i,
          params: {
            title: element.deptName,
            execute_pop: element.doUserName,
            state_text: '',
            state: element.status,
            start_time: element.updateTime,
            end_time: ''
          },
          start_time: new Date(element.updateTime).getTime(),
          end_time: '',
          bg_color: '',
          level: 1
        }
        ganttListData.params.start_time = that.$date0(element.createTime)
        // for (let i = 0; i < data.length; i++) {
        //   const element = data[i]
        //   if (element.params.state == 1) {
        //     element.bg_color = 'rgb(1, 176, 114)'
        //   } else if (element.params.state == 2) {
        //     element.bg_color = 'rgb(236, 185, 21)'
        //   } else if (element.params.state == 3) {
        //     element.bg_color = 'rgb(172, 171, 171)'
        //   } else if (element.params.state == 4) {
        //     element.bg_color = 'rgb(255, 0, 0)'
        //   }
        // }
        if (element.status == 1) {
          ganttListData.bg_color = 'rgb(1, 176, 114)'
          ganttListData.params.state_text = '执行中'
        } else if (element.status == 2) {
          ganttListData.bg_color = 'rgb(236, 185, 21)'
          ganttListData.params.state_text = '审核中'
        } else if (element.status == 3) {
          ganttListData.bg_color = 'rgb(172, 171, 171)'
          ganttListData.params.state_text = '已完成'
        } else if (element.status == 4) {
          ganttListData.bg_color = 'rgb(255, 0, 0)'
          ganttListData.params.state_text = '延期'
        } else if (element.status == 5) {
          ganttListData.bg_color = 'rgb(172, 171, 171)'
          ganttListData.params.state_text = '延期完成'
        }
        if (element.overTime == null) {
          ganttListData.params.end_time = that.$date0(new Date())
          ganttListData.end_time = new Date().getTime()
        } else {
          ganttListData.params.end_time = that.$date0(element.overTime)
          ganttListData.end_time = new Date(
            element.expertTime.replace(/-/g, '/')
          ).getTime()
        }
        ganttList.push(ganttListData)
      }
      // console.log(ganttList)
      // 1 执行中 2 审核中 3 已完成 4 延期
      let data = ganttList
      // [
      //   {
      //     gunter_id: 1,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '延期',
      //       state: 4,
      //       start_time: '2018-12-20',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-20').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(255, 0, 0)',
      //     level: 1
      //   },
      //   {
      //     gunter_id: 2,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '审核中',
      //       state: 2,
      //       start_time: '2018-12-19',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-19').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(236, 185, 21)',
      //     level: 1
      //   },
      //   {
      //     gunter_id: 3,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '执行中',
      //       state: 1,
      //       start_time: '2018-12-19',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-19').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(1, 176, 114)',
      //     level: 1
      //   },
      //   {
      //     gunter_id: 4,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '已完成',
      //       state: 3,
      //       start_time: '2018-12-19',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-19').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(172, 171, 171)',
      //     level: 1
      //   },
      //   {
      //     gunter_id: 5,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '已完成',
      //       state: 3,
      //       start_time: '2018-12-19',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-19').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(172, 171, 171)',
      //     level: 1
      //   },
      //   {
      //     gunter_id: 6,
      //     params: {
      //       title: '网络营销',
      //       execute_pop: '张三',
      //       state_text: '已完成',
      //       state: 3,
      //       start_time: '2018-12-19',
      //       end_time: '2019-1-3'
      //     },
      //     start_time: new Date('2018-12-19').getTime(),
      //     end_time: new Date('2019-1-3').getTime(),
      //     bg_color: 'rgb(172, 171, 171)',
      //     level: 1
      //   }
      // ]

      // console.log(data)
      let th_data = {
        title: {
          value: '部门',
          width: 130,
          showToast: true,
          listen_click: false
        },
        execute_pop: {
          value: '执行人',
          width: 90,
          showToast: true,
          chooseTime: false
          // time_mode: 1
        },
        state_text: {
          value: '状态',
          width: 90,
          showToast: true,
          chooseTime: false
          // time_mode: 2
        }
      }
      let num = (data.length + 1) * 45 + 1
      let height = num + 'px'
      let projectShowDetail = this.projectShowDetail
      let start_time = new Date(projectShowDetail.createTime).getTime()
      let end_time = ''
      if (projectShowDetail.overTime == null) {
        end_time = new Date().getTime()
      } else {
        end_time = new Date(projectShowDetail.overTime).getTime()
      }

      this.$gante({
        container: '.gantt_time',
        ganteData: data,
        start_time: start_time,
        end_time: end_time,
        tabe_width: '360px',
        open: true,
        height: height,
        time_mode: 1,
        th_data: th_data,
        onEdit(data) {
          // console.log(data)
        },
        onClick(data) {
          // console.log(data)
        }
      }).then(res=>{
        this.timeshow = res
      })
      // console.log('gantt')
    },
    // 返回上一页
    return_() {
      this.$router.go(-1)
      sessionStorage.setItem('refresh', 0)
    },
    refresh() {
      // console.log(this.$store.state.refresh)
      // location.reload()
      var refresh = sessionStorage.getItem('refresh')
      if (refresh == 0) {
        location.reload()
        sessionStorage.setItem('refresh', 1)
      }
    }
  },
  created() {
    // let seif = this
    // seif.getParams()
  },
  // 钩子函数 实例挂载之后
  mounted() {
    this.getParams()
    this.gantt()
    this.refresh()
    // console.log(this.$store.state.refresh)
  },
  // 钩子函数 实例更新之后
  updated() {
    // this.gantt()
  }
}
</script>

<style scoped>
#gantti {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 25px 0;
}
.title {
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  color: rgb(16, 16, 16);
  line-height: 54px;
  margin-bottom: 24px;
  margin-top: 49px;
}
.title i {
  margin-right: 13px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>