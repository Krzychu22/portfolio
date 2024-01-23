import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-crack-button',
  templateUrl: './crack-button.component.html',
  styleUrl: './crack-button.component.scss'
})

export class CrackButtonComponent {
  @ViewChild('button') button: ElementRef<HTMLElement> | undefined;

  constructor() {
  }

  crackMe() {
    if (!this.button) {
    return;
    }
    if (this.button.nativeElement.classList.contains('open')) {
      this.button.nativeElement.classList.remove('open');
    } else {
      this.button.nativeElement.classList.add('open');
    }
  }
}
