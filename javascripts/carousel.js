(function($){
    var img_index = 0;
    var img_len = 0;
    var paused = false;

    $.fn.carousel = function(captionSelector, duration){
	$this = $(this);
	$this.find("div").hide();

	$this.children("div").eq(img_index).stop().slideDown(); // Show the first one
	img_index = 1; // Move to the next one
	img_len = $this.find("div").length;

	// Click to go to next and pause on hover
	$this.find("img").click(function(e){
	    nextImage();
	});

	$this.find("img").mouseenter(function(e){ paused = true;});
	$this.find("img").mouseout(function(e){ paused = false;});

	var carousel = setInterval(function(){
	    if (paused) return false;
	    nextImage();
	}, duration);

	var nextImage = function(){
	    $this.find("div").slideUp() // Remove all the images
	    $this.children("div").eq(img_index).stop().slideDown(); // Stop the animation for the one that is to be shown

	    // Change the caption according to the image's title
	    $(captionSelector).text($this.children("div").eq(img_index).find("img").attr("title"));

	    // Increment index and %
	    img_index += 1;
	    img_index = (img_index >= img_len) ? 0 : img_index;
	}
    };

}(jQuery));
