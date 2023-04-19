import {Component, OnInit} from '@angular/core';
import { ICompany } from './models/models';
import { CompanyService } from './services/company.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh-front';

  companies: ICompany[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      console.log(companies)
    })
  }

  // addCategory() {
  //   this.categoryService.createCategory(this.newCategory).subscribe((category) => {
  //     this.categories.push(category);
  //     this.newCategory = '';
  //   });
  // }

  // deleteCategory(category_id: number) {
  //   this.categoryService.deleteCategory(category_id).subscribe((data) => {
  //     this.categories = this.categories.filter((category) => category.id !== category_id);
  //   });
  // }

}