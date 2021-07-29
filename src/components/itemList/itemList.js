import React, {Component} from 'react';
import GotServices from '../../services/gotServices';
import './itemList.css';
import Spinner from './../spinner/spinner';

export default class ItemList extends Component {
    gotServices = new GotServices();

    state = {
        ItemList: null
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.writeData(item)
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then(ItemList => {
                this.setState({ItemList})
            })
    }

    render() {
        const {ItemList} = this.state;

        if (!ItemList) {
            return <Spinner/>
        }

        const items = this.renderItems(ItemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}