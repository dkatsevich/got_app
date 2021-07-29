import React, { Component } from 'react';
import ItemDetails from '../../itemDetails';
import GotServices from '../../../services/gotServices';
import FieldBlock from "../fieldBlock";


export default class BookPage extends Component {
    gotServices = new GotServices();
    
    render() {
        const {selectedId} = this.props;

        return (
            <ItemDetails 
                selectedId={selectedId}
                getData={this.gotServices.getBook}
            >
                <FieldBlock field='numberOfPages' label='NumberOfPages'/>
                <FieldBlock field='publisher' label='Publisher'/>
                <FieldBlock field='released' label='Released'/>
            </ItemDetails>
        )
    }
}

