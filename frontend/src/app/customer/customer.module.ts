import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RoomlistComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
