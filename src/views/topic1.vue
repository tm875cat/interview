<template>
  <header>To Do List</header>
  <div class="add">
    <label for=""
      >代辦事項:<input type="text" v-model="addtext" /><button
        @click="addlist()"
      >
        新增
      </button></label
    >
  </div>
  <div class="form">
    <div class="form_header">全部</div>
    <div class="form_content">
      <div class="list" v-for="(item, index) in all" :key="id">
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

        <button class="del_btn" @click="dellist(index)">Del</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      all: [],
      addtext: "",
    };
  },

  methods: {
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
      console.log("all", this.all);
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
      console.log(delid);
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
  text-align: center;
  font-size: 3rem;
  color: orangered;
  font-weight: 400;
  margin-bottom: 2rem;
}
.add {
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
}
.form {
  margin: auto;
  width: 60%;
  &_header {
    border: gray solid;
    border-bottom: 0;
    // text-align: center;
    font-size: 2rem;
    padding-left: 2rem;
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
