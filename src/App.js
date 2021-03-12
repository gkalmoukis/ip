import React, {Component} from 'react';
import Ip from './components/ip';
import City from './components/city';
import Region from './components/region';
import Country from './components/country';
import "./App.css";

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
      <div className="container h-100">
        <div className="justify-content-center align-items-center">
          <div className="card text-center my-auto">
            <div className="card-body">
              <h5 className="card-title"><Ip ip={this.state.ip} /></h5>
              <p className="card-text">
                <City city={this.state.city} />
                <Region region={this.state.regionName} />
                <Country country={this.state.countryName} />  
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
