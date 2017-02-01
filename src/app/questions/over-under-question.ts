import { QuestionBase } from './question-base';

export class OverUnderQuestion extends QuestionBase<number> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
