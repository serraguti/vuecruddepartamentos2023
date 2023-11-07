import Global from './../Global';
import axios from 'axios';

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve) {
            var request = "api/departamentos";
            var departamentos = [];
            var url = Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }

    insertDepartamento(departamento){
        return new Promise(function(resolve) {
            var request = "api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response => {
                resolve(response);
            })
        })
    }

    findDepartamento(id) {
        return new Promise(function(resolve){
            var request = "api/departamentos/" + id;
            var url = Global.urlApiDepartamentos + request;
            var departamento = {};
            axios.get(url).then(response => {
                departamento = response.data;
                resolve(departamento);
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function(resolve){
            var request = "api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response =>  {
                resolve(response);
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve) {
            var request = "api/departamentos/" + id;
            var url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(response => {
                resolve(response);
            })
        })
    }

    fetchData() {
        var request = "api/departamentos";
        var url = Global.urlApiDepartamentos + request;
        fetch(url, {
          method: "GET",
        })
          .then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
          })
          .catch((err) => {
            console.error(err);
          });
    }    

}