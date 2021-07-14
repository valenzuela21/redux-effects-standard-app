import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {tap, mergeMap, map, catchError} from "rxjs/operators";

import * as actionUser from "../actions"

import {UserService} from "../../services/user.service";

@Injectable()
export class usersEffects {

  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  loaderUsers$ = createEffect(() => this.actions$.pipe(
    ofType(actionUser.loaderUser),
    mergeMap(() => this.userService.getUsers().pipe(
      map(users => actionUser.loaderUserSuccess({users})),
      catchError( (error) => of(actionUser.loaderUserError({payload: error})))
    ))
  ));

}
