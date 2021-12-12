import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LcdDisplayComponent } from './lcd-display/lcd-display.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, LcdDisplayComponent],
  bootstrap: [LcdDisplayComponent],
})
export class AppModule {}
