import React from 'react';
import './itemList.css';
import withData from '../withData';

const ItemList = ({writeData, onItemSelected, data}) => {

    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = writeData(item)
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    const items = renderItems(data);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}


export default withData(ItemList);