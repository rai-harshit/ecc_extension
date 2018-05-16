console.log("Waiting for page data...");
var page_data = document.body.innerText;
console.log(page_data);
// document.getElementsByTagName("body")[0].style.display = "none";
console.log("Received page data.");

setTimeout(()=>{
	console.log("Processing finished. Displaying the page now...");
	const body_data = document.getElementsByTagName("body")[0];
	// body_data.style.backgroundColor = "red";
	body_data.style.display = "initial";
},5000)
