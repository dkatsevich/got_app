import React, { Component } from 'react';
import ItemList from '../../itemList';
import GotServices from '../../../services/gotServices';
import { withRouter } from 'react-router';

class BooksPage extends Component {
    gotServices = new GotServices();

    render() {

        return (
            <ItemList 
                onItemSelected={
                    (id) => {
                        this.props.history.push(`${id}`)
                    }
                }
                getData={this.gotServices.getAllBooks}
                writeData={(item) => item.name}
            />
        )
    }
}

export default withRouter(BooksPage);