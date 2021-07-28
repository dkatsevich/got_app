import React, {Component} from 'react';
import './charDetails.css';
import GotServices from '../../services/gotServices';

export default class CharDetails extends Component {
    gotServices = new GotServices();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        const {selectedId} = this.props;
        if (selectedId !== prevProps.selectedId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {selectedId} = this.props;
        if (!selectedId) {
            return;
        }
        this.gotServices.getCharacter(selectedId)
            .then(char => {
                this.setState({char})
            })
    }

    render() {

        if (!this.state.char) {
            return <span>Please check any char</span>
        }
        
        const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}