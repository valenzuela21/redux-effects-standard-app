import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {downloaderUser} from "../../store/actions";
import {AppState} from "../../store/app.reducers";
import {filter} from "rxjs/operators";
import {User} from "../../models/user.models";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userInfo!: User;
  loading: boolean | undefined;
  loader: boolean | undefined;
  error: any;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('user')
      .pipe(
        filter(resp => Object.values(resp).length > 0)
      )
      .subscribe(({user, loading, error, loader}) => {
        this.loading = loading;
        this.loader = loader;
        this.error = error;
        // @ts-ignore
        this.userInfo = new User(user['id'], user['first_name'],user['last_name'],user['avatar'],user['email']);
      })

    this.router.params.subscribe(({id}) => {
      //Effects downloader action ngrx
      this.store.dispatch(downloaderUser({id}))
    })

  }

}
