import { Component } from '@angular/core';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-og-footer',
  templateUrl: './og-footer.component.html',
  styleUrls: ['./og-footer.component.css'],
})
export class OgFooterComponent {
  phoneIcon = faPhone;
  envelopeIcon = faEnvelope;
  mapIcon = faMapMarkerAlt;
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  linkedinIcon = faLinkedin;
  instagramIcon = faInstagram;
}
