import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-to-lcd',
  templateUrl: './number-to-lcd.component.html',
  styleUrls: ['./number-to-lcd.component.scss'],
})
export class NumberToLcdComponent implements OnInit {
  _number: number = 0;

  /*number to display default 0*/
  @Input() set number(n: number) {
    this._number = n;
    this.showNumberToLcd();
  }

  /*LCD number width - default 30px*/
  @Input() width: string = '30px';

  /*LCD number height default 50px*/
  @Input() height: string = '50px';

  /*LCD display's background-color #000 (black) */
  @Input() backgroundColor: string = '#000';

  /* LCD numbers active lines color (light-green) */
  @Input() activeColor: string = '#00994d';

  /* LCD numbers disabled lines color (dark-green) */
  @Input() disabledColor: string = '#003300';

  //regEpx for displaying numbers
  reg1 = /[1,4]/;
  reg2 = /[1-3,7]/;
  reg3 = /[5,6]/;
  reg4 = /[0,1,7]/;
  reg5 = /[1,3-5,7,9]/;
  reg6 = /[2]/;
  reg7 = /[1,4,7]/;

  displayValue!: string;

  constructor() {}

  showNumberToLcd() {
    this.displayValue = this._number.toString();
  }

  ngOnInit() {
    this.showNumberToLcd();
  }
}
