export class FilterValueConverter {
    toView(array, filter) {
        switch(filter){
            case 'completed':
                return array.filter(t => t.completed);
                break;
            case 'active':
                return array.filter(t => !t.completed);
                break;
            default:
                return array;
        }
    }
}