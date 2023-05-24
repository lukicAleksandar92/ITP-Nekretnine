import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faHouse,
  faPlus,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-og-header',
  templateUrl: './og-header.component.html',
  styleUrls: ['./og-header.component.css'],
})
export class OgHeaderComponent {
  userIcon = faCircleUser;
  houseIcon = faHouse;
  plusIcon = faPlus;
  arrowRighIcon = faArrowRight;
}
