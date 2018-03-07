import { Injectable } from '@angular/core';
import { Question } from '../module/Question';

@Injectable()
export class DataQuestionService {

  qeustions:Question[] = [];

  constructor() {}

  getQuestion(){
    if(localStorage.getItem('questions') === null){
      this.qeustions = [];
    }else{
      this.qeustions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.qeustions;
  }


  addQuestion(question:Question){
    //console.log('addQuestion', question);
    this.qeustions.unshift(question);
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }



  removeQuestion(question:Question){
    for(let i =0;  i< this.qeustions.length; i ++){
      if(question == this.qeustions[i]){
        this.qeustions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.qeustions));
      }
    }
  }
}
