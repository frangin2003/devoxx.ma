<template>
  <div
    class="annoying-popup"
    :style="
      `top: ${top}px;left: ${left}px;z-index: ${zIndex ? zIndex : '1000'}`
    "
  >
    <div class="top-bar">X</div>
    <div class="content">
      <img v-if="showGreensock" :src="greensock" style="width: 100%;" />
      <p v-if="!showGreensock" class="line1">new JS Framework</p>
      <p v-if="!showGreensock" class="line2">Anim{{ name }}.js</p>
      <p v-if="!showGreensock" class="line3 animated flash">
        -{{ percentage }}% OFF
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnnoyingPopup",
  props: ["top", "left", "name", "percentage", "zIndex", "showGreensock"]
};
</script>

<style scoped>
.annoying-popup {
  position: absolute;
  border: 10px solid lightgrey;
  box-shadow: 10px 5px 5px grey;
  border-radius: 2px;
  width: 300px;
  height: 220px;
  background-color: #fff;
}
.annoying-popup .top-bar {
  text-align: right;
  color: red;
  font-size: 15pt !important;
  font-weight: bold !important;
  font-family: arial !important;
  padding: 2px;
  background-color: lightgray;
  padding: 0 10px 10px 0;
}
.annoying-popup .line1 {
  color: #2a76dd;
  text-align: center;
  font-size: 15pt !important;
  font-family: arial !important;
}
.annoying-popup .line2 {
  color: #000;
  font-size: 20pt !important;
  font-weight: bold;
  font-family: arial !important;

  text-align: center;
}
.annoying-popup .line3 {
  color: red;
  text-align: center;
  font-size: 30pt !important;
  font-family: arial !important;
}
</style>
