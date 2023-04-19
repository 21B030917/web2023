import { Component, OnInit } from '@angular/core';
import { IVacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.css']
})
export class ToptenComponent implements OnInit{
  vacancies: IVacancy[] = [];
  constructor(private vacancyService: VacancyService) {}
  ngOnInit() {
    this.vacancyService.TopTenVacancies().subscribe((data) => {
      this.vacancies = data;
    });
  }
}



