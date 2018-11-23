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
