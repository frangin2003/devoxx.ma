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
          <div class="fragment">
            <span data-animate="tada" v-if="mounted">V</span
            ><span data-animate="tada" v-if="mounted">u</span
            ><span data-animate="tada" v-if="mounted">e</span>
          </div>
          <aside class="notes">
            historiquement, CSS ne permet pas d'animer les span, il faut leur
            donner une position on statique ou un display
          </aside>
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
    Reveal.addEventListener("ready", event => {
      this.mounted = true;
    });
    Reveal.initialize();

    // Animate.css integration
    Reveal.addEventListener("fragmentshown", function(event) {
      var c = event.fragment.childNodes;
      var i;
      for (i = 0; i < c.length; i++) {
        c[i].classList.add("animated");
        var ac = c[i].getAttribute("data-animate");
        c[i].classList.add(ac);
      }
    });

    Reveal.addEventListener("fragmenthidden", function(event) {
      var c = event.fragment.childNodes;
      var i;
      for (i = 0; i < c.length; i++) {
        c[i].classList.remove("animated");
        var ac = c[i].getAttribute("data-animate");
        c[i].classList.remove(ac);
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
.slides,
.controls-arrow {
  color: #fff;
}
div.fragment span {
  color: #fff;
  display: inline-block;
  /*position: relative | absolute | fixed | sticky*/
}
</style>
