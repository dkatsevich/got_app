import React, { Component } from 'react';
import ItemDetails from '../../itemDetails';
import ItemList from '../../itemList';
import GotServices from '../../../services/gotServices';
import RowBlock from "../rowBlock";
import FieldBlock from "../fieldBlock";


export default class CharacterPage extends Component {
    gotServices = new GotServices();

    state = {
        selectedId: 41,
    }

    onItemSelect = (id) => {
        this.setState({selectedId: id})
    }

    render() {
        const {selectedId} = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelect}
                getData={this.gotServices.getAllCharacters}
                writeData={(item) => item.name}
                />
        )

        const itemDetails = (
            <ItemDetails 
                selectedId={selectedId}
                getData={this.gotServices.getCharacter}
            >
                <FieldBlock field='gender' label='Gender'/>
                <FieldBlock field='born' label='Born'/>
                <FieldBlock field='died' label='Died'/>
                <FieldBlock field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

