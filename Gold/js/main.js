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
		// calls on the getE() and passes in the id name value and returns the actual value.
		var name = (getE('fname').value);
		var band = (getE('bname').value);
		var email = (getE('email').value);
		var groups = (getE('groups').value);
		
		var checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
			checkbox6, checkbox7, checkbox8, checkbox9;
		
		
		// dirty way of doing checkbox input but it works.
		for(var i = 1; i < 10; i++)
		{
			if ('inst'+i.checked === true){
				('checkbox'+i) == 'yes';
			}else{
				('checkbox'+i) == 'no';
			}	
		}
			
		
		
		alert('Your name is ' + name + ' and your bands name is ' + band + ' and your email is ' + email + 
			  ' group selected ' + groups + ' checkbox ' + checkbox1 + ',' + checkbox2 + ',' + checkbox3 +
			',' + checkbox4 + ',' + checkbox5 + ',' + checkbox6 + ',' + checkbox7 + ',' + checkbox8 + 
			',' + checkbox9);
	});	
});



