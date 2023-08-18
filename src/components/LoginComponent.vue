<template>
  <div class="center-container">
  <div class="box">
    <span class="borderLine"></span>
    <form @submit.prevent="verifyLogin">
      <h2>Sign In</h2>
      <div class="inputBox">
        <input type="text" v-model="gmail" required  class="form-control" autocomplete="gmail"/>
        <span>Gmail</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input type="password" v-model="password" required  class="form-control" autocomplete="current-password"/>
        <span>Password</span>
        <i></i>
      </div>
      <div class="links">
        <a href="#">Forgot Password</a>
        <a href="/register">Singup</a>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      gmail: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async verifyLogin() { // Cambio el nombre del método aquí
      await this.login({
        email: this.gmail, // Cambio de 'gmail' a 'email'
        password: this.password,
      });
    },
  },
});
</script>
<style lang="css" scoped>
/* Anular el estilo de autofill interno del navegador */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(0, 0, 0) !important; /* Color de texto */
  -webkit-box-shadow: 0 0 0 0px #ffffff inset !important; /* Estilo de sombra */
  transition: background-color 5000s ease-in-out 0s !important;
  font-size: 15px !important;
}
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Ajusta la altura del contenedor al 100% de la ventana */
}
.box {
  position: relative;
  width: 380px;
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
}
.box::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,
      transparent,
      transparent,
       #1F8A70,
       #1F8A70,
       #1F8A70);
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;

}
.box::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,
      transparent,
      transparent,
       #1F8A70,
       #1F8A70,
       #1F8A70);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -3s;
}
.borderLine {
  position: absolute;
  top: 0;
  inset: 0;
}

.borderLine::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,
      transparent,
      transparent,
       #FFD700,
       #FFD700,
       #FFD700);
  transform-origin: bottom right;
  z-index: 1;
  animation: animate 6s linear infinite;
  animation-delay: -1.5s;
}

.borderLine::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,
      transparent,
      transparent,
       #FFD700,
       #FFD700,
       #FFD700);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -4.5s;
}


@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.box form {
  position: absolute;
  inset: 4px;
  padding: 50px 40px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: #FFFFCC;
}

.box form h2 {
  color:#FFD700;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
}

.box form .inputBox {
  position: relative;
  width: 300px;
  margin-top: 35px;
}

.box form .inputBox input {
  position: relative;
  width: 100%;
  padding: 20px 0px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  color: #000000;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
  text-indent: 8px;
}

.box form .inputBox span {
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  pointer-events: none;
  color: #FFD700;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

.box form .inputBox input:valid~span,
.box form .inputBox input:focus~span {
  color: #FFD700;
  font-size: 0.75em;
  transform: translateY(-34px);
}

.box form .inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  transition: height 0.5s;
  /* Cambio "transform" a "transition" y especifico "height" */
  pointer-events: none;
}

.box form .inputBox input:valid~i,
.box form .inputBox input:focus~i {
  height: 40px;
}

.box form .links {
  display: flex;
  justify-content: space-between;
}

.box form .links a {
  margin: 10px 0;
  font-size: 0.75em;
  color:#FFD700;
  text-decoration: none;
}

.box form .links a:hover,
.box form .links a:nth-child(2) {
  color: #FFD700;
}

.box form input[type="submit"] {
  border: none;
  outline: none;
  padding: 9px 25px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  margin-top: 10px;
  background: #1F8A70; /* Color de fondo del botón */
  color: #ffffff; /* Color del texto del botón */
}

.box form input[type="submit"]:active {
  opacity: 0.8;
}
</style>