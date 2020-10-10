import { Component, OnInit } from '@angular/core';
import { menus, logo, iconColor, pageNoti, notificationList, data, position, footerData } from './mockData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  menus = menus;
  logo = logo;
  iconColor = iconColor;
  pageNoti = pageNoti;
  //noti01
  notificationList = notificationList;
  // menu02
  data = data;
  position = position;
  //check to login
  isCheck: any;

  //footer01
  footerData = footerData;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleItemClick(event) {
    this.router.navigate([event.link]);
  }
  menuClick($event) {
    if ($event.name === "Đăng xuất") {

    }
  }
  handle($event) {
    console.log($event);
  }
  handleCheck($event) {

    this.isCheck = $event;
    console.log(this.isCheck);
  }
}
