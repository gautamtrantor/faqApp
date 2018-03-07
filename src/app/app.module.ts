import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { DataQuestionService } from './services/data-question.service';
import { QuestionComponent } from './components/question/question.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionListComponent,
    QuestionComponent,
    QuestionAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
