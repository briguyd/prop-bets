import { QuestionBase } from '../question-base';

export class OverUnderQuestion extends QuestionBase<number> {
  controlType = 'over-under';
  median: number;

  constructor(options: {} = {}) {
    super(options);
    this.median = options['median'] || [];
  }
}
