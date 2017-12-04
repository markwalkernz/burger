// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

	// function when eat burger button is clicked
	$(".eat-burger").on("click", function(event) {

		// set id and new burger values
		var id = $(this).data("id");
		var newBurgerValues = {devoured: 1};

		// Send the PUT request.
	    $.ajax("/api/burgers/" + id, {
	      type: "PUT",
	      data: newBurgerValues
	    }).then(function() {
	        console.log("changed id " + id);

	        // Reload the page to get the updated list
	        location.reload();
		});
	});

	// function when order burger button is clicked
	$(".create-form").on("submit", function(event) {
    
	    // prevent default action on a submit event.
	    event.preventDefault();

	    // get the burger name from the html form
	    var newBurger = {
	    	burger_name: $("#burger_name").val().trim()
	    };

	    // Send the POST request.
	    $.ajax("/api/burgers", {
	      type: "POST",
	      data: newBurger
	    }).then(function() {
	        console.log("created new burger");

			// Reload the page to get the updated list
			location.reload();
		});
	});
});