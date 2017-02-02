import { OverUnderQuestion } from './over-under-question/over-under-question';
import { Injectable }       from '@angular/core';
import { QuestionBase }     from './question-base';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new OverUnderQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        options: ['opt1', 'opt2']
      }),
      new OverUnderQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'LN1234',
        required: true,
        order: 2,
        options: ['optA', 'optB']
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}