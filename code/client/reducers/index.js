'use strict'

import {combineReducers} from 'redux';

//HERE IMPORT REDUCERS TO BE COMBINED.

import {employeeReducers} from './employeeReducers';

export default combineReducers({
  employee: employeeReducers
});