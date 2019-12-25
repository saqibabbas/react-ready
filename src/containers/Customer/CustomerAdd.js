import React from 'react';
import CustomerForm from './CustomerForm';
import { base } from '../../hocs';
class CustomerAdd extends React.Component {
    componentDidMount() {}

    render() {
        return <CustomerForm mode="add" />;
    }
}

export default base(CustomerAdd);
