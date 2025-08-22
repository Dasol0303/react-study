
import { createSlice } from "@reduxjs/toolkit";

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

export default companySlice;