import React from 'react';
import BEMHelper from 'react-bem-helper';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEmployees} from '../actions/employeeActions';

class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.getEmployees();
    }

    render(){
        debugger;
        return (
            <span>EmployeeList</span>
        );
    }
}

function mapStateToProps(state) {
    debugger
    return {
        employeeData: state.employee
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getEmployees: getEmployees
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);