import { configureStore, createSlice } from '@reduxjs/toolkit';


// 객체 관리
// 데이터 저장 관련 정보 + getter setter 함수형으로 데이터 관리


// let [userId, setUserId] = useState('');


let userSlice = createSlice({
    name: 'userId',
    initialState: 'defaultId',          //      { id : 'defaultId }     state.id = 'aaaa'
    reducers: {
        saveUserId(state, action) { //saveUserId('mynewid')
            console.log(action.payload);

            return action.payload;
        },
        clearUserId(state) {    //clearUserId()
            return "clear"; //단순 텍스트는 return 으로 저장할 값 전달 -> state에 값이 저장됨

            // state = "clear";  //적용불가 -> 에러
        },
        saveUserInfo(state, action) {
            console.log(action.payload); // dispatch(saveUserInfo( { id:'qwe', name:'rr' } ));

            console.log(action.payload.id);
            console.log(action.payload.name);

            let {id, name} = action.payload;

            return action.payload.id;
            //return state + '1';
            //return state;
        }
    }
})

// store 리덕스 기준 전체 데이터 저장 객체

export let { saveUserId, clearUserId, saveUserInfo } = userSlice.actions;

//actions : 상태관리하는 변수(slice) 에 속해있는 상태변경 함수들이 모여있는 객체


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


let companySlice = createSlice({
    name : "company",
    initialState : {
        name : "abc Comp",
        cid : "108420238",
        tel : "0212342134"
    },
    reducers : {
        changeTel(state, action) {
            state.tel = action.payload;
            // dispatch ( changeTel('0233339478') )

            state.tel = action.payload.tel;
            // dispatch ( changeTel( { tel: '0233339478' } ) )
        }
    }
})

export let {changeTel} = companySlice.actions;



//store 설정
export default configureStore({
    reducer: {
        user: userSlice.reducer,
        weather: weatherSlice.reducer,
        company: companySlice.reducer
    }
})