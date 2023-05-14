export { getUserAuthData } from './selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './selectors/getUserInited/getUserInited';

export {
    userActions,
    userReducer,
} from './slice/userSlice';

export type { UserSchema, User } from './types/user';