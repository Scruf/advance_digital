//I am bit rusty on JavaScript because I've been in Python world for too long
//But I tried my best to implement
var f = (function(){
	//We need to make two calls so we use for loop
	for (var i=1; i<3; i++){
		(function(i){
			//iterate and call function with value i to get different urls
			var url = "https://swapi.co/api/people/"+i+"/"
			//Initialize xhr method to make a call to API
			var xhr = new XMLHttpRequest()
			//Call url 
			xhr.open("GET", url)
			//Send null since its a get and it does not expect any headers
			xhr.send(null)
			//Since its async call will create a callback
			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4){
					//Creaate div element where we will store text
					var colum1 =  document.createElement("div")
					//Assign col-sm-6 class to div
					colum1.className = "col-sm-6"
					//Parse string into dictionary
					var jsonObject = JSON.parse(xhr.responseText)
					var text_node = document.createTextNode(JSON.stringify(jsonObject, null, 2))
					colum1.appendChild(text_node)
					//Apend this element to row
					document.getElementsByClassName('row')[0].appendChild(colum1)		
				}
			};
		})(i)
	}
})()