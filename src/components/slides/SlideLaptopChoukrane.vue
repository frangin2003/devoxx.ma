<template>
  <section id="slide-laptop-choukrane" :data-background-image="titleBgImg">
    <div v-bind:class="[slideIsActive ? 'typewriter-type' : '', 'typewriter']">
      <p class="message">Choukrane!</p>
    </div>
    <div class="laptop"><div class="keyboard"></div></div>
    <div v-bind:class="[slideIsActive ? 'heart-beat' : '', 'heart']">
      <img
        src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/wZD8-heart.png"
      />
    </div>
    <aside class="notes">
      <pre>
        Pour ce slide, je devais afficher les elements pour qu'ils soient deja places
        mais declencher l'animation uniquement quand le slide est affiche
        j'utilise les liaisons de classes conditionnelles
        j'attache l'animation uniquement quand le slide est visible
        comme toujours, pour placer les elements proprement dans n'importe quelle
        resolution en CSS, c'est comme quand tu veux regler ta parabole
         a la main, un peu a droite, un peu a gauche...
         ah c'est bon touche plus!
         mais c'est quand meme plus facile aujourd'hui vu la quantite de proprietes
         tu trouve toujours le truc qui va regler ton probleme
      </pre>
    </aside>
  </section>
</template>

<script>
import anime from "animejs";

export default {
  name: "SlideLaptopChoukrane",
  data() {
    return {
      slideIsActive: false
    };
  },
  mounted() {
    this.$root.$on("slideLaptopChoukraneStartAnim", event => {
      this.slideIsActive = true;
      this.$forceUpdate();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  position: absolute;
  font-family: Orbitron !important;
  color: #fff !important;
  font-size: 1.7em;
  left: 21%;
  top: 40%;
  z-index: 0;
}
/* from https://css-tricks.com/snippets/css/typewriter-effect/ */
.typewriter p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid green; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
}

.typewriter-type p {
  animation: typing 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
.laptop {
  background: #fc9252;
  border: 12px solid lightgrey;
  border-radius: 10px 10px 0 0;
  transform: scale(2.7);
  height: 142px;
  width: 220px !important;
  position: absolute;
  top: 23%;
  left: 38%;
  width: 40%;
  z-index: -1;
}

.keyboard {
  position: absolute;
  top: 154px;
  width: 296px;
  right: -38px;
  height: 10px;
  border-radius: 0 0 20px 20px;
  background: lightgrey;
}

.heart {
  transform: scale(0.6) translateY(-25vh);
  transform-origin: center;
  bottom: 50%;
  z-index: 1;
}

.heart > img {
  border: none !important;
  background: none !important;
  box-shadow: none;
  transform-origin: center;
}

.heart-beat > img {
  animation: beat 1.5s infinite;
  animation-fill-mode: forwards;
}

@keyframes beat {
  0% {
    transform: scale(0.6);
  }
  25% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.6);
  }
  60% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.6);
  }
}
</style>
