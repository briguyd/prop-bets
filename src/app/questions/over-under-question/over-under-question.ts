import { QuestionBase } from '../question-base';

export class OverUnderQuestion extends QuestionBase<number> {
  controlType = 'over-under';
  options: [string, string] = ['', ''];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
