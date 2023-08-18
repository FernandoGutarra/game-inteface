<template>
  <div class="container">
    <h2 class="title">Insertar Nueva Categoría</h2>
    <form @submit.prevent="insertCategory" class="form">
      <div class="form-group">
        <label for="name" class="label-especial">Nombre de la Categoría:</label>
        <input type="text" v-model="categoryData.name" id="name" class="input-especial" required />
      </div>
      <div class="form-group-button">
        <button type="submit" class="btn">
          <span>Insertar</span>
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
      categoryData: {
        name: "",
      },
    };
  },
  methods: {
    async insertCategory() {
      try{
      const response = await axios.post(
        "http://localhost:5000/api/category",
         this.categoryData
         );
         const message = response.data.message;
         if (response.status === 200) {
          this.notify(message);
         } else {
           this.notifyError(message);
         }
      }catch(error){
         this.notifyError("Hubo Un Problema Inesperado");
      }
    },
  },
};
</script>
<style>
</style>
  