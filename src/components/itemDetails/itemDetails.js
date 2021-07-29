import React, {Component} from 'react';
import './itemDetails.css';
export default class itemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateitem();
    }
    componentDidUpdate(prevProps) {
        const {selectedId} = this.props;
        if (selectedId !== prevProps.selectedId) {
            this.updateitem();
        }
    }
    updateitem() {
        const {selectedId, getData} = this.props;
        if (!selectedId) {
            return;
        }
        getData(selectedId)
            .then(item => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) {
            return <span>Please check any item</span>
        }
        
        const {item} = this.state;
        const {name} = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }                    
                </ul>
            </div>
        );
    }
}