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

}