app.controller('MainController', ['$scope', function($scope) {
  $scope.homeBuckets = [
    { index: 0,
      count: 4
    }, 
    { index: 1,
      count: 4
    }, 
    { index: 2,
      count: 4
    },
    { index: 3,
      count: 4
    },
    { index: 4,
      count: 4
    },
    { index: 5,
      count: 4
    },
    { index: 6,
      count: 0,
      homeStore: true
    },
    { index: 7,
      count: 4
    }, 
    { index: 8,
      count: 4
    }, 
    { index: 9,
      count: 4
    },
    { index: 10,
      count: 4
    },
    { index: 11,
      count: 4
    },
    { index: 12,
      count: 4
    },
    { index: 13,
      count: 0,
      opponentStore: true
    },
  ]
  $scope.opponentsMove = false;
  $scope.goAgain = false;
  $scope.homeMove = function(index) {
    $scope.opponentsMove = false;
    var originalIndex = index;
    var start = index;
    var count = $scope.homeBuckets[index].count;
    while (count > 0) {
      $scope.homeBuckets[start+1].count += 1;
      start ++;
      count --;
      if (start == 6 && count == 0) {
        $scope.goAgain = true;
      }
      else {
        $scope.goAgain = false;
      }
    }
    $scope.homeBuckets[originalIndex].count = 0;
    if (!$scope.goAgain) {
      $scope.opponentMove();
    }
  }
  $scope.opponentMove = function() {
    $scope.opponentsMove = true;
    var randomIndex = Math.floor(Math.random()*(12-8)+7);
    console.log(randomIndex)
    console.log('******************')
    var originalIndex = randomIndex;
    var start = randomIndex;
    var count = $scope.homeBuckets[randomIndex].count;

    // if (count == 0) {
    //   randomIndex = Math.floor(Math.random()*(12-8)+7);
    // }
    while (count > 0) {
      $scope.homeBuckets[start+1].count += 1;
      start ++;
      count --;
      if (start == 13 && count == 0) {
        $scope.opponentMove();
      }
      if (start == 13 && count > 0) {
        start = -1;
      }
      else {
        $scope.opponentsMove = false;
      }
    }
    $scope.homeBuckets[originalIndex].count = 0;
  }
}]);