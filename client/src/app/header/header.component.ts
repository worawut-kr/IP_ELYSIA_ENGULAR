import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
}
//'imports' must be an array of components, directives, pipes, or NgModules.
/*Value is of type '[(not statically analyzable), RouterModule, (not statically analyzable)]'.(-991010)
'imports' must be an array of components, directives, pipes, or NgModules.
  Value is of type '[(not statically analyzable), RouterModule, (not statically analyzable)]'.(-991010)
Cannot find name 'MatToolbarModule'.ts(2304)*/