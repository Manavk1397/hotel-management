import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    RoomlistComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
