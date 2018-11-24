<template>
  <section
    id="slide2"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <div class="grid-2-columns">
      <div class="box col1"><MapJourney /></div>
      <div class="box col2">
        <ul>
          <li>IAAI Marseille</li>
          <li>Datavance Paris</li>
          <li>GeoSoft Marseille</li>
          <li>JP Morgan Chase Glasgow</li>
          <li>Devoxx Maroc 2018 Marrakesh</li>
        </ul>
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
import MapJourney from "../MapJourney";

export default {
  name: "Slide2CharlesJourney",
  components: {
    MapJourney
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.grid-2-columns {
  font-family: "Orbitron";
  display: grid;
  grid-template-columns: 70% 30%;
  box-sizing: border-box;
  color: #000;
  font-size: 0.9em;
}

.box {
  color: #000;
  padding: 1em;
  box-sizing: border-box;
}
</style>
