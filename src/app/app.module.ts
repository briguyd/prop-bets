import { QuestionService } from './questions/question.service';
import { OverUnderQuestionComponent } from './questions/over-under-question/over-under-question.component';
import { QuestionComponent } from './questions/question/question.component';
import { PropSheetComponent } from './prop-sheet/prop-sheet.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CheckboxQuestionComponent } from './questions/checkbox-question/checkbox-question.component';

@NgModule({
  declarations: [
    AppComponent,
    PropSheetComponent,
    QuestionComponent,
    OverUnderQuestionComponent,
    CheckboxQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
