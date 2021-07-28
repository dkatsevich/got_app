import React, {Component} from 'react';
import GotServices from '../../services/gotServices';
import './itemList.css';
import Spinner from './../spinner/spinner';
export default class ItemList extends Component {
    gotServices = new GotServices();

    state = {
        charList: null
    }

    renderItems(arr) {
        // console.log("render_items");
        return arr.map((item) => {
            const {name, id} = item;
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                    >
                    {name}
                </li>
            )
        })
    }

    componentDidMount() {
        // console.log("mount");
        this.gotServices.getAllCharacters()
            .then(charList => {
                this.setState({charList})
            })
    }

    render() {
        // console.log("render");
        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}