<template>
  <section
    data-background-image="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/TGil-slide.png"
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

<style>
.grid-2-columns {
  display: grid;
  grid-template-columns: 70% 30%;
  box-sizing: border-box;
  color: #000;
}

// demo & defaults
.box {
  background-color: #444;
  color: #fff;
  padding: 1em;
  box-sizing: border-box;
}
</style>
