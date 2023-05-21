import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { loginReducer } from '@/features/AuthByUsername';
import { fileReducer } from '@/entities/FileList';
import { registrationReducer } from '@/features/Registration/model/slice/registrationSlice';
import { authUserReducer } from '@/entities/AuthUser';
import { filesActionReducer } from '@/features/FilesAction';

const reducer = combineReducers({
    auth: authUserReducer,
    loginForm: loginReducer,
    registrationForm: registrationReducer,
    files: fileReducer,
    filesAction: filesActionReducer,
});

const store = configureStore({
    reducer,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            },
        },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
