import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AssetsComponent } from './page/assets/assets.component';
import { SparepartComponent } from './page/sparepart/sparepart.component';
import { ConfigurationComponent } from './page/configuration/configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './page/main/main.component';
import { HistoryComponent } from './page/history/history.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ServiceComponent } from './page/service/service.component';
import { ModalComponent } from './page/modal/modal.component';
import { DetailSparepartComponent } from './page/detail-sparepart/detail-sparepart.component';
import { DetailConfigurationComponent } from './page/detail-configuration/detail-configuration.component';
import { DetailAssetsComponent } from './page/detail-assets/detail-assets.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    AssetsComponent,
    SparepartComponent,
    ConfigurationComponent,
    MainComponent,
    HistoryComponent,
    DashboardComponent,
    ServiceComponent,
    ModalComponent,
    DetailSparepartComponent,
    DetailConfigurationComponent,
    DetailAssetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
