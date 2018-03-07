import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Question } from '../../module/Question';
import { DataQuestionService } from '../../services/data-question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input('question') question:Question;
  constructor(private dataQuestionService:DataQuestionService) { }

  ngOnInit() {
  }

  removeQuestion(question){
    //console.log(question);
    this.dataQuestionService.removeQuestion(question);
  }

}
