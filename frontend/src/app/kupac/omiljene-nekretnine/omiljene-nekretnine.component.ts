import { Component } from '@angular/core';
import { faEuroSign, faHeartCircleMinus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-omiljene-nekretnine',
  templateUrl: './omiljene-nekretnine.component.html',
  styleUrls: ['./omiljene-nekretnine.component.css']
})
export class OmiljeneNekretnineComponent {
  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  heartMinus = faHeartCircleMinus;

}
