<template>
  <div class="list-1">
    <transition-group tag="div" name="sudoku" class="sudoku" :css="false">
      <div class="sudoku-child" v-for="ele in exampleArr" :key="ele">
        {{ ele }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "AlphabetTitle",
  data() {
    return {
      exampleArr: ["Vue", ".JS", "Ani", "mat", "ion", "in", "Act", "ion"]
    };
  },
  methods: {
    shuffleList(arr) {
      arr.reverse();
      for (let i = 0; i < 9; i++) {
        arr.sort(this.shuffleHelper);
      }
    },
    shuffleHelper() {
      return [1, -1][Math.floor(Math.random() * 2)];
    },
    beforeEnter(el) {
      console.log("beforeEnter!");
      el.style.opacity = 0;
    },
    afterEnter(el) {
      console.log("afterEnter!");
      el.style.opacity = 1;
    },
    afterLeave(el) {
      console.log("afterLeave!");
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log("beforeLeave!");
      el.style.opacity = 1;
    },
    enter(el, done) {
      console.log("Enter!");

      el.style.transition = `all ${10 / (this.dt.in || this.dt.init)}s linear`;
      el.addEventListener("transitionend", this.transitionend);
      console.log("wth!!!");
    },
    leave(el, done) {
      console.log("Leave!");
      el.style.transition = `all ${10 / (this.dt.out || this.dt.init)}s linear`;

      el.addEventListener("transitionend", this.transitionend);
    },
    transitionend(el, done) {
      console.log("transitionend!");
      el.style = "";
      done();
      setTimeout(() => {
        console.log("dt.show has been toggled.");
        this.dt.show = !this.dt.show;
      }, 0);
    }
  },
  created() {
    window.setInterval(() => {
      this.shuffleList(this.exampleArr);
    }, 3000);

    // Dynamic Transition Setting
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sudoku {
  position: relative;
  width: 800px;
  height: 600px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  padding: 10px;
}
.sudoku {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-right: 10px;
}

.sudoku-child {
  font-family: Orbitron;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  font-size: 2em;
}

.sudoku-child:nth-child(4n) {
  margin-right: 0px;
}

.sudoku-move {
  transition: transform 0.5s ease-out;
}
</style>
