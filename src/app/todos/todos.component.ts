import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text1;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
    
    /*
    this.todos = [
          {
          text: 'pick up kids at school'
         },
        {
          text: 'pick up kids at boss'
        },
        {
          text: 'dinner with wife'
        }
    ];
    */
  }
  addTodo(){
    console.log(this.text1);
    this.todos.push({
       text: this.text1
    });
  }
  deleteTodo(todotext){
    for(var i=0;i<this.todos.length;i++){
      if (this.todos[i].text == todotext){
        this.todos.splice(i,1);
      }
    }

  }


}
