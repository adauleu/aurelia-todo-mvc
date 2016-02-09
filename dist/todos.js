System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var computedFrom, ObserverLocator, inject, Todos;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
            ObserverLocator = _aureliaFramework.ObserverLocator;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            Todos = (function () {
                function Todos(observer) {
                    _classCallCheck(this, _Todos);

                    this.addTodo = function () {
                        var newTodo = {
                            title: this.todoText.trim(),
                            completed: false
                        };
                        this.todos.push(newTodo);

                        this.todoText = '';
                    };

                    this.removeTodo = function (index) {
                        if (this.todos.length == 1 && index == 0) {
                            this.todos = [];
                        }
                        this.todos = this.todos.splice(index, 1);
                    };

                    this.clearCompleted = function () {
                        this.todos = this.getFilteredTodos();
                    };

                    this.getFilteredTodos = function () {
                        return this.todos.filter(function (todo) {
                            return !todo.completed;
                        });
                    };

                    this.todos = [];
                    this.nbCompleted = 0;
                    this.todoText = '';
                    this.filter = 'all';
                    this.showAll = true;
                    this.observerLocator = observer;

                    var subscription = this.observerLocator.getObserver(this, 'todos').subscribe(this.onChange);
                }

                _createDecoratedClass(Todos, [{
                    key: 'activate',
                    value: function activate(params, routeConfig) {
                        this.filter = params.filter;
                    }
                }, {
                    key: 'onChange',
                    value: function onChange(newValue, oldValue) {
                        alert('bar changed from ' + oldValue + ' to ' + newValue);
                    }
                }, {
                    key: 'nbItemsLeft',
                    decorators: [computedFrom('todos')],
                    get: function get() {
                        return '' + this.getFilteredTodos().length;
                    }
                }]);

                var _Todos = Todos;
                Todos = inject(ObserverLocator)(Todos) || Todos;
                return Todos;
            })();

            _export('Todos', Todos);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrQ0FNYSxLQUFLOzs7Ozs7Ozs2Q0FIVixZQUFZO2dEQUFFLGVBQWU7dUNBQUUsTUFBTTs7O0FBR2hDLGlCQUFLO0FBRUgseUJBRkYsS0FBSyxDQUVGLFFBQVEsRUFBRTs7O3lCQXVCdEIsT0FBTyxHQUFHLFlBQVU7QUFDaEIsNEJBQUksT0FBTyxHQUFHO0FBQ1YsaUNBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUMzQixxQ0FBUyxFQUFFLEtBQUs7eUJBQ25CLENBQUM7QUFDRiw0QkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXpCLDRCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztxQkFDdEI7O3lCQUVELFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBQztBQUN4Qiw0QkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRyxDQUFDLElBQUksS0FBSyxJQUFHLENBQUMsRUFBQztBQUNsQyxnQ0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7eUJBQ25CO0FBQ0QsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUM1Qzs7eUJBRUQsY0FBYyxHQUFHLFlBQVU7QUFDdkIsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQ3hDOzt5QkFFRCxnQkFBZ0IsR0FBRyxZQUFVO0FBQ3pCLCtCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQ25DLG1DQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDMUIsQ0FBQyxDQUFDO3FCQUNOOztBQTdDRyx3QkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsd0JBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLHdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQix3QkFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLHdCQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzs7QUFFaEMsd0JBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQ2xDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pDOztzQ0FmUSxLQUFLOzsyQkFpQk4sa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtBQUMxQiw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUMvQjs7OzJCQUVPLGtCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDekIsNkJBQUssdUJBQXFCLFFBQVEsWUFBTyxRQUFRLENBQUcsQ0FBQztxQkFDeEQ7OztpQ0E2QkEsWUFBWSxDQUFDLE9BQU8sQ0FBQzt5QkFDUCxlQUFFO0FBQ2Isb0NBQVUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFHO3FCQUM5Qzs7OzZCQXZEUSxLQUFLO0FBQUwscUJBQUssR0FEakIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUNYLEtBQUssS0FBTCxLQUFLO3VCQUFMLEtBQUsiLCJmaWxlIjoidG9kb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWxiYW5kYXVsZXUgb24gMTIvMDEvMTYuXG4gKi9cbmltcG9ydCB7Y29tcHV0ZWRGcm9tLCBPYnNlcnZlckxvY2F0b3IsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KE9ic2VydmVyTG9jYXRvcilcbmV4cG9ydCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3RvcihvYnNlcnZlcikge1xuXG5cbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgICAgICB0aGlzLm5iQ29tcGxldGVkID0gMDtcbiAgICAgICAgdGhpcy50b2RvVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmZpbHRlcj0nYWxsJztcbiAgICAgICAgdGhpcy5zaG93QWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlcjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBcImJhclwiIHByb3BlcnR5J3MgY2hhbmdlczpcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMub2JzZXJ2ZXJMb2NhdG9yXG4gICAgICAgICAgICAuZ2V0T2JzZXJ2ZXIodGhpcywgJ3RvZG9zJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZykge1xuICAgICAgICB0aGlzLmZpbHRlciA9IHBhcmFtcy5maWx0ZXI7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KGBiYXIgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgfVxuXG4gICAgYWRkVG9kbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBuZXdUb2RvID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMudG9kb1RleHQudHJpbSgpLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG5cbiAgICAgICAgdGhpcy50b2RvVGV4dCA9ICcnO1xuICAgIH07XG5cbiAgICByZW1vdmVUb2RvID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICBpZih0aGlzLnRvZG9zLmxlbmd0aCA9PTEgJiYgaW5kZXggPT0wKXtcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBjbGVhckNvbXBsZXRlZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLmdldEZpbHRlcmVkVG9kb3MoKTtcbiAgICB9O1xuXG4gICAgZ2V0RmlsdGVyZWRUb2RvcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcihmdW5jdGlvbih0b2RvKXtcbiAgICAgICAgICAgIHJldHVybiAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBAY29tcHV0ZWRGcm9tKCd0b2RvcycpXG4gICAgZ2V0IG5iSXRlbXNMZWZ0KCl7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldEZpbHRlcmVkVG9kb3MoKS5sZW5ndGh9YDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
