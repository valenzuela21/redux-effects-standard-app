import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {User} from "../../models/user.models";
import {AppState} from "../../store/app.reducers";
import {loaderUser} from "../../store/actions";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[] = [];
  loading: boolean | undefined;
  loader: boolean | undefined;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loaderUser())
    this.store.select('users')
      .subscribe(({users, loading, error, loader}) => {
        this.users = users, this.loading = loading, this.loader = loader, this.error = error
      })
  }

}
