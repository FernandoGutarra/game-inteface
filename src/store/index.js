import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
export default createStore({
  state: {
    token: null,
    userName: null, // Nuevo estado para almacenar el nombre del usuario
    isLoggedIn: false,
  },
  getters: {
    getToken(state) {
      return state.token;
  },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isLoggedIn = !!token;
    },
    setUserName(state, userName) { // Nueva mutación para establecer el nombre del usuario
      state.userName = userName;
    },
   
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', {
            email,
            password
        });
        if (response.status === 200 && response.data.token) {
          const token = response.data.token;
          const userName = response.data.user.name; // Obtén el nombre del usuario de la respuesta

          commit('setToken', token);
          commit('setUserName', userName); // Llama a la mutación para establecer el nombre del usuario
            router.push("/admin");
          return true; // Inicio de sesión exitoso
        } else {
          return false; // Credenciales inválidas
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return false; // Error al hacer la solicitud
      }
    }
  },
  modules: {},
});