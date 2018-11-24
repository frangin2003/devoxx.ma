<template>
  <section
    id="slide-js-fighter-2018"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <img
      class="sf2bg"
      src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/lCA_-sf2select.png"
    />
    <div class="container">
      <div class="photos">
        <img
          v-for="index in 16"
          @mouseover="showFighter(index);"
          class="fighter"
          :src="getImgUrl(index)"
        />
      </div>
    </div>
    <aside class="notes">
      <pre>
        la c'est anime.js qu'on utilise, comme son nom l'indique c'est une librairie JS pure
        petit tip, mon image d'avion n'a pas de transparence, son fond est blanc
        j'utilise le mix-blend-mode: multiply; qui va multiplier les couleurs de l'avion avec le fond
        le resultat est simple, le noir reste noir, le blanc prend la couleur de la carte
      </pre>
    </aside>
  </section>
</template>

<script>
import Reveal from "reveal.js/js/reveal";

export default {
  name: "SlideJSFighter2018",
  data() {
    return {
      fighters: []
    };
  },
  mounted() {},
  methods: {
    showFighter(index) {
      //event.fromElement.src;
      console.log(index);
      document.querySelectorAll(".sf2bg")[0].src = this.getImgUrl(index);
    },
    getImgUrl(index) {
      return (
        "https://devoxx.ma/assets/images/speakers/speaker-" +
        index +
        "." +
        (index == 3 ? "png" : "jpg")
      );
    }
  }
};
</script>

<style scoped>
.sf2bg {
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 13%;
  right: 2%;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}

.photos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 0;
  max-width: 980px;
}

.photos img {
  display: block;
  float: left;
  flex: 0 0 auto;
  background: none !important;
  border: none !important;
  margin: 0 !important;
  padding: 3px;
}

@media screen and (min-width: 1024px) {
  .photos img {
    width: calc(90% / 8);
    height: calc(90% / 8);
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .photos img {
    width: calc(80% / 4);
    height: calc(80% / 4);
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .photos img {
    width: calc(80% / 3);
    height: calc(80% / 3);
  }
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .photos img {
    width: calc(80% / 2);
    height: calc(80% / 2);
  }
}

@media screen and (max-width: 320px) {
  .photos img {
    width: 80%;
    height: 80%;
  }
}
</style>
