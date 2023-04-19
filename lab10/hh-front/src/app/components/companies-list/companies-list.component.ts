import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompany } from 'src/app/models/models';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})

export class CompaniesListComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService, private router : Router) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

 

}