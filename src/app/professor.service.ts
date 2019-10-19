import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { PROFESSORS } from './mock-professors';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProfessorService {

  constructor(
    private messageService : MessageService,
    private http: HttpClient) { }


  getProfessors(): Observable<Professor[]> {
    this.messageService.add('ProfessorService: fetched professors');
    return of(PROFESSORS);
  }

  getProfessor(rating: number): Observable<Professor> {
    this.messageService.add(`ProfessorService: fetched professor rating=${rating}`);
    return of(PROFESSORS.find(professor => professor.rating === rating));
  }

}
