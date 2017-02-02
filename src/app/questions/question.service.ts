import { CheckboxQuestion } from './checkbox-question/checkbox-question';
import { OverUnderQuestion } from './over-under-question/over-under-question';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { QuestionBase } from './question-base';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  // getQuestionsInGroup(groupName: string) {
  //   const questions: QuestionBase<any>[] = [
  //     new OverUnderQuestion({
  //       key: 'finalScore',
  //       label: 'Final Score',
  //       required: true,
  //       order: 1,
  //       median: 45.5
  //     }),
  //     new OverUnderQuestion({
  //       key: 'interceptions',
  //       label: 'Total Interceptions',
  //       required: true,
  //       order: 2,
  //       median: 2.5
  //     }),
  //     new CheckboxQuestion({
  //       key: 'singerForgetsWord',
  //       label: 'Anthem singer forgets/omits at least one word',
  //       required: true,
  //       order: 3
  //     })
  //   ];
  //   return questions.sort((a, b) => a.order - b.order).filter(question => question.group === groupName);
  // }

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http) {

    this.actionUrl = 'http://w-bdemaio:3000/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getAll(): Observable<QuestionBase<any>[]> {
    return this._http.get(this.actionUrl + 'questions')
      .map((response: Response) => this.createQuestions(response.json()))
      .catch(this.handleError);
  }

  private createQuestions(response: any): QuestionBase<any>[] {
    const questions = [];
    for (const entry of response) {
      if (entry.type === 'over-under') {
        questions.push(new OverUnderQuestion(entry));
      }
      if (entry.type === 'checkbox') {
        questions.push(new CheckboxQuestion(entry));
      }
    }
    return questions;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
