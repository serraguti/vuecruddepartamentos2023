<template>
    <div>
        <h1>Update departamento</h1>
        <router-link to="/">Back to home</router-link>
        <form v-if="departamento" 
        v-on:submit.prevent="updateDepartamento()"
            style="width: 500px; margin: 0 auto">
            <input type="hidden"
                v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" class="form-control"
                v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control"
                v-model="departamento.localidad"/>
            <button class="btn btn-info">Update</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name: "UpdateDepartamento", 
        methods: {
            updateDepartamento() {
                service.updateDepartamento(this.departamento).then(result => {
                    console.log(result);
                    this.$router.push("/");
                })
            }
        },
        mounted() {
            var id = this.$route.params.id;
            service.findDepartamento(id).then(result => {
                this.departamento = result;
            })
        },
        data() {
            return {
                departamento: null
            }
        }
    }
</script>