import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component {

    state = {
        hideRandom: true,
        selectedId: 41
    }

    onToggleRandom = () => {
        this.setState(state => ({
            hideRandom: !state.hideRandom
        }))
    }

    onCharSelect = (id) => {
        this.setState({selectedId: id})
    }

    render() {
        const {hideRandom, selectedId} = this.state;
        const randomChar = hideRandom ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <Button 
                            onClick={this.onToggleRandom} 
                            color="danger"
                            >Toggle random character</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelect}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedId={selectedId}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
