import { createSlice } from "@reduxjs/toolkit";

let weatherSlice = createSlice({
    name : 'weather',
    initialState : {
        weather: 'sunny',
        temperature: 27,
        hmdt: 60
    },
    reducers : {
        setWeatherInfo(state, action){
            let {weather, temperature, hmdt} = action.payload;

            // action.payload.weather
            // action.payload.temperature
            // action.payload.hmdt

            //action.payload.weather = state.weather;
            // return action.payload;

            //state 가 객체 타입인 경우에는, 그냥 해당 변수값을 저장한다고 해도 가능

            state.temperature = temperature;
            state.hmdt = hmdt;
        }
    }
});

export let { setWeatherInfo } = weatherSlice.actions;

export default weatherSlice;