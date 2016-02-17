System.register(['todoItem'], function (_export) {
    'use strict';

    var TodoItem, Todos;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_todoItem) {
            TodoItem = _todoItem.TodoItem;
        }],
        execute: function () {
            Todos = (function () {
                function Todos() {
                    _classCallCheck(this, Todos);

                    this.todos = [];
                    this.inputText = '';
                    this.filter = 'all';

                    this.addTodo = function () {
                        var newTodo = new TodoItem(this.inputText);
                        this.todos.push(newTodo);
                        this.inputText = '';
                        console.log(this.todos);
                    };

                    this.removeTodo = function (index) {
                        this.todos.splice(index, 1);
                    };

                    this.clearTodos = function () {
                        this.todos = this.getRemaining();
                    };

                    this.getRemaining = function () {
                        return this.todos.filter(function (t) {
                            return !t.completed;
                        });
                    };
                }

                _createClass(Todos, [{
                    key: 'activate',
                    value: function activate(params) {
                        this.filter = params.filter;
                    }
                }, {
                    key: 'nbRemaining',
                    get: function get() {
                        console.log('je suis évalué');
                        return this.getRemaining().length;
                    }
                }]);

                return Todos;
            })();

            _export('Todos', Todos);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFNYSxLQUFLOzs7Ozs7OztpQ0FGVixRQUFROzs7QUFFSCxpQkFBSzt5QkFBTCxLQUFLOzBDQUFMLEtBQUs7O3lCQUVkLEtBQUssR0FBRyxFQUFFO3lCQUNWLFNBQVMsR0FBRyxFQUFFO3lCQUNkLE1BQU0sR0FBRyxLQUFLOzt5QkFPZCxPQUFPLEdBQUcsWUFBWTtBQUNsQiw0QkFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLDRCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6Qiw0QkFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMzQjs7eUJBRUQsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQzFCLDRCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQy9COzt5QkFFRCxVQUFVLEdBQUcsWUFBWTtBQUNyQiw0QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3BDOzt5QkFFRCxZQUFZLEdBQUcsWUFBVTtBQUNyQiwrQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7bUNBQUksQ0FBQyxDQUFDLENBQUMsU0FBUzt5QkFBQSxDQUFDLENBQUE7cUJBQzlDOzs7NkJBNUJRLEtBQUs7OzJCQU1OLGtCQUFDLE1BQU0sRUFBRTtBQUNiLDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9COzs7eUJBc0JjLGVBQUU7QUFDYiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdCLCtCQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ3JDOzs7dUJBakNRLEtBQUsiLCJmaWxlIjoidG9kb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWxiYW5kYXVsZXUgb24gMTIvMDIvMjAxNi5cbiAqL1xuXG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tICd0b2RvSXRlbSdcblxuZXhwb3J0IGNsYXNzIFRvZG9zIHtcblxuICAgIHRvZG9zID0gW107XG4gICAgaW5wdXRUZXh0ID0gJyc7XG4gICAgZmlsdGVyID0gJ2FsbCc7XG5cbiAgICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBwYXJhbXMuZmlsdGVyO1xuICAgIH1cblxuXG4gICAgYWRkVG9kbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb0l0ZW0odGhpcy5pbnB1dFRleHQpO1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNsZWFyVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLmdldFJlbWFpbmluZygpO1xuICAgIH1cblxuICAgIGdldFJlbWFpbmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcih0ID0+ICF0LmNvbXBsZXRlZClcbiAgICB9XG5cbiAgICBnZXQgbmJSZW1haW5pbmcoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2plIHN1aXMgw6l2YWx1w6knKVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZW1haW5pbmcoKS5sZW5ndGg7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
