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
        <input type="checkbox" />{{ item.title }}
        <button class="revise_btn">修改</button>
        <button class="del_btn" @click="remove(index)">Del</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      all: [
        { title: "買蘋果", finish: false, id: 1 },
        { title: "買香蕉", finish: false, id: 2 },
        { title: "買牛奶", finish: false, id: 3 },
        { title: "吃飯", finish: false, id: 4 },
      ],
      addtext: "",
    };
  },

  methods: {
    addlist() {//新增
     
      if(this.addtext==""){
        alert ("請輸入代辦事項")
        return
      }
      this.all.push({
        title: this.addtext,
        finish:false,
        id:this.all.length+1
      });
      this.addtext=""
    },
    remove(e){//刪除
      this.all.splice(e,1)

    },
    adddata() {
      //jsonplaceholder新增
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          price: 200,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  mounted() {
    // this.adddata();
  },
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
      .del_btn {
      }
    }
  }
}
</style>
