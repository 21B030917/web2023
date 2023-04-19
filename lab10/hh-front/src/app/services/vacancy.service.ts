import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVacancy } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}

  getVacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }


  getVacancy(vacancy_id: number): Observable<IVacancy> {
    return this.http.get<IVacancy>(`${this.BASE_URL}/api/vacancies/${vacancy_id}/`);
  }

  
  getCompanyVacancies(company_id: number): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies/`
    );
  }

  TopTenVacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten/`);
  }
}