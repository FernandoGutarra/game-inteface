<template>
  <div class="container">
    <h2 class="title">Eliminar Categoría</h2>
    <form @submit.prevent="deleteCategory" class="form">
      <div class="form-group">
        <label for="selectedCategory" class="label-especial">Seleccionar Categoría:</label>
        <select v-model="selectedCategory" id="selectedCategory" class="input-especial" required>
          <option disabled value="">--Seleccione una categoría--</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <button type="submit"  class="btn">Eliminar</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  props: {
    notifyError: Function,
    notify: Function,
    categories: Array
  },
  data() {
    return {
      selectedCategory: null,
    };
  },
  methods: {
  async deleteGame() {
      try {
        const response = await axios.delete("http://localhost:5000/api/game/" + this.selectedGame);
        const message = response.data.message;
        if (response.status === 204) {
          this.notify(message);
        }else if(response.status === 404){
          this.notifyError(message);
        }
        else if (response.status === 409) {
          this.notifyError(message);
        }
      } catch (error) {
          this.notifyError("Hubo un error al eliminar el juego.");
      }
    },
  },
};
</script>  
<style>
</style>
  