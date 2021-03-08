import React, {Component} from 'react';
import Ip from './components/ip';
import City from './components/city';
import Region from './components/region';
import Country from './components/country';
class App extends Component {
  state = {
    ip: "-",
    city : '-',
    regionName : '-',
    countryName : '-'
  }

  componentDidMount() {
    fetch('https://freegeoip.app/json/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        ip: data.ip,
        city : data.city,
        regionName : data.region_name,
        countryName : data.country_name,
      })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div class="d-flex justify-content-center">
        <Ip ip={this.state.ip} />
        <City city={this.state.city} />
        <Region region={this.state.regionName} />
        <Country country={this.state.countryName} />
      </div>
    );
  }
}

export default App;
