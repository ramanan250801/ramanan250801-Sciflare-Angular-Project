import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  {
    path: "add-event",
    component: AddEventComponent,
  },
  {
    path: "view-event",
    component: ViewEventComponent,
  },
  {
    path: "",
    redirectTo: "view-event",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
