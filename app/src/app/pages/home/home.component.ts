import { Component, OnInit } from '@angular/core';
import { OpenSourceBannerComponent } from '../../components/open-source-banner/open-source-banner.component';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { HeroComponent } from '../../components/hero/hero.component';
import { FamiliarTechnologiesComponent } from '../../components/familiar-technologies/familiar-technologies.component';

import { NotificationBannerComponent } from '../../components/notification-banner/notification-banner.component';
import { HomeBannersComponent } from '../../components/home-banners/home-banners.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [
      NotificationBannerComponent,
      OpenSourceBannerComponent, 
      ParallaxDirective, 
      HeroComponent, 
      FamiliarTechnologiesComponent,
      HomeBannersComponent,
    ]
})
export class HomeComponent implements OnInit {
  speed = 0.9;
  enabled = true;
  ngOnInit(): void {
    // console.log(environment);
  }
}