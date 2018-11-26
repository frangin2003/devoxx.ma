<template>
  <section
    id="slide-js-fighter-bg"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <div class="fight-background">
      <!--
        https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/uTCO-fight.PNG
      -->
      <img
        class="fight-bg-img"
        src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/QpYh-fightbg.PNG"
      />
    </div>
    <div class="react-div">
      <img
        class="react-img animated bounce infinite"
        src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/W2s1-react.png"
      />
    </div>
    <div class="angular-div animated bounce infinite">
      <img
        class="angular-img"
        src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/7skU-angular.png"
      />
    </div>
    <div class="fragment here-come">HERE COMES A NEW CHALLENGER</div>
    <aside class="notes"><pre></pre></aside>
  </section>
</template>

<script>
export default {
  name: "SlideJSFighterBg",
  components: {},
  data() {
    return {};
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
        var vueLogo = document.querySelector(".fight-bg-img");
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
.fight-bg-img,
.angular-img,
.react-img {
  border: none !important;
  background: none !important;
  box-shadow: none !important;
}
.fight-background-background {
  position: absolute;
  top: 13%;
  left: 30%;
  width: 40%;
  z-index: -1;
}
.angular-div {
  position: absolute;
  top: 37%;
  left: 5%;
  width: 40%;
  z-index: 1;
}
.react-div {
  transform: scale(0.6);
  position: absolute;
  top: 32%;
  left: 50%;
  width: 40%;
  z-index: 1;
}
.here-come {
  background-color: #000;
  border-radius: 10px;
  opacity: 0.9;
  font-weight: bold;
  color: #fc9252;
  position: absolute;
  top: 23%;
  left: 5%;
  width: 90%;
  z-index: 1;
}
</style>
