<template>
  <section
    id="slide-animation-libs"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <ul>
      <li class="fragment css3">
        <img
          src="https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Rzep-css3.png"
        />
      </li>
      <li class="fragment velocity">
        <transition
          v-if="showVelocity"
          v-bind:css="false"
          appear
          v-on:before-appear="beforeAppear"
          v-on:appear="appear"
          v-on:after-appear="afterAppear"
        >
          <p>Velocity<span class="header-dot">.</span>js</p>
        </transition>
      </li>
      <li class="fragment animate-css">Animate.css</li>
      <li class="fragment anime-js">
        <div class="logo-animation">
          <div class="letters">
            <div class="letter letter-a">
              <svg viewBox="0 0 162 162">
                <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M101 141H81a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v80"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M141 161V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120h20"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M121 161V81.33C120.18 58.59 102.7 41 81 41a40 40 0 1 0 0 80h20v40H81A80 80 0 1 1 81 1c43.8 0 78.66 35.27 80 79.7V161h-40z"
                  />
                </g>
              </svg>
            </div>
            <div class="letter letter-n">
              <svg viewBox="0 0 162 162">
                <g fill="none" fill-rule="evenodd" stroke="#FB155A">
                  <path class="fill in" stroke-width="40" d="M21 161V1" />
                  <path class="fill out" stroke-width="40" d="M21 1v160" />
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M41 161V1H1v160h40z"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </div>
            <div class="letter letter-i">
              <svg viewBox="0 0 82 162">
                <g fill="none" fill-rule="evenodd" stroke="#18FF92">
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M21 61v20a60 60 0 0 0 60 60"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M81 141a60 60 0 0 1-60-60V61"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M81 121a40 40 0 0 1-40-40V61H1v20a80 80 0 0 0 80 80v-40z"
                  />
                </g>
              </svg>
            </div>
            <div class="letter letter-m-1">
              <svg viewBox="0 0 162 162">
                <g fill="none" fill-rule="evenodd" stroke="#5E89FB">
                  <path class="fill in" stroke-width="40" d="M21 161V1" />
                  <path class="fill out" stroke-width="40" d="M21 1v160" />
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M41 161V1H1v160h40z"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </div>
            <div class="letter letter-m-2">
              <svg viewBox="0 0 162 162">
                <g fill="none" fill-rule="evenodd" stroke="#FB155A">
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M21 161V81c1-33.14 26.86-60 60-60a60 60 0 0 1 60 60v80"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M141 161V81a60 60 0 0 0-60-60c-33.14 0-59 26.86-60 60v80"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M1 161V80.4C2.35 36.27 37.2 1 81 1a80 80 0 0 1 80 80v80h-40V81a40 40 0 0 0-40-40c-21.7 0-39.18 17.59-40 40.33V161H1z"
                  />
                </g>
              </svg>
            </div>
            <div class="letter letter-e">
              <svg viewBox="0 0 162 162">
                <g fill="none" fill-rule="evenodd" stroke="#18FF92">
                  <path
                    class="fill in"
                    stroke-width="40"
                    d="M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120"
                  />
                  <path
                    class="fill out"
                    stroke-width="40"
                    d="M81 141a60 60 0 1 1 0-120c33.14 0 59 26.86 60 60v20H81"
                  />
                  <path
                    class="line out"
                    stroke-width="2"
                    d="M81 81v40h80V80.7C159.66 36.27 124.8 1 81 1a80 80 0 1 0 0 160v-40a40 40 0 1 1 0-80c21.6 0 39.01 17.42 39.99 40H81z"
                  />
                </g>
              </svg>
            </div>
            <div class="logo-icon">
              <div class="icon">
                <svg viewBox="0 0 62 62">
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke-width="2"
                    transform="translate(1 1)"
                  >
                    <path
                      class="icon-curve"
                      stroke="#FF1554"
                      d="M0 16a80.88 80.88 0 0 1 44 44"
                    />
                    <path
                      class="icon-line"
                      stroke="#5E89FB"
                      d="M4 0h54a2 2 0 0 1 2 2.01V58A2 2 0 0 1 58 60H2a2 2 0 0 1-2-2.01V2A2 2 0 0 1 2 0h2z"
                    />
                    <rect
                      width="40"
                      height="40"
                      x="10"
                      y="10"
                      stroke="#18FF92"
                      rx="20"
                    />
                  </g>
                </svg>
              </div>
              <div class="icon-text">
                <svg viewBox="0 0 160 62">
                  <g fill="#FBF3FB" fill-rule="evenodd">
                    <path
                      d="M27.33 18h1.73l10.15 25.7h-1.69l-3.24-8.24H21.97l-3.28 8.24H17L27.33 18zm6.45 16.1l-5.51-14.55h-.07l-5.73 14.54h11.3z"
                    />
                    <polygon
                      points="51.334 18 53.314 18 69.55 41.58 69.622 41.58 69.622 18 71.206 18 71.206 43.704 69.334 43.704 52.99 19.944 52.918 19.944 52.918 43.704 51.334 43.704"
                    />
                    <polygon
                      points="86.027 18 87.611 18 87.611 43.704 86.027 43.704"
                    />
                    <polygon
                      points="102.433 18 104.701 18 114.745 41.94 114.817 41.94 124.753 18 127.021 18 127.021 43.704 125.437 43.704 125.437 19.944 125.365 19.944 115.573 43.704 113.989 43.704 104.089 19.944 104.017 19.944 104.017 43.704 102.433 43.704"
                    />
                    <polygon
                      points="141.843 18 159.123 18 159.123 19.368 143.427 19.368 143.427 29.664 158.187 29.664 158.187 31.032 143.427 31.032 143.427 42.336 159.303 42.336 159.303 43.704 141.843 43.704"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="dot dot-i">
              <svg viewBox="0 0 42 42">
                <g fill="none" fill-rule="evenodd">
                  <rect
                    width="40"
                    height="40"
                    x="1"
                    y="1"
                    fill="#17F28C"
                    rx="20"
                  />
                </g>
              </svg>
            </div>
            <div class="dot dot-e">
              <svg viewBox="0 0 42 42">
                <g fill="none" fill-rule="evenodd">
                  <rect
                    width="40"
                    height="40"
                    x="1"
                    y="1"
                    fill="#FFFFFF"
                    rx="20"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </li>
      <li class="fragment">
        <div
          class="js-tilt"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.7"
        >
          <span>vanilla-tilt.js</span>
        </div>
      </li>
      <li id="showpopupGSAP" class="fragment"></li>
      <li id="showpopups" class="fragment"></li>
      <li id="hidepopups" class="fragment"></li>
    </ul>
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
import anime from "animejs";
import Velocity from "velocity-animate";
import VanillaTilt from "vanilla-tilt";
import Reveal from "reveal.js/js/reveal";

