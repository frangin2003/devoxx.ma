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
          <div class="one">
            <img
              class="vue-logo"
              src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/qkMS-vue.png"
            />
          </div>
          <MainTitle title1="Vue.js Animation" title2="in Action" />
          <aside class="notes">
            historiquement, CSS ne permet pas d'animer les span, il faut leur
            donner une position non statique ou un display Dans cet exemple avec
            le logo Vue.js, on fait de l'animation pure CSS et des transitions
            entre animations sans framework On doit aussi ecouter les evenements
            de Reveal.js pour pouvoir remplacer les animations par animate.css
            On ecoute l'evenement animationiteration pour s'assurer que l'on
            peut changer l'animation en douceur Pour le fond, c'est un image
            transparente avec le portage Vue.js de particles.js, avec la config
            devoxx
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
import MainTitle from "./components/MainTitle";
import MapJourney from "./components/MapJourney";
import ParticlesDefault from "./config/particles-default.js";
import ParticlesDevoxx from "./config/particles-devoxx.js";

export default {
  name: "app",
  components: {
    MainTitle,
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
      if (event.fragment.getAttribute("name") === "main-title") {
        var vueLogo = document.querySelector(".vue-logo");
        vueLogo.addEventListener("animationiteration", function() {
          console.log(
            "Iteration complete!  This is the callback, no library needed!"
          );
          vueLogo.style.cssText =
            "animation: end-beat .8s; animation-fill-mode: forwards;";
        });
      }
      var c = event.fragment.querySelectorAll("span");
      var i;
      for (i = 0; i < c.length; i++) {
        c[i].classList.add("animated");
        var ac = c[i].getAttribute("data-animate");
        c[i].classList.add(ac);
      }
    });

    Reveal.addEventListener("fragmenthidden", function(event) {
      var c = event.fragment.querySelectorAll("span");
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
  display: inline-block;
  font-family: Orbitron;
  font-size: 2em;
  color: #fff;
  /*position: relative | absolute | fixed | sticky*/
}
.vue-logo {
  border: none !important;
  background: none !important;
  transform: scale(0.7);
  animation: beat 1.6s ease-in-out infinite;
  animation-fill-mode: forwards;
  transform-origin: center;
}

/* Heart beat animation */
@keyframes beat {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
}
@keyframes end-beat {
  to {
    opacity: 0.4;
    filter: grayscale(100%);
  }
}
.one {
  position: absolute;
  top: 17%;
  left: 30%;
  width: 40%;
}
</style>
