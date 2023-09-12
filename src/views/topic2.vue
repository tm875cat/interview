<template>
  <header>供餐選擇器</header>

  <div class="week" v-for="(item, index) in week" :key="item.title">
    <div class="week_title">{{ item.title }}</div>
    <input type="checkbox" v-model="item.provideMeals" />
    <div class="meals_text" v-if="item.provideMeals === false">本日不供餐</div>
    <div class="meals_text" v-else>本日供餐</div>
    <div class="provideMeals">
      {{ item.mealsText }}
    </div>
    <div class="select_list" v-if="item.provideMeals === true">
      <select v-model="item.startTime" @change="updateTime(index)">
        <option v-for="(item) in time" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <select v-model="item.endTime" @change="updateTime(index)">
        <option v-for="(item) in time" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      week: [
        {
          title: "星期日",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期一",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期二",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期三",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期四",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期五",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
        {
          title: "星期六",
          state: "111111111111111111111111111111111111111111111111",
          provideMeals: false,
          startTime: "00:00",
          endTime: "23:59",
        },
      ],
      time: [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "23:59",
      ],
    };
  },
  computed: {





},
  methods: {
    updateTime(index) {
      //更新起始時間
      let stime = this.week[index].startTime; //開始的時間
      let stimeOrder = this.time.indexOf(stime, 0); //設定開始時間段
      let endtime = this.week[index].endTime; //結束時間
      let endtimeOrder = this.time.indexOf(endtime, 0); //設定結束時間段
      //檢查開始時間需小於結束時間
      if (endtimeOrder <= stimeOrder) {
        alert("開始時間需小於結束時間");
        this.week[index].state =
          "111111111111111111111111111111111111111111111111"; //重制開始時間
        this.week[index].startTime = "00:00";
        this.week[index].endTime = "23:59";
        return;
      }
      //改變state
      this.week[index].state =
        "000000000000000000000000000000000000000000000000"; //重制開始時間
      let stateArray = this.week[index].state.split(""); //state轉字串陣列
      stateArray[stimeOrder] = "1"; //state開始時間更新
      for (let i = stimeOrder; i < endtimeOrder; i++) {
        stateArray[i] = "1";
      }
      this.week[index].state = stateArray.join("");
      // console.log("時間陣列", this.week[index].state);
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
}
option {
  outline: red solid;
}
.week {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  &_title {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .meals_text {
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
