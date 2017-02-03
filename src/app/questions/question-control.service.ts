import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};
    const fg = new FormGroup(group);
    if (questions) {
      questions.forEach(question => {
        const fc = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
        if (fg.contains(question.group)) {
          (<FormGroup>fg.get(question.group)).addControl(question.key, fc);
        } else {
          fg.addControl(question.group, new FormGroup({ [question.key]: fc}));
        }
      });
    }

    console.log(fg);
    return fg;
  }


}
