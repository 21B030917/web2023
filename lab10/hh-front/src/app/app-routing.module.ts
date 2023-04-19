import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { ToptenComponent } from './components/topten/topten.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesListComponent},
  {path: 'companies/:id/vacancies', component: CompanyVacanciesComponent},
  {path: 'vacancies/topten', component: ToptenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
