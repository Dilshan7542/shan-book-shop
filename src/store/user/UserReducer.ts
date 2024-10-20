import { createReducer} from "@reduxjs/toolkit";
import  * as userAction from "./UserAction"
export interface UserState{
    _id?:string;
    email?:string;
    pwd?:string;
}
const init:UserState={
}

export const userReducer = createReducer(init,(stateBuilder)=>{
stateBuilder
    .addCase(userAction.userInit,state=>state)
    .addCase(userAction.userLogin,(_state,action)=>action.payload)
    .addCase(userAction.userLogout,()=> init)
    .addCase(userAction.userSave,(_state, _action)=> _action.payload);


});