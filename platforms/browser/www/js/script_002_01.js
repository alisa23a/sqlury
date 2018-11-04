function el(id){return document.getElementById(id);}

(function() {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            // canvas.width = window.innerWidth;
			// canvas.width = (window.innerHeight - 100);
            canvas.height = (window.innerHeight - 100);
			canvas.width = (window.innerHeight - 100);

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {

		
		
		function readImage() {
			if ( this.files && this.files[0] ) {
				var FR= new FileReader();
				FR.onload = function(e) {
				   var img = new Image();
				   
				   
				   img.addEventListener("load", function() {

					 var props;
					 var picheight;
					 var picwidth;
					 var picX;
					 var picY;
					 
					 if (img.width <= img.height) {
						props = (img.width / img.height);
						picheight = (window.innerHeight - 100);
						picwidth = (picheight * props);
						picX = (picheight - picwidth) / 2;
						picY = 0;
					 } else if (img.width > img.height){
						props = (img.height / img.width );
						picwidth = (window.innerHeight - 100);
						picheight = (picwidth * props);
						picX = 0;
						picY = (picwidth - picheight) / 2;
						
					 }
					 
					 context.clearRect(0, 0, canvas.width, canvas.height);
					 context.drawImage(img, picX, picY, picwidth, picheight);
				   });
				   img.src = e.target.result;
				};       
				FR.readAsDataURL( this.files[0] );
			}
		}

		el("fileUpload").addEventListener("change", readImage, false);
	
	
    }
})();