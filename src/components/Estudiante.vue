<template>
  <div>
    <div class="container-acciones">
      <h2>Seleccionar actividad del estudiante</h2>
      <select v-model="accionSeleccionada">
        <option value="">Seleccionar acción</option>
        <option value="guardar">Guardar</option>
        <option value="actualizar">Actualizar</option>
        <option value="actualizarParcial">Actualizar Parcial</option>
        <option value="borrar">Borrar</option>
      </select>
    </div>
    <div class="container-guardar" v-if="accionSeleccionada === 'guardar'">
      <label for="id_nombre">Nombre</label>
      <input
        type="text"
        id="id_nombre"
        v-model="nombre"
        placeholder="Ingrese el nombre"
      />
      <label for="id_apellido">Apellido</label>
      <input
        type="text"
        id="id_apellido"
        v-model="apellido"
        placeholder="Ingrese el apellido"
      />
      <label for="id_fecha">Fecha de Nacimiento</label>
      <input type="date" id="id_fecha" v-model="fechaNacimiento" />
      <label for="id_genero">Género</label>
      <select id="id_genero" v-model="genero">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        <option value="O">Otro</option>
      </select>
      <button @click="guardar()">Guardar</button>
    </div>
    <div
      class="container-actualizar"
      v-if="accionSeleccionada === 'actualizar'"
    >
      <input
        type="text"
        v-model="id"
        placeholder="Ingrese el ID del estudiante a actualizar"
      />
      <label for="id_nombre_act">Nombre</label>
      <input
        type="text"
        id="id_nombre_act"
        v-model="nombre"
        placeholder="Ingrese el nombre"
      />
      <label for="id_apellido_act">Apellido</label>
      <input
        type="text"
        id="id_apellido_act"
        v-model="apellido"
        placeholder="Ingrese el apellido"
      />
      <label for="id_fecha_act">Fecha de Nacimiento</label>
      <input type="date" id="id_fecha_act" v-model="fechaNacimiento" />
      <label for="id_genero_act">Género</label>
      <select id="id_genero_act" v-model="genero">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        <option value="O">Otro</option>
      </select>
      <button @click="actualizar()">Actualizar</button>
    </div>

    <div
      class="container-actualizar-parcial"
      v-if="accionSeleccionada === 'actualizarParcial'"
    >
      <input
        type="text"
        v-model="id"
        placeholder="Ingrese el ID del estudiante a actualizar parcialmente"
      />
      <label for="id_nombre_parc">Nombre</label>
      <input
        type="text"
        id="id_nombre_parc"
        v-model="nombre"
        placeholder="Ingrese el nombre"
      />
      <label for="id_apellido_parc">Apellido</label>
      <input
        type="text"
        id="id_apellido_parc"
        v-model="apellido"
        placeholder="Ingrese el apellido"
      />
      <label for="id_fecha_parc">Fecha de Nacimiento</label>
      <input type="date" id="id_fecha_parc" v-model="fechaNacimiento" />
      <label for="id_genero_parc">Género</label>
      <select id="id_genero_parc" v-model="genero">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        <option value="O">Otro</option>
      </select>

      <button @click="actualizarParcial()">Actualizar Parcial</button>
    </div>
    <div class="container-borrar" v-if="accionSeleccionada === 'borrar'">
      <input
        type="text"
        v-model="id"
        placeholder="Ingrese el ID del estudiante a borrar"
      />
      <button @click="borrar()">Borrar</button>
    </div>
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
  data() {
    return {
      accionSeleccionada: "",
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      genero: null,
      id: null,
    };
  },
  methods: {
    async guardar() {
      //Debe tener la estructura del json como body del EstudianteTO
      //private Integer id;
      //private String nombre;
      //private String apellido;
      //private LocalDateTime fechaNacimiento;
      //private String genero;
      const estudianteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento + "T00:15:00",
        genero: this.genero,
      };
      await guardarFachada(estudianteBody);
      console.log("Estudiante guardado exitosamente");
    },
    async actualizar() {
      const estudianteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento + "T00:15:00",
        genero: this.genero,
      };
      await actualizarFachada(estudianteBody, this.id);
      console.log("Estudiante actualizado exitosamente");
    },
    async actualizarParcial() {
      const estudianteBody = {
        apellido: "Guitierrez",
      };
      await actualizarParcialFachada(estudianteBody, this.id);
      console.log("Estudiante actualizado parcialmente exitosamente");
    },
    async borrar() {
      await borrarFachada(this.id);
      console.log("Estudiante borrado exitosamente");
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.container-acciones {
  background: #667eea;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.container-acciones h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 600;
}

/* Estilos del select principal */
.container-acciones select {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #333;
  cursor: pointer;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container-acciones select:focus {
  outline: none;
}

/* Contenedores de formularios */
.container-guardar,
.container-actualizar,
.container-actualizar-parcial,
.container-borrar {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e1e5e9;
  max-width: 600px;
  margin: 0 auto;
}

/* Estilos de labels */
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
  text-transform: uppercase;
}

/* Estilos de inputs y selects */
input[type="text"],
input[type="date"],
select {
  width: 100%;
  padding: 0.875rem;
  margin-bottom: 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: #f8fafc;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="date"]:focus,
select:focus {
  outline: none;
  border-color: #667eea;
  background: white;
}

/* Estilos de botones */
button {
  background: #667eea;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container-acciones {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .container-acciones h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .container-acciones select {
    width: 100%;
    min-width: auto;
  }

  .container-guardar,
  .container-actualizar,
  .container-actualizar-parcial,
  .container-borrar {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  input[type="text"],
  input[type="date"],
  select {
    padding: 0.75rem;
    margin-bottom: 1.25rem;
  }

  button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }

  label {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .container-acciones {
    padding: 1rem;
    border-radius: 8px;
  }

  .container-acciones h2 {
    font-size: 1.25rem;
  }

  .container-guardar,
  .container-actualizar,
  .container-actualizar-parcial,
  .container-borrar {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
  }

  input[type="text"],
  input[type="date"],
  select {
    padding: 0.625rem;
    font-size: 0.9rem;
  }

  button {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
}
</style>