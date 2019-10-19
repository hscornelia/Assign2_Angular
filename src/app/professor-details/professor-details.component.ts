import { Component, OnInit} from '@angular/core';
import { Professor } from '../professor';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { ProfessorService} from '../professor.service';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  professor: Professor;

  constructor(
    private route: ActivatedRoute,
    private professorService: ProfessorService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProfessor();
  }

  getProfessor(): void{
    const rating = +this.route.snapshot.paramMap.get('rating');
    this.professorService.getProfessor(rating).subscribe(professor => this.professor = professor);
  }

  goBack(): void{
    this.location.back();
  }

}

