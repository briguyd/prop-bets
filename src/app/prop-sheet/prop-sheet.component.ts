import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../questions/question-control.service';
@Component({
  selector: 'app-prop-sheet',
  templateUrl: './prop-sheet.component.html',
  providers: [QuestionControlService]
})
export class PropSheetComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];

  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) { }
  ngOnInit() {
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
