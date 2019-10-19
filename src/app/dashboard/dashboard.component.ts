import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.getProfessors();
  }

  getProfessors(): void {
    this.professorService.getProfessors()
      .subscribe(professorss => this.professors = professorss.slice(1, 5));
  }
}