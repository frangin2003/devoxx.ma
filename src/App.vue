<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron|Montserrat:400,500,600,700,800,900"
      rel="stylesheet"
    />
    <div class="reveal">
      <div class="slides">
        <Slide2CharlesJourney /><Slide1MainTitle />
        <section>https://the-allstars.com/vue2-animate/</section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
      </div>
    </div>
    <x-particles
      class="particles-background"
      :config="config[currentConfig]"
      v-if="isShow"
    ></x-particles>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";
import Slide1MainTitle from "./components/slides/Slide1MainTitle";
import Slide2CharlesJourney from "./components/slides/Slide2CharlesJourney";
import ParticlesDefault from "./config/particles-default.js";
import ParticlesDevoxx from "./config/particles-devoxx.js";

export default {
  name: "app",
  components: {
    Slide1MainTitle,
    Slide2CharlesJourney
  },
  data() {
    return {
      mounted: false,
      config: {
        default: ParticlesDefault,
        devoxx: ParticlesDevoxx
      },
      currentConfig: "devoxx",
      isShow: true
    };
  },
  mounted() {
    Reveal.addEventListener("ready", event => {
      this.mounted = true;
    });
    Reveal.initialize();

    // Animate.css integration
    Reveal.addEventListener("fragmentshown", event => {
      this.$root.$emit("revealSlide1Fragmentshown", event);
    });

    Reveal.addEventListener("fragmenthidden", event => {
      this.$root.$emit("revealSlide1Fragmenthidden", event);
    });

    Reveal.addEventListener("slidechanged", event => {
      console.log(event.currentSlide);

      switch (event.currentSlide.id) {
        case "slide1":
          this.currentConfig = "devoxx";
          break;
        case "slide2":
          this.currentConfig = "default";
          break;
        case "slide3":
          break;
        case "slide4":
          break;
        case "slide5":
          break;
        case "slide6":
          break;
        case "slide7":
          break;
        case "slide8":
          break;

        default:
      }
    });
  }
};
</script>

<style>
@import url("https://unpkg.com/reveal.js/css/reveal.css");
@import url("https://unpkg.com/reveal.js/css/theme/white.css");
.particles-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
  background: rgb(14, 14, 22);
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Orbitron", Helvetica, Arial, sans-serif;
  color: #fff;
  height: 100vh;
}
.slides,
.controls-arrow {
  color: #4f7640;
}
</style>
