import { Component } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-stranica-oglasa',
  templateUrl: './stranica-oglasa.component.html',
  styleUrls: ['./stranica-oglasa.component.css'],
})
export class StranicaOglasaComponent {
  checkMark = faCheck;
  xMark = faX;
  vidiVise: boolean = false;
  vidiViseToggle() {
    this.vidiVise = !this.vidiVise;
  }
}
