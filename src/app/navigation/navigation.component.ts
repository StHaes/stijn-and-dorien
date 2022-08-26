import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  elClicked = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollToTop(): void {

  }


  scrollToAnchor(id: string) {
    const el = document.querySelector(id) as HTMLElement;
    const navH = document.querySelector('#navBar')?.scrollHeight || 0;
    const toHere = el.getBoundingClientRect().top - navH;
    if (this.elClicked === id) return;
    window.scrollTo({behavior: "smooth", top: toHere});
    this.elClicked = '#' + el.id;
  }
}
