import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../module/Question';
@Component({
  selector: 'question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  text:string;
  answer:string;
  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    console.log('yes add to question');
    this.questionAdded.emit({text:this.text, answer:this.answer, hide:true});
  }


}
