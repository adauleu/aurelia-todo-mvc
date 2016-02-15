/**
 * Created by albandauleu on 12/02/2016.
 */

import {TodoItem} from 'todoItem'

export class Todos {

    todos = [];
    inputText = '';
    filter = 'all';

    activate(params) {
        this.filter = params.filter;
    }


    addTodo = function () {
        let newTodo = new TodoItem(this.inputText);
        this.todos.push(newTodo);
        this.inputText = '';
        console.log(this.todos);
    }

    removeTodo = function (index) {
        this.todos.splice(index, 1);
    }

    clearTodos = function () {
        this.todos = this.getCompleted();
    }

    getCompleted = function(){
        return this.todos.filter(t => !t.completed)
    }

    get nbCompleted(){
        console.log('je suis évalué')
        return this.getCompleted().length;
    }
}
