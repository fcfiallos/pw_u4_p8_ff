<template>
  <div>
    <button @click="guardar()">Guardar</button>
    <button @click="actualizar()">Actualizar</button>
    <button @click="actualizarParcial()">Actualizar Parcial</button>
    <button @click="borrar()">Borrar</button>
  </div>
</template>

<script>
import {
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarFachada,
} from "@/client/EstudianteClient";
export default {
  methods: {
    async guardar() {
      //Debe tener la estructura del json como body del EstudianteTO
      //private Integer id;
      //private String nombre;
      //private String apellido;
      //private LocalDateTime fechaNacimiento;
      //private String genero;
      let fecha = "2002-10-03";
      const estudianteBody = {
        nombre: "Fatima",
        apellido: "Fiallos",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "F",
      };
      await guardarFachada(estudianteBody);
      console.log("Estudiante guardado exitosamente");
    },
    async actualizar() {
      let fecha = "2002-07-10";
      const estudianteBody = {
        nombre: "Pepito",
        apellido: "Fiallos",
        fechaNacimiento: fecha + "T00:15:00",
        genero: "F",
      };
      await actualizarFachada(estudianteBody, 9);
        console.log("Estudiante actualizado exitosamente");
    },
    async actualizarParcial() {
      const estudianteBody = {
        apellido: "Guitierrez",
      };
      await actualizarParcialFachada(estudianteBody, 9);
        console.log("Estudiante actualizado parcialmente exitosamente");
    },
    async borrar() {
      await borrarFachada(7);
        console.log("Estudiante borrado exitosamente");
    },
  },
};
</script>

<style scoped>
</style>