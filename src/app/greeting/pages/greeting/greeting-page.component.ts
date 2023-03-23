import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss']
})
export class GreetingPageComponent implements OnInit {
  currentName = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentName = this.userService.getSavedUser();
  }

}
