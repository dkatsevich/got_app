import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import BookPage from '../pages/bookPage';
import HousesPage from '../pages/housesPage/housesPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from '../pages/notFound';


export default class App extends Component {

    state = {
        hideRandom: true,
    }

    onToggleRandom = () => {
        this.setState(state => ({
            hideRandom: !state.hideRandom
        }))
    }

    

    render() {
        const {hideRandom} = this.state;
        const randomChar = hideRandom ? <RandomChar/> : null;

        return (
            <Router>
                <div className='app'> 
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
                        <Switch>
                            <Route path='/' exact component={() => <h1 style={{color: 'white'}}>Main page ;)</h1>}/>
                            <Route path='/characters' component={CharacterPage}/>
                            <Route path='/houses' component={HousesPage}/>
                            <Route path='/books' exact component={BooksPage}/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;

                                    return <BookPage selectedId={id}/>
                                }
                            }/>
                            <Route path='*' exact component={NotFound}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};
