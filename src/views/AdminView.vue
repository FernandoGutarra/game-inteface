<template>
  <div class="Admin">
    <h1>API OSASIS GAME</h1>
    <InsertGameVue
      :notifyError="notifyError"
      :notify="notify"
      :categories="categories"
    />
    <DeleteGameVue :notifyError="notifyError" :notify="notify" :games="games" />
    <UpdateGameVue
      :notifyError="notifyError"
      :notify="notify"
      :categories="categories"
      :games="games"
    />
    <InsertCategoryVue />
    <DeleteCategoryVue
      :notifyError="notifyError"
      :notify="notify"
      :categories="categories"
    />
    <UpdateCategoryVue
      :notifyError="notifyError"
      :notify="notify"
      :categories="categories"
    />
  </div>
</template>

<script>
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";
import { ref } from "vue";
import axios from "../services/axios";
import DeleteCategoryVue from "../components/DeleteCategory.vue";
import DeleteGameVue from "../components/DeleteGame.vue";
import InsertCategoryVue from "../components/InsertCategory.vue";
import InsertGameVue from "../components/InsertGame.vue";
import UpdateCategoryVue from "../components/UpdateCategory.vue";
import UpdateGameVue from "../components/UpdateGame.vue";
export default {
  components: {
    DeleteGameVue,
    InsertGameVue,
    UpdateGameVue,
    DeleteCategoryVue,
    UpdateCategoryVue,
    InsertCategoryVue,
  },
  setup() {
    const categories = ref([]);
    const games = ref([]);
    const notify = (message) =>
      toast.success(message, {
        autoClose: 3000,
      });
    const notifyError = (message) =>
      toast.error(message, {
        autoClose: 3000,
      });
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        categories.value = response.data;
      } catch (error) {
        notifyError("Error al obtener las categorías:", error);
      }
    };
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/games");
        games.value = response.data;
      } catch (error) {
        notifyError("Error al obtener las juegos:", error);
      }
    };
    fetchGames();
    fetchCategories();
    return {
      games,
      categories,
      notify,
      notifyError,
    };
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 600px; /* Establece un ancho máximo para el formulario */
  margin: 0 auto; /* Centra el formulario horizontalmente */
  padding: 20px; /* Añade un poco de espacio interno al formulario */
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%; /* Ocupa todo el ancho disponible */
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 100%; /* Establece un ancho máximo del 100% para que se ajusten al contenedor */
}
.form-group-button {
  display: flex;
  justify-content: center;
  width: 100%; /* Ocupa todo el ancho disponible */
}
/* Estilos para los inputs y textarea */
.input-filed {
  position: relative;
  display: flex; /* Utilizamos flexbox para centrar horizontalmente los elementos */
  align-items: center; /* Centramos horizontalmente los elementos dentro del div */
}

.input-filed input,
.input-especial {
  /* Ajustamos el ancho máximo del input para que no se reduzca la parte derecha */
  max-width: 400px;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
  border: 1px solid #ffffff;
  background: #2d2d2d;
  color: #ffffff;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
.input-filed label {
  position: absolute;
  top: 50%; /* Posición inicial del label */
  left: 12px;
  color: #ffffff;
  font-size: 19px;
  pointer-events: none;
  transition: 0.3s;
  background: transparent;
  z-index: 1;
  transform: translateY(
    -50%
  ); /* Ajusta la posición inicial del label dentro del input */
}
.label-especial {
  color: #ffffff;
}
input:-webkit-autofill { 
  -webkit-box-shadow:200px 200px 100px white inset; 
  box-shadow:200px 200px 100px white inset; 
}
/* Cuando el input está enfocado o contiene algún valor, mueve el label hacia arriba */
.input-filed input:focus ~ label,
.input-filed input:valid ~ label {
  top: 0;
  transform: translateY(-18%);
  font-size: 15px;
  padding: 0 2px;
  background: #1a1a1a;
}

/* Estilos para el textarea */
.input-textarea {
  width: 100%;
  min-height: 100px; /* Ajusta la altura mínima del textarea */
  max-height: 300px; /* Ajusta la altura máxima del textarea */
  border-radius: 6px;
  font-size: 18px;
  padding: 10px 15px; /* Agrega más espaciado alrededor del textarea */
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  outline: none;
  margin-top: 10px;
  margin-bottom: 20px;
  resize: vertical; /* Permite redimensionar verticalmente el textarea */
}
.btn {
  display: inline-block;
  border: none;
  background-color: #35a0fd;
  color: #ffffff;
  padding: 10px 10px;
  border-radius: 6px;
  cursor: pointer;
  width: 70%;
}
.form-group-button {
  display: flex;
  justify-content: center;
}

/* Estilos para el título */
.title {
  margin-bottom: 20px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Invertir el color del icono del calendario */
}

/* Estilos para el contenedor principal */
/* Estilos generales */
h1 {
  text-align: center;
  margin-top: 60px;
  color: #35a0fd;
  margin-bottom: 80px;
}

h2 {
  color: #ffffff;
}

span {
  background-color: transparent;
}
</style>