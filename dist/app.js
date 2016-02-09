System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var computedFrom, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Todo MVC';
                        config.map([{ route: ['', ':filter'], name: 'todos', moduleId: './todos', nav: true }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0JBR2EsR0FBRzs7Ozs7Ozs7NkNBSFIsWUFBWTs7O0FBR1AsZUFBRzt5QkFBSCxHQUFHOzBDQUFILEdBQUc7Ozs2QkFBSCxHQUFHOzsyQkFFRyx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDO0FBQzNCLDhCQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUMxQiw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFHLElBQUksRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQy9FLENBQUMsQ0FBQzs7QUFFSCw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7cUJBQ3hCOzs7dUJBVFEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ1RvZG8gTVZDJztcbiAgICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgICB7IHJvdXRlOiBbJycsICc6ZmlsdGVyJ10sICBuYW1lOiAndG9kb3MnLCAgbW9kdWxlSWQ6ICcuL3RvZG9zJywgIG5hdjogdHJ1ZSB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
