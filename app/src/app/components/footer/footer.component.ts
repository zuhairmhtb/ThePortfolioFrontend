import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbar } from '@angular/material/toolbar';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIconAnchor, MatAnchor } from '@angular/material/button';


export interface CustomIcon {
  svg: string;
  path: string;
}

export const customIcons: CustomIcon[] = [
  { svg: 'github', path: 'icons/github-mark-white.svg' },
];


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true,
    imports: [MatToolbar, MatList, MatListItem, MatIconAnchor, MatIcon, MatAnchor]
})
export class FooterComponent {
  sections = [
    {
      name: 'Icons',
      class: 'material-icons-round',
      items: ['github'],
    },
  ];
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.createIcons();
  }
  createIcons() {
    this.matIconRegistry.addSvgIcon(
      customIcons[0].svg,
      this.domSanitizer.bypassSecurityTrustResourceUrl(customIcons[0].path)
    );
  }
}
