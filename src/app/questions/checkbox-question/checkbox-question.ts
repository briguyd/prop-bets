import { QuestionBase } from '../question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
  type = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
