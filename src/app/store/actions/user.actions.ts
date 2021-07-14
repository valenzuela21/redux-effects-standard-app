import {createAction, props} from '@ngrx/store';
import {User} from "../../models/user.models";


export const downloaderUser = createAction('[Users] Downloader Users', props<{id: string}>());
export const downloaderUserSuccess = createAction('[Users] Downloader Users Success', props<{user: User[]}>());
export const downloaderUserError = createAction('[Users] Downloader Users Error', props<{payload: any}>());
