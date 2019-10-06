var language = ""
var concept = ""

window.onload = ()=>{
	processPath(window.location.hash)
	linkUpdate()
	
	var xhttp = new XMLHttpRequest()
	xhttp.open('GET', "https://raw.githubusercontent.com/vishal-pandey/language/master/repo/language.json")
	xhttp.onreadystatechange = ()=>{
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			headMenu(JSON.parse(xhttp.responseText))
			processLink()
		}
	}
	xhttp.send()

	var xhttp1 = new XMLHttpRequest()
	xhttp1.open('GET', "https://raw.githubusercontent.com/vishal-pandey/language/master/repo/concept.json")
	xhttp1.onreadystatechange = ()=>{
		if (xhttp1.readyState == 4 && xhttp1.status == 200) {
			sideMenu(JSON.parse(xhttp1.responseText))
			processLink()
		}
	}
	xhttp1.send()


}


function processLink(){
	var langlink = document.querySelectorAll('[data-link-lang]')
	var conceptlink = document.querySelectorAll('[data-link-concept]')

	for(var llink of langlink){
		llink.onclick = (el) => {
			// console.log(el.path[0].getAttribute('data-link-lang'))
			language = el.path[0].getAttribute('data-link-lang')
			linkUpdate()
		}
	}

	for(var clink of conceptlink){
		clink.onclick = (el) => {
			// console.log(el.path[0].getAttribute('data-link-concept'))
			concept = el.path[0].getAttribute('data-link-concept')
			linkUpdate()
		}
	}
	linkUpdate()
}


function processPath(path){
	let url = path.split("/")
	if (url[1]) {
		language = url[1]
	}
	if (url[2]) {
		concept = url[2]
	}
}

function linkUpdate(){
	let xx = "/"+language+"/"+concept
	window.location.hash = xx;
	// console.log(xx)
	try{
		for(var el of document.querySelectorAll('[data-link-lang]')){
			el.style = "background-color:white;";
		}
		document.querySelector('[data-link-lang="'+language+'"]').style = "background-color:lightgrey;";

		for(var el1 of document.querySelectorAll('[data-link-concept]')){
			el1.style = "background-color:white;";
		}
		document.querySelector('[data-link-concept="'+concept+'"]').style = "background-color:lightgrey;";

	}catch(e){
		console.log(e)
	}
}

function headMenu(links){
	for(var i of links){
		document.querySelector(".languages").insertAdjacentHTML('beforeend', '<span class="button" data-link-lang="'+i+'">'+i.charAt(0).toUpperCase() + i.slice(1)+'</span>')
	}
}

function sideMenu(links){
	for(var i of links){
		document.querySelector(".sidebar").insertAdjacentHTML('beforeend', '<span class="button" data-link-concept="'+i+'">'+i.charAt(0).toUpperCase() + i.slice(1)+'</span>')
	}
}

