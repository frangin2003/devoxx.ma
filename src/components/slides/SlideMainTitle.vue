<template>
  <section id="slide-main-title" :data-background-image="mainTitleBgImg">
    <div class="vue-logo-background">
      <img
        class="vue-logo"
        src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/qkMS-vue.png"
      />
    </div>
    <MainTitle title1="Vue.js Animation" title2="in Action" />
    <aside class="notes">
      <pre>
      Bonjour à tous, bienvenue dans ce tools in action dédié à Vue.js et à l’animation.
      Nous avons 30 minutes à passer ensemble.
      Je vais vous dire qui je suis
      vous expliquer pourquoi l’animation est importante et les concepts de base lies au web
      présenter Vue.js et son createur
      le comparer aux autres frameworks
      mais surtout, parce que c'est un tools in Action
      en vous montrant tout le temps comment utiliser l'animation web et Vue.js
      et presenter plusieurs librairies d'animation

      et on commence tout de suite avec ce slide, pretez bien attention a ce qui va suivre
      

        historiquement, CSS ne permet pas d'animer les span, il faut leur donner
        une position non statique ou un display

        Dans cet exemple avec le logo
        Vue.js, on fait de l'animation pure CSS et des transitions entre
        animations sans framework

        On doit aussi ecouter les evenements de
        Reveal.js pour pouvoir remplacer les animations par animate.css
        animate.css est une librairie d'animation pure CSS3 (no JS)

        On ecoute l'evenement animationiteration pour s'assurer que l'on peut changer
        l'animation en douceur

        Pour l'instant, on a pas encore utilise les characteristiques propres a Vue.js pour
        gerer les animations, on peut faire tout ca sans Vue.js, on montre ici la capacite
        de Vue.js a laisser beaucoup de liberte pour utiliser les animations HTML5 ou des librairies tierces

        Pour le fond, c'est un image transparente avec le portage Vue.js de particles.js, avec la config devoxx
      </pre>
    </aside>
  </section>
</template>

<script>
import MainTitle from "../MainTitle";

export default {
  name: "SlideMainTitle",
  components: {
    MainTitle
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.$root.$on("revealSlide1Fragmentshown", this.revealSlide1Fragmentshown);
    this.$root.$on(
      "revealSlide1Fragmenthidden",
      this.revealSlide1Fragmenthidden
    );
  },
  methods: {
    revealSlide1Fragmentshown(event) {
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
    },
    revealSlide1Fragmenthidden(event) {
      var c = event.fragment.querySelectorAll("span");
      var i;
      for (i = 0; i < c.length; i++) {
        c[i].classList.remove("animated");
        var ac = c[i].getAttribute("data-animate");
        c[i].classList.remove(ac);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.vue-logo-background {
  position: absolute;
  top: 13%;
  left: 30%;
  width: 40%;
  z-index: -1;
}
</style>
