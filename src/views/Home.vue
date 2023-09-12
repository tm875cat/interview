<template>
  <header>宏麗數位面試題目</header>
  <div class="list">
    <router-link :to="{ name: 'topic1' }">To do list</router-link>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic2' }">供餐選擇器</router-link>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic3' }">終極密碼</router-link>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic1' }">題目四</router-link>
  </div>
</template>
<style scoped lang="scss">
header {
  text-align: center;
  font-size: 2rem;
}
.list {
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
  a{
    color: black;
    text-decoration: none;
  }
  a:hover{color: orange;
transition: 0.5s;

  }
  
}

</style>
