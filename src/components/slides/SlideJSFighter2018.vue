<template>
  <section
    id="slide-js-fighter-2018"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
    v-on:keyup.87="console.log('w-up');"
    v-on:keyup.83="console.log('s-down');"
    v-on:keyup.65="console.log('a-left');"
    v-on:keyup.68="console.log('d-right');"
  >
    <div class="container">
      <div class="sliding-background-js"></div>
      <div class="grid-3-columns">
        <div class="box col1">
          <img
            class="player player-face player1"
            :src="player1ImgUrl"
            onLoad="this.style.display='inline'"
            onError="this.onerror=null;this.style.display='none'"
          />
          <canvas
            class="player-name player1-name-js"
            width="250"
            height="40"
          ></canvas>
          <img
            class="player flag player1"
            :src="player1FlagImgUrl"
            onLoad="this.style.display='inline'"
            onError="this.onerror=null;this.style.display='none'"
          />
          <canvas
            class="player-country player1-country"
            width="250"
            height="20"
          ></canvas>
        </div>
        <div class="box col2">
          <canvas class="title-player-js" width="250" height="100"></canvas>
          <img class="worldmap reset-border-bg-shadow" :src="worldmap" />
        </div>
        <div class="box col3">
          <img class="player player2" :src="player2ImgUrl" @error="hide" />
          <canvas
            class="player-name player2-name"
            width="250"
            height="40"
          ></canvas>
        </div>
      </div>
      <div class="photos">
        <div
          :key="index"
          v-for="(player, index) in players"
          class="photo-wrapper reset-border-bg-shadow"
        >
          <img
            :player-index="index"
            @mouseover="selectPlayer(index);"
            class="fighter reset-border-bg-shadow photo-noborder"
            :src="getImgUrl(index)"
          />
          <div
            :player-text-index="index"
            class="player1 photo-text-over"
            style="color: red;"
          >
            P1
          </div>
          <div
            :player-text-index="index"
            class="player2 photo-text-over"
            style="color: green;"
          >
            P2
          </div>
        </div>
      </div>
    </div>
    <canvas class="title-background-js" width="250" height="150"></canvas>
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
export default {
  name: "SlideJSFighter2018",
  data() {
    return {
      players: [
        {
          name: "Angular.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/7skU-angular.png"
        },
        {
          name: "Vue.js",
          flag: "china",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/qkMS-vue.png"
        },
        {
          name: "Aurelia.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/SbhZ-aurelia.png"
        },
        {
          name: "Backbone.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/TlLY-backbone.png"
        },
        {
          name: "Polymer.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/zFjd-polymer.png"
        },
        {
          name: "Meteor.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/8_Qf-meteor.png"
        },
        {
          name: "JQuery",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/vxfs-jquery.png"
        },
        {
          name: "AmberJS",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/PoMU-amber2.png"
        },
        {
          name: "Knockout.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Gdfp-knockout.png"
        },
        {
          name: "React.js",
          flag: "usa",
          url:
            "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/W2s1-react.png"
        }
      ],
      player1Index: 0,
      player2Index: 0,
      player1ImgUrl: "",
      player2ImgUrl: "",
      player1FlagImgUrl: "",
      player2FlagImgUrl: ""
    };
  },
  mounted() {
    var canvas = document.querySelector(".title-background-js"),
      ctx = canvas.getContext("2d");

    ctx.fillStyle = "#cc7845";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.addCanvasText(ctx, "JS", 10, 65);
    this.addCanvasText(ctx, "Fighter", 20, 125);

    var data = canvas.toDataURL();
    var slidingBg = document.querySelector(".sliding-background-js");

    slidingBg.style.backgroundImage = "url(" + data + ")";
    slidingBg.style.animation = "slide 60s linear infinite !important";

    canvas.style.display = "none";

    canvas = document.querySelector(".title-player-js");
    ctx = canvas.getContext("2d");
    this.addCanvasText(
      ctx,
      "JS",
      125,
      45,
      "italic bold 17pt AbuketWeb",
      true,
      "center"
    );
    this.addCanvasText(
      ctx,
      "Fighter",
      125,
      85,
      "italic bold 17pt AbuketWeb",
      true,
      "center"
    );
  },
  methods: {
    addCanvasText(ctx, text, x, y, font, skew, textAlign) {
      ctx.shadowColor = "#0e0e16";
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 0;
      ctx.font = !font ? "italic 30pt AbuketWeb" : font;

      var angle = -Math.PI / 23;
      var gradient = ctx.createLinearGradient(0, 0, 0, 60);
      gradient.addColorStop(0, "rgb(255, 153, 51)");
      gradient.addColorStop(1, "rgb(255, 0, 128)");
      if (skew !== false) {
        ctx.setTransform(1, Math.tan(angle), 0, 1, 0, 0);
      }
      ctx.fillStyle = gradient;
      ctx.textAlign = !textAlign ? "left" : textAlign;
      ctx.fillText(text, x, y);
    },
    selectPlayer(index) {
      console.log(index);
      //debugger;
      if (this.player1Index >= 0) {
        var previousPlayer = document.querySelector(
          `[player-index="${this.player1Index}"]`
        );
        previousPlayer.classList.remove("photo-border-1");
        previousPlayer.classList.add("photo-noborder");
        document.querySelector(
          `[player-text-index="${this.player1Index}"]`
        ).style.visibility = "hidden";
      }
      this.player1Index = index;
      var player = document.querySelector(
        `[player-index="${this.player1Index}"]`
      );
      document.querySelector(
        `[player-text-index="${this.player1Index}"]`
      ).style.visibility = "visible";
      player.classList.remove("photo-noborder");
      player.classList.add("photo-border-1");
      player.style.borderColor = "red";

      this.player1ImgUrl = this.getImgUrl(index);
      this.player1FlagImgUrl = this[this.players[index].flag];

      var player1 = document
        .querySelectorAll("img.player1")
        .forEach(element => {
          element.style.display = "inline";
        });

      var canvas = document.querySelector(".player1-name-js");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.addCanvasText(
        ctx,
        this.players[index].name,
        110,
        30,
        "italic bold 25pt Orbitron",
        false,
        "center"
      );

      canvas = document.querySelector(".player1-country");
      ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.addCanvasText(
        ctx,
        this.players[index].flag.toUpperCase(),
        110,
        15,
        "bold 15pt Orbitron",
        false,
        "center"
      );
    },
    getImgUrl(index) {
      return this.players[index].url;
    },
    hide(event) {
      event.target.style.display = "none";
    },
    show(event) {
      event.target.style.display = "inline";
    }
  }
};
</script>

