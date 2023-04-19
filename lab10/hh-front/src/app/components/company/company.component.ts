import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICompany } from 'src/app/models/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @Input() company! : ICompany;
  
  constructor(private router : Router){}

  listOfVacancies(company: ICompany){
    this.router.navigate(['/companies', company.id, 'vacancies'])
  }
}
