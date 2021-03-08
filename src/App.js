import React, {Component} from 'react';
import Ip from './components/ip';

class App extends Component {
  state = {
    ip: ""
  }

  componentDidMount() {
    fetch('https://freegeoip.app/json/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ ip: data.ip })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div class="d-flex justify-content-center">
        <Ip ip={this.state.ip} />
      </div>
    );
  }
}

export default App;
