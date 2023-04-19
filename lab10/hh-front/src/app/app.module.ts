import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CompanyComponent } from './components/company/company.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { HomeComponent } from './components/home/home.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';
import { ToptenComponent } from './components/topten/topten.component';
import { AppRoutingModule } from './app-routing.module';
import { ToptenpageComponent } from './components/toptenpage/toptenpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
    HomeComponent,
    CompaniesListComponent,
    CompanyVacanciesComponent,
    ToptenComponent,
    ToptenpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }