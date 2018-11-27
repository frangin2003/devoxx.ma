<template>
  <div id="app">
    <div id="annoying-popups" style="position: absolute;">
      <AnnoyingPopup
        v-for="annoyingPopup in annoyingPopups"
        :key="annoyingPopup.key"
        :name="annoyingPopup.name"
        :top="annoyingPopup.top"
        :left="annoyingPopup.left"
        :percentage="annoyingPopup.percentage"
        :showGreensock="annoyingPopup.showGreensock"
        :zIndex="annoyingPopup.percentage"
      />
    </div>
    <div class="reveal">
      <div class="slides">
        <SlideMainTitle /> <SlideAnimationLibs />
        <section :data-background-image="titleBgImg">
          <h2 class="centered-title">Des animations, pourquoi faire?</h2>
          <aside class="notes"><pre></pre></aside>
        </section>
        <SlideAnimCompare />
        <section :data-background-image="titleBgImg">
          <h2>Pourquoi Vue.js?</h2>
          <ul class="vue">
            <li class="fragment fade-in-then-semi-out">Simple</li>
            <li class="fragment fade-in-then-semi-out">Elegant et intuitif</li>
            <li class="fragment fade-in-then-semi-out">
              Reactif et progressif
            </li>
            <li class="fragment fade-in-then-semi-out">Single page template</li>
            <li class="fragment">Simple!!!</li>
          </ul>
          <aside class="notes">
            <pre>
            Reactive : on modifie le model a un endroit et tous les endroits ou on l'utilise se met a jour 
            Progressive : template based view engine
            
            Single page template (if we want)
              </pre
            >
          </aside>
        </section>
        <SlideCharlesJourney /> <SlideNews /> <SlideJSFighterBg />
        <SlideJSFighter2018 /> <SlideDevoxxTalkers2018 />
        <SlideLaptopChoukrane /> <SlideQuestion />
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
import AnnoyingPopup from "./components/AnnoyingPopup";
import Reveal from "reveal.js/js/reveal";
import SlideJSFighterBg from "./components/slides/SlideJSFighterBg";
import SlideMainTitle from "./components/slides/SlideMainTitle";
import SlideAnimationLibs from "./components/slides/SlideAnimationLibs";
import SlideAnimCompare from "./components/slides/SlideAnimCompare";
import SlideCharlesJourney from "./components/slides/SlideCharlesJourney";
import SlideNews from "./components/slides/SlideNews";
import SlideJSFighter2018 from "./components/slides/SlideJSFighter2018";
import SlideDevoxxTalkers2018 from "./components/slides/SlideDevoxxTalkers2018";
import SlideLaptopChoukrane from "./components/slides/SlideLaptopChoukrane";
import SlideQuestion from "./components/slides/SlideQuestion";
import ParticlesDefault from "./config/particles-default.js";
import ParticlesDevoxx from "./config/particles-devoxx.js";

export default {
  name: "app",
  components: {
    AnnoyingPopup,
    SlideMainTitle,
    SlideJSFighter2018,
    SlideAnimCompare,
    SlideAnimationLibs,
    SlideJSFighterBg,
    SlideNews,
    SlideCharlesJourney,
    SlideDevoxxTalkers2018,
    SlideLaptopChoukrane,
    SlideQuestion
  },
  data() {
    return {
      mounted: false,
      config: {
        default: ParticlesDefault,
        devoxx: ParticlesDevoxx
      },
      currentConfig: "devoxx",
      isShow: true,
      annoyingPopups: []
    };
  },
  mounted() {
    this.$root.$on("clearAnnoyingPopup", event => {
      this.annoyingPopups = [];
    });

    this.$root.$on("addAnnoyingPopup", event => {
      this.annoyingPopups.push(event);
    });

    Reveal.initialize();

    Reveal.addEventListener("ready", event => {
      this.mounted = true;
    });

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
        case "slide-laptop-choukrane":
          this.$root.$emit("slideLaptopChoukraneStartAnim", event);
          break;
        case "slide-news":
          this.$root.$emit("showNewsPaper", event);
          break;
        case "slide-question":
          this.$root.$emit("itsRainingQuestionMarks", event);
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
  background: #0e0e16;
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Orbitron", Helvetica, Arial, sans-serif;
  color: #fff;
  height: 100vh;
}
h2 {
  font-family: Orbitron !important;
  color: #fff !important;
  padding-bottom: 5% !important;
}
.slides,
.controls-arrow {
  color: #4f7640;
}
ul.vue li {
  background: url("https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/7Jw--vue-icon.png")
    no-repeat left top;
  list-style-type: none;
  margin: 0;
  padding: 0px 0px 5% 15%;
  width: 100%;
  vertical-align: middle;
}
.centered-title {
  margin: 20% 0 0 0 !important;
}
</style>
