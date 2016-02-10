/**
 * Created by albandauleu on 12/01/16.
 */
import {inject} from 'aurelia-framework';

export class Todos {

    constructor() {


        this.todos = [];
        this.nbCompleted = 0;
        this.todoText = '';
        this.filter='all';
        this.showAll = true;
    }

    activate(params, routeConfig) {
        this.filter = params.filter;
    }

    addTodo = function(){
        var newTodo = {
            title: this.todoText.trim(),
            completed: false
        };
        this.todos.push(newTodo);

        this.todoText = '';
    };

    removeTodo = function(index){
        if(this.todos.length ==1 && index ==0){
            this.todos = [];
        }
        this.todos = this.todos.splice(index, 1);
    };

    clearCompleted = function(){
        this.todos = this.getFilteredTodos();
    };

    getFilteredTodos = function(){
        return this.todos.filter(function(todo){
            return !todo.completed;
        });
    };

    get nbItemsLeft(){
        return this.getFilteredTodos().length;
    }
}