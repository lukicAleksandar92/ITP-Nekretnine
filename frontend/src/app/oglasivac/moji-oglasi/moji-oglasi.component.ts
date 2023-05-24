import { Component } from '@angular/core';
import { faMapMarkerAlt, faEuroSign } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-moji-oglasi',
  templateUrl: './moji-oglasi.component.html',
  styleUrls: ['./moji-oglasi.component.css'],
})
export class MojiOglasiComponent {
  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
}
