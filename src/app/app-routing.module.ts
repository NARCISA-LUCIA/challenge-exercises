import { ConvertorValutarComponent } from './convertor-valutar/convertor-valutar.component';
import { ComputerComponent } from './computer/computer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'computer', component:ComputerComponent},
  {path:'convertor', component:ConvertorValutarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
