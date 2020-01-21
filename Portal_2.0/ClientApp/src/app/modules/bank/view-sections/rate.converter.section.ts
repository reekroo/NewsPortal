import { Component, Input, Directive, ElementRef, HostListener } from '@angular/core';

import { Rate } from '../../../models/rate.model';

@Component({
  selector: 'converter-section',
  templateUrl: './rate.converter.section.html'
})

export class ConvertorSectionComponent {

  @Input() rate: Rate;
  @Input() onlyNumber: boolean = true;

  x: number;
  y: number;

  ngOnChanges() {

    this.x = this.rate.Cur_OfficialRate;
    this.y = Number(this.rate.Cur_Scale);
  }

  calcNacionalValue() {

    this.x = (this.rate.Cur_OfficialRate * this.y) / Number(this.rate.Cur_Scale);

    this.x = Number((this.x).toFixed(5));
  }

  calcCurrentValue() {

    this.y = (Number(this.rate.Cur_Scale) * this.x) / this.rate.Cur_OfficialRate;

    this.y = Number((this.y).toFixed(5));
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {

    let e = <KeyboardEvent>event;

    if (this.onlyNumber) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }

}
