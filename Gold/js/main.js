/*
	Could not implement my json data, for some reason it was just not working.  With time
	Ill get it though. :D

*/
var parseMyInfo = function(data){

// this is where the data can be parsed into a readable object for my json info.
	console.log(data);
};





/*
(function(storage)
{
	// need a unique key
	var appName = "gig.bag";
	
	var canaryKey = appName + ".installed";
	
	// If this key exsists then we can bail out, as we already have initialized
	if (storage.getItem(canaryKey) !== null)
	{
		return;
	}
	
	// otherwise, we need to populate local storage with dummy data!
	var initialData = [
		{
			"fname": "Jon",
			"bname": "Slayer",
			"email": "your@email.com",
			"startdate": "2012-12-10",
			"groups": "rock"
		}
];
}
// read data will be more complex, but this is a simple example
var populate = function(data)
{
	for (var i in data)
	{
		var item = data[i];
		var key = item.id;
		var value = JSON.stringify(item);
		storage.setItem(key, value);
	}
}
*/




$(document).ready(function(){

	var rbform = $('#bandInfo')

	rbform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = rbform.serializeArray();
			parseMyInfo(data);
		}
	});
});
