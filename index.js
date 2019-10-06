var language = ""
var concept = ""

window.onload = ()=>{
	processPath(window.location.hash)
	linkUpdate()
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
}