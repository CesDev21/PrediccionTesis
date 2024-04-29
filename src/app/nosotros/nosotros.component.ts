import { Component, Output, EventEmitter } from '@angular/core';
import { navbarData } from '../sidenav/nav-data';

export interface SideNavToggle {
  screenwidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  sceenWidth = 0;
  navData = navbarData;

}
