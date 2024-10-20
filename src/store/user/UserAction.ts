import {createAction} from "@reduxjs/toolkit";
import {UserState} from "./UserReducer.ts";

export const userInit= createAction("[USER] INIT");
export const userLogin= createAction<UserState>("[USER] LOGIN");
export const userLogout= createAction("[USER] LOGOUT");
export const userSave= createAction<UserState>("[USER] SAVE");
export const userUpdate= createAction<UserState>("[USER] UPDATE");
export const userDelete= createAction<string>("[USER] DELETE");
