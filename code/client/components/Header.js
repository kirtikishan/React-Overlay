import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';

var header = new BEMHelper('header');
class Header extends Component {
    render(){
        return (
            <span>Header</span>
        );
    }
}

export default Header;