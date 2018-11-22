<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron|Montserrat:400,500,600,700,800,900"
      rel="stylesheet"
    />
    <!--
      <img src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <div class="reveal">
      <div class="slides">
        <section
          data-background-image="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/CCg--main-title.png"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="bounceLeft-enter"
            leave-active-class="bounceRight-leave"
          >
            <p key="hello" v-if="mounted">hello</p>
          </transition>
        </section>
        <section><MapJourney /></section>
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
import AlphabetTitle from "./components/AlphabetTitle";
import MapJourney from "./components/MapJourney";
import ParticlesDefault from "./config/particles-default.js";
import ParticlesDevoxx from "./config/particles-devoxx.js";
import "vue2-animate/dist/vue2-animate.min.css";

export default {
  name: "app",
  components: {
    AlphabetTitle,
    MapJourney
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
    Reveal.initialize();
    this.mounted = true;
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
.controls-arrow {
  color: #fff;
}
</style>
