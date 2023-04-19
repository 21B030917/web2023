import { Component, Input } from '@angular/core';
import { IVacancy } from 'src/app/models/models';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  @Input() vacancy! : IVacancy;
}
