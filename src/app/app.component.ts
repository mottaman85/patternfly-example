import { 
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { CardConfig } from './card/basic-card/card-config';
import { InfoStatusCardConfig } from './card/card-info-config'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  config: CardConfig;
  title = 'patternfly-ng-app';

  card1Config: InfoStatusCardConfig = {
    showTopBorder: true,
    htmlContent: true,
    title: 'TinyCore-local',
    href: '//www.redhat.com/',
    iconStyleClass: 'fa fa-shield',
    info: [
      'VM Name: aapdemo002',
      'Host Name: localhost.localdomian',
      'IP Address: 10.9.62.100',
      'Power status: on'
    ]
  };

  card2Config: InfoStatusCardConfig = {
    showTopBorder: false,
    htmlContent: false,
    iconImageSrc: '//www.patternfly.org/assets/img/patternfly-orb.svg',
    info: [
      'Infastructure: VMware',
      'Vmware: 1 CPU (1 socket x 1 core), 1024 MB',
      '12 Snapshots',
      'Drift History: 1',
      '<b>No htmlContent</b>'
    ]

  };

  card3Config: InfoStatusCardConfig = {
    htmlContent: true,
    title: 'Favorite Things',
    iconStyleClass: 'fa fa-heart',
    info: [
      '<i class="fa fa-coffee">',
      '<i class="fa fa-motorcycle">',
      '<b>Tacos</b>'
    ]
  };  

  ngOnInit(): void {
    this.config = {
      noPadding: true,
      topBorder: false
    } as CardConfig;
  }

}
