import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn: boolean | undefined; // Not used

  userId: number | undefined;
  user: User | undefined; // Not used

  constructor(private userInfo: UserInfoService) {}

  ngOnInit(): void {
    this.userInfo.currentUserId.subscribe((userId) => (this.userId = userId));
  }
}
