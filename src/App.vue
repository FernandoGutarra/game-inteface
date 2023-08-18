<template>
  <div class="container">
    <div class="links">
      <p>Login</p>
      <p>Register</p>
    </div>
    <router-view/>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "./components/FooterComponent.vue";
export default {
    components:{
       Footer,
    },
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px; /* Establecer una altura mínima para evitar el tamaño gigante en contenidos pequeños */
  background-color: #FFFFFF;
}
.links{
  display:flex;
  gap:50px;
  margin-top:40px;
}
p{
  color:#FFD700;
}
p:hover {
  color: #9C27B0; /* Resaltado: Púrpura (al pasar el cursor) */
}
.footer {
  width: 100%; /* Asegura que el pie de página ocupe todo el ancho */
  // position: fixed;
  bottom: 0;
  left: 0; /* Añade esta línea para ajustar el pie de página a la izquierda */
}
</style>
