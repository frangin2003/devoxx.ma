<template>
  <div class="laptop-choukrane">
    <div class="laptop">
      <div class="screen"></div>
      <div class="keyboard"></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "LaptopChoukrane",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css")
.laptop-choukrane {
  box-sizing: border-box;
  width: 680px;
  margin: 0px auto;
  position: relative;
}

.laptop {
  box-sizing: border-box;
  width: 235px;
  height: 155px;
  background: #fc9252;
  border: 12px solid #e8ebf0;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 200px;
  right: 30px;
}

.laptop > div {
  position: absolute;
}

.laptop > .screen {
  width: 211px;
  height: 131px;
  left: 0;
  margin-left: 0;
}

.keyboard {
  width: 296px;
  height: 7px;
  bottom: -19px;
  left: 50%;
  margin-left: -148px;
  border-radius: 0 0 20px 20px;
  background: #f4f5f7;
  z-index: 1;
}
</style>
