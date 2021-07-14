import { Action, createReducer, on} from '@ngrx/store';
import {downloaderUser, downloaderUserError, downloaderUserSuccess} from '../actions';
import {User} from "../../models/user.models";

export interface UserState{
  id: string,
  user: User[],
  loader: boolean,
  loading: boolean,
  error: any
}

export const userInitialState: UserState = {
  id: '',
  user: [],
  loader: false,
  loading: false,
  error: null
};


const _userReducer = createReducer(
  userInitialState,
  on(downloaderUser, (state, {id}) =>({...state, loading: true, id})),
  on(downloaderUserSuccess, (state, {user}) =>({...state, loading: false, loader: true, user:{...user}})),
  on(downloaderUserError, (state, {payload}) =>
    ({
      ...state,
      loading: false,
      loader: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
