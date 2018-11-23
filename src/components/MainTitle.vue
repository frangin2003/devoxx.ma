<template>
  <div name="main-title" class="fragment main-title">
    <p>
      <span :data-animate="randomAnim" v-for="letter in title1Letters">{{
        letter
      }}</span>
    </p>
    <p>
      <span :data-animate="randomAnim" v-for="letter in title2Letters">{{
        letter
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "MaintTitle",
  props: ["title1", "title2"],
  computed: {
    title1Letters() {
      return this.titleLetters(this.title1);
    },
    title2Letters() {
      return this.titleLetters(this.title2);
    },
    randomAnim() {
      return this.animArr[Math.floor(Math.random() * this.animArr.length)];
    }
  },
  methods: {
    titleLetters(title) {
      return title.replace(/ /g, "\u00a0").split("");
    }
  },
  data() {
    return {
      animArr: [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "bounceIn",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp",
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp",
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "fadeInUp",
        "fadeInUpBig",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "flipInX",
        "flipInY",
        "flipOutX",
        "flipOutY",
        "lightSpeedIn",
        "lightSpeedOut",
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight",
        "hinge",
        "jackInTheBox",
        "rollIn",
        "rollOut",
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
        "zoomOut",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp",
        "slideInDown",
        "slideInLeft",
        "slideInRight",
        "slideInUp",
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
        "slideOutUp",
        "heartBeat"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-title {
  display: inline-block;
  /*position: relative | absolute | fixed | sticky*/
  font-family: Orbitron;
  font-size: 1.2em;
  color: #fff;
  margin-top: 10%;
}
</style>
