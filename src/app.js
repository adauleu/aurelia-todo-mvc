
export class App {

    configureRouter(config, router){
        config.title = 'Todo MVC';
        config.map([
            { route: ['', ':filter'],  name: 'todos',  moduleId: './todos',  nav: true }
        ]);

        this.router = router;
    }
}