import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  activeLink = 'delivery';
  @Output() closeEmitter: EventEmitter<Boolean> = new EventEmitter();

  constructor(private router: Router) { }

  navigate(val: string) {
    this.activeLink = val;
    this.router.navigate([val]);
    this.closeEmitter.emit(true)
  }

}
