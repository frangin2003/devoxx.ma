<template>
  <section
    id="slide-charles-journey"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <div class="grid-2-columns">
      <div class="box col1"><MapJourney /></div>
      <div class="box col2">
        <input v-model="query" type="text" placeholder="Filter..." />
        <transition-group name="list-complete" tag="ul">
          <li
            v-for="(place, index) in computedList"
            :key="place.id"
            :place-id="place.id"
            :place-index="index"
            :place-path="place.path ? place.path : ''"
            :class="place.shown ? '' : 'fragment'"
          >
            <img :src="place.url" />
          </li>
        </transition-group>
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
  name: "SlideCharlesJourney",
  components: {
    MapJourney
  },
  data() {
    return {
      query: "",
      places: [
        {
          id: "iaai",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/vxuV-iaai.png"
        },
        {
          id: "datavance",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/e9ym-datavance.png",
          path: "mars-paris"
        },
        {
          id: "geosoft",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/T3LK-geosoft.png",
          path: "paris-mars"
        },
        {
          id: "jpmorgan",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Te9W-jpmorgan-chase.png",
          path: "mars-glas"
        },
        {
          id: "devoxx",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Xgd9-devoxx.png",
          path: "glas-mar"
        }
      ]
    };
  },
  computed: {
    computedList() {
      return this.places.filter(item => {
        return item.id.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
      });
    }
  },
  mounted() {
    Reveal.addEventListener("fragmentshown", event => {
      if (event.fragment.attributes["place-index"]) {
        this.places[
          event.fragment.attributes["place-index"].value
        ].shown = true;
        let path = event.fragment.attributes["place-path"].value;

        if (path) {
          this.$root.$emit("travel", {
            path: path
          });
        }
      }
    });
  }
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
.box input {
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  font-family: Orbitron;
  font-size: 0.5em;
}
.box ul {
  list-style-type: none;
}
.box li {
  transition: all 1s;
}
.box img {
  border: none;
  box-shadow: none;
}

.list-complete-item {
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-300px) rotate(1080deg);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
