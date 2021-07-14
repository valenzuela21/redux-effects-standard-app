import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {tap, mergeMap, map, catchError} from "rxjs/operators";

import * as actionUser from "../actions"

import {UserService} from "../../services/user.service";

@Injectable()
export class userEffect {

  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  loaderUser$ = createEffect(() => this.actions$.pipe(
    ofType(actionUser.downloaderUser),
    mergeMap((action) => this.userService.getUserById(action.id).pipe(
      map(user => actionUser.downloaderUserSuccess({user})),
      catchError( (error) => of(actionUser.downloaderUserError({payload: error})))
    ))
  ));

}
