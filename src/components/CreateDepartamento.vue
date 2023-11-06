<template>
    <div>
        <h1>Create departamento</h1>
        <h2 style="color:blue">{{mensaje}}</h2>
        <form v-on:submit.prevent="insertDepartamento()"
        style="width: 500px; margin: 0 auto">
            <label>Id departamento</label>
            <input type="number" class="form-control"
                v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" class="form-control"
                v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control"
                v-model="departamento.localidad"/>
            <button class="btn btn-info">
                Create
            </button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name: "CreateDepartamento",
        methods:{
            insertDepartamento() {
                service.insertDepartamento(this.departamento).then(result => {
                    console.log(result);
                    this.$router.push("/");
                    //this.mensaje = "Insertado correctamente";
                });
            }
        },
        data() {
            return {
                departamento: {
                    idDepartamento: 0, 
                    nombre: "", 
                    localidad: ""
                }, 
                mensaje: ""
            }
        }
    }
</script>