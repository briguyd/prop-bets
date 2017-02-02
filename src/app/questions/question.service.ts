import { CheckboxQuestion } from './checkbox-question/checkbox-question';
import { OverUnderQuestion } from './over-under-question/over-under-question';
import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new OverUnderQuestion({
        key: 'finalScore',
        label: 'Final Score',
        required: true,
        order: 1,
        median: 45.5
      }),
      new OverUnderQuestion({
        key: 'interceptions',
        label: 'Total Interceptions',
        required: true,
        order: 2,
        median: 2.5
      }),
      new CheckboxQuestion({
        key: 'singerForgetsWord',
        label: 'Anthem singer forgets/omits at least one word',
        required: true,
        order: 3
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
