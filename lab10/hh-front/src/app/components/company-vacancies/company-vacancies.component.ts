import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent {
  vacancies: IVacancy[] = [];
  company_id!: number;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getCompanyVacancies(this.company_id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}


