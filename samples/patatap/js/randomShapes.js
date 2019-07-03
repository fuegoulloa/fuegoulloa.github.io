//empty array to store circles data
	var shapes = [];

	//This double loop creates the circles on the grid
	for(var i = 0; i < 300; i++) {
		
			var shiftX = Math.floor(Math.random() * 1500);
			var shiftY = Math.floor(Math.random() * 1500);
			var r = Math.floor(Math.random() * 30);
			var x = Math.floor(Math.random() * shiftX);
			var y = Math.floor(Math.random() * shiftY);
			var sides = Math.floor(Math.random() * 8);
			
			if (x % 2 === 0 && sides === 3) {
				shapes.push(new Path.RegularPolygon(new Point(x, y), sides, r));	
			} else if (y % 2 == 0 && sides > 3) {
				shapes.push(new Path.RegularPolygon(new Point(x, y), sides, r));	
			} else {
				shapes.push(new Path.Circle(new Point(x, y), r));	
			}
			
	}

	

	var num = shapes.length;

	function generateRandomColors(num) {
		var arr = [];
		for(var i = 0; i < num; i++) {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = 255 //Math.floor(Math.random() * 256);
			var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
			arr.push(rgbColor);
		}
		return arr;
	}

	var colors = generateRandomColors(num);

	//This loop fills all circles with designated color
	for(var i = 0; i < shapes.length; i++)
		{
			shapes[i].fillColor = colors[i];	
		}
