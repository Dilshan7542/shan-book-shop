import {configureStore} from '@reduxjs/toolkit'
import {userReducer, UserState} from "./user/UserReducer.ts";
interface AppState{
    user:UserState
}


export const store=configureStore<AppState>({
    reducer:{
user:userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch