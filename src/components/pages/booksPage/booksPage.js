import React, { Component } from 'react';
import ItemDetails from '../../itemDetails';
import ItemList from '../../itemList';
import GotServices from '../../../services/gotServices';
import RowBlock from "../rowBlock";
import FieldBlock from "../fieldBlock";


export default class BooksPage extends Component {
    gotServices = new GotServices();

    state = {
        selectedId: 1,
    }

    onItemSelect = (id) => {
        this.setState({selectedId: id})
    }

    render() {
        const {selectedId} = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelect}
                getData={this.gotServices.getAllBooks}
                writeData={(item) => item.name}
                />
        )

        const itemDetails = (
            <ItemDetails 
                selectedId={selectedId}
                getData={this.gotServices.getBook}
            >
                <FieldBlock field='numberOfPages' label='NumberOfPages'/>
                <FieldBlock field='publisher' label='Publisher'/>
                <FieldBlock field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

