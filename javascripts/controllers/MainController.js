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
  $scope.homeMove = function(index) {
    var originalIndex = index;
    var start = index;
    var count = $scope.homeBuckets[index].count;
    while (count > 0) {
      $scope.homeBuckets[start+1].count += 1;
      start ++;
      count --;
    }
    $scope.homeBuckets[originalIndex].count = 0;
  }
}]);