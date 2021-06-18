import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';

const routes: Routes = [
  {path:'CustomerList', component:CustomerListComponent},
  {path:'CustomerSave',component:CustomerSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
