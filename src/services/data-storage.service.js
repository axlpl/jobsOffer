export const DataStorageService = function ($window) {
    'ngInject';

    this.set = (key, value) => {
        $window.localStorage[key] = JSON.stringify(value);
    };

    this.get = (key) => ($window.localStorage[key] != undefined) ? JSON.parse($window.localStorage[key]) : false;

    this.getAll = () => {
        return Object
            .keys($window.localStorage)
            .map((key) => this.get(key));
    };

    this.remove = (key) => {
        $window
            .localStorage
            .removeItem(key);
    };

    this.clear = () => {
        $window
            .localStorage
            .clear();
    };
}