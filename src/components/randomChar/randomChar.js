import React, {Component} from 'react';
import GotServices from '../../services/gotServices';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from './../spinner/spinner';
import './randomChar.css';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateCharacter();
    }

    gotServices = new GotServices();
    state = {
        char: {},
        loading: true,
        error: false,
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        })
    }

    onError = (error) => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    updateCharacter() {
        const id = Math.floor(Math.random()*140+25);
        // const id = 1000000000000000;
        this.gotServices.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const { char, loading, error } = this.state;
        
        const spinner = loading ? <Spinner/> : null
        const errorMessage = error ? <ErrorMessage/> : null
        const content = !(error || loading) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {spinner}
                {errorMessage}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}