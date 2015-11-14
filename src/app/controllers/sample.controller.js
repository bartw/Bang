(function() {
	'user strict';
	
	angular
		.module("bang")
		.controller("SampleController", SampleController);
		
	function SampleController() {
		var sampleVm = this;
		
		sampleVm.color = "green";
	}
})();