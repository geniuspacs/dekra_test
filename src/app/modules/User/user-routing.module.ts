import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}, {
  path: 'edit/:userId',
  component: EditUserComponent
}, {
  path: 'create',
  component: EditUserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting {

}
