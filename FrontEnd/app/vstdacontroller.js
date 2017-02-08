(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('vstdaController', vsdtaController);

    vsdtaController.$inject = ['vstdaFactory'];

    /* @ngInject */
    function vsdtaController(vstdaFactory) {
        var vm = this;
        vm.title = 'vsdtaController';



        ////////////////


        function activate() {

        }
        activate();


        vm.myToDo = [];
        vm.sortType = '';
        vm.enterDate = new Date();
        //  var todo = { "task": vm.task, "priority": vm.priority, "createDate": vm.enterDate };


        vm.getToDoList = function() {

            vstdaFactory.getToDoList().then(
                function(response) {

                    vm.myToDo = response.data;
                    console.log(response.data);

                    // toastr.success('We have Topspots!!');

                }
                // function(error) {
                //     if (error.data) {
                //         toastr.error('There was a problem:' + error);
                //     } else {
                //         toastr.info('no data found :(')
                //     }

                // }


            )
        }
        vm.getToDoList();


        vm.postToDoList = function() {
            var todo = { "task": vm.task, "priority": vm.priority, "createDate": vm.enterDate };
            vstdaFactory.postToDoList(todo).then(
                function(response) {

                    // vm.myToDo = response.data;
                    vm.getToDoList();
                    console.log(vm.myToDo.toDoListEntryId);
                    // toastr.success('We have Topspots!!');

                }
                // function(error) {
                //     if (error.data) {
                //         toastr.error('There was a problem:' + error);
                //     } else {
                //         toastr.info('no data found :(')
                //     }

                // }


            )
            vm.myToDo.push(todo);
        }

        vm.putToDoList = function(id, x) {

            vstdaFactory.putToDoList(id, x).then(
                function(response) {

                    vm.myToDo = response.data;
                    vm.getToDoList();
                    // toastr.success('We have Topspots!!');

                }
                // function(error) {
                //     if (error.data) {
                //         toastr.error('There was a problem:' + error);
                //     } else {
                //         toastr.info('no data found :(')
                //     }

                // }


            )
        }

        vm.deleteToDoList = function(id) {

            vstdaFactory.deleteToDoList(id).then(
                function(response) {

                    vm.getToDoList();
                    // toastr.success('We have Topspots!!');

                }

            )
        }
    }

})();


// function(error) {
//     if (error.data) {
//         toastr.error('There was a problem:' + error);
//     } else {
//         toastr.info('no data found :(')
//     }

// }
