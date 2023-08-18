<template>
  <div class="center-container">
    <div class="box">
      <span class="borderLine"></span>
      <form @submit.prevent="register">
        <h2>Signup</h2>
        <div class="inputBox">
          <input type="text" v-model="name" required />
          <span>Name</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            type="gmail"
            v-model="gmail"
            autocomplete="my-style"
            required
          />
          <span>Gmail</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            type="password"
            v-model="password"
            autocomplete="my-style"
            required
          />
          <span>Password</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="text" v-model="rol" required />
          <span>Rol</span>
          <i></i>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
</template>
<script>
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      name: "",
      gmail: "",
      password: "",
      rol: "",
    };
  },
  methods: {
    async register() {
      const notify = (message) =>
        toast.success(message, {
          autoClose: 3000,
        });
      const notifyError = (message) =>
        toast.error(message, {
          autoClose: 3000,
        });
      try {
        const data = {
          name: this.name,
          gmail: this.gmail,
          password: this.password,
          rol: this.rol,
        };

        const response = await axios.post(
          "http://localhost:5000/api/register",
          data
        );

        if (response.status === 200) {
          notify("Se Registro Correctamente");
        } else {
          notifyError("No Se Pudo Registrar");
        }
      } catch (error) {
        notifyError("Hubo un erro Inesperado");
      }
    },
  },
});
</script>
<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Ajusta la altura del contenedor al 100% de la ventana */
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Ajusta la altura del contenedor al 100% de la ventana */
}

.box {
  position: relative;
  width: 380px;
  height: 520px;
  border-radius: 8px;
  overflow: hidden;
}

.box::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #35a0fd,
    #35a0fd,
    #35a0fd
  );
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
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
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #35a0fd,
    #35a0fd,
    #35a0fd
  );
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
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #35a0fd,
    #35a0fd,
    #35a0fd
  );
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
  background-color: #2d2d2d;
}

.box form h2 {
  color: #ffffff;
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
}

.box form .inputBox span {
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  pointer-events: none;
  color: aliceblue;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

.box form .inputBox input:valid ~ span,
.box form .inputBox input:focus ~ span {
  color: #fff;
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

.box form .inputBox input:valid ~ i,
.box form .inputBox input:focus ~ i {
  height: 40px;
}

.box form .links {
  display: flex;
  justify-content: space-between;
}

.box form .links a {
  margin: 10px 0;
  font-size: 0.75em;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.box form .links a:hover,
.box form .links a:nth-child(2) {
  color: #ffa500;
}

.box form input[type="submit"] {
  border: none;
  outline: none;
  background: #35a0fd;
  padding: 9px 0px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  margin-top: 30px;
  text-align: center;
  color: #ffffff;
}
.box form input[type="submit"]:active {
  opacity: 0.8;
}
</style>