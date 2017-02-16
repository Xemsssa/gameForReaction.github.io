
		var start = new Date().getTime();

		function showForm() {
			// body...
			var top = (Math.random() * 400);
			var left = Math.floor(Math.random() * 400);

			var width = (Math.random() * 200) + 100;

			if (Math.random() > .5) {
				document.getElementById('form').style.borderRadius = "50%";
			} else {
				document.getElementById('form').style.borderRadius = "0";
			}
			
			document.getElementById('form').style.backgroundColor = getRandomColor();

			document.getElementById('form').style.width = width + "px";
			document.getElementById('form').style.height = width + "px";

			document.getElementById('form').style.top = top + "px";
			document.getElementById('form').style.left = left + "px";

			document.getElementById('form').style.display = 'block';

			start = new Date().getTime();
		}

		function setTime() {
			setTimeout(showForm, Math.random() * 2000) ;
		}

		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split("");
			var color = '#';

			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}

			// alert(color);
			return color;
		}

		document.getElementById('form').onclick = function () {
			var stop = new Date().getTime();

			var time = (stop - start) / 1000;
			// alert(time);
			document.getElementById('form').style.display = "none";

			document.getElementById('reaction').innerHTML = time;

			setTime();
		}