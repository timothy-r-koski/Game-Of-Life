/**
 * Created with IntelliJ IDEA.
 * User: Tim
 * Date: 5/11/16
 * Time: 7:43 AM
 * To change this template use File | Settings | File Templates.
 */
gameOfLifeApp.directive('gameOfLifeBoard', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/gameOfLifeBoard.html',
        scope: {
            board: '='
        }
    };
});