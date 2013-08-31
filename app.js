angular.module('zapis', []);

function MainController($scope) {
    $scope.bcOdbory = Object.keys(bc_programy);
    $scope.mgrOdbory = Object.keys(mgr_programy);

    $scope.bcProgramy = [];
    $scope.mgrProgramy = [];

    $scope.vybranyOdbor = null;
    $scope.vybranyProgram = null;
    $scope.vybranyRokStudia = null;

    $scope.vybranyBcProgram = null;

    document.getElementById('results').style.display = 'none';
    
    /* programy */
    $scope.nacitajBcProgramy = function() {
        $scope.vybranyOdbor = $scope.vybranyBcOdbor;
        $scope.bcProgramy = bc_programy[$scope.vybranyOdbor];
    };
    $scope.nacitajMgrProgramy = function() {
        $scope.vybranyOdbor = $scope.vybranyMgrOdbor;
        $scope.mgrProgramy = mgr_programy[$scope.vybranyOdbor];
    }

    /* roky studia */
    $scope.nacitajBcRoky = function () {
        $scope.vybranyProgram = $scope.vybranyBcProgram;
        $scope.bcRoky = Object.keys(bc_data[$scope.vybranyProgram]);
    };
    $scope.nacitajMgrRoky = function () {
        $scope.vybranyProgram = $scope.vybranyMgrProgram;
        $scope.mgrRoky = Object.keys(mgr_data[$scope.vybranyProgram]);
    };

    var find = function (type) {
        var data = bc_data;
        $scope.vybranyRokStudia = $scope.vybranyBcRokStudia;
        if (type == 'mgr') {
            data = mgr_data;
            $scope.vybranyRokStudia = $scope.vybranyMgrRokStudia;
        }

        $scope.result = data[$scope.vybranyProgram][$scope.vybranyRokStudia];

        document.getElementById('results').style.display= '';
    };
    $scope.findBc = function() {find('bc');};
    $scope.findMgr = function() {find('mgr');};
};

