import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './slice/adminAuthSlice';
import authReducer from './slice/authSlice'
import authAdminSlice from './slice/adminAuthSlice'
import modalReducer from './slice/modalSlice'

export const store = configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer,
        authAdmin:authAdminSlice,
        modal:modalReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch