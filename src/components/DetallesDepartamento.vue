<template>
    <div>
        <h1>Detalles departamento</h1>
        <router-link to="/">Back to Home</router-link>
        <h2 style="color:blue">
            Id: {{$route.params.id}}, 
            Nombre: {{$route.params.nombre}}, 
            Localidad: {{$route.params.localidad}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "DetallesDepartamento"
    }
</script>