(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('vstdaFactory', vstdaFactory);

    vstdaFactory.$inject = ['$http', '$q', 'todoApiUrl'];

    /* @ngInject */
    function vstdaFactory($http, $q, todoApiUrl) {
        var service = {
            getToDoList: getToDoList,
            postToDoList: postToDoList,
            putToDoList: putToDoList,
            deleteToDoList: deleteToDoList

        };
        return service;

        ////////////////

        function getToDoList() {

            var defer = $q.defer();
            // Get json file and alerting out if no data present
            $http({
                method: 'GET',
                url: todoApiUrl
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data found :(')
                }

                // error codeg
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }

        function postToDoList(todo) {
            var defer = $q.defer();
            $http({
                    method: 'POST',
                    url: todoApiUrl,

                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    data: todo

                }
                // vm.getToDoList()

            ).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data not added :(')
                }

                // error codeg
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });
            return defer.promise;
        }


        function putToDoList(id, x) {
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: todoApiUrl + '/' + id,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                data: x
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                }

                // error codeg
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });
            return defer.promise;
        }


        function deleteToDoList(id) {
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: todoApiUrl + '/' + id
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data not added :(')
                }

                // error codeg
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });
            return defer.promise;
        }
    }

})();
