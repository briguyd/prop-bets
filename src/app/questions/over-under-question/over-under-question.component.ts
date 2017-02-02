import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-over-under-question',
  templateUrl: './over-under-question.component.html',
  styleUrls: ['./over-under-question.component.css']
})
export class OverUnderQuestionComponent implements OnInit {

  @Input() question;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
