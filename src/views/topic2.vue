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
      <select v-model="item.startTime" @change="updateStartTime(index)">
        <option v-for="(item, index) in time" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <select v-model="item.endTime" @change="updateStartTime(index)">
        <option v-for="(item, index) in time" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      {{ item.state }}
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
      // time: [
      //   {
      //     title: "00:00",
      //     state: true,
      //     order: 0,
      //   },
      //   {
      //     title: "00:30",
      //     state: true,
      //     order: 1,
      //   },
      //   {
      //     title: "01:00",
      //     state: true,
      //     order: 2,
      //   },
      //   {
      //     title: "01:30",
      //     state: true,
      //     order: 3,
      //   },
      //   {
      //     title: "02:00",
      //     state: true,
      //     order: 4,
      //   },
      //   {
      //     title: "02:30",
      //     state: true,
      //     order: 5,
      //   },
      //   {
      //     title: "03:00",
      //     state: true,
      //     order: 6,
      //   },
      //   {
      //     title: "03:30",
      //     state: true,
      //     order: 7,
      //   },
      //   {
      //     title: "04:00",
      //     state: true,
      //     order: 8,
      //   },
      //   {
      //     title: "04:30",
      //     state: true,
      //     order: 9,
      //   },
      //   {
      //     title: "05:00",
      //     state: true,
      //     order: 10,
      //   },
      //   {
      //     title: "05:30",
      //     state: true,
      //     order: 11,
      //   },
      //   {
      //     title: "06:00",
      //     state: true,
      //     order: 12,
      //   },
      //   {
      //     title: "06:30",
      //     state: true,
      //     order: 13,
      //   },
      //   {
      //     title: "07:00",
      //     state: true,
      //     order: 14,
      //   },
      //   {
      //     title: "07:30",
      //     state: true,
      //     order: 15,
      //   },
      //   {
      //     title: "08:00",
      //     state: true,
      //     order: 16,
      //   },
      //   {
      //     title: "08:30",
      //     state: true,
      //     order: 17,
      //   },
      //   {
      //     title: "09:00",
      //     state: true,
      //     order: 18,
      //   },
      //   {
      //     title: "09:30",
      //     state: true,
      //     order: 19,
      //   },
      //   {
      //     title: "10:00",
      //     state: true,
      //     order: 20,
      //   },
      //   {
      //     title: "10:30",
      //     state: true,
      //     order: 21,
      //   },
      //   {
      //     title: "11:00",
      //     state: true,
      //     order: 22,
      //   },
      //   {
      //     title: "11:30",
      //     state: true,
      //     order: 23,
      //   },
      //   {
      //     title: "12:00",
      //     state: true,
      //     order: 24,
      //   },
      //   {
      //     title: "12:30",
      //     state: true,
      //     order: 25,
      //   },
      //   {
      //     title: "13:00",
      //     state: true,
      //     order: 26,
      //   },
      //   {
      //     title: "13:30",
      //     state: true,
      //     order: 27,
      //   },
      //   {
      //     title: "14:00",
      //     state: true,
      //     order: 28,
      //   },
      //   {
      //     title: "14:30",
      //     state: true,
      //     order: 29,
      //   },
      //   {
      //     title: "15:00",
      //     state: true,
      //     order: 30,
      //   },
      //   {
      //     title: "15:30",
      //     state: true,
      //     order: 31,
      //   },
      //   {
      //     title: "16:00",
      //     state: true,
      //     order: 32,
      //   },
      //   {
      //     title: "16:30",
      //     state: true,
      //     order: 33,
      //   },
      //   {
      //     title: "17:00",
      //     state: true,
      //     order: 34,
      //   },
      //   {
      //     title: "17:30",
      //     state: true,
      //     order: 35,
      //   },
      //   {
      //     title: "18:00",
      //     state: true,
      //     order: 36,
      //   },
      //   {
      //     title: "18:30",
      //     state: true,
      //     order: 37,
      //   },
      //   {
      //     title: "19:00",
      //     state: true,
      //     order: 38,
      //   },
      //   {
      //     title: "19:30",
      //     state: true,
      //     order: 39,
      //   },
      //   {
      //     title: "20:00",
      //     state: true,
      //     order: 40,
      //   },
      //   {
      //     title: "20:30",
      //     state: true,
      //     order: 41,
      //   },
      //   {
      //     title: "21:00",
      //     state: true,
      //     order: 42,
      //   },
      //   {
      //     title: "21:30",
      //     state: true,
      //     order: 43,
      //   },
      //   {
      //     title: "22:00",
      //     state: true,
      //     order: 44,
      //   },
      //   {
      //     title: "22:30",
      //     state: true,
      //     order: 45,
      //   },
      //   {
      //     title: "23:00",
      //     state: true,
      //     order: 46,
      //   },
      //   {
      //     title: "23:30",
      //     state: true,
      //     order: 47,
      //   },
      //   {
      //     title: "23:59",
      //     state: true,
      //     order: 48,
      //   },
      // ],

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
  computed: {},
  methods: {
    startMealsTimeChange(index) {
      console.log("index", index);
    },
    mealsTimeChange() {},
    updateStartTime(index) {
      //更新起始時間
      // this.timeindexOf()
      console.log(
        this.week[index].title,
        "開始時間",
        this.week[index].startTime
      );

      let stime = this.week[index].startTime;//開始的時間
      let stimeOrder = this.time.indexOf(stime, 0); //設定開始時間段
      let endtime = this.week[index].endTime;//結束時間
      let endtimeOrder = this.time.indexOf(endtime, 0);//設定結束時間段
      if (endtimeOrder < stimeOrder) {
        alert("開始時間需小於結束時間");
        this.week[index].state =
          "000000000000000000000000000000000000000000000000"; //重制開始時間
        this.week[index].startTime = "00:00";
        this.week[index].endTime = "23:59";
        return;
      }

      console.log("時間段", stimeOrder);
      this.week[index].state =
        "000000000000000000000000000000000000000000000000"; //重制開始時間
      let stateArray = this.week[index].state.split("");
      stateArray[stimeOrder] = "1"; //state開始時間更新
      for (let i = stimeOrder; i < endtimeOrder; i++) {
        stateArray[i] = "1";
      }
      this.week[index].state = stateArray.join("");
      console.log("時間陣列", this.week[index].state);
    },





    // updateEndTime(index) {
    //   console.log("結束時間", this.week[index].endTime);
    //   let t = this.week[index].endTime;
    //   let o = this.time.indexOf(t, 0); //設定結束時間段
    //   let st = this.week[index].state.indexOf(1); //st=開始時間
    //   let stateArray = this.week[index].state.split(""); //state轉成字串陣列

    //   for (let i = st; i < o; i++) {
    //     //重製結束時間
    //     stateArray[i] = "0";
    //   }
    //   this.week[index].state = stateArray.join("");
    //   console.log("結束時間段", o);

    //   if (o > st) {
    //     let stateArray = this.week[index].state.split(""); //state轉成字串陣列
    //     for (let i = st; i < o; i++) {
    //       stateArray[i] = "1";
    //     }
    //     this.week[index].state = stateArray.join("");
    //     console.log("時間陣列", this.week[index].state);
    //   } else {
    //     alert("開始時間需小於結束時間");
    //     this.week[index].startTime = "00:00";
    //     this.week[index].endTime = "23:59";
    //     this.week[index].state =
    //       "000000000000000000000000000000000000000000000000"; //重制開始時間
    //   }
    //   console.log("開始時間", st);
    // },
  },
  mounted() {
    // this.updateStartTime();
    // this.updateEndTime();
  },
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
