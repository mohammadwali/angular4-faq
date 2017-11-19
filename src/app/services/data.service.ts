import {Injectable} from '@angular/core';
import {Question} from '../interfaces/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
  }

  getQuestions() {
    const items = localStorage.getItem('questions');
    this.questions = items ? JSON.parse(items) : [];
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  removeQuestion(question: Question) {
    const idx = this.questions.indexOf(question);

    if (idx !== -1) {
      this.questions.splice(idx, 1);

      localStorage.setItem('questions', JSON.stringify(this.questions));
    }
  }
}
