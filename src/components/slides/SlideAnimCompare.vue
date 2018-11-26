<template>
  <section
    id="slide-anim-compare"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <div id="boring-loading" class="fragment" data-fragment-index="1">
      <span v-if="showBoringLoading" class="loading">Loading...</span>
      <span v-if="!showBoringLoading" class="loading">Done</span>
    </div>
    <p class="fragment" data-fragment-index="3">4 secondes</p>
    <div id="nice-loading" class="fragment" data-fragment-index="2">
      <div v-if="showNiceLoading">
        <div class="loading-ball" style="background-color: green;"></div>
        <div class="loading-ball" style="background-color: blue;"></div>
        <div class="loading-ball" style="background-color: red;"></div>
      </div>
      <span v-if="!showNiceLoading" class="loading">Done</span>
    </div>
    <p class="fragment" data-fragment-index="3">4.1 secondes</p>
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
import anime from "animejs";
import Reveal from "reveal.js/js/reveal";

export default {
  name: "SlideQuestion",
  data() {
    return {
      slideIsActive: false,
      showBoringLoading: true,
      showNiceLoading: true
    };
  },
  mounted() {
    const sleep = m => new Promise(r => setTimeout(r, m));

    Reveal.addEventListener("fragmentshown", event => {
      if (event.fragment.id === "boring-loading") {
        (async () => {
          await sleep(4000);

          this.showBoringLoading = false;
        })();
      } else if (event.fragment.id === "nice-loading") {
        (async () => {
          anime({
            targets: "div.loading-ball",
            translateX: "13.5rem",
            scale: [0.75, 0.9],
            delay: function(el, index) {
              return index * 80;
            },
            direction: "alternate",
            loop: 10
          });
          await sleep(4100);

          this.showNiceLoading = false;
        })();
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  top: 0 !important;
  width: 100%;
  height: 100%;
  font-family: Orbitron !important;
  color: #fff !important;
}
p {
  color: #fff;
}
#slide-anim-compare span,
#slide-anim-compare p {
  color: #000;
}
div.loading-ball {
  width: 1.5em;
  height: 1.5em;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  background-color: black;
}
</style>
