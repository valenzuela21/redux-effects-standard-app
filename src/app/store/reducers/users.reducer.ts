import { Action, createReducer, on} from '@ngrx/store';
import {loaderUser, loaderUserSuccess, loaderUserError} from '../actions';
import {User} from "../../models/user.models";

export interface UsersState{
  users: User[],
  loader: boolean,
  loading: boolean,
  error: any
}

export const usersInitialState: UsersState = {
  users: [],
  loader: false,
  loading: false,
  error: null
};


const _usersReducer = createReducer(
  usersInitialState,
  on(loaderUser, (state) =>({...state, loading: true})),
  on(loaderUserSuccess, (state, {users}) =>({...state, loading: false, loader: true, users:[...users]})),
  on(loaderUserError, (state, {payload}) =>
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

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
