<template>
  <div name="main-title" class="fragment main-title">
    <p>
      <span
        :data-animate="animatedLetter.anim"
        v-for="animatedLetter in animatedTitle1Letters"
        >{{ animatedLetter.letter }}</span
      >
    </p>
    <p>
      <span
        :data-animate="animatedLetter.anim"
        v-for="animatedLetter in animatedTitle2Letters"
        >{{ animatedLetter.letter }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "MaintTitle",
  props: ["title1", "title2"],
  computed: {
    animatedTitle1Letters() {
      return this.animatedTitleLetters(this.title1);
    },
    animatedTitle2Letters() {
      return this.animatedTitleLetters(this.title2);
    }
  },
  methods: {
    animatedTitleLetters(title) {
      let letters = title.replace(/ /g, "\u00a0").split("");
      let animatedLetters = [];
      letters.forEach(letter => {
        animatedLetters.push({ letter: letter, anim: this.randomAnim() });
      });

      return animatedLetters;
    },
    randomAnim() {
      let anim = this.animArr[Math.floor(Math.random() * this.animArr.length)];
      //console.log(anim);
      return anim;
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
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "fadeInUp",
        "fadeInUpBig",
        "flipInX",
        "flipInY",
        "lightSpeedIn",
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
        "jackInTheBox",
        "rollIn",
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
        "slideInDown",
        "slideInLeft",
        "slideInRight",
        "slideInUp",
        "heartBeat"
      ],
      animOutArr: [
        "hinge",
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "flipOutX",
        "flipOutY",
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight",
        "rollOut",
        "zoomOut",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp",
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
        "slideOutUp"
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
  margin-top: 8%;
}
</style>
