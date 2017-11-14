// var game = {
//   player1: true,
//   player2: false,
//   init: function() {
//     console.log('Set up the board.');
//   },
//   move: function(e) {
//     var $bucket = $(e.currentTarget);
//     var bucketIndex = $bucket.data('index');
//     var stoneCount = game.board[bucketIndex];
//     game.board[bucketIndex] = 0;


//     for (var i = 0; i < stoneCount; i++) {
//       game.board[bucketIndex+i+1] += 1;
//     }
//   },
//   board: [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
// }

// game.init()

// $('.bucket').on('click', function(e){
//   game.move(e);
// })