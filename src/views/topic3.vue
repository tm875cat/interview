<template>
  <button class="add" @click="addpsw()">新增密碼</button>
  <br />
  <input v-model="this.player.guessNumber" type="number" />
  <button class="guess" @click="guess()">猜</button>
</template>
<script>
export default {
  data() {
    return {
      game: { psw: 0, start: false },
      player: { guessNumber: 0, min: 0, max: 100 },
      ai: { guessNumber: 0, min: 0, max: 100 },
    };
  },

  methods: {
    addpsw() {
      //新增密碼
      this.game.start = true;
      this.game.psw = Math.floor(Math.random() * 101);
      this.player.max = 100;
      this.player.min = 0;
      this.ai.max = 100;
      this.ai.min = 0;
      console.log(this.game.psw);
    },
    guess() {
      if (this.game.start != true) {
        return alert("請先按新增密碼開始遊戲");
      }
      this.aiguess();
      if (this.player.guessNumber == this.game.psw) {
        alert("你贏了");
        this.game.start = false;
      } else {
        if (this.player.guessNumber > this.game.psw) {
          alert("範圍是" + this.player.min + "到" + this.player.guessNumber);
          this.player.max = this.player.guessNumber;
          // console.log("player.max", this.player.max);
        } else if (this.game.psw > this.player.guessNumber) {
          alert("範圍是" + this.player.guessNumber + "到" + this.player.max);
          this.player.min = this.player.guessNumber;
          // console.log("min", this.player.min);
        }
      }
    },
    aiguess() {
      console.log("ai.max",this.ai.max)
      console.log("ai.min",this.ai.min)
      this.ai.guessNumber =
        Math.floor(Math.random() * (this.ai.max-this.ai.min+1)) + this.ai.min;
     
 

      console.log("ai猜", this.ai.guessNumber);
      if (this.ai.guessNumber === this.game.psw) {
        alert("ai獲勝");
        this.game.start = false;
        this.player.max = 100;
        this.player.min = 0;
        this.ai.max = 100;
        this.ai.min = 0;
        return;
      } else {
        if (this.ai.guessNumber > this.game.psw) {
          alert("ai的範圍是" + this.ai.min + "到" + this.ai.guessNumber);
          this.ai.max = this.ai.guessNumber;
        } else if (this.game.psw > this.ai.guessNumber) {
          alert("ai的範圍是" + this.ai.guessNumber + "到" + this.ai.max);
          this.ai.min = this.ai.guessNumber;
        }
      }
    
    },
  },
};
</script>
<style scoped lang="scss"></style>
