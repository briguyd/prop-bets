import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css']
})
export class CheckboxQuestionComponent implements OnInit {

  @Input() question;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
