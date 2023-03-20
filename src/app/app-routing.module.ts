import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AssetsComponent } from './page/assets/assets.component';
import { ConfigurationComponent } from './page/configuration/configuration.component';
import { HomeComponent } from './page/home/home.component';
import { SparepartComponent } from './page/sparepart/sparepart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data:{title:'Login',inapp:false}},
  { path: 'assets', component: AssetsComponent, data:{title:'Assets',inapp:true}},
  { path: 'configuration', component: ConfigurationComponent, data:{title:'Configuration',inapp:true}},
  { path: 'home', component: HomeComponent, data:{title:'Home',inapp:true}},
  { path: 'sparepart', component: SparepartComponent, data:{title:'Sparepart',inapp:true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
