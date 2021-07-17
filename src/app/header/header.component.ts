import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.headerMain') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('headerBG');
    } else {
      element.classList.remove('headerBG');
    }
    let element1 = document.querySelector('.logoImg') as HTMLElement;
    if (window.pageYOffset > element1.clientHeight) {
      element1.classList.add('logoImgScroll');
    } else {
      element1.classList.remove('logoImgScroll');
    }
  }

}
