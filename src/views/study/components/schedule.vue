<template>
  <div class="course-week">
    <div class="week-top">
      <div class="week-btn-wrap">
        <span @click="getLastWeek">上周</span>
        <span @click="getCurWeek">本周</span>
        <span @click="getNextWeek">下周</span>
      </div>
      <span class="w-today-date"> {{ todayDate }}</span>
      <div class="w-choose-status">
        <div v-for="sta in cardStatus">
          <span class="square" :style="{background:sta.color}"></span>
          <span class="title">{{ sta.title }}</span>
        </div>
      </div>
    </div>
    <div class="week-table">
      <div class="table-header">
        <div class="table-week">
          <template v-for="(item,index) of weeks">
            <span class="w-first" v-if="index===0" :key="index">{{ item }}</span>
            <span v-else :key="index+''">{{ item }}</span>
          </template>
        </div>
        <div class="w-table-date">
          <template v-for="(item,index) of months">
            <span class="w-first" v-if="index===0" :key="index">
            </span>
            <template v-else>
              <span :key="index" class="w-day-item" :class="{'w-isCurDate':item&&item.isCurDate}">
                {{ `${item && item.isCurDate ? item && item.showDate  || '' : item && item.showDate || ''}` }}
              </span>
            </template>
          </template>
        </div>
      </div>
      <div class="w-time-period-list">
        <ul class="w-time-period-row">
          <!--循环时段，看时段有多少个-->
          <template v-if="planList.length>0">
            <li class="w-time-period-col" v-for="(period,p_index) in planList"
                :key="`period${p_index}`">
              <!--第一列显示时段-->
              <div class="w-time-period"> {{ period.timePeriod }}</div>
              <!-- 后面显示周一到周日的计划-->
              <div class="w-row-day">
                <!-- 循环显示每周的日期-->
                <template v-for="(month,m_index) of months">
                  <!-- v-if="month" 去除数据处理的时候移除数组第一个为empty的问题-->
                  <div v-if="month" :key="`month${m_index}`" class="w-things" @click="handleCardDetail(month,period)">
                    <!-- 循环每个时间段的计划-->
                    <template v-for="(card,t_index) of period.schedule">
                      <template v-for="(single,sIndex) in card[month.date]">
                        <template v-if="!card.isExpend">
                          <div v-if="single.date===month.date&&sIndex<hasNumExpend"
                               :key="`thing${sIndex}`"
                               class="w-thing-item"
                               @click="handleDetail(single)"
                               :style="{background: cardStatus[single.status].color}">
                            <slot name="thing" :row="single"></slot>
                          </div>
                        </template>
                        <template v-if="card.isExpend">
                          <div v-if="single.date===month.date"
                               :key="`thing${sIndex}`"
                               class="w-thing-item"
                               @click="handleDetail(single)"
                               :style="{background: cardStatus[single.status].color}">
                            <slot name="thing" :row="single"></slot>
                          </div>
                        </template>
                        <div class="w_expand"
                             v-if="card[month.date].length>hasNumExpend&&(card[month.date].length-1)===sIndex&&!card.isExpend&&single.date===month.date"
                             @click="handleExpand(card)">展开
                        </div>
                        <div class="w_shrink"
                             v-if="card[month.date].length>hasNumExpend&&(card[month.date].length-1)===sIndex&&card.isExpend&&single.date===month.date"
                             @click="handleExpand(card)">收缩
                        </div>
                      </template>
                    </template>
                  </div>
                </template>
              </div>
            </li>
          </template>
          <div class="w-noMore" v-else><span>暂无数据</span></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'WSchedule',
  props: {
    planList: {
      type: Array<any>,
      default: []
    },
    //卡片状态
    cardStatus: {
      type: Object,
      default: () => {
        return {
          1: {
            title: '已过期',
            color: '#9CADADB7'
          },
          2: {
            title: '进行中',
            color: '#FF6200'
          },
          3: {
            title: '未开始',
            color: '#3291F8'
          },
        }
      }
    },
    //第一列是星期几
    isFirstDayOfMondayOrSunday: {
      type: Number,
      default: 1,
    },
    hasNumExpend:{
      type:Number,
      default:2
    }
  },
  data () {

    return {
      weeks: [
        '时段', '一', '二', '三', '四', '五', '六', '日',
      ],
      todayDate: '',
      months: [{
        date: '',
        showDate: '',
        timestamp: new Date().getTime(),
        isCurDate: false,
      }],
      curDate: new Date(),
      nowDate: new Date(),
    }
  },
  watch: {
    isFirstDayOfMondayOrSunday: {
      handler (val) {
        if (val > 1) {
          let arr = ['一', '二', '三', '四', '五', '六', '日']
          const arr1 = arr.slice(val - 1)
          const arr2 = arr.slice(0, val - 1)
          this.weeks = ['时段', ...arr1, ...arr2]
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.getCurWeek()
  },
  methods: {
    formatDate(date:any) {
    var year = date.getFullYear();
    var months = date.getMonth() + 1;
    var month = (months < 10 ? '0' + months : months).toString();
    var day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()).toString();
    return {
        year: year.toString(),
        month,
        day
    }
},
    getCurDay() {
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    return `${year}-${month}-${date}`
},


    //展开与缩放操作
    handleExpand (row:any) {
      row.isExpend = !row.isExpend
    },
    /**
     * 获取 时间
     * @param time
     */
    getWeek (time:any) {
      this.curDate = new Date(time)
      //当前是周几
      const whichDay = time.getDay()
      let num = 0
      if (this.isFirstDayOfMondayOrSunday <= whichDay) {
        num = this.isFirstDayOfMondayOrSunday
      } else {
        num = this.isFirstDayOfMondayOrSunday - 7
      }
      const weekDay = time.getDay() - num
      time = this.addDate(time, weekDay * -1)
      for (let i = 0; i < 7; i++) {
        const { year, month, day } = this.formatDate(i === 0 ? time : this.addDate(time, 1))
        this.months.push({
          date: `${year}-${month}-${day}`,
          showDate: Number(day)+'',
          timestamp: new Date(`${year}-${month}-${day}`).getTime(),
          isCurDate: this.getCurDay() === `${year}-${month}-${day}`,
        })
      }
      this.months.sort((a:any, b:any) => a.timestamp - b.timestamp)
      delete this.months[0]
      this.todayDate = `${this.months[1].date} ~ ${this.months[this.months.length - 1].date}`
    },
    /**
     * 处理日期
     * @param date
     * @param n
     * @returns {*}
     */
    addDate (date:Date, n:number) {
      date.setDate(date.getDate() + n)
      return date
    },
    /**
     * 上周
     */
    getLastWeek () {
      const date = this.addDate(this.curDate, -7),
          { year, month, day } = this.formatDate(date),
          dateObj = {
            date: `${year}-${month}-${day}`,
            timestamp: new Date(`${year}-${month}-${day}`).getTime()
          }
      this.dealDate(date)
      this.$emit('changeWeek', dateObj)
    },
    /**
     * 本周
     */
    getCurWeek () {
      const { year, month, day } = this.formatDate(new Date()),
          dateObj = {
            date: `${year}-${month}-${day}`,
            timestamp: new Date(`${year}-${month}-${day}`).getTime()
          }
      this.dealDate(new Date())
      this.$emit('changeWeek', dateObj)
    },
    /**
     * 下周
     */
    getNextWeek () {
      const date = this.addDate(this.curDate, 7),
          { year, month, day } = this.formatDate(date),
          dateObj = {
            date: `${year}-${month}-${day}`,
            timestamp: new Date(`${year}-${month}-${day}`).getTime()
          }
      this.dealDate(date)
      this.$emit('changeWeek', dateObj)
    },
    /**
     * 显示当天日期状态
     * @param date
     */
    dealDate (date:any) {
      this.months = [{
        date: '',
        showDate: '',
        timestamp: new Date().getTime(),
        isCurDate: false,
      }]
      this.getWeek(date)
      const curDate = this.getCurDay()
      this.months.forEach(item => {
        item.isCurDate = item.date === curDate
      })
    },
    /**
     * 点击卡片子内容查看详情
     * @param row
     */
    handleDetail (row:any) {
      this.$emit('handleDetail', row)
    },
    /**
     * 点击卡片查看全部内容
     * @param month
     * @param period
     */
    handleCardDetail (month:any, period:any) {
      this.$emit('handleCardDetail', { ...month, ...period })
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}

ul, li {
  margin: 0;
  padding: 0;
}

.course-week {
  width: 100%;
  border: 1px solid #ddd;
  padding: 1%;
  box-sizing: border-box;
}

.week-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 1%;
  box-sizing: border-box;

}

.week-top .week-btn-wrap {
  width: 200px;
  display: flex;
  justify-content: space-around;
  color: #409EFF;
}

.week-top .week-btn-wrap span {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.w-today-date {
  font-weight: bold;
  font-size: 16px;
}

.w-choose-status {
  display: flex;
  justify-content: flex-end;
  width: 200px;
}

.w-choose-status > div {
  width: 100%;
  flex: 1;
  display: flex;
  padding: 0 2%;
  white-space: nowrap;
  line-height: 20px;
  box-sizing: border-box;
}

.w-choose-status > div .square {
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  box-sizing: border-box;
}

.w-choose-status > div .title {
  display: flex;
  align-items: center;
  line-height: 16px;
  padding-left: 4px;
  font-size: 14px;
  box-sizing: border-box;
}


.week-table {
  display: flex;
  flex-direction: column;
}

.week-table .table-header {
  width: 100%;
  height: 80px;
  background: #EAEDF2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #EAEDF2;
  box-sizing: border-box;
}

.table-header .w-table-date, .table-week {
  width: 100%;
  height: 40px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;

}

.table-header .w-table-date > span, .table-week > span {
  flex: 1;
  color: #000;
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}


.w-table-date .w-day-item, .table-week .w-day-item {
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.week-table .w-time-period-list {
  width: 100%;
}

.w-time-period-list .w-time-period-row {
  width: 100%;
  min-height: 60px;
}

.w-time-period-col {
  width: 100%;
  min-height: 60px;
  display: flex;
}

.w-time-period-col .w-time-period {
  width: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #EAEDF2;
  border-bottom: 1px solid #EAEDF2;
  box-sizing: border-box;
}

.w-time-period-col .w-row-day {
  width: 87.5%;
  display: flex;
  justify-content: center;
}

.w-row-day .w-things {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #EAEDF2;
  border-bottom: 1px solid #EAEDF2;
  box-sizing: border-box;
}

.w-row-day .w-things:last-child {
  border-right: 1px solid #EAEDF2;
}

.w-things .w-thing-item {
  display: flex;
  width: 80%;
  font-size: 14px;
  flex-direction: column;
  justify-content: space-around;
  min-height: 90px;
  border-radius: 10px;
  margin: 2% 1%;
  padding: 1% 2%;
  cursor: pointer;
  color: #fff;
  background: #FF6200;
  box-sizing: border-box;
  transition: all 1s linear .5s;
}


.w-isCurDate {
  color: #FF2525 !important;
}

.w-noMore {
  min-height: 200px;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(156, 173, 173, 0.3);
  color: #9CADADB7;
  box-sizing: border-box;
}

.w_expand, .w_shrink {
  color: #0A98D5;
  cursor: pointer;
  width: 100%;
  padding: 2% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>