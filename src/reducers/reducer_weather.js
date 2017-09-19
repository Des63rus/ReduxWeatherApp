import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER: {
            //return state.push([action.payload.data]); - bad practice, DONT! Newer update state, only with setState()
            //return state.concat([action.payload.data]); its ok, concat creates new instance of array
            return [action.payload.data, ...state]; // best, new element at start
        }
    }
    return state;
}