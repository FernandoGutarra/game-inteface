<template>
  <div class="container">
    <h2 class="title">Eliminar Juego</h2>
    <form @submit.prevent="deleteGame" class="form">
      <div class="form-group">
        <label for="selectedGame" class="label-especial"
          >Seleccionar Juego:</label
        >
        <select
          v-model="selectedGame"
          id="selectedGame"
          class="input-especial"
          required
        >
          <option disabled value="">--Seleccione un juego--</option>
          <option v-for="game in games" :key="game.id" :value="game.id">
            {{ game.name }}
          </option>
        </select>
      </div>
      <div class="form-group-button">
        <button type="submit" class="btn">Eliminar</button>
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
    games: Array,
  },
  data() {
    return {
      selectedGame: null,
    };
  },

  methods: {
    async deleteGame() {
      try {
        const response = await axios.delete(
          "http://localhost:5000/api/game/" + this.selectedGame
        );
        const message = response.data.message;
        if (response.status === 200) {
          this.notify(message);
        } else if (response.status === 404) {
          this.notifyError(message);
        } else {
          this.notifyError(
            "Se recibió una respuesta inesperada:",
            response.status
          );
        }
      } catch (error) {
        this.notifyError("Error al eliminar el juego");
      }
    },
  },
};
</script>
<style>
</style>
  