System.register([], function (_export) {
    'use strict';

    var FilterValueConverter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            FilterValueConverter = (function () {
                function FilterValueConverter() {
                    _classCallCheck(this, FilterValueConverter);
                }

                _createClass(FilterValueConverter, [{
                    key: 'toView',
                    value: function toView(array, filter) {
                        switch (filter) {
                            case 'completed':
                                return array.filter(function (t) {
                                    return t.completed;
                                });
                                break;
                            case 'active':
                                return array.filter(function (t) {
                                    return !t.completed;
                                });
                                break;
                            default:
                                return array;
                        }
                    }
                }]);

                return FilterValueConverter;
            })();

            _export('FilterValueConverter', FilterValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxvQkFBb0I7Ozs7Ozs7OztBQUFwQixnQ0FBb0I7eUJBQXBCLG9CQUFvQjswQ0FBcEIsb0JBQW9COzs7NkJBQXBCLG9CQUFvQjs7MkJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDbEIsZ0NBQU8sTUFBTTtBQUNULGlDQUFLLFdBQVc7QUFDWix1Q0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQzsyQ0FBSSxDQUFDLENBQUMsU0FBUztpQ0FBQSxDQUFDLENBQUM7QUFDdEMsc0NBQU07QUFBQSxBQUNWLGlDQUFLLFFBQVE7QUFDVCx1Q0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQzsyQ0FBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO2lDQUFBLENBQUMsQ0FBQztBQUN2QyxzQ0FBTTtBQUFBLEFBQ1Y7QUFDSSx1Q0FBTyxLQUFLLENBQUM7QUFBQSx5QkFDcEI7cUJBQ0o7Ozt1QkFaUSxvQkFBb0IiLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZpbHRlclZhbHVlQ29udmVydGVyIHtcbiAgICB0b1ZpZXcoYXJyYXksIGZpbHRlcikge1xuICAgICAgICBzd2l0Y2goZmlsdGVyKXtcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcih0ID0+IHQuY29tcGxldGVkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcih0ID0+ICF0LmNvbXBsZXRlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
