import { Component, Input, Directive, ElementRef, HostListener } from '@angular/core';

import { CurrencyRate } from '../../../models/currency.rate.model';

@Component({
  selector: 'converter-section',
  templateUrl: './currency.rate.converter.section.html'
})

export class ConvertorSectionComponent {

  @Input() rate: CurrencyRate;
  @Input() onlyNumber: boolean = true;

  x: number;
  y: number;

  ngOnChanges() {

    this.x = this.rate.officialRate;
    this.y = Number(this.rate.scale);
  }

  calcNacionalValue() {

    this.x = (this.rate.officialRate * this.y) / Number(this.rate.scale);

    this.x = Number((this.x).toFixed(5));
  }

  calcCurrentValue() {

    this.y = (Number(this.rate.scale) * this.x) / this.rate.officialRate;

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
