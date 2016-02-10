System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, Todos;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            Todos = (function () {
                function Todos() {
                    _classCallCheck(this, Todos);

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
                }

                _createClass(Todos, [{
                    key: 'activate',
                    value: function activate(params, routeConfig) {
                        this.filter = params.filter;
                    }
                }, {
                    key: 'nbItemsLeft',
                    get: function get() {
                        return this.getFilteredTodos().length;
                    }
                }]);

                return Todos;
            })();

            _export('Todos', Todos);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnQkFLYSxLQUFLOzs7Ozs7Ozt1Q0FGVixNQUFNOzs7QUFFRCxpQkFBSztBQUVILHlCQUZGLEtBQUssR0FFQTswQ0FGTCxLQUFLOzt5QkFnQmQsT0FBTyxHQUFHLFlBQVU7QUFDaEIsNEJBQUksT0FBTyxHQUFHO0FBQ1YsaUNBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUMzQixxQ0FBUyxFQUFFLEtBQUs7eUJBQ25CLENBQUM7QUFDRiw0QkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXpCLDRCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztxQkFDdEI7O3lCQUVELFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBQztBQUN4Qiw0QkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRyxDQUFDLElBQUksS0FBSyxJQUFHLENBQUMsRUFBQztBQUNsQyxnQ0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7eUJBQ25CO0FBQ0QsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUM1Qzs7eUJBRUQsY0FBYyxHQUFHLFlBQVU7QUFDdkIsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQ3hDOzt5QkFFRCxnQkFBZ0IsR0FBRyxZQUFVO0FBQ3pCLCtCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQ25DLG1DQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDMUIsQ0FBQyxDQUFDO3FCQUNOOztBQXBDRyx3QkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsd0JBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLHdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQix3QkFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN2Qjs7NkJBVlEsS0FBSzs7MkJBWU4sa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtBQUMxQiw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUMvQjs7O3lCQTZCYyxlQUFFO0FBQ2IsK0JBQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUN6Qzs7O3VCQTdDUSxLQUFLIiwiZmlsZSI6InRvZG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGFsYmFuZGF1bGV1IG9uIDEyLzAxLzE2LlxuICovXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgVG9kb3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cblxuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgICAgIHRoaXMubmJDb21wbGV0ZWQgPSAwO1xuICAgICAgICB0aGlzLnRvZG9UZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuZmlsdGVyPSdhbGwnO1xuICAgICAgICB0aGlzLnNob3dBbGwgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBwYXJhbXMuZmlsdGVyO1xuICAgIH1cblxuICAgIGFkZFRvZG8gPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgbmV3VG9kbyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRvZG9UZXh0LnRyaW0oKSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuXG4gICAgICAgIHRoaXMudG9kb1RleHQgPSAnJztcbiAgICB9O1xuXG4gICAgcmVtb3ZlVG9kbyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgaWYodGhpcy50b2Rvcy5sZW5ndGggPT0xICYmIGluZGV4ID09MCl7XG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgY2xlYXJDb21wbGV0ZWQgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy5nZXRGaWx0ZXJlZFRvZG9zKCk7XG4gICAgfTtcblxuICAgIGdldEZpbHRlcmVkVG9kb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIoZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICByZXR1cm4gIXRvZG8uY29tcGxldGVkO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ2V0IG5iSXRlbXNMZWZ0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbHRlcmVkVG9kb3MoKS5sZW5ndGg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
