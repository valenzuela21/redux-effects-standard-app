import {createAction, props} from '@ngrx/store';
import {User} from "../../models/user.models";

export const loaderUser = createAction('[Users] Loader Users');
export const loaderUserSuccess = createAction('[Users] Loader Users Success', props<{users: User[]}>());
export const loaderUserError = createAction('[Users] Loader Users Error', props<{payload: any}>());
