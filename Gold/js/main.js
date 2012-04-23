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
		
		var checkbox1 = 'no';
		var checkbox2 = 'no';
		var checkbox3 = 'no';
		var checkbox4 = 'no';
		var checkbox5 = 'no';
		var	checkbox6 = 'no';
		var checkbox7 = 'no';
		var checkbox8 = 'no';
		var checkbox9 = 'no';
		
		
			// dirty way of doing checkbox input but it works.
		
			if (getE('inst1').checked){
				(checkbox1) = 'yes';
			}else{
				(checkbox1) = 'no';
			}
			if (getE('inst2').checked){
				(checkbox2) = 'yes';
			}else{
				(checkbox2) = 'no';
			}	
			if (getE('inst3').checked){
				(checkbox3) = 'yes';
			}else{
				(checkbox3) = 'no';
			}	
			if (getE('inst4').checked){
				(checkbox4) = 'yes';
			}else{
				(checkbox4) = 'no';
			}	
			if (getE('inst5').checked){
				(checkbox5) = 'yes';
			}else{
				(checkbox5) = 'no';
			}	
			if (getE('inst6').checked){
				(checkbox6) = 'yes';
			}else{
				(checkbox6) = 'no';
			}	
			if (getE('inst7').checked){
				(checkbox7) = 'yes';
			}else{
				(checkbox7) = 'no';
			}	
			if (getE('inst8').checked){
				(checkbox8) = 'yes';
			}else{
				(checkbox8) = 'no';
			}	
			if (getE('inst9').checked){
				(checkbox9) = 'yes';
			}else{
				(checkbox9) = 'no';
			}		
		
			
		
		
		alert('Your name is ' + name + ' and your bands name is ' + band + ' and your email is ' + email + 
			  ' group selected ' + groups + ' checkbox ' + checkbox1 + ',' + checkbox2 + ',' + checkbox3 +
			',' + checkbox4 + ',' + checkbox5 + ',' + checkbox6 + ',' + checkbox7 + ',' + checkbox8 + 
			',' + checkbox9);
	});	
});



