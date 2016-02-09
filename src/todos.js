/**
 * Created by albandauleu on 12/01/16.
 */
import {computedFrom, ObserverLocator, inject} from 'aurelia-framework';

@inject(ObserverLocator)
export class Todos {

    constructor(observer) {


        this.todos = [];
        this.nbCompleted = 0;
        this.todoText = '';
        this.filter='all';
        this.showAll = true;
        this.observerLocator = observer;
        // subscribe to the "bar" property's changes:
        var subscription = this.observerLocator
            .getObserver(this, 'todos')
            .subscribe(this.onChange);
    }

    activate(params, routeConfig) {
        this.filter = params.filter;
    }

    onChange(newValue, oldValue) {
        alert(`bar changed from ${oldValue} to ${newValue}`);
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

    @computedFrom('todos')
    get nbItemsLeft(){
        return `${this.getFilteredTodos().length}`;
    }
}