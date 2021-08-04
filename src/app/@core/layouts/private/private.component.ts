import { Component } from '@angular/core';

import { ItensSide } from './private.component.list';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent {
  public headerSide = ItensSide;
}
