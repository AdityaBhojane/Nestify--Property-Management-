import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './slice/userSlice';
import authReducer from './slice/authSlice'

export const store = configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch