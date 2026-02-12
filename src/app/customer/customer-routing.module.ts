import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { RoomlistComponent } from './roomlist/roomlist.component';

const routes: Routes = [
  { path: 'rooms', component: RoomlistComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: 'rooms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
