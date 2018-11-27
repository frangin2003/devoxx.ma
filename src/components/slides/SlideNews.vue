<template>
  <section id="slide-news" :data-background-image="titleBgImg">
    <transition
      v-if="showNewsPaper"
      v-bind:css="false"
      appear
      v-on:before-appear="beforeAppear"
      v-on:appear="appear"
    >
      <div class="newspaper">
        <header>
          <main><span>Devoxx News</span></main>
          <span>Marrakesh - 26 Octobre 2015</span>
        </header>
        <hr />
        <main>
          <img class="hillvalley-news" :src="hillvalley" />
          <div class="evan-news promohead">Vue.js v1.0 est sorti!</div>
          <article class="evan-news">
            <img :src="evan" />
            <p></p>
          </article>
          <article class="evan-news">
            <p>
              After 300+ commits, 8 alphas, 4 betas and 2 release candidates,
              today I am very proud to announce the release of Vue.js 1.0.0
              Evangelion! Many thanks to all those who participated in the API
              re-design process - it would not have been possible without all
              the input from the community.
            </p>
          </article>
        </main>
      </div>
    </transition>
    <aside class="notes">
      <pre>
            Evan You
            Ne en Chine, venu etudier aux USA
            Bosse pour Google dans un laboratoire d'experimentations
            S'ennui et n'est pas satisfait par Angular
            Bosse puis sort Vue.js
            Maintenant il ne fait plus que ca, travaillant sur la version 3
                          </pre
      >
    </aside>
  </section>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  name: "SlideNews",
  data() {
    return {
      slideIsActive: false,
      showNewsPaper: false
    };
  },
  mounted() {
    this.$root.$on("showNewsPaper", event => {
      this.showNewsPaper = true;
    });
  },
  methods: {
    beforeAppear: function(el) {},
    appear: function(el, done) {
      Velocity(
        el,
        { scale: [1, 0], rotateZ: "1080deg" },
        {
          duration: 1000,
          complete: () => {
            const sleep = m => new Promise(r => setTimeout(r, m));

            (async () => {
              await sleep(2000);

              el = document.querySelector(".hillvalley-news");
              Velocity(
                el,
                { opacity: 0 },
                {
                  duration: 1000,
                  complete: () => {
                    el.style.display = "none";
                    document.querySelectorAll(".evan-news").forEach(en => {
                      console.log(en);
                      en.style.display = "block";
                      en.style.opacity = "0";

                      Velocity(
                        en,
                        {
                          opacity: 1
                        },
                        { duration: 1000 }
                      );
                    });
                  }
                }
              );
            })();
          }
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.newspaper {
  height: 614px;
  width: 70%;
  position: absolute;
  top: 13%;
  left: 15%;
  z-index: -1;
}

header {
  background-color: #fff;
  height: auto;
  display: flex;
  flex-direction: colomn;
  flex-wrap: wrap;
  padding: 0 20px;
}
header main {
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 15px;
  font-size: 30pt;
  flex: 1;
  text-transform: uppercase;
}
header main > span {
  color: #000;
  font-weight: bold;
}
header > span {
  color: #000;
  letter-spacing: 10px;
  font-size: 13pt;
  text-align: center;
  width: 100%;
}
hr {
  background-color: #000;
}
.promohead {
  background-color: #fff;
  width: 100%;
  color: #000;
  text-align: center;
  height: 40px;
}
main {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  justify-content: space-around;
}
main img {
  border: none;
  box-shadow: none;

  filter: grayscale(100%);
}
main article {
  margin: 20px;
  border: none;
  flex: 1;
  text-align: center;
  max-height: 298px;
}
main article p {
  padding: 10px;
  color: #000;
  text-align: justify;
  font-size: 14pt;
}
main article img {
  width: 300px;
  padding: 10px;
}
.evan-news {
  display: none;
}
</style>
