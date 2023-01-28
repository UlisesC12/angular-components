import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  activeMenu = false;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggleMenu() {
    this.activeMenu =!this.activeMenu;
  }
}