export default {
  name: "SlideAnimationLibs",
  data() {
    return {
      showVelocity: false,
      stopPopups: false
    };
  },
  mounted() {
    VanillaTilt.init(document.querySelector(".js-tilt"), {
      max: 50,
      speed: 3000
    });

    Reveal.addEventListener("fragmentshown", event => {
      if (event.fragment.id === "showpopupGSAP") {
        this.$root.$emit("addAnnoyingPopup", {
          key: "gsap",
          name: "GSAP",
          showGreensock: true,
          top: 10,
          left: 10,
          percentage: 45,
          zIndex: 1000
        });
      } else if (event.fragment.id === "showpopups") {
        const sleep = m => new Promise(r => setTimeout(r, m));

        (async () => {
          var randomName = () => {
            var text = "";
            var letters = "abcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
              text += letters.charAt(
                Math.floor(Math.random() * letters.length)
              );

            return text;
          };

          for (var i = 0; i < 50; i++) {
            if (this.stopPopups) {
              this.$root.$emit("clearAnnoyingPopup");
              break;
            }

            let top = Math.floor(Math.random() * (2048 + 1)) - 1024;
            let left = Math.floor(Math.random() * (1536 + 1)) - 768;
            let percentage = Math.floor(Math.random() * 80) + 20;

            this.$root.$emit("addAnnoyingPopup", {
              key: i,
              name: randomName(),
              top: top,
              left: left,
              percentage: percentage,
              zIndex: (index => {
                return 1001 + index;
              })(i)
            });
            await sleep(100);
          }
        })();
      } else if (event.fragment.id === "hidepopups") {
        this.stopPopups = true;
        this.$root.$emit("clearAnnoyingPopup");
      } else if (event.fragment.classList.contains("velocity")) {
        this.showVelocity = true;
      } else if (event.fragment.classList.contains("anime-js")) {
        var logoEl = document.querySelector(".logo-animation");
        var pathEls = document.querySelectorAll(
          ".logo-animation path:not(.icon-curve)"
        );
        var innerWidth = window.innerWidth;
        var maxWidth = 740;
        var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
        var logoTimeline = anime.timeline();

        logoEl.style.transform = "translateY(50px) scale(" + logoScale + ")";

        for (var i = 0; i < pathEls.length; i++) {
          var el = pathEls[i];
          el.setAttribute("stroke-dashoffset", anime.setDashoffset(el));
        }

        logoTimeline
          .add({
            targets: ".dot-e",
            translateX: [
              { value: -600, duration: 520, delay: 200, easing: "easeInQuart" },
              {
                value: [-100, 0],
                duration: 500,
                delay: 1000,
                easing: "easeOutQuart"
              }
            ],
            scale: [
              { value: [0, 1], duration: 200, easing: "easeOutBack" },
              { value: 0, duration: 20, delay: 500, easing: "easeInQuart" },
              { value: 1, duration: 200, delay: 1000, easing: "easeOutQuart" },
              { value: 0, duration: 400, delay: 500, easing: "easeInBack" }
            ],
            offset: 0
          })
          .add({
            targets: ".dot-i",
            translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
            scale: [
              { value: [0, 1], duration: 100, easing: "easeOutQuart" },
              { value: 0, duration: 400, delay: 1400, easing: "easeInBack" }
            ],
            delay: 1200,
            offset: 0
          })
          .add({
            targets: ".fill.in",
            strokeDashoffset: {
              value: [anime.setDashoffset, 0],
              duration: 600,
              delay: function(el, i, t) {
                return 700 + i * 100;
              },
              easing: "easeOutQuart"
            },
            stroke: {
              value: [
                "#FFF",
                function(el) {
                  return anime.getValue(el.parentNode, "stroke");
                }
              ],
              duration: 500,
              delay: 500,
              easing: "easeInQuad"
            },
            opacity: {
              value: 0,
              duration: 1,
              delay: function(el, i, t) {
                return 1900 + i * 80;
              }
            },
            offset: 0
          })
          .add({
            targets: ".fill.out",
            strokeDashoffset: [
              {
                value: [anime.setDashoffset, anime.setDashoffset],
                duration: 1890
              },
              {
                value: [0, anime.setDashoffset],
                duration: 800,
                delay: function(el, i) {
                  return i * 80;
                },
                easing: "easeInQuart"
              }
            ],
            offset: 0
          })
          .add({
            targets: ".line.out",
            strokeDashoffset: {
              value: [0, anime.setDashoffset],
              duration: 1200,
              delay: function(el, i, t) {
                return 2500 + i * 100;
              },
              easing: "easeInQuart"
            },
            strokeWidth: {
              value: [0, 2],
              delay: function(el, i, t) {
                return 2000 + i * 100;
              },
              duration: 200,
              easing: "linear"
            },
            offset: 0
          })
          .add({
            targets: ".icon",
            opacity: { value: 1, duration: 10, delay: 2800, easing: "linear" },
            translateY: { value: 60, duration: 800 },
            delay: 4200,
            offset: 0
          })
          .add({
            targets: ".icon-line",
            strokeDashoffset: [
              {
                value: [anime.setDashoffset, anime.setDashoffset],
                duration: 3000
              },
              { value: 0, duration: 1200, easing: "easeInOutQuart" }
            ],
            strokeWidth: {
              value: [8, 2],
              delay: 3000,
              duration: 800,
              easing: "easeInQuad"
            },
            stroke: {
              value: [
                "#FFF",
                function(el) {
                  return anime.getValue(el, "stroke");
                }
              ],
              duration: 800,
              delay: 3400,
              easing: "easeInQuad"
            },
            offset: 0
          })
          .add({
            targets: [".icon-text path", ".icon-text polygon"],
            translateY: [50, 0],
            opacity: { value: [0, 1], duration: 100, easing: "linear" },
            delay: function(el, i, t) {
              return 4200 + i * 20;
            },
            offset: 0
          });
      }
    });
  },
  methods: {
    beforeAppear: function(el) {
      el.style.opacity = 0;
    },
    appear: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
    },
    afterAppear: function(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        {
          complete: () => {
            Velocity(
              el,
              {
                rotateZ: "-1deg",
                translateY: "-1px",
                translateX: "-1px",
                opacity: 1
              },
              { duration: 600 },
              { complete: done }
            );
          }
        }
      );
    }
  }
};
</script>

