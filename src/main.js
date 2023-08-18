import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa tu enrutador Vue Router
import store from "./store"; // Importa tu store Vuex

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //como esta shit originalMente esta en true
  if (requiresAuth && !store.state.isLoggedIn) {
    // Si la ruta requiere autenticación y el usuario no está logeado
    next("/");
  } else {
    next();
  }
});

createApp(App).use(store).use(router).mount("#app");
