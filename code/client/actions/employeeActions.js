'use strict'
import axios from 'axios';

//Get books
export function getEmployees() {
    return function (dispatch) {
        axios.get('http://localhost:4000/db')
            .then(function (response) {
                debugger;
                dispatch({type: 'GET_EMPLOYEES', payload: response.data});
            })
            .catch(function (error) {
                debugger;
                dispatch({type: 'GET_EMPLOYEES_REJECTED', payload: error});
            })
    }
}
