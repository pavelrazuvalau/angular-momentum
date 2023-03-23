import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.doesUserExist();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree {
    return this.doesUserExist();
  }

  private doesUserExist(): boolean | UrlTree {
    const isExist = !!this.userService.getSavedUser();

    return isExist || this.router.parseUrl('/welcome');
  }
}
