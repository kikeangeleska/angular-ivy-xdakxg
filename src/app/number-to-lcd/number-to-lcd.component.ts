import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-to-lcd',
  templateUrl: './number-to-lcd.component.html',
  styleUrls: ['./number-to-lcd.component.scss'],
})
export class NumberToLcdComponent implements OnInit {
  _number: number = 123;

  /*number to display
  default 0*/
  @Input() set number(v: number) {
    this._number = v;
    this.showNumberToLcd();
  }

  /*display's background-color
  default #000 (black) */
  @Input() backgroundColor: string = '#000';

  /*digit width
  default 20px*/
  @Input() width: string = '20px';

  /*digit height
  default 40px*/
  @Input() height: string = '40px';

  /* active lines color
  default rgb(243, 0, 0) (bright-green) */
  @Input() activeColor: string = '#00994d';

  /* disabled lines color
  default rgb(60, 0, 0) (dark-green) */
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
