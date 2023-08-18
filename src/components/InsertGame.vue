<template>
  <div class="container">
    <h2 class="title">Formulario de Juego</h2>
    <form enctype="multipart/form-data" @submit.prevent="submitForm" class="form">
      <div class="form-group input-filed">
        <input type="text" v-model="gameData.name" id="name" required />
        <label for="name">Nombre</label>
      </div>

      <div class="form-group">
        <label for="releaseDate" class="label-especial"
          >Fecha de Lanzamiento</label
        >
        <input
          type="date"
          v-model="gameData.releaseDate"
          id="releaseDate"
          class="input-especial"
          required
        />
      </div>

      <div class="form-group">
        <label for="description" class="label-especial">Descripción</label>
        <textarea
          v-model="gameData.description"
          id="description"
          class="label-es-height input-textarea"
        ></textarea>
      </div>

      <div class="form-group input-filed">
        <input type="number" v-model="gameData.price" id="price" required />
        <label for="price">Precio</label>
      </div>

      <div class="form-group input-filed">
        <!-- Cambia el tipo de entrada a "file" -->
        <input
          type="file"
          accept="image/*"
          @change="onImageChange"
          name="mainImage"
          required
        />
        <label for="mainImage">Imagen Principal</label>
      </div>

      <div class="form-group">
        <label for="category" class="label-especial">Category</label>
        <select
          v-model="gameData.category"
          id="category"
          class="input-especial"
          required
        >
          <option disabled value="">-- Select a category --</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
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
    categories: Array
  },
  data() {
    return {
      gameData: {
        name: "",
        releaseDate: "",
        description: "",
        price: null,
        mainImage: null,
        downloadLink: "",
        category: "",
      },
    };
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0];
      this.gameData.mainImage = file;
    },
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append("mainImage", this.gameData.mainImage);
        formData.append("name", this.gameData.name);
        formData.append("releaseDate", this.gameData.releaseDate);
        formData.append("description", this.gameData.description);
        formData.append("price", this.gameData.price);
        formData.append("downloadLink", this.gameData.downloadLink);
        formData.append("category", this.gameData.category);
        const response = await axios.post(
          "http://localhost:5000/api/game",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const message = response.data.message;
        if (response.status === 201) {
           this.notify(message);
        } else {
          this.notifyError(message);
        }
      } catch (error) {
        this.notifyError("Hubo un error Inesperado");
      }
    },
  },
};
</script>