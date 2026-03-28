import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoomcardComponent } from './roomcard/roomcard.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RoomcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RoomcardComponent
  ]
})
export class SharedModule { }
