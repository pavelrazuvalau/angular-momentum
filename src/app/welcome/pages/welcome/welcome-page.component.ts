import { Component } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor(private userService: UserService, private router: Router) { }

  submitUserName(enteredName: string): void {
    this.userService.submitUserName(enteredName);
    this.router.navigateByUrl('/greeting');
  }
}
