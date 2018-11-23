<template>
  <div class="map-journey">
    <svg width="599" height="843">
      <g fill="none" stroke="#000">
        <path
          id="mars-paris"
          d="m520.96 423.03s45.629-107.58-19.668-157.05"
          stroke-width="1.5091px"
        />
        <path
          id="paris-mars"
          d="m501.29 265.99s-66.083 115.43 19.668 157.05"
          stroke-width="1.5091px"
        />
        <path
          id="mars-glas"
          d="m520.96 423.03c91.777-197.63-60.389-343.09-60.389-343.09"
          stroke-width="2.0387px"
        />
        <g stroke-width="1.5091px">
          <path id="glas-mar" d="m460.38 79.89s-368.97 365.13-259.61 555.94" />
          <path
            id="mars-amster"
            d="m574.45 170.19s19.668 142.13-53.496 252.84"
          />
          <path
            id="amster-mars"
            d="m574.45 170.19s-78.671 135.84-53.496 252.84"
          />
        </g>
      </g>
    </svg>
    <div class="plane"></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "MapJourney",
  data() {
    return {};
  },
  mounted() {
    var path = anime.path("#mars-glas");

    var easings = ["linear", "easeInCubic", "easeOutCubic", "easeInOutCubic"];

    var motionPath = anime({
      targets: ".plane",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: function(el, i) {
        console.log(path("angle"));
        return easings[i];
      },
      duration: 10000,
      loop: true
    });

    var pathEls = document.querySelectorAll(".map-journey path");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 10000,
        delay: 0,
        easing: "easeInOutSine",
        autoplay: true
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-journey {
  transform: scale(0.7);
  position: relative;
  background-image: url(https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/8alE-map.png);
  background-repeat: no-repeat;
  background-size: 599px 843px;
}

.plane {
  mix-blend-mode: multiply;
  pointer-events: none;
  display: inline-block;
  top: 5px;
  left: -5px;
  position: absolute;
  background: url(https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Tb---plane.png);
  background-size: 42px 42px;
  width: 42px;
  height: 42px;
}

path {
  fill: none;
  stroke: red;
  stroke-width: 5px;
}
</style>
