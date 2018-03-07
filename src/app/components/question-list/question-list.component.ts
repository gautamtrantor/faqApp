import { Component, OnInit } from '@angular/core';
import { DataQuestionService } from '../../services/data-question.service';
import { Question } from '../../module/Question';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Question[];

  constructor(private questionListService : DataQuestionService) {  }

  ngOnInit() {
    this.questions = this.questionListService.getQuestion();
  }

  addQuestion(question:Question){
    //console.log(question);
    this.questionListService.addQuestion(question);
  }

}
