/**
 * Created with IntelliJ IDEA.
 * User: Tim
 * Date: 5/10/16
 * Time: 9:56 PM
 * To change this template use File | Settings | File Templates.
 */
gameOfLifeApp.controller('GameOfLifeController', ['$scope', function($scope) {
    var gameOfLife = this;

    //init game of life board
    gameOfLife.board = [];
    for (var i = 0; i < 39; i++){
        var row = []
        for (var j = 0; j < 50; j++){
            row.push(Math.floor(Math.random() * 2));
        }
        gameOfLife.board.push(row);
    }

    gameOfLife.nextStep = function() {
        gameOfLife.boardNext = new Array(gameOfLife.board.length);
        for (var i = 0; i < gameOfLife.board.length; i++) {
            gameOfLife.boardNext[i] = new Array(gameOfLife.board[i].length);
        }
        for (var x = 0; x < gameOfLife.board.length; x++) {
            for (var y = 0; y < gameOfLife.board[x].length; y++) {
                var n = 0;
                for (var dx = -1; dx <= 1; dx++) {
                    for (var dy = -1; dy <= 1; dy++) {
                        if ( dx == 0 && dy == 0){}
                        else if (typeof gameOfLife.board[x+dx] !== 'undefined'
                            && typeof gameOfLife.board[x+dx][y+dy] !== 'undefined'
                            && gameOfLife.board[x+dx][y+dy]) {
                            n++;
                        }
                    }
                }
                var c = gameOfLife.board[x][y];
                switch (n) {
                    case 0:
                    case 1:
                        c = 0;
                        break;
                    case 2:
                        break;
                    case 3:
                        c = 1;
                        break;
                    default:
                        c = 0;
                }
                gameOfLife.boardNext[x][y] = c;
            }
        }
        gameOfLife.board = gameOfLife.boardNext.slice();
        $scope.$apply(); //Needed to tell directive the board has updated
    }

    setInterval(gameOfLife.nextStep ,500);
}])