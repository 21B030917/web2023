import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ICompany } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<ICompany[]> {
    return this.client.get<ICompany[]>(
      `${this.BASE_URL}/api/companies`
    )
  }

  // createCategory(categoryName: string): Observable<Category> {
  //   return this.client.post<Category>(
  //     `${this.BASE_URL}/api/categories/`,
  //     {name: categoryName}
  //   )
  // }

  // deleteCategory(category_id: number): Observable<any> {
  //   return this.client.delete(
  //     `${this.BASE_URL}/api/categories/${category_id}/`
  //   )
  // }
}