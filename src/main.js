// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import XParticles from "x-particles";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(XParticles);

Vue.mixin({
  data: function() {
    return {
      get mainTitleBgImg() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/CCg--main-title.png";
      },
      get titleBgImg() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/rYbp-title.png";
      },
      get slideBgImg() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/TGil-slide.png";
      },
      get brazil() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/ZHT9-brazil.png";
      },
      get china() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/JXXC-china.png";
      },
      get germany() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/L-jj-germany.png";
      },
      get hawaii() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/M6zi-hawaii.png";
      },
      get mexico() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/giy4-mexico.png";
      },
      get netherlands() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/F20a-netherlands.png";
      },
      get switzerland() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/beKo-switzerland.png";
      },
      get usa() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/Z_ML-usa.png";
      },
      get india() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/f2sX-india.png";
      },
      get worldmap() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/inLD-worldmap.png";
      },
      get greensock() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/4Foz-greensock.PNG";
      },
      get evan() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/RTU3-evan.PNG";
      },
      get hillvalley() {
        return "https://uploads.codesandbox.io/uploads/user/5c71d92b-3d96-4feb-ad6e-f97a685e11f8/lH-H-hillnews.png";
      }
    };
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
