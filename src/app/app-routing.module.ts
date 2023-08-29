import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccounteditComponent } from './accountedit/accountedit.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
{path:'reports', component:ReportsComponent},
  {path:'accounts', component:AccountlistComponent},
{path:'edit/:id',component:AccounteditComponent},
{path:'create-account',component:CreateaccountComponent},
{path:'', redirectTo:'accounts',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
