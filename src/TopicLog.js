import React, { Component } from 'react';

class TopicLog extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.addEventListener('message', function (message) {
      this.setState({value: this.state.value + '\n' + message});
      console.log('Message from server ', message);
    });
  }

  render() {
    return (
      <div>
        <h2>Log</h2>
        <pre>{this.state.value}</pre>
      </div>
    );
  }
}

export default TopicLog;
