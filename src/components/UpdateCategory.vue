<template>
  <div class="container">
    <h2 class="title">Actualizar Categoría</h2>
    <form @submit.prevent="updateCategory" class="form">
      <div class="form-group">
        <label for="selectedCategory" class="label-especial"
          >Seleccionar Categoría:</label
        >
        <select
          v-model="selectedCategory"
          id="selectedCategory"
          class="input-especial"
          required
        >
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

      <div class="form-group input-filed">
        <input type="text" v-model="categoryData.name" id="name" required />
        <label for="name">Nuevo Nombre:</label>
      </div>
      <div class="form-group-button">
        <button type="submit" class="btn">
          <span>Actualizar</span>
        </button>
      </div>
    </form>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  props: {
    notifyError: Function,
    notify: Function,
    categories: Array,
  },
  data() {
    return {
      selectedCategory: null,
      categoryData: {
        name: "",
      },
    };
  },
  methods: {
    async updateCategory() {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/category/" + this.selectedCategory,
          this.categoryData
        );

        if (response.status === 200 || response.status === 204) {
          this.notify("La categoría se actualizó exitosamente");
        } else if (response.status === 404) {
          this.notifyError("No se encontró la categoría o la ruta");
        } else {
          this.notifyError("Error al actualizar la categoría");
        }
      } catch (error) {
        this.notifyError("Error al actualizar la categoría");
      }
    },
  },
};
</script>
  
<style scoped>
</style>
  