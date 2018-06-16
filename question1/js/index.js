var f = (function(){
	for (var i=1; i<3; i++){
		(function(i){
			var url = "https://swapi.co/api/people/"+i+"/"
			var xhr = new XMLHttpRequest()
			xhr.open("GET", url)
			xhr.send(null)

			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4){
					var colum1 =  document.createElement("div")
					colum1.className = "col-sm-6"
					var jsonObject = JSON.parse(xhr.responseText)
					var text_node = document.createTextNode(JSON.stringify(jsonObject, null, 2))
					colum1.appendChild(text_node)
					document.getElementsByClassName('row')[0].appendChild(colum1)		
				}
			};
		})(i)
	}
})()