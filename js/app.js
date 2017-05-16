document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelectorAll('.button');
    const actions = ['+', '-', 'x', '÷'];
    let decimal = false;

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function (e) {
            e.preventDefault();
            let input = document.querySelector('.area_result');
            let inputVal = input.innerHTML;
            let newVal = this.innerHTML;

            if (newVal == 'C') {
                input.innerHTML = '';
                decimal = false;

            } else if (newVal == '=') {
                let equation = inputVal;
                let lastEl = equation[equation.length - 1];
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                console.log(equation);

                if (actions.indexOf(lastEl) > -1 || lastEl == '.') {
                    equation = equation.replace(/.$/, '');
                }

                if (equation) {
                    input.innerHTML = eval(equation);
                }
                decimal = false;

            } else if (actions.indexOf(newVal) > -1) {
                let lastEl = inputVal[inputVal.length - 1];

                if (inputVal != '' && actions.indexOf(lastEl) == -1) {
                    input.innerHTML += newVal;
                } else if (inputVal == '' && newVal == '-') {
                    input.innerHTML += newVal;
                }

                if (actions.indexOf(lastEl) > -1 && inputVal.length > 1) {
                    input.innerHTML = inputVal.replace(/.$/, newVal);
                }
                decimal = false;
            } else if (newVal == '.') {
                if (!decimal) {
                    input.innerHTML += newVal;
                    decimal = true;
                }
            } else {
                input.innerHTML += newVal;
            }
        });
    }
    
    
 
      var app = angular.module('toDo',[]).
    controller('todoController', ['$scope', function($scope){
        $scope.todos = [
            
//            {'title':'', 'done':''}
        ];
        
        $scope.addTodo = function(){
            $scope.todos.push({'title': $scope.newTodo, 'done': false})
            $scope.newTodo = ''
            
            
            
        }
        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
                return !item.done
            })
        }
        
        
    }])
     
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
