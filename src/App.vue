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
        <SlideJSFighter2018 /> <SlideJSFighterBg /><SlideDevoxxTalkers2018 />
        <SlideAnimationLibs /> <SlideNews />
        <SlideAnimCompare /><SlideQuestion /> <SlideCharlesJourney />
        <SlideMainTitle /><SlideLaptopChoukrane />
        <section :data-background-image="titleBgImg">
          Achkoun? - anime.js et les listes
          <aside class="notes">
            <pre>
          Presentation de mon parcours, de anime.js et follow path et transition des listes
          </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Des animations, pourquoi faire?
          <aside class="notes"><pre></pre></aside>
        </section>
        <section :data-background-image="titleBgImg">
          Transitions ou animations?
          <aside class="notes">
            <pre>
              Les transitions sont des animations, mais pour passer d'un etat a un autre
              les transitions sont plus simples,
              les animations, avec les keyframes notament permettent d'aller plus loin
              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Qui est Evan You - Transitions CSS?
          <aside class="notes">
            <pre>
              presentation du parcours d'Evan you en montrant les differents etats d'animation Vue
la duree
<transition :duration="{ enter: 500, leave: 800 }">...</transition>

enter-active-class
  permet de definir les proprietes CSS a animer
  - sa taille
leave-active-class
  - le drapeau
    -> Evan  est ne en Chine puis est parti etudier aux USA 

enter-class
  etat de depart de la transition d'entree
enter-to-class (2.1.8+)
  etat de fin de la transition d'entree
    -> de bebe a adulte

leave-class
    etat de depart de la transition de fin
leave-to-class (2.1.8+)
    etat de fin de la transition d'entree
      -> de Chine aux USA
                    </pre
            >
          </aside>
        </section>

        <section :data-background-image="titleBgImg">
          Qui est Evan You- Transations JS?
          <aside class="notes">
            <pre>
              presentation du parcours d'Evan you en montrant les differents etats d'animation Vue
la desactivatio explicite des animations CSS
<transition v-bind:css="false">...</transition>


                v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Enter Vue.js - journal qui tourne (V1 de Vue.js Oct 26, 2015) et liste
          (fiche perso)
          <aside class="notes">
            <pre>
            Simple
            Elegant
            Reactive
            Progressive
            Component based
            Single page template (if we want)

              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Vue.js VS ses concurrents - listes
          <aside class="notes">
            <pre>
            JS fighter 2018
            Animation Angular VS React
            Animation de la selection de l'ecran de la selection des frameworks
              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Vue.js VS ses concurrents - listes
          <aside class="notes">
            <pre>
            Devoxx.ma speaker 2018
            Meme ecran de selection mais avec les speakers de cette addEventListener
            https://devoxx.ma/assets/images/speakers/speaker-12.jpg
            https://devoxx.ma/
              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Vue.js VS ses concurrents - listes des speakers
          <aside class="notes">
            <pre>
            Choukrane!
            PC avec le coeur+etoile du maroc qui bat
              </pre
            >
          </aside>
        </section>
        <section :data-background-image="titleBgImg">
          Kifech?
          <aside class="notes">
            <pre>
            des questions

            pluie de ? avec parallax et vanilla.tilt
                          </pre
            >
          </aside>
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
.slides,
.controls-arrow {
  color: #4f7640;
}
</style>
