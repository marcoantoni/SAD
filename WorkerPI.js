self.addEventListener('message', function(e) {

	var r = 1;
	var points_total = 0;
	var points_inside = 0;
	var status = false;
	console.log("worker = " + e.data.attempts);
	while (points_total != e.data.attempts) {
		points_total++;

		let x = Math.random();
        let y = Math.random();

        if (Math.pow(x, 2) + Math.pow(y, 2) <= 1)
            points_inside++;


		//if (points_total % 10000 == 0)
		//	console.log(points_inside + "/" + points_total + " pi == " + (4 * points_inside / points_total));
	
	}

	var pi = (4 * points_inside / points_total);
	status = true;
	this.postMessage({ 
		'points_inside': points_inside,
		'points_total': points_total,
		'pi': pi
	});
	

}, false);

