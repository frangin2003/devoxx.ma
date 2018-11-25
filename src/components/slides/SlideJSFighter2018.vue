<template>
  <section
    id="slide-js-fighter-2018"
    :data-background-image="slideBgImg"
    data-background-color="#fff"
  >
    <div class="container">
      <div class="sliding-background"></div>
      <div class="grid-3-columns">
        <div class="box col1">
          <img
            class="player player-face player1"
            :src="player1ImgUrl"
            onLoad="this.style.display='inline'"
            onError="this.onerror=null;this.style.display='none'"
          />
          <canvas
            class="player-name player1-name"
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
          <canvas class="title-player" width="250" height="75"></canvas>
          <img class="worldmap" :src="worldmap" />
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
        <img
          :player-index="index"
          :key="index"
          v-for="index in 16"
          @mouseover="selectPlayer(index);"
          class="fighter photo-noborder"
          :src="getImgUrl(index)"
        />
      </div>
    </div>
    <canvas class="title-background" width="250" height="150"></canvas>
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
        { name: "Ray", flag: "usa" },
        { name: "Christina", flag: "usa" },
        { name: "Bert", extension: "png", flag: "netherlands" },
        { name: "Ixchel", flag: "mexico" },
        { name: "Venkat", flag: "usa" },
        { name: "Andres", flag: "switzerland" },
        { name: "Markus", flag: "germany" },
        { name: "Sebastian", flag: "germany" },
        { name: "Phil", flag: "usa" },
        { name: "Chris", flag: "hawaii" },
        { name: "Paul", flag: "usa" },
        { name: "Gail", flag: "usa" },
        { name: "Stephen", flag: "usa" },
        { name: "Charkes", flag: "usa" },
        { name: "Nikhil", flag: "india" },
        { name: "Bruno", flag: "brazil" }
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
    var canvas = document.querySelector(".title-background"),
      ctx = canvas.getContext("2d");

    ctx.fillStyle = "#cc7845";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.addCanvasText(ctx, "DEVOXX", 10, 65);
    this.addCanvasText(ctx, "Talkers", 20, 125);

    var data = canvas.toDataURL();
    var slidingBg = document.querySelector(".sliding-background");

    slidingBg.style.backgroundImage = "url(" + data + ")";
    slidingBg.style.animation = "slide 60s linear infinite !important";

    canvas.style.display = "none";

    canvas = document.querySelector(".title-player");
    ctx = canvas.getContext("2d");
    this.addCanvasText(
      ctx,
      "DEVOXX",
      125,
      40,
      "italic bold 17pt AbuketWeb",
      true,
      "center"
    );
    this.addCanvasText(
      ctx,
      "Talkers",
      125,
      80,
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
      if (this.player1Index > 0) {
        var previousPlayer = document.querySelector(
          `[player-index="${this.player1Index}"]`
        );
        previousPlayer.classList.remove("photo-border-1");
        previousPlayer.classList.add("photo-noborder");
      }
      this.player1Index = index;
      var player = document.querySelector(
        `[player-index="${this.player1Index}"]`
      );
      player.classList.remove("photo-noborder");
      player.classList.add("photo-border-1");
      player.style.borderColor = "red";

      this.player1ImgUrl = this.getImgUrl(index);
      this.player1FlagImgUrl = this[this.players[index - 1].flag];

      var player1 = document
        .querySelectorAll("img.player1")
        .forEach(element => {
          element.style.display = "inline";
        });

      var canvas = document.querySelector(".player1-name");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.addCanvasText(
        ctx,
        this.players[index - 1].name,
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
        this.players[index - 1].flag.toUpperCase(),
        110,
        20,
        "bold 15pt Orbitron",
        false,
        "center"
      );
    },
    getImgUrl(index) {
      return (
        "https://devoxx.ma/assets/images/speakers/speaker-" +
        index +
        "." +
        (index == 3 ? "png" : "jpg")
      );
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
.worldmap {
  border: none;
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
.sliding-background {
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
  margin-bottom: -10%;
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

.photos img {
  display: block;
  float: left;
  flex: 0 0 auto;
  background: none !important;
  margin: 0 !important;
  z-index: 1;
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
  border: 3px solid yellow !important;
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
