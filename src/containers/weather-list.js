import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';



export class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressure} color="red" unitd="hPa" />
                </td>
                <td>
                    <Chart data={humidity} color="blue" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather } // === {weather: weather} ESX 
}

export default connect(mapStateToProps)(WeatherList);