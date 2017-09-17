import axios from 'axios';

const API_KEY = '2d25107e6cd65e808e00b7fba6071202';
const URL_PATTERN = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const URL = `${URL_PATTERN}&q=${city},us`
    const request = axios.get(URL);
    return {
        type: FETCH_WEATHER, 
        payload: request
    };
}