$(document).ready(function() {
	$.ajax({
		dataType: 'json',
		url: 'rgb/pages/EC27ADE5-89CD-4E58-AB1E-D019170F601C.json',
		success: function(data) {
			console.log(data);
			// data.layers.forEach(layer => {
			// 	console.log(layer.layers);
			// 	(layer.layers || []).forEach(l => {
			// 		console.log();
			// 	});
			// });
		}
	});
});
