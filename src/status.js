/**
 * Created by albandauleu on 14/01/16.
 */
export class StatusValueConverter {
    toView(array, filter) {
        switch(filter){
            case 'completed':
                return array.filter(function(todo){
                    return todo.completed;
                });
                break;
            case 'active':
                return array.filter(function(todo){
                    return !todo.completed;
                });
                break;
            default:
                return array;
        }
    }
}