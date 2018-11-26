<template>
  <section id="slide-question" :data-background-image="titleBgImg">
    Kifech?
    <transition
      v-for="question in questions"
      :key="question.key"
      v-bind:css="false"
      appear
      v-on:appear="appear"
    >
      <p
        class="question-mark"
        :style="
          `font-size:${question.fontSize}em;top:${question.top}px;left: ${
            question.left
          }px;`
        "
      >
        ?
      </p>
    </transition>

    <aside class="notes">
      <pre>
            des questions

            pluie de ? avec parallax et vanilla.tilt
                          </pre
      >
    </aside>
  </section>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  name: "SlideQuestion",
  data() {
    return {
      slideIsActive: false,
      questions: []
    };
  },
  mounted() {
    this.$root.$on("itsRainingQuestionMarks", event => {
      const sleep = m => new Promise(r => setTimeout(r, m));

      (async () => {
        for (var i = 0; i < 100; i++) {
          let left = Math.floor(Math.random() * 768);
          let fontSize = Math.floor(Math.random() * 20) / 10;

          this.questions.push({ top: 0, left: left, fontSize: fontSize });
          await sleep(200);
        }
      })();
    });
  },
  methods: {
    appear: function(el, done) {
      Velocity(el, { top: "2000px" }, { duration: 5000 });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section {
  top: 0 !important;
  width: 100%;
  height: 100%;
  font-family: Orbitron !important;
  color: #fff !important;
}
.question-mark {
  position: absolute;
  font-family: Orbitron !important;
  color: #fff !important;
  font-size: 1.7em;
}
</style>
