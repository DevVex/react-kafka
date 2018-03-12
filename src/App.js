import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TopicForm from './TopicForm';
import TopicLog from './TopicLog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <TopicForm></TopicForm>
            </Col>
            <Col xs={6} md={6}>
              <TopicLog></TopicLog>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
