import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NumberToLcdComponent } from './number-to-lcd.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [NumberToLcdComponent],
  bootstrap: [NumberToLcdComponent],
})
export class NumberToLcdModule {}
