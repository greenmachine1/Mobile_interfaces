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
		
		//sets the checkbox defaults to no
		var checkbox1 = 'no';
		var checkbox2 = 'no';
		var checkbox3 = 'no';
		var checkbox4 = 'no';
		var checkbox5 = 'no';
		var	checkbox6 = 'no';
		var checkbox7 = 'no';
		var checkbox8 = 'no';
		var checkbox9 = 'no';
		
		//calls on the getCheckBoxValue() to get the actual values of the checkboxes
		getCheckBoxValue();
		
	// dirty way of doing checkbox input but it works.
	function getCheckBoxValue()
	{		
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
	}// closing bracket for getcheckboxvalue 
		

		
		alert('Your name is ' + name + ' and your bands name is ' + band + ' and your email is ' + email + 
			  ' group selected ' + groups + ' checkbox ' + checkbox1 + ',' + checkbox2 + ',' + checkbox3 +
				',' + checkbox4 + ',' + checkbox5 + ',' + checkbox6 + ',' + checkbox7 + ',' + checkbox8 + 
				',' + checkbox9);
	});	// closing brackets for submit button function
}); // closing brackets for the DOM function
	
	
	
	
	
	// store in local storage - key and id
	/*function storeData(key)
	{
		// if there is no key this is a brand new item and we need a new key
		if(!key)
		{
			var id					= Math.floor(Math.random() * 1000000001);
		}
		else
		{	
			// set the id to the exsisting key were editing so that it will save over the data
			// the key is the same key that has been passed from the edit submit event handler
			// to the validate function, and then passed here, into the store data function
			id = key;
		}
		// gather up all our form field values and store in an object.
		// object properties contain array with the form label and input values
		getCheckBoxValue();
		var item 				= {};
			item.fname 			= ["Your Name:", getE('fname').value];
			item.bname 			= ["Band Name:", getE('bname').value];
			item.email			= ["Email Address:", getE('email').value];
			item.groups 		= ["Genre:", getE('groups').value];
			item.startdate		= ["Date Requesting: ", getE('startdate').value];
			item.instrument1	= ["1 guitar", instrument1Value];
			item.instrument2	= ["2 guitars", instrument2Value];
			item.instrument3	= ["bass", instrument3Value];
			item.instrument4	= ["drums", instrument4Value];
			item.instrument5	= ["main vocals", instrument5Value];
			item.instrument6	= ["1 backup vocal", instrument6Value];
			item.instrument7	= ["2 backup vocals", instrument7Value];
			item.instrument8	= ["3 backup vocals", instrument8Value];
			item.instrument9	= ["Other Instrument(s)", instrument9Value];
		
			item.other1			= ["Other Info:", getE('other1').value];
			item.tickets		= ["Tickets Wanted", getE('tickets').value];
		// save data into local storage: using stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("info saved!");
		
		
	}*/
/*
			// dirty way of doing checkbox input but it works.
function getCheckBoxValue()
{		
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
}// closing bracket for getcheckboxvalue */


