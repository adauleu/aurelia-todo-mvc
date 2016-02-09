System.register([], function (_export) {
    'use strict';

    var StatusValueConverter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            StatusValueConverter = (function () {
                function StatusValueConverter() {
                    _classCallCheck(this, StatusValueConverter);
                }

                _createClass(StatusValueConverter, [{
                    key: 'toView',
                    value: function toView(array, filter) {
                        switch (filter) {
                            case 'completed':
                                return array.filter(function (todo) {
                                    return todo.completed;
                                });
                                break;
                            case 'active':
                                return array.filter(function (todo) {
                                    return !todo.completed;
                                });
                                break;
                            default:
                                return array;
                        }
                    }
                }]);

                return StatusValueConverter;
            })();

            _export('StatusValueConverter', StatusValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFHYSxvQkFBb0I7Ozs7Ozs7OztBQUFwQixnQ0FBb0I7eUJBQXBCLG9CQUFvQjswQ0FBcEIsb0JBQW9COzs7NkJBQXBCLG9CQUFvQjs7MkJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDbEIsZ0NBQU8sTUFBTTtBQUNULGlDQUFLLFdBQVc7QUFDWix1Q0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQzlCLDJDQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7aUNBQ3pCLENBQUMsQ0FBQztBQUNILHNDQUFNO0FBQUEsQUFDVixpQ0FBSyxRQUFRO0FBQ1QsdUNBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQUksRUFBQztBQUM5QiwyQ0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUNBQzFCLENBQUMsQ0FBQztBQUNILHNDQUFNO0FBQUEsQUFDVjtBQUNJLHVDQUFPLEtBQUssQ0FBQztBQUFBLHlCQUNwQjtxQkFDSjs7O3VCQWhCUSxvQkFBb0IiLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGFsYmFuZGF1bGV1IG9uIDE0LzAxLzE2LlxuICovXG5leHBvcnQgY2xhc3MgU3RhdHVzVmFsdWVDb252ZXJ0ZXIge1xuICAgIHRvVmlldyhhcnJheSwgZmlsdGVyKSB7XG4gICAgICAgIHN3aXRjaChmaWx0ZXIpe1xuICAgICAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKHRvZG8pe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
