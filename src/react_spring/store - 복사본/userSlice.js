
// let [userId, setUserId] = useState('');

import { use } from "react";
import { createSlice } from "@reduxjs/toolkit";


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

export default userSlice;