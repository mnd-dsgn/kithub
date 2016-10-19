Gradebook.controller("StudentDestroyCtrl", ["$scope", "course", "_", "StudentService", "$rootScope", function($scope, course, _, StudentService, $rootScope) {

	$scope.course = course;
	$scope.students = course.students;

	$scope.removeStudent = function(studentId) {
		if(confirm('Are you sure you want to remove that student? All of there submissions will also be deleted')) {
			for(var i = 0; i < $scope.students.length; i++) {
				//Because one is a string and one is a number, '==' will check for equality without type
				if($scope.students[i].id == studentId) {
					$scope.students.splice(i, 1);
					StudentService.removeStudent($scope.students[i]).then(function(removedStudent) {
						$rootScope.$broadcast("student.deleted", removedStudent);
					})
				}
			}
		}
	}

}]);