<style scoped>
section {
  top: 0 !important;
}
ul {
  list-style-type: none;
  text-align: center;
}
li {
  margin-bottom: 20px;
}
li.css3 {
  height: 150px;
}
li.css3 img {
  border: none !important;
  box-shadow: none !important;
}
li.velocity {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #3a3a3a;
}
span.header-dot {
  color: #ce4179;
}
li.animate-css {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 60s infinite;
  font: 100%/1.5 "Roboto", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
}
li.anime-js {
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  border-radius: 20px;
  height: 240px;
  padding: 10px;
  transform: scale(0.5);
}
li.anime-js.ready {
  opacity: 1;
}
.logo-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -40px;
}
.letters {
  position: relative;
  display: flex;
  width: 682px;
  height: 162px;
}
.letter {
  position: relative;
  width: 162px;
  height: 162px;
}
.letter:not(:first-child) {
  margin-left: -42px;
}
.letter-i {
  z-index: 1;
  width: 82px;
  transform-origin: 100% 50%;
}
.dot {
  position: absolute;
  width: 42px;
  height: 42px;
  transform: scale(0);
}
.dot-i {
  top: 0;
  left: 240px;
}
.dot-e {
  bottom: 0;
  right: 0;
}
.logo-icon {
  display: flex;
  position: absolute;
  left: 230px;
  top: -10px;
  width: 222px;
  height: 62px;
}
.icon {
  width: 62px;
  height: 62px;
  opacity: 0;
}
.icon-text {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 160px;
  height: 62px;
}
.icon-text path,
.icon-text polygon {
  opacity: 0;
}

.js-tilt {
  transform-style: preserve-3d;
  background: -webkit-linear-gradient(
    to right,
    #0099f7,
    #f11712
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0099f7,
    #f11712
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 200px;
  width: 200px;
  position: absolute;
  left: 60%;
  width: 40%;
  top: 70%;
}
.js-tilt span {
  transform: translateZ(20px);
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  font-size: 0.7em;
  transform: translateZ(30px) translateX(-50%) translateY(-50%);
  color: #fff;
  font-family: "Quicksand", sans-serif;
}
</style>
