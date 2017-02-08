(function() {
    'use strict';

    angular
        .module('myApp', [])
        .value('todoApiUrl', 'http://localhost:51321/api/ToDoListEntries')
})();