<style scoped>
section {
  height: 100% !important;
}
.reset-border-bg-shadow {
  border: none !important;
  background: none !important;
  box-shadow: none !important;
}
.container {
  overflow: hidden;
  top: 40% !important;
  max-width: 960px;
  height: 90%;
  margin: 0 auto;
}
.sliding-background-js {
  height: 5076px;
  width: 5076px;
  animation: slide 60s linear infinite !important;
  filter: invert(100%);
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, -1692px, 0);
  }
}
.grid-3-columns {
  top: 5%;
  left: 2.3%;
  width: 100%;
  height: 100% !important;
  position: absolute;
  display: grid;
  grid-template-columns: 22.5% 50% 22.5%;
  box-sizing: border-box;
  color: #000;
  font-size: 0.9em;
}

.box {
  color: #000;
  padding: 1em;
  box-sizing: border-box;
  padding: 0 !important;
}
img.player {
  width: 100%;
  border: none;
  margin: 0 !important;
}
img.player-face {
  border-radius: 10px;
}
img.flag {
  width: 20%;
  image-rendering: pixelated;
  margin-bottom: -9% !important;
}
img.player1 {
  moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  transform: scale(-1, 1);
  filter: FlipH;
}
.photos {
  position: absolute;
  top: 55%;
  left: 2.3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 0;
  max-width: 980px;
}

.photos div {
  display: block;
  float: left;
  flex: 0 0 auto;
  z-index: 1;
}

.photos img {
  margin: 0 !important;
  width: 102px !important;
  height: 102px !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.photo-wrapper {
  float: left !important;
  text-align: center;
  position: relative;
}
.photo-noborder {
  padding: 3px !important;
  border: none !important;
}
.photo-border-1 {
  padding: 0 !important;
  border: 3px solid red !important;
}
.photo-border-2 {
  padding: 0 !important;
  border: 3px solid green !important;
}
.photos div {
  width: calc(90% / 8);
  height: calc(90% / 8);
}
.photo-text-over {
  font-family: Orbitron;
  font-weight: bold;
  font-size: 0.5em;
  visibility: hidden;
  position: absolute;
}
.player1.photo-text-over {
  top: 8px;
  left: 8px;
}
.player2.photo-text-over {
  top: 8px;
  right: 8px;
}
</style>
