<template>
  <header>To Do List</header>
  <div class="introduction">
    <div class="introduction_title">簡介</div>
    <div class="introduction_content">
      輸入代辦事項並新增即可增加代辦事項至清單中完成事項後勾選並送出便會移除該項目，點擊修改按鈕可修改清單內容，刪除按鈕可移除清單內容。
    </div>
  </div>
  <div class="add">
    <label
      >代辦事項:<input type="text" v-model="addtext" /><button
        @click="addlist()"
      >
        新增
      </button></label
    >
  </div>
  <div class="form">
    <div class="form_header">
      <div class="form_header_title">清單</div>
      <button class="send" @click="sendBtn()">送出</button>
    </div>
    <div class="form_content">
      <div class="list" v-for="(item, index) in all" :key="item.id">
        <input type="checkbox" v-model="item.completed" />{{ item.title }}
        <button
          class="revise_btn"
          v-if="item.reviseshow"
          @click="reviseshowchange(index)"
        >
          修改
        </button>
        <div class="renew_box" v-if="item.renewsinputshow">
          <input type="text" v-model="item.renewtext" />
          <button @click="renewlist(index)">變更</button>
        </div>
        <button class="del_btn" @click="dellist(index)">刪除</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      all: [
        {
          title: "繳電話費",
          completed: false,
          id: 1,
          renewsinputshow: false,
          reviseshow: true,
          renewtext: "",
        },
        {
          title: "買蘋果",
          completed: false,
          id: 2,
          renewsinputshow: false,
          reviseshow: true,
          renewtext: "",
        },
        {
          title: "練球",
          completed: false,
          id: 3,
          renewsinputshow: false,
          reviseshow: true,
          renewtext: "",
        },
        {
          title: "體能訓練",
          completed: false,
          id: 4,
          renewsinputshow: false,
          reviseshow: true,
          renewtext: "",
        },
     
      ],
      addtext: "",
    };
  },

  computed: {},
  methods: {
    sendBtn() {
      //送出
      this.all = this.all.filter((x) => x.completed === false);
      // for (let i = 0; i < this.all.length; i++) {
      //   // console.log("i",i)
      //   if (this.all[i].completed === true) {
      //     console.log(i,"i",this.all[i].title,this.all[i].completed)
      //     this.all.splice(i, 1);
      //   }
      // }
    },

    reviseshowchange(index) {
      this.all[index].renewsinputshow = !this.all[index].renewsinputshow;
      this.all[index].reviseshow = !this.all[index].reviseshow;
    },
    async addlist() {
      if (this.addtext == "") {
        alert("請輸入代辦事項");
        return;
      }
      //jsonplaceholder新增
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: this.addtext,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        // .then((json) => console.log(json));
        .then((json) =>
          this.all.push({
            title: json.title,
            completed: json.completed,
            id: json.id,
            renewsinputshow: false,
            reviseshow: true,
            renewtext: "",
          })
        )
        .catch((error) => alert(error));
      this.addtext = "";
      // console.log("all", this.all);
    },

    async dellist(index) {
      //刪除

      const delid = this.all[index].id;
      //jsonplaceholder刪除
      await fetch(`https://jsonplaceholder.typicode.com/todos/${delid}`, {
        method: "DELETE",
      });
      this.all.splice(index, 1); //陣列刪除
      // console.log("all", this.all);
    },

    async renewlist(index) {
      //修改
      this.all[index] = {
        title: this.all[index].renewtext,
        completed: this.all[index].completed,
        id: this.all[index].id,
        renewsinputshow: false,
        reviseshow: true,
        renewtext: "",
      };
      const delid = this.all[index].id;
      // console.log(delid);
      await fetch(`https://jsonplaceholder.typicode.com/todos/200`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.all[index].renewtext,
          completed: this.all[index].completed,
          id: this.all[index].id,
          renewsinputshow: false,
          reviseshow: true,
          renewtext: "",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;

  font-size: 3rem;
  color: orangered;
  font-weight: 400;
  margin-bottom: 2rem;
}
.introduction {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
 
  &_title {
    font-size: 2rem;
    font-weight: 600;
   
  }
  &_content{
    font-size: 1.25rem;
   width: 25%;
 
   padding: 1rem;
 
  }
}
.add {
  width: 100%;

  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.form {
  margin: auto;
  width: 60%;
  &_header {
    border: gray solid;
    border-bottom: 0;

    font-size: 2rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .send {
      margin-right: 2rem;
      width: 3rem;
    }
  }
  &_content {
    border: gray solid;

    .list {
      margin: 1rem;
      .renew_box {
        display: inline;
      }
      .del_btn {
      }
    }
  }
}
</style>
