<template>
  <div class="login-container">
    <div class="login-caja">
      <h2>Iniciar Sesi&oacute;n</h2>
      <input v-model="username" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contrase&ntilde;a" />
      <button @click="login">Ingresar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      //lo normal se hace con un API que devuelve true or false
      if (
        this.username === "admin" ||
        (this.username === "estudiante" && this.password === "123")
      ) {
        localStorage.setItem("usuario", this.username);
        localStorage.setItem("auth", true); //bandera que me indique al sistema que se autentico
        //Redireccionar a la pagina de bienvenida
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f8;
  height: 100vh;
  width: 100vw;
}
.login-caja {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}
input {
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
}
</style>