import Vue from "vue";
import Router from "vue-router";
import WebGL from "./views/WebGL.vue";
import Three from "./views/Three.vue";
import AFrame from "./views/A-Frame.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/webgl",
      name: "webgl",
      component: WebGL
    },
    {
      path: "/three",
      name: "three",
      component: Three
    },
    {
      path: "/a-frame",
      name: "a-frame",
      component: AFrame
    }
  ]
});
