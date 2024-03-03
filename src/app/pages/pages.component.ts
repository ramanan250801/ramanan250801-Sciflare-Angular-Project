import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
// import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu autoCollapse="true" [items]="menu" ></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  // constructor(private menuService: NbMenuService, private sidebarService: NbSidebarService, private layoutService: LayoutService,) {

  // }
  // ngOnInit() {
  //   this.menuService.onItemSelect()
  //     .subscribe((menuBag) => {
  //       if (menuBag.tag == 'menu') {
  //         // console.log(menuBag);
  //         this.sidebarService.compact('menu-sidebar');
  //         this.layoutService.changeLayoutSize();
  //       }
  //     });
  // }
}
