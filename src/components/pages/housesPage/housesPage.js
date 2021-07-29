import React, { Component } from 'react';
import ItemDetails from '../../itemDetails';
import ItemList from '../../itemList';
import GotServices from '../../../services/gotServices';
import RowBlock from "../rowBlock";
import FieldBlock from "../fieldBlock";


export default class HousesPage extends Component {
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
                getData={this.gotServices.getAllHouses}
                writeData={(item) => item.name}
                />
        )

        const itemDetails = (
            <ItemDetails 
                selectedId={selectedId}
                getData={this.gotServices.getHouse}
            >
                <FieldBlock field='region' label='Region'/>
                <FieldBlock field='words' label='Words'/>
                <FieldBlock field='titles' label='Titles'/>
                <FieldBlock field='overlord' label='Overlord'/>
                <FieldBlock field='ancestralWeapons' label='AncestralWeapons'/>
                
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

