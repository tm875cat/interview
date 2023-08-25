<template>
  <header>宏麗數位面試題目</header>
  <div class="list">
    <router-link :to="{ name: 'topic1' }">題目一</router-link>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic2' }">題目二</router-link>
    <div class="aaa"></div>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic3' }">題目三</router-link>
  </div>
  <div class="list">
    <router-link :to="{ name: 'topic1' }">題目一</router-link>
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
