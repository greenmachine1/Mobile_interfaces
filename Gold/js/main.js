// this is the main java script file for the web-app
// Author: Cory Green
// Date: 03/18/2012
// project: Mobile interfaces

//waiting until the DOM is ready

// function starts running when the dom is ready
window.addEventListener("DOMContentLoaded", function()
{
	// function that gets the element by id and returns it.
	function getE(x)
	{
		var theElement = document.getElementById(x);
		return theElement;
	}

	// upon clicking on the submit button, this will return the actual value submitted!
	// the .value will return the actual value by ID
	$("#submit").click(function()
	{
		console.log(getE('fname').value);
		console.log(getE('bname').value);
		console.log(getE('email').value);
	});	
});